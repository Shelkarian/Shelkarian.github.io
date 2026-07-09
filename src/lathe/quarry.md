перенесено

# Каменоломня
> Обрабатывает камень в плитки и блоки.

## Что производит

Каменные и мраморные плитки пола (несколько десятков вариантов кладки).

## Навык

[Обработка камня](../skills/stone-processing.md). Без полного освоения станок не работает.

## Материалы

Камень ([камень](../material/stone.md)) — приём по тегу `MedievalQuarryMaterialStorage`.

## Реализация

- Прототип: `Structures/Machine/lathe.yml` (`MedievalQuarry`, parent `MedievalBaseLathe`).
- Плата: `MedievalQuarryDetail`. Пак: `MedievalQuarryPack`.
- Гейт: `NeededSkillForInteract` → `MedievalStoneProcessing`. Постройка: граф `MedievalMachine`.
