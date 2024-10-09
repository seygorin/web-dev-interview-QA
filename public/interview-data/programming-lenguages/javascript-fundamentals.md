---
title: JavaScript Fundamentals
---

# Advanced Expressions

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

## Differences between let, var, and const

В JavaScript существуют три способа объявления переменных: `var`, `let`, и `const`. Каждый из них имеет свои особенности, которые важно понимать при разработке:

- **`var`:**

  - **Область видимости:** Функциональная, то есть переменная, объявленная с `var`, доступна в пределах функции, в которой она объявлена, или глобально, если объявлена вне функции.
  - **Hoisting (поднятие):** Объявления переменных с использованием `var` поднимаются в начало своей области видимости, но не их инициализация.
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

## Exploring the Temporal Dead Zone

Временная мертвая зона (TDZ) — это концепция в JavaScript, связанная с `let` и `const`. TDZ — это период времени между моментом, когда переменная объявляется в области видимости, и моментом её фактической инициализации. В этот период любая попытка обратиться к переменной приводит к ошибке `ReferenceError`.

Важно понимать, что TDZ существует только для `let` и `const`.
`var` не подвержен этой концепции, так как его значение поднимается и инициализируется как `undefined`.

**Samples:**

```javascript
console.log(x) // ReferenceError: Cannot access 'x' before initialization
let x = 5

// В отличие от:
console.log(y) // undefined
var y = 5
```

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

# Functions

## Differences and Uses of Arrow Functions, Function Expressions, and Function Declarations

**1. Function Declaration:**

Function Declaration (объявление функции) - это классический способ определения функции в JavaScript.

- **Hoisting (Поднятие):** Объявление функций поднимается в начало своей области видимости, что позволяет вызывать функцию до её объявления в коде.
- **Контекст (this):** Function declaration имеет собственный контекст `this`, который определяется в момент вызова функции.
- **Использование как конструктор:** Функция, объявленная через function declaration, может использоваться как конструктор для создания объектов с помощью ключевого слова `new`.

```javascript
// Можно вызвать до объявления благодаря hoisting
console.log(sum(2, 3)) // Выведет: 5
function sum(a, b) {
  return a + b
}

// Использование в качестве конструктора
function Person(name) {
  this.name = name
}

const john = new Person('John')
console.log(john.name) // Выведет: John
```

**2. Function Expression:**

Function Expression (функциональное выражение) - это функция, которая может быть частью выражения, например, присвоена переменной.

- **Hoisting:** В отличие от function declaration, function expression не поднимается, поэтому её нельзя вызывать до того, как она была объявлена.
- **Контекст (this):** Имеет собственный контекст `this`, аналогично function declaration, контекст может быть изменён при передаче функции в другие части кода.
- **Использование как конструктор:** Function expression также может использоваться как конструктор, если она не является стрелочной функцией.

```javascript
// Нельзя вызвать до объявления
console.log(multiply(2, 3)); // Вызовет ошибку: multiply is not a function
const multiply = function(a, b) {
	return a b;
};

console.log(multiply(2, 3)); // Выведет: 6

// Использование в качестве метода объекта
const calculator = {
	operation: "Multiplication",
	calculate: function(a, b) {
	console.log(${this.operation} result: ${a * b});
}

};
calculator.calculate(2, 3); // Выведет: Multiplication result: 6
```

**3. Arrow Function:**

Arrow Function (стрелочная функция) - это более краткий синтаксис для написания функций, введенный в ES6.

- **Hoisting:** Как и function expression, стрелочные функции не поднимаются, и их нужно объявлять до использования.
- **Контекст (this):** Стрелочные функции не имеют собственного контекста `this`. Вместо этого они используют `this` из окружающего лексического окружения. Это делает их удобными для использования в методах или вложенных функциях, где важно сохранить контекст внешней функции.
- **Использование как конструктор:** Стрелочные функции не могут использоваться как конструкторы, и попытка вызвать их с `new` приведет к ошибке.
- **Более краткий синтаксис:** Стрелочные функции имеют лаконичный синтаксис, что делает их удобными для простых выражений.

```javascript
const divide = (a, b) => a / b;
console.log(divide(6, 2)); // Выведет: 3

// Использование в колбэках
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num num);
console.log(squaredNumbers); // Выведет: [1, 4, 9, 16, 25]

// Сохранение контекста this
const counter = {
	count: 0,
	increment: function() {
		setInterval(() => {
		console.log(++this.count);
		}, 1000);
	}
};

counter.increment(); // Будет выводить увеличивающееся число каждую секунду
```

### When to use what (Когда что использовать)?

- **Function Declaration (Объявление функции)**: Когда нужна функция, доступная во всей области видимости, или когда требуется создать конструктор.
- **Function Expression (Функциональное выражение)**: Когда нужно создать функцию и сразу присвоить её переменной или передать как аргумент.
- **Arrow Function (Стрелочная функция)**: Для коротких функций, особенно колбэков, и когда важно сохранить контекст `this` окружающей области.

# Functional Scope

## Global Scope vs. Functional Scope

- Область видимости в JavaScript определяет, где переменные и функции могут быть доступны и использованы в коде. В JavaScript есть два основных типа области видимости:

  - **Global Scope (Глобальная область видимости):** Переменные и функции, объявленные в глобальной области видимости, доступны в любом месте вашего скрипта. Глобальная область видимости создается, когда переменные объявляются вне каких-либо функций или блоков кода. Однако чрезмерное использование глобальных переменных может привести к конфликтам имен и затруднить отладку кода.
  - **Functional Scope (Функциональная область видимости ):** Переменные, объявленные внутри функции, доступны только в пределах этой функции и недоступны вне её. Эта область видимости защищает данные от случайного изменения или доступа из других частей кода.

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

