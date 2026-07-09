# Строительство

## 1. Концепция
Строительство позволяет игрокам создавать и ремонтировать стены, двери, мебель, станции и защитные объекты.

## 2. Игровой цикл
1. Игрок выбирает конструкцию.
2. Проверяет место установки.
3. Приносит материалы.
4. Использует инструмент.
5. Получает каркас или готовый объект.

## 3. Материалы
| Материал | Применение |
| :--- | :--- |
| Дерево | Простые стены, мебель, временные укрепления. |
| Камень | Прочные стены, печи, полы. |
| Металл | Двери, решетки, механизмы. |

## 4. Открытые вопросы
1. Можно ли строить где угодно?
2. Нужны ли фундаменты?
3. Как предотвращать застройку важных проходов?

## Реализация

- [Resources/Prototypes/_Respiral/Construction/wall.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Construction/wall.yml)
- [Resources/Prototypes/_Respiral/Construction/roof.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Construction/roof.yml)
- [Resources/Prototypes/_Respiral/Construction/furniture.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Construction/furniture.yml)
- [Resources/Prototypes/_Respiral/Construction/doors.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Construction/doors.yml)
- [Resources/Prototypes/_Respiral/Construction/window.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Construction/window.yml)
- [Resources/Prototypes/_Respiral/Construction/Graph/Structure/machine.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Construction/Graph/Structure/machine.yml)
- [Content.Server/_Respiral/Construction/Conditions/MinHealthPercent.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Construction/Conditions/MinHealthPercent.cs)
