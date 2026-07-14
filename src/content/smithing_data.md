# Кузнечное дело: данные

Этот файл хранит числовые параметры кузнечки из текущей реализации. Игровой контекст и цикл описаны в [основной странице](../industry/smithing.md).

## 1. Текущие станки

| ID | Тип | Навык | Пак рецептов |
| :--- | :--- | :--- | :--- |
| `MedievalSmelter` | `Lathe` | `MedievalBasicBlacksmithing` | `MedievalSmelter` |
| `MedievalAnvil` | `Lathe` | `MedievalBasicBlacksmithing` | `MedievalAnvil` |

Оба станка используют `NeededSkillForInteract`. Если у персонажа нет освоенного навыка, он не должен нормально работать со станком.

## 2. Рецепты плавильни

| Рецепт | Результат | Материалы |
| :--- | :--- | :--- |
| `MedievalIronIngotRecipe` | `MedievalIronIngot1` | `MedievalRawIron: 200`, `MedievalRawCoal: 100` |
| `MedievalSteelIngotRecipe` | `MedievalSteelIngot1` | `MedievalRawIron: 300`, `MedievalRawCoal: 100` |
| `MedievalSilverIngotRecipe` | `MedievalSilverIngot1` | `MedievalRawSilver: 500`, `MedievalRawCoal: 100` |
| `MedievalGoldIngotRecipe` | `MedievalGoldIngot1` | `MedievalRawGold: 500`, `MedievalRawCoal: 100` |
| `MedievalMithrilIngotRecipe` | `MedievalMithrilIngot1` | `MedievalRawMithril: 300`, `MedievalRawCoal: 100` |
| `MedievalAdamantineIngotRecipe` | `MedievalAdamantineIngot1` | `MedievalRawAdamantine: 300`, `MedievalRawCoal: 100` |

Пак `MedievalSmelter` также содержит рецепты стеклянных бутылей.

## 3. Пак наковальни

`MedievalAnvil` содержит большой набор lathe-рецептов. Для GDD его удобнее делить не по ID каждого предмета, а по игровым группам:

| Группа | Что входит |
| :--- | :--- |
| Оружие | Мечи, кинжалы, ножи, тесаки, копья, алебарды, древковое, булавы, кастеты, плети |
| Броня | Доспехи, шлемы, цепные перчатки, сапоги, пояса, корона |
| Инструменты | Строительные инструменты, ножницы, молотковая амуниция |
| Замки | Отмычки, ключи, замки, дубликатор ключей |
| Деньги | Золотые и серебряные монеты |
| Посуда | Кружки и кубки из разных материалов |
| Освещение | Канделябры и металлический факел в отдельном паке `MedievalAnvilCandel` |

## 4. Температура интерактивной ковки

Цвет слитка берется из `ForgeSystem`.

| Температура | Цвет | Игровое значение |
| :--- | :--- | :--- |
| `< 700` | Прозрачный/без свечения | Удары не проходят |
| `700-799` | `DarkRed` | Минимальная рабочая температура |
| `800-899` | `Red` | Рабочее красное свечение |
| `900-999` | `#c10020` | Яркое красное свечение |
| `1000-1099` | `OrangeRed` | Горячий металл |
| `1100-1199` | `LightYellow` | Очень горячий металл |
| `>= 1200` | `WhiteSmoke` | Белый перегрев по визуалу |

Фактическое уничтожение при перегреве зависит не от таблицы цвета, а от `heated.OverheatThreshold`.

## 5. Молот

| Тип удара | Расход стамины | Комментарий |
| :--- | :--- | :--- |
| `Light` | `0` | Бесплатный слабый удар |
| `Medium` | `5` | Средний удар |
| `Heavy` | `10` | Дорогой сильный удар |

Максимум ударов в одном процессе: `64`.

Деформация визуала считается по первым `32` ударам:

`Y = 1.0 - min(strikeCount, 32) / 32 * 0.4`

То есть при полном визуальном сжатии слиток доходит до `Y = 0.6`.

## 6. Рецепт интерактивной ковки

Формат `forgingRecipe` поддерживает:

