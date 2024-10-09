---
title: JavaScript in Browser and DOM Manipulation
---

# JavaScript in Browser:

## Global Object Window

Объект `window` — это глобальный объект в браузере, представляющий текущее окно браузера. Он служит глобальной областью видимости для JavaScript и предоставляет доступ ко множеству полезных свойств и методов, которые позволяют взаимодействовать с самим окном браузера, DOM, и другими API браузера.

### Main Properties and Methods of window (Основные свойства и методы window):

1. **Sizes and position of the window (Размеры и позиция окна):**

   ```javascript
   console.log(window.innerWidth, window.innerHeight) // ширина и высота окна браузера
   console.log(window.outerWidth, window.outerHeight) // полная ширина и высота окна браузера
   console.log(window.screenX, window.screenY) // координаты окна относительно экрана
   ```

2. **Navigation and history (Навигация и история):**

   ```javascript
   console.log(window.location.href) // текущий URL
   window.history.back() // переход на предыдущую страницу
   window.history.forward() // переход на следующую страницу
   ```

3. **Timers (Таймеры):**

   ```javascript
   const timeoutId = window.setTimeout(() => {
     console.log('Выполнено через 2 секунды')
   }, 2000)
   const intervalId = window.setInterval(() => {
     console.log('Выполняется каждую секунду')
   }, 1000)
   window.clearTimeout(timeoutId) // отмена setTimeout
   window.clearInterval(intervalId) // остановка setInterval
   ```

4. **Dialog windows (Диалоговые окна):**

   ```javascript
   window.alert('Предупреждение!') // показать диалоговое окно с сообщением
   const result = window.confirm('Вы уверены?') // диалоговое окно с подтверждением
   const name = window.prompt('Введите ваше имя', 'Гость') // диалоговое окно с вводом
   ```

5. **Working with frames (Работа с фреймами):**

   ```javascript
   console.log(window.frames) // коллекция фреймов в текущем окне
   console.log(window.parent) // родительское окно для текущего фрейма
   console.log(window.top) // самое верхнее окно в иерархии фреймов
   ```

6. **Focus management (Управление фокусом):**

   ```javascript
   window.focus() // установить фокус на текущее окно
   window.blur() // убрать фокус с текущего окна
   ```

7. **Browser and system information (Информация о браузере и системе):**

   ```javascript
   console.log(window.navigator.userAgent) // информация о браузере
   console.log(window.screen.width, window.screen.height) // размеры экрана
   ```

8. **Working with DOM (Работа с DOM):**
   ```javascript
   const element = window.document.getElementById('myElement')
   window.scrollTo(0, 100) // прокрутка окна
   ```

#### Important notes (Важные замечания):

- В глобальном контексте можно опускать `window.` при обращении к его свойствам и методам, но явное указание делает код более читаемым и предотвращает конфликты с локальными переменными.
- Некоторые методы, такие как `alert()`, `confirm()`, и `prompt()`, могут блокировать выполнение JavaScript до закрытия диалогового окна.
- При работе с несколькими окнами или фреймами, важно учитывать политику Same-Origin Policy для безопасности.
- Объект `window` предоставляет доступ к множеству Web APIs, таких как `localStorage`, `sessionStorage`, `fetch()`, и другим, которые расширяют возможности JavaScript в браузере.

## Understanding the Document Object Model (DOM)

DOM (Document Object Model) — это программный интерфейс для HTML и XML документов, который представляет структуру документа в виде дерева объектов, где каждый узел представляет часть документа (элемент, атрибут, текст и т.д.). С помощью DOM можно динамически изменять содержание, структуру и стиль документа.

### Main concepts of DOM (Основные концепции DOM):

1. **Nodes and elements (Узлы и элементы):**

   - Узел (`Node`) — это базовый тип для всех объектов в DOM.
   - Элемент (`Element`) — это тип узла, представляющий HTML-элемент.

2. **Navigation through DOM (Навигация по DOM):**

   - Доступ к дочерним элементам: `element.children`, `element.firstElementChild`, `element.lastElementChild`
   - Доступ к родительским элементам: `element.parentNode`, `element.parentElement`
   - Доступ к соседним элементам: `element.nextElementSibling`, `element.previousElementSibling`

3. **Manipulations with DOM (Манипуляции с DOM):**

   - Создание элементов: `document.createElement()`
   - Добавление элементов: `parent.appendChild()`, `parent.insertBefore()`
   - Удаление элементов: `parent.removeChild()`, `element.remove()`
   - Замена элементов: `parent.replaceChild()`

4. **Working with attributes (Работа с атрибутами):**

   - Получение атрибута: `element.getAttribute('attr')`
   - Установка атрибута: `element.setAttribute('attr', 'value')`
   - Проверка наличия атрибута: `element.hasAttribute('attr')`
   - Удаление атрибута: `element.removeAttribute('attr')`

