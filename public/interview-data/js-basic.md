---
title: JavaScript Basic
---

## Understanding Object.is (optional)

`Object.is()` — это метод в JavaScript, который предназначен для сравнения двух значений на строгое равенство. Хотя он работает схоже с оператором `===`, есть некоторые важные различия. `Object.is()` считает NaN равным NaN, что отличается от поведения `===`, который считает `NaN` не равным самому себе. Кроме того, `Object.is()` различает `-0` и `+0`, которые считаются равными при использовании `===`.

Эти особенности делают `Object.is()` полезным в ситуациях, где требуется более точное сравнение значений, чем то, что предлагает `===`.

**Samples:**

```javascript
console.log(Object.is(NaN, NaN)) // true
console.log(NaN === NaN) // false

console.log(Object.is(-0, +0)) // false
console.log(-0 === +0) // true
```

Использование `Object.is()` может быть полезно в случаях, когда нужно определить, действительно ли два значения идентичны с учетом всех нюансов JavaScript.

## Differences between let, var, and const

В JavaScript существуют три способа объявления переменных: `var`, `let`, и `const`. Каждый из них имеет свои особенности, которые важно понимать при разработке:

- **`var`:**

  - **Область видимости:** Функциональная, то есть переменная, объявленная с `var`, доступна в пределах функции, в которой она объявлена, или глобально, если объявлена вне функции.
  - **Hoisting (поднятие):** Объявления переменных с использованием var поднимаются в начало своей области видимости, но не их инициализация.
  - **Повторное объявление:** Разрешено повторное объявление одной и той же переменной в пределах одной области видимости.

- **`let`:**

  - **Область видимости:** Блочная, то есть переменная доступна только в пределах блока `{}`, в котором она объявлена.
  - **Hoisting:** Переменные, объявленные с `let`, поднимаются в начало блока, но к ним нельзя обращаться до инициализации из-за временной мертвой зоны (TDZ).
  - **Повторное объявление:** Повторное объявление одной и той же переменной в одной и той же области видимости вызовет ошибку.

- **`const`:**
  - **Область видимости:** Также блочная, как и у `let`.
  - **Hoisting:** Ведет себя аналогично `let` с точки зрения поднятия.
  - **Неизменяемость:** Значение переменной, объявленной с помощью const, нельзя переназначить после инициализации. Однако, если const используется для объявления объекта, свойства этого объекта могут изменяться.

**Samples:**

```javascript
{
  var a = 1
  let b = 2
  const c = 3
}
console.log(a) // 1
console.log(b) // ReferenceError: b is not defined
console.log(c) // ReferenceError: c is not defined

const obj = {prop: 1}
obj.prop = 2 // Допустимо, свойства объекта могут изменяться
obj = {} // TypeError: Assignment to a constant variable
```

Знание различий между этими ключевыми словами помогает избегать ошибок и делает код более предсказуемым и понятным.

## Exploring the Temporal Dead Zone

Временная мертвая зона (TDZ) — это концепция в JavaScript, связанная с `let` и `const`. TDZ — это период времени между моментом, когда переменная объявляется в области видимости, и моментом её фактической инициализации. В этот период любая попытка обратиться к переменной приводит к ошибке `ReferenceError`.

Важно понимать, что TDZ существует только для `let` и `const`. `var` не подвержен этой концепции, так как его значение поднимается и инициализируется как `undefined`.

**Samples:**

```javascript
console.log(x) // ReferenceError: Cannot access 'x' before initialization
let x = 5

// В отличие от:
console.log(y) // undefined
var y = 5
```

Это поведение помогает разработчикам избегать ошибок, связанных с использованием переменных до их инициализации, и делает код более предсказуемым.

## Concepts of Hoisting

Hoisting (поднятие) — это механизм в JavaScript, при котором объявления переменных и функций поднимаются в начало их области видимости перед выполнением кода. Важно понимать, что поднимаются именно объявления, но не инициализации.

Для `var` переменных поднимается объявление, но не их присвоенное значение, поэтому до момента инициализации они имеют значение `undefined`. Для переменных, объявленных с `let` и `const`, происходит подъем объявления, но их инициализация остаётся на своём месте, поэтому до момента инициализации они находятся в TDZ.

Функции, объявленные с использованием `function`, полностью поднимаются, включая их тело, что позволяет вызывать их до момента их фактического объявления в коде.

**Samples:**

```javascript
console.log(x) // undefined
var x = 5

// Эквивалентно:
var x
console.log(x) // undefined
x = 5

// Функции также поднимаются:
hello() // "Hello, World!"
function hello() {
  console.log('Hello, World!')
}
```

Понимание Hoisting помогает избегать ошибок, связанных с порядком выполнения кода, и делает код более предсказуемым.

## The Role of Polyfills

Полифилы — это куски кода (обычно функции), которые реализуют возможности нового стандарта JavaScript в старых окружениях, которые эти возможности не поддерживают. Полифилы позволяют разработчикам использовать новейшие функции языка, не беспокоясь о том, что их код не будет работать в старых браузерах.

Полифилы часто используются для добавления поддержки таких методов, как `Array.prototype.includes`, `Promise`, или даже `fetch` в браузерах, где они не реализованы.

**Samples** полифила для метода `Array.prototype.includes`:

```javascript
if (!Array.prototype.includes) {
  Array.prototype.includes = function (searchElement, fromIndex) {
    if (this == null) {
      throw new TypeError('"this" is null or not defined')
    }
    var o = Object(this)
    var len = o.length >>> 0
    if (len === 0) {
      return false
    }
    var n = fromIndex | 0
    var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0)
    while (k < len) {
      if (o[k] === searchElement) {
        return true
      }
      k++
    }
    return false
  }
}
```

