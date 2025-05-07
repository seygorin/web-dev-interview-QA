---
title: JavaScript Advanced Concepts
---

## Modules in JavaScript

Модули в JavaScript - это независимые блоки кода, которые инкапсулируют связанную функциональность, переменные и классы. Они позволяют организовать код в отдельные, повторно используемые единицы, улучшая структуру и поддерживаемость приложения. Они позволяют:

- **Encapsulate functionality:** Скрывать внутренние детали реализации, предоставляя только необходимый интерфейс.
- **Reuse code:** Использовать один и тот же модуль в разных частях приложения без дублирования.
- **Manage dependencies:** Четко определять зависимости между различными частями кода.

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

### Purpose and concept of a module or module pattern.

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

**Explanation:**

- **Encapsulation:** Переменная `result` и внутренние функции (`add`, `subtract`, `multiply`, `divide`) остаются приватными и недоступными извне.
- **Public API:** Только методы `add`, `subtract`, `multiply`, `divide` и `getResult` доступны для использования вне модуля.
- **Reusability:** Модуль `Calculator` можно использовать в разных частях приложения без риска вмешательства во внутреннее состояние.

### Types of modules (AMD, ES6, CommonJS, UMD).

Существует несколько типов модульных систем в JavaScript, каждая со своим синтаксисом и особенностями:

#### AMD (Asynchronous Module Definition)

**Description (Описание):**
AMD предназначен для асинхронной загрузки модулей в браузере, что особенно важно для веб-приложений с большим количеством зависимостей. Чаще всего используется с библиотекой RequireJS.

**Features (Особенности):**

- Асинхронная загрузка модулей.
- Поддержка зависимостей.
- Необходимость использования `define`.

**Sample:**

```javascript
// path/to/math.js
define([], function () {
  return {
    add: function (a, b) {
      return a + b
    },
    subtract: function (a, b) {
      return a - b
    },
  }
})

// path/to/main.js
require(['./math'], function (math) {
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

#### ES6 Modules

**Description:**
Нативная система модулей, представленная в спецификации ECMAScript 2015 (ES6). Становится де-факто стандартом для современных веб-приложений.

**Features:**

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
import {log, error} from './logger.js'

log('Application started')
error('An unexpected error occurred')
```

**Advantages:**

- Явное указание зависимостей.
- Поддержка статического анализа.
- Широкая поддержка современными браузерами и инструментами сборки.

**Disadvantages:**

- Требует использования модулей в средах, поддерживающих ES6.
- Может потребовать дополнительной настройки для старых браузеров.

#### CommonJS

**Description:**
CommonJS — это модульная система, используемая преимущественно в среде Node.js. Она обеспечивает синхронную загрузку модулей.

**Features:**

- Синхронная загрузка, что подходит для серверных сред.
- Использование `module.exports` и `require`.
- Нет поддержки в браузерах без транспиляции или сборки.

**Sample:**

```javascript
//path/to/math.js
const add = (a, b) => a + b
const subtract = (a, b) => a - b

module.exports = {
  add,
  subtract,
}

//path/to/main.js
const math = require('./math')

console.log(math.add(5, 3)) // 8
console.log(math.subtract(10, 4)) // 6
```

**Advantages:**

- Проста в использовании в серверной среде.
- Синхронная загрузка подходит для локальных модулей.

**Disadvantages:**

- Не поддерживается в браузерах без инструментов сборки.
- Синхронная загрузка не оптимальна для клиентских приложений.

#### UMD (Universal Module Definition)

**Description:**
UMD обеспечивает совместимость модулей с различными системами, включая CommonJS, AMD и глобальные переменные. Это универсальный формат, который позволяет модулям работать в разных средах без изменений.

**Features:**

- Гибкость использования в различных окружениях.
- Автоматическое определение типа системы модулей.

**Sample:**

```javascript
// path/to/math.js

;(function (root, factory) {
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
const math = require('./math.js')
console.log(math.add(5, 3)) // 8
```

**Advantages:**

- Поддерживает различные системы модулей.
- Удобен для библиотек, предназначенных для использования в различных средах.

**Disadvantages:**

- Сложнее в реализации по сравнению с другими системами модулей.
- Может увеличить размер кода из-за необходимости поддержки нескольких систем.

### Syntax and common features (export default, named exports, exports as).

ES6 модули предоставляют различные способы экспорта и импорта функциональности, что позволяет гибко управлять зависимостями и структурой кода.

#### export default

Позволяет экспортировать одно основное значение из модуля. Этот экспорт может быть функцией, классом, объектом или примитивным значением.

**Sample:**

```javascript
//path/to/mathUtils.js
export default function multiply(a, b) {
  return a * b
}

// path/to/main.js
import multiply from './mathUtils.js'

console.log(multiply(4, 5)) // 20
```

**Features:**

- Модуль может иметь только один `default` экспорт.
- При импорте можно дать любому имени по желанию.

#### Named exports

Позволяют экспортировать несколько значений из модуля по их именам. Это могут быть функции, переменные, классы и т.д.

**Sample:**

```javascript
// path/to/mathOperations.js
export const add = (a, b) => a + b
export const subtract = (a, b) => a - b
export function divide(a, b) {
  if (b === 0) throw new Error('Division by zero')
  return a / b
}

//path/to/main.js
import {add, subtract, divide} from './mathOperations.js'

console.log(add(10, 5)) // 15
console.log(divide(20, 4)) // 5
```

**Features:**

- Модуль может иметь неограниченное количество named экспортов.
- При импорте необходимо использовать фигурные скобки и точно совпадающие имена.

### Dynamic imports.

Динамические импорты позволяют загружать модули асинхронно во время выполнения программы, а не статически при загрузке или компиляции. Это особенно полезно для оптимизации производительности, ленивой загрузки компонентов и уменьшения первоначального размера бандла.

#### Advantages of dynamic imports:

1. **Lazy loading:** Модули загружаются только при необходимости, что сокращает время первоначальной загрузки страницы.
2. **Improved performance:** Меньший размер бандла позволяет быстрее загружать и обрабатывать конец пользователя.
3. **Convenience:** Позволяет загружать модули на основе условий или пользовательских действий.

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
loadMathModule('add')
```

**Explanation:**

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

**Explanation:**

- Компонент `LazyComponent` загружается только когда он необходим, например, при рендеринге.
- Использование `Suspense` позволяет отображать запасной контент во время загрузки.

#### Advantages of using modules:

Использование модулей в JavaScript приносит множество преимуществ, которые способствуют улучшению качества и управляемости кода.

#### 1. Encapsulation:

- **Hiding the implementation:** Модули позволяют скрыть внутренние детали реализации, предоставляя только необходимый API для взаимодействия с другими частями приложения.
- **Minimizing global namespace (Минимизация глобального пространства имен):** Модули предотвращают загрязнение глобального пространства имен, что снижает риск конфликтов имен и ошибок.

#### 2. Reusability:

- **Modularity (Модульность):** Разделение кода на модули облегчает его повторное использование в разных частях приложения или в различных проектах.
- **Ease of integration (Легкость интеграции):** Модули можно легко импортировать и использовать там, где это необходимо, без необходимости дублирования кода.

#### 3. Dependency management:

- **Четкое определение зависимостей:** Модули позволяют явно указывать, какие зависимости необходимы для их работы, что облегчает понимание структуры проекта.
- **Упрощение тестирования:** Явное управление зависимостями упрощает изоляцию модулей для юнит-тестирования.

#### 4. Maintainability:

- **Localization of changes:** Изменения в одном модуле не влияют напрямую на другие модули, что упрощает процесс обновления и рефакторинга.
- **Меньше ошибок:** Модули уменьшают вероятность возникновения ошибок, связанных с изменениями в глобальном состоянии или переменных.

#### 5. Separation of responsibilities:

- **Clear distribution of functions:** Каждый модуль отвечает за конкретную функциональность, что упрощает понимание и развитие кода.
- **Better project management:** Разделение кода на модули облегчает распределение задач между разработчиками и управление большими проектами.

Вот более подробное, структурированное и понятное описание для тем: callbacks, IIFE, проблемы callback hell, каррирование и частичное применение функций. Я добавил больше объяснений, практических советов и акцентировал внимание на ключевых деталях.

## Functional Patterns

### Callbacks and IIFE

**Callback** (функция обратного вызова) — это функция, которая передается как аргумент в другую функцию и вызывается после завершения основной операции. Колбэки широко используются для обработки асинхронных событий, например, при работе с таймерами, сетевыми запросами, обработчиками событий.

**Sample:**

```javascript
function fetchData(callback) {
  setTimeout(() => {
    const data = {id: 1, name: 'John'}
    callback(data) // вызываем callback после получения данных
  }, 1000)
}

