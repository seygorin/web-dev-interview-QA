---
title: JavaScript Advanced Concepts
---

# Modules in JavaScript

Модули в JavaScript - это независимые блоки кода, которые инкапсулируют связанную функциональность, переменные и классы. Они позволяют организовать код в отдельные, повторно используемые единицы, улучшая структуру и поддерживаемость приложения. Они позволяют:

- **Encapsulate functionality (Инкапсулировать функциональность):** Скрывать внутренние детали реализации, предоставляя только необходимый интерфейс.
- **Reuse code (Повторно использовать код):** Использовать один и тот же модуль в разных частях приложения без дублирования.
- **Manage dependencies (Управлять зависимостями):** Четко определять зависимости между различными частями кода.

До появления встроенных модулей в JavaScript (ES6 Modules), разработчики использовали паттерны модулей, такие как Revealing Module Pattern, или системы модулей вроде CommonJS и AMD для организации кода.

**Samples:**

```javascript
// path/to/math.js
export const add = (a, b) => a + b
export const subtract = (a, b) => a - b

// path/to/main.js
import {add, subtract} from './math.js'

console.log(add(5, 3)) // 8
console.log(subtract(10, 4)) // 6
```

## Purpose and concept of a module/module pattern.

Модульный паттерн в JavaScript представляет собой способ организации кода, который позволяет инкапсулировать функциональность и данные, предоставляя публичный API и скрывая внутренние детали реализации. Это способствует созданию более чистого, управляемого и легко поддерживаемого кода, особенно в крупных и сложных приложениях.

**Samples:**

```javascript
// path/to/calculator.js
const Calculator = (function () {
  let result = 0

  const add = (x) => {
    result += x
    return this
  }

  const subtract = (x) => {
    result -= x
    return this
  }

  const multiply = (x) => {
    result = x
    return this
  }

  const divide = (x) => {
    if (x === 0) {
      throw new Error('Division by zero')
    }
    result /= x
    return this
  }

  const getResult = () => result
  // Возвращаем только публичные методы
  return {
    add,
    subtract,
    multiply,
    divide,
    getResult,
  }
})()

Calculator.add(10).subtract(2).multiply(3).divide(4)
console.log(Calculator.getResult()) // 6
```

**Explanation (Объяснение):**
- **Encapsulation (Инкапсуляция):** Переменная `result` и внутренние функции (`add`, `subtract`, `multiply`, `divide`) остаются приватными и недоступными извне.
- **Public API (Публичный API):** Только методы `add`, `subtract`, `multiply`, `divide` и `getResult` доступны для использования вне модуля.
- **Reusability (Переиспользуемость):** Модуль `Calculator` можно использовать в разных частях приложения без риска вмешательства во внутреннее состояние.

## Types of modules (AMD, ES6, CommonJS, UMD).

Существует несколько типов модульных систем в JavaScript, каждая со своим синтаксисом и особенностями:

### AMD (Asynchronous Module Definition)

**Description (Описание):**
AMD предназначен для асинхронной загрузки модулей в браузере, что особенно важно для веб-приложений с большим количеством зависимостей. Чаще всего используется с библиотекой RequireJS.

**Features (Особенности):**
- Асинхронная загрузка модулей.
- Поддержка зависимостей.
- Необходимость использования `define`.

**Sample:**

```javascript
// path/to/math.js
define([], function() {
  return {
    add: function(a, b) {
      return a + b
    },
    subtract: function(a, b) {
      return a - b
    },
  }
});

// path/to/main.js
require(['./math'], function(math) {
  console.log(math.add(5, 3)) // 8
  console.log(math.subtract(10, 4)) // 6
})
```

**Advantages (Преимущества):**
- Позволяет загружать модули только при необходимости.
- Улучшает производительность за счет ленивой загрузки.

**Disadvantages (Недостатки):**
- Сложнее в использовании по сравнению с другими системами модулей.
- Требует дополнительной библиотеки (например, RequireJS).

### ES6 Modules

**Описание:**
Нативная система модулей, представленная в спецификации ECMAScript 2015 (ES6). Становится де-факто стандартом для современных веб-приложений.

**Features (Особенности):**
- Статический синтаксис (`import` и `export`).
- Поддержка инструментов сборки для оптимизации.
- Асинхронные загрузки с динамическими импортами.

