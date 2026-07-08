# Стол плотника
> Изготавливает деревянные изделия и детали станков.

## Что производит

Вёдра, швабры, деревянные кружки, деревянные плитки пола (множество узоров) и **детали станков**
(стол плотника, алхимический стол, измельчитель, жаровня).

## Навык

[Обработка дерева](../skills/wood-processing.md). Без полного освоения станок не работает.

## Материалы

Обработанное дерево — доски ([дерево](../material/wood.md)) — приём по тегу
`MedievalCarpenterTableMaterialStorage`.

## Реализация

- Прототип: `Structures/Machine/lathe.yml` (`MedievalCarpenterTable`, parent `MedievalBaseLathe`).
- Плата: `MedievalCarpenterTableDetail`. Пак: `MedievalCarpenterTable`.
- Гейт: `NeededSkillForInteract` → `MedievalWoodProcessing`. Постройка: граф `MedievalMachine`.