fetchData((result) => {
  console.log(result) // { id: 1, name: 'John' }
})
```

Здесь функция `fetchData` имитирует асинхронную загрузку данных и вызывает переданный колбэк, когда данные готовы.

**IIFE** (Immediately Invoked Function Expression, немедленно вызываемое функциональное выражение) — это функция, которая определяется и сразу же выполняется. Такой подход часто используется для создания изолированной области видимости, чтобы переменные внутри IIFE не "просачивались" в глобальную область.

**Sample:**

```javascript
;(function () {
  const secretValue = 42
  console.log('This function is executed immediately')
})()

console.log(typeof secretValue) // "undefined" — переменная не видна снаружи
```

IIFE помогает избежать конфликтов имен и защищает внутренние переменные от внешнего доступа.

### Limitations of Callbacks (Callback Hell)

**Callback hell** (ад колбэков) — это ситуация, когда в коде появляется множество вложенных функций обратного вызова, что делает его трудно читаемым, сложным для поддержки и отладки. Такая проблема часто возникает при последовательном выполнении нескольких асинхронных операций, каждая из которых зависит от результата предыдущей.

**Sample:**

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

В этом примере каждый уровень вложенности усложняет понимание кода, увеличивает вероятность ошибок и затрудняет обработку ошибок.

**Как избежать callback hell:**

- Используйте именованные функции вместо анонимных.
- Применяйте современные подходы: промисы (`Promise`), async/await.
- Разбивайте сложные цепочки на отдельные функции.

### Function Currying and Partial Application

**Каррирование** (currying) — это техника преобразования функции с несколькими аргументами в последовательность вложенных функций, каждая из которых принимает один аргумент. Каррирование позволяет создавать более гибкие и переиспользуемые функции.

**Sample:**

```javascript
// Обычная функция сложения двух чисел
function add(a, b) {
  return a + b
}

// Каррированная версия
function curriedAdd(a) {
  return function (b) {
    return a + b
  }
}

// Использование:
const addFive = curriedAdd(5)
console.log(addFive(3)) // 8

// Или сразу:
console.log(curriedAdd(2)(4)) // 6
```

Каррирование удобно для создания функций с "запомненными" аргументами и для построения цепочек вызовов.

**Частичное применение** (partial application) — это создание новой функции на основе существующей, с заранее зафиксированными (частично применёнными) аргументами. Это позволяет создавать более специализированные функции из общих.

**Пример частичного применения:**

```javascript
function multiply(a, b, c) {
  return a * b * c
}

const multiplyByTwo = multiply.bind(null, 2) // фиксируем первый аргумент
console.log(multiplyByTwo(3, 4)) // 24 (2 * 3 * 4)
```

В этом примере `multiplyByTwo` — это новая функция, которая всегда умножает первый аргумент на 2.

**Summary:**

- **Callbacks** — основной инструмент для асинхронного программирования, но могут привести к "callback hell".
- **IIFE** — удобный способ создать изолированную область видимости.
- **Каррирование** и **частичное применение** — мощные техники для создания гибких, переиспользуемых и легко тестируемых функций.

Используйте эти паттерны осознанно, чтобы писать чистый, модульный и поддерживаемый JavaScript-код!

Вот более подробное, современное и структурированное описание ключевых концепций объектно-ориентированного программирования (OOP) в JavaScript, с расширенными примерами и пояснениями:

## Object-Oriented Programming (OOP)

### `new` Keyword Functionality

Ключевое слово `new` в JavaScript используется для создания экземпляров объектов на основе функций-конструкторов или классов. Оно выполняет несколько важных шагов:

1. Создаёт новый пустой объект.
2. Устанавливает прототип этого объекта на свойство `prototype` функции-конструктора.
3. Присваивает переменной `this` внутри конструктора ссылку на этот новый объект.
4. Выполняет код конструктора.
5. Возвращает созданный объект (если конструктор явно не возвращает другой объект).

**Sample:**

```javascript
function Person(name, age) {
  this.name = name
  this.age = age
}

const john = new Person('John', 30)
console.log(john.name) // "John"
console.log(john.age) // 30
console.log(john instanceof Person) // true
```

**Sample (ES6+):**

```javascript
class Animal {
  constructor(type) {
    this.type = type
  }
}

const dog = new Animal('Dog')
console.log(dog.type) // "Dog"
console.log(dog instanceof Animal) // true
```

### Constructor Functions and Their Properties

**Функции-конструкторы** — это обычные функции, которые предназначены для создания объектов с помощью `new`. По соглашению, их имена пишутся с заглавной буквы.

- Свойства, определённые через `this`, становятся уникальными для каждого экземпляра.
- Методы, определённые внутри конструктора, также будут уникальны для каждого экземпляра (что не всегда эффективно).
- Для общих методов лучше использовать прототип.

**Sample:**

```javascript
function Car(make, model) {
  this.make = make
  this.model = model
}

// Метод на прототипе — общий для всех экземпляров
Car.prototype.drive = function () {
  console.log(`Driving ${this.make} ${this.model}`)
}

const myCar = new Car('Toyota', 'Corolla')
myCar.drive() // "Driving Toyota Corolla"
```

**Modern syntax with classes:**

```javascript
class Car {
  constructor(make, model) {
    this.make = make
    this.model = model
  }

  drive() {
    console.log(`Driving ${this.make} ${this.model}`)
  }
}

const myCar = new Car('Honda', 'Civic')
myCar.drive() // "Driving Honda Civic"
```

### Public, Private, and Static Members in OOP

В современных классах JavaScript можно определять публичные, приватные и статические члены.

- **Публичные члены** доступны извне экземпляра.
- **Приватные члены** (начинаются с `#`) доступны только внутри класса.
- **Статические члены** принадлежат самому классу, а не его экземплярам.

**Sample:**

```javascript
class BankAccount {
  // Приватное свойство (доступно только внутри класса)
  #balance = 0

  // Публичное свойство
  constructor(owner) {
    this.owner = owner
  }

  // Публичный метод
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount
    }
  }

  // Публичный метод для получения баланса
  getBalance() {
    return this.#balance
  }

  // Статический метод (вызывается на классе, а не на экземпляре)
  static getBankName() {
    return 'MyBank'
  }
}

const account = new BankAccount('Alice')
account.deposit(100)
console.log(account.owner) // "Alice" (публичное свойство)
console.log(account.getBalance()) // 100 (доступ через публичный метод)
console.log(BankAccount.getBankName()) // "MyBank" (статический метод)

// Попытка доступа к приватному свойству извне вызовет ошибку:
// console.log(account.#balance); // SyntaxError
```

**Explanation:**

- Приватные свойства и методы (`#balance`) защищают внутреннее состояние объекта от внешнего вмешательства.
- Статические методы и свойства используются для общих функций, не зависящих от конкретного экземпляра (например, фабричные методы, константы).

#### Дополнительные возможности классов

- **Геттеры и сеттеры** позволяют управлять доступом к свойствам:

  ```javascript
  class User {
    #age = 0
    set age(value) {
      if (value > 0) this.#age = value
    }
    get age() {
      return this.#age
    }
  }
  const user = new User()
  user.age = 25
  console.log(user.age) // 25
  ```

- **Наследование** реализуется с помощью ключевого слова `extends`:
  ```javascript
  class Employee extends Person {
    constructor(name, age, position) {
      super(name, age)
      this.position = position
    }
  }
  const emp = new Employee('Bob', 40, 'Manager')
  ```

**Summary:**  
OOP в JavaScript позволяет создавать масштабируемые, модульные и защищённые структуры данных. Используйте функции-конструкторы или классы для создания объектов, применяйте приватные и статические члены для инкапсуляции и организации кода, а также наследование для повторного использования логики.

## ECMAScript Classes

### Class Declaration and Syntax

Классы в ECMAScript (начиная с ES6) предоставляют синтаксический сахар для создания объектов и организации наследования, делая код более читаемым и похожим на классические ООП-языки (например, Java или C#). Однако под капотом классы по-прежнему основаны на прототипном наследовании JavaScript.

**Объявление класса:**

```javascript
class Animal {
  constructor(name) {
    this.name = name // Публичное свойство экземпляра
  }

  speak() {
    console.log(`${this.name} makes a sound.`)
  }
}
```

- Метод `constructor` вызывается при создании нового экземпляра через `new`.
- Методы, объявленные внутри класса (например, `speak`), автоматически добавляются в прототип класса, а не в сам экземпляр. Это экономит память и ускоряет работу с методами.

**Наследование классов:**

```javascript
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`)
  }
}

