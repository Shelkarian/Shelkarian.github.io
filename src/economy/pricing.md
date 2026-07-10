перенесено

> **ПЕРЕРАБОТАНО** — исправлено после системной проверки GDD.

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
2. **Состояние предмета** (`Condition`) считается от `0` до `1`: `1` — без повреждений,
   `0` — достигнут порог уничтожения. Значение всегда ограничивается этим диапазоном.
3. **Наценка** (`Markup`, по умолчанию `0.2` = 20 %) описывает ценность изготовления. Допустимый
   диапазон для контента — от `0` до `2`.
4. **Остаточная стоимость** (`SalvageRate`, по умолчанию `0.2`) — доля цены материалов, которая
   сохраняется у полностью изношенного предмета.
5. **Итоговая цена:**

   `FinalPrice = BasePrice × (SalvageRate + (1 + Markup - SalvageRate) × Condition)`

Новый предмет при стандартных параметрах стоит `BasePrice × 1.2`, полностью изношенный —
`BasePrice × 0.2`. Итог не может быть отрицательным и округляется до двух знаков после запятой.

Формула учитывает материалы, качество изготовления через наценку и состояние самого предмета.
Труд, топливо и износ оборудования входят в цену только тогда, когда отражены в составе изделия
или отдельном параметре `Markup`.

## Пограничные случаи

| Ситуация | Правило |
|---|---|
| Стак предметов | Цена одной единицы умножается на размер стака. |
| Контейнер с содержимым | Система считает контейнер и содержимое отдельно, без рекурсивного включения содержимого в цену контейнера. |
| Составной предмет | `materialComposition` хранит уже сведённый состав без повторного подсчёта промежуточных деталей. |
| Ремонт | Восстанавливает `Condition`, но требует материалы; цена не может стать выше цены нового предмета. |
| Нет состава | Автоматическая цена не рассчитывается; предмет не принимается обычной торговой станцией. |
| Цена материала отсутствует | Материал оценивается в `0`, а проверка контента сообщает об ошибке. |

## Ожидаемое поведение

1. Новый предмет со стоимостью материалов `100` и наценкой `0.2` продаётся за `120`.
2. Тот же предмет при `Condition = 0.5` продаётся за `70`, при `Condition = 0` — за `20`.
3. Урон сверх порога уничтожения не делает цену отрицательной.
4. Цена стака из десяти одинаковых единиц равна десятикратной цене одной единицы.
5. Предмет внутри сумки учитывается один раз и не меняет собственную цену сумки.

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

- Система физической цены: [Content.Server/_Respiral/Pricing/MedievalPhysicalPricedSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Pricing/MedievalPhysicalPricedSystem.cs)
- Компонент цены: [Content.Server/_Respiral/Pricing/Components/MedievalPhysicalPricedComponent.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Pricing/Components/MedievalPhysicalPricedComponent.cs)
- Деньги и экономика: [Resources/Prototypes/_Respiral/Entities/Items/Misk/economy.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Entities/Items/Misk/economy.yml)
- Система торговли: [Content.Server/_Respiral/Trade/MedievalTradeStationSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Trade/MedievalTradeStationSystem.cs)
- Компонент торговой станции: [Content.Server/_Respiral/Trade/Components/MedievalTradeStationComponent.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Trade/Components/MedievalTradeStationComponent.cs)
- Каталог торговли: [Resources/Prototypes/_Respiral/Catalog/medieval_trade.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Catalog/medieval_trade.yml)
- Торговая консоль: [Resources/Prototypes/_Respiral/Entities/Structures/trade_console.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Entities/Structures/trade_console.yml)
- Тексты торговли: [Resources/Locale/ru-RU/_Respiral/cargo/medieval-trade.ftl](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Locale/ru-RU/_Respiral/cargo/medieval-trade.ftl)
