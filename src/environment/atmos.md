# Атмосфера и газы

## 1. Концепция
Атмосфера описывает воздух, дым, ядовитые газы, жар, холод и закрытые помещения.

## 2. Игровые случаи
| Случай | Поведение |
| :--- | :--- |
| Дым от огня | Заполняет помещение, мешает видеть и дышать. |
| Ядовитый газ | Наносит вред без защиты. |
| Недостаток воздуха | Удушье в закрытых/опасных местах. |
| Жар | Перегрев, ожоги, риск пожара. |

## 3. Открытые вопросы
1. Нужна ли полноценная симуляция газов или упрощенные зоны?
2. Как игрок видит опасный воздух?
3. Какие предметы защищают дыхание?

## Реализация

- Погода: [Content.Server/_Respiral/ZLevels/Weather/CEWeatherCommand.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/ZLevels/Weather/CEWeatherCommand.cs)
- Погода: [Content.Shared/_Respiral/ZLevels/Weather/CEWeatherSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Shared/_Respiral/ZLevels/Weather/CEWeatherSystem.cs)