const dog = new Dog('Rex')
dog.speak() // "Rex barks."
```

- Ключевое слово `extends` позволяет создавать дочерние классы, наследующие свойства и методы родительского класса.
- Переопределение методов (overriding) позволяет изменять или расширять поведение родительских методов.

### Differences Between Class Declarations and Constructor Functions

Хотя классы и функции-конструкторы в JavaScript реализуют похожую логику (создание объектов и наследование), между ними есть важные различия:

| Особенность        | Функция-конструктор             | Класс (ES6+)                            |
| ------------------ | ------------------------------- | --------------------------------------- |
| Синтаксис          | function Person() {...}         | class Person {...}                      |
| Вызов без `new`    | Можно (но не рекомендуется)     | Ошибка (TypeError)                      |
| Строгий режим      | Не обязательно                  | Всегда strict mode                      |
| Hoisting           | Поднимается (function)          | Не поднимается                          |
| Методы             | На прототипе или в конструкторе | Только на прототипе (кроме статических) |
| Наследование       | Через `Object.create` и `call`  | Через `extends` и `super()`             |
| Статические методы | Через Person.method = ...       | Через `static`                          |

**Пример сравнения:**

```javascript
// Функция-конструктор
function PersonFunc(name) {
  this.name = name
}
PersonFunc.prototype.sayHello = function () {
  console.log(`Hello, I'm ${this.name}`)
}

// Класс
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

**Ключевые отличия:**

- Классы нельзя вызвать без `new` — это приведет к ошибке.
- Классы всегда работают в строгом режиме.
- Методы класса не перечисляются при переборе свойств объекта (не `enumerable`).
- Классы не поднимаются (hoisting) — их нельзя использовать до объявления.

### Usage of super()

Ключевое слово `super` используется в классах-наследниках для обращения к родительскому классу:

- В конструкторе: для вызова конструктора родителя и инициализации унаследованных свойств.
- В методах: для вызова методов родительского класса, которые были переопределены.

**Пример:**

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
    super('car') // Вызов конструктора Vehicle
    this.make = make
    this.model = model
  }
  describe() {
    // Вызов метода describe() из Vehicle и расширение его результата
    return `${super.describe()} It's a ${this.make} ${this.model}.`
  }
}

const myCar = new Car('Toyota', 'Corolla')
console.log(myCar.describe())
// "This is a car. It's a Toyota Corolla."
```

**Важные детали:**

- В конструкторе класса-наследника вызов `super()` обязателен перед использованием `this`.
- Через `super.methodName()` можно обращаться к методам родителя даже после их переопределения.

#### Дополнительные возможности классов

- **Статические методы и свойства:**  
  Используйте ключевое слово `static` для методов и свойств, которые принадлежат самому классу, а не экземплярам.

  ```javascript
  class MathUtils {
    static add(a, b) {
      return a + b
    }
  }
  console.log(MathUtils.add(2, 3)) // 5
  ```

- **Геттеры и сеттеры:**  
  Позволяют управлять доступом к свойствам экземпляра.

  ```javascript
  class Rectangle {
    constructor(width, height) {
      this.width = width
      this.height = height
    }
    get area() {
      return this.width * this.height
    }
  }
  const rect = new Rectangle(5, 10)
  console.log(rect.area) // 50
  ```

- **Приватные поля и методы (ES2022+):**  
  Используйте `#` для объявления приватных членов, недоступных извне.
  ```javascript
  class SecretBox {
    #secret = 42
    getSecret() {
      return this.#secret
    }
  }
  const box = new SecretBox()
  // console.log(box.#secret); // SyntaxError
  console.log(box.getSecret()) // 42
  ```

**Summary:**  
Классы в JavaScript делают код более структурированным, модульным и удобным для поддержки. Используйте классы для создания сложных иерархий объектов, наследования, инкапсуляции и организации бизнес-логики, а также для реализации паттернов ООП.

## Prototypal Inheritance

Прототипное наследование — это фундаментальная концепция JavaScript, отличающая его от классических ООП-языков. В JavaScript объекты могут наследовать свойства и методы друг у друга напрямую через цепочку прототипов.

### Properties like `__proto__` and `prototype`

#### `__proto__`

- `__proto__` — это внутреннее (и устаревшее, но до сих пор поддерживаемое) свойство любого объекта, которое указывает на его прототип.
- Через `__proto__` можно получить доступ к свойствам и методам, определённым в прототипе объекта.
- Обычно не рекомендуется напрямую изменять или использовать `__proto__` в современном коде — вместо этого используйте стандартные методы (`Object.getPrototypeOf`, `Object.setPrototypeOf`).

**Пример:**

```javascript
function Animal(name) {
  this.name = name
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`)
}

const cat = new Animal('Whiskers')

console.log(cat.__proto__ === Animal.prototype) // true
console.log(Object.getPrototypeOf(cat) === Animal.prototype) // true

cat.speak() // "Whiskers makes a sound."
```

- Здесь у объекта `cat` в качестве прототипа выступает `Animal.prototype`.
- Если свойство или метод не найден у самого объекта, поиск продолжается по цепочке прототипов.

#### `prototype`

- `prototype` — это специальное свойство функции-конструктора (или класса), которое указывает на объект, используемый в качестве прототипа для всех экземпляров, созданных с помощью этой функции.
- Все методы и свойства, добавленные в `Function.prototype`, становятся доступными для всех экземпляров, созданных через `new`.

**Пример:**

```javascript
function Person(name) {
  this.name = name
}
Person.prototype.sayHello = function () {
  console.log(`Hello, I'm ${this.name}`)
}

const alice = new Person('Alice')
alice.sayHello() // "Hello, I'm Alice"
```

- Метод `sayHello` не хранится в каждом экземпляре, а наследуется через прототип.

#### Важные детали

- Прототипная цепочка (prototype chain) — это последовательность объектов, по которой JavaScript ищет свойства и методы при обращении к ним.
- Если свойство не найдено у объекта, поиск продолжается в его прототипе, затем в прототипе прототипа и так далее, вплоть до `Object.prototype`.
- `Object.prototype` — это корень всех объектов, его прототип равен `null`.

### Using `Object.create` to Define Prototypes Explicitly

Метод `Object.create(proto, [propertiesObject])` позволяет создавать новый объект с явно заданным прототипом. Это более гибкий и современный способ организации наследования, чем использование функций-конструкторов.

**Преимущества `Object.create`:**

- Позволяет создавать объекты без необходимости объявлять конструкторы.
- Можно создавать цепочки наследования любой глубины.
- Удобно для паттернов "делегирования" и "композиции".

**Пример:**

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
  // Второй аргумент — дескрипторы свойств (по умолчанию: не изменяемые)
  return Object.create(animalMethods, {
    name: {value: name, writable: true, enumerable: true, configurable: true},
  })
}

const dog = createAnimal('Buddy')
dog.eat() // "Buddy is eating."
dog.sleep() // "Buddy is sleeping."
console.log(dog.name) // "Buddy"
console.log(Object.getPrototypeOf(dog) === animalMethods) // true
```

**Особенности:**

- Все объекты, созданные через `createAnimal`, делегируют методы `eat` и `sleep` объекту `animalMethods`.
- Можно создавать сложные цепочки прототипов, комбинируя разные объекты.

**Практические советы:**

- Используйте `Object.create` для создания "чистых" объектов без лишних свойств (например, `Object.create(null)` для создания словарей без прототипа).
- Такой подход удобен для паттернов "объект без класса" (object without class), когда не требуется полноценная иерархия классов.

#### Визуализация прототипной цепочки

```javascript
const grandparent = {
  greet() {
    console.log('Hello from grandparent')
  },
}
const parent = Object.create(grandparent)
parent.sayHi = function () {
  console.log('Hi from parent')
}
const child = Object.create(parent)
child.name = 'Child'

child.greet() // "Hello from grandparent"
child.sayHi() // "Hi from parent"
console.log(child.name) // "Child"
```

- Здесь `child` наследует свойства и методы сначала от `parent`, затем от `grandparent`.

**Summary:**  
Прототипное наследование — мощный инструмент для организации повторного использования кода и построения иерархий объектов в JavaScript. Понимание различий между `__proto__` и `prototype`, а также умение использовать `Object.create`, позволяет создавать гибкие и эффективные архитектуры без избыточной сложности классов.

## ECMAScript Advanced Data Types & Expressions

### Set, Map, WeakSet и WeakMap

Современный JavaScript предоставляет четыре мощные коллекции для работы с уникальными значениями и ассоциативными данными: `Set`, `Map`, `WeakSet` и `WeakMap`. Они дополняют стандартные объекты и массивы, предоставляя новые возможности для хранения, поиска и управления данными.

#### Set

**Set** — это коллекция уникальных значений любого типа (примитивы или объекты).

- Не допускает дубликатов: если добавить одно и то же значение несколько раз, оно будет храниться только один раз.
- Порядок элементов соответствует порядку их добавления.
- Можно быстро проверять наличие значения, добавлять и удалять элементы.

**Основные методы и свойства:**

- `add(value)` — добавляет значение.
- `has(value)` — проверяет наличие значения.
- `delete(value)` — удаляет значение.
- `clear()` — удаляет все значения.
- `size` — количество элементов.

**Samples:**

```javascript
const mySet = new Set([1, 2, 3, 4, 4])
console.log(mySet.size) // 4 (дубликаты автоматически удаляются)

mySet.add(5)
console.log(mySet.has(3)) // true
mySet.delete(2)
console.log([...mySet]) // [1, 3, 4, 5]

// Итерация по Set
for (const value of mySet) {
  console.log(value)
}
```