**Sample:**

```javascript
// path/to/logger.js
export function log(message) {
  console.log(`[LOG]: ${message}`)
}

export function error(message) {
  console.error(`[ERROR]: ${message}`)
}

// path/to/app.js
import { log, error } from './logger.js';

log('Application started');
error('An unexpected error occurred');
```
**Advantages (Преимущества):**
- Явное указание зависимостей.
- Поддержка статического анализа.
- Широкая поддержка современными браузерами и инструментами сборки.

**Disadvantages (Недостатки):**
- Требует использования модулей в средах, поддерживающих ES6.
- Может потребовать дополнительной настройки для старых браузеров.

### CommonJS

**Description (Описание):**
CommonJS — это модульная система, используемая преимущественно в среде Node.js. Она обеспечивает синхронную загрузку модулей.

**Features (Особенности):**
- Синхронная загрузка, что подходит для серверных сред.
- Использование `module.exports` и `require`.
- Нет поддержки в браузерах без транспиляции или сборки.

**Sample:**

```javascript
//path/to/math.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = {
  add,
  subtract,
};

//path/to/main.js
const math = require('./math');

console.log(math.add(5, 3)); // 8
console.log(math.subtract(10, 4)); // 6
```

**Advantages (Преимущества):**
- Проста в использовании в серверной среде.
- Синхронная загрузка подходит для локальных модулей.

**Disadvantages (Недостатки):**
- Не поддерживается в браузерах без инструментов сборки.
- Синхронная загрузка не оптимальна для клиентских приложений.

### UMD (Universal Module Definition)

**Description (Описание):**
UMD обеспечивает совместимость модулей с различными системами, включая CommonJS, AMD и глобальные переменные. Это универсальный формат, который позволяет модулям работать в разных средах без изменений.

**Features (Особенности):**
- Гибкость использования в различных окружениях.
- Автоматическое определение типа системы модулей.

**Sample:**

```javascript
// path/to/math.js

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define([], factory)
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS
    module.exports = factory()
  } else {
    // Глобальная переменная
    root.math = factory()
  }
})(typeof self !== 'undefined' ? self : this, function () {
  return {
    add: function (a, b) {
      return a + b
    },
    subtract: function (a, b) {
      return a - b
    },
  }
})


//path/to/main.js
// Пример использования в среде CommonJS
const math = require('./math.js');
console.log(math.add(5, 3)); // 8
```

**Advantages (Преимущества):**
- Поддерживает различные системы модулей.
- Удобен для библиотек, предназначенных для использования в различных средах.

**Disadvantages (Недостатки):**
- Сложнее в реализации по сравнению с другими системами модулей.
- Может увеличить размер кода из-за необходимости поддержки нескольких систем.


## Syntax and common features (export default, named exports, exports as).

ES6 модули предоставляют различные способы экспорта и импорта функциональности, что позволяет гибко управлять зависимостями и структурой кода.

### export default

Позволяет экспортировать одно основное значение из модуля. Этот экспорт может быть функцией, классом, объектом или примитивным значением.

**Sample:**

```javascript
//path/to/mathUtils.js
export default function multiply(a, b) {
  return a * b
}

// path/to/main.js
import multiply from './mathUtils.js';

console.log(multiply(4, 5)); // 20
```

**Features (Особенности):**
- Модуль может иметь только один `default` экспорт.
- При импорте можно дать любому имени по желанию.

### Named exports

Позволяют экспортировать несколько значений из модуля по их именам. Это могут быть функции, переменные, классы и т.д.

**Sample:**

```javascript
// path/to/mathOperations.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export function divide(a, b) {
  if (b === 0) throw new Error('Division by zero')
  return a / b
}

//path/to/main.js
import { add, subtract, divide } from './mathOperations.js';

console.log(add(10, 5)); // 15
console.log(divide(20, 4)); // 5
```

**Features (Особенности):**
- Модуль может иметь неограниченное количество named экспортов.
- При импорте необходимо использовать фигурные скобки и точно совпадающие имена.


## Dynamic imports.

Динамические импорты позволяют загружать модули асинхронно во время выполнения программы, а не статически при загрузке или компиляции. Это особенно полезно для оптимизации производительности, ленивой загрузки компонентов и уменьшения первоначального размера бандла.