Лексическое окружение и контекст выполнения - это ключевые концепции в JavaScript, которые лежат в основе многих продвинутых возможностей языка, включая замыкания.

### Lexical Environments (Лексическое окружение)

Лексическое окружение - это структура, которая хранит информацию о доступных переменных и их значениях в определенной области видимости. Оно состоит из двух основных компонентов:

1. **Environment Record** - хранилище, содержащее переменные и их значения.
2. **Ссылка на внешнее лексическое окружение** - связь с окружающей областью видимости.

### Context (Контекст выполнения)

Контекст выполнения - это более широкое понятие, включающее в себя:

- Лексическое окружение
- Значение `this`
- Другие метаданные, связанные с выполнением кода

**Samples:**

```javascript
function createCounter() {
  let count = 0

  return {
    increment: function () {
      count++
      console.log(count)
    },

    decrement: function () {
      count--
      console.log(count)
    },

    getCount: function () {
      return count
    },
  }
}

const counter = createCounter()
counter.increment() // 1
counter.increment() // 2
counter.decrement() // 1
console.log(counter.getCount()) // 1
```

В этом примере:

1. Функция `createCounter` создает лексическое окружение, содержащее переменную `count`.
2. Возвращаемый объект содержит методы, которые имеют доступ к этому лексическому окружению.
3. Даже после завершения выполнения `createCounter`, её лексическое окружение сохраняется благодаря замыканию.
4. Методы `increment`, `decrement` и `getCount` продолжают иметь доступ к `count`, образуя замыкание.

### Преимущества использования замыканий

1. **Инкапсуляция данных**: Переменная `count` недоступна извне, что обеспечивает приватность данных.
2. **Сохранение состояния**: Замыкания позволяют сохранять состояние между вызовами функций.
3. **Создание фабричных функций**: Можно создавать функции с предустановленными параметрами.

### Пример фабричной функции с использованием замыкания

```javascript
function multiplyBy(factor) {
	return function(number) {
		return number factor;
	};
}

const double = multiplyBy(2);
const triple = multiplyBy(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15
```

В этом примере `multiplyBy` создает и возвращает новую функцию, которая замыкает в себе значение `factor`. Это позволяет создавать специализированные функции умножения.

## Differences between Scope and Context

Область видимости и контекст - это два фундаментальных, но различных понятия в JavaScript, которые часто путают.

### Scope (Область видимости)

Область видимости определяет доступность переменных в различных частях кода. В JavaScript существует несколько типов областей видимости:

1. **Global Scope (Глобальная область видимост)**: переменные, доступные во всем скрипте.
2. **Functional Scope (Функциональная область видимости)**: переменные, доступные только внутри функции.
3. **Block Scope (Блочная область видимости)** (с ES6): переменные, доступные только внутри блока (например, внутри `if` или `for`).

**Samples:**

### Context (Контекст выполнения)

Контекст выполнения определяет значение ключевого слова `this` внутри функции. Значение `this` зависит от того, как функция была вызвана.

```javascript
const person = {
  name: 'Alice',
  greet: function () {
    console.log(`Hello, my name is ${this.name}`)
  },
}

person.greet() // Выведет: "Hello, my name is Alice"
const greetFunction = person.greet
greetFunction() // Выведет: "Hello, my name is undefined" (в нестрогом режиме)
```

В этом примере:

- Область видимости `name` ограничена объектом `person`.
- Контекст (`this`) в `person.greet()` указывает на объект `person`.
- При вызове `greetFunction()`, контекст теряется, и `this` указывает на глобальный объект (или `undefined` в строгом режиме).

## The Mechanism of Lexical Environment Traversal

Когда функция обращается к переменной, JavaScript сначала ищет её в текущем лексическом окружении. Если переменная не найдена, поиск продолжается во внешнем лексическом окружении, и так далее, вплоть до глобального окружения. Этот процесс называется лексическим поиском.

**Samples:**

```javascript
let a = 'global'

function outer() {
  let b = 'outer'
  function middle() {
    let c = 'middle'
    function inner() {
      let d = 'inner'
      console.log(a, b, c, d)
    }

    inner()
  }

  middle()
}

outer() // Выведет: "global outer middle inner"
```

В этом примере:

1. `inner()` сначала ищет переменные в своем собственном окружении.
2. Затем поиск продолжается в окружении `middle()`.
3. Далее в окружении `outer()`.
4. И наконец, в глобальном окружении.

Этот механизм обеспечивает доступ к переменным из внешних областей видимости, формируя основу для замыканий.

## Connection between Function and its Lexical Environment

Функция всегда сохраняет доступ к лексическому окружению, в котором она была создана. Это позволяет функциям, возвращаемым или переданным как аргументы, продолжать доступ к переменным, объявленным в исходном контексте.

**Samples:**

```javascript
function makeAdder(x) {
  return function (y) {
    return x + y
  }
}
const add5 = makeAdder(5)
const add10 = makeAdder(10)
console.log(add5(3)) // 8
console.log(add10(3)) // 13
```

В этом примере:

- `makeAdder` создает новую функцию каждый раз при вызове.
- Созданная функция сохраняет доступ к параметру `x` из внешней функции.
- `add5` и `add10` - это разные функции с разными замкнутыми значениями `x`.

Это демонстрирует, как функции могут "запоминать" свое лексическое окружение, даже когда они выполняются вне этого окружения.

# Advanced Functions

## `this` in Functions

В JavaScript `this` - это специальная переменная, которая указывает на объект, контекст которого определяет, на что именно будет ссылаться `this` в момент вызова функции. Важно помнить, что значение `this` устанавливается во время вызова функции и зависит от того, как эта функция была вызвана.

### Basci rules of (Основные правила определения) `this`

1. **Global context (Глобальный контекст)**: В глобальной области видимости `this` указывает на глобальный объект (в браузере - `window`, в Node.js - `global`).

