# Реестр предметов

## 1. Назначение
Реестр нужен как список предметов, которые должны существовать в игре, с их ролью и системными связями.

## 2. Формат записи
| Поле | Описание |
| :--- | :--- |
| Название | Игровое имя предмета. |
| Категория | Оружие, инструмент, ресурс, еда, книга и т.д. |
| Источник | Где появляется или как создается. |
| Использование | Что игрок делает предметом. |
| Зависимости | Какие системы нужны предмету. |

## 3. Пример
| Предмет | Категория | Источник | Использование |
| :--- | :--- | :--- | :--- |
| Нож | Инструмент/оружие | Крафт, торговля | Нарезка, разделка, ближний бой. |

## Реализация

- Инструменты: [Resources/Prototypes/_Respiral/Entities/Items/Tools/tool.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Entities/Items/Tools/tool.yml)
- База оружия: [Resources/Prototypes/_Respiral/Entities/Items/Weapon/base.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Entities/Items/Weapon/base.yml)
- Сырые материалы: [Resources/Prototypes/_Respiral/Entities/Objects/RawMaterials/materials.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Entities/Objects/RawMaterials/materials.yml)
- Обработанные материалы: [Resources/Prototypes/_Respiral/Entities/Objects/ProcessedMaterials/materials.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Entities/Objects/ProcessedMaterials/materials.yml)
