перенесено

# Булава / дубина
> Владение дробящим оружием.

## Что даёт

Усиливает удары булавами и дубинами в ближнем бою: урон растёт с прогрессом навыка.

## Как учится

В бою — нанося удары дробящим оружием (книг нет). Обучение быстрее по живым целям.

## Реализация

- Прототипы навыков: [Resources/Prototypes/_Respiral/Skill/skill.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Skill/skill.yml)
- Книги навыков: [Resources/Prototypes/_Respiral/Skill/book.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Skill/book.yml)
- Формат прототипа навыка: [Content.Shared/_Respiral/Skill/Prototypes/SkillPrototype.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Shared/_Respiral/Skill/Prototypes/SkillPrototype.cs)
- Компонент навыков персонажа: [Content.Shared/_Respiral/Skill/Components/SkillComponent.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Shared/_Respiral/Skill/Components/SkillComponent.cs)
- Серверная система навыков: [Content.Server/_Respiral/Skill/SkillSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Skill/SkillSystem.cs)
- Клиентская система навыков: [Content.Client/_Respiral/Skill/SkillSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Client/_Respiral/Skill/SkillSystem.cs)
- Обучение через предметы: [Content.Server/_Respiral/Skill/LearnSkillWhenUsingSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Skill/LearnSkillWhenUsingSystem.cs)
- Тексты навыков: [Resources/Locale/ru-RU/_respiral/skill.ftl](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Locale/ru-RU/_respiral/skill.ftl)
- Оружие: [Resources/Prototypes/_Respiral/Entities/Items/Weapon/mace.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Entities/Items/Weapon/mace.yml)
- Оружие: [Resources/Prototypes/_Respiral/Entities/Items/Weapon/eveningstar.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Entities/Items/Weapon/eveningstar.yml)
- Навыки ближнего боя: [Content.Server/_Respiral/Skill/MeleeSkillSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Skill/MeleeSkillSystem.cs)