2. **Object method (Метод объекта)**: Когда функция вызывается как метод объекта, `this` указывает на этот объект.

3. **Constructor (Конструктор)**: При использовании функции с `new`, `this` указывает на новосозданный объект.

4. **Explicit binding (Явное указание)**: Методы `call()`, `apply()` и `bind()` позволяют явно задать значение `this`.

**Samples:**

```javascript
const person = {
  name: 'Alice',
  greet: function () {
    console.log(`Hello, I'm ${this.name}`)
  },
  greetArrow: () => {
    console.log(`Hello, I'm ${this.name}`)
  },
}
person.greet() // "Hello, I'm Alice"
person.greetArrow() // "Hello, I'm undefined" (стрелочные функции не имеют своего this)

const greetFunc = person.greet
greetFunc() // "Hello, I'm undefined" (потеря контекста)

function Person(name) {
  this.name = name
}

const bob = new Person('Bob')
console.log(bob.name) // "Bob"
```

## Reference Type & Losing this

Потеря контекста `this` - распространенная проблема, особенно при передаче методов как колбэков. Существует несколько способов решения этой проблемы:

1. **Using `bind()`**:

   ```javascript
   setTimeout(obj.greet.bind(obj), 1000)
   ```

2. **Arrow functions**:

   ```javascript
   setTimeout(() => obj.greet(), 1000)
   ```

3. **Saving `this` in a variable**:

   ```javascript
   const self = this
   setTimeout(function () {
     self.greet()
   }, 1000)
   ```

## Understand the Difference between Function and Method

Хотя технически методы - это просто функции, присвоенные свойствам объекта, есть важные различия в их поведении:

- **Функция** - это самостоятельный блок кода, который может быть вызван независимо.
- **Метод** - это функция, которая является свойством объекта и обычно оперирует данными этого объекта.

**Samples:**

```javascript
function standalone() {
  console.log(this)
}

const obj = {
  method: function () {
    console.log(this)
  },
}

standalone() // this указывает на глобальный объект
obj.method() // this указывает на obj
```

## Manage this

JavaScript предоставляет методы для явного управления значением `this`:

1. **`call(thisArg, arg1, arg2, ...)`**: Вызывает функцию с указанным `this` и аргументами.
2. **`apply(thisArg, [argsArray])`**: Похож на `call()`, но принимает аргументы как массив.
3. **`bind(thisArg, arg1, arg2, ...)`**: Создает новую функцию с привязанным `this` и, опционально, начальными аргументами.

**Samples:**

```javascript
function greet(greeting, punctuation) {
	console.log(${greeting}, ${this.name}${punctuation});
}

const person = { name: "Alice" };

greet.call(person, "Hello", "!"); // "Hello, Alice!"
greet.apply(person, ["Hi", "."]); // "Hi, Alice."
const boundGreet = greet.bind(person, "Welcome");
boundGreet("!!"); // "Welcome, Alice!!"
```

## Binding, Binding One Function Twice

Важно отметить, что однажды привязанная функция не может быть перепривязана. Последующие вызовы `bind()` не изменят изначально установленное значение `this`.

**Samples:**

```javascript
const obj1 = {name: 'obj1'}
const obj2 = {name: 'obj2'}

function showName() {
  console.log(this.name)
}

const bound = showName.bind(obj1)
bound() // "obj1"

const attemptRebind = bound.bind(obj2)
attemptRebind() // Все еще "obj1"
```

# ECMAScript Intermediate

## Function Default Parameters

Параметры функции по умолчанию - возможность, введенная в ECMAScript 6 (ES6), которая позволяет задавать значения параметров, используемые в случае, если аргументы не были переданы или были переданы как `undefined`.

1. **Syntax (Синтаксис)**: Значения по умолчанию задаются с помощью оператора присваивания (`=`) в списке параметров функции.
2. **Activation (Активация)**: Значение по умолчанию используется, когда аргумент не передан или передан как `undefined`.
3. **Variable expressions (Выражения переменных)**: В качестве значений по умолчанию можно использовать не только примитивы, но и выражения, включая вызовы функций.
4. **Access to previous parameters (Доступ к предыдущим параметрам)**: Параметры по умолчанию могут ссылаться на ранее объявленные параметры в том же списке параметров.

```javascript

function greet(name = 'Guest', time = new Date().getHours()) {
	let greeting = time < 12 ? 'Good morning' : 'Good day';
	console.log(${greeting}, ${name}!);
}

greet(); // Выведет "Good day, Guest!" (если сейчас после полудня)
greet('Alice'); // Выведет "Good day, Alice!" (если сейчас после полудня)


function getDefaultName() {
	return 'Anonymous';
}

function welcome(name = getDefaultName()) {
	console.log(Welcome, ${name}!);
}

welcome(); // "Welcome, Anonymous!"
welcome(undefined); // "Welcome, Anonymous!"
welcome(null); // "Welcome, null!"

function createUser(name = 'User', id = name.toLowerCase() + Math.random().toString().slice(2, 10)) {
	return { name, id }
}

console.log(createUser()); // { name: "User", id: "user84175301" }
console.log(createUser('Alice')); // { name: "Alice", id: "alice17539813" }
```

### Important notes (Важные замечания):

- Параметры по умолчанию вычисляются в момент вызова функции, а не в момент её определения.
- Если передан `null`, он не активирует значение по умолчанию, так как `null` считается валидным значением.
- Параметры по умолчанию могут привести к неожиданному поведению при использовании с деструктуризацией объектов.

## Using Spread Operator for Function Arguments

Оператор `spread` (`...`) - это универсальный инструмент, введенный в ES6, который позволяет "распаковывать" элементы итерируемых объектов (таких как массивы или строки) в местах, где ожидается ноль или более аргументов или элементов.

### Detailed explanation (Подробное объяснение):

1. **Syntax (Синтаксис)**: Три точки (`...`) перед итерируемым объектом.

2. **Usage in functions (Применение в функциях)**: Позволяет передавать элементы массива как отдельные аргументы.

3. **Flexibility (Гибкость)**: Можно комбинировать `spread` с обычными аргументами.

4. **Working with iterable objects (Работа с итерируемыми объектами)**: Работает не только с массивами, но и с любыми итерируемыми объектами.

```javascript
const numbers = [5, 2, 8, 1, 9]
console.log(Math.max(...numbers)) // 9

