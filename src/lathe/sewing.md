# Швейная машина
> Шьёт одежду и текстиль из ткани и кожи.

## Что производит

Простыни, ковры (много цветов), одежда (длинная туника, шляпа с пером, маски), сумки и рюкзаки,
пояса.

## Навык

[Портное дело](../skills/tailor.md). Без полного освоения станок не работает.

## Материалы

[Ткань](../material/cloth.md) и [кожа](../material/leather.md) — приём по тегу
`MedievalSewingMaterialStorage`.

## Реализация

- Прототип: `Structures/Machine/lathe.yml` (`MedievalSewing`, parent `MedievalBaseLathe`).
- Плата: `MedievalSewingDetail`. Пак: `MedievalSewing`.
- Гейт: `NeededSkillForInteract` → `MedievalTailor`. Постройка: граф `MedievalMachine`.
