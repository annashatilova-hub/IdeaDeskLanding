import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const base = join(root, 'tilda-landing');
const docs = join(root, 'docs');

function getBuildId() {
  if (process.env.GITHUB_SHA) return process.env.GITHUB_SHA.slice(0, 7);
  try {
    return execSync('git rev-parse --short HEAD', { cwd: root, encoding: 'utf-8' }).trim();
  } catch {
    return String(Date.now());
  }
}

const buildId = getBuildId();
const buildDate = new Date().toISOString().slice(0, 10);

const blocks = [
  '01-hero.html',
  '02-trust-bar.html',
  '03-problems.html',
  '04-how-it-works.html',
  '07-two-systems.html',
  '05-result.html',
  '06-request.html',
];

const body = blocks.map((name) => readFileSync(join(base, name), 'utf-8').trim()).join('\n\n');

const html = `<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
<meta name="build" content="${buildId}">
<title>Idea Desk — управление разработкой коллекций</title>
<link rel="stylesheet" href="https://static.tildacdn.com/css/fonts-tildasans.css">
<style>
  body{margin:0;background:#fff;color:#1c1f22;font-family:'TildaSans',Arial,sans-serif}
  .tg-preview-bar{
    position:sticky;top:0;z-index:9999;
    padding:8px 16px;text-align:center;font-size:13px;font-weight:600;
    background:#3669fd;color:#fff;
    border-bottom:1px solid rgba(255,255,255,.2);
  }
  .tg-preview-bar a{color:#dbeafe}
</style>
</head>
<body>
<div class="tg-preview-bar">Превью Idea Desk · сборка ${buildDate} (${buildId}) · <a href="./map/">карта продукта</a> · <a href="./tilda-blocks/">блоки T123 для Tilda</a></div>
${body}
</body>
</html>
`;

writeFileSync(join(base, 'preview-standalone.html'), html, 'utf-8');
writeFileSync(join(docs, 'index.html'), html, 'utf-8');
writeFileSync(join(docs, 'preview-standalone.html'), html, 'utf-8');

const tildaBlocksDir = join(docs, 'tilda-blocks');
mkdirSync(tildaBlocksDir, { recursive: true });

const tildaBlockEntries = [];
for (const name of blocks) {
  const blockBody = readFileSync(join(base, name), 'utf-8').trimStart();
  const stamped = `<!-- Idea Desk T123 · ${name} · build ${buildId} · ${buildDate} -->\n` + blockBody;
  writeFileSync(join(tildaBlocksDir, name), stamped, 'utf-8');
  tildaBlockEntries.push({ name, href: `./${name}` });
}

writeFileSync(
  join(tildaBlocksDir, 'index.html'),
  `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML-блоки Idea Desk для Tilda</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 720px; margin: 0 auto; padding: 24px 20px 48px; color: #1c1f22; line-height: 1.5; }
    h1 { font-size: 1.35rem; }
    .meta { color: #5f6870; font-size: 14px; margin-bottom: 24px; }
    ul { padding-left: 1.2rem; }
    li { margin: 8px 0; }
    a { color: #3669fd; }
    code { font-size: 13px; background: #f5f7fa; padding: 2px 6px; border-radius: 4px; }
  </style>
</head>
<body>
  <h1>HTML-блоки Idea Desk (T123)</h1>
  <p class="meta">Сборка ${buildDate} · <code>${buildId}</code></p>
  <p>Откройте файл → <strong>Ctrl+A</strong> → скопируйте весь код → вставьте в блок T123 на Tilda.</p>
  <ul>
    ${tildaBlockEntries.map(({ name, href }) => `<li><a href="${href}">${name}</a></li>`).join('\n    ')}
  </ul>
  <p><a href="../">Полный preview лендинга</a></p>
</body>
</html>
`,
  'utf-8',
);

writeFileSync(
  join(docs, '404.html'),
  `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0;url=./">
  <title>Idea Desk</title>
</head>
<body><p><a href="./">Idea Desk — на главную</a></p></body>
</html>
`,
  'utf-8',
);

console.log('built Idea Desk preview:', blocks.join(', '));