function process(x, y, ...rest) {
  console.log(x, y, rest)
}
process(1, 2, ...numbers) // 1 2 [5, 2, 8, 1, 9]

console.log(...'Hello') // H e l l o

const original = [1, 2, 3]
const copy = [...original]
console.log(copy) // [1, 2, 3]

const obj1 = {a: 1, b: 2}
const obj2 = {c: 3, d: 4}
const combined = {...obj1, ...obj2}

console.log(combined) // { a: 1, b: 2, c: 3, d: 4 }

const set = new Set([1, 2, 3])
console.log([...set]) // [1, 2, 3]
```

### Important notes (Важные замечания):

- Spread оператор создает поверхностную копию, а не глубокую.
- При использовании с объектами, более поздние свойства перезаписывают ранние с тем же ключом.
- Spread может быть менее эффективным для очень больших массивов или объектов.

## Comparing arguments and rest parameters

`arguments` и rest-параметры - это два способа работы с неопределенным количеством аргументов в функциях JavaScript, но они имеют существенные различия.

### arguments

1. **Definition (Определение)**: `arguments` - это объект, подобный массиву, доступный внутри всех функций (кроме стрелочных).
2. **Type (Тип)**: Не является настоящим массивом, а лишь массивоподобным объектом.
3. **Availability (Доступность)**: Доступен во всех нестрелочных функциях без явного объявления.
4. **Restrictions (Ограничения)**: Не поддерживает методы массивов напрямую.

### rest-параметры

1. **Definition (Определение)**: Синтаксис `...args` в параметрах функции, собирающий все "оставшиеся" аргументы в массив.
2. **Type (Тип)**: Настоящий массив.
3. **Availability (Доступность)**: Должны быть явно объявлены в параметрах функции.
4. **Restrictions (Ограничения)**: Должны быть последним параметром в списке параметров функции.

```javascript
// Использование arguments
function sumOld() {
  return Array.prototype.slice
    .call(arguments)
    .reduce((sum, num) => sum + num, 0)
}
console.log(sumOld(1, 2, 3, 4)) // 10

// Использование rest-параметра
function sumNew(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0)
}
console.log(sumNew(1, 2, 3, 4)) // 10

// Комбинирование обычных параметров и rest
function processItems(first, second, ...rest) {
  console.log('First:', first)
  console.log('Second:', second)
  console.log('Rest:', rest)
}
processItems('a', 'b', 'c', 'd', 'e')
// First: a
// Second: b
// Rest: ["c", "d", "e"]

// Деструктуризация с rest-параметром
function analyzeArray([first, second, ...rest]) {
  console.log('First element:', first)
  console.log('Second element:', second)
  console.log('Remaining elements:', rest)
}
analyzeArray([1, 2, 3, 4, 5])
// First element: 1
// Second element: 2
// Remaining elements: [3, 4, 5]
```

### Important notes (Важные замечания):

- `arguments` не доступен в стрелочных функциях.
- Rest-параметры всегда создают массив, даже если не передано дополнительных аргументов (в этом случае массив будет пустым).
- Rest-параметры более предпочтительны в современном JavaScript из-за их ясности и удобства использования.

## Array Concatenation with Spread Operator

Оператор `spread` предоставляет элегантный и читаемый способ объединения массивов, который во многих случаях может заменить традиционный метод `concat()`.

1. **Syntax (Синтаксис)**: Используйте `...` перед каждым массивом, который вы хотите объединить, внутри литерала нового массива.
2. **Flexibility (Гибкость)**: Позволяет легко комбинировать массивы и отдельные элементы.
3. **Copy creation (Создание копии)**: Создает новый массив, не изменяя исходные.
4. **Order (Порядок)**: Элементы добавляются в том порядке, в котором указаны массивы.

```javascript
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const combined = [...arr1, ...arr2]
console.log(combined) // [1, 2, 3, 4, 5, 6]

// Добавление элементов между массивами
const withExtra = [...arr1, 'extra', ...arr2]
console.log(withExtra) // [1, 2, 3, "extra", 4, 5, 6]

// Создание копии с дополнительными элементами
const extended = [...arr1, 7, 8, 9]
console.log(extended) // [1, 2, 3, 7, 8, 9]
console.log(arr1) // [1, 2, 3] (исходный массив не изменен)

// Объединение массивов объектов
const users1 = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Jane'},
]
const users2 = [{id: 3, name: 'Bob'}]
const allUsers = [...users1, ...users2]
console.log(allUsers)
// [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 3, name: 'Bob' }]
```

### Important notes (Важные замечания):

- Spread оператор создает поверхностную копию, что важно учитывать при работе с вложенными объектами или массивами.
- При работе с большими массивами, использование spread может быть менее эффективным, чем `concat()` или циклы.
- Spread оператор можно использовать не только с массивами, но и с любыми итерируемыми объектами, что делает его очень гибким инструментом.

## Destructuring Assignments for Variables and Function Arguments

Деструктуризация - синтаксис в JavaScript, который позволяет "распаковывать" значения из массивов или свойства из объектов в отдельные переменные. Это делает код более чистым и выразительным.

```javascript
const library = {
	name: "Центральная городская библиотека",
	books: [
		{ title: "1984", author: "Джордж Оруэлл", year: 1949 },
		{ title: "Гарри Поттер и философский камень", author: "Дж. К. Роулинг", year: 1997 },
		{ title: "Убить пересмешника", author: "Харпер Ли", year: 1960 }
	],
	staff: ["Анна", "Иван", "Мария"],
	location: {
		city: "Москва",
		street: "Арбат",
		building: "20",
	},
};

