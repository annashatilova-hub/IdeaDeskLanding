# Карта продукта Idea Desk

Отдельная страница Tilda: **схема процесса**, роли, путь одной идеи.

- **Постановка:** [docs/tz-product-map.md](../../docs/tz-product-map.md)
- **URL на Tilda:** `https://lite-istock.tilda.ws/karta`
- **Превью (GitHub Pages):** `/map/` после `npm run build:map`

## Блоки (порядок на странице)

| Файл | Содержание |
|------|------------|
| `01-map-hero.html` | Вступление, ссылки на лендинг и заявку |
| `02-map-flow.html` | Главная схема: Idea Desk → istock |
| `03-map-roles.html` | Роли; дизайнер и конструктор раздельно |
| `04-map-idea-journey.html` | Путь одной идеи |
| `05-map-cta.html` | Заявка |

## Сборка на Tilda

1. Создайте страницу **«Карта»**, alias **`karta`**
2. На каждый блок — **T123**, скопируйте код из `tilda-landing/map/` или `docs/map/blocks/`
3. Отступы блоков: **0px**
4. SEO Title: `Idea Desk — карта процесса разработки коллекции`
5. На лендинге `/idea-desk` добавьте в меню: **Как устроено** → `/karta`

## Локальная сборка превью

```bash
npm run build:map
open docs/map/index.html
```
