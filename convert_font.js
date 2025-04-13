const fs = require("fs");
const opentype = require("opentype.js");

// ✅ Correct path to your font file
const fontPath = "components/fliteprotein/fonts/Degular.otf";
const outputPath = "components/fliteprotein/fonts/Degular.json";

// Load the OTF font
opentype.load(fontPath, function (err, font) {
  if (err) {
    console.error("❌ Font could not be loaded:", err);
    return;
  }

  // ✅ Extract only necessary data for Three.js (avoiding circular structure error)
  const fontData = {
    familyName: font.names.fullName.en,
    ascender: font.ascender,
    descender: font.descender,
    unitsPerEm: font.unitsPerEm,
    glyphs: Object.fromEntries(
      Object.entries(font.glyphs.glyphs).map(([key, glyph]) => [
        key,
        {
          unicode: glyph.unicode,
          advanceWidth: glyph.advanceWidth,
          path: glyph.path.toSVG(),
        },
      ])
    ),
  };

  // ✅ Ensure the output directory exists
  const outputDir = "components/fliteprotein/fonts/";
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // ✅ Save JSON font file
  fs.writeFileSync(outputPath, JSON.stringify(fontData, null, 2));
  console.log("✅ Font converted successfully to " + outputPath);
});