// Базовая деструктуризация объекта
const { name, books } = library;
console.log(Название библиотеки: ${name}); // Вывод: Название библиотеки: Центральная городская библиотека

// Базовая деструктуризация массива
const [firstBook, secondBook] = books;
console.log(Первая книга в каталоге: ${firstBook.title}); // Вывод: Первая книга в каталоге: 1984

// Деструктуризация объекта в параметрах функции
function printBookInfo({ title, author, year }) {
	console.log("${title}" написана ${author} в ${year} году.);
}

printBookInfo(secondBook); // Вывод: "Гарри Поттер и философский камень" написана Дж. К. Роулинг в 1997 году.

// Комбинирование деструктуризации объекта и массива
const { staff: [headLibrarian, ...otherStaff], location: { city, street } } = library;
console.log(Главный библиотекарь: ${headLibrarian}); // Вывод: Главный библиотекарь: Анна
console.log(Остальной персонал: ${otherStaff.join(", ")}); // Вывод: Остальной персонал: Иван, Мария
console.log(Адрес библиотеки: ${street}, ${city}); // Вывод: Адрес библиотеки: Арбат, Москва

// Деструктуризация с значениями по умолчанию и переименованием
function getLibraryStats({
	name: libraryName,
	books: bookCollection,
	yearFounded = "Неизвестно"
}) {
	console.log(Статистика для ${libraryName}:); // Статистика для Центральная городская библиотека:
	console.log(Количество книг: ${bookCollection.length}); // Количество книг: 3
	console.log(Год основания: ${yearFounded}); // Год основания: Неизвестно
}
getLibraryStats(library);

// Деструктуризация в цикле
for (const { title, author } of books) {
	console.log(${author} - "${title}");
}
// Вывод:
// Джордж Оруэлл - "1984"
// Дж. К. Роулинг - "Гарри Поттер и философский камень"
// Харпер Ли - "Убить пересмешника"
```

### Important notes (Важные замечания):

- Деструктуризация создает копии значений, а не ссылки (для примитивных типов).
- При деструктуризации объектов имена переменных должны совпадать с именами свойств, если не указано иное.
- Можно использовать вложенную деструктуризацию для работы с более сложными структурами данных.
- Деструктуризация может сделать код более читаемым, но чрезмерное её использование может привести к обратному эффекту.

## for...of loop (optional)

Цикл `for...of` был введен в ECMAScript 2015 (ES6) и предоставляет простой и интуитивно понятный способ итерации по элементам итерируемых объектов.

```javascript
// Итерация по массиву
const fruits = ['apple', 'banana', 'orange']
for (const fruit of fruits) {
  console.log(fruit)
}
// apple
// banana
// orange

// Итерация по строке
const str = 'Hel'
for (const char of str) {
  console.log(char)
}
// H
// e
// l
```

### Advantages (Преимущества) for...of:

1. **Simplicity (Простота)**: Более чистый и читаемый синтаксис по сравнению с традиционным циклом `for`.
2. **Universal (Универсальность)**: Работает с любыми итерируемыми объектами, включая пользовательские.
3. **No need for index (Отсутствие необходимости в индексе)**: Не нужно управлять индексом или длиной коллекции.
4. **Support for break/continue (Поддержка break/continue)**: Можно использовать `break` и `continue` для контроля выполнения цикла.

### Important notes (Важные замечания):

- `for...of` не работает напрямую с обычными объектами. Для итерации по свойствам объекта используйте `for...in` или `Object.entries()`.
- При использовании `const` в цикле `for...of`, переменная будет переопределяться на каждой итерации, а не изменяться.
- `for...of` не предоставляет доступ к индексу элемента. Если нужен индекс, можно использовать `entries()` метод для итерируемых объектов.

Цикл `for...of` предоставляет элегантный способ итерации по элементам коллекций в JavaScript, делая код более чистым и понятным, особенно при работе с массивами и другими итерируемыми структурами данных.

# Objects Built-in Methods

## Utilizing Object.keys and Object.values

Методы `Object.keys()` и `Object.values()` предоставляют удобный способ работы с ключами и значениями объектов. Они особенно полезны при необходимости обработки или преобразования данных объекта.

- **`Object.keys(obj)`** возвращает массив строк, содержащих все перечисляемые свойства объекта `obj`.
- **`Object.values(obj)`** возвращает массив всех значений этих перечисляемых свойств в том же порядке, в котором они появляются в объекте.

Эти методы часто используются в комбинации с методами массивов, такими как `map()`, `filter()`, и `reduce()`.

**Samples:**

```javascript
const product = {
	name: 'Laptop',
	price: 1000,
	inStock: true,
	specs: {
		cpu: 'Intel i7',
		ram: '16GB',
		storage: '512GB SSD'
	}
};

// Использование Object.keys() для создания массива свойств
const productProperties = Object.keys(product);
console.log(productProperties); // ['name', 'price', 'inStock', 'specs']

// Фильтрация ключей
const nonObjectKeys = Object.keys(product).filter(key => typeof product[key] !== 'object');
console.log(nonObjectKeys); // ['name', 'price', 'inStock']

// Использование Object.values() для обработки значений
const productValues = Object.values(product);
console.log(productValues); // ['Laptop', 1000, true, { cpu: 'Intel i7', ram: '16GB', storage: '512GB SSD' }]

// Подсчет числовых значений
const numericValues = Object.values(product).filter(value => typeof value === 'number');
console.log(numericValues.length); // 1