### Advantages of dynamic imports (Преимущества динамических импортов):

1. **Lazy loading (Ленивая загрузка):** Модули загружаются только при необходимости, что сокращает время первоначальной загрузки страницы.
2. **Improved performance (Улучшенная производительность):** Меньший размер бандла позволяет быстрее загружать и обрабатывать конец пользователя.
3. **Convenience (Удобство):** Позволяет загружать модули на основе условий или пользовательских действий.

### Samples:

#### Example 1: Loading a module on demand

```javascript
//path/to/main.js

async function loadMathModule(operation) {
  try {
    const math = await import('./mathOperations.js')
    switch (operation) {
      case 'add':
        console.log(math.add(5, 3)) // 8
        break
      case 'subtract':
        console.log(math.subtract(10, 4)) // 6
        break
      default:
        console.log('Unknown operation')
    }
  } catch (error) {
    console.error('Failed to load module:', error)
}
}

// Call the function to load the module
loadMathModule('add');
```

**Explanation (Объяснение):**
- Модуль `mathOperations.js` загружается только при вызове функции `loadMathModule`.
- Это позволяет избежать ненужной загрузки модуля, если операция не требуется.

#### Example 2: Lazy loading of components in React (Пример 2: Ленивое подключение компонентов в React):

```jsx
// path/to/App.js
import React, { Suspense, lazy } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
	return (	
		<div>
			<h1>Главная страница</h1>

			<Suspense fallback={<div>Загрузка компонента...</div>}>
				<LazyComponent />
			</Suspense>
		</div>
	);
}

export default App;

// path/to/LazyComponent.js
import React from 'react';

function LazyComponent() {
	return <div>Это ленивый компонент, загруженный асинхронно!</div>;
}

export default LazyComponent;
```

**Explanation (Объяснение):**
- Компонент `LazyComponent` загружается только когда он необходим, например, при рендеринге.
- Использование `Suspense` позволяет отображать запасной контент во время загрузки.

### Advantages of using modules (Преимущества использования модулей):

Использование модулей в JavaScript приносит множество преимуществ, которые способствуют улучшению качества и управляемости кода.

### 1. Encapsulation (Инкапсуляция)

- **Hiding the implementation (Скрытие реализации):** Модули позволяют скрыть внутренние детали реализации, предоставляя только необходимый API для взаимодействия с другими частями приложения.
- **Minimizing global namespace (Минимизация глобального пространства имен):** Модули предотвращают загрязнение глобального пространства имен, что снижает риск конфликтов имен и ошибок.

### 2. Reusability (Переиспользуемость)

- **Modularity (Модульность):** Разделение кода на модули облегчает его повторное использование в разных частях приложения или в различных проектах.
- **Ease of integration (Легкость интеграции):** Модули можно легко импортировать и использовать там, где это необходимо, без необходимости дублирования кода.

### 3. Dependency management (Управление зависимостями)

- **Четкое определение зависимостей:** Модули позволяют явно указывать, какие зависимости необходимы для их работы, что облегчает понимание структуры проекта.
- **Упрощение тестирования:** Явное управление зависимостями упрощает изоляцию модулей для юнит-тестирования.

### 4. Maintainability (Поддерживаемость)

- **Localization of changes (Локализация изменений):** Изменения в одном модуле не влияют напрямую на другие модули, что упрощает процесс обновления и рефакторинга.
- **Меньше ошибок:** Модули уменьшают вероятность возникновения ошибок, связанных с изменениями в глобальном состоянии или переменных.

### 5. Separation of responsibilities (Разделение ответственности)

- **Clear distribution of functions (Четкое распределение функций):** Каждый модуль отвечает за конкретную функциональность, что упрощает понимание и развитие кода.
- **Better project management (Лучшее управление проектом):** Разделение кода на модули облегчает распределение задач между разработчиками и управление большими проектами.


# Functional Patterns

## Callbacks and IIFE.

Callback (функция обратного вызова) - это функция, передаваемая в качестве аргумента другой функции и выполняемая после завершения этой функции.

IIFE (Immediately Invoked Function Expression) - это функция, которая выполняется сразу после ее определения.

**Samples:**