**Практические применения:**

- Удаление дубликатов из массива: `const unique = [...new Set(array)]`
- Хранение уникальных идентификаторов, ссылок на объекты и т.д.

#### Map

**Map** — это коллекция пар ключ-значение, где ключи могут быть любого типа (в отличие от обычных объектов, где ключи — только строки или символы).

- Сохраняет порядок добавления элементов.
- Позволяет использовать объекты, функции и любые примитивы в качестве ключей.

**Основные методы и свойства:**

- `set(key, value)` — добавляет или обновляет пару ключ-значение.
- `get(key)` — возвращает значение по ключу.
- `has(key)` — проверяет наличие ключа.
- `delete(key)` — удаляет пару по ключу.
- `clear()` — удаляет все пары.
- `size` — количество пар.

**Samples:**

```javascript
const myMap = new Map()
myMap.set('key1', 'value1')
myMap.set(42, 'answer')
const objKey = {id: 1}
myMap.set(objKey, 'object value')

console.log(myMap.get('key1')) // "value1"
console.log(myMap.get(42)) // "answer"
console.log(myMap.get(objKey)) // "object value"

// Итерация по Map
for (const [key, value] of myMap) {
  console.log(key, value)
}
```

**Практические применения:**

- Ассоциативные массивы с ключами любого типа.
- Кэширование данных по объектам.
- Счётчики, индексы, быстрый поиск по сложным ключам.

#### WeakSet

**WeakSet** — это коллекция уникальных объектов (только объектов!), которые хранятся "слабо" — если на объект нет других ссылок, он может быть удалён сборщиком мусора.

- Не допускает дубликатов.
- Не поддерживает примитивы (только объекты).
- Нет свойства `size`, нельзя итерировать по элементам.
- Используется для хранения временных меток, приватных данных, отслеживания состояния объектов.

**Основные методы:**

- `add(value)` — добавляет объект.
- `has(value)` — проверяет наличие объекта.
- `delete(value)` — удаляет объект.

**Пример:**

```javascript
let obj = {data: 'some data'}
const weakSet = new WeakSet([obj])
console.log(weakSet.has(obj)) // true

obj = null // Теперь объект может быть удалён сборщиком мусора
// weakSet автоматически "забудет" этот объект
```

**Практические применения:**

- Отслеживание состояния объектов без риска утечки памяти.
- Реализация приватных свойств в классах (например, через WeakSet для хранения "закрытых" экземпляров).

#### WeakMap

**WeakMap** — это коллекция пар ключ-значение, где ключами могут быть только объекты, а значения — любые типы.

- Ключи хранятся "слабо": если на объект-ключ нет других ссылок, пара автоматически удаляется.
- Нет свойства `size`, нельзя итерировать по элементам.
- Используется для хранения приватных данных, связанных с объектами, без риска утечки памяти.

**Основные методы:**

- `set(key, value)` — добавляет или обновляет пару.
- `get(key)` — возвращает значение по ключу.
- `has(key)` — проверяет наличие ключа.
- `delete(key)` — удаляет пару по ключу.

**Samples:**

```javascript
let key = {id: 1}
const weakMap = new WeakMap()
weakMap.set(key, 'value')
console.log(weakMap.get(key)) // "value"

key = null // Теперь пара может быть удалена сборщиком мусора
```

**Практические применения:**

- Приватные свойства и методы для объектов (например, в реализации классов и библиотек).
- Кэширование данных, связанных с объектами, без риска утечки памяти.

#### Сравнение и рекомендации

| Коллекция | Ключи          | Значения | Итерация | Автоматическое удаление |
| --------- | -------------- | -------- | -------- | ----------------------- |
| Set       | любые          | значения | да       | нет                     |
| Map       | любые          | любые    | да       | нет                     |
| WeakSet   | только объекты | объекты  | нет      | да                      |
| WeakMap   | только объекты | любые    | нет      | да                      |

- Используйте **Set** и **Map** для обычных коллекций, когда важна итерация и полный контроль над содержимым.
- Используйте **WeakSet** и **WeakMap** для хранения временных или приватных данных, связанных с объектами, чтобы избежать утечек памяти.

**Summary:**  
Set, Map, WeakSet и WeakMap — это современные коллекции, которые делают работу с уникальными значениями, ассоциативными данными и приватными объектами в JavaScript более удобной, эффективной и безопасной. Выбор подходящей коллекции зависит от ваших задач и требований к управлению памятью.

## JavaScript Errors

### Error Handling Techniques Including try...catch

В JavaScript ошибки (exceptions) — это особые объекты, которые возникают при возникновении непредвиденных ситуаций во время выполнения программы (например, деление на ноль, обращение к несуществующему свойству, синтаксические ошибки и т.д.). Грамотная обработка ошибок позволяет сделать код более надёжным, предсказуемым и удобным для пользователя.

#### Конструкция try...catch...finally

- **try** — блок, в котором выполняется "опасный" код, потенциально способный вызвать ошибку.
- **catch** — блок, который перехватывает ошибку, если она возникла в try, и позволяет обработать её (например, вывести сообщение, записать в лог, выполнить альтернативные действия).
- **finally** — необязательный блок, который выполняется всегда, независимо от того, была ошибка или нет (например, для освобождения ресурсов, закрытия соединений).

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

**Пояснения:**

- Если в блоке try возникает ошибка (например, деление на ноль), выполнение немедленно переходит в блок catch.
- В блоке catch объект ошибки (`error`) содержит полезную информацию: имя ошибки (`error.name`), сообщение (`error.message`), стек вызовов (`error.stack`).
- Блок finally выполнится всегда — даже если ошибка не возникла или была перехвачена.

**Практические советы:**

- Используйте `try...catch` для обработки ошибок, которые действительно могут возникнуть и которые вы можете обработать (например, сетевые запросы, парсинг JSON, работа с внешними API).
- Не злоупотребляйте `try...catch` для контроля обычного потока выполнения — это снижает производительность и ухудшает читаемость кода.

### Understanding and Implementing Custom Errors

**Пользовательские ошибки** (custom errors) — это собственные классы ошибок, которые наследуются от стандартного класса `Error`. Они позволяют создавать специфичные для вашего приложения типы ошибок, что облегчает их обработку и отладку.

#### Зачем нужны пользовательские ошибки?

- Для более точной идентификации и обработки различных типов ошибок (например, валидация, авторизация, бизнес-логика).
- Для передачи дополнительной информации об ошибке.
- Для организации единого подхода к обработке ошибок в больших приложениях.

#### Как создать пользовательскую ошибку?

1. Создайте класс, наследующий от `Error`.
2. В конструкторе вызывайте `super(message)` для передачи сообщения.
3. Установите имя ошибки (`this.name`), чтобы отличать её от других ошибок.

**Samples:**

```javascript
class ValidationError extends Error {
  constructor(message) {
    super(message) // Вызов конструктора Error
    this.name = 'ValidationError' // Имя ошибки
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

**Пояснения:**

- В функции `validateUser` выбрасываются ошибки типа `ValidationError` при нарушении условий.
- В блоке catch можно различать типы ошибок с помощью `instanceof` и обрабатывать их по-разному.

#### Дополнительные возможности

- Можно создавать иерархии пользовательских ошибок для разных типов проблем (например, `NetworkError`, `DatabaseError`, `AuthError`).
- В пользовательские ошибки можно добавлять дополнительные поля (например, код ошибки, данные для отладки).

**Пример с дополнительными полями:**

```javascript
class ApiError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.name = 'ApiError'
    this.statusCode = statusCode
  }
}

try {
  throw new ApiError('Not Found', 404)
} catch (error) {
  if (error instanceof ApiError) {
    console.log(error.statusCode) // 404
  }
}
```

**Summary:**  
Обработка ошибок — важная часть любого надёжного приложения. Используйте `try...catch` для перехвата и обработки исключений, а пользовательские ошибки — для создания понятных и структурированных сообщений об ошибках, которые легко отлавливать и анализировать. Такой подход делает ваш код более устойчивым, предсказуемым и удобным для поддержки.

## ECMAScript Advanced

### Promises, async/await, and the Event Loop

#### Promises

**Промисы** — это объекты, которые представляют результат асинхронной операции, которая может завершиться успешно (resolved) или с ошибкой (rejected). Промисы позволяют писать асинхронный код, избегая "callback hell" и делая обработку ошибок более удобной.

**Основные состояния промиса:**

- `pending` — ожидание (операция ещё не завершена)
- `fulfilled` — успешно завершено (результат доступен)
- `rejected` — завершено с ошибкой

**Создание и использование промиса:**

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true
      if (success) {
        resolve('Data loaded')
      } else {
        reject(new Error('Failed to load data'))
      }
    }, 1000)
  })
}

fetchData()
  .then((result) => {
    console.log(result) // "Data loaded"
  })
  .catch((error) => {
    console.error(error.message)
  })
```

