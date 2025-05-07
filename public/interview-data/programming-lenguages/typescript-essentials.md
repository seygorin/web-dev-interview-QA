---
title: TypeScript Essentials
---

## Writing Efficient TypeScript Using Basic Types, Enums, Interfaces, and Generics

### Basic Types

TypeScript расширяет JavaScript, добавляя статическую типизацию, что позволяет выявлять ошибки на этапе компиляции и делать код более предсказуемым и поддерживаемым. Основные типы в TypeScript включают:

- `number` — для всех числовых значений (целые, дробные, отрицательные, положительные).
- `string` — для строковых данных.
- `boolean` — для логических значений (`true` или `false`).
- `array` — для массивов, можно указывать тип элементов.
- `tuple` — для массивов фиксированной длины с элементами разных типов.
- `any` — отключает проверку типов (использовать с осторожностью).
- `void` — для функций, которые ничего не возвращают.
- `null` и `undefined` — отдельные типы для отсутствия значения.
- `never` — для функций, которые никогда не завершаются (например, выбрасывают ошибку).

**Samples:**

```typescript
let isActive: boolean = true
let age: number = 30
let userName: string = 'Alice'
let scores: number[] = [10, 20, 30]
let user: [string, number] = ['Bob', 42]
let notSure: any = 4
notSure = 'maybe a string instead'
notSure = false

function logMessage(message: string): void {
  console.log(message)
}
```

### Enums

Перечисления (`enum`) позволяют создавать наборы именованных констант, что делает код более читаемым и защищённым от ошибок.

**Samples:**

```typescript
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let move: Direction = Direction.Left

// Можно явно задать значения
enum StatusCode {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
}

function getStatusMessage(code: StatusCode): string {
  switch (code) {
    case StatusCode.Success:
      return 'Success'
    case StatusCode.NotFound:
      return 'Not Found'
    case StatusCode.ServerError:
      return 'Server Error'
    default:
      return 'Unknown'
  }
}
```

### Type vs Interface: Differences and Use Cases

В TypeScript есть два основных способа описания структуры объектов: `type` и `interface`. Оба инструмента похожи, но имеют различия и свои области применения.

- `interface` — предназначен для описания структуры объектов и может быть расширен (extends) или реализован (implements) классами.
- `type` — более универсален, может описывать не только объекты, но и объединения (union), пересечения (intersection), алиасы примитивов и т.д.

**Samples:**

```typescript
// interface
interface Person {
  name: string
  age: number
}

// type
type Point = {
  x: number
  y: number
}

// Расширение интерфейса
interface Employee extends Person {
  employeeId: number
}

// Объединение типов
type Shape = Circle | Square

// Пересечение типов
type Admin = Person & { role: string }
```

**Когда использовать что?**
- `interface` — если вы описываете структуру объекта, который может быть расширен или реализован классом.
- `type` — если нужно создать алиас для примитива, объединения, пересечения или сложной структуры.

### Using Interfaces with Optional Properties, Read-Only Properties, Index Signatures

Интерфейсы позволяют делать свойства необязательными (`?`), только для чтения (`readonly`), а также описывать объекты с динамическими ключами (index signatures).

**Samples:**

```typescript
interface UserProfile {
  id: number
  name: string
  email?: string // необязательное свойство
  readonly createdAt: Date // только для чтения
  [key: string]: any // индексная сигнатура
}

let user: UserProfile = { id: 1, name: 'Alice', createdAt: new Date() }
user.email = 'alice@example.com'
// user.createdAt = new Date() // Ошибка: нельзя изменить readonly свойство
user['customField'] = 123
```

### Function Types

TypeScript позволяет явно указывать типы для функций, их параметров и возвращаемого значения. Это помогает избежать ошибок при передаче неправильных аргументов.

**Samples:**

```typescript
type MathOperation = (a: number, b: number) => number

const multiply: MathOperation = (a, b) => a * b
const divide: MathOperation = (a, b) => a / b

// Функция с необязательным и значением по умолчанию
function greet(name: string, greeting: string = 'Hello'): string {
  return `${greeting}, ${name}!`
}
```

### Utility Types (Optional)

