---
title: CSS3 and Responsive Design
---

## Display attribute values

Свойство `display` определяет, как элемент должен быть отображен в документе. Это одно из наиболее важных CSS-свойств для контроля компоновки.

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

Специфичность селектора определяет, какое правило CSS будет применено к элементу, если несколько правил конфликтуют. Если несколько селекторов имеют одинаковую специфичность, то применяется последнее правило.  

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

Псевдоклассы выбирают элементы в определенном состоянии, а псевдоэлементы позволяют стилизовать определенную часть элемента. Они значительно расширяют возможности стилизации без необходимости добавления дополнительной разметки.

### Pseudo-classes (Псевдоклассы)

Псевдоклассы добавляют стили к элементам в определенном состоянии. Они начинаются с одного двоеточия (`:`).

**Часто используемые псевдоклассы:**

- `:hover` — при наведении курсора
- `:active` — при активации (например, нажатии)
- `:focus` — при получении фокуса
- `:first-child` — первый дочерний элемент
- `:last-child` — последний дочерний элемент
- `:nth-child(n)` — элемент, являющийся n-ным дочерним
- `:not()` — элементы, не соответствующие селектору

### Pseudo-elements (Псевдоэлементы)

Псевдоэлементы позволяют стилизовать отдельные части элемента. Они начинаются с двух двоеточий (`::`).

**Часто используемые псевдоэлементы:**

- `::before` — создает элемент перед содержимым
- `::after` — создает элемент после содержимого
- `::first-line` — первая строка текстового элемента
- `::first-letter` — первая буква текстового элемента
- `::selection` — выделенный пользователем текст

**Samples:**

```css
/* Псевдокласс для интерактивности */
a:hover {
  color: red;
  text-decoration: underline;
}

/* Псевдоклассы для структурного выбора */
li:first-child {
  font-weight: bold;
}

li:nth-child(odd) {
  background-color: #f0f0f0;
}

/* Отрицание */
button:not(.primary) {
  background-color: #ccc;
}

/* Псевдоэлементы для создания контента */
.tooltip::before {
  content: 'Подсказка: ';
  color: #666;
}

blockquote::before {
  content: '"';
  font-size: 2em;
  color: #999;
}

/* Стилизация частей текста */
p::first-line {
  font-weight: bold;
}

p::first-letter {
  font-size: 2em;
  float: left;
  margin-right: 5px;
}

/* Стилизация выделенного текста */
::selection {
  background-color: #ffeb3b;
  color: black;
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

Выбор правильных единиц измерения критически важен для создания адаптивных дизайнов. CSS предлагает различные единицы, которые можно разделить на абсолютные и относительные.

### Absolute units (Абсолютные единицы)

Абсолютные единицы имеют фиксированный размер, который не меняется в зависимости от контекста:

- `px` (пиксели) — самая распространенная абсолютная единица
- `pt` (пункты) — часто используются в печатной типографике (1pt = 1/72 дюйма)
- `cm` (сантиметры), `mm` (миллиметры), `in` (дюймы) — физические единицы измерения

### Relative units (Относительные единицы)

Относительные единицы изменяются в зависимости от других величин, что делает дизайн более гибким:

#### em vs rem

- `em` — относится к размеру шрифта текущего элемента. Если размер шрифта не указан, берется от родителя.
- `rem` — относится к размеру шрифта корневого элемента (`html`), что делает вычисления более предсказуемыми.

#### Другие относительные единицы

- `%` — процент от значения родительского элемента
- `vw` — 1% ширины области просмотра (viewport width)
- `vh` — 1% высоты области просмотра (viewport height)
- `vmin` — 1% от наименьшего измерения области просмотра (ширины или высоты)
- `vmax` — 1% от наибольшего измерения области просмотра (ширины или высоты)

**Samples:**

```css
html {
  font-size: 16px; /* Базовый размер шрифта для всей страницы */
}

.parent {
  font-size: 20px;
}

.em-example {
  /* Пример с em */
  font-size: 1.5em; /* 30px: 1.5 * 20px (размер родителя) */
  margin-bottom: 2em; /* 60px: 2 * 30px (размер текущего элемента) */
}

.rem-example {
  /* Пример с rem */
  font-size: 1.5rem; /* 24px: 1.5 * 16px (размер корневого элемента) */
  margin-bottom: 2rem; /* 32px: 2 * 16px (размер корневого элемента) */
}

