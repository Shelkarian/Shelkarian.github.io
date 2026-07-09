перенесено

# Костровая жаровня
> Очаг для нагрева колб и котлов.

## Что производит

Нагревает растворы в стоящей сверху таре (`SolutionHeater`) — для алхимических реакций.

## Навык

Нет гейта — работает у любого. **Дыра:** навык [алхимии](../skills/alchemy.md) здесь не требуется.

## Материалы

Тара с раствором, поставленная сверху (не `MaterialStorage`).

## Реализация

- База станков: [Resources/Prototypes/_Respiral/Entities/Structures/Machine/base_machine.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Entities/Structures/Machine/base_machine.yml)
- Прототипы станков: [Resources/Prototypes/_Respiral/Entities/Structures/Machine/lathe.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Entities/Structures/Machine/lathe.yml)
- Рамы станков: [Resources/Prototypes/_Respiral/Entities/Structures/Machine/frame.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Entities/Structures/Machine/frame.yml)
- Граф постройки станков: [Resources/Prototypes/_Respiral/Construction/Graph/Structure/machine.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Construction/Graph/Structure/machine.yml)
- Рецепты производства: [Resources/Prototypes/_Respiral/Recipe/recipe.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Recipe/recipe.yml)
- Паки рецептов: [Resources/Prototypes/_Respiral/Recipe/packs.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Recipe/packs.yml)
- Названия категорий станков: [Resources/Locale/ru-RU/_respiral/lathe/category.ftl](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Locale/ru-RU/_respiral/lathe/category.ftl)
- Жаровня: [Resources/Prototypes/_Respiral/Entities/Structures/Machine/hotplate.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Entities/Structures/Machine/hotplate.yml)
- Общая логика: [Content.Shared/_Respiral/Burning/Components/FuelBurnerComponent.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Shared/_Respiral/Burning/Components/FuelBurnerComponent.cs)
- Серверная логика: [Content.Server/_Respiral/Burning/FuelBurnerSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Burning/FuelBurnerSystem.cs)
