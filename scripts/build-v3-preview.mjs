import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const base = join(root, 'tilda-landing/v3');
const docsV3 = join(root, 'docs/v3');

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
  '02-steps.html',
  '03-problems.html',
  '04-systems.html',
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
<title>Idea Desk v3 — синий timeline</title>
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
<div class="tg-preview-bar">Idea Desk v3 (синий timeline) · сборка ${buildDate} (${buildId}) · <a href="../">v1 лендинг</a> · <a href="../v2/">v2 sage</a> · <a href="./blocks/">блоки T123</a></div>
${body}
</body>
</html>
`;

mkdirSync(docsV3, { recursive: true });
writeFileSync(join(docsV3, 'index.html'), html, 'utf-8');

const docsAssets = join(root, 'docs/assets');
mkdirSync(docsAssets, { recursive: true });
const heroImage = join(root, 'assets/idea-desk-hero-dashboard-v8.png');
copyFileSync(heroImage, join(docsAssets, 'idea-desk-hero-dashboard.png'));

const blocksDir = join(docsV3, 'blocks');
mkdirSync(blocksDir, { recursive: true });

const entries = [];
for (const name of blocks) {
  const blockBody = readFileSync(join(base, name), 'utf-8').trimStart();
  const stamped = `<!-- Idea Desk v3 T123 · ${name} · build ${buildId} · ${buildDate} -->\n` + blockBody;
  writeFileSync(join(blocksDir, name), stamped, 'utf-8');
  entries.push({ name, href: `./${name}` });
}

writeFileSync(
  join(blocksDir, 'index.html'),
  `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Блоки Idea Desk v3 для Tilda</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 720px; margin: 0 auto; padding: 24px 20px 48px; color: #1c1f22; line-height: 1.5; }
    h1 { font-size: 1.35rem; }
    .meta { color: #5f6870; font-size: 14px; margin-bottom: 24px; }
    ul { padding-left: 1.2rem; }
    li { margin: 8px 0; }
    a { color: #3669fd; }
  </style>
</head>
<body>
  <h1>Idea Desk v3 — блоки T123</h1>
  <p class="meta">Сборка ${buildDate} · <code>${buildId}</code></p>
  <p>Стиль: синий timeline 01–06, TildaSans. Отдельная страница Tilda или A/B с v1/v2.</p>
  <ul>
    ${entries.map(({ name, href }) => `<li><a href="${href}">${name}</a></li>`).join('\n    ')}
  </ul>
  <p><a href="../">Превью v3</a> · <a href="../../">Лендинг v1</a> · <a href="../../v2/">v2 sage</a></p>
</body>
</html>
`,
  'utf-8',
);

console.log('built Idea Desk v3:', blocks.join(', '));
