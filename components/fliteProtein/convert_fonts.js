const fs = require("fs");
const opentype = require("opentype.js");

// Load the OTF font
opentype.load("Degular.otf", function (err, font) {
  if (err) {
    console.error("Font could not be loaded:", err);
    return;
  }
  // Convert font data to JSON format
  const jsonData = JSON.stringify(font);
  // Save it to a file
  fs.writeFileSync("Degular.json", jsonData);
  console.log("Font converted successfully to Degular.json");
});
