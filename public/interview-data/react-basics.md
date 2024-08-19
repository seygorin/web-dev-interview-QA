---
title: React Basics
---

## Advanced Expressions

### Understanding Object.is (optional)

`Object.is()` — это метод в JavaScript, который предназначен для сравнения двух значений на строгое равенство. Хотя он работает схоже с оператором `===`, есть некоторые важные различия. `Object.is()` считает NaN равным NaN, что отличается от поведения `===`, который считает `NaN` не равным самому себе. Кроме того, `Object.is()` различает `-0` и `+0`, которые считаются равными при использовании `===`.

Эти особенности делают `Object.is()` полезным в ситуациях, где требуется более точное сравнение значений, чем то, что предлагает `===`.

**Пример:**

```javascript
console.log(Object.is(NaN, NaN)) // true
console.log(NaN === NaN) // false

console.log(Object.is(-0, +0)) // false
console.log(-0 === +0) // true
```

Использование `Object.is()` может быть полезно в случаях, когда нужно определить, действительно ли два значения идентичны с учетом всех нюансов JavaScript.

### Differences between let, var, and const

В JavaScript существуют три способа объявления переменных: `var`, `let`, и `const`. Каждый из них имеет свои особенности, которые важно понимать при разработке:

- **`var`:**

  - **Область видимости:** Функциональная, то есть переменная, объявленная с `var`, доступна в пределах функции, в которой она объявлена, или глобально, если объявлена вне функции.
  - **Hoisting (поднятие):** Объявления переменных с использованием var поднимаются в начало своей области видимости, но не их инициализация.
  - **Повторное объявление:** Разрешено повторное объявление одной и той же переменной в пределах одной области видимости.

- **`let`:**

  - **Область видимости:** Блочная, то есть переменная доступна только в пределах блока `{}`, в котором она объявлена.
  - **Hoisting:** Переменные, объявленные с let, поднимаются в начало блока, но к ним нельзя обращаться до инициализации из-за временной мертвой зоны (TDZ).
  - **Повторное объявление:** Повторное объявление одной и той же переменной в одной и той же области видимости вызовет ошибку.

- **`const`:**
  - **Область видимости:** Также блочная, как и у let.
  - **Hoisting:** Ведет себя аналогично let с точки зрения поднятия.
  - **Неизменяемость:** Значение переменной, объявленной с помощью const, нельзя переназначить после инициализации. Однако, если const используется для объявления объекта, свойства этого объекта могут изменяться.

**Пример:**

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

### Exploring the Temporal Dead Zone

Временная мертвая зона (TDZ) — это концепция в JavaScript, связанная с `let` и `const`. TDZ — это период времени между моментом, когда переменная объявляется в области видимости, и моментом её фактической инициализации. В этот период любая попытка обратиться к переменной приводит к ошибке `ReferenceError`.

Важно понимать, что TDZ существует только для `let` и `const`. `var` не подвержен этой концепции, так как его значение поднимается и инициализируется как `undefined`.

**Пример:**

```javascript
console.log(x) // ReferenceError: Cannot access 'x' before initialization
let x = 5

// В отличие от:
console.log(y) // undefined
var y = 5
```

Это поведение помогает разработчикам избегать ошибок, связанных с использованием переменных до их инициализации, и делает код более предсказуемым.

### Concepts of Hoisting

Hoisting (поднятие) — это механизм в JavaScript, при котором объявления переменных и функций поднимаются в начало их области видимости перед выполнением кода. Важно понимать, что поднимаются именно объявления, но не инициализации.

Для `var` переменных поднимается объявление, но не их присвоенное значение, поэтому до момента инициализации они имеют значение `undefined`. Для переменных, объявленных с `let` и `const`, происходит подъем объявления, но их инициализация остаётся на своём месте, поэтому до момента инициализации они находятся в TDZ.

Функции, объявленные с использованием `function`, полностью поднимаются, включая их тело, что позволяет вызывать их до момента их фактического объявления в коде.

**Пример:**

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

Понимание hoisting помогает избежать ошибок, связанных с порядком выполнения кода, и делает код более предсказуемым.

// The role of polyfills.