- Метод `.then()` используется для обработки успешного результата.
- Метод `.catch()` — для обработки ошибок.
- Метод `.finally()` — для кода, который должен выполниться в любом случае.

**Цепочки промисов:**

```javascript
fetchData()
  .then((data) => {
    console.log(data)
    return fetchData() // Можно возвращать новый промис
  })
  .then((moreData) => {
    console.log('More:', moreData)
  })
  .catch((error) => {
    console.error('Error:', error)
  })
```

#### async/await

**async/await** — это синтаксический сахар над промисами, который позволяет писать асинхронный код в стиле синхронного, делая его более читаемым и удобным для отладки.

- Ключевое слово `async` перед функцией автоматически возвращает промис.
- Ключевое слово `await` "приостанавливает" выполнение функции до завершения промиса.

**Samples:**

```javascript
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function example() {
  try {
    console.log('Start')
    await delay(2000)
    console.log('After 2 seconds')
    await delay(1000)
    console.log('After 3 seconds')
  } catch (error) {
    console.error('Error:', error)
  }
}

example()
console.log('This runs immediately')
```

**Пояснения:**

- `await` можно использовать только внутри функций, объявленных с `async`.
- Если промис завершится с ошибкой, она будет выброшена как исключение, и её можно обработать через `try...catch`.
- Код после `await` не блокирует основной поток — другие операции продолжают выполняться.

#### Event Loop

**Event Loop** (цикл событий) — это механизм, который позволяет JavaScript выполнять неблокирующие асинхронные операции, несмотря на то, что язык однопоточный.

**Как это работает:**

- Весь код выполняется в одном потоке (main thread).
- Асинхронные операции (таймеры, сетевые запросы, обработчики событий) помещаются в очередь (callback queue).
- Event loop следит за стеком вызовов (call stack) и, когда он пуст, берёт задачи из очереди и выполняет их.
- Это позволяет JavaScript быть "неблокирующим" и отзывчивым, даже при выполнении долгих операций.

**Samples:**

```javascript
console.log('Start')

setTimeout(() => {
  console.log('Timeout callback')
}, 0)

console.log('End')

// Вывод:
// Start
// End
// Timeout callback
```

- Даже с задержкой 0 миллисекунд, callback из setTimeout будет выполнен после основного кода, потому что он попадает в очередь событий.

### Garbage Collection Basics

**Сборка мусора** (garbage collection, GC) — это автоматический процесс в JavaScript, который освобождает память, занятую объектами, на которые больше нет ссылок в программе.

#### Как работает сборка мусора

- Когда вы создаёте объекты, массивы, функции и т.д., для них выделяется память.
- Если на объект больше не ссылается ни одна переменная или другая структура, он становится "недостижимым".
- Сборщик мусора периодически сканирует память и удаляет все недостижимые объекты, освобождая ресурсы.

**Samples:**

```javascript
function createLargeObject() {
  return new Array(1000000).fill('some data')
}

let obj = createLargeObject() // Объект занимает много памяти
console.log(obj.length) // 1000000

obj = null // Теперь объект становится недостижимым

// В какой-то момент сборщик мусора освободит память, занятую этим объектом
```

#### Важные детали

- Вы не можете напрямую управлять сборкой мусора — это делает движок JavaScript (например, V8 в Chrome/Node.js).
- Старайтесь не создавать "висячих" ссылок (например, глобальных переменных, замыканий, которые держат ссылки на большие объекты).
- Используйте WeakMap и WeakSet для хранения временных или приватных данных, чтобы избежать утечек памяти.

#### Типичные причины утечек памяти

- Глобальные переменные, которые не очищаются.
- Замыкания, которые "запоминают" ненужные объекты.
- Неочищенные таймеры, обработчики событий.
- Ссылки в коллекциях (Map, Set), которые не удаляются.

**Summary:**  
Понимание работы промисов, async/await и event loop позволяет писать эффективный, неблокирующий и читаемый асинхронный код. Знание принципов сборки мусора помогает избегать утечек памяти и делать приложения более производительными и надёжными.

## JavaScript in Browser

### Understanding Browser's Location and History API

#### Location API

**`window.location`** — это объект, который предоставляет информацию о текущем URL страницы и методы для управления навигацией браузера.

**Основные свойства:**

- `window.location.href` — полный URL текущей страницы.
- `window.location.protocol` — протокол (`http:`, `https:`).
- `window.location.host` — домен и порт (`example.com:8080`).
- `window.location.hostname` — только домен (`example.com`).
- `window.location.port` — порт (`8080`).
- `window.location.pathname` — путь (`/about`).
- `window.location.search` — строка запроса (`?id=123`).
- `window.location.hash` — якорь (`#section1`).

**Основные методы:**

- `window.location.assign(url)` — переход на указанный URL (добавляет запись в историю).
- `window.location.replace(url)` — переход на указанный URL (заменяет текущую запись в истории).
- `window.location.reload()` — перезагружает текущую страницу.

**Samples:**

```javascript
console.log(window.location.href) // Текущий полный URL
window.location.href = 'https://example.com' // Перенаправление на другой сайт

// Получение разных частей URL
console.log(window.location.pathname) // Например, "/about"
console.log(window.location.search) // Например, "?id=123"
console.log(window.location.hash) // Например, "#top"
```

**Практические применения:**

- Перенаправление пользователя после авторизации или выхода.
- Получение параметров из строки запроса для динамических страниц.
- Реализация SPA (Single Page Application) с помощью hash или search.

#### History API

**`window.history`** — это объект, который позволяет управлять историей переходов пользователя в браузере без перезагрузки страницы. Это основа для современных одностраничных приложений (SPA).

**Основные методы:**

- `history.back()` — переход к предыдущей странице (аналог кнопки "Назад").
- `history.forward()` — переход к следующей странице (аналог кнопки "Вперёд").
- `history.go(n)` — переход на n страниц вперёд или назад в истории.
- `history.pushState(state, title, url)` — добавляет новую запись в историю без перезагрузки страницы.
- `history.replaceState(state, title, url)` — заменяет текущую запись в истории.

**Samples:**

```javascript
// Добавление новой записи в историю (без перезагрузки)
history.pushState({page: 1}, 'Title 1', '?page=1')

// Переход назад
history.back()

// Переход вперёд
history.forward()
```

**Практические применения:**

- Реализация навигации в SPA (React Router, Vue Router и др.).
- Сохранение состояния приложения при переходах.
- Создание "глубоких ссылок" (deep linking) без перезагрузки страницы.

**Важные детали:**

- При использовании pushState/replaceState рекомендуется слушать событие `popstate` для обработки переходов назад/вперёд.
- Не злоупотребляйте автоматическими переходами — это может сбивать пользователя с толку.

### User Agent Parsing and Platform/Browser Detection

#### User Agent

**User Agent** — это строка, которую браузер отправляет серверу при каждом запросе. Она содержит информацию о браузере, его версии, операционной системе и устройстве пользователя.

**Пример строки user agent:**

```
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36
```

#### Зачем парсить user agent?

- Для определения типа браузера и его версии (например, для показа предупреждений о старых браузерах).
- Для адаптации интерфейса под особенности платформы (мобильные/десктопные устройства).
- Для сбора статистики о пользователях.

**Пример функции для определения браузера:**

```javascript
function getBrowserInfo() {
  const ua = navigator.userAgent
  let browserName = 'Unknown'
  let browserVersion = ''

  if (/Firefox\/(\d+)/.test(ua)) {
    browserName = 'Firefox'
    browserVersion = ua.match(/Firefox\/(\d+)/)[1]
  } else if (/Chrome\/(\d+)/.test(ua)) {
    browserName = 'Chrome'
    browserVersion = ua.match(/Chrome\/(\d+)/)[1]
  } else if (/Safari\/(\d+)/.test(ua) && /Version\/(\d+)/.test(ua)) {
    browserName = 'Safari'
    browserVersion = ua.match(/Version\/(\d+)/)[1]
  } else if (/Edge\/(\d+)/.test(ua)) {
    browserName = 'Edge'
    browserVersion = ua.match(/Edge\/(\d+)/)[1]
  }

  return `${browserName} ${browserVersion}`
}

console.log(getBrowserInfo())
```

**Практические советы:**

