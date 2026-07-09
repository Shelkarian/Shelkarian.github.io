перенесено

# Основы кузнечного дела
> Плавка металла и ковка.

## Что даёт

Управление плавильней (слитки от железа до адамантия, склянки) и наковальней (оружие, броня,
инструменты, ключи и замки, монеты, кружки, канделябры).

## Как учится

По книге «основы кузнечного дела»: чтение прибавляет прогресс. Плавильня и наковальня открываются
при полном освоении (прогресс 1.0, ≈100 прочтений).

## Реализация

- Прототипы навыков: [Resources/Prototypes/_Respiral/Skill/skill.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Skill/skill.yml)
- Книги навыков: [Resources/Prototypes/_Respiral/Skill/book.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Skill/book.yml)
- Формат прототипа навыка: [Content.Shared/_Respiral/Skill/Prototypes/SkillPrototype.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Shared/_Respiral/Skill/Prototypes/SkillPrototype.cs)
- Компонент навыков персонажа: [Content.Shared/_Respiral/Skill/Components/SkillComponent.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Shared/_Respiral/Skill/Components/SkillComponent.cs)
- Серверная система навыков: [Content.Server/_Respiral/Skill/SkillSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Skill/SkillSystem.cs)
- Клиентская система навыков: [Content.Client/_Respiral/Skill/SkillSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Client/_Respiral/Skill/SkillSystem.cs)
- Обучение через предметы: [Content.Server/_Respiral/Skill/LearnSkillWhenUsingSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Skill/LearnSkillWhenUsingSystem.cs)
- Тексты навыков: [Resources/Locale/ru-RU/_Respiral/skill.ftl](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Locale/ru-RU/_Respiral/skill.ftl)
- Прототип рецепта ковки: [Content.Shared/_Respiral/Blacksmithing/ForgingRecipePrototype.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Shared/_Respiral/Blacksmithing/ForgingRecipePrototype.cs)
- Система процесса ковки: [Content.Server/_Respiral/Blacksmithing/ForgingSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Blacksmithing/ForgingSystem.cs)
- Система горна: [Content.Server/_Respiral/Blacksmithing/ForgeSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Blacksmithing/ForgeSystem.cs)
- Система закалки: [Content.Server/_Respiral/Blacksmithing/QuenchingSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Blacksmithing/QuenchingSystem.cs)
- Тексты ковки: [Resources/Locale/ru-RU/_Respiral/blacksmithing/blacksmithing.ftl](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Locale/ru-RU/_Respiral/blacksmithing/blacksmithing.ftl)
- Звуки ковки: [Resources/Prototypes/_Respiral/SoundCollections/blacksmithing.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/SoundCollections/blacksmithing.yml)