Полифилы — это куски кода (обычно функции), которые реализуют возможности нового стандарта JavaScript в старых окружениях, которые эти возможности не поддерживают. Полифилы позволяют разработчикам использовать новейшие функции языка, не беспокоясь о том, что их код не будет работать в старых браузерах.

Полифилы часто используются для добавления поддержки таких методов, как `Array.prototype.includes`, `Promise`, или даже `fetch` в браузерах, где они не реализованы.

Пример полифила для метода `Array.prototype.includes`:

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

// Functions

// Differences and uses of arrow functions, function expressions, and function declarations.

1. Function Declaration:
   - Hoisting (Поднятие): Объявление функций поднимается в начало своей области видимости, что позволяет вызывать функцию до её объявления в коде.
   - Контекст (this): Function declaration имеет собственный контекст `this`, который определяется в момент вызова функции.
   - Использование как конструктор: Функция, объявленная через function declaration, может использоваться как конструктор для создания объектов с помощью ключевого слова `new`.

```javascript
function greet(name) {
  return `Hello, ${name}!`
}

const instance = new greet() // Function declaration может использоваться как конструктор
```

2. Function Expression:
   - Hoisting: В отличие от function declaration, function expression не поднимается, поэтому её нельзя вызывать до того, как она была объявлена.
   - Контекст (this): Имеет собственный контекст `this`, аналогично function declaration, но контекст может быть изменён при передаче функции в другие части кода.
   - Использование как конструктор: Function expression также может использоваться как конструктор, если она не является стрелочной функцией.

```javascript
const greet = function (name) {
  return `Hello, ${name}!`
}

const instance = new greet() // Function expression также может использоваться как конструктор
```

3. Arrow Function:
   - Hoisting: Как и function expression, стрелочные функции не поднимаются, и их нужно объявлять до использования.
   - Контекст (this): Стрелочные функции не имеют собственного контекста `this`. Вместо этого они используют `this` из окружающего лексического окружения. Это делает их удобными для использования в методах или вложенных функциях, где важно сохранить контекст внешней функции.
   - Использование как конструктор: Стрелочные функции не могут использоваться как конструкторы, и попытка вызвать их с `new` приведет к ошибке.
   - Более краткий синтаксис: Стрелочные функции имеют лаконичный синтаксис, что делает их удобными для простых выражений.

```javascript
const greet = (name) => `Hello, ${name}!`

// greet не может использоваться как конструктор:
// const instance = new greet(); // TypeError: greet is not a constructor
```

// Functional Scope

// Global scope vs. functional scope.

- Область видимости в JavaScript определяет, где переменные и функции могут быть доступны и использованы в коде. В JavaScript есть два основных типа области видимости:

  - Глобальная область видимости: Переменные и функции, объявленные в глобальной области видимости, доступны в любом месте вашего скрипта. Глобальная область видимости создается, когда переменные объявляются вне каких-либо функций или блоков кода. Однако чрезмерное использование глобальных переменных может привести к конфликтам имен и затруднить отладку кода.
  - Функциональная область видимости: Переменные, объявленные внутри функции, доступны только в пределах этой функции и недоступны вне её. Эта область видимости защищает данные от случайного изменения или доступа из других частей кода.

Пример:

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

// Variable visibility areas.

Область видимости переменных определяется тем, где они объявлены, и ограничивает доступ к ним из других частей кода. Переменные, объявленные в одной области видимости, недоступны в другой, если она не является вложенной. Это предотвращает случайное изменение переменных и защищает данные.

Пример:

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

// Working with nested scopes.

Вложенные области видимости — это концепция, где функции имеют доступ к переменным из областей видимости, в которых они были объявлены, и всех внешних областей видимости. Это позволяет внутренним функциям использовать данные из внешних функций, но внешние функции не могут получить доступ к переменным внутренних функций.

Пример:

```javascript
function outermost() {
  var a = 1
  function outer() {
    var b = 2
    function inner() {
      var c = 3
      console.log(a, b, c) // 1 2 3
    }
    inner()
    console.log(a, b) // 1 2
    // console.log(c); // ReferenceError: c is not defined
  }
  outer()
  console.log(a) // 1
  // console.log(b); // ReferenceError: b is not defined
}
outermost()
```

Здесь `inner` имеет доступ к `a` и `b` из внешних областей видимости, но `outermost` не может получить доступ к `b` и `c`, потому что они объявлены в более узких областях видимости. Это поведение обеспечивает модульность и изоляцию данных.