// Комбинирование Object.keys() и Object.values() для создания нового объекта
const upperCaseProduct = Object.keys(product).reduce((acc, key) => {
	acc[key.toUpperCase()] = product[key];
	return acc;
}, {});
console.log(upperCaseProduct); // { NAME: 'Laptop', PRICE: 1000, INSTOCK: true, SPECS: { cpu: 'Intel i7', ram: '16GB', storage: '512GB SSD' } }

// Использование с вложенными объектами
const allSpecs = Object.entries(product.specs).map(([key, value]) => ${key}: ${value}).join(', ');
console.log(allSpecs); // "cpu: Intel i7, ram: 16GB, storage: 512GB SSD"
```

## Working with Static Object Methods

Статические методы объекта `Object` - это методы, доступные непосредственно через сам объект `Object`, а не через его экземпляры. Эти методы предоставляют множество полезных возможностей для работы с объектами, таких как клонирование, создание объектов с заданным прототипом, замораживание объектов, и другие.

### Object.assign()

`Object.assign(target, ...sources)` копирует значения всех собственных перечисляемых свойств из одного или более исходных объектов в целевой объект. Он возвращает модифицированный целевой объект.

**Samples:**

```javascript
const target = {a: 1, b: 2}
const source = {b: 3, c: 4}
const result = Object.assign(target, source)

console.log(result) // { a: 1, b: 3, c: 4 }
console.log(target) // { a: 1, b: 3, c: 4 }
```

Важно отметить, что `Object.assign()` выполняет поверхностное копирование. Для глубокого клонирования нужно использовать рекурсивный подход или другие методы.

### Object.create()

`Object.create(proto, [propertiesObject])` создает новый объект с указанным прототипом и свойствами.

**Samples:**

```javascript
const personProto = {
	greet() {
		return Hello, my name is ${this.name};
	}
};

const john = Object.create(personProto);
john.name = "John";
console.log(john.greet()); // "Hello, my name is John"
```

### Object.freeze()

`Object.freeze(obj)` "замораживает" объект: предотвращает добавление новых свойств, удаление или изменение существующих свойств.

**Samples:**

```javascript
const obj = {prop: 42}
Object.freeze(obj)

obj.prop = 33 // Изменение будет проигнорировано в строгом режиме
console.log(obj.prop) // 42
```

### Object.seal()

`Object.seal(obj)` "запечатывает" объект, предотвращая добавление новых свойств и помечая все существующие свойства как неконфигурируемые.

**Samples:**

```javascript
const obj = {prop: 42}
Object.seal(obj)

obj.newProp = 123 // Будет проигнорировано
delete obj.prop // Будет проигнорировано
obj.prop = 33 // Это сработает
console.log(obj) // { prop: 33 }
```

### Object.entries()

`Object.entries(obj)` возвращает массив собственных перечисляемых свойств указанного объекта в формате [key, value].

**Samples:**

```javascript
const obj = {a: 1, b: 2, c: 3}

console.log(Object.entries(obj)) // [['a', 1], ['b', 2], ['c', 3]]
```

### Object.defineProperty()

`Object.defineProperty(obj, prop, descriptor)` определяет новое или изменяет существующее свойство непосредственно на объекте, возвращая этот объект.

**Samples:**

```javascript
const obj = {}

Object.defineProperty(obj, 'readOnly', {
  value: 42,
  writable: false,
})

obj.readOnly = 100 // Изменение будет проигнорировано
console.log(obj.readOnly) // 42
```

## Property Flags and Descriptors

В JavaScript объекты являются фундаментальной структурой данных, и каждое свойство объекта имеет не только значение, но и специальные атрибуты, называемые "флагами". Эти флаги определяют, как свойство может быть использовано и изменено. Существует три основных флага:

1. **`writable`**: Этот флаг определяет, можно ли изменить значение свойства. Если установлен в `true`, значение свойства может быть изменено. Если `false`, свойство становится доступным только для чтения.
2. **`enumerable`**: Определяет, будет ли свойство перечисляться в циклах (например, `for...in`) или появляться в результатах некоторых методов объекта, таких как `Object.keys()`. Если `true`, свойство будет видимым при перечислении.
3. **`configurable`**: Этот флаг контролирует возможность удаления свойства из объекта и изменения его флагов (кроме `writable`). Если установлен в `false`, свойство нельзя удалить, и его флаги (кроме `writable`) нельзя изменить.

Для работы с этими флагами JavaScript предоставляет метод `Object.defineProperty()`, который позволяет не только создавать новые свойства с заданными флагами, но и изменять флаги существующих свойств.

**Samples:**

```javascript
const obj = {}
// Создаем свойство с настроенными флагами
Object.defineProperty(obj, 'readOnly', {
  value: 42,
  writable: false, // Значение нельзя изменить
  enumerable: true, // Свойство будет видно при перечислении
  configurable: false, // Нельзя удалить свойство или изменить его флаги
})

obj.readOnly = 100
console.log(obj.readOnly) // Выведет: 42

// Создаем скрытое свойство
Object.defineProperty(obj, 'hidden', {
  value: 'secret',
  enumerable: false, // Свойство не будет видно при перечислении
})

console.log(Object.keys(obj)) // Выведет: ['readOnly']

// Получаем дескриптор свойства
console.log(Object.getOwnPropertyDescriptor(obj, 'readOnly')) //  { value: 42, writable: false, enumerable: true, configurable: false }
```

## Creating Iterable Objects and Using Symbol.iterator (optional)

Итерируемость - это важная концепция в JavaScript, которая позволяет объектам определять или настраивать своё поведение при итерации. Итерируемые объекты могут быть использованы в таких конструкциях, как цикл `for...of`, операторы spread (`...`) и деструктуризация.

Ключом к созданию итерируемого объекта является использование специального символа `Symbol.iterator`. Этот символ представляет метод, который должен возвращать объект-итератор. Итератор, в свою очередь, должен иметь метод `next()`, который при каждом вызове возвращает объект с двумя свойствами:

- `value`: текущее значение итерации
- `done`: булево значение, указывающее, завершена ли итерация

Создание итерируемого объекта дает возможность определить собственную логику перебора элементов, что особенно полезно для кастомных структур данных.

**Samples:**

```javascript
const customIterable = {
	data: ['A', 'B', 'C', 'D'],

	Symbol.iterator {
		let index = 0
		return {
			next: () => {
				if (index < this.data.length) {
				return { value: this.data[index++], done: false }
				} else {
				return { done: true }
				}
			}
		}
	}
}

