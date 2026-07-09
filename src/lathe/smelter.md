перенесено

# Плавильня
> Переплавляет руду в слитки. Работает на угле.

## Что производит

Слитки: [железо](../material/iron.md), [сталь](../material/steel.md),
[серебро](../material/silver.md), [золото](../material/gold.md),
[мифрил](../material/mithril.md), [адамантит](../material/adamantine.md). Также стеклянные бутыли.

## Навык

[Основы кузнечного дела](../skills/blacksmithing.md). Без полного освоения станок не работает.

## Материалы

Руда + [уголь](../material/coal.md) — приём по тегу `MedievalSmelterMaterialStorage`.
Например, слиток железа = руда железа 200 + уголь 100; сталь = руда железа 300 + уголь 100.

## Реализация

- Прототип: `Structures/Machine/lathe.yml` (`MedievalSmelter`, parent `MedievalBaseLathe`).
- Плата: `MedievalSmelterDetail`. Пак: `MedievalSmelter`.
- Гейт: `NeededSkillForInteract` → `MedievalBasicBlacksmithing`. Постройка: граф `MedievalMachine`.