// Closures Advanced

// Understanding context and lexical environments.

Лексическое окружение — это структура данных, которая содержит ссылки на переменные и функции, доступные в данном блоке кода. Контекст выполнения — это окружение, которое включает лексическое окружение, текущее значение `this` и другие параметры, определяющие выполнение кода.

Пример:

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

// Differences between scope and context.

Область видимости определяет, где переменные доступны в коде, в то время как контекст выполнения определяет значение `this` внутри функции. Контекст зависит от того, как и где функция была вызвана.

Пример:

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

// The mechanism of lexical environment traversal.

Когда функция обращается к переменной, JavaScript сначала ищет её в текущем лексическом окружении. Если переменная не найдена, поиск продолжается во внешнем лексическом окружении, и так далее, вплоть до глобального окружения. Этот процесс называется лексическим поиском.

Пример:

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

// Connection between function and its lexical environment.

Функция всегда сохраняет доступ к лексическому окружению, в котором она была создана. Это позволяет функциям, возвращаемым или переданным как аргументы, продолжать доступ к переменным, объявленным в исходном контексте.

Пример:

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

// Advanced Functions

// this in functions

В JavaScript `this` - это специальная переменная, которая указывает на объект, контекст которого определяет, на что именно будет ссылаться `this` в момент вызова функции. Важно помнить, что значение `this` устанавливается во время вызова функции и зависит от того, как эта функция была вызвана.

Пример:

```javascript
function showThis() {
  console.log(this)
}

showThis() // `this` ссылается на глобальный объект (window в браузере, global в Node.js), или будет `undefined` в строгом режиме

const obj = {
  method: showThis,
}

obj.method() // `this` ссылается на объект obj, так как метод вызван через этот объект
```

В строгом режиме (`"use strict"`), если `this` не задан явно, он будет равен `undefined`, а не глобальному объекту.

// Reference Type & losing this

При передаче метода объекта как колбэка, значение `this` может быть потеряно. Это происходит потому, что `this` определяется в момент вызова функции. В случае передачи метода как колбэка, он будет вызван в глобальном контексте (или в контексте таймера), а не в контексте объекта.

Пример:

```javascript
const obj = {
  name: 'Object',
  greet() {
    console.log(`Hello, ${this.name}!`)
  },
}

obj.greet() // "Hello, Object!"

setTimeout(obj.greet, 1000) // "Hello, undefined!" (this теряется)
```

Чтобы сохранить контекст `this`, можно использовать метод `bind`, который привязывает функцию к определённому значению `this`.

```javascript
setTimeout(obj.greet.bind(obj), 1000) // "Hello, Object!" - `this` сохранён с помощью bind
```

// Understand difference between function and method

Функция и метод в JavaScript - это функции, но метод - это функция, которая является свойством объекта. Основное различие заключается в том, как определяется `this` при их вызове.

Пример:

```javascript
function standalone() {
  console.log(this)
}

const obj = {
  method() {
    console.log(this)
  },
}

standalone() // `this` ссылается на глобальный объект или undefined в строгом режиме
obj.method() // `this` ссылается на obj, так как метод вызван через этот объект
```

// Manage this

Для управления значением `this` в функции можно использовать методы `call`, `apply`, и `bind`. Эти методы позволяют явно задавать значение `this` для функции.

- call: вызывает функцию с указанным значением `this` и аргументами, переданными через запятую.
- apply: вызывает функцию с указанным значением `this` и аргументами, переданными в виде массива.
- bind: возвращает новую функцию с привязанным значением `this`.

Пример:

```javascript
function greet(greeting) {
  console.log(`${greeting}, ${this.name}!`)
}

const person = {name: 'John'}

greet.call(person, 'Hello') // "Hello, John!" - `this` указывает на person
greet.apply(person, ['Hi']) // "Hi, John!" - `this` указывает на person

const boundGreet = greet.bind(person)
boundGreet('Hey') // "Hey, John!" - `this` указывает на person, благодаря bind
```

// Binding, binding one function twice

Когда функция привязана к значению `this` с помощью `bind`, она остаётся привязанной к этому значению, и повторная попытка привязки к другому значению `this` не изменит его.

Пример:

