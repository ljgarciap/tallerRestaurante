/**
 * Validación de Estructura del Proyecto — SIGR
 * Verifica que todos los archivos críticos del proyecto existan.
 */
const fs = require('fs');
const path = require('path');

const required = [
  'index.html',
  'css/styles.css',
  'js/script.js',
  'README.md',
  'CHANGELOG.md',
  'LICENSE.txt',
];

let errors = 0;

console.log('\n[INFO] Validando estructura del proyecto SIGR...\n');

required.forEach(file => {
  const fullPath = path.join(process.cwd(), file);
  if (fs.existsSync(fullPath)) {
    const size = fs.statSync(fullPath).size;
    console.log(`  [OK] ${file.padEnd(25)} (${(size/1024).toFixed(1)} KB)`);
  } else {
    console.log(`  [FAIL] ${file} — ARCHIVO FALTANTE`);
    errors++;
  }
});

// Verificar contenido mínimo de index.html
const html = fs.readFileSync('index.html', 'utf8');
const js   = fs.readFileSync('js/script.js', 'utf8');

console.log('\n[INFO] Verificando contenido de index.html...\n');
[
  [html.includes('<!DOCTYPE'),  'DOCTYPE declaration'],
  [html.includes('styles.css'), 'CSS stylesheet link'],
  [html.includes('script.js'),  'JavaScript file link'],
].forEach(([ok, label]) => {
  if (ok) { console.log(`  [OK] ${label}`); }
  else     { console.log(`  [FAIL] ${label} — NO ENCONTRADO`); errors++; }
});

console.log('\n[INFO] Verificando contenido de js/script.js...\n');
[
  [js.includes('localStorage'),  'localStorage API utilizada'],
  [js.includes('function initApp'), 'función initApp definida'],
  [js.includes('defaultMenuData'),  'datos de menú presentes'],
].forEach(([ok, label]) => {
  if (ok) { console.log(`  [OK] ${label}`); }
  else     { console.log(`  [FAIL] ${label} — NO ENCONTRADO`); errors++; }
});

console.log(`\n${errors === 0 ? '[OK] Validacion completa — sin errores' : `[FAIL] ${errors} error(es) encontrado(s)`}\n`);
process.exit(errors);