Полифилы играют важную роль в обеспечении совместимости кода с более старыми браузерами и позволяют разработчикам использовать современные возможности языка.

# Functions

## Differences and Uses of Arrow Functions, Function Expressions, and Function Declarations

**1. Function Declaration:**

- **Hoisting (Поднятие):** Объявление функций поднимается в начало своей области видимости, что позволяет вызывать функцию до её объявления в коде.
- **Контекст (this):** Function declaration имеет собственный контекст `this`, который определяется в момент вызова функции.
- **Использование как конструктор:** Функция, объявленная через function declaration, может использоваться как конструктор для создания объектов с помощью ключевого слова `new`.

```javascript
function greet(name) {
  return `Hello, ${name}!`
}

const instance = new greet() // Function declaration может использоваться как конструктор
```

**2. Function Expression:**

- **Hoisting:** В отличие от function declaration, function expression не поднимается, поэтому её нельзя вызывать до того, как она была объявлена.
- **Контекст (this):** Имеет собственный контекст `this`, аналогично function declaration, контекст может быть изменён при передаче функции в другие части кода.
- **Использование как конструктор:** Function expression также может использоваться как конструктор, если она не является стрелочной функцией.

```javascript
const greet = function (name) {
  return `Hello, ${name}!`
}

const instance = new greet() // Function expression также может использоваться как конструктор
```

**3. Arrow Function:**

- **Hoisting:** Как и function expression, стрелочные функции не поднимаются, и их нужно объявлять до использования.
- **Контекст (this):** Стрелочные функции не имеют собственного контекста `this`. Вместо этого они используют `this` из окружающего лексического окружения. Это делает их удобными для использования в методах или вложенных функциях, где важно сохранить контекст внешней функции.
- **Использование как конструктор:** Стрелочные функции не могут использоваться как конструкторы, и попытка вызвать их с `new` приведет к ошибке.
- **Более краткий синтаксис:** Стрелочные функции имеют лаконичный синтаксис, что делает их удобными для простых выражений.

```javascript
const greet = (name) => `Hello, ${name}!`

// greet не может использоваться как конструктор:
// const instance = new greet(); // TypeError: greet is not a constructor
```

# Functional Scope

## Global Scope vs. Functional Scope

- Область видимости в JavaScript определяет, где переменные и функции могут быть доступны и использованы в коде. В JavaScript есть два основных типа области видимости:

  - **Глобальная область видимости:** Переменные и функции, объявленные в глобальной области видимости, доступны в любом месте вашего скрипта. Глобальная область видимости создается, когда переменные объявляются вне каких-либо функций или блоков кода. Однако чрезмерное использование глобальных переменных может привести к конфликтам имен и затруднить отладку кода.
  - **Функциональная область видимости:** Переменные, объявленные внутри функции, доступны только в пределах этой функции и недоступны вне её. Эта область видимости защищает данные от случайного изменения или доступа из других частей кода.

**Samples:**

```javascript
var globalVar = "I'm global"

function exampleFunction() {
  var localVar = "I'm local"
  console.log(globalVar) // "I'm global"
  console.log(localVar) // "I'm local"
}

exampleFunction()
console.log(globalVar) // "I'm global"
console.log(localVar) // ReferenceError: localVar is not defined
```

Важно управлять областями видимости, чтобы избежать конфликтов и сделать код более организованным и безопасным.

## Variable Visibility Areas

Область видимости переменных определяется тем, где они объявлены, и ограничивает доступ к ним из других частей кода. Переменные, объявленные в одной области видимости, недоступны в другой, если она не является вложенной. Это предотвращает случайное изменение переменных и защищает данные.

**Samples:**

```javascript
function outer() {
  var a = 1
  function inner() {
    var b = 2
    console.log(a) // 1 (доступна из внешней функции)
    console.log(b) // 2 (локальная переменная)
  }
  inner()
  console.log(a) // 1 (локальная переменная)
  console.log(b) // ReferenceError: b is not defined
}
outer()
```

В этом примере переменная `b` доступна только внутри функции `inner`, а переменная `a` доступна как внутри функции `inner`, так и в `outer`. Это пример замкнутости областей видимости.

## Working with Nested Scopes

Вложенные области видимости — это концепция, где функции имеют доступ к переменным из областей видимости, в которых они были объявлены, и всех внешних областей видимости. Это позволяет внутренним функциям использовать данные из внешних функций, но внешние функции не могут получить доступ к переменным внутренних функций.

**Samples:**

```javascript
function outerMost() {
  var a = 1
  function outer() {
    var b = 2
    function inner() {
      var c = 3
      console.log(a, b, c) // 1 2 3
    }
    inner()
    console.log(a, b) // 1 2
    console.log(c) // ReferenceError: c is not defined
  }
  outer()
  console.log(a) // 1
  console.log(b) // ReferenceError: b is not defined
}
outerMost()
```

Здесь `inner` имеет доступ к `a` и `b` из внешних областей видимости, но `outerMost` не может получить доступ к `b` и `c`, потому что они объявлены в более узких областях видимости. Это поведение обеспечивает модульность и изоляцию данных.

# Closures Advanced

## Understanding Context and Lexical Environments

Лексическое окружение — это структура данных, которая содержит ссылки на переменные и функции, доступные в данном блоке кода. Контекст выполнения — это окружение, которое включает лексическое окружение, текущее значение `this` и другие параметры, определяющие выполнение кода.

**Samples:**

```javascript
function outer() {
  let x = 10
  function inner() {
    console.log(x) // inner имеет доступ к x из лексического окружения outer
  }
  return inner
}

const closureFn = outer()
closureFn() // 10
```

