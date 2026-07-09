# Жидкости

## 1. Концепция
Жидкости используются для воды, крови, масла, кислот, зелий и грязи.

## 2. Поведение
| Жидкость | Игровой эффект |
| :--- | :--- |
| Вода | Тушит огонь, нужна для готовки и питья. |
| Кровь | След боя, может привлекать существ. |
| Масло | Горит, используется в готовке и механизмах. |
| Кислота | Повреждает предметы и существ. |

## 3. Открытые вопросы
1. Жидкости текут по полу или существуют как лужи?
2. Можно ли смешивать жидкости?
3. Как игрок очищает поверхность?

## Реализация

- Грязь и жидкости: [Content.Shared/_Respiral/Dirt/PuddleContactSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Shared/_Respiral/Dirt/PuddleContactSystem.cs)
- Грязь и жидкости: [Content.Shared/_Respiral/Dirt/SharedDirtSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Shared/_Respiral/Dirt/SharedDirtSystem.cs)
- Грязь и жидкости: [Content.Shared/_Respiral/Dirt/Components/DirtableComponent.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Shared/_Respiral/Dirt/Components/DirtableComponent.cs)
- Грязь и жидкости: [Resources/Locale/ru-RU/_Respiral/dirt/dirt.ftl](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Locale/ru-RU/_Respiral/dirt/dirt.ftl)
