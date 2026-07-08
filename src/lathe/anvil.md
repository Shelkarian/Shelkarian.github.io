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

- Прототип: `Structures/Machine/lathe.yml` (`MedievalAnvil`, parent `MedievalBaseLathe`).
- Плата: `MedievalAnvilDetail`. Паки: `MedievalAnvil`, `MedievalAnvilCandel`.
- Гейт: `NeededSkillForInteract` → `MedievalBasicBlacksmithing`. Постройка: граф `MedievalMachine`.