В этом примере функция `inner` сохраняет ссылку на лексическое окружение функции `outer`, что позволяет ей получить доступ к переменной `x` даже после завершения выполнения `outer`.

## Differences between Scope and Context

Область видимости определяет, где переменные доступны в коде, в то время как контекст выполнения определяет значение `this` внутри функции. Контекст зависит от того, как и где функция была вызвана.

**Samples:**

```javascript
const obj = {
  method() {
    console.log(this) // 'this' определяется контекстом вызова
  },
}

obj.method() // this будет obj
const method = obj.method
method() // this будет window (в нестрогом режиме) или undefined (в строгом режиме)
```

Контекст вызова определяет, какой объект будет связан с `this`. Важно понимать разницу между областью видимости и контекстом, чтобы избежать ошибок при работе с объектами и методами.

## The Mechanism of Lexical Environment Traversal

Когда функция обращается к переменной, JavaScript сначала ищет её в текущем лексическом окружении. Если переменная не найдена, поиск продолжается во внешнем лексическом окружении, и так далее, вплоть до глобального окружения. Этот процесс называется лексическим поиском.

**Samples:**

```javascript
let x = 'global'
function outer() {
  let x = 'outer'
  function inner() {
    console.log(x) // 'outer' - находит в ближайшем окружении
  }
  inner()
}
outer()
```

Функция `inner` сначала ищет переменную `x` в своём окружении. Если бы там её не было, поиск продолжился бы в `outer`, и, если бы и там не нашлось, в глобальном окружении.

## Connection between Function and its Lexical Environment

Функция всегда сохраняет доступ к лексическому окружению, в котором она была создана. Это позволяет функциям, возвращаемым или переданным как аргументы, продолжать доступ к переменным, объявленным в исходном контексте.

**Samples:**

```javascript
function createCounter() {
  let count = 0
  return function () {
    return ++count
  }
}

const counter = createCounter()
console.log(counter()) // 1
console.log(counter()) // 2
```

Функция `counter` сохраняет доступ к переменной `count`, даже после того как `createCounter` завершилась. Это делает возможным создание замыканий — функций с приватными данными.

# Advanced Functions

## `this` in Functions

В JavaScript `this` - это специальная переменная, которая указывает на объект, контекст которого определяет, на что именно будет ссылаться `this` в момент вызова функции. Важно помнить, что значение `this` устанавливается во время вызова функции и зависит от того, как эта функция была вызвана.

**Samples:**

```javascript
function showThis() {
  console.log(this)
}

showThis() // `this` ссылается на глобальный объект (window в браузере, global в Node.js)

const obj = {
  method: showThis,
}

obj.method() // `this` ссылается на объект obj
```

## Reference Type & Losing this

При передаче метода объекта как колбэка, значение `this` может быть потеряно. Это происходит потому, что `this` определяется в момент вызова функции. В случае передачи метода как колбэка, он будет вызван в глобальном контексте (или в контексте таймера), а не в контексте объекта.

**Samples:**

```javascript
const obj = {
  name: 'Object',
  greet: function () {
    console.log(`Hello, ${this.name}!`)
  },
}

obj.greet() // "Hello, Object!"

setTimeout(obj.greet, 1000) // "Hello, undefined!" (this потеряно)
```

Чтобы сохранить контекст `this`, можно использовать метод `bind`, который привязывает функцию к определённому значению `this`.

```javascript
setTimeout(obj.greet.bind(obj), 1000) // "Hello, Object!"
```

## Understand the Difference between Function and Method

Функция — это самостоятельный блок кода. Метод — это функция, которая является свойством объекта. Основное различие заключается в том, как определяется `this` при их вызове.

**Samples:**

```javascript
function standaloneFunction() {
  // ...
}

const obj = {
  method: function () {
    // ...
  },
}
```

## Manage this

Для управления `this` можно использовать `call`, `apply` и `bind`:

- `call`: Вызывает функцию с заданным `this` и аргументами, переданными через запятую.
- `apply`: Вызывает функцию с заданным `this` и аргументами, переданными в виде массива.
- `bind`: Создает новую функцию с привязанным `this`.

**Samples:**

```javascript
function greet(greeting) {
  console.log(`${greeting}, ${this.name}!`)
}

const person = {name: 'John'}

greet.call(person, 'Hello') // "Hello, John!"
greet.apply(person, ['Hi']) // "Hi, John!"

const boundGreet = greet.bind(person)
boundGreet('Hey') // "Hey, John!"
```

## Binding, Binding One Function Twice

Когда функция привязана к значению `this` с помощью `bind`, она остаётся привязанной к этому значению, и повторная попытка привязки к другому значению `this` не изменит его.

**Samples:**

```javascript
function greet() {
  console.log(`Hello, ${this.name}!`)
}

const person1 = {name: 'John'}
const person2 = {name: 'Jane'}

const greetJohn = greet.bind(person1)
const greetJane = greetJohn.bind(person2) // Не сработает

greetJohn() // "Hello, John!"
greetJane() // "Hello, John!"
```

# ECMAScript Intermediate

## Function Default Parameters

В JavaScript параметры функции могут иметь значения по умолчанию, которые будут использоваться, если аргументы не были переданы при вызове функции.

```javascript
function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`)
}

greet() // "Hello, Guest!"
greet('John') // "Hello, John!"
```

## Using Spread Operator for Function Arguments

Оператор `spread` (`...`) позволяет передавать элементы массива как отдельные аргументы функции, что особенно удобно для работы с функциями, которые принимают множество аргументов.

```javascript
function sum(a, b, c) {
  return a + b + c
}

