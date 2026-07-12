# Постройка (Construction)

Все структуры Respiral — стены, двери и ворота, мебель, станки, освещение, ограды, трубы и прочее —
создаются через движковую систему **Construction**. Прототипы:
`Resources/Prototypes/_Respiral/Construction/**`.

## Как устроено

Два типа прототипов:

- **`constructionGraph`** (`Construction/Graph/**`) — граф состояний: узлы (`node`, каждый = своя
  сущность) и рёбра (`edges`) между ними. Ребро задаёт шаги (`steps`): расход материала
  (`material` + `amount`), инструмент (`tool`), время (`doAfter`) и условия (`conditions`, например
  `EntityAnchored`).
- **`construction`** (`Construction/*.yml`) — пункт меню строительства: ссылается на граф (`graph`),
  задаёт `startNode` и `targetNode`, категорию (`category`), тип (`objectType`: Structure/Item),
  режим размещения (`placementMode`) и условия установки (например `TileNotBlocked`).

Один граф обслуживает много пунктов: например `MedievalWall` даёт разные стены (дуб/берёза/ель)
через разные `targetNode`.

## Постройка и разборка

Игрок выбирает пункт в меню строительства → на месте появляется «недостроенная» сущность → шаги
графа (вставить материал, закрутить, отпилить…) ведут к целевому узлу. Обратные рёбра разбирают
структуру и часто возвращают материал.

## Станки — общий граф `MedievalMachine`

Все станки строятся по одному графу:

1. `start` — рама (`MedievalUnfinishedMachineFrame`); +1 [кристалл маны](../material/mana-crystal.md) →
2. `machineFrame` — вставляются плата (`machine_board`) и детали (`machine_parts`); прикрутить →
3. `machine` — готовый станок (сущность собирается из платы).

Разборка (Cutting) возвращает кристалл маны. Детали станков делаются на
[столе плотника](../lathe/carpenter-table.md) и [наковальне](../lathe/anvil.md).

## Что покрывает

~114 пунктов постройки и 33 графа: стены, двери и ворота, мебель (кровати, стулья, столы, лавки,
шкафы, полки), ограды и перила, крыши, лестницы, статуи, окна, освещение, трубы утилизации, бочки,
колокол, станки, декор.

## Связь с ценой

Шаги графа определяют, какое сырьё уходит на структуру. Чтобы это отразилось в стоимости, у сущности
должен быть `PhysicalComposition` с теми же материалами — см. [экономику](../economy/pricing.md).

## Реализация

- Прототипы строительства: [Resources/Prototypes/_Respiral/Construction/wall.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Construction/wall.yml)
- Прототипы строительства: [Resources/Prototypes/_Respiral/Construction/roof.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Construction/roof.yml)
- Прототипы строительства: [Resources/Prototypes/_Respiral/Construction/furniture.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Construction/furniture.yml)
- Прототипы строительства: [Resources/Prototypes/_Respiral/Construction/doors.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Construction/doors.yml)
- Прототипы строительства: [Resources/Prototypes/_Respiral/Construction/window.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Construction/window.yml)
- Граф постройки станков: [Resources/Prototypes/_Respiral/Construction/Graph/Structure/machine.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Construction/Graph/Structure/machine.yml)
- Прототипы строительства: [Content.Server/_Respiral/Construction/Conditions/MinHealthPercent.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Construction/Conditions/MinHealthPercent.cs)
