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
        { config, pkgs, ... }:
        {
          devShells.default = import ./shell.nix { inherit pkgs; };
          formatter = pkgs.nixfmt-tree;
          packages.default = config.packages.homepage;
          packages.homepage = pkgs.callPackage ./package.nix { };
          packages.docker = pkgs.dockerTools.streamLayeredImage {
            config =
              let
                port = 3000;
              in
              {
                WorkingDir = "/homepage";
                Cmd = [
                  "node"
                  "server.js"
                ];
                ExposedPorts = {
                  "${toString port}/tcp" = { };
                };
                Env = [
                  "PORT=${toString port}"
                  "NODE_EXTRA_CA_CERTS=${pkgs.cacert}/etc/ssl/certs/ca-bundle.crt" # not sure why this isnt being picked up by default
                ];
              };

            name = "homepage";
            tag = "latest";

            contents = pkgs.buildEnv {
              name = "image-root";

              paths = [
                pkgs.nodejs-slim
                config.packages.homepage
                # pkgs.dockerTools.caCertificates # not sure why this isnt being picked up by default
              ];
            };
          };
        };
    };
}