const numbers = [1, 2, 3]
console.log(sum(...numbers)) // 6
```

## Comparing arguments and rest parameters

`arguments` - это встроенный объект, доступный внутри всех функций, который содержит все переданные аргументы. Rest-параметр (`...args`) - это современная замена `arguments`, которая собирает "оставшиеся" аргументы в массив и позволяет работать с ними более удобно и эффективно.

```javascript
function oldWay() {
  console.log(arguments) // Объект arguments
}

function newWay(...args) {
  console.log(args) // Массив args
}

oldWay(1, 2, 3) // { '0': 1, '1': 2, '2': 3 }
newWay(1, 2, 3) // [1, 2, 3]
```

## Array Concatenation with Spread Operator

Оператор `spread` (`...`) также может использоваться для объединения массивов, обеспечивая более читабельный и элегантный способ, чем использование метода `concat`.

```javascript
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const combined = [...arr1, ...arr2]
console.log(combined) // [1, 2, 3, 4, 5, 6]
```

## Destructuring Assignments for Variables and Function Arguments

Деструктуризация позволяет извлекать значения из массивов или объектов и присваивать их переменным напрямую. Это делает код более компактным и удобочитаемым.

```javascript
const person = {name: 'John', age: 30}
const {name, age} = person
console.log(name, age) // "John" 30

function printPerson({name, age}) {
  console.log(`${name} is ${age} years old`)
}
printPerson(person) // "John is 30 years old"
```

## for...of loop (optional)

Цикл `for..of` предназначен для итерирования по итерируемым объектам, таким как массивы, строки, объекты `Map`, `Set` и другие. Он позволяет удобно проходить по элементам этих структур данных.

```javascript
const arr = ['a', 'b', 'c']
for (const element of arr) {
  console.log(element)
}
// Вывод:
// a
// b
// c
```

# Objects Built-in Methods

## Utilizing Object.keys and Object.values

Методы `Object.keys()` и `Object.values()` позволяют легко работать с ключами и значениями объекта. Эти методы полезны при необходимости перебрать все свойства объекта или создать массивы ключей и значений для дальнейшей обработки.

- **`Object.keys(obj)`** возвращает массив строк, содержащих все перечисляемые свойства объекта `obj`.
- **`Object.values(obj)`** возвращает массив всех значений этих перечисляемых свойств в том же порядке, в котором они появляются в объекте.

Эти методы часто используются в комбинации с методами массивов, такими как `map()`, `filter()`, и `reduce()`.

**Samples:**

```javascript
const person = {
  name: 'John',
  age: 30,
  job: 'developer',
}

// Получаем массив ключей объекта
const keys = Object.keys(person)
console.log(keys) // ['name', 'age', 'job']

// Получаем массив значений объекта
const values = Object.values(person)
console.log(values) // ['John', 30, 'developer']

// Используем keys и values для создания новых массивов
const upperCaseKeys = keys.map((key) => key.toUpperCase())
console.log(upperCaseKeys) // ['NAME', 'AGE', 'JOB']

const stringifiedValues = values.map((value) => String(value))
console.log(stringifiedValues) // ['John', '30', 'developer']
```

## Working with Static Object Methods

Статические методы объекта `Object` - это методы, доступные непосредственно через сам объект `Object`, а не через его экземпляры. Эти методы предоставляют множество полезных возможностей для работы с объектами, таких как клонирование, создание объектов с заданным прототипом, замораживание объектов, и другие.

- **`Object.assign(target, ...sources)`**: Копирует перечисляемые свойства из одного или нескольких источников в целевой объект. Возвращает целевой объект.
- **`Object.create(proto, [propertiesObject])`**: Создает новый объект с указанным объектом-прототипом и необязательными свойствами.
- **`Object.freeze(obj)`**: "Замораживает" объект, делая его неизменяемым. Все существующие свойства становятся недоступными для изменения, добавления или удаления.

**Samples:**

```javascript
// Object.assign() - Клонирование объекта
const source = {a: 1, b: 2}
const target = {b: 3, c: 4}
const result = Object.assign(target, source)
console.log(result) // { a: 1, b: 2, c: 4 }
console.log(target) // { a: 1, b: 2, c: 4 }

// Object.create() - Создание объекта с заданным прототипом
const proto = {
  greet() {
    return 'Hello!'
  },
}
const obj = Object.create(proto)
console.log(obj.greet()) // 'Hello!'
console.log(Object.getPrototypeOf(obj) === proto) // true

// Object.freeze() - Замораживание объекта
const frozen = Object.freeze({x: 1})
frozen.x = 2 // Попытка изменить замороженный объект
console.log(frozen.x) // 1 - изменение не произошло
```

## Property Flags and Descriptors

В JavaScript, каждое свойство объекта имеет три "флага" (flags), которые определяют его поведение: `writable`, `enumerable`, и `configurable`. Эти флаги можно изменять и настраивать с помощью метода `Object.defineProperty()`.

- **`writable`**: Если `true`, значение свойства может быть изменено, иначе свойство только для чтения.
- **`enumerable`**: Если `true`, свойство будет видно в циклах, таких как `for...in`, или при использовании методов, вроде `Object.keys()`.
- **`configurable`**: Если `true`, свойство может быть удалено, и его атрибуты (кроме `writable`) могут быть изменены.

**Samples:**

```javascript
const obj = {}

Object.defineProperty(obj, 'readOnly', {
  value: 42,
  writable: false, // Значение нельзя изменить
  enumerable: true, // Свойство будет перечисляемым
  configurable: false, // Нельзя изменить флаги или удалить свойство
})

obj.readOnly = 100 // Не изменит значение, так как writable: false
console.log(obj.readOnly) // 42

// Определяем свойства с разными флагами
Object.defineProperty(obj, 'hidden', {
  value: 'secret',
  enumerable: false, // Свойство не будет видно в Object.keys()
})

