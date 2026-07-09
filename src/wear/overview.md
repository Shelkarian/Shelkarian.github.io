перенесено

# Износ (Wear)

Инструменты, оружие, ключи, книги и станки **изнашиваются** от использования и со временем ломаются.
Износ — это накопленный урон самому предмету, а не отдельная шкала.

## Модель

У предмета с компонентом `Wear` два порога берутся из его `Destructible`:

- **Поломка** (Breakage) — при достижении предмет становится сломанным;
- **Разрушение** (Destruction) — предмет уничтожается.

Накопленный урон движется к этим порогам. При осмотре видно «До поломки: X. До разрушения: Y»
(у сломанного — «Сломано. До разрушения: Y»).

## Сломанный предмет непригоден

В состоянии `Broken` система блокирует использование: отменяет удары в ближнем бою, бросок-удар и
работу инструментом. Пока не починишь — предмет бесполезен.

## Откуда берётся износ

- **`AddWearAfterUse`** — предмет получает урон (`Damage`) после действия. Триггеры (`WearTrigger`):
  удар в ближнем бою, применение к цели, работа тайловым инструментом, RCD, использование и
  дублирование ключа (чтение книг `Learn` заготовлено, но пока отключено). Пример: книга навыка
  изнашивается при ударе ею.
- **`LatheWear`** — **станки изнашиваются при производстве**: за каждый поставленный в очередь рецепт
  добавляется `Damage × очки × количество` (очки = `AddPoints[рецепт]` либо `DefaultAddPoints`,
  по умолчанию 1).
- **`ClothingDamageDistribution`** — часть урона по носителю перераспределяется на надетую одежду и
  броню, изнашивая её в бою.

## Связь с ценой

Износ прямо снижает стоимость: добавочная стоимость уменьшается пропорционально доле полученного
урона (`AddedValue = BasePrice × Markup − BasePrice × доля_урона`). Целый предмет дороже
изношенного — см. [экономику](../economy/pricing.md).

## Реализация

- [Content.Server/_Respiral/Wear/WearSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Wear/WearSystem.cs)
- [Content.Server/_Respiral/Wear/WearSystem.Broken.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Wear/WearSystem.Broken.cs)
- [Content.Server/_Respiral/Wear/AddWearAfterUseSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Wear/AddWearAfterUseSystem.cs)
- [Content.Server/_Respiral/Wear/LatheWearSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Wear/LatheWearSystem.cs)
- [Content.Server/_Respiral/Wear/ClothingDamageDistributionSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Wear/ClothingDamageDistributionSystem.cs)
- [Content.Server/_Respiral/Wear/ContainerDamageDistributionSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Wear/ContainerDamageDistributionSystem.cs)
- [Content.Server/_Respiral/Wear/Components/WearComponent.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Wear/Components/WearComponent.cs)
- [Resources/Locale/ru-RU/_Respiral/wear.ftl](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Locale/ru-RU/_Respiral/wear.ftl)
