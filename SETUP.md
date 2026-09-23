# Idea Desk Landing — настройка

Preview-репозиторий для лендинга Idea Desk (блоки T123 → Tilda).

- **GitHub:** https://github.com/annashatilova-hub/IdeaDeskLanding
- **Preview (после включения Pages):** https://annashatilova-hub.github.io/IdeaDeskLanding/
- **Блоки для Tilda:** `docs/tilda-blocks/` (после сборки)

## 1. GitHub Pages (один раз, в браузере)

1. Repo → **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: **main**, folder: **/docs**
4. Save → подождать 1–2 мин

## 2. Локально (нужен Node.js 20+)

```powershell
git clone https://github.com/annashatilova-hub/IdeaDeskLanding.git
cd IdeaDeskLanding
npm install
npm run build:preview
start docs\index.html
```

## 3. Рабочий цикл

1. Править HTML в `tilda-landing/*.html`
2. `npm run build:preview`
3. Смотреть `docs/index.html` или push → GitHub Pages
4. Копировать из `docs/tilda-blocks/` в блок **T123** на Tilda

## 4. Блоки Idea Desk

| Файл | Содержание | Tilda |
|---|---|---|
| `01-hero.html` | Hero + макет UI | T123 |
| `02-trust-bar.html` | От идеи до ассортимента | T123 |
| `03-problems.html` | Знакомо? + 3 боли | T123 |
| `04-how-it-works.html` | 5 этапов (`#flow`) | T123 |
| `05-result.html` | Результат (`#result`) | T123 |
| `06-request.html` | Цена + заявка (`#request`) | T123 |

Список в сборке: `scripts/build-preview.mjs` → массив `blocks`.

## 5. Тексты (источник)

Прототип v4 и ТЗ в репозитории **idea-desk**:

- `docs/landing-prototype/index-omnidata-inspired.html`
- `docs/tz-landing-lite-istock.md` §10

## 6. Cursor

Открыть папку `IdeaDeskLanding` как отдельный проект → работать с агентом над `tilda-landing/`.

На этом ПК (без Node): можно править HTML вручную; сборка — на машине с `npm`.
