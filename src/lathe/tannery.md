перенесено

# Дубильня
> Выделывает звериные шкуры в кожу.

## Что производит

Дублёная кожа ([кожа](../material/leather.md)) — материал для одежды, сумок и поясов.

## Навык

[Портное дело](../skills/tailor.md). Без полного освоения станок не работает.

## Материалы

Шкура ([кожа](../material/leather.md)) — приём по тегу `MedievalTanneryMaterialStorage`.

## Реализация

- Прототип: `Structures/Machine/lathe.yml` (`MedievalTannery`, parent `MedievalBaseLathe`).
- Плата: `MedievalTanneryDetail`. Пак: `MedievalTannery`.
- Гейт: `NeededSkillForInteract` → `MedievalTailor`. Постройка: граф `MedievalMachine`.
