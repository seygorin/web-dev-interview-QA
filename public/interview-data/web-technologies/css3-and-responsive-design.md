---
title: CSS3 and Responsive Design
---

## Display attribute values

Свойство `display` определяет, как элемент должен быть отображен в документе.

**Samples:**

```css
.block-element {
  display: block;
}

.inline-element {
  display: inline;
}

.flex-container {
  display: flex;
}

.grid-container {
  display: grid;
}

.inline-block {
  display: inline-block;
}
```

## Selector weights

Специфичность селектора определяет, какое правило CSS будет применено к элементу, если несколько правил конфликтуют.

**Samples:**

```css
/* Специфичность: 0,0,1 */
p {
  color: black;
}

/* Специфичность: 0,1,0 */
.text {
  color: blue;
}

/* Специфичность: 1,0,0 */
#unique {
  color: red;
}

/* Специфичность: 0,0,2 */
p span {
  color: green;
}
```

## Pseudo-classes and pseudo-elements

Псевдоклассы выбирают элементы в определенном состоянии, а псевдоэлементы позволяют стилизовать определенную часть элемента.

**Samples:**

```css
/* Псевдокласс */
a:hover {
  color: red;
}

/* Псевдоэлемент */
p::first-line {
  font-weight: bold;
}

/* Другие примеры */
input:focus {
  outline: 2px solid blue;
}

li:nth-child(odd) {
  background-color: #f0f0f0;
}

.tooltip::before {
  content: 'Подсказка: ';
}
```

## Box model

Блочная модель описывает, как элементы HTML отображаются как прямоугольные блоки с содержимым, padding, border и margin.

**Samples:**

```css
.box {
  width: 300px;
  height: 200px;
  padding: 20px;
  border: 1px solid black;
  margin: 10px;
  box-sizing: border-box; /* Включает padding и border в общую ширину/высоту */
}
```

## em vs rem, relative and absolute values

`em` относится к размеру шрифта родительского элемента, `rem` - к размеру шрифта корневого элемента. Относительные значения зависят от других величин, абсолютные - нет.

**Samples:**

```css
html {
  font-size: 16px;
}

.parent {
  font-size: 20px;
}

.child {
  font-size: 1.5em; /* 30px: 1.5 * 20px */
  margin: 1rem; /* 16px: 1 * 16px */
  padding: 10px; /* Абсолютное значение */
  width: 50%; /* Относительное значение */
  height: 100vh; /* Относительное значение: 100% высоты viewport */
}
```

## Positioning: document flow, position property, overflow, and z-index

Позиционирование определяет, как элементы располагаются на странице. Свойство `position` изменяет поведение элемента, `overflow` контролирует переполнение, `z-index` управляет порядком наложения.

**Samples:**

```css
.container {
  position: relative;
  overflow: hidden;
  height: 300px;
}

.absolute-child {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.fixed-element {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.sticky-header {
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
}
```

## Flexbox

Flexbox - это модель компоновки, которая позволяет создавать гибкие и отзывчивые макеты.

**Samples:**

```css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.flex-item {
  flex: 1 1 200px; /* grow shrink basis */
}

.flex-column {
  display: flex;
  flex-direction: column;
}
```

## Grid

Grid - это двумерная система компоновки, позволяющая создавать сложные макеты с строками и колонками.

**Samples:**

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr auto;
  gap: 10px;
  height: 100vh;
}

.grid-item {
  grid-column: span 2;
}

.header {
  grid-column: 1 / -1;
}

.sidebar {
  grid-row: 2 / 3;
}
```

## Media Queries

Медиа-запросы позволяют применять стили в зависимости от характеристик устройства, например, ширины экрана.

**Samples:**

```css
/* Базовые стили */
body {
  font-size: 16px;
}

/* Стили для экранов шириной до 600px */
@media (max-width: 600px) {
  body {
    font-size: 14px;
  }
}

/* Стили для экранов с высоким разрешением */
@media (min-resolution: 2dppx) {
  .logo {
    background-image: url('high-res-logo.png');
  }
}

/* Стили для печати */
@media print {
  .no-print {
    display: none;
  }
}
```

## CSS Variables (Custom Properties)

CSS-переменные позволяют определять и повторно использовать значения в стилях.

**Samples:**

```css
:root {
  --main-color: #3498db;
  --secondary-color: #2ecc71;
  --font-size-base: 16px;
}

.button {
  background-color: var(--main-color);
  color: white;
  font-size: calc(var(--font-size-base) * 1.2);
}

.link {
  color: var(--secondary-color);
}

@media (max-width: 600px) {
  :root {
    --font-size-base: 14px;
  }
}
```

## CSS Transitions

Переходы в CSS позволяют плавно анимировать изменения свойств элементов.

**Samples:**

```css
.button {
  background-color: blue;
  color: white;
  transition: all 0.3s ease;
}

.button:hover {
  background-color: red;
  transform: scale(1.1);
}
```

## CSS Animations

CSS-анимации позволяют создавать более сложные анимационные эффекты без использования JavaScript.

**Samples:**

```css
@keyframes slide-in {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.animated-element {
  animation: slide-in 1s ease-out forwards;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.pulsing-element {
  animation: pulse 2s infinite;
}
```

## CSS Inheritance

Наследование в CSS позволяет дочерним элементам наследовать свойства от родительских элементов.

**Samples:**

```css
body {
  font-family: Arial, sans-serif;
  color: #333;
  line-height: 1.6;
}

/* Все p внутри div унаследуют эти свойства */
div {
  font-size: 18px;
}

/* Явное указание наследования */
.override {
  font-family: inherit;
  color: inherit;
}
```

## CSS Specificity and the Cascade

Каскадность и специфичность определяют, какие стили применяются к элементу при наличии конфликтующих правил.

**Samples:**

```css
/* Специфичность: 0,0,1 */
p {
  color: black;
}

/* Специфичность: 0,1,1 */
.text p {
  color: blue;
}

/* Специфичность: 1,0,0 */
#unique {
  color: red !important; /* Highest priority */
}
```

## CSS Preprocessors (SASS/LESS)

Препроцессоры CSS расширяют возможности стандартного CSS, добавляя переменные, вложенности, миксины и другие функции.

Пример SASS:

```scss
$primary-color: #3498db;

@mixin button-styles($bg-color) {
  background-color: $bg-color;
  color: white;
  padding: 10px 15px;
  border: none;

  &:hover {
    background-color: darken($bg-color, 10%);
  }
}

.button {
  @include button-styles($primary-color);
}

.container {
  width: 80%;
  margin: 0 auto;

  .header {
    font-size: 24px;
  }
}
```