console.log(Object.keys(obj)) // ['readOnly']
console.log(Object.getOwnPropertyDescriptor(obj, 'readOnly'))
// { value: 42, writable: false, enumerable: true, configurable: false }
```

## Creating Iterable Objects and Using Symbol.iterator (optional)

Для создания итерируемых объектов в JavaScript можно использовать `Symbol.iterator`. Это специальный метод, который определяет, как объект должен вести себя в контексте итерации (например, в цикле `for...of`).

Когда объект итерируется, метод `Symbol.iterator` вызывается для создания итератора, который определяет последовательность значений, которые будут возвращены.

**Samples:**

```javascript
const iterableObj = {
  data: [1, 2, 3],
  [Symbol.iterator]() {
    let index = 0
    return {
      next: () => {
        if (index < this.data.length) {
          return {value: this.data[index++], done: false}
        } else {
          return {done: true} // Итерация завершена
        }
      },
    }
  },
}

// Итерируем объект с использованием for...of
for (let item of iterableObj) {
  console.log(item)
}
// Выведет: 1, 2, 3
```

# ECMAScript Data Types & Expressions

## Working with Object Computed Properties

Вычисляемые свойства (Computed Properties) позволяют использовать выражения в качестве имен свойств объекта. Это особенно полезно, когда имя свойства неизвестно заранее или зависит от какого-либо условия. Синтаксис включает использование квадратных скобок `[]`, которые позволяют динамически вычислять имя свойства.

**Samples:**

```javascript
const propName = 'age'
const action = 'say' + 'Hello'

const person = {
  name: 'John',
  [propName]: 30, // имя свойства будет 'age'
  [action]() {
    // создается метод sayHello
    console.log('Hello!')
  },
}

console.log(person.age) // 30
person.sayHello() // "Hello!"
```

- В примере `propName` и `action` динамически определяют имена свойств. Это позволяет гибко создавать объекты с заранее неизвестными свойствами, что может быть полезно в ситуациях, когда структура объекта зависит от внешних данных или пользовательского ввода.
- Этот подход также позволяет генерировать методы с динамическими именами, как в случае с `sayHello`.

## Iterating Through Object Keys

Перебор ключей объекта — это базовая операция, которая позволяет получать доступ к значениям, связанным с этими ключами. Существуют два популярных способа:

1. **`for...in`**: Этот цикл итерирует по всем перечисляемым свойствам объекта, включая те, которые унаследованы из прототипа (если не использовать `hasOwnProperty()`).
2. **`Object.keys()`**: Этот метод возвращает массив собственных перечисляемых свойств объекта. Использование `forEach` с этим массивом позволяет более точно контролировать процесс итерации.

**Samples:**

```javascript
const person = {name: 'John', age: 30, job: 'developer'}

// Использование for...in
for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(`${key}: ${person[key]}`)
  }
}

// Использование Object.keys() и forEach
Object.keys(person).forEach((key) => {
  console.log(`${key}: ${person[key]}`)
})
```

- Цикл `for...in` итерирует все перечисляемые свойства, включая унаследованные, поэтому `hasOwnProperty()` важно использовать, чтобы избегать проблем при работе с объектами, которые имеют прототипные цепочки.
- `Object.keys()` возвращает только собственные свойства объекта, поэтому использование этого метода более безопасно и предсказуемо, когда не требуется учитывать унаследованные свойства.

# Arrays Built-in Methods

## Copying and Modifying Arrays

Копирование и модификация массивов — это важные операции в JavaScript, которые часто встречаются в различных задачах, таких как создание новых массивов с измененными элементами или клонирование существующих массивов.

- **`slice()`**: Создает новый массив, содержащий копию части исходного массива.
- **Spread оператор `...`**: Копирует все элементы исходного массива в новый массив.
- **`Array.from()`**: Преобразует итерируемый объект или массивоподобный объект в новый массив.
- **`map()`**: Создает новый массив с результатами вызова переданной функции для каждого элемента исходного массива.

**Samples:**

```javascript
const original = [1, 2, 3]

// Копирование массива
const copy1 = original.slice()
const copy2 = [...original]
const copy3 = Array.from(original)

// Модификация массива
const modified = original.map((x) => x * 2)

console.log(copy1) // [1, 2, 3]
console.log(copy2) // [1, 2, 3]
console.log(copy3) // [1, 2, 3]
console.log(modified) // [2, 4, 6]
```

- Эти методы не изменяют исходный массив, а возвращают новый, что важно для обеспечения неизменяемости (immutability) в коде, особенно при работе с состоянием в React.
- `map()` — это мощный инструмент для трансформации массивов, поскольку он позволяет применить функцию к каждому элементу массива и вернуть новый массив с результатами этих преобразований.

## Flattening Nested Arrays

Метод `flat()` в JavaScript используется для "выравнивания" вложенных массивов, что полезно, когда необходимо работать с многомерными массивами и свести их к плоской структуре.

**Samples:**

```javascript
const nested = [1, [2, 3], [4, [5, 6]]]
console.log(nested.flat()) // [1, 2, 3, 4, [5, 6]]
console.log(nested.flat(2)) // [1, 2, 3, 4, 5, 6]

// Для более старых версий JavaScript:
function flattenDeep(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val),
    []
  )
}
console.log(flattenDeep(nested)) // [1, 2, 3, 4, 5, 6]
```

- Метод `flat()` принимает аргумент, указывающий глубину вложенности, которую нужно "выравнивать". По умолчанию глубина равна 1.
- В старых версиях JavaScript или для полной совместимости можно использовать рекурсивную функцию `flattenDeep`, которая сводит вложенные массивы в плоскую структуру.

# Arrays Iterating, Sorting, Filtering

## Sorting and Custom Sorting Arrays

Метод `sort()` в JavaScript позволяет сортировать массивы на месте, то есть изменяет исходный массив. Можно передать функцию сравнения, которая определяет порядок сортировки.

**Samples:**

```javascript
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
numbers.sort((a, b) => a - b)
console.log(numbers) // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

