# Домашнее задание к занятию "3.Обработка событий"

![CI](https://github.com//NadinDesyatova/ahj-events/actions/workflows/web.yml/badge.svg)

[Ссылка на Github Pages](https://nadindesyatova.github.io/ahj-events/)

### Игра с гоблинами

#### Описание

В игре реализована следующая логика:
1. Гоблин появляется в рандомной точке (набор точек фиксирован) ровно на 1 секунду
2. Если пользователь успел за это время кликнуть на этой точке (custom-курсором в виде молотка), то:
    * пользователю засчитывается +1 балл
    * гоблин пропадает из ячейки
3. Если пользователь пропустил 5 появлений гоблинов, то игра завершается.

Приложение разбито на классы, каждый из которых ответственен за опредённую логику.

---
