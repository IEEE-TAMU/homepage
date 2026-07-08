{

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";
  };

  outputs =
    { flake-parts, ... }@inputs:
    flake-parts.lib.mkFlake { inherit inputs; } {
      systems = [ "x86_64-linux" ];
      perSystem =
        {
          lib,
          config,
          pkgs,
          ...
        }:
        let
          homepage = pkgs.callPackage ./package.nix { };
        in
        {
          formatter = pkgs.nixfmt;
          devShells.default = import ./shell.nix { inherit pkgs; };
          packages = {
            default = homepage;
            inherit homepage;
            docker = pkgs.dockerTools.streamLayeredImage {
              config =
                let
                  port = 3000;
                in
                {
                  WorkingDir = "/share/homepage";
                  Cmd = [
                    (lib.getExe pkgs.nodejs-slim)
                    "server.js"
                  ];
                  ExposedPorts = {
                    "${toString port}/tcp" = { };
                  };
                  Env = [
                    "PORT=${toString port}"
                    "NODE_EXTRA_CA_CERTS=${pkgs.cacert}/etc/ssl/certs/ca-bundle.crt"
                  ];
                };

              name = "homepage";
              tag = "latest";

              contents = pkgs.buildEnv {
                name = "image-root";
                paths = [ homepage ];
              };
            };
          };
          apps = {
            default = config.apps.homepage;
            homepage.program = pkgs.writeShellApplication {
              name = "homepage";
              runtimeInputs = [ pkgs.nodejs-slim ];
              text = "node ${homepage}/share/homepage/server.js";
            };
          };
        };
    };
}