const people = [
  {name: 'John', age: 30},
  {name: 'Alice', age: 25},
  {name: 'Bob', age: 35},
]
people.sort((a, b) => a.age - b.age)
console.log(people) // Отсортировано по возрасту
```

- `sort()` по умолчанию сортирует элементы как строки. Для чисел или более сложных структур данных, таких как объекты, требуется функция сравнения.
- Функция сравнения `(a, b) => a - b` используется для сортировки чисел по возрастанию. Для сортировки объектов можно использовать любой критерий, например, возраст.

## Filtering Array Elements

Метод `filter()` создает новый массив, содержащий все элементы исходного массива, которые соответствуют условию, заданному в переданной функции.

**Samples:**

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbers.filter((num) => num % 2 === 0)
console.log(evenNumbers) // [2, 4, 6, 8, 10]

const people = [
  {name: 'John', age: 30},
  {name: 'Alice', age: 25},
  {name: 'Bob', age: 35},
]
const adults = people.filter((person) => person.age >= 30)
console.log(adults) // [{ name: 'John', age: 30 }, { name: 'Bob', age: 35 }]
```

- `filter()` не изменяет исходный массив, а создает новый, что позволяет сохранять неизменяемость данных.
- Этот метод удобен для создания подмножеств данных, таких как фильтрация пользователей по возрасту, нахождение четных чисел и так далее.

# JavaScript in Browser:

## Global Object Window

Объект `window` — это глобальный объект в браузере, представляющий текущее окно браузера. Он предоставляет доступ ко множеству полезных свойств и методов, которые позволяют взаимодействовать с самим окном браузера, а также с текущим контекстом выполнения JavaScript.

**Samples:**

```javascript
console.log(window.innerWidth) // ширина окна браузера
console.log(window.location.href) // текущий URL

window.alert('Hello, world!') // показать диалоговое окно
```

- **`window.innerWidth`**: Возвращает текущую ширину окна браузера. Полезно для работы с адаптивным дизайном.
- **`window.location.href`**: Возвращает текущий URL страницы. Это свойство часто используется для перенаправления или получения информации о текущем местоположении страницы.
- **`window.alert()`**: Отображает модальное диалоговое окно с сообщением. Оно блокирует взаимодействие с остальной частью страницы до тех пор, пока пользователь не закроет его.

## Understanding the Document Object Model (DOM)

DOM (Document Object Model) — это программный интерфейс для HTML и XML документов, который представляет структуру документа в виде дерева объектов, где каждый узел представляет часть документа (элемент, атрибут, текст и т.д.). С помощью DOM можно динамически изменять содержание, структуру и стиль документа.

**Samples:**

```javascript
// Получение элемента по ID
const header = document.getElementById('main-header')

// Изменение содержимого элемента
header.textContent = 'New Header'

// Создание нового элемента
const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new paragraph.'

// Добавление элемента в DOM
document.body.appendChild(newParagraph)
```

- **`document.getElementById('main-header')`**: Возвращает элемент с указанным id. Это один из наиболее эффективных способов доступа к элементам в DOM.
- **`element.textContent`**: Изменяет текстовое содержимое элемента. В отличие от innerHTML, это свойство безопаснее, так как оно не обрабатывает HTML-разметку.
- **`document.createElement('p')`**: Создает новый элемент, но еще не добавляет его в DOM.
- **`document.body.appendChild(newParagraph)`**: Добавляет новый элемент в конец тела документа. Это пример манипуляции с DOM.

# Events Basics

## Types of DOM Events

DOM события охватывают широкий спектр взаимодействий пользователя с веб-страницей. Основные категории событий включают:

- **События мыши**: `click`, `dblclick`, `mousedown`, `mouseup`, `mouseover`, `mouseout`, `mousemove`.
- **События клавиатуры**: `keydown`, `keyup`, `keypress`.
- **События формы**: `submit`, `reset`, `change`, `input`, `focus`, `blur`.
- **События документа и окна**: `load`, `resize`, `scroll`, `unload`, `beforeunload`.

## Working with Mouse and Keyboard Events

Обработка событий мыши и клавиатуры позволяет взаимодействовать с пользователем на уровне событий. Используя `addEventListener`, можно назначать функции-обработчики для конкретных событий.

**Samples:**

```javascript
const button = document.getElementById('myButton')

button.addEventListener('click', function (event) {
  console.log('Button clicked!', event)
})

document.addEventListener('keydown', function (event) {
  console.log('Key pressed:', event.key)
})
```

- `addEventListener('click', function)`: Назначает обработчик события клика на кнопку. `event` — это объект события, содержащий информацию о событии, например, тип события, элемент-источник и координаты клика.
- `document.addEventListener('keydown', function)`: Назначает обработчик для всех событий нажатия клавиш на уровне документа. `event.key`возвращает клавишу, которая была нажата.

## Handling Form and Input Events

Формы и поля ввода — это важные элементы пользовательского интерфейса, и их события, такие как `submit`, `input`, `change`, позволяют реагировать на действия пользователя.

**Samples:**

```javascript
const form = document.getElementById('myForm')
const input = document.getElementById('myInput')

form.addEventListener('submit', function (event) {
  event.preventDefault() // Предотвращаем отправку формы
  console.log('Form submitted!')
})

input.addEventListener('input', function (event) {
  console.log('Input value changed:', event.target.value)
})
```

