# Дерево
> Базовый строительный и ремесленный материал.

## Что это

Сырьё `MedievalRawWood` и обработанная форма `MedievalProcessedWood` (доски).

## Откуда берётся

Рубка деревьев → брёвна (`MedievalLog`) → раскол в сырую древесину.

## Где используется

[Пилорама](../lathe/sawmill.md) (доски, деревянные стержни) и
[стол плотника](../lathe/carpenter-table.md) (утварь, плитки пола, детали станков). Доски идут в
постройки и корпуса машин.

## Реализация

- Прототипы: `Objects/RawMaterials`, `Objects/ProcessedMaterials/materials.yml`
  (`MedievalRawWood`, `MedievalProcessedWood`).
- Доска = `MedievalRawWood` 100 (`MedievalBoardRecipe`). Износ изделий — `Wear`.