5. **Working with classes (Работа с классами):**
   - Добавление класса: `element.classList.add('class')`
   - Удаление класса: `element.classList.remove('class')`
   - Переключение класса: `element.classList.toggle('class')`
   - Проверка наличия класса: `element.classList.contains('class')`

### Advanced examples of working with DOM (Расширенные примеры работы с DOM):

```javascript
// Создание сложной структуры
function createList(items) {
  const ul = document.createElement('ul')
  items.forEach((item) => {
    const li = document.createElement('li')
    li.textContent = item
    ul.appendChild(li)
  })
  return ul
}

const fruits = ['Apple', 'Banana', 'Orange']
document.body.appendChild(createList(fruits))

// Делегирование событий
document.body.addEventListener('click', function (event) {
  if (event.target.tagName === 'LI') {
    console.log('Clicked on:', event.target.textContent)
  }
})

// Изменение стилей
const paragraphs = document.querySelectorAll('p')
paragraphs.forEach((p) => {
  p.style.color = 'blue'
  p.style.fontSize = '18px'
})

// Работа с формами
const form = document.querySelector('form')
form.addEventListener('submit', function (event) {
  event.preventDefault()
  const formData = new FormData(form)
  for (let [name, value] of formData) {
    console.log(name, ':', value)
  }
})
```

### Important notes (Важные замечания):

- DOM-операции могут быть ресурсоемкими, особенно при частом обновлении. Рекомендуется минимизировать прямые манипуляции с DOM и использовать фрагменты документа (`DocumentFragment`) для пакетных изменений.
- Современные фреймворки (React, Vue, Angular) часто используют виртуальный DOM для оптимизации производительности, минимизируя прямые манипуляции с реальным DOM.
- При работе с DOM важно учитывать кроссбраузерную совместимость, особенно при использовании новых API или свойств.
- Безопасность: при вставке пользовательского контента в DOM следует использовать `textContent` вместо `innerHTML` для предотвращения XSS-атак.

# Timers

Таймеры в JavaScript позволяют выполнять код асинхронно, либо с задержкой, либо периодически. Это важный инструмент для создания динамических и интерактивных веб-приложений.

## Usage of setTimeout / setInterval

- **`setTimeout`**: Выполняет функцию один раз после указанной задержки.

**Samples:**

```javascript
const timeoutID = setTimeout(function, delay, param1, param2, ...)
```

- `function`: Функция, которая будет выполнена после задержки.
- `delay`: Время задержки в миллисекундах (1000 мс = 1 секунда).
- `param1, param2, ...`: Опциональные параметры, которые будут переданы в функцию.

**Extended example (Расширенный пример):**

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`)
}
const timeoutID = setTimeout(greet, 2000, 'Alice') // after 2 seconds: Hello, Alice!

// Отмена таймера, если нужно
clearTimeout(timeoutID)
console.log('This logs immediately')
```

- **`setInterval`**: Выполняет функцию регулярно с указанным интервалом времени.

**Samples:**

```javascript
const intervalID = setInterval(function, delay, param1, param2, ...)
```

**Extended example (Расширенный пример):**

```javascript
let counter = 0
const maxCount = 5

function incrementCounter() {
  counter++
  console.log(`Counter: ${counter}`)

  if (counter >= maxCount) {
    clearInterval(intervalID)
    console.log('Interval stopped')
  }
}
const intervalID = setInterval(incrementCounter, 1000) // every 1 second: Counter: 1, Counter: 2, Counter: 3, Counter: 4, Counter: 5, Interval stopped
```

## Clearing Timers with clearTimeout / clearInterval

- **`clearTimeout`**: Отменяет выполнение функции, запланированной с помощью `setTimeout`.
- **`clearInterval`**: Прекращает повторное выполнение функции, запущенной с помощью `setInterval`.

**Samples:**

```javascript
let seconds = 0;
const maxSeconds = 10;

const intervalID = setInterval(() => {
	seconds++;
	console.log(Seconds passed: ${seconds});
	if (seconds >= maxSeconds) {
    clearInterval(intervalID)
    console.log('Timer stopped')
  }
}, 1000)

// Отмена таймера через 5 секунд, даже если он не достиг maxSeconds
setTimeout(() => {
  clearInterval(intervalID)
  console.log('Timer forcefully stopped')
}, 5000);
```

### Important notes (Важные замечания):

1. **Minimum delay (Минимальная задержка)**: Браузеры имеют минимальную задержку (обычно 4 мс), даже если указано меньшее значение.

2. **Accuracy (Точность)**: Таймеры не гарантируют абсолютную точность выполнения, особенно для малых интервалов.

3. **Execution context (Контекст выполнения)**: Функции в таймерах выполняются в глобальном контексте (`window` в браузере).