```javascript
function greet() {
  console.log(`Hello, ${this.name}!`)
}

const person1 = {name: 'John'}
const person2 = {name: 'Jane'}

const greetJohn = greet.bind(person1)
const greetJane = greetJohn.bind(person2) // Эта попытка привязки не изменит `this`

greetJohn() // "Hello, John!" - `this` привязан к person1
greetJane() // "Hello, John!" - `this` всё ещё привязан к person1, даже после попытки повторной привязки
```

// ECMAScript Intermediate

// Function default parameters.

В JavaScript параметры функции могут иметь значения по умолчанию, которые будут использоваться, если аргументы не были переданы при вызове функции.

Пример:

```javascript
function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`)
}

greet() // "Hello, Guest!" - используется значение по умолчанию
greet('John') // "Hello, John!" - используется переданное значение
```

// Using spread operator for function arguments.

Оператор spread (`...`) позволяет передавать элементы массива как отдельные аргументы функции, что особенно удобно для работы с функциями, которые принимают множество аргументов.

Пример:

```javascript
function sum(a, b, c) {
  return a + b + c
}

const numbers = [1, 2, 3]
console.log(sum(...numbers)) // 6 - элементы массива передаются как отдельные аргументы
```

// Comparing arguments and rest parameters.

`arguments` - это встроенный объект, доступный внутри всех функций, который содержит все переданные аргументы. Rest-параметр (`...args`) - это современная замена `arguments`, которая собирает "оставшиеся" аргументы в массив и позволяет работать с ними более удобно и эффективно.

Пример:

```javascript
function oldWay() {
  console.log(arguments) // объект arguments содержит все переданные аргументы
}

function newWay(...args) {
  console.log(args) // rest-параметр args - это массив всех переданных аргументов
}

oldWay(1, 2, 3) // { '0': 1, '1': 2, '2': 3 }
newWay(1, 2, 3) // [1, 2, 3]
```

// Array concatenation with spread operator.

Оператор spread (`...`) также может использоваться для объединения массивов, обеспечивая более читабельный и элегантный способ, чем использование метода `concat`.

Пример:

```javascript
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const combined = [...arr1, ...arr2] // объединение массивов
console.log(combined) // [1, 2, 3, 4, 5, 6]
```

// Destructuring assignments for variables and function arguments.

Деструктуризация позволяет извлекать значения из массивов или объектов и присваивать их переменным напрямую. Это делает код более компактным и удобочитаемым.

Пример:

```javascript
const person = {name: 'John', age: 30}
const {name, age} = person // извлечение значений из объекта person
console.log(name, age) // "John" 30

function printPerson({name, age}) {
  console.log(`${name} is ${age} years old`)
}
printPerson(person) // "John is 30 years old"
```

// for..of loop (optional).

Цикл `for..of` предназначен для итерирования по итерируемым объектам, таким как массивы, строки, объекты `Map`, `Set` и другие. Он позволяет удобно проходить по элементам этих структур данных.

Пример:

```javascript
const arr = ['a', 'b', 'c']
for (const element of arr) {
  console.log(element) // проход по каждому элементу массива
}
// Выведет:
// a
// b
// c
```










// Objects Built-in Methods

// Utilizing Object.keys and Object.values.

Object.keys() возвращает массив ключей объекта, а Object.values() - массив значений.

Пример:

```javascript
const person = {name: 'John', age: 30, job: 'developer'}

console.log(Object.keys(person)) // ['name', 'age', 'job']
console.log(Object.values(person)) // ['John', 30, 'developer']
```

// Working with static Object methods.

Статические методы Object включают Object.assign(), Object.create(), Object.freeze() и другие.

Пример:

```javascript
const source = {a: 1, b: 2}
const target = {b: 3, c: 4}

const result = Object.assign(target, source)
console.log(result) // { a: 1, b: 2, c: 4 }

const frozen = Object.freeze({x: 1})
frozen.x = 2 // Не изменит объект
console.log(frozen.x) // 1
```

// Property flags and descriptors.

Свойства объектов имеют флаги: writable, enumerable и configurable. Их можно изменять с помощью Object.defineProperty().

Пример:

```javascript
const obj = {}

Object.defineProperty(obj, 'readOnly', {
  value: 42,
  writable: false,
  enumerable: true,
  configurable: false,
})

