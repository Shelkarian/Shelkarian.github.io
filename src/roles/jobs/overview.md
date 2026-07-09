перенесено

# Текущее состояние и риски

1. **Профессия ≠ навык.** Ни один `startingGear` не выдаёт ни навыка, ни книги, ни станка.
   Кузнец без навыка кузнеца не может работать на наковальне, пока не прочтёт книгу ~100 раз.
   Итог: роли сейчас чисто косметические; любой игрок с книгой = любой ремесленник.
   → Решить: выдавать стартовый прогресс навыка / книгу / доступ по профессии, либо оставить
   «все учатся с нуля» как осознанный дизайн (тогда прописать это в диздоке).
2. **Профессии без петли геймплея:** Горожанин, Корчмарь, Стражник, Инженер, Крестьянин, вся Знать —
   не имеют выделенной механики/навыка (Инженер логически = обработка дерева/строительство, но не
   привязан). Корчмарь без кухни/бара-контента.
4. **Алхимия гейтится лишь частично** — Стол требует навык, а Измельчитель и Жаровня открыты всем.
5. **Департамент Commoner weight −10** — пилигрим намеренно «на дне» списка; проверить, что это
   ожидаемо для лобби.

## Реализация

- Департаменты: [Resources/Prototypes/_Respiral/Roles/Jobs/departments.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Roles/Jobs/departments.yml)
- Трекеры игрового времени: [Resources/Prototypes/_Respiral/Roles/play_time_trackers.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Roles/play_time_trackers.yml)
- Иконки ролей: [Resources/Prototypes/_Respiral/StatusIcon/job.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/StatusIcon/job.yml)
- Спавнеры профессий: [Resources/Prototypes/_Respiral/Entities/Markers/Spawners/jobs.yml](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Prototypes/_Respiral/Entities/Markers/Spawners/jobs.yml)
- Названия и описания профессий: [Resources/Locale/ru-RU/_respiral/job/job.ftl](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Locale/ru-RU/_respiral/job/job.ftl)
- Названия департаментов: [Resources/Locale/ru-RU/_respiral/job/department.ftl](https://github.com/respiral-tree/ss14-respiral/blob/master/Resources/Locale/ru-RU/_respiral/job/department.ftl)
