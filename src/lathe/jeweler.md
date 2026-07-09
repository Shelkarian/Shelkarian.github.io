перенесено

# Станок ювелира
> Огранка камней и ювелирные изделия.

## Что производит

⚠️ Ничего: пак рецептов пуст (`recipes: []`). Станок существует, но нефункционален.

## Навык

[Ювелирное дело](../skills/jewelry.md). Без полного освоения станок не работает.

## Материалы

Золото и [самоцветы](../material/gems.md) — приём по тегу `MedievalJewelerMaterialStorage`.

## Реализация

- Прототип: `Structures/Machine/lathe.yml` (`MedievalJeweler`, parent `MedievalBaseLathe`).
- Плата: `MedievalJewelerDetail`. Пак: `MedievalJeweler` (пуст).
- Гейт: `NeededSkillForInteract` → `MedievalJewelry`. Постройка: граф `MedievalMachine`.
- **Дыры:** пустой пак рецептов; профессии ювелира нет.