obj.readOnly = 100 // Не изменит значение
console.log(obj.readOnly) // 42

console.log(Object.getOwnPropertyDescriptor(obj, 'readOnly'))
// { value: 42, writable: false, enumerable: true, configurable: false }
```

// Creating iterable objects and using Symbol.iterator (optional).

Symbol.iterator позволяет объектам быть итерируемыми.

Пример:

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
          return {done: true}
        }
      },
    }
  },
}

for (let item of iterableObj) {
  console.log(item)
}
// Выведет: 1, 2, 3
```

// ECMAScript Data Types & Expressions

// Working with Object computed properties.

Вычисляемые свойства позволяют использовать выражения в качестве имен свойств объекта.

Пример:

```javascript
const propName = 'age'
const person = {
  name: 'John',
  [propName]: 30,
  ['say' + 'Hello']() {
    console.log('Hello!')
  },
}

console.log(person.age) // 30
person.sayHello() // "Hello!"
```

// Iterating through Object keys.

Для перебора ключей объекта можно использовать for...in или Object.keys().

Пример:

```javascript
const person = {name: 'John', age: 30, job: 'developer'}

for (let key in person) {
  console.log(`${key}: ${person[key]}`)
}

Object.keys(person).forEach((key) => {
  console.log(`${key}: ${person[key]}`)
})
```

// Arrays Built-in Methods

// Copying and modifying arrays.

Для копирования и модификации массивов можно использовать методы slice(), concat(), spread оператор и map().

Пример:

```javascript
const original = [1, 2, 3]

const copy1 = original.slice()
const copy2 = [...original]
const copy3 = Array.from(original)
const modified = original.map((x) => x * 2)

console.log(copy1) // [1, 2, 3]
console.log(copy2) // [1, 2, 3]
console.log(copy3) // [1, 2, 3]
console.log(modified) // [2, 4, 6]
```

// Flattening nested arrays.

Для "выравнивания" вложенных массивов можно использовать метод flat().

Пример:

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

// Arrays Iterating, Sorting, Filtering

// Sorting and custom sorting arrays.

Метод sort() сортирует массив на месте. Можно передать функцию сравнения для кастомной сортировки.

Пример:

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

// Filtering array elements.

Метод filter() создает новый массив со всеми элементами, прошедшими проверку.

Пример:

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

Эти примеры демонстрируют применение различных методов и концепций для работы с объектами и массивами в JavaScript. Они показывают, как можно эффективно манипулировать данными, сортировать, фильтровать и преобразовывать структуры данных. Если у вас есть дополнительные вопросы или нужны более подробные объяснения, не стесняйтесь спрашивать.

Спасибо за высокую оценку! Давайте рассмотрим эти темы, связанные с JavaScript в браузере.

// JavaScript in Browser:

// Global Object Window

Window - это глобальный объект в браузере, представляющий окно браузера и предоставляющий глобальные функции и свойства.

Пример:

```javascript
console.log(window.innerWidth) // ширина окна браузера
console.log(window.location.href) // текущий URL

window.alert('Hello, world!') // показать диалоговое окно
```

// Understanding the Document Object Model (DOM).

DOM (Document Object Model) - это программный интерфейс для HTML и XML документов, представляющий структуру документа в виде дерева объектов.

Пример:

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

// Events Basics

// Types of DOM Events.

DOM события включают в себя события мыши, клавиатуры, формы, фокуса, загрузки страницы и многие другие.

// Working with Mouse and Keyboard Events.

Пример обработки событий мыши и клавиатуры:

```javascript
const button = document.getElementById('myButton')

button.addEventListener('click', function (event) {
  console.log('Button clicked!', event)
})

document.addEventListener('keydown', function (event) {
  console.log('Key pressed:', event.key)
})
```

// Handling Form and Input Events.

Пример обработки событий формы:

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

// Event Listeners.

addEventListener позволяет назначать несколько обработчиков на одно событие.

Пример:

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

// Event Phases and their differences.

События в DOM проходят три фазы: захват (capturing), цель (target) и всплытие (bubbling).

Пример:

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

// Custom events (optional).

Можно создавать и диспетчеризовать пользовательские события.

Пример:

