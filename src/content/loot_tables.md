# Таблицы лута

## 1. Назначение
Таблицы лута описывают, что игрок получает из существ, контейнеров, руин, сундуков и добычи.

## 2. Правила
1. Лут должен соответствовать источнику.
2. Редкий лут не должен быть обязательным для базового прогресса.
3. Повторяемые источники не должны ломать экономику.

## 3. Формат таблицы
| Источник | Предмет | Шанс | Количество | Условие |
| :--- | :--- | :--- | :--- | :--- |
| Тушка зверя | Мясо | Часто | 1-3 | Требует разделки. |
| Старый сундук | Монеты | Часто | 5-20 | Нет. |
| Старый сундук | Реликвия | Редко | 1 | Только в руинах. |

## Реализация

- Процедурная добыча: [Resources/Prototypes/_Respiral/Procedural/salvage_mods.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Procedural/salvage_mods.yml)
- Прототипы: [Resources/Prototypes/_Respiral/Entities/Mobs/Monster/monsters.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Entities/Mobs/Monster/monsters.yml)