```javascript
// Callback
function fetchData(callback) {
  setTimeout(() => {
    const data = {id: 1, name: 'John'}
    callback(data)
  }, 1000)
}

fetchData((result) => {
  console.log(result) // { id: 1, name: 'John' }
})

// IIFE
;(function () {
  const secretValue = 42
  console.log('This function is executed immediately')
})()

console.log(typeof secretValue) // "undefined"
```

## Limitations of callbacks (e.g., callback hell).

"Callback hell" (ад колбэков) - это ситуация, когда код становится трудночитаемым и сложным для поддержки из-за множества вложенных функций обратного вызова, особенно при работе с асинхронными операциями.

**Samples:**

```javascript
getData(function (a) {
  getMoreData(
    a,
    function (b) {
      getEvenMoreData(
        b,
        function (c) {
          getYetEvenMoreData(
            c,
            function (d) {
              getFinalData(
                d,
                function (finalData) {
                  console.log(finalData)
                },
                failureCallback
              )
            },
            failureCallback
          )
        },
        failureCallback
      )
    },
    failureCallback
  )
}, failureCallback)
```

## Function currying and partial functions.

Каррирование - это техника преобразования функции с множеством аргументов в последовательность функций, каждая из которых принимает один аргумент.

Частичное применение - это создание новой функции путем фиксации некоторых аргументов существующей функции.

**Samples:**

```javascript
// Currying
const curry = (fn) => {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}

const sum = curry((a, b, c) => a + b + c)
console.log(sum(1)(2)(3)) // 6
console.log(sum(1, 2)(3)) // 6

// Partial application
function multiply(a, b, c) {
  return a * b * c
}

const multiplyByTwo = multiply.bind(null, 2)
console.log(multiplyByTwo(3, 4)) // 24 (2 * 3 * 4)
```

# Object-Oriented Programming (OOP)

## `new` keyword functionality.

Ключевое слово `new` в JavaScript используется для создания экземпляра объекта, используя функцию-конструктор. Оно автоматически создает новый пустой объект, устанавливает `this` на этот новый объект, выполняет код конструктора и возвращает созданный объект.

**Samples:**

```javascript
function Person(name, age) {
  this.name = name
  this.age = age
}

const john = new Person('John', 30)
console.log(john.name) // "John"
console.log(john.age) // 30
```

## Constructor functions and their properties.

Функции-конструкторы - это функции, используемые с ключевым словом `new` для создания объектов. Они определяют свойства и методы, которые будут иметь создаваемые объекты.

**Samples:**

```javascript
function Car(make, model) {
  this.make = make
  this.model = model
  this.drive = function () {
    console.log(`Driving ${this.make} ${this.model}`)
  }
}

const myCar = new Car('Toyota', 'Corolla')
myCar.drive() // "Driving Toyota Corolla"
```

## Public, private, and static members in OOP.

- Публичные члены доступны извне объекта.
- Приватные члены доступны только внутри объекта.
- Статические члены принадлежат классу, а не экземплярам объекта.

**Samples:**

```javascript
class BankAccount {
  #balance = 0 // Приватное свойство

  constructor(owner) {
    this.owner = owner // Публичное свойство
  }

  deposit(amount) {
    this.#balance += amount
  }

  getBalance() {
    return this.#balance
  }

  static getBankName() {
    return 'MyBank' // Статический метод
  }
}

const account = new BankAccount('Alice')
account.deposit(100)
console.log(account.getBalance()) // 100
console.log(BankAccount.getBankName()) // "MyBank"
```

# ECMAScript Classes

## Class declaration and syntax.

Классы в ECMAScript предоставляют более чистый и интуитивно понятный синтаксис для создания объектов и реализации наследования, основанный на прототипном наследовании JavaScript.

**Samples:**

```javascript
class Animal {
  constructor(name) {
    this.name = name
  }

  speak() {
    console.log(`${this.name} makes a sound.`)
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`)
  }
}

const dog = new Dog('Rex')
dog.speak() // "Rex barks."
```

## Differences between class declarations and constructor functions.

Классы в ES6 предоставляют более чистый синтаксис, но под капотом они все еще используют прототипное наследование. Основные отличия включают обязательное использование `new`, автоматическое использование строгого режима и невозможность вызова класса до его объявления.

**Samples:**

```javascript
// Constructor function
function PersonFunc(name) {
  this.name = name
}
PersonFunc.prototype.sayHello = function () {
  console.log(`Hello, I'm ${this.name}`)
}

