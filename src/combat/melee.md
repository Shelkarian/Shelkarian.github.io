# Ближний бой

## 1. Концепция
Ближний бой строится вокруг дистанции, направления, оружия, выносливости и состояния цели.

Игрок должен выбирать момент атаки, а не просто кликать по цели до смерти.

---

## 2. Игровой цикл
1. Игрок входит в дистанцию оружия.
2. Выбирает цель или направление удара.
3. Тратит выносливость на атаку.
4. Система проверяет попадание, защиту и броню.
5. Цель получает урон, stagger, кровотечение или иной эффект.

## 3. Оружие
| Оружие | Роль |
| :--- | :--- |
| Кинжал | Быстро, короткая дистанция, опасен в спину. |
| Меч | Универсален. |
| Топор | Силен против щитов и легкой брони. |
| Молот | Хорош против тяжелой брони. |
| Копье | Держит дистанцию. |

## 4. Открытые вопросы
1. Нужны ли направления ударов?
2. Как работает парирование?
3. Насколько сильно усталость режет эффективность?

## Реализация

- Навыки ближнего боя: [Content.Server/_Respiral/Skill/MeleeSkillSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Skill/MeleeSkillSystem.cs)
- База оружия: [Resources/Prototypes/_Respiral/Entities/Items/Weapon/base.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Entities/Items/Weapon/base.yml)
- Оружие: [Resources/Prototypes/_Respiral/Entities/Items/Weapon/sword.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Entities/Items/Weapon/sword.yml)
- Оружие: [Resources/Prototypes/_Respiral/Entities/Items/Weapon/mace.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Entities/Items/Weapon/mace.yml)
- Модификаторы существ: [Resources/Prototypes/_Respiral/Damage/Modif/mobs.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Damage/Modif/mobs.yml)
