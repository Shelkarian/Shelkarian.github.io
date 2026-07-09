# Математика урона

## 1. Концепция
Урон должен быть читаемым для игрока и удобным для баланса. Игрок должен понимать, почему удар слабый, смертельный или почти не прошел.

---

## 2. Базовая формула
`Итоговый урон = База оружия + Сила/навык + Модификатор зоны - Защита цели`

| Часть | Что влияет |
| :--- | :--- |
| База оружия | Тип оружия, качество, материал, состояние. |
| Сила/навык | Атрибуты и владение оружием. |
| Зона попадания | Голова, корпус, конечности. |
| Защита цели | Броня, щит, стойка, эффекты. |

## 3. Типы урона
| Тип | Применение |
| :--- | :--- |
| Рубящий | Топоры, мечи, когти. |
| Колющий | Копья, кинжалы, стрелы. |
| Дробящий | Молоты, дубины, падения. |
| Ожог | Огонь, кислота, магия. |

## 4. Открытые вопросы
1. Нужны ли критические попадания?
2. Должна ли броня ломаться от поглощенного урона?
3. Как показывать игроку причину низкого урона?

## Реализация

- Наборы модификаторов урона: [Resources/Prototypes/_Respiral/Damage/modifier_sets.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Damage/modifier_sets.yml)
- Модификаторы материалов: [Resources/Prototypes/_Respiral/Damage/Modif/material.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Damage/Modif/material.yml)
- Модификаторы одежды: [Resources/Prototypes/_Respiral/Damage/Modif/clothing.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Damage/Modif/clothing.yml)
- Урон Z-уровней: [Content.Shared/_Respiral/ZLevels/Damage/CEZLevelDamageSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Shared/_Respiral/ZLevels/Damage/CEZLevelDamageSystem.cs)
