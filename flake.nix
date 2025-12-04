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
          packages.update-deps-hash = pkgs.writeShellApplication {
            name = "update-deps-hash";
            runtimeInputs = [ pkgs.prefetch-npm-deps ];
            text = ''
              # Get the npmDepsHash from package.nix
              current_hash=$(grep "npmDepsHash" package.nix | sed 's/.*"\(.*\)".*/\1/')

              # Get the new hash using prefetch-npm-deps
              new_hash=$(prefetch-npm-deps package-lock.json)

              # Update the hash in package.nix using | as delimiter to avoid conflicts with /
              sed -i "s|npmDepsHash = \"$current_hash\"|npmDepsHash = \"$new_hash\"|" package.nix

              echo "Updated npmDepsHash from $current_hash to $new_hash"
            '';
          };
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