TypeScript предоставляет ряд встроенных утилитных типов, которые упрощают работу с типами:

- `Partial<T>` — делает все свойства типа T необязательными.
- `Readonly<T>` — делает все свойства только для чтения.
- `Pick<T, K>` — выбирает только указанные свойства из типа.
- `Omit<T, K>` — исключает указанные свойства из типа.
- `Record<K, T>` — создает тип объекта с ключами K и значениями типа T.

**Samples:**

```typescript
interface Todo {
  title: string
  description: string
  completed: boolean
}

type PartialTodo = Partial<Todo>
type ReadonlyTodo = Readonly<Todo>
type TodoTitle = Pick<Todo, 'title'>
type TodoWithoutDescription = Omit<Todo, 'description'>
type TodoMap = Record<number, Todo>
```

### Type Guards (Optional)

Type guards (защитники типов) — это специальные функции или конструкции, которые позволяют уточнить тип значения во время выполнения.

**Samples:**

```typescript
function isNumber(value: unknown): value is number {
  return typeof value === 'number'
}

function printValue(value: string | number) {
  if (isNumber(value)) {
    console.log('Number:', value)
  } else {
    console.log('String:', value)
  }
}

// Использование операторов typeof и instanceof
function logId(id: string | number) {
  if (typeof id === 'string') {
    console.log('String ID:', id)
  } else {
    console.log('Numeric ID:', id)
  }
}
```

### Creating Custom Types

TypeScript позволяет создавать собственные типы для повышения читаемости и повторного использования кода.

**Samples:**

```typescript
type UUID = string

type ApiResponse<T> =
  | { success: true; data: T }
  | { success: false; error: string }

interface TreeNode<T> {
  value: T
  left?: TreeNode<T>
  right?: TreeNode<T>
}

// Использование пользовательских типов
const response: ApiResponse<number> = { success: true, data: 42 }
```

### Generic Types (Concept)

Обобщённые типы (generics) позволяют создавать компоненты, которые работают с разными типами данных, сохраняя при этом строгую типизацию.

**Samples:**

```typescript
function identity<T>(arg: T): T {
  return arg
}

let output1 = identity<string>('myString')
let output2 = identity<number>(123)

// Обобщённый интерфейс
interface Box<T> {
  value: T
}

const stringBox: Box<string> = { value: 'hello' }
const numberBox: Box<number> = { value: 100 }

// Обобщённый класс
class DataStore<T> {
  private data: T[] = []
  add(item: T) {
    this.data.push(item)
  }
  getAll(): T[] {
    return this.data
  }
}

const store = new DataStore<number>()
store.add(1)
store.add(2)
console.log(store.getAll()) // [1, 2]
```


## Understanding the Module System in ES6 and TypeScript

Модульная система позволяет разбивать код на независимые части (модули), которые можно импортировать и экспортировать. Это повышает читаемость, повторное использование и тестируемость кода.

**Основные концепции:**
- Каждый файл — отдельный модуль.
- Экспортировать можно функции, переменные, классы, интерфейсы и т.д.
- Импортировать можно как отдельные элементы, так и весь модуль целиком.

**Примеры:**

```typescript
// math.ts
export function add(x: number, y: number): number {
  return x + y
}

export const PI = 3.14159

// main.ts
import { add, PI } from './math'

console.log(add(2, 3)) // 5
console.log(PI)        // 3.14159

// Импорт всего модуля как объекта
import * as math from './math'
console.log(math.add(2, 3))

// Экспорт по умолчанию
export default function multiply(x: number, y: number): number {
  return x * y
}

// Импорт экспорта по умолчанию
import multiply from './math'
console.log(multiply(2, 3))
```

**Практические советы:**
- Используйте модули для разделения логики по функциональным областям (например, utils, api, models).
- Следите за тем, чтобы не было циклических зависимостей между модулями.
- Используйте именованные экспорты для большей гибкости и автодополнения в редакторах кода.


**Summary:**  
TypeScript делает код более надёжным, понятным и масштабируемым за счёт строгой типизации, поддержки интерфейсов, обобщённых типов и модульной структуры. Используйте эти возможности для написания современного, безопасного и поддерживаемого кода.