/* Примеры других относительных единиц */
.responsive-container {
  width: 80%; /* 80% от ширины родителя */
  max-width: 1200px; /* Не больше 1200px */
  height: 50vh; /* 50% высоты области просмотра */
  padding: 2vw; /* Padding масштабируется с шириной viewport */
}
```

### Когда использовать em и rem?

- `rem` хорошо подходит для создания согласованных размеров на всей странице. Особенно полезен для размеров шрифта и компонентов.
- `em` полезен, когда требуется, чтобы размеры элементов масштабировались относительно размера текста внутри них. Хорошо подходит для отступов внутри компонентов.

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

## Flexbox vs Grid

Flexbox и Grid — это два мощных инструмента для создания layout в CSS, каждый со своими сильными сторонами и областями применения.

### Flexbox

Flexbox (Flexible Box Layout) — это одномерная система компоновки, идеально подходящая для создания строк или колонок элементов. Это первый настоящий инструмент компоновки в CSS, специально разработанный для создания гибких layouts.

**Ключевые особенности Flexbox:**

- **Одномерность** — работает либо по строкам, либо по колонкам.
- **Выравнивание контента** — легко центрировать элементы как по горизонтали, так и по вертикали.
- **Распределение пространства** — элементы могут растягиваться или сжиматься, чтобы заполнить доступное пространство.
- **Порядок элементов** — можно изменять порядок элементов без изменения HTML.

**Samples:**

```css
.flex-container {
  display: flex;
  justify-content: space-between; /* Распределение по горизонтали */
  align-items: center; /* Выравнивание по вертикали */
  flex-wrap: wrap; /* Перенос на новую строку при необходимости */
  gap: 20px; /* Расстояние между элементами */
}

.flex-item {
  flex: 1 1 200px; /* grow shrink basis */
}

/* Изменение направления на вертикальное */
.flex-column {
  display: flex;
  flex-direction: column;
}
```

### Grid

Grid (Grid Layout) — это двумерная система компоновки, позволяющая одновременно работать со строками и столбцами. Это самый мощный инструмент для создания сложных layouts в CSS.

**Ключевые особенности Grid:**

- **Двумерность** — одновременно контролирует строки и столбцы.
- **Явное задание структуры** — можно точно определить расположение каждого элемента в сетке.
- **Поддержка областей** — возможность присваивать имена областям и размещать элементы в них.
- **Гибкие треки** — строки и столбцы могут быть фиксированного размера или масштабироваться.

**Samples:**

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Три колонки равной ширины */
  grid-template-rows: auto 1fr auto; /* Шапка, содержимое, подвал */
  gap: 20px; /* Расстояние между элементами */
  height: 100vh;
}

.grid-item {
  grid-column: span 2; /* Элемент занимает две колонки */
}

/* Использование именованных областей */
.advanced-grid {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }
```

### Сравнение Flexbox и Grid

| Аспект | Flexbox | Grid |
|--------|---------|------|
| **Размерность** | Одномерная (строка или колонка) | Двумерная (строки и колонки одновременно) |
| **Контроль** | Хорошо для контроля распределения пространства между элементами | Отлично для точного позиционирования элементов в сетке |
| **Применение** | Навигация, карточки, центрирование элементов | Полные макеты страниц, сложные интерфейсы, галереи изображений |
| **Вложенность** | Хорошо работает с вложенными flex-контейнерами | Минимизирует необходимость вложенных структур |
| **Поддержка браузерами** | Хорошая (включая старые версии) | Надежная в современных браузерах |

**Когда использовать Flexbox:**
- Для простых, одномерных макетов
- Когда нужна гибкая адаптация размеров элементов
- Для выравнивания элементов внутри контейнера
- Для компонентов пользовательского интерфейса (навигация, карточки)

**Когда использовать Grid:**
- Для сложных, двумерных макетов
- Когда требуется точное позиционирование элементов
- Для создания целостных макетов страницы
- Для галерей изображений с различными размерами элементов

**Samples комбинирования Flexbox и Grid:**

```css
/* Основной макет на Grid */
.page {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  height: 100vh;
}

/* Меню навигации на Flexbox */
.main-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Карточки продуктов комбинируют Grid и Flexbox */
.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.product-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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