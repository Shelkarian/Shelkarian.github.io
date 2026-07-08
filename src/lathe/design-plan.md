## Шаблон страницы станка

```markdown
# <Станок>
> Одна строка: что станок делает.

## Что производит
> Кратко что производит.

## Навык
> Навык-гейт (`NeededSkillForInteract`) — ссылкой на страницу навыка. Без полного освоения
> станок не работает.

## Материалы
> Что принимает на вход: `MaterialStorage` по тегу `Medieval<Станок>MaterialStorage`.

## Реализация
> Прототип: `Structures/Machine/lathe.yml` (parent `MedievalBaseLathe`). Плата: `Machine.board`.
> Пак рецептов: `Recipe/packs.yml`. Постройка: граф `MedievalMachine`. Известные дыры/TODO.
```