```javascript
const myEvent = new CustomEvent('myCustomEvent', {
  detail: {message: 'Hello, Custom Event!'},
})

document.addEventListener('myCustomEvent', function (e) {
  console.log(e.detail.message)
})

document.dispatchEvent(myEvent)
```

// Events Propagation / Preventing

// Event propagation cycle.

События распространяются от корня DOM до целевого элемента (фаза захвата), затем обратно вверх (фаза всплытия).

// Stopping event propagation.

event.stopPropagation() останавливает дальнейшее распространение события.

Пример:

```javascript
child.addEventListener('click', function (event) {
  console.log('Child clicked')
  event.stopPropagation()
})

parent.addEventListener('click', function (event) {
  console.log('Parent clicked') // Это не выполнится при клике на child
})
```

// Preventing default browser behavior.

event.preventDefault() предотвращает действие по умолчанию для события.

Пример:

```javascript
const link = document.getElementById('myLink')

link.addEventListener('click', function (event) {
  event.preventDefault()
  console.log('Link clicked, but page not navigated')
})
```

// Event delegation and its pros/cons.

Делегирование событий позволяет обрабатывать события на родительском элементе вместо назначения обработчиков каждому дочернему элементу.

Пример:

```javascript
const list = document.getElementById('myList')

list.addEventListener('click', function (event) {
  if (event.target.tagName === 'LI') {
    console.log('Clicked list item:', event.target.textContent)
  }
})
```

Pros:

- Меньше обработчиков событий, экономия памяти
- Работает для динамически добавленных элементов

Cons:

- Может быть сложнее для понимания и отладки
- Не все события "всплывают" (например, focus)

Эти примеры демонстрируют основные концепции работы с DOM и событиями в браузере. Они показывают, как можно манипулировать структурой документа, обрабатывать различные типы событий и управлять их распространением. Если у вас есть дополнительные вопросы или нужны более подробные объяснения, не стесняйтесь спрашивать.

Отлично, давайте рассмотрим эти темы подробнее.

// Timers

// Usage of setTimeout / setInterval.

setTimeout выполняет функцию один раз после указанной задержки, а setInterval выполняет функцию регулярно с указанным интервалом.

Пример:

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

// Clearing timers with clearTimeout / clearInterval.

clearTimeout и clearInterval используются для отмены выполнения таймеров.

Пример:

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

// Web Storage API & Cookies

// Differences between LocalStorage, SessionStorage, and Cookies.

1. localStorage: Хранит данные без срока истечения.
2. sessionStorage: Хранит данные только на время сессии браузера.
3. Cookies: Могут иметь срок истечения, отправляются с каждым HTTP-запросом.

Пример:

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

// Date & Time (optional)

// Working with the Date object.

Date объект используется для работы с датами и временем в JavaScript.

Пример:

```javascript
const now = new Date()
console.log(now.toLocaleString()) // текущая дата и время

const specificDate = new Date('2023-12-31T23:59:59')
console.log(specificDate.getFullYear()) // 2023
console.log(specificDate.getMonth()) // 11 (December is 11, as months are 0-indexed)

// Вычисление разницы между датами
const diff = specificDate - now
console.log(`Days until New Year: ${Math.ceil(diff / (1000 * 60 * 60 * 24))}`)
```

// Timezones and Internationalization in JavaScript (Intl).

Intl предоставляет языкозависимое форматирование дат, чисел и строк.

Пример:

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

// Design Patterns

// Intermediate Knowledge

// Understanding and applying KISS, DRY, and YAGNI principles.

1. KISS (Keep It Simple, Stupid):
   Принцип, призывающий к простоте в дизайне и реализации.

Пример:

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

2. DRY (Don't Repeat Yourself):
   Принцип, призывающий избегать дублирования кода.

Пример:

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

3. YAGNI (You Aren't Gonna Need It):
   Принцип, призывающий не добавлять функциональность, пока она действительно не понадобится.

Пример:

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

Эти принципы помогают создавать более чистый, понятный и поддерживаемый код. KISS призывает к простоте, DRY помогает избежать повторений, а YAGNI предостерегает от преждевременной оптимизации и добавления ненужной функциональности.

Применение этих принципов и концепций поможет вам писать более эффективный и поддерживаемый код JavaScript. Если у вас есть дополнительные вопросы или нужны более подробные объяснения, не стесняйтесь спрашивать.
