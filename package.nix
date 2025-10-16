{
  buildNpmPackage,
  google-fonts,
}:
buildNpmPackage {
  pname = "homepage";
  version = "0.1.0";

  src = ./.;
  # needs to be updated everytime you update npm dependencies
  npmDepsHash = "sha256-ip/xS84i98R6himZZP3urliDdVnfQrT/fQa1qvtx48w=";

  # install fonts
  preBuild = ''
    cp "${
      google-fonts.override { fonts = [ "Inter" ]; }
    }/share/fonts/truetype/Inter[opsz,wght].ttf" app/Inter.ttf
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
