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

- База станков: [Resources/Prototypes/_Respiral/Entities/Structures/Machine/base_machine.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Entities/Structures/Machine/base_machine.yml)
- Прототипы станков: [Resources/Prototypes/_Respiral/Entities/Structures/Machine/lathe.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Entities/Structures/Machine/lathe.yml)
- Рамы станков: [Resources/Prototypes/_Respiral/Entities/Structures/Machine/frame.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Entities/Structures/Machine/frame.yml)
- Граф постройки станков: [Resources/Prototypes/_Respiral/Construction/Graph/Structure/machine.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Construction/Graph/Structure/machine.yml)
- Рецепты производства: [Resources/Prototypes/_Respiral/Recipe/recipe.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Recipe/recipe.yml)
- Паки рецептов: [Resources/Prototypes/_Respiral/Recipe/packs.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Recipe/packs.yml)
- Названия категорий станков: [Resources/Locale/ru-RU/_respiral/lathe/category.ftl](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Locale/ru-RU/_respiral/lathe/category.ftl)
- Алхимический стол: [Resources/Prototypes/_Respiral/Entities/Structures/Machine/alchem_table.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Entities/Structures/Machine/alchem_table.yml)
- Реакции реагентов: [Resources/Prototypes/_Respiral/Reagents/reaction.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Reagents/reaction.yml)
