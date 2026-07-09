перенесено

# Наковальня
> Куёт оружие, броню, инструменты и утварь из металла.

## Что производит

- **Оружие** во всех металлах (дерево → железо → сталь → серебро → мифрил → адамантит): мечи,
  кинжалы, ножи, тесаки, копья, алебарды, древковое, булавы, цепы, кастеты, плети.
- **Броня и одежда:** шлемы, корона, пояса, сапоги, перчатки, очки-маска.
- **Утварь и прочее:** инструменты, ключи, замки и отмычки, монеты (золотые/серебряные), кружки и
  кубки; канделябры и факелы (пак `MedievalAnvilCandel`).

## Навык

[Основы кузнечного дела](../skills/blacksmithing.md). Без полного освоения станок не работает.

## Материалы

Обработанный металл — слитки ([железо](../material/iron.md), [сталь](../material/steel.md),
[серебро](../material/silver.md), [золото](../material/gold.md), [мифрил](../material/mithril.md),
[адамантит](../material/adamantine.md)) — приём по тегу `MedievalAnvilMaterialStorage`.

## Реализация

- [Resources/Prototypes/_Respiral/Entities/Structures/Machine/base_machine.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Entities/Structures/Machine/base_machine.yml)
- [Resources/Prototypes/_Respiral/Entities/Structures/Machine/lathe.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Entities/Structures/Machine/lathe.yml)
- [Resources/Prototypes/_Respiral/Entities/Structures/Machine/frame.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Entities/Structures/Machine/frame.yml)
- [Resources/Prototypes/_Respiral/Construction/Graph/Structure/machine.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Construction/Graph/Structure/machine.yml)
- [Resources/Prototypes/_Respiral/Recipe/recipe.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Recipe/recipe.yml)
- [Resources/Prototypes/_Respiral/Recipe/packs.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Recipe/packs.yml)
- [Resources/Locale/ru-RU/_Respiral/lathe/category.ftl](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Locale/ru-RU/_Respiral/lathe/category.ftl)
- [Content.Shared/_Respiral/Blacksmithing/ForgingRecipePrototype.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Shared/_Respiral/Blacksmithing/ForgingRecipePrototype.cs)
- [Content.Server/_Respiral/Blacksmithing/ForgingSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Blacksmithing/ForgingSystem.cs)
- [Content.Server/_Respiral/Blacksmithing/ForgeSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Blacksmithing/ForgeSystem.cs)
- [Content.Server/_Respiral/Blacksmithing/QuenchingSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Blacksmithing/QuenchingSystem.cs)
- [Resources/Locale/ru-RU/_Respiral/blacksmithing/blacksmithing.ftl](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Locale/ru-RU/_Respiral/blacksmithing/blacksmithing.ftl)
- [Resources/Prototypes/_Respiral/SoundCollections/blacksmithing.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/SoundCollections/blacksmithing.yml)
