{
  buildNpmPackage,
  google-fonts,
}:
buildNpmPackage {
  pname = "homepage";
  version = "0.1.0";

  src = ./.;
  # needs to be updated everytime you update npm dependencies
  npmDepsHash = "sha256-MRBC45iq5A4H2kx13qq/bSo+x9Pu2B98y5cpWlSq+5Y=";

  # install fonts
  preBuild = ''
    mkdir -p app/fonts
    cp "${
      google-fonts.override { fonts = [ "Inter" ]; }
    }/share/fonts/truetype/Inter[opsz,wght].ttf" app/fonts/Inter.ttf
  '';

  # move exported website to $out
  installPhase = ''
    runHook preInstall

    mkdir -p $out
    cp -r .next/standalone $out/homepage
    cp -r public $out/homepage/public
    cp -r .next/static $out/homepage/.next/static

    runHook postInstall
  '';
}
