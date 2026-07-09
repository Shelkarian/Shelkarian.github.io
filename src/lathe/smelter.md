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

- [Resources/Prototypes/_Respiral/Entities/Structures/Machine/base_machine.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Entities/Structures/Machine/base_machine.yml)
- [Resources/Prototypes/_Respiral/Entities/Structures/Machine/lathe.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Entities/Structures/Machine/lathe.yml)
- [Resources/Prototypes/_Respiral/Entities/Structures/Machine/frame.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Entities/Structures/Machine/frame.yml)
- [Resources/Prototypes/_Respiral/Construction/Graph/Structure/machine.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Construction/Graph/Structure/machine.yml)
- [Resources/Prototypes/_Respiral/Recipe/recipe.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Recipe/recipe.yml)
- [Resources/Prototypes/_Respiral/Recipe/packs.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Recipe/packs.yml)
- [Resources/Locale/ru-RU/_Respiral/lathe/category.ftl](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Locale/ru-RU/_Respiral/lathe/category.ftl)
