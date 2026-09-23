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
| `03-problems.html` | Знакомо? + 5 болей | T123 |
| `04-how-it-works.html` | 5 этапов Idea Desk + шаг 6 istock (`#flow`) | T123 |
| `07-two-systems.html` | Idea Desk vs istock (`#systems`) | T123 |
| `05-result.html` | Результат (`#result`) | T123 |
| `06-request.html` | Цена + заявка (`#request`) | T123 |

**Порядок на странице:** 01 → 02 → 03 → 04 → **07** → 05 → 06

Список в сборке: `scripts/build-preview.mjs` → массив `blocks`.

## 5. Тексты и прототипы (источник)

| Файл | Назначение |
|---|---|
| [docs/tz-landing.md](./docs/tz-landing.md) | Постановка: структура, тексты, критерии приёмки |
| [docs/landing-prototype/](./docs/landing-prototype/) | 4 HTML-прототипа (v1–v4) |
| `docs/landing-prototype/index-omnidata-inspired.html` | v4 — ориентир для текущих блоков `tilda-landing/` |
| `docs/landing-prototype/index-tilda-style.html` | v3 — минимальные правки live Tilda |

Живая страница: [lite-istock.tilda.ws/idea-desk](https://lite-istock.tilda.ws/idea-desk)

## 6. Карта продукта (`/karta`)

Отдельная страница Tilda — схема процесса, роли, путь одной идеи.

| Файл | Содержание |
|---|---|
| [docs/tz-product-map.md](./docs/tz-product-map.md) | Постановка |
| `tilda-landing/map/*.html` | 5 блоков T123 |
| `docs/map/` | Превью (после `npm run build:map`) |

**Порядок на Tilda:** 01-map-hero → 02-map-flow → 03-map-roles → 04-map-idea-journey → 05-map-cta

**URL:** https://lite-istock.tilda.ws/karta  
**Ссылка с лендинга:** пункт меню «Как устроено» → `/karta`

## 7. Cursor

Открыть папку `IdeaDeskLanding` как отдельный проект → работать с агентом над `tilda-landing/`.

На этом ПК (без Node): можно править HTML вручную; сборка — на GitHub Actions после push.
