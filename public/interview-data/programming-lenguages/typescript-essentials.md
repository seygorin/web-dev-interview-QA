---
title: TypeScript Essentials
---

## Writing efficient TypeScript using basic types, enums, interfaces, and generics:

### basic types

TypeScript предоставляет статическую типизацию для JavaScript, включая базовые типы, такие как `number`, `string`, `boolean`, `array`, `tuple`, `any`, `void`, и другие.

**Samples:**

```typescript
let isDone: boolean = false
let decimal: number = 6
let color: string = 'blue'
let list: number[] = [1, 2, 3]
let x: [string, number] = ['hello', 10]
```

### enums

Перечисления (enums) позволяют определить набор именованных констант.

**Samples:**

```typescript
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green
```

### type / interface, differences between them

`type` и `interface` используются для определения пользовательских типов. `interface` можно расширять, а `type` можно использовать для создания алиасов типов.

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

// Расширение interface
interface Employee extends Person {
  employeeId: number
}

// Объединение типов
type Shape = Circle | Square
```

### using interfaces with optional properties, read-only properties, etc...

Интерфейсы в TypeScript могут включать необязательные свойства, свойства только для чтения и другие спецификаторы.

**Samples:**

```typescript
interface Config {
  color?: string
  readonly id: number
  [propName: string]: any
}

let config: Config = {id: 1}
config.color = 'red'
// config.id = 2; // Ошибка: нельзя изменить readonly свойство
```

### function types

TypeScript позволяет определять типы функций, включая параметры и возвращаемое значение.

**Samples:**

```typescript
type MathFunc = (x: number, y: number) => number

const add: MathFunc = (x, y) => x + y
const subtract: MathFunc = (x, y) => x - y
```

// utility types (optional)

Утилитные типы в TypeScript - это предопределенные обобщенные типы, которые облегчают типовые преобразования.

**Samples:**

```typescript
interface Todo {
  title: string
  description: string
}

type PartialTodo = Partial<Todo>
type ReadonlyTodo = Readonly<Todo>
```

### typeguards (optional)

Защитники типов (type guards) - это выражения, которые выполняют проверку типа во время выполнения.

**Samples:**

```typescript
function isString(value: unknown): value is string {
  return typeof value === 'string'
}

function processValue(value: unknown) {
  if (isString(value)) {
    console.log(value.toUpperCase())
  }
}
```

### creating custom types

Пользовательские типы можно создавать с помощью ключевых слов `type` или `interface`.

**Samples:**

```typescript
type UUID = string

type Result<T> =
  | {
      success: true
      value: T
    }
  | {
      success: false
      error: string
    }

interface Tree<T> {
  value: T
  left?: Tree<T>
  right?: Tree<T>
}
```

### generic types (concept)

Обобщенные типы (generics) позволяют создавать компоненты, которые могут работать с различными типами, сохраняя при этом безопасность типов.

**Samples:**

```typescript
function identity<T>(arg: T): T {
  return arg
}

let output = identity<string>('myString')

class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function (x, y) {
  return x + y
}
```

## Understanding the module system in ES6 and TypeScript.

Модульная система в ES6 и TypeScript позволяет организовывать код в отдельные модули, которые можно импортировать и экспортировать.

**Samples:**

```typescript
// math.ts
export function add(x: number, y: number): number {
  return x + y
}

export const PI = 3.14159

// main.ts
import {add, PI} from './math'

console.log(add(2, 3))
console.log(PI)

// Импорт всего модуля
import * as math from './math'
console.log(math.add(2, 3))

// Экспорт по умолчанию
export default function multiply(x: number, y: number): number {
  return x * y
}

// Импорт экспорта по умолчанию
import multiply from './math'
```