// Использование в цикле for...of
for (let item of customIterable) {
	console.log(item) // Выведет: A, B, C, D
}

// Использование с оператором spread
console.log([...customIterable]) // Выведет: ['A', 'B', 'C', 'D']

// Деструктуризация
const [first, second, ...rest] = customIterable
console.log(first, second, rest) // Выведет: A B ['C', 'D']
```

# ECMAScript Data Types & Expressions

## Working with Object Computed Properties

Вычисляемые свойства (Computed Properties) в JavaScript предоставляют механизм для динамического определения имен свойств объекта. Эта возможность особенно полезна в ситуациях, когда имена свойств неизвестны заранее или зависят от внешних факторов.

### Extended use of computed properties (Расширенное использование вычисляемых свойств):

1. **Dynamic creation of properties based on variables (Динамическое создание свойств на основе переменных):**

**Samples:**

```javascript
const prefix = 'user'
const id = 1234

const user = {
  [`${prefix}_${id}`]: 'John Doe',
}

console.log(user.user_1234) // 'John Doe'
```

2. **Using expressions for property names (Использование выражений для имен свойств):**

**Samples:**

```javascript
const obj = {
  ['a' + 'b']: 1,
  [1 + 2]: 3,
}

console.log(obj.ab) // 1
console.log(obj['3']) // 3
```

3. **Creating methods with dynamic names (Создание методов с динамическими именами):**

**Samples:**

```javascript
const actions = {
  GET: 'getData',
  POST: 'postData',
}
const api = {
  [actions['GET']]: function () {
    console.log('Getting data...')
  },
  [actions['POST']]: function () {
    console.log('Posting data...')
  },
}

api.getData() // 'Getting data...'
api.postData() // 'Posting data...'
```

4. **Using Symbol as a computed property (Использование Symbol как вычисляемого свойства):**

**Samples:**

```javascript
const uniqueKey = Symbol('description')

const obj = {
  [uniqueKey]: 'This is a unique property',
}

console.log(obj[uniqueKey]) // 'This is a unique property'
```

Вычисляемые свойства предоставляют гибкость при работе с объектами, позволяя создавать более динамичные и адаптивные структуры данных. Они особенно полезны при работе с данными, полученными из внешних источников, или при создании объектов, структура которых зависит от условий выполнения программы.

## Iterating Through Object Keys

Итерация по ключам объекта - это фундаментальная операция в JavaScript, которая позволяет обрабатывать все свойства объекта. Помимо уже упомянутых методов, существуют и другие способы перебора свойств объекта:

### Additional iteration methods (Дополнительные методы итерации):

1. **`Object.entries()`**: Возвращает массив пар [ключ, значение] для всех перечисляемых свойств объекта.

**Samples:**

```javascript
const person = {name: 'Alice', age: 30, job: 'engineer'}

Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`) // name: Alice /n age: 30 /n job: engineer
})
```

2. **`Object.getOwnPropertyNames()`**: Возвращает массив всех свойств (включая неперечисляемые) найденных непосредственно в объекте.

**Samples:**

```javascript
const obj = Object.create(null, {
  hidden: {value: 'secret', enumerable: false},
  visible: {value: 'public', enumerable: true},
})

console.log(Object.getOwnPropertyNames(obj)) // ['hidden', 'visible']
```

3. **`Reflect.ownKeys()`**: Возвращает массив всех ключей объекта, включая символьные ключи.

**Samples:**

```javascript
const sym = Symbol('custom')
const obj = {
  [sym]: 'symbol value',
  regularProp: 'regular value',
}
console.log(Reflect.ownKeys(obj)) // ['regularProp', Symbol(custom)]

Reflect.ownKeys(obj).forEach((key) => {
  if (typeof key === 'symbol') {
    console.log(key.toString(), obj[key]) // regularProp regular value
  } else {
    console.log(key, obj[key]) // Symbol(custom) symbol value
  }
})
```

4. **`for... in` (без проверки `hasOwnProperty`)**:

**Samples:**

```javascript
function Person(name) {
  this.name = name
}
п
Person.prototype.sayHello = function () {
  console.log(`Hello, I'm ${this.name}`)
}

const john = new Person('John')
john.age = 30

console.log('Без проверки hasOwnProperty:')
for (let prop in john) {
  console.log(prop) // name, age, sayHello
}

console.log('\nС проверкой hasOwnProperty:')
for (let prop in john) {
  if (john.hasOwnProperty(prop)) {
    console.log(prop) // name, age
  }
}

