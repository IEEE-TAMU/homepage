{
  pkgs ? import <nixpkgs> { },
}:
pkgs.mkShellNoCC {
  packages = [
    pkgs.nodejs
  ];

  shellHook = ''
    mkdir -p ./app/fonts
    cp -L "${
      pkgs.google-fonts.override { fonts = [ "Inter" ]; }
    }/share/fonts/truetype/Inter[opsz,wght].ttf" ./app/fonts/Inter.ttf
  '';
}
