# Дизайны Idea Desk — сводный список

Все варианты лендинга и связанных страниц в одном месте.

**GitHub Pages (после push):** https://annashatilova-hub.github.io/IdeaDeskLanding/  
**Tilda (боевой):** https://lite-istock.tilda.ws/idea-desk

---

## Быстрая навигация

| Дизайн | Исходники | Превью локально | GitHub Pages |
|--------|-----------|-----------------|--------------|
| Прототипы v1–v4 | `docs/landing-prototype/` | открыть HTML-файлы | — |
| **Лендинг v1 (боевой)** | `tilda-landing/*.html` | `docs/index.html` | `/` |
| **Лендинг v2 sage** | `tilda-landing/v2/` | `docs/v2/index.html` | `/v2/` |
| **Лендинг v3 timeline** | `tilda-landing/v3/` | `docs/v3/index.html` | `/v3/` |
| **Карта продукта** | `tilda-landing/map/` | `docs/map/index.html` | `/map/` |

Сборка превью: `npm run build:preview` · `build:v2` · `build:v3` · `build:map`

---

## 1. Ранние прототипы (HTML, до Tilda-блоков)

Подробнее: [landing-prototype/README.md](landing-prototype/README.md)

| № | Название | Файл | Стиль |
|---|----------|------|--------|
| v1 | Упрощённый B2B | `docs/landing-prototype/index.html` | Простой, синий |
| v2 SaaS | Notion/Linear | `docs/landing-prototype/index-saas.html` | «Продуктовый» SaaS |
| v3 | Стиль Tilda | `docs/landing-prototype/index-tilda-style.html` | Как живая Tilda |
| v4 | Omnidata-inspired | `docs/landing-prototype/index-omnidata-inspired.html` | Ориентир для v1 блоков |

---

## 2. Лендинг v1 — боевые блоки T123 (синий)

| | |
|---|---|
| **Исходники** | `tilda-landing/01-hero.html` … `07-two-systems.html` (7 блоков) |
| **Блоки для Tilda** | `docs/tilda-blocks/` |
| **Превью** | https://annashatilova-hub.github.io/IdeaDeskLanding/ |
| **Tilda** | https://lite-istock.tilda.ws/idea-desk |
| **Стиль** | Синий `#3669FD`, TildaSans |
| **Постановка** | [tz-landing.md](tz-landing.md) |

---

## 3. Лендинг v2 sage — альтернатива по макету ChatGPT

| | |
|---|---|
| **Исходники** | `tilda-landing/v2/` (6 блоков) |
| **Блоки для Tilda** | `docs/v2/blocks/` |
| **Превью** | https://annashatilova-hub.github.io/IdeaDeskLanding/v2/ |
| **Стиль** | Sage-green `#3F5953`, TildaSans, 6 блоков |
| **Описание** | `tilda-landing/v2/README.md` |

---

## 4. Лендинг v3 — синий timeline 01–06

| | |
|---|---|
| **Исходники** | `tilda-landing/v3/` (6 блоков) |
| **Блоки для Tilda** | `docs/v3/blocks/` |
| **Превью** | https://annashatilova-hub.github.io/IdeaDeskLanding/v3/ |
| **Стиль** | Синий `#3669FD`, timeline с номерами 01–06 и стрелками, TildaSans |

**Отличия от v2 sage:**

| v2 sage | v3 timeline |
|---------|-------------|
| Sage `#3f5953` | Синий `#3669FD` |
| Иконка сверху, текст снизу | Номер 01–06 + иконка в одной строке |
| Без стрелок | Горизонтальная линия и стрелки между шагами |
| 5 проблем в сетке 3×2 | 5 карточек с иконкой слева вверху |
| Две системы — компактные карточки | Две большие карточки с иллюстрациями |

---

## 5. Карта продукта `/karta`

| | |
|---|---|
| **Исходники** | `tilda-landing/map/` (5 блоков) |
| **Блоки для Tilda** | `docs/map/blocks/` |
| **Превью** | https://annashatilova-hub.github.io/IdeaDeskLanding/map/ |
| **Постановка** | [tz-product-map.md](tz-product-map.md) |
| **Tilda** | отдельная страница `/karta` (когда опубликована) |

---

## Какую версию когда использовать

| Задача | Версия |
|--------|--------|
| Боевая страница на Tilda сейчас | **v1** |
| A/B: «тёплый» sage-бренд | **v2** |
| A/B: синий timeline по новому макету | **v3** |
| Объяснить продукт глубже (роли, этапы) | **Карта** |
| Согласовать смысл до вёрстки | **Прототипы v1–v4** |

---

## Связанные документы

- [SETUP.md](../SETUP.md) — инструкции по сборке и Tilda
- [README.md](../README.md) — обзор репозитория
- [tz-landing.md](tz-landing.md) — постановка лендинга
- [tz-product-map.md](tz-product-map.md) — постановка карты
