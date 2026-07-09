перенесено

# Ценообразование

Стоимость предмета считается **от материалов, затраченных на его производство**, плюс
наценка и минус износ. Это заменяет ручное проставление цены: цена растёт вместе с ценностью
вложенного сырья.

## Правило

Каждая создаваемая игроком сущность (через [постройку](../lathe/design-plan.md) `Construction`,
рецепт станка [lathe](../lathe/design-plan.md) или иным способом) **обязана** иметь:

- `PhysicalComposition` (`materialComposition:`) — карту `материал → количество`, где перечислено всё
  сырьё, ушедшее на производство;
- компонент `MedievalPhysicalPriced` — маркер, что цена считается от состава.

Без состава цена не отразит вложенные ресурсы.

## Как считается цена

1. **Стоимость материалов** = Σ (`MaterialPrototype.Price` × количество) по всему
   `materialComposition`. Это базовая цена (`BasePrice`).
2. **Наценка** (`Markup`, по умолчанию `0.2` = 20 %): добавочная стоимость
   `AddedValue = BasePrice × Markup`.
3. **Цена нового предмета** = `BasePrice + AddedValue` = стоимость материалов × 1.2.
4. **Износ:** при получении урона добавочная стоимость уменьшается пропорционально доле урона —
   `AddedValue = BasePrice × Markup − BasePrice × (урон / порог уничтожения)`. Целый предмет стоит
   максимум, изношенный — дешевеет, полностью убитый теряет наценку и почти всю базу.

При продаже (`PriceCalculationEvent`) итог = пересчитанная стоимость материалов + текущая
`AddedValue`.

## Цены материалов

Задаются полем `Price` у `MaterialPrototype` (за единицу):

| Материал | Сырьё | Переработанный |
|---|---|---|
| [Дерево](../material/wood.md) | 0.96 | 1.41 |
| [Камень](../material/stone.md) | 0.19 | 0.88 |
| [Уголь](../material/coal.md) | 0.76 | — |
| [Железо](../material/iron.md) | 1.53 | 4.43 |
| [Сталь](../material/steel.md) | — | 10.76 |
| [Серебро](../material/silver.md) | 3.07 | 17.87 |
| [Золото](../material/gold.md) | 6.14 | 39.32 |
| [Мифрил](../material/mithril.md) | 12.29 | 43.02 |
| [Адамантит](../material/adamantine.md) | 24.58 | 75.47 |
| [Кристалл маны](../material/mana-crystal.md) | 3.07 | — |
| [Шкура и кожа](../material/leather.md) | 5 | 10 |
| [Ткань](../material/cloth.md) | 0.02 | 2 |
| [Стекло](../material/glass.md) | — | 17 |
| [Самоцветы](../material/gems.md) | кварц 2, изумруд 8, сапфир 9, рубин 10, топаз 11 | — |

Переработка добавляет стоимость: слиток дороже руды, потому что вбирает и руду, и уголь, и труд и износ экипировки.

## Реализация

- [Content.Server/_Respiral/Pricing/MedievalPhysicalPricedSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Pricing/MedievalPhysicalPricedSystem.cs)
- [Content.Server/_Respiral/Pricing/Components/MedievalPhysicalPricedComponent.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Pricing/Components/MedievalPhysicalPricedComponent.cs)
- [Resources/Prototypes/_Respiral/Entities/Items/Misk/economy.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Entities/Items/Misk/economy.yml)
- [Content.Server/_Respiral/Trade/MedievalTradeStationSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Trade/MedievalTradeStationSystem.cs)
- [Content.Server/_Respiral/Trade/Components/MedievalTradeStationComponent.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Trade/Components/MedievalTradeStationComponent.cs)
- [Resources/Prototypes/_Respiral/Catalog/medieval_trade.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Catalog/medieval_trade.yml)
- [Resources/Prototypes/_Respiral/Entities/Structures/trade_console.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Entities/Structures/trade_console.yml)
- [Resources/Locale/ru-RU/_Respiral/cargo/medieval-trade.ftl](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Locale/ru-RU/_Respiral/cargo/medieval-trade.ftl)
