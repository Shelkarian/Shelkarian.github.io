# Шкура и кожа
> Материал для одежды, сумок и поясов.

## Что это

Сырьё `MedievalPelt` (шкура) и обработанная форма `MedievalProcessedPelt` (дублёная кожа).

## Откуда берётся

Разделка травоядных (сайга, землеройка) → шкура.

## Где используется

[Дубильня](../lathe/tannery.md) выделывает шкуру в кожу; далее [швейная машина](../lathe/sewing.md):
одежда, сумки, пояса. Кожа также задаёт защиту одежды (`damageModifierSet: MedievalPelt`).

## Реализация

- Прототипы: `materials.yml` (`MedievalPelt`, `MedievalProcessedPelt`).
- Дублёная кожа = `MedievalPelt` 100 (`MedievalProcessedPeltRecipe`).