- Не полагайтесь на user agent для критически важных решений (например, безопасности) — строки user agent легко подделать.
- Для определения возможностей браузера используйте feature detection (например, через `if ('geolocation' in navigator)`), а не только user agent.
- Для сложного парсинга используйте готовые библиотеки, например, [UAParser.js](https://github.com/faisalman/ua-parser-js).

**Определение платформы и устройства:**

```javascript
function isMobile() {
  return /Mobi|Android/i.test(navigator.userAgent)
}
console.log(isMobile() ? 'Mobile device' : 'Desktop')
```

**Summary:**  
Работа с location и history API позволяет создавать динамичные, отзывчивые и удобные веб-приложения без лишних перезагрузок страниц. Парсинг user agent и определение платформы помогают адаптировать интерфейс под разные устройства и браузеры, но всегда старайтесь использовать feature detection для максимальной надёжности.

## Page Lifecycle

### Parsing, Reflow, Repaint, and the Critical Rendering Path

Понимание жизненного цикла страницы и процессов, происходящих в браузере при рендеринге, важно для оптимизации производительности и создания отзывчивых интерфейсов.

#### Parsing

- **HTML-парсинг:**  
  Браузер читает HTML-код и строит дерево DOM (Document Object Model) — иерархическую структуру всех элементов страницы.
- **CSS-парсинг:**  
  Одновременно браузер парсит CSS и строит CSSOM (CSS Object Model) — структуру, описывающую стили для каждого элемента.

**Важный момент:**  
Парсинг HTML и CSS может происходить параллельно, но выполнение JavaScript может блокировать парсинг HTML, если скрипт не помечен как `async` или `defer`.

#### Reflow (Layout)

- **Reflow** (или layout) — это процесс, при котором браузер рассчитывает размеры, положение и геометрию всех элементов на странице.
- Reflow происходит при:
  - Добавлении, удалении или перемещении элементов в DOM.
  - Изменении размеров окна браузера.
  - Изменении стилей, влияющих на размеры или позиционирование (например, `width`, `height`, `font-size`, `display`, `position`).
- Reflow — дорогая операция по производительности, особенно если затрагивает большое количество элементов.

#### Repaint

- **Repaint** — это процесс, при котором браузер перерисовывает элементы, не изменяя их геометрию (например, изменение цвета, фона, тени).
- Repaint менее затратен, чем reflow, но всё равно может повлиять на производительность при частых изменениях.

#### Critical Rendering Path

- **Critical Rendering Path** — это последовательность шагов, которые браузер выполняет для отображения содержимого страницы пользователю как можно быстрее.
- Включает:
  1. Парсинг HTML → построение DOM.
  2. Парсинг CSS → построение CSSOM.
  3. Объединение DOM и CSSOM в Render Tree.
  4. Layout (reflow) — вычисление размеров и позиций.
  5. Painting (repaint) — отрисовка пикселей на экране.

**Оптимизация критического пути:**

- Минимизируйте количество и размер CSS и JS, блокирующих рендеринг.
- Используйте `defer` и `async` для скриптов.
- Старайтесь группировать изменения DOM, чтобы уменьшить количество reflow/repaint.

**Samples:**

```javascript
// Этот код вызовет reflow и repaint (добавление элемента)
const div = document.createElement('div')
div.style.color = 'red'
document.body.appendChild(div)

// Этот код вызовет только repaint (изменение цвета)
div.style.color = 'blue'

// Оптимизация: группировка изменений с помощью DocumentFragment
function batchDOMChanges() {
  const fragment = document.createDocumentFragment()
  for (let i = 0; i < 100; i++) {
    const p = document.createElement('p')
    p.textContent = `Paragraph ${i}`
    fragment.appendChild(p)
  }
  document.body.appendChild(fragment) // Один reflow вместо 100
}

document.addEventListener('DOMContentLoaded', batchDOMChanges)
```

**Практические советы:**

- Избегайте частых изменений DOM в цикле — используйте фрагменты или скрывайте элементы перед массовыми изменениями.
- Изменяйте стили через классы, а не напрямую через style, чтобы браузер мог оптимизировать reflow/repaint.
- Используйте инструменты разработчика (Performance, Timeline) для анализа производительности.

## Network Requests

### Using Fetch and Understanding XMLHttpRequest

Взаимодействие с сервером — неотъемлемая часть современных веб-приложений. В JavaScript для этого используются два основных API: **Fetch** (современный стандарт) и **XMLHttpRequest** (устаревший, но всё ещё поддерживаемый).

#### Fetch API

- Основан на промисах, что делает код асинхронным и более читаемым.
- Позволяет легко отправлять GET, POST и другие HTTP-запросы, работать с JSON, загружать файлы и т.д.
- Поддерживает цепочки then/catch/finally, а также синтаксис async/await.

**Samples:**

```javascript
fetch('https://api.example.com/data')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json() // Преобразование ответа в JSON
  })
  .then((data) => {
    console.log(data) // Работа с полученными данными
  })
  .catch((error) => {
    console.error('Error:', error)
  })
```

**Асинхронный вариант с async/await:**

```javascript
async function loadData() {
  try {
    const response = await fetch('https://api.example.com/data')
    if (!response.ok) throw new Error('Network error')
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.error('Fetch failed:', error)
  }
}
loadData()
```

**Преимущества Fetch:**

- Более современный и лаконичный синтаксис.
- Легко обрабатывать разные форматы данных (JSON, текст, Blob).
- Поддержка CORS, заголовков, авторизации и т.д.

#### XMLHttpRequest

- Старый, но до сих пор поддерживаемый API для отправки HTTP-запросов.
- Основан на колбэках, что делает код менее читаемым и более подверженным ошибкам (callback hell).
- Используется для поддержки старых браузеров или специфических задач.

**Samples:**

```javascript
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

**Ограничения XMLHttpRequest:**

- Нет поддержки промисов.
- Сложнее обрабатывать ошибки и отменять запросы.
- Менее удобен для работы с современными форматами данных.

**Summary:**  
Понимание жизненного цикла страницы и процессов рендеринга помогает оптимизировать производительность и отзывчивость интерфейса. Для сетевых запросов используйте Fetch API, чтобы писать современный, лаконичный и поддерживаемый код, а XMLHttpRequest — только для поддержки старых браузеров или специфических случаев.

## Timers

### Differences between setTimeout and requestAnimationFrame

В JavaScript для планирования выполнения кода во времени используются разные механизмы. Два самых популярных — это `setTimeout` и `requestAnimationFrame`. Они решают разные задачи и имеют свои особенности.

#### setTimeout

- Позволяет выполнить функцию через определённый промежуток времени (в миллисекундах).
- Не гарантирует точную задержку — фактическое время может быть больше из-за занятости потока или других факторов.
- Используется для отложенного выполнения кода, таймеров, повторяющихся задач (в паре с `setInterval`).

**Samples:**

```javascript
setTimeout(() => {
  console.log('This runs after 1 second')
}, 1000)
```

**Особенности:**

- Если вкладка браузера неактивна, таймеры могут срабатывать с задержкой.
- Для повторяющихся задач используйте `setInterval`, но для анимаций это не лучший выбор.

#### requestAnimationFrame

- Планирует выполнение функции **перед следующей перерисовкой браузера** (обычно 60 раз в секунду, если монитор 60 Гц).
- Используется для плавных анимаций, синхронизированных с частотой обновления экрана.
- Экономит ресурсы: если вкладка неактивна, анимация автоматически "замораживается".

**Samples:**

```javascript
function animate() {
  // Код анимации
  console.log('Animation frame')
  requestAnimationFrame(animate)
}
requestAnimationFrame(animate)
```

**Преимущества:**

- Гарантирует максимальную плавность анимации.
- Не перегружает процессор, когда страница не видна пользователю.
- Позволяет браузеру оптимизировать рендеринг.

#### Когда что использовать?

- **setTimeout/setInterval** — для таймеров, отложенных действий, не связанных с анимацией (например, автосохранение, напоминания).
- **requestAnimationFrame** — для анимаций, движения объектов, плавных визуальных эффектов.

## Design Patterns

### Familiarity with Creational, Structural, and Behavioral Design Patterns

**Паттерны проектирования** (design patterns) — это проверенные временем решения типовых задач, которые часто встречаются при проектировании архитектуры программного обеспечения. Они помогают писать более модульный, поддерживаемый и расширяемый код.

#### 1. Creational Patterns (Порождающие паттерны)

Отвечают за создание объектов, инкапсулируя логику их создания и позволяя изменять структуру создаваемых объектов без изменения клиентского кода.

- **Singleton** — гарантирует, что у класса есть только один экземпляр, и предоставляет к нему глобальную точку доступа.
- **Factory Method** — определяет интерфейс для создания объекта, но позволяет подклассам решать, какой класс инстанцировать.
- **Abstract Factory** — создает семейства связанных объектов без указания их конкретных классов.
- **Builder** — отделяет конструирование сложного объекта от его представления.
- **Prototype** — создает новые объекты путем клонирования существующих.

**Пример Singleton:**

```typescript
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
```

#### 2. Structural Patterns (Структурные паттерны)

Определяют способы построения сложных структур из простых объектов, обеспечивая гибкость и повторное использование кода.

- **Adapter** — позволяет объектам с несовместимыми интерфейсами работать вместе.
- **Decorator** — динамически добавляет объекту новые обязанности.
- **Facade** — предоставляет унифицированный интерфейс к набору интерфейсов в подсистеме.
- **Proxy** — предоставляет суррогат или заместитель другому объекту для контроля доступа к нему.
- **Composite** — позволяет сгруппировать объекты в древовидную структуру для представления иерархий "часть-целое".

**Пример Adapter:**

```typescript
interface EuropeanSocket {
  plugIn(): void
}
interface USASocket {
  insertPlug(): void
}

class USASocketAdapter implements EuropeanSocket {
  constructor(private usaSocket: USASocket) {}
  plugIn() {
    this.usaSocket.insertPlug()
  }
}
```

#### 3. Behavioral Patterns (Поведенческие паттерны)

Определяют способы взаимодействия между объектами, распределяя обязанности и обеспечивая гибкость в коммуникации.

- **Observer** — определяет зависимость "один ко многим" между объектами, чтобы при изменении состояния одного все зависимые были уведомлены.
- **Strategy** — определяет семейство алгоритмов, инкапсулирует каждый из них и делает их взаимозаменяемыми.
- **Command** — превращает запросы в объекты, позволяя параметризовать методы с разными запросами.
- **State** — позволяет объекту изменять свое поведение при изменении внутреннего состояния.
- **Iterator** — предоставляет способ последовательного доступа ко всем элементам коллекции без раскрытия её внутренней структуры.

**Пример Observer:**

```typescript
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

**Практические советы:**

- Не стоит внедрять паттерны ради паттернов — используйте их, когда это действительно упрощает архитектуру.
- Понимание паттернов помогает лучше читать чужой код, проектировать API и избегать типовых ошибок.
- Многие паттерны реализованы в популярных библиотеках и фреймворках (например, Observer в RxJS, Singleton в Redux Store, Facade в jQuery).

**Summary:**  
Понимание паттернов проектирования помогает строить масштабируемые, поддерживаемые и гибкие приложения, используя лучшие практики индустрии.

## SOLID Principles and Design Patterns in Project Contexts

**SOLID** — это набор из пяти фундаментальных принципов объектно-ориентированного проектирования, которые помогают создавать гибкие, расширяемые и поддерживаемые программные системы. Эти принципы применимы не только к классическому ООП, но и к современному JavaScript/TypeScript, особенно при проектировании архитектуры крупных приложений.

### Single Responsibility Principle (SRP)

**Суть:**  
У каждого класса (или модуля, функции) должна быть только одна причина для изменения, то есть он должен отвечать только за одну задачу.

**Преимущества:**

- Код становится проще для понимания и тестирования.
- Изменения в одной части системы не затрагивают другие.

**Samples:**

```typescript
// Класс User отвечает только за данные пользователя
class User {
  constructor(public name: string) {}
}

// Класс UserRepository отвечает только за сохранение пользователя
class UserRepository {
  saveUser(user: User) {
    // Логика сохранения пользователя (например, в базу данных)
  }
}
```

**Пояснение:**  
Если изменится способ хранения пользователей, нужно менять только UserRepository, а не User.

### Open/Closed Principle (OCP)

**Суть:**  
Классы должны быть открыты для расширения, но закрыты для модификации.  
Это значит, что поведение системы можно изменять, не изменяя существующий код, а добавляя новый.

**Преимущества:**

- Уменьшается риск внесения ошибок в рабочий код.
- Легче добавлять новые возможности.

**Samples:**

```typescript
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

// Функция, работающая с любыми фигурами
function printArea(shape: Shape) {
  console.log(shape.area())
}
```

**Пояснение:**  
Чтобы добавить новый тип фигуры (например, Triangle), не нужно менять существующий код — достаточно реализовать интерфейс Shape.

### Liskov Substitution Principle (LSP)

**Суть:**  
Объекты подкласса должны быть взаимозаменяемы с объектами суперкласса без нарушения корректности программы.

**Преимущества:**

- Гарантирует, что наследование не приведёт к неожиданному поведению.
- Позволяет использовать полиморфизм безопасно.

**Samples:**

```typescript
class Bird {
  fly() {
    // Реализация полёта
  }
}

class Duck extends Bird {}
class Sparrow extends Bird {}

// Если добавить Penguin extends Bird, который не умеет летать,
// это нарушит принцип LSP, потому что Penguin не может заменить Bird.
```

**Пояснение:**  
Если подкласс не может реализовать поведение базового класса (например, пингвин не летает), лучше пересмотреть иерархию.

### Interface Segregation Principle (ISP)

**Суть:**  
Лучше иметь несколько специализированных интерфейсов, чем один общий, заставляющий реализовывать ненужные методы.

**Преимущества:**

- Классы реализуют только те методы, которые им действительно нужны.
- Упрощает поддержку и расширение кода.

**Samples:**

```typescript
interface Printable {
  print(): void
}

interface Scannable {
  scan(): void
}

class Printer implements Printable {
  print() {
    /* ... */
  }
}

class Scanner implements Scannable {
  scan() {
    /* ... */
  }
}

class MultiFunctionDevice implements Printable, Scannable {
  print() {
    /* ... */
  }
  scan() {
    /* ... */
  }
}
```

**Пояснение:**  
Класс Printer не обязан реализовывать метод scan, если он не нужен.

### Dependency Inversion Principle (DIP)

**Суть:**  
Модули верхнего уровня не должны зависеть от модулей нижнего уровня. Оба типа модулей должны зависеть от абстракций (интерфейсов). Абстракции не должны зависеть от деталей, детали должны зависеть от абстракций.

**Преимущества:**

- Упрощает тестирование (можно подменять зависимости на моки).
- Позволяет легко менять реализации без изменения основного кода.

**Samples:**

```typescript
interface Logger {
  log(message: string): void
}

class ConsoleLogger implements Logger {
  log(message: string) {
    console.log(message)
  }
}

class UserService {
  constructor(private logger: Logger) {}
  createUser(name: string) {
    // ...создание пользователя
    this.logger.log(`User ${name} created`)
  }
}

const logger = new ConsoleLogger()
const service = new UserService(logger)
service.createUser('Alice')
```

**Пояснение:**  
UserService зависит от абстракции Logger, а не от конкретной реализации. Это позволяет легко заменить логгер на другой (например, FileLogger, RemoteLogger) без изменения UserService.

#### Применение SOLID и паттернов в реальных проектах

- **SOLID-принципы** помогают строить архитектуру, которая легко расширяется, тестируется и поддерживается.
- В больших проектах нарушение этих принципов приводит к "спагетти-коду", сложностям с изменениями и ошибкам.
- Многие паттерны проектирования (Factory, Adapter, Observer и др.) реализуют или поддерживают принципы SOLID.
- В современных JavaScript/TypeScript-проектах SOLID особенно актуален при проектировании сервисов, компонентов, слоёв бизнес-логики и инфраструктуры.

**Summary:**  
Применение SOLID-принципов и паттернов проектирования — залог успешной архитектуры, которая выдерживает рост требований, команд и функциональности. Даже в небольших проектах следование этим принципам делает код чище, понятнее и надёжнее.

## Software Development Methodologies:

### Agile, Scrum, Kanban, and Waterfall methodologies.

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

### Project estimation techniques.

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

## Testing:

### Understanding different types of testing (Integration, E2E, Performance).

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

### Test Pyramid.

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

### Test-driven development (TDD) and behavior-driven development (BDD).

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

## Web Communication Protocols

### Differences between HTTP and HTTPS

**HTTP (Hypertext Transfer Protocol)** — это основной протокол для передачи данных между клиентом (например, браузером) и сервером в интернете. Он работает на 80 порту и не обеспечивает шифрование данных. Это значит, что вся информация, передаваемая по HTTP, может быть перехвачена злоумышленниками, если используется незащищённое соединение (например, в общественной Wi-Fi сети).

**HTTPS (HTTP Secure)** — это расширение HTTP, использующее протокол SSL/TLS для шифрования данных. Он работает на 443 порту. Благодаря шифрованию, данные, передаваемые между клиентом и сервером, защищены от перехвата и подмены. HTTPS также подтверждает подлинность сервера с помощью сертификата безопасности, что предотвращает атаки типа "man-in-the-middle".

**Почему это важно?**
- HTTPS обязателен для всех современных сайтов, особенно если они работают с персональными данными, авторизацией или платежами.
- Поисковые системы (например, Google) ранжируют сайты с HTTPS выше.
- Браузеры могут блокировать или помечать как небезопасные сайты без HTTPS.

### Understanding HTTP Methods, Headers, Responses, and Status Codes

**HTTP-методы** определяют действие, которое клиент хочет выполнить на сервере:

- `GET` — получить данные (например, страницу или список пользователей).
- `POST` — отправить новые данные на сервер (например, создать пользователя).
- `PUT` — полностью заменить существующий ресурс.
- `PATCH` — частично обновить ресурс.
- `DELETE` — удалить ресурс.

**HTTP-заголовки** (headers) содержат дополнительную информацию о запросе или ответе. Примеры:
- `Content-Type`: указывает тип передаваемых данных (например, `application/json`).
- `Authorization`: используется для передачи токена авторизации.
- `Accept`: указывает, какие форматы данных клиент может принять.

**HTTP-ответы** состоят из кода статуса, заголовков и тела ответа. Примеры кодов статусов:
- `200 OK` — успешный запрос.
- `201 Created` — успешно создан новый ресурс.
- `400 Bad Request` — ошибка в запросе клиента.
- `401 Unauthorized` — требуется авторизация.
- `404 Not Found` — ресурс не найден.
- `500 Internal Server Error` — ошибка на сервере.

**Пример запроса и ответа:**

```http
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

**Пояснения:**
- В запросе используется метод `GET` для получения списка пользователей.
- Заголовок `Authorization` содержит токен для проверки прав пользователя.
- В ответе сервер возвращает статус `200 OK` и JSON-объект с пользователями.


### Concepts of RESTful APIs

**REST (Representational State Transfer)** — это архитектурный стиль для построения веб-сервисов, который основывается на использовании стандартных HTTP-методов и принципах работы с ресурсами.

**Ключевые принципы REST:**
- **Идентификация ресурсов:** Каждый ресурс (например, пользователь) имеет уникальный URL.
- **Использование стандартных HTTP-методов:** Для разных операций используются разные методы (`GET`, `POST`, `PUT`, `DELETE` и т.д.).
- **Без состояния (stateless):** Каждый запрос содержит всю необходимую информацию, сервер не хранит состояние между запросами.
- **Единообразие интерфейса:** Все ресурсы доступны по единым правилам.

**Примеры RESTful-эндпоинтов:**

```
GET    /users         # Получить список пользователей
POST   /users         # Создать нового пользователя
GET    /users/{id}    # Получить конкретного пользователя по id
PUT    /users/{id}    # Полностью обновить пользователя
PATCH  /users/{id}    # Частично обновить пользователя
DELETE /users/{id}    # Удалить пользователя
```

**Практический пример:**
- Чтобы получить информацию о пользователе с id=5, клиент отправляет запрос: `GET /users/5`
- Чтобы создать нового пользователя, отправляется `POST /users` с данными в теле запроса.
- Для удаления пользователя: `DELETE /users/5`

**Почему REST важен?**
- RESTful API легко интегрируются с разными клиентами (браузеры, мобильные приложения, сторонние сервисы).
- Они масштабируемы, расширяемы и хорошо документируются.
- REST — стандарт де-факто для современных веб-приложений.


**Summary:**  
Понимание различий между HTTP и HTTPS, знание HTTP-методов, заголовков, кодов статусов и принципов RESTful API — фундаментальные навыки для любого веб-разработчика. Это позволяет создавать безопасные, масштабируемые и удобные для интеграции веб-сервисы.

## Common Web-Security Knowledge

### Basic Security Concepts: CORS, XSS, and OWASP Top 10

#### CORS (Cross-Origin Resource Sharing)

**CORS** — это механизм безопасности браузера, который ограничивает доступ веб-страниц к ресурсам, находящимся на других доменах (origin). По умолчанию браузер блокирует такие запросы, чтобы предотвратить атаки типа CSRF и утечку данных.

- **Когда нужен CORS:**  
  Когда ваше фронтенд-приложение (например, на React/Vue/Angular) обращается к API, размещённому на другом домене.
- **Как работает:**  
  Сервер должен явно разрешить доступ, отправив специальные заголовки (например, `Access-Control-Allow-Origin`).
- **Пример настройки CORS в Express.js:**
  ```typescript
  import cors from 'cors'
  app.use(
    cors({
      origin: 'https://example.com', // Разрешённый домен
      methods: ['GET', 'POST'], // Разрешённые методы
      credentials: true, // Разрешить передачу cookies
    })
  )
  ```
- **Важные детали:**
  - CORS не защищает сервер — это механизм браузера.
  - Для сложных запросов (например, с custom headers) браузер выполняет "preflight" запрос (OPTIONS).

#### XSS (Cross-Site Scripting)

**XSS** — это тип атаки, при которой злоумышленник внедряет вредоносный JavaScript-код на веб-страницу, чтобы украсть данные пользователя, перехватить сессии или выполнить другие вредоносные действия.

- **Виды XSS:**

  - **Reflected XSS:** вредоносный код передаётся через URL или форму и сразу же отражается в ответе сервера.
  - **Stored XSS:** вредоносный код сохраняется на сервере (например, в базе данных) и отображается всем пользователям.
  - **DOM-based XSS:** уязвимость возникает из-за небезопасной обработки данных на стороне клиента (в JS-коде).

- **Пример уязвимости:**

  ```html
  <div id="output"></div>
  <script>
    // Опасно! Не фильтрует пользовательский ввод
    document.getElementById('output').innerHTML = location.search
  </script>
  ```

- **Защита от XSS:**

  - Экранируйте все пользовательские данные перед выводом в HTML.
  - Используйте безопасные методы работы с DOM (`textContent`, а не `innerHTML`).
  - Применяйте Content Security Policy (CSP).
  - Используйте специализированные библиотеки для санитации ввода.

- **Пример санитации:**
  ```typescript
  function sanitizeInput(input: string): string {
    return input.replace(/</g, '&lt;').replace(/>/g, '&gt;')
  }
  ```

#### OWASP Top 10

**OWASP Top 10** — это авторитетный список десяти самых критичных рисков безопасности веб-приложений, регулярно обновляемый организацией OWASP (Open Web Application Security Project).

**Актуальные категории (2021):**

1. Broken Access Control
2. Cryptographic Failures
3. Injection (SQL, NoSQL, Command, etc.)
4. Insecure Design
5. Security Misconfiguration
6. Vulnerable and Outdated Components
7. Identification and Authentication Failures
8. Software and Data Integrity Failures
9. Security Logging and Monitoring Failures
10. Server-Side Request Forgery (SSRF)

**Практические советы:**

- Ознакомьтесь с [OWASP Top 10](https://owasp.org/www-project-top-ten/) и регулярно проверяйте свой проект на эти уязвимости.
- Используйте автоматические сканеры и статический анализ кода.
- Внедряйте безопасные практики на всех этапах разработки.

### Authentication Mechanisms (JWT, OAuth)

#### JWT (JSON Web Token)

**JWT** — это компактный, URL-безопасный формат для передачи информации между сторонами в виде JSON-объекта, подписанного с помощью секрета или ключа.

- **Структура:**  
  Состоит из трёх частей: header, payload, signature (разделены точками).
- **Использование:**
  - Для аутентификации пользователей (token-based authentication).
  - Для передачи информации между сервисами (например, в микросервисах).
- **Преимущества:**
  - Самодостаточность (вся информация внутри токена).
  - Легко хранить в localStorage, sessionStorage или cookie.
  - Можно использовать для stateless аутентификации.

**Пример создания и проверки JWT:**

```typescript
import jwt from 'jsonwebtoken'

const token = jwt.sign({userId: 123}, 'secret_key', {expiresIn: '1h'})

try {
  const decoded = jwt.verify(token, 'secret_key')
  console.log(decoded.userId) // 123
} catch (error) {
  console.log('Invalid token')
}
```

**Важные детали:**

- Никогда не храните секретные ключи в клиентском коде.
- Не храните чувствительные данные (например, пароли) в payload — он не зашифрован, только подписан.
- Используйте HTTPS для передачи токенов.

#### OAuth

**OAuth** — это открытый протокол авторизации, который позволяет сторонним приложениям получать ограниченный доступ к ресурсам пользователя без передачи его пароля.

- **Типичный сценарий:**  
  Пользователь входит на сайт через Google, Facebook, GitHub и т.д., предоставляя приложению доступ к своим данным.
- **Основные роли:**

  - **Resource Owner** — пользователь, владеющий данными.
  - **Client** — приложение, запрашивающее доступ.
  - **Authorization Server** — сервер, выдающий токены доступа.
  - **Resource Server** — сервер, хранящий защищённые ресурсы.

- **Поток авторизации (Authorization Code Flow):**
  1. Пользователь авторизуется на сервере авторизации.
  2. Сервер возвращает приложению временный код.
  3. Приложение обменивает код на access token.
  4. С помощью access token приложение получает доступ к защищённым ресурсам.

**Преимущества OAuth:**

- Безопасность: пользователь не передаёт свой пароль стороннему приложению.
- Гибкость: можно ограничивать права доступа (scopes).
- Широкая поддержка: используется в большинстве крупных сервисов.

**Практические советы:**

- Используйте проверенные библиотеки для реализации OAuth (например, Passport.js для Node.js).
- Всегда проверяйте scopes и срок действия токенов.
- Не храните access token в localStorage — используйте httpOnly cookies для защиты от XSS.

**Summary:**  
Безопасность — это не только защита от хакеров, но и культура разработки. Понимание CORS, XSS, принципов OWASP Top 10, а также современных механизмов аутентификации (JWT, OAuth) — основа для создания надёжных и защищённых веб-приложений.
