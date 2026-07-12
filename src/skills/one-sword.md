# Одноручный клинок
> Владение одноручными клинками.

## Что даёт

Усиливает удары одноручными клинками в ближнем бою: урон тем выше, чем выше прогресс навыка.

## Как учится

В бою — нанося удары соответствующим оружием (книг нет). Обучение быстрее по живым целям.

## Реализация

- Прототипы навыков: [Resources/Prototypes/_Respiral/Skill/skill.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Skill/skill.yml)
- Книги навыков: [Resources/Prototypes/_Respiral/Skill/book.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Skill/book.yml)
- Формат прототипа навыка: [Content.Shared/_Respiral/Skill/Prototypes/SkillPrototype.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Shared/_Respiral/Skill/Prototypes/SkillPrototype.cs)
- Компонент навыков персонажа: [Content.Shared/_Respiral/Skill/Components/SkillComponent.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Shared/_Respiral/Skill/Components/SkillComponent.cs)
- Серверная система навыков: [Content.Server/_Respiral/Skill/SkillSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Skill/SkillSystem.cs)
- Клиентская система навыков: [Content.Client/_Respiral/Skill/SkillSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Client/_Respiral/Skill/SkillSystem.cs)
- Обучение через предметы: [Content.Server/_Respiral/Skill/LearnSkillWhenUsingSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Skill/LearnSkillWhenUsingSystem.cs)
- Тексты навыков: [Resources/Locale/ru-RU/_respiral/skill.ftl](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Locale/ru-RU/_respiral/skill.ftl)
- Оружие: [Resources/Prototypes/_Respiral/Entities/Items/Weapon/sword.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Entities/Items/Weapon/sword.yml)
- Навыки ближнего боя: [Content.Server/_Respiral/Skill/MeleeSkillSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Skill/MeleeSkillSystem.cs)