4. **Performance (Производительность)**: Чрезмерное использование таймеров может негативно влиять на производительность.

5. **Alternatives (Альтернативы)**: Для анимаций лучше использовать `requestAnimationFrame()`, который оптимизирован для обновления экрана.

6. **Asynchronous execution (Асинхронное выполнение)**: Таймеры работают асинхронно и не блокируют выполнение основного кода.

# Web Storage API & Cookies

Web Storage API и Cookies предоставляют различные способы хранения данных на стороне клиента в веб-приложениях. Каждый из этих механизмов имеет свои особенности, преимущества и ограничения.

## Differences between LocalStorage, SessionStorage, and Cookies

### LocalStorage

`LocalStorage` позволяет хранить данные в браузере без ограничения по времени. Данные сохраняются даже после закрытия браузера.

#### Features (Особенности):

- Объем хранения: обычно около 5-10 МБ (зависит от браузера).
- Данные хранятся в формате ключ-значение (строки).
- Доступ ограничен доменом (Same-Origin Policy).

**Samples:**

```javascript
// Сохранение данных
localStorage.setItem('username', 'John')
localStorage.setItem(
  'preferences',
  JSON.stringify({theme: 'dark', fontSize: 14})
)

// Получение данных
const username = localStorage.getItem('username')
const preferences = JSON.parse(localStorage.getItem('preferences'))
console.log(username) // 'John'
console.log(preferences.theme) // 'dark'

// Удаление данных
localStorage.removeItem('username')

// Очистка всех данных
localStorage.clear()
// Проверка наличия данных

if (localStorage.getItem('username')) {
  console.log('Username is set')
}
// Обработка событий хранилища
window.addEventListener('storage', (event) => {
  console.log('Storage changed:', event.key, event.newValue)
})
```

### SessionStorage

SessionStorage похож на LocalStorage, но данные сохраняются только на время сессии браузера (пока открыта вкладка или окно).

#### Features (Особенности):

- Данные удаляются при закрытии вкладки/окна.
- Объем и формат хранения аналогичны LocalStorage.
- Также ограничен доменом.

**Samples:**

```javascript
// Сохранение временных данных формы
sessionStorage.setItem(
  'formData',
  JSON.stringify({name: 'Alice', email: 'alice@example.com'})
)

// Восстановление данных формы при перезагрузке страницы
window.onload = () => {
  const formData = JSON.parse(sessionStorage.getItem('formData'))

  if (formData) {
    document.getElementById('nameInput').value = formData.name
    document.getElementById('emailInput').value = formData.email
  }
}

// Очистка данных при отправке формы
document.querySelector('form').onsubmit = () => {
  sessionStorage.removeItem('formData')
}
```

## Cookies

Cookies - это небольшие текстовые файлы, которые хранятся в браузере и отправляются на сервер с каждым HTTP-запросом.

#### Features (Особенности):

- Ограниченный объем (обычно до 4 КБ).
- Могут иметь срок действия.
- Отправляются на сервер с каждым запросом.
- Могут быть защищены флагами (HttpOnly, Secure).

**Samples:**

```javascript
// Установка cookie
function setCookie(name, value, days) {
  let expires = ''

  if (days) {
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = '; expires=' + date.toUTCString()
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/'
}

// Получение значения cookie
function getCookie(name) {
  const nameEQ = name + '='
  const ca = document.cookie.split(';')

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
  }

  return null
}

// Удаление cookie
function eraseCookie(name) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}

// Примеры использования
setCookie('user', 'John', 7) // Устанавливаем cookie на 7 дней
console.log(getCookie('user')) // Выводим значение cookie
eraseCookie('user') // Удаляем cookie
```

### Comparison and recommendations for use (Сравнение и рекомендации по использованию):

1. **Volume of data (Объем данных):**

   - LocalStorage и SessionStorage: больше (5-10 МБ)
   - Cookies: меньше (4 КБ)

2. **Expiration date (Срок хранения):**

   - LocalStorage: постоянно
   - SessionStorage: на время сессии
   - Cookies: можно установить срок действия

3. **Sending to server (Отправка на сервер):**

   - LocalStorage и SessionStorage: не отправляются
   - Cookies: отправляются с каждым запросом

4. **Usage (Использование):**

   - LocalStorage: для долгосрочного хранения пользовательских настроек
   - SessionStorage: для временных данных в рамках сессии
   - Cookies: для аутентификации, отслеживания сессий

5. **Security (Безопасность):**
   - LocalStorage и SessionStorage: уязвимы к XSS-атакам
   - Cookies: могут быть защищены флагами HttpOnly и Secure

# Date & Time (optional)

Работа с датами и временем - важная часть многих веб-приложений. JavaScript предоставляет встроенный объект `Date` для манипуляций с датами и временем, а также объект `Intl` для интернационализации.

