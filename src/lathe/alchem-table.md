перенесено

# Алхимический стол
> Верстак алхимика для приготовления снадобий.

## Что производит

Работа с реагентами через интерфейс ChemMaster: розлив в склянки, прессование таблеток, разделение
и перенос растворов. Это не станок-lathe с паком рецептов, а рабочий интерфейс (`ActivatableUI` +
буфер).

## Навык

[Алхимия](../skills/alchemy.md). Без полного освоения стол не активируется
(`NeededSkillForInteract` → `MedievalAlchem`).

## Материалы

Реагенты и растворы (через буфер), а не `MaterialStorage`.

## Реализация

- Прототип: `Structures/Machine/alchem_table.yml` (`MedievalAlchemTable`).
- Постройка: граф `MedievalMachine` (деталь `MedievalAlchemTableDetail` — со стола плотника).
