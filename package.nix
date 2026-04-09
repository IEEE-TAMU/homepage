{
  lib,
  buildNpmPackage,
  importNpmLock,
  google-fonts,
}:
buildNpmPackage (finalAttrs: {
  pname = "homepage";
  version = "0.1.0";

  src = lib.fileset.toSource {
    root = ./.;
    fileset = lib.fileset.intersection (lib.fileset.fromSource (lib.sources.cleanSource ./.)) (
      lib.fileset.unions [
        ./app
        ./components
        ./lib
        ./public
        ./package.json
        ./package-lock.json
        ./next.config.ts
        ./next-sitemap.config.js
        ./postcss.config.mjs
        ./tsconfig.json
        ./components.json
      ]
    );
  };

  npmDeps = importNpmLock { npmRoot = finalAttrs.src; };
  npmConfigHook = importNpmLock.npmConfigHook;

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
})
