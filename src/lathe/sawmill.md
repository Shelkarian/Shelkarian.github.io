перенесено

# Пилорама
> Распускает древесину в доски и заготовки.

## Что производит

Доски и деревянные стержни — базовые заготовки для стройки и стола плотника.

## Навык

[Обработка дерева](../skills/wood-processing.md). Без полного освоения станок не работает.

## Материалы

Древесина ([дерево](../material/wood.md)) — приём по тегу `MedievalSawmillMaterialStorage`.

## Реализация

- Прототип: `Structures/Machine/lathe.yml` (`MedievalSawmill`, parent `MedievalBaseLathe`).
- Плата: `MedievalSawmillDetail`. Пак: `MedievalSawmillPack` (`Recipe/packs.yml`).
- Гейт: `NeededSkillForInteract` → `MedievalWoodProcessing`. Постройка: граф `MedievalMachine`.