console.log('\nИспользуя Object.keys():')
Object.keys(john).forEach((prop) => {
  console.log(prop) // name, age
})
```

### Features and recommendations (Особенности и рекомендации):

- При использовании `for...in` всегда проверяйте, является ли свойство собственным с помощью `hasOwnProperty()`, чтобы избежать итерации по унаследованным свойствам.
- `Object.keys()`, `Object.values()` и `Object.entries()` игнорируют символьные ключи и неперечисляемые свойства.
- Для полного контроля над итерацией, включая символьные и неперечисляемые свойства, используйте комбинацию `Object.getOwnPropertyNames()` и `Object.getOwnPropertySymbols()`.
- При работе с прототипами объектов, помните о различиях между собственными и унаследованными свойствами.

# Arrays Built-in Methods

## Copying and Modifying Arrays

Копирование и модификация массивов — это фундаментальные операции в JavaScript, которые имеют широкое применение в разработке. Существует множество встроенных методов для работы с массивами, каждый из которых имеет свои особенности и применения.

#### Methods for copying arrays (Методы копирования массивов):

Методы копирования массивов в JavaScript предоставляют различные способы создания новых массивов на основе существующих, не изменяя исходный массив. Эти методы особенно полезны для обеспечения иммутабельности данных и предотвращения нежелательных побочных эффектов в вашем коде. Они широко используются в функциональном программировании и при работе с современными фреймворками, такими как React.

##### 1. slice()

`slice()` создает новый массив, содержащий копию части или всего исходного массива.

**Samples:**

```javascript
const original = [1, 2, 3, 4, 5]
const fullCopy = original.slice()
const partialCopy = original.slice(1, 4)

console.log(fullCopy) // [1, 2, 3, 4, 5]
console.log(partialCopy) // [2, 3, 4]
```

##### 2. Spread оператор (...)

`Spread` оператор позволяет быстро и легко создать копию массива или объединить несколько массивов.

**Samples:**

```javascript
const original = [1, 2, 3]
const copy = [...original]
const combined = [...original, 4, 5, 6]

console.log(copy) // [1, 2, 3]
console.log(combined) // [1, 2, 3, 4, 5, 6]
```

##### 3. Array.from()

`Array.from()` создает новый массив из массивоподобного или итерируемого объекта.

**Samples:**

```javascript
const original = [1, 2, 3];
const copy = Array.from(original);
const sequence = Array.from({length: 5}, (, i) => i + 1);

console.log(copy); // [1, 2, 3]
console.log(sequence); // [1, 2, 3, 4, 5]
```

##### 4. concat()

`concat()` соединяет два или более массивов в один.

**Samples:**

```javascript
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const combined = arr1.concat(arr2)

console.log(combined) // [1, 2, 3, 4, 5, 6]
```

##### 5. map()

`map()` создает новый массив с результатами вызова указанной функции для каждого элемента массива.

**Samples:**

```javascript
const numbers = [1, 2, 3, 4, 5]
const doubled = numbers.map((num) => num * 2)

console.log(doubled) // [2, 4, 6, 8, 10]
console.log(numbers) // [1, 2, 3, 4, 5]
```

##### 5. filter()

`filter()` создает новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.

**Samples:**

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evens = numbers.filter((num) => num % 2 === 0)
const greaterThanFive = numbers.filter((num) => num > 5)

console.log(evens) // [2, 4, 6, 8, 10]
console.log(greaterThanFive) // [6, 7, 8, 9, 10]
console.log(numbers) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

#### Methods for modifying arrays (Методы модификации массивов):

Методы модификации массивов в JavaScript позволяют изменять существующие массивы напрямую. Эти методы могут быть очень эффективными с точки зрения производительности и использования памяти, так как они работают с исходным массивом, не создавая новых копий. Однако их использование требует осторожности, особенно в контексте функционального программирования или при работе с состоянием в современных фреймворках. Важно понимать, что эти методы изменяют исходный массив, что может привести к неожиданному поведению, если не учитывать этот факт при разработке.

##### 1. push()

Добавляет один или несколько элементов в конец массива и возвращает новую длину массива.

**Samples:**

```javascript
const fruits = ['apple', 'banana']
const newLength = fruits.push('orange')

console.log(fruits) // ['apple', 'banana', 'orange']
console.log(newLength) // 3
```

##### 2. pop()

Удаляет последний элемент из массива и возвращает его значение.

**Samples:**

```javascript
const fruits = ['apple', 'banana', 'orange']
const lastFruit = fruits.pop()

console.log(fruits) // ['apple', 'banana']
console.log(lastFruit) // 'orange'
```

##### 3. unshift()

Добавляет один или несколько элементов в начало массива и возвращает новую длину массива.

**Samples:**

```javascript
const fruits = ['banana', 'orange']
const newLength = fruits.unshift('apple')

console.log(fruits) // ['apple', 'banana', 'orange']
console.log(newLength) // 3
```

##### 4. shift()

Удаляет первый элемент из массива и возвращает его.

**Samples:**

```javascript
const fruits = ['apple', 'banana', 'orange']
const firstFruit = fruits.shift()

console.log(fruits) // ['banana', 'orange']
console.log(firstFruit) // 'apple'
```

##### 5. splice()

Изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.

**Samples:**

```javascript
const fruits = ['apple', 'banana', 'orange', 'mango']
const removed = fruits.splice(1, 2, 'kiwi', 'grape')

console.log(fruits) // ['apple', 'kiwi', 'grape', 'mango']
console.log(removed) // ['banana', 'orange']
```

##### 6. sort()

Сортирует элементы массива на месте и возвращает отсортированный массив.

**Samples:**

```javascript
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
numbers.sort((a, b) => a - b)

console.log(numbers) // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
```

##### 7. reverse()

Обращает порядок элементов в массиве на месте.

**Samples:**

```javascript
const fruits = ['apple', 'banana', 'orange']
fruits.reverse()

console.log(fruits) // ['orange', 'banana', 'apple']
```

##### 8. forEach()

Выполняет указанную функцию один раз для каждого элемента массива.

**Samples:**

```javascript
const fruits = ['apple', 'banana', 'orange']
fruits.forEach((fruit, index) => {
  fruits[index] = fruit + `${'hello'}`
})
console.log(fruits) // ['apple hello', 'banana hello', 'orange hello']
```

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

Итерация, сортировка и фильтрация массивов являются фундаментальными операциями при работе с данными в JavaScript. Эти методы позволяют эффективно обрабатывать и трансформировать массивы, что критически важно для многих задач программирования.

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
