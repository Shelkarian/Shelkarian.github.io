# Коммуникация

## 1. Концепция
Коммуникация описывает способы передачи информации между игроками: речь, шепот, объявления, письма, знаки и дальние сообщения.

## 2. Каналы
| Канал | Применение |
| :--- | :--- |
| Речь | Обычное общение рядом. |
| Шепот | Тихая речь на короткой дистанции. |
| Письмо | Записки, книги, объявления. |
| Знак | Метки, символы, простые предупреждения. |
| Дальний канал | Только если есть предмет или система связи. |

## 3. Открытые вопросы
1. Какие каналы доступны без предметов?
2. Нужны ли переносимые письма?
3. Можно ли подслушивать через стены или двери?

## Реализация

- Тексты коммуникации: [Resources/Locale/ru-RU/_Respiral/communications/communications.ftl](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Locale/ru-RU/_Respiral/communications/communications.ftl)
- Индикаторы речи: [Resources/Prototypes/_Respiral/typing_indicator.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/typing_indicator.yml)
- Слышимость речи по Z-уровням: [Content.Server/_Respiral/ZLevels/Chat/CEZLevelsSpeakingSystem.cs](https://github.com/respiral-tree/ss14-respiral/blob/master/Content.Server/_Respiral/ZLevels/Chat/CEZLevelsSpeakingSystem.cs)
