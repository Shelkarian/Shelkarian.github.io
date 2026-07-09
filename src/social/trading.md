# Торговля

## 1. Концепция
Торговля позволяет игрокам обменивать ресурсы, еду, инструменты, информацию и услуги.

## 2. Форматы
| Формат | Описание |
| :--- | :--- |
| Личная сделка | Игроки договариваются напрямую. |
| Лавка | Предметы выставлены на продажу. |
| Заказ | Игрок просит изготовить предмет. |
| Караван | Внешний источник редких товаров. |

## 3. Открытые вопросы
1. Нужны ли торговые интерфейсы или только ручной обмен?
2. Кто защищает сделки?
3. Как работает цена редких предметов?

## Реализация

- Система торговли: [Content.Server/_Respiral/Trade/MedievalTradeStationSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Trade/MedievalTradeStationSystem.cs)
- Компонент торговой станции: [Content.Server/_Respiral/Trade/Components/MedievalTradeStationComponent.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Trade/Components/MedievalTradeStationComponent.cs)
- Каталог торговли: [Resources/Prototypes/_Respiral/Catalog/medieval_trade.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Catalog/medieval_trade.yml)
- Торговая консоль: [Resources/Prototypes/_Respiral/Entities/Structures/trade_console.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Entities/Structures/trade_console.yml)
- Тексты торговли: [Resources/Locale/ru-RU/_Respiral/cargo/medieval-trade.ftl](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Locale/ru-RU/_Respiral/cargo/medieval-trade.ftl)
