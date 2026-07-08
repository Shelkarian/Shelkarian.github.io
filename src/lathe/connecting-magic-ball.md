# Связующий магический шар
> Магический аналог коммуникационной консоли.

## Что производит

Объявления на всё поселение (`CommunicationsConsole`) — средневековая замена станционной связи.

## Навык

Нет гейта.

## Материалы

—

## Реализация

- Прототип: `Structures/Machine/connecting_magic_ball.yml` (`MedievalConnectingMagicBall`,
  parent `MedievalConstructibleMachine` + `MedievalBaseMachine`).
- Постройка: граф `MedievalMachine` (деталь `MedievalConnectingMagicBallDetail`).