// Class declaration
class PersonClass {
  constructor(name) {
    this.name = name
  }
  sayHello() {
    console.log(`Hello, I'm ${this.name}`)
  }
}

const john = new PersonFunc('John')
const jane = new PersonClass('Jane')

john.sayHello() // "Hello, I'm John"
jane.sayHello() // "Hello, I'm Jane"
```

## Usage of super().

`super()` используется в классах-потомках для вызова конструктора родительского класса и доступа к его методам и свойствам.

**Samples:**

```javascript
class Vehicle {
  constructor(type) {
    this.type = type
  }
  describe() {
    return `This is a ${this.type}.`
  }
}

class Car extends Vehicle {
  constructor(make, model) {
    super('car') // Вызов конструктора родительского класса
    this.make = make
    this.model = model
  }
  describe() {
    return `${super.describe()} It's a ${this.make} ${this.model}.`
  }
}

const myCar = new Car('Toyota', 'Corolla')
console.log(myCar.describe())
// "This is a car. It's a Toyota Corolla."
```

# Prototypal Inheritance

## Properties like `__proto__` and `prototype`.

- `__proto__` - это свойство объекта, которое указывает на прототип этого объекта.
- `prototype` - это объект, используемый для определения свойств и методов, которые будут унаследованы всеми экземплярами, созданными с помощью функции-конструктора.

**Samples:**

```javascript
function Animal(name) {
  this.name = name
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`)
}

const cat = new Animal('Whiskers')
console.log(cat.__proto__ === Animal.prototype) // true
cat.speak() // "Whiskers makes a sound."
```

## Using `Object.create` to define prototypes explicitly.

`Object.create()` - это метод, который создает новый объект с указанным прототипом и свойствами. Это позволяет явно устанавливать прототипные связи между объектами.

**Samples:**

```javascript
const animalMethods = {
  eat: function () {
    console.log(`${this.name} is eating.`)
  },
  sleep: function () {
    console.log(`${this.name} is sleeping.`)
  },
}

function createAnimal(name) {
  return Object.create(animalMethods, {
    name: {value: name},
  })
}

const dog = createAnimal('Buddy')
dog.eat() // "Buddy is eating."
dog.sleep() // "Buddy is sleeping."
```

# ECMAScript Advanced Data Types & Expressions

## Set/Map and WeakSet/WeakMap.

- `Set` - это коллекция уникальных значений любого типа.
- `Map` - это коллекция пар ключ-значение, где ключи могут быть любого типа.
- `WeakSet` и `WeakMap` - это версии Set и Map, которые позволяют сборщику мусора удалять их элементы, если на них нет других ссылок.

**Samples:**

```javascript
// Set
const mySet = new Set([1, 2, 3, 4, 4])
console.log(mySet.size) // 4 (дубликаты автоматически удаляются)

// Map
const myMap = new Map()
myMap.set('key1', 'value1')
myMap.set(42, 'answer')
console.log(myMap.get('key1')) // "value1"

// WeakSet
let obj = {data: 'some data'}
const weakSet = new WeakSet([obj])
obj = null // теперь объект может быть удален сборщиком мусора

// WeakMap
let key = {id: 1}
const weakMap = new WeakMap()
weakMap.set(key, 'value')
key = null // теперь пара ключ-значение может быть удалена сборщиком мусора
```

# JavaScript Errors

## Error handling techniques including try..catch.

`try...catch` - это конструкция для обработки исключений в JavaScript. Код в блоке `try` выполняется, и если возникает ошибка, управление передается в блок `catch`.

**Samples:**

```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero')
  }
  return a / b
}

try {
  console.log(divide(10, 2)) // 5
  console.log(divide(10, 0)) // Вызовет ошибку
} catch (error) {
  console.error('An error occurred:', error.message)
} finally {
  console.log('This always runs')
}
```

## Understanding and implementing custom errors.

Пользовательские ошибки - это ошибки, которые мы определяем сами, наследуя от встроенного класса `Error`. Они позволяют создавать специфичные для приложения типы ошибок.

**Samples:**

```javascript
class ValidationError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ValidationError'
  }
}

function validateUser(user) {
  if (!user.name) {
    throw new ValidationError('Name is required')
  }
  if (user.age < 18) {
    throw new ValidationError('User must be 18 or older')
  }
}

try {
  validateUser({name: 'John', age: 16})
} catch (error) {
  if (error instanceof ValidationError) {
    console.log('Validation error:', error.message)
  } else {
    console.log('Unknown error:', error)
  }
}
```

# ECMAScript Advanced

## Promises, async/await, and the event loop.

- Промисы (Promises) - это объекты, представляющие результат асинхронной операции.
- `async/await` - это синтаксический сахар для работы с промисами, делающий асинхронный код похожим на синхронный.
- Event Loop - механизм, который позволяет JavaScript выполнять неблокирующие операции, несмотря на то, что JavaScript однопоточный.

**Samples:**

```javascript
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function example() {
  console.log('Start')
  await delay(2000)
  console.log('After 2 seconds')
  await delay(1000)
  console.log('After 3 seconds')
}

example()
console.log('This runs immediately')

// Вывод:
// "Start"
// "This runs immediately"
// (через 2 секунды) "After 2 seconds"
// (через 1 секунду) "After 3 seconds"
```

## Garbage collection basics.

Сборка мусора - это автоматический процесс в JavaScript, который освобождает память, занятую объектами, которые больше не используются в программе.

**Samples:**

```javascript
function createLargeObject() {
  return new Array(1000000).fill('some data')
}

let obj = createLargeObject() // Объект занимает много памяти
console.log(obj.length) // 1000000

obj = null // Теперь объект доступен для сборщика мусора

// В какой-то момент сборщик мусора освободит память, занятую этим объектом
```

# JavaScript in Browser:

## Global object window

### Understanding browser's location and history API.

- `window.location` предоставляет информацию о текущем URL и методы для навигации.
- `window.history` позволяет манипулировать историей браузера.

**Samples:**

```javascript
// Location API
console.log(window.location.href) // Полный URL текущей страницы
window.location.href = 'https://example.com' // Перенаправление на новый URL

// History API
history.pushState({page: 1}, 'Title 1', '?page=1') // Добавляет новую запись в историю
history.back() // Возврат на предыдущую страницу
```

## User agent parsing and platform/browser detection.

User Agent - это строка, которую браузер отправляет серверу, содержащая информацию о браузере и операционной системе пользователя.

**Samples:**

```javascript
function getBrowserInfo() {
  const ua = navigator.userAgent
  let browserName
  let browserVersion

  if (ua.indexOf('Firefox') > -1) {
    browserName = 'Firefox'
    browserVersion = ua.match(/Firefox\/(\d+)/)[1]
  } else if (ua.indexOf('Chrome') > -1) {
    browserName = 'Chrome'
    browserVersion = ua.match(/Chrome\/(\d+)/)[1]
  } else if (ua.indexOf('Safari') > -1) {
    browserName = 'Safari'
    browserVersion = ua.match(/Version\/(\d+)/)[1]
  }

  return `${browserName} ${browserVersion}`
}

console.log(getBrowserInfo())
```

# Page Lifecycle

## Parsing, reflow, repaint, and the critical rendering path.

- Parsing: процесс анализа HTML и CSS для построения DOM и CSSOM.
- Reflow: процесс пересчета размеров и позиций элементов на странице.
- Repaint: процесс перерисовки элементов без изменения их размеров и позиций.
- Critical Rendering Path: последовательность шагов, которые браузер выполняет для первоначального рендеринга страницы.

**Samples:**

```javascript
// Этот код вызовет reflow и repaint
const div = document.createElement('div')
div.style.color = 'red'
document.body.appendChild(div)

// Этот код вызовет только repaint
div.style.color = 'blue'

// Оптимизация для минимизации reflow
function batchDOMChanges() {
  const fragment = document.createDocumentFragment()
  for (let i = 0; i < 100; i++) {
    const p = document.createElement('p')
    p.textContent = `Paragraph ${i}`
    fragment.appendChild(p)
  }
  document.body.appendChild(fragment)
}

// Вызов функции после загрузки DOM
document.addEventListener('DOMContentLoaded', batchDOMChanges)
```

# Network requests

## Using Fetch and understanding XMLHTTPRequest.

`Fetch` и `XMLHttpRequest` - это API для выполнения HTTP-запросов в браузере. `Fetch` - это более современный и удобный API, основанный на промисах.

**Samples:**

```javascript
// Fetch API
fetch('https://api.example.com/data')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error))

// XMLHttpRequest
const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://api.example.com/data', true)
xhr.onload = function () {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText)
    console.log(data)
  } else {
    console.error('Error:', xhr.status)
  }
}
xhr.onerror = function () {
  console.error('Request failed')
}
xhr.send()
```

# Timers

## Differences between setTimeout and requestAnimationFrame.

`setTimeout` планирует выполнение функции через указанный интервал времени.
`requestAnimationFrame` планирует выполнение функции перед следующей перерисовкой браузера, обычно используется для анимаций.

**Samples:**

```javascript
// setTimeout
setTimeout(() => {
  console.log('This runs after 1 second')
}, 1000)

// requestAnimationFrame
function animate() {
  // Код анимации
  console.log('Animation frame')
  requestAnimationFrame(animate)
}
requestAnimationFrame(animate)
```

# Design Patterns:

## Familiarity with Creational, Structural, and Behavioral Design Patterns.

Паттерны проектирования - это типовые решения часто встречающихся проблем в разработке программного обеспечения. Они делятся на три категории: порождающие, структурные и поведенческие.

**Samples:**

```typescript
// Порождающий паттерн: Singleton
class DatabaseConnection {
  private static instance: DatabaseConnection
  private constructor() {}

  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection()
    }
    return DatabaseConnection.instance
  }
}

// Структурный паттерн: Adapter
interface EuropeanSocket {
  plugIn(): void
}
interface USASocket {
  insertPlug(): void
}

class EuropeanDevice {
  constructor(private socket: EuropeanSocket) {}
  powerOn() {
    this.socket.plugIn()
  }
}

class USASocketAdapter implements EuropeanSocket {
  constructor(private usaSocket: USASocket) {}
  plugIn() {
    this.usaSocket.insertPlug()
  }
}

// Поведенческий паттерн: Observer
interface Observer {
  update(data: any): void
}

class Subject {
  private observers: Observer[] = []

  addObserver(observer: Observer) {
    this.observers.push(observer)
  }

  notifyObservers(data: any) {
    this.observers.forEach((observer) => observer.update(data))
  }
}
```

## SOLID principles and design patterns in project contexts.

SOLID - это акроним для пяти принципов объектно-ориентированного программирования и проектирования:

- Single Responsibility Principle (SRP)
- Open/Closed Principle (OCP)
- Liskov Substitution Principle (LSP)
- Interface Segregation Principle (ISP)
- Dependency Inversion Principle (DIP)

**Samples:**

```typescript
// Single Responsibility Principle
class User {
  constructor(public name: string) {}
}

class UserRepository {
  saveUser(user: User) {
    // Логика сохранения пользователя
  }
}

// Open/Closed Principle
interface Shape {
  area(): number
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}
  area() {
    return this.width * this.height
  }
}

class Circle implements Shape {
  constructor(private radius: number) {}
  area() {
    return Math.PI * this.radius ** 2
  }
}
```

# Software Development Methodologies:

## Agile, Scrum, Kanban, and Waterfall methodologies.

Это различные подходы к управлению проектами в разработке ПО:

- Agile: гибкая методология, основанная на итеративной разработке.
- Scrum: фреймворк для управления проектами, основанный на принципах Agile.
- Kanban: метод управления разработкой, основанный на визуализации рабочего процесса.
- Waterfall: линейная последовательная модель разработки.

**Samples:**

```
Scrum Sprint:
1. Sprint Planning
2. Daily Standups
3. Sprint Review
4. Sprint Retrospective

Kanban Board:
| To Do | In Progress | Review | Done |
|-------|-------------|--------|------|
| Task1 | Task2       | Task3  | Task4|
| Task5 |             |        |      |
```

## Project estimation techniques.

Методы оценки проектов включают:

- Planning Poker
- T-Shirt Sizing
- Analogy
- Three-Point Estimation

**Samples:**

```
Three-Point Estimation:
Task: Implement user authentication
Optimistic: 2 days
Most Likely: 5 days
Pessimistic: 10 days

Estimate = (Optimistic + 4 * Most Likely + Pessimistic) / 6
         = (2 + 4*5 + 10) / 6 = 5.33 days
```

# Testing:

## Understanding different types of testing (Integration, E2E, Performance).

- Интеграционное тестирование: проверка взаимодействия между компонентами.
- E2E (End-to-End) тестирование: проверка всего приложения от начала до конца.
- Нагрузочное тестирование: проверка производительности системы под нагрузкой.

**Samples:**

```typescript
// Интеграционный тест
describe('UserService', () => {
  it('should create a user and save to database', async () => {
    const user = await userService.createUser('John')
    const savedUser = await database.findUser(user.id)
    expect(savedUser).toEqual(user)
  })
})

// E2E тест (с использованием Cypress)
describe('Login Flow', () => {
  it('should log in successfully', () => {
    cy.visit('/login')
    cy.get('#username').type('user@example.com')
    cy.get('#password').type('password123')
    cy.get('#submit').click()
    cy.url().should('include', '/dashboard')
  })
})
```

## Test Pyramid.

Тестовая пирамида - это концепция, которая предлагает иметь больше низкоуровневых юнит-тестов, меньше интеграционных тестов и еще меньше высокоуровневых E2E тестов.

**Samples:**

```
       /\
      /  \
     /E2E \
    /______\
   /        \
  /Integration\
 /______________\
/                \
/   Unit Tests    \
/__________________\
```

## Test-driven development (TDD) and behavior-driven development (BDD).

TDD - подход, при котором сначала пишутся тесты, а потом код.
BDD - расширение TDD, фокусирующееся на поведении системы.

**Samples:**

```typescript
// TDD
describe('Calculator', () => {
  it('should add two numbers', () => {
    const result = calculator.add(2, 3);
    expect(result).toBe(5);
  });
});

// BDD (с использованием Cucumber)
Feature: User Login
  Scenario: Successful login
    Given I am on the login page
    When I enter valid credentials
    And I click the login button
    Then I should be redirected to the dashboard
```

# Web Communication Protocols:

## Differences between HTTP and HTTPS.

HTTP (Hypertext Transfer Protocol) - протокол передачи данных для веб.
HTTPS (HTTP Secure) - безопасная версия HTTP, использующая шифрование.

## Understanding HTTP methods, headers, responses, and status codes.

**Samples:**

```
GET /api/users HTTP/1.1
Host: example.com
Authorization: Bearer token123

HTTP/1.1 200 OK
Content-Type: application/json

{
  "users": [
    {"id": 1, "name": "John"},
    {"id": 2, "name": "Jane"}
  ]
}
```

## Concepts of RESTful APIs.

REST (Representational State Transfer) - архитектурный стиль для разработки веб-сервисов.

**Samples:**

```
GET    /users         # Получить список пользователей
POST   /users         # Создать нового пользователя
GET    /users/{id}    # Получить конкретного пользователя
PUT    /users/{id}    # Обновить пользователя
DELETE /users/{id}    # Удалить пользователя
```

# Common Web-Security Knowledge:

## Basic security concepts including CORS, XSS, and OWASP Top 10.

CORS (Cross-Origin Resource Sharing) - механизм, позволяющий веб-страницам запрашивать ресурсы с других доменов.
XSS (Cross-Site Scripting) - тип атаки, внедряющий вредоносные скрипты на веб-страницы.
OWASP Top 10 - список наиболее критичных рисков безопасности веб-приложений.

**Samples:**

```typescript
// Защита от XSS
function sanitizeInput(input: string): string {
  return input.replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

// CORS настройка (Express.js)
app.use(
  cors({
    origin: 'https://example.com',
    methods: ['GET', 'POST'],
  })
)
```

## Authentication mechanisms (JWT, OAuth).

JWT (JSON Web Tokens) - способ безопасной передачи информации между сторонами в виде JSON-объекта.
OAuth - протокол авторизации, который позволяет приложениям получить доступ к данным пользователя без передачи пароля.

**Samples:**

```typescript
// Создание JWT
import jwt from 'jsonwebtoken'

const token = jwt.sign({userId: 123}, 'secret_key', {expiresIn: '1h'})

// Проверка JWT
try {
  const decoded = jwt.verify(token, 'secret_key')
  console.log(decoded.userId) // 123
} catch (error) {
  console.log('Invalid token')
}
```