## Working with the Date Object

Объект `Date` в JavaScript используется для работы с датами и временем. С его помощью можно получить текущую дату и время, вычислить разницу между датами или форматировать их по-разному.

#### Creating Date objects (Создание объектов Date)

```javascript
// Текущая дата и время
const now = new Date()

// Конкретная дата
const specificDate = new Date('2023-12-31T23:59:59')

// Создание даты с помощью числовых значений
const customDate = new Date(2023, 11, 31, 23, 59, 59) // Месяцы нумеруются с 0
```

#### Getting date components (Получение компонентов даты)

```javascript
const date = new Date('2023-05-25T12:30:45')
console.log(date.getFullYear()) // 2023
console.log(date.getMonth()) // 4 (май - 5-й месяц, но нумерация с 0)
console.log(date.getDate()) // 25
console.log(date.getDay()) // 4 (четверг, 0 - воскресенье)
console.log(date.getHours()) // 12
console.log(date.getMinutes()) // 30
console.log(date.getSeconds()) // 45
console.log(date.getMilliseconds()) // 0
```

#### Setting date components (Установка компонентов даты)

```javascript
const date = new Date('2023-05-25T12:30:45')
date.setFullYear(2024)
date.setMonth(0) // Январь
date.setDate(1)
date.setHours(0)
date.setMinutes(0)
date.setSeconds(0)

console.log(date) // 2024-01-01T00:00:00
```

#### Date operations (Операции с датами)

```javascript
const date1 = new Date('2023-01-01')
const date2 = new Date('2023-12-31')

// Разница в миллисекундах
const diff = date2 - date1

// Разница в днях
const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24))
console.log(`Разница в днях: ${diffDays}`)
```

### Formatting dates (Форматирование дат)

```javascript
const date = new Date('2023-05-25T12:30:45')

console.log(date.toLocaleString()) // Зависит от локали, например: "5/25/2023, 12:30:45 PM"
console.log(date.toLocaleDateString()) // Только дата
console.log(date.toLocaleTimeString()) // Только время
console.log(date.toISOString()) // "2023-05-25T12:30:45.000Z"
```

## Timezones and Internationalization (Intl)

Объект `Intl` предоставляет мощные возможности для форматирования дат, чисел и строк с учетом локали и часовых поясов.

#### Formatting dates with Intl.DateTimeFormat (Форматирование дат с Intl.DateTimeFormat)

```javascript
const date = new Date('2023-05-25T12:00:00Z');

// Базовое форматирование для разных локалей
console.log(new Intl.DateTimeFormat('en-US').format(date)); // 5/25/2023
console.log(new Intl.DateTimeFormat('de-DE').format(date)); // 25.5.2023
console.log(new Intl.DateTimeFormat('ja-JP').format(date)); // 2023/5/25

// Расширенное форматирование
const options = {
weekday: 'long',
year: 'numeric',
month: 'long',
day: 'numeric',
hour: 'numeric',
minute: 'numeric',
timeZone: 'America/New_York'
};

console.log(new Intl.DateTimeFormat('en-US', options).format(date)); // Thursday, May 25, 2023 at 8:00 AM
```

#### Working with timezones (Работа с часовыми поясами)

```javascript
const date = new Date('2023-05-25T12:00:00Z');

console.log(new Intl.DateTimeFormat('en-US', {timeZone: 'America/New_York'}).format(date)); // 5/25/2023, 8:00:00 AM
console.log(new Intl.DateTimeFormat('en-US', {timeZone: 'Asia/Tokyo'}).format(date)); // 5/25/2023, 11:00:00 PM
console.log(new Intl.DateTimeFormat('en-US', {timeZone: 'Europe/London'}).format(date)); // 5/25/2023, 3:00:00 PM
```

#### Formatting numbers with Intl.NumberFormat (Форматирование чисел с Intl.NumberFormat)

```javascript
const number = 1234567.89;

console.log(new Intl.NumberFormat('en-US').format(number)); // 1,234,567.89
console.log(new Intl.NumberFormat('de-DE').format(number)); // 1.234.567,89
console.log(new Intl.NumberFormat('ja-JP').format(number)); // 1,234,567.89

// Форматирование валют
console.log(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number)); // $1,234,567.89

console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number)); // 1.234.567,89 €
```

#### Comparing strings with localeCompare (Сравнение строк с учетом локали)

```javascript
const collator = new Intl.Collator('de');
console.log(collator.compare('ä', 'z')); // -1 (в немецком 'ä' идет перед 'z')

const names = ['Müller', 'Mayer', 'März'];
console.log(names.sort(collator.compare)); // ['Mayer', 'März', 'Müller']
```

Использование `Date` и `Intl` позволяет создавать приложения, которые корректно работают с датами, временем и локализацией, что критически важно для международных проектов.