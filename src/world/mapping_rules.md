# Правила маппинга

## 1. Концепция
Правила маппинга задают, как строятся поселения, руины, шахты, леса и опасные зоны.

## 2. Принципы
| Правило | Описание |
| :--- | :--- |
| Читаемые маршруты | Игрок должен понимать, куда идти. |
| Риск за награду | Опасные зоны дают лучший ресурс. |
| Логика места | Кухня рядом с хранением еды, кузня рядом с сырьем. |
| Пути отхода | Не все опасные места должны быть тупиком. |

## 3. Открытые вопросы
1. Сколько поселений нужно на карте?
2. Как далеко опасные зоны от старта?
3. Нужны ли случайные руины?

## Реализация

- [Content.Shared/_Respiral/ZLevels/Core/EntitySystems/CESharedZLevelsSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Shared/_Respiral/ZLevels/Core/EntitySystems/CESharedZLevelsSystem.cs)
- [Content.Server/_Respiral/ZLevels/Core/CEZLevelsSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/ZLevels/Core/CEZLevelsSystem.cs)
- [Content.Client/_Respiral/ZLevels/Core/CEClientZLevelsSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Client/_Respiral/ZLevels/Core/CEClientZLevelsSystem.cs)
- [Resources/Prototypes/_Respiral/ZLevels/stairs.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/ZLevels/stairs.yml)
- [Resources/Prototypes/_Respiral/ZLevels/misc.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/ZLevels/misc.yml)
- [Resources/Prototypes/_Respiral/Entities/Actions/zLevels.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Entities/Actions/zLevels.yml)
- [Resources/Prototypes/_Respiral/Maps/verdant_vale.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Maps/verdant_vale.yml)
- [Content.Server/_Respiral/ZLevels/Mapping/CEZLevelMappingSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/ZLevels/Mapping/CEZLevelMappingSystem.cs)
