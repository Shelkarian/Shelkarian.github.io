# Ткацкий станок
> Ткёт волокно в ткань.

## Что производит

Ткань ([ткань](../material/cloth.md)) — материал для швейной машины.

## Навык

[Портное дело](../skills/tailor.md). Без полного освоения станок не работает.

## Материалы

Сырое волокно ([ткань](../material/cloth.md), лён) — приём по тегу `MedievalLoomMaterialStorage`.

## Реализация

- Прототип: `Structures/Machine/lathe.yml` (`MedievalLoom`, parent `MedievalBaseLathe`).
- Плата: `MedievalLoomDetail`. Пак: `MedievalLoom`.
- Гейт: `NeededSkillForInteract` → `MedievalTailor`. Постройка: граф `MedievalMachine`.
