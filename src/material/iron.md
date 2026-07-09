перенесено

# Железо
> Основной рабочий металл поселения.

## Что это

Руда `MedievalRawIron` и обработанная форма `MedievalProcessedIron` (слитки).

## Откуда берётся

Добыча железной руды (`MedievalIronOre`).

## Где используется

[Плавильня](../lathe/smelter.md): слиток железа = руда 200 + [уголь](coal.md) 100. Далее
[наковальня](../lathe/anvil.md): оружие, броня, инструменты, детали станков.

## Реализация

- Прототипы: `materials.yml` (`MedievalRawIron`, `MedievalProcessedIron`).
- `MedievalIronIngotRecipe`. Тег склада наковальни: `MedievalAnvilMaterialStorage`.
