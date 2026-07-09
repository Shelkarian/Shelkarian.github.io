# ИИ Существ

## 1. Концепция
ИИ нужен для существ, которые не управляются игроком: звери, монстры, охрана, призванные сущности и простые NPC.

Существо не должно просто бежать к ближайшему игроку. Оно выбирает цель по угрозе, голоду, страху, территории и текущему состоянию.

---

## 2. Базовый цикл

1. Существо проверяет окружение.
2. Находит возможные цели: враги, еда, шум, свет, нарушители территории.
3. Выбирает поведение: патруль, охота, бегство, защита, ожидание.
4. Выполняет действие.
5. Переоценивает ситуацию после урона, потери цели или смены условий.

## 3. Состояния
| Состояние | Поведение |
| :--- | :--- |
| Покой | Стоит, бродит, выполняет idle-действия. |
| Настороженность | Идет к шуму/следу, но не атакует сразу. |
| Агрессия | Преследует и атакует цель. |
| Страх | Отступает, ищет укрытие или стаю. |
| Защита территории | Не гонится далеко, держит зону. |

## 4. Открытые вопросы
1. Нужна ли память о последнем месте цели?
2. Должны ли монстры реагировать на свет и огонь?
3. Нужны ли разные профили ИИ для зверей, нежити и разумных NPC?

## Реализация

- [Content.Server/_Respiral/NPC/MedievalNPC.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/NPC/MedievalNPC.cs)
- [Content.Server/_Respiral/NPC/Systems/NPCAggressionSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/NPC/Systems/NPCAggressionSystem.cs)
- [Content.Server/_Respiral/NPC/Systems/NPCUseActionsOnTargetSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/NPC/Systems/NPCUseActionsOnTargetSystem.cs)
- [Resources/Prototypes/_Respiral/NPC/flora.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/NPC/flora.yml)
- [Resources/Prototypes/_Respiral/NPC/factions.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/NPC/factions.yml)
