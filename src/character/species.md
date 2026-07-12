# Расы и виды

## Доступные расы

В текущем наборе прототипов доступны четыре расы:

- люди;
- гоблины;
- эльфы;
- дворфы.

Зверолюди и остальные перечисленные ниже варианты не входят в текущий набор рас. Для них нет
утвержденных характеристик, тел и стартовых прототипов.

## Языковой канон

Утвержденные языки: **Человеческий (общий)**, **Гоблинский**, **Эльфийский**, **Дворфийский**. Дворфийский является вариантом человеческого общего и не создает отдельного языкового барьера. Отдельного орочьего языка в утвержденном списке нет; плановые орки используют человеческий общий.

## Текущие механические различия

### Люди

Люди используют базовое тело и параметры персонажа. Отдельных расовых бонусов или штрафов нет.

Язык: **Человеческий (общий)**.

### Дворфы

| Параметр | Текущее поведение |
|---|---|
| Рост | Визуальная высота 0.8 от человеческой. |
| Столкновение | Радиус 0.35, плотность 120. |
| Метаболизм | Тип Dwarf; вместимость желудка 5u. |
| Речь | Низкий голос и дворфийский акцент. |
| Остальное | Нет бонусов к атрибутам, ремеслу, скорости, зрению или защите. Используют обычное снаряжение. |

Язык: **Дворфийский**, взаимно понятный с человеческим общим.

### Эльфы

| Параметр | Текущее поведение |
|---|---|
| Рост | Визуальная высота 1.1 от человеческой. |
| Восстановление | За тик восстанавливают по 0.07 дробящего, рубящего и колющего урона; по 0.05 огненного, электрического, холодового и кислотного; 0.03 ядовитого. |
| Внешность | Обязательные эльфийские уши и отдельные варианты их формы. |
| Остальное | Нет бонусов к атрибутам, скрытности, зрению или магии. Нет штрафа к максимальному здоровью. |

Язык: **Эльфийский**.

### Гоблины

| Параметр | Текущее поведение |
|---|---|
| Размер | Масштаб 0.86 x 0.75; радиус столкновения 0.25, плотность 185. |
| Уязвимость | Получают x1.25 дробящего, рубящего, колющего, огненного, холодового и электрического урона. |
| Сопротивление | Получают x0.5 ядовитого и кислотного урона. |
| Восстановление | За тик восстанавливают по 0.2 дробящего, рубящего, колющего, огненного, электрического и холодового урона; по 0.05 кислотного и ядовитого. |
| Безоружная атака | 3 рубящего и 1 ядовитого урона. |
| Выносливость | Порог критической стамины 120, оглушение 4 с, восстановление 5. |
| Внешность | Отдельные уши, носы, клыки, имена и индикатор речи. |

Язык: **Гоблинский**.

## Потенциальные расы

Это возможные направления после завершения текущего набора. Они не считаются запланированными к
ближайшей реализации, пока для них не утверждены отдельные GDD и прототипы:

- варианты людей: полуэльфы и полуорки;
- физисы;
- рыболюди;
- зверолюди;
- варианты эльфов: темные, высшие и лесные;
- варианты дворфов: дуэргары, дворфы темного железа и золотые дворфы;
- прокаженные: тифлинги, юанти и сатиры;
- орки.

## Реализация

- Прототип расы: [Resources/Prototypes/_Respiral/Species/human.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Species/human.yml)
- Прототип расы: [Resources/Prototypes/_Respiral/Species/goblin.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Species/goblin.yml)
- Прототип расы: [Resources/Prototypes/_Respiral/Species/elf.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Species/elf.yml)
- Прототип расы: [Resources/Prototypes/_Respiral/Species/dwarf.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Species/dwarf.yml)
- Прототип расы: [Resources/Prototypes/_Respiral/Body/Species/human.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Body/Species/human.yml)
- Прототип расы: [Resources/Prototypes/_Respiral/Body/Species/goblin.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Body/Species/goblin.yml)
- Прототип расы: [Resources/Prototypes/_Respiral/Body/Species/elf.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Body/Species/elf.yml)
- Прототип расы: [Resources/Prototypes/_Respiral/Body/Species/dwarf.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Body/Species/dwarf.yml)
- Модификаторы урона гоблинов: [Resources/Prototypes/_Respiral/Damage/modifier_sets.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Damage/modifier_sets.yml)
- Названия рас: [Resources/Locale/ru-RU/_Respiral/species/species.ftl](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Locale/ru-RU/_Respiral/species/species.ftl)
