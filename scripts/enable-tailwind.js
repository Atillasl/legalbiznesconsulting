const fs = require('fs')
const { execSync } = require('child_process')
const path = require('path')

const projectRoot = path.resolve(__dirname, '..')
const indexCss = path.join(projectRoot, 'src', 'index.css')

function hasPackage(name) {
  try {
    require.resolve(name, { paths: [projectRoot] })
    return true
  } catch (e) {
    return false
  }
}

if (!hasPackage('tailwindcss')) {
  console.error('tailwindcss not installed. Run `npm install` first.')
  process.exit(1)
}

// Ensure @tailwind directives are present at the top
let content = fs.readFileSync(indexCss, 'utf8')
if (!content.includes('@tailwind base;')) {
  const directives = '@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n'
  content = directives + content
  fs.writeFileSync(indexCss, content, 'utf8')
  console.log('Inserted @tailwind directives into src/index.css')
}

// Run Tailwind build
try {
  console.log('Building Tailwind CSS...')
  execSync('npx tailwindcss -i ./src/index.css -o ./dist/tailwind.css --minify', { stdio: 'inherit', cwd: projectRoot })
  console.log('Tailwind build complete.');
} catch (e) {
  console.error('Tailwind build failed:', e.message)
  process.exit(1)
}
