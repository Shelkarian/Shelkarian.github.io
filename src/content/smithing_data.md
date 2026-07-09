# Кузнечное дело (Данные)

## 1. Температурная шкала слитков
*Физика материалов.*

| Состояние | Визуал (Цвет) | Статус |
| :--- | :--- | :--- |
| **Холодный** | Серый | Ковка невозможна. |
| **Ковкий** | Темно-красный | Мин. порог работы. |
| **Рабочий** | Оранжевый | Оптимальная зона . |
| **Критический**| Светло-желтый | Предупреждение. |
| **Смерть** | Белый | Предмет исчезает. |

## 2. Режимы ударов молота 
*Режимы инструмента. Влияют на скорость деформации.*

| Режим | Расход стамины | Сила деформации |
| :--- | :--- | :--- |
| **Лёгкий** | Низкий | Слабая |
| **Средний** | Средний | Средняя |
| **Тяжёлый** | Высокий | Сильная |

## 3. Инструментарий
*Инструментарий в кузнице*

| Инструмент | Функция | Обоснование |
| :--- | :--- | :--- |
| **Клещи** | Безопасность | Перенос предметов горячее N температуры. Без них ожог. |
| **Меха** | Температура | Повышают вентиляцию горна. Без них невозможно достичь пиковой температуры топлива. |
| **Молот** | Формовка | Основной инструмент. Требует наковальню под слитком. |

### 3.1. Виды инструментов
*Типы и виды инструментов в кузнице*

## 4. Оборудование
*Оборудование в кузнице*
| Оборудование | Функция | Обоснование |
| :--- | :--- | :--- |
| **Кузнечный горн** | Плавка | Туда кладут уголь и разжигают огонь, чтобы плавить металл |
| **Наковальня** | Ковка | Железо на котором придают форму металлу |
| **Чан для закалки** | Закалка | Тут охлаждаем наш металл и он принимает форму |

### 4.1. Виды оборудования
*Типы и виды оборудования в кузнице*

### 4.2. Термодинамика среды
*Коэффициенты остывания слитка в зависимости от локации.*

| Среда | Влияние на t° | Комментарий |
| :--- | :--- | :--- |
| **Горн (Активный)** | ++ Нагрев | Пока есть топливо. |
| **Воздух (В клещах)** | - Остывание (Слабое) | Игрок несет слиток от горна к наковальне. |
| **Наковальня** | -- Остывание (Сильное) | Холодный металл наковальни быстро забирает тепло. Стимул ковать быстро. |
| **Чан (Жидкость)** | --- Мгновенное остывание | Финальная стадия (Закалка). |

## Реализация

- Прототип рецепта ковки: [Content.Shared/_Respiral/Blacksmithing/ForgingRecipePrototype.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Shared/_Respiral/Blacksmithing/ForgingRecipePrototype.cs)
- Система процесса ковки: [Content.Server/_Respiral/Blacksmithing/ForgingSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Blacksmithing/ForgingSystem.cs)
- Система горна: [Content.Server/_Respiral/Blacksmithing/ForgeSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Blacksmithing/ForgeSystem.cs)
- Система закалки: [Content.Server/_Respiral/Blacksmithing/QuenchingSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/Blacksmithing/QuenchingSystem.cs)
- Тексты ковки: [Resources/Locale/ru-RU/_Respiral/blacksmithing/blacksmithing.ftl](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Locale/ru-RU/_Respiral/blacksmithing/blacksmithing.ftl)
- Звуки ковки: [Resources/Prototypes/_Respiral/SoundCollections/blacksmithing.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/SoundCollections/blacksmithing.yml)
- Рецепты производства: [Resources/Prototypes/_Respiral/Recipe/recipe.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Recipe/recipe.yml)