- `event.preventDefault()`: Останавливает стандартное поведение элемента. Например, предотвращает отправку формы, что позволяет сначала выполнить валидацию или другие действия.
- `input.addEventListener('input', function)`: Обрабатывает изменение значения поля ввода в реальном времени. Полезно для создания динамических форм, проверки данных на лету и т.д.

## Event Listeners

`addEventListener` — это метод, который позволяет назначать несколько обработчиков на одно и то же событие. Это обеспечивает большую гибкость по сравнению с использованием атрибутов событий напрямую в HTML, так как позволяет добавлять и удалять обработчики динамически.

**Samples:**

```javascript
function handler1() {
  console.log('Handler 1')
}

function handler2() {
  console.log('Handler 2')
}

button.addEventListener('click', handler1)
button.addEventListener('click', handler2)

// Удаление обработчика
button.removeEventListener('click', handler1)
```

- Можно назначить несколько обработчиков на одно событие, и они будут вызваны в порядке добавления.
- `removeEventListener` удаляет конкретный обработчик события, что может быть полезно для управления ресурсами и предотвращения утечек памяти.

## Event Phases and Their Differences

События в DOM проходят три фазы:

1. **Фаза захвата (capturing)**: Событие идет от корня документа вниз к целевому элементу.
2. **Фаза цели (target)**: Событие достигает целевого элемента.
3. **Фаза всплытия (bubbling)**: Событие поднимается обратно от целевого элемента к корню.

**Samples:**

```javascript
document.body.addEventListener(
  'click',
  function () {
    console.log('Body clicked - Capturing phase')
  },
  true
) // true для фазы захвата

document.body.addEventListener('click', function () {
  console.log('Body clicked - Bubbling phase')
})

const button = document.getElementById('myButton')
button.addEventListener('click', function () {
  console.log('Button clicked - Target phase')
})
```

- Использование `true` в `addEventListener` заставляет обработчик работать на фазе захвата.
- Обработчики без указания `true` срабатывают на фазе всплытия.
- Понимание фаз событий важно для создания сложных взаимодействий, где нужно управлять порядком выполнения событий

## Custom Events (optional)

Пользовательские события позволяют создавать собственные события и реагировать на них так же, как на стандартные события DOM. Это полезно для организации внутреннего взаимодействия компонентов на странице.

**Samples:**

```javascript
const myEvent = new CustomEvent('myCustomEvent', {
  detail: {message: 'Hello, Custom Event!'},
})

document.addEventListener('myCustomEvent', function (e) {
  console.log(e.detail.message)
})

document.dispatchEvent(myEvent)
```

- **`CustomEvent`**: Создает новое пользовательское событие. Параметр `detail` позволяет передать дополнительные данные с событием.
- **`dispatchEvent`**: Инициирует событие, заставляя браузер вести себя так, как будто это стандартное событие DOM.

**Samples:**

```javascript
const event = new CustomEvent('myEvent')
element.dispatchEvent(event)
```

# Events Propagation / Preventing

## Event Propagation Cycle

События в DOM проходят через три стадии:

1. **Фаза захвата (Capturing)**: Событие начинается от корня документа и спускается вниз по дереву до целевого элемента.
2. **Целевая фаза (Target)**: Событие достигает целевого элемента, на котором оно произошло.
3. **Фаза всплытия (Bubbling)**: Событие поднимается обратно к корню документа.

Этот цикл позволяет контролировать, на каком этапе и в каком порядке будут обрабатываться события.

## Stopping Event Propagation

Метод `event.stopPropagation()` позволяет остановить дальнейшее распространение события по дереву DOM. Это полезно, когда нужно предотвратить обработку события на родительских элементах после его обработки на дочернем элементе.

**Samples:**

```javascript
child.addEventListener('click', function (event) {
  console.log('Child clicked')
  event.stopPropagation()
})

parent.addEventListener('click', function () {
  console.log('Parent clicked') // Не выполнится при клике на child
})
```

## Preventing Default Browser Behavior

Метод `event.preventDefault()` предотвращает действие по умолчанию, которое браузер обычно выполняет при наступлении события. Например, клик по ссылке с `href` по умолчанию приведет к переходу на другую страницу. Используя `preventDefault()`, можно предотвратить этот переход.

**Samples:**

```javascript
const link = document.getElementById('myLink')

link.addEventListener('click', function (event) {
  event.preventDefault()
  console.log('Link clicked, but page not navigated')
})
```

## Event Delegation and Its Pros/Cons

Делегирование событий позволяет привязывать один обработчик событий к родительскому элементу для обработки событий, происходящих на дочерних элементах. Это особенно полезно, когда на странице есть много динамически создаваемых элементов или когда нужно снизить количество обработчиков событий.

**Samples:**

```javascript
const list = document.getElementById('myList')

list.addEventListener('click', function (event) {
  if (event.target.tagName === 'LI') {
    console.log('Clicked list item:', event.target.textContent)
  }
})
```

**Pros**:

- **Экономия памяти**: Меньшее количество обработчиков событий.
- **Обработка динамических элементов**: Работает даже с элементами, добавленными после назначения обработчика.

**Cons**:

- **Сложность отладки**: Может быть сложнее отслеживать источник и последовательность событий.
- **Не все события всплывают**: Некоторые события, например, `focus`, не всплывают, что ограничивает применение делегирования.

# Timers

## Usage of setTimeout / setInterval

- **`setTimeout`**: Выполняет функцию один раз после указанной задержки.
- **`setInterval`**: Выполняет функцию регулярно с указанным интервалом времени.

**Samples:**

