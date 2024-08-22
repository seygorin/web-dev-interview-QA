---
title: JavaScript Core
---

## Modules in JavaScript

Модули в JavaScript - это независимые блоки кода, которые инкапсулируют связанную функциональность, переменные и классы. Они позволяют организовать код в отдельные, повторно используемые единицы, улучшая структуру и поддерживаемость приложения.

**Samples:**

```javascript
// math.js
export const add = (a, b) => a + b
export const subtract = (a, b) => a - b

// main.js
import {add, subtract} from './math.js'

console.log(add(5, 3)) // 8
console.log(subtract(10, 4)) // 6
```

## Purpose and concept of a module/module pattern.

Модульный паттерн в JavaScript - это способ организации кода, который позволяет инкапсулировать функциональность и данные, предоставляя публичный API и скрывая внутренние детали реализации.

**Samples:**

```javascript
const Calculator = (function () {
  let result = 0

  return {
    add: function (x) {
      result += x
      return this
    },
    subtract: function (x) {
      result -= x
      return this
    },
    getResult: function () {
      return result
    },
  }
})()

Calculator.add(5).subtract(2)
console.log(Calculator.getResult()) // 3
```

## Types of modules (AMD, ES6, CommonJS, UMD).

Существует несколько типов модульных систем в JavaScript, каждая со своим синтаксисом и особенностями:

- AMD (Asynchronous Module Definition): для асинхронной загрузки модулей в браузере.
- ES6 Modules: нативная система модулей в современном JavaScript.
- CommonJS: используется в Node.js.
- UMD (Universal Module Definition): универсальный формат, работающий в разных средах.

**Samples (ES6 Modules):**

```javascript
// logger.js
export function log(message) {
  console.log(`[LOG]: ${message}`)
}

// app.js
import {log} from './logger.js'

log('Hello, modules!')
```

## Syntax and common features (export default, named exports, exports as).

ES6 модули предоставляют различные способы экспорта и импорта функциональности:

- `export default`: экспорт одного основного значения из модуля.
- Named exports: экспорт нескольких значений по имени.
- `export as`: экспорт значения под другим именем.

**Samples:**

```javascript
// utils.js
export const sum = (a, b) => a + b
export const multiply = (a, b) => a * b
const divide = (a, b) => a / b
export {divide as division}
export default function (x) {
  return x * x
}

// main.js
import square, {sum, multiply, division as div} from './utils.js'

console.log(sum(2, 3)) // 5
console.log(multiply(2, 3)) // 6
console.log(div(6, 2)) // 3
console.log(square(4)) // 16
```

## Dynamic imports.

Динамический импорт - это возможность загружать модули асинхронно во время выполнения программы, а не статически во время компиляции. Это позволяет оптимизировать загрузку ресурсов и реализовать ленивую загрузку компонентов.

**Samples:**

```javascript
const loadModule = async (moduleName) => {
  try {
    const module = await import(`./${moduleName}.js`)
    return module
  } catch (error) {
    console.error(`Failed to load module: ${moduleName}`, error)
  }
}

loadModule('mathUtils')
  .then((module) => {
    console.log(module.add(5, 3)) // 8
  })
  .catch((error) => {
    console.error('Error loading module:', error)
  })
```

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
