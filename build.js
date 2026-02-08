const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Fungsi untuk copy file
function copyFileSync(source, target) {
  let targetFile = target;
  if (fs.existsSync(target)) {
    if (fs.lstatSync(target).isDirectory()) {
      targetFile = path.join(target, path.basename(source));
    }
  }
  fs.writeFileSync(targetFile, fs.readFileSync(source));
}

// Fungsi untuk copy folder
function copyFolderRecursiveSync(source, target) {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }

  if (fs.lstatSync(source).isDirectory()) {
    const files = fs.readdirSync(source);
    files.forEach((file) => {
      const curSource = path.join(source, file);
      if (fs.lstatSync(curSource).isDirectory()) {
        copyFolderRecursiveSync(curSource, path.join(target, file));
      } else {
        copyFileSync(curSource, target);
      }
    });
  }
}

console.log("🔨 Building Tailwind CSS...");
execSync("npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify", { stdio: "inherit" });

console.log("📁 Creating dist folder...");
if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist");
}

console.log("📄 Copying files...");
copyFileSync("src/index.html", "dist/index.html");
copyFileSync("src/script.js", "dist/script.js");

console.log("🖼️  Copying images...");
copyFolderRecursiveSync("image", "dist/image");

console.log("✅ Build complete!");