```javascript
// setTimeout
setTimeout(() => {
  console.log('This runs after 2 seconds')
}, 2000)

// setInterval
let counter = 0
const intervalId = setInterval(() => {
  console.log('This runs every 1 second')
  counter++
  if (counter >= 5) {
    clearInterval(intervalId)
  }
}, 1000)
```

## Clearing Timers with clearTimeout / clearInterval

- **`clearTimeout`**: Останавливает выполнение функции, запланированной с помощью `setTimeout`.
- **`clearInterval`**: Прекращает повторное выполнение функции, запущенной с помощью `setInterval`.

**Samples:**

```javascript
const timeoutId = setTimeout(() => {
  console.log('This will not run')
}, 5000)

clearTimeout(timeoutId)

const intervalId = setInterval(() => {
  console.log('Running...')
}, 1000)

// Остановить интервал через 5 секунд
setTimeout(() => {
  clearInterval(intervalId)
  console.log('Interval stopped')
}, 5000)
```

# Web Storage API & Cookies

## Differences between LocalStorage, SessionStorage, and Cookies

1. **localStorage**: Позволяет хранить данные без срока истечения. Это означает, что информация сохраняется между сессиями браузера и доступна до тех пор, пока не будет явно удалена.
2. **sessionStorage**: Хранит данные только в течение одной сессии браузера. Как только вкладка или окно браузера закрывается, данные удаляются.
3. **Cookies**: Маленькие фрагменты данных, которые могут иметь срок действия и отправляются на сервер с каждым HTTP-запросом. Они чаще используются для хранения информации, связанной с аутентификацией пользователя или отслеживанием сессий.

**Samples:**

```javascript
// localStorage
localStorage.setItem('username', 'John')
console.log(localStorage.getItem('username')) // 'John'

// sessionStorage
sessionStorage.setItem('tempData', 'Some data')
console.log(sessionStorage.getItem('tempData')) // 'Some data'

// Cookies
document.cookie = 'user=John; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/'

// Чтение cookie
console.log(document.cookie)
```

# Date & Time (optional)

## Working with the Date Object

Объект `Date` в JavaScript используется для работы с датами и временем. С его помощью можно получить текущую дату и время, вычислить разницу между датами или форматировать их по-разному.

**Samples:**

```javascript
const now = new Date()
console.log(now.toLocaleString()) // текущая дата и время

const specificDate = new Date('2023-12-31T23:59:59')
console.log(specificDate.getFullYear()) // 2023
console.log(specificDate.getMonth()) // 11 (December is 11, так как месяцы нумеруются с 0)

// Вычисление разницы между датами
const diff = specificDate - now
console.log(`Days until New Year: ${Math.ceil(diff / (1000 * 60 * 60 * 24))}`)
```

## Timezones and Internationalization in JavaScript (Intl)

`Intl` предоставляет возможности для форматирования дат, чисел и строк в зависимости от локали. Это полезно для создания приложений, которые поддерживают разные языки и регионы.

**Samples:**

```javascript
const date = new Date('2023-05-25T12:00:00Z')

// Форматирование даты для разных локалей
console.log(new Intl.DateTimeFormat('en-US').format(date)) // 5/25/2023
console.log(new Intl.DateTimeFormat('de-DE').format(date)) // 25.5.2023

// Форматирование времени с учетом часового пояса
console.log(
  new Intl.DateTimeFormat('en-US', {timeZone: 'America/New_York'}).format(date)
)
console.log(
  new Intl.DateTimeFormat('en-US', {timeZone: 'Asia/Tokyo'}).format(date)
)

// Форматирование чисел
const number = 1234567.89
console.log(new Intl.NumberFormat('en-US').format(number)) // 1,234,567.89
console.log(new Intl.NumberFormat('de-DE').format(number)) // 1.234.567,89
```

# Design Patterns

## Intermediate Knowledge

## Understanding and Applying KISS, DRY, and YAGNI Principles

**1. KISS (Keep It Simple, Stupid):**

Этот принцип заключается в том, что код должен быть максимально простым и понятным. Чем сложнее решение, тем больше вероятность возникновения ошибок.

**Samples:**

```javascript
// Сложно (не KISS)
function getDayName(dayNumber) {
  switch (dayNumber) {
    case 1:
      return 'Monday'
    case 2:
      return 'Tuesday'
    case 3:
      return 'Wednesday'
    case 4:
      return 'Thursday'
    case 5:
      return 'Friday'
    case 6:
      return 'Saturday'
    case 7:
      return 'Sunday'
    default:
      return 'Invalid day'
  }
}

// Просто (KISS)
function getDayName(dayNumber) {
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]
  return days[dayNumber - 1] || 'Invalid day'
}
```

**2. DRY (Don't Repeat Yourself):**

Принцип гласит, что не следует дублировать код. Если один и тот же фрагмент кода встречается несколько раз, его стоит вынести в отдельную функцию или модуль.

**Samples:**

```javascript
// Не DRY
function calculateAreaSquare(side) {
  return side * side
}

function calculateAreaRectangle(width, height) {
  return width * height
}

// DRY
function calculateArea(width, height = width) {
  return width * height
}
```

**3. YAGNI (You Aren't Gonna Need It):**

Этот принцип говорит о том, что не стоит добавлять функциональность или писать код, который не нужен в данный момент. Писать код "на будущее" обычно приводит к излишней сложности.

**Samples:**

```javascript
// Не YAGNI (преждевременная оптимизация)
class User {
  constructor(name) {
    this.name = name
  }

  getName() {
    return this.name
  }

  setName(name) {
    this.name = name
  }

  // Методы, которые могут не понадобиться
  getNameUpperCase() {
    return this.name.toUpperCase()
  }

  getNameLength() {
    return this.name.length
  }
}

// YAGNI
class User {
  constructor(name) {
    this.name = name
  }
}
```
