import fs from 'fs';
import path from 'path';

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

try {
  if (fs.existsSync('dist/assets')) {
    copyDir('dist/assets', 'assets');
    console.log('✅ assets/ updated from dist/assets');
  }
  fs.writeFileSync('.nojekyll', '');
  console.log('✅ .nojekyll ensured.');

  // Automatically sync production bundle hashes into root index.html
  if (fs.existsSync('dist/index.html') && fs.existsSync('index.html')) {
    const distHtml = fs.readFileSync('dist/index.html', 'utf-8');
    const jsMatch = distHtml.match(/src=["']\.\/assets\/(index-[^"']+\.js)["']/);
    const cssMatch = distHtml.match(/href=["']\.\/assets\/(index-[^"']+\.css)["']/);
    
    if (jsMatch && cssMatch) {
      let rootHtml = fs.readFileSync('index.html', 'utf-8');
      rootHtml = rootHtml.replace(/\.\/assets\/index-[^"']+\.js/g, `./assets/${jsMatch[1]}`);
      rootHtml = rootHtml.replace(/\.\/assets\/index-[^"']+\.css/g, `./assets/${cssMatch[1]}`);
      fs.writeFileSync('index.html', rootHtml, 'utf-8');
      console.log(`✅ index.html synced with ${jsMatch[1]} and ${cssMatch[1]}`);
    }
  }
} catch (e) {
  console.error('Error during deploy copy:', e);
}
