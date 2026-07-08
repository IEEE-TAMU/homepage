{
  pkgs ? import <nixpkgs> { },
}:
pkgs.mkShellNoCC {
  packages = [
    pkgs.nodejs
    pkgs.imagemagick
    pkgs.treefmt
  ];

  shellHook = ''
    mkdir -p ./app/fonts
    if [ ! -f ./app/fonts/Inter.ttf ]; then
      cp -L "${
        pkgs.google-fonts.override { fonts = [ "Inter" ]; }
      }/share/fonts/truetype/Inter[opsz,wght].ttf" ./app/fonts/Inter.ttf
    fi
  '';
}