| Поле | Назначение |
| :--- | :--- |
| `input` | Какой слиток или заготовка принимается |
| `output` | Что появляется при успехе |
| `failedOutput` | Что появляется при провале рецепта |
| `RequiredSequence` | Последовательность ударов |
| `MinPerfectStrikes` | Минимум идеальных ударов |
| `MaxBadStrikes` | Максимум плохих ударов |
| `multipliers` | Множители качества для `Perfect`, `Good`, `Bad` |
| `IdealTemperature` | Идеальное температурное окно |

`StrikePattern` может задавать конкретный `type`, ссылаться на `strikeId`, повторяться через `amount`, иметь свое `timeWindow` и `rhythmBonus`.

## 7. Оценка удара

Температура:

| Условие | Оценка |
| :--- | :--- |
| Температура внутри `IdealTemperature` | `Perfect` |
| Температура в пределах `IdealTemperature ± 100` | `Good` |
| Остальное | `Bad` |

Ритм:

| Условие | Оценка |
| :--- | :--- |
| Первый удар | `Good` |
| Интервал внутри адаптированного окна | `Perfect` |
| Отклонение от центра не больше ширины окна | `Good` |
| Остальное | `Bad` |

Пауза больше `10` секунд считается паузой на подогрев. До `60` секунд она может считаться нормальной, дольше становится плохим ритмом.

## 8. Качество результата

Финальный счет:

`score = perfect * perfectMultiplier + good * goodMultiplier + bad * badMultiplier + rhythmBonus + temperatureBonus + rhythmStreakBonus`

Множители по умолчанию:

| Оценка | Множитель |
| :--- | :--- |
| `Perfect` | `1.5` |
| `Good` | `1.0` |
| `Bad` | `0.3` |

Бонусы:

| Условие | Бонус |
| :--- | :--- |
| Все удары в идеальной температуре | `+15` |
| Хотя бы 70% ударов в идеальной температуре | `+8` |
| Серия из 5 хороших ритмов подряд | `+10` |
| Серия из 3 хороших ритмов подряд | `+5` |

Пороги:

| Счет | Качество |
| :--- | :--- |
| `< 15` | `Rough` |
| `15-24` | `Normal` |
| `25-34` | `Good` |
| `35-44` | `Master` |
| `>= 45` | `Masterpiece` |

Условие общего успеха:

`PerfectStrikes + GoodStrikes > BadStrikes * 2`

Плохие удары частично компенсируются идеальной температурой: каждые 3 идеальных по температуре удара убирают 1 эффективный плохой удар для проверки `MaxBadStrikes`.

## 9. Закалка

| Параметр | Значение по умолчанию |
| :--- | :--- |
| Раствор | `drink` |
| Реагент | `Water` |
| Расход | `5` |
| Минимальная температура | `700` |
| Звук | `/Audio/_Respiral/Effects/Blacksmithing/quenching.ogg` |

Если подходящего `forgingRecipe` нет, результатом становится `ShapelessMetal`.

## Реализация

- Станки плавильни и наковальни: [Resources/Prototypes/_Respiral/Entities/Structures/Machine/lathe.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Entities/Structures/Machine/lathe.yml)
- Паки рецептов: [Resources/Prototypes/_Respiral/Recipe/packs.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Recipe/packs.yml)
- Рецепты производства: [Resources/Prototypes/_Respiral/Recipe/recipe.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Recipe/recipe.yml)
- Прототип рецепта интерактивной ковки: [Content.Shared/_Respiral/Blacksmithing/ForgingRecipePrototype.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Shared/_Respiral/Blacksmithing/ForgingRecipePrototype.cs)
- Система нагрева: [Content.Server/_Respiral/Blacksmithing/ForgeSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Blacksmithing/ForgeSystem.cs)
- Система ударов: [Content.Server/_Respiral/Blacksmithing/ForgingSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Blacksmithing/ForgingSystem.cs)
- Система закалки и качества: [Content.Server/_Respiral/Blacksmithing/QuenchingSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Blacksmithing/QuenchingSystem.cs)
- Компоненты: [Content.Shared/_Respiral/Blacksmithing/Components](https://github.com/respiral-tree/ss14-respiral/tree/master/Content.Shared/_Respiral/Blacksmithing/Components)
