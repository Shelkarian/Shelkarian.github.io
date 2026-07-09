# Экономика и торговля

## 1. Концепция
Экономика описывает ценность предметов, деньги, обмен, работу торговцев и способы вывода ресурсов из мира.

## 2. Деньги и обмен
| Элемент | Роль |
| :--- | :--- |
| Монеты | Универсальное средство обмена. |
| Бартер | Обмен предметами без денег. |
| Долг | Обещание оплаты позже. |
| Налог/пошлина | Вывод денег из экономики. |

## 3. Открытые вопросы
1. Есть ли единая валюта?
2. Кто задает цены?
3. Могут ли игроки открывать лавки?

## Реализация

- Система физической цены: [Content.Server/_Respiral/Pricing/MedievalPhysicalPricedSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Pricing/MedievalPhysicalPricedSystem.cs)
- Компонент цены: [Content.Server/_Respiral/Pricing/Components/MedievalPhysicalPricedComponent.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Pricing/Components/MedievalPhysicalPricedComponent.cs)
- Деньги и экономика: [Resources/Prototypes/_Respiral/Entities/Items/Misk/economy.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Entities/Items/Misk/economy.yml)
- Система торговли: [Content.Server/_Respiral/Trade/MedievalTradeStationSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Trade/MedievalTradeStationSystem.cs)
- Компонент торговой станции: [Content.Server/_Respiral/Trade/Components/MedievalTradeStationComponent.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Trade/Components/MedievalTradeStationComponent.cs)
- Каталог торговли: [Resources/Prototypes/_Respiral/Catalog/medieval_trade.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Catalog/medieval_trade.yml)
- Торговая консоль: [Resources/Prototypes/_Respiral/Entities/Structures/trade_console.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Entities/Structures/trade_console.yml)
- Тексты торговли: [Resources/Locale/ru-RU/_Respiral/cargo/medieval-trade.ftl](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Locale/ru-RU/_Respiral/cargo/medieval-trade.ftl)
