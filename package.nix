{
  buildNpmPackage,
  google-fonts,
}:
buildNpmPackage {
  pname = "homepage";
  version = "0.1.0";

  src = ./.;
  # needs to be updated everytime you update npm dependencies
  npmDepsHash = "sha256-FwDCRFzmEEjNqQbA5s79rvwotb3JX8Blb1j2x/N0yCo=";

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
