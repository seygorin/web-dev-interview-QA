---
title: Event Handling
---

# Events Basics

## Types of DOM Events

DOM события представляют собой широкий спектр взаимодействий пользователя с веб-страницей, а также системных событий браузера. Понимание различных типов событий критически важно для создания интерактивных веб-приложений.

### Extended classification of events (Расширенная классификация событий):

1. **Mouse events (События мыши)**:

   - `click`: Происходит при клике на элемент.
   - `dblclick`: Двойной клик.
   - `mousedown`: Нажатие кнопки мыши.
   - `mouseup`: Отпускание кнопки мыши.
   - `mouseover`: Наведение курсора на элемент.
   - `mouseout`: Уход курсора с элемента.
   - `mousemove`: Движение мыши.
   - `contextmenu`: Вызов контекстного меню (правый клик).

2. **Keyboard events (События клавиатуры)**:

   - `keydown`: Нажатие клавиши.
   - `keyup`: Отпускание клавиши.
   - `keypress`: Нажатие клавиши (только для печатаемых символов).

3. **Form and input events (События форм и полей ввода)**:

   - `submit`: Отправка формы.
   - `reset`: Сброс формы.
   - `change`: Изменение значения элемента формы (для input, select, textarea).
   - `input`: Ввод данных в поле (происходит немедленно).
   - `focus`: Получение фокуса элементом.
   - `blur`: Потеря фокуса элементом.

4. **Document and window events (События документа и окна)**:

   - `load`: Загрузка страницы завершена.
   - `DOMContentLoaded`: DOM загружен (без ожидания загрузки ресурсов).
   - `resize`: Изменение размера окна браузера.
   - `scroll`: Прокрутка страницы или элемента.
   - `unload`: Пользователь покидает страницу.
   - `beforeunload`: Перед тем, как пользователь покинет страницу.

5. **Touch events (События касания для мобильных устройств)**:

   - `touchstart`: Касание экрана.
   - `touchmove`: Движение пальца по экрану.
   - `touchend`: Прекращение касания.

6. **Drag and drop events (События перетаскивания)**:
   - `dragstart`: Начало перетаскивания элемента.
   - `drag`: Процесс перетаскивания.
   - `dragend`: Завершение перетаскивания.
   - `drop`: Элемент отпущен в допустимую зону.

## Working with Mouse and Keyboard Events

Обработка событий мыши и клавиатуры позволяет взаимодействовать с пользователем на уровне событий. Используя `addEventListener`, можно назначать функции-обработчики для конкретных событий.

**Samples:**

```javascript
// Обработка различных событий мыши
const box = document.getElementById('myBox')

box.addEventListener('mouseenter', function (event) {
  this.style.backgroundColor = 'lightblue' // При наведении на элемент, изменяем его цвет
})

box.addEventListener('mouseleave', function (event) {
  this.style.backgroundColor = '' // При уходе курсора с элемента, возвращаем его цвет
})

box.addEventListener('mousemove', function (event) {
  console.log(`Mouse position: X=${event.clientX}, Y=${event.clientY}`)
})

// Обработка событий клавиатуры
document.addEventListener('keydown', function (event) {
  if (event.ctrlKey && event.key === 'b') {
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
    event.preventDefault() // Предотвращаем стандартное поведение (Ctrl+B)
  }
})

// Комбинирование событий мыши и клавиатуры
document.addEventListener('click', function (event) {
  if (event.shiftKey) {
    console.log(`Shift + Click at: X=${event.clientX}, Y=${event.clientY}`)
  }
})

// Обработка событий перетаскивания
const draggable = document.getElementById('draggable')
const dropZone = document.getElementById('dropZone')

draggable.addEventListener('dragstart', function (event) {
  event.dataTransfer.setData('text/plain', event.target.id)
})

dropZone.addEventListener('dragover', function (event) {
  event.preventDefault() // Разрешаем drop
})

dropZone.addEventListener('drop', function (event) {
  event.preventDefault()

  const id = event.dataTransfer.getData('text')
  const draggableElement = document.getElementById(id)
  event.target.appendChild(draggableElement)
})
```

#### Important aspects of working with events (Важные аспекты работы с событиями):

1. **Event object (Объект события)**: Каждый обработчик события получает объект `event`, содержащий информацию о событии (тип, цель, координаты и т.д.).

2. **Event delegation (Делегирование событий)**: Вместо назначения обработчиков каждому элементу, можно назначить один обработчик родительскому элементу и использовать `event.target` для определения источника события.

3. **Preventing default browser behavior (Предотвращение стандартного поведения)**: Метод `event.preventDefault()` позволяет отменить действие по умолчанию (например, отправку формы или переход по ссылке).

4. **Stopping event propagation (Прекращение распространения события)**: `event.stopPropagation()` останавливает "всплытие" события вверх по DOM-дереву.

5. **Passive event listeners (Пассивные слушатели)**: Для улучшения производительности, особенно на мобильных устройствах, можно использовать пассивные слушатели: `element.addEventListener('touchstart', handler, { passive: true })`.

## Handling Form and Input Events

Формы и поля ввода являются ключевыми элементами взаимодействия пользователя с веб-приложением. Правильная обработка событий форм и полей ввода позволяет создавать интерактивные и отзывчивые интерфейсы.

#### Main form and input events (Основные события форм и полей ввода):

1. **submit**: Возникает при отправке формы.
2. **reset**: Происходит при сбросе формы.
3. **input**: Срабатывает при каждом изменении значения поля ввода.
4. **change**: Возникает, когда поле ввода теряет фокус и его значение изменилось.
5. **focus**: Происходит, когда элемент получает фокус.
6. **blur**: Срабатывает, когда элемент теряет фокус.

#### Extended examples of handling form and input events (Расширенные примеры обработки событий форм и полей ввода):

```javascript
const form = document.getElementById('myForm')
const nameInput = document.getElementById('nameInput')
const emailInput = document.getElementById('emailInput')
const submitButton = document.getElementById('submitButton')

// Обработка отправки формы
form.addEventListener('submit', function (event) {
  event.preventDefault() // Предотвращаем стандартную отправку формы

  // Валидация формы
  if (validateForm()) {
    console.log('Form submitted successfully!')
    // Здесь можно отправить данные на сервер
  } else {
    console.log('Form validation failed!')
  }
})

// Валидация формы
function validateForm() {
  let isValid = true

  if (nameInput.value.trim() === '') {
    isValid = false
    showError(nameInput, 'Name is required')
  } else {
    clearError(nameInput)
  }

  if (!isValidEmail(emailInput.value)) {
    isValid = false
    showError(emailInput, 'Invalid email address')
  } else {
    clearError(emailInput)
  }
  return isValid
}

// Проверка email с помощью регулярного выражения
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

// Отображение ошибки
function showError(input, message) {
  const errorElement = input.nextElementSibling
  errorElement.textContent = message
  errorElement.style.display = 'block'
  input.classList.add('error')
}

// Очистка ошибки
function clearError(input) {
  const errorElement = input.nextElementSibling
  errorElement.textContent = ''
  errorElement.style.display = 'none'
  input.classList.remove('error')
}

// Обработка события input для полей ввода
nameInput.addEventListener('input', function (event) {
  if (event.target.value.trim() !== '') {
    clearError(event.target)
  }
})

emailInput.addEventListener('input', function (event) {
  if (isValidEmail(event.target.value)) {
    clearError(event.target)
  }
})

// Динамическое включение/отключение кнопки отправки
form.addEventListener('input', function () {
  submitButton.disabled = !form.checkValidity()
})

// Обработка события reset
form.addEventListener('reset', function (event) {
  console.log('Form reset')
  document.querySelectorAll('.error').forEach(clearError)
})
```

## Event Listeners

Event Listeners (слушатели событий) - это мощный механизм в JavaScript для обработки событий DOM. Метод `addEventListener` позволяет назначать обработчики событий элементам DOM, обеспечивая гибкость и эффективность в управлении интерактивностью веб-страниц.

### Basic aspects of working with Event Listeners (Основные аспекты работы с Event Listeners):

1. **Syntax (Синтаксис):**

   ```javascript
   element.addEventListener(eventType, listener[, options]);
   ```

   - `eventType`: строка, указывающая тип события (например, 'click', 'keydown').
   - `listener`: функция, которая будет вызвана при возникновении события.
   - `options`: необязательный объект, который может включать такие свойства, как `capture`, `once`, `passive`.

2. **Multiple handlers (Множественные обработчики):**

   ```javascript
   const button = document.getElementById('myButton')

   function handler1() {
     console.log('Handler 1')
   }

   function handler2() {
     console.log('Handler 2')
   }

   button.addEventListener('click', handler1)
   button.addEventListener('click', handler2)
   ```

   Оба обработчика будут вызваны при клике на кнопку в порядке их добавления.

3. **Removing handlers (Удаление обработчиков):**

   ```javascript
   button.removeEventListener('click', handler1)
   ```

   Важно: функция-обработчик должна быть той же самой, что и при добавлении.

4. **Using the options object (Использование объекта options):**

   ```javascript
   button.addEventListener('click', handler, {
     once: true, // Обработчик будет вызван только один раз
     capture: true, // Событие будет обработано на фазе перехвата
     passive: true, // Указывает, что обработчик не будет вызывать preventDefault()
   })
   ```
	 
5. **Event delegation (Делегирование событий):**

   ```javascript
   document
     .getElementById('parent-list')
     .addEventListener('click', function (e) {
       if (e.target && e.target.nodeName == 'LI') {
         console.log('List item ', e.target.id, ' was clicked')
       }
     })
   ```

   Это позволяет обрабатывать события для динамически добавляемых элементов.

6. **Preventing default browser behavior (Предотвращение стандартного поведения):**

   ```javascript
   link.addEventListener('click', function (e) {
     e.preventDefault()
     console.log('Link click prevented')
   })
   ```

7. **Stopping event propagation (Прекращение распространения события):**
   ```javascript
   child.addEventListener('click', function(e) {
     e.stopPropagation();
     console.log('Child clicked, event won't bubble up');
   });
   ```

### Advantages of using addEventListener (Преимущества использования addEventListener):

1. Возможность добавления нескольких обработчиков на одно событие.
2. Более чистый и модульный код по сравнению с inline-обработчиками в HTML.
3. Простота в добавлении и удалении обработчиков.
4. Возможность использования capture и bubble фаз событий.
5. Лучшая производительность при правильном использовании (например, делегирование событий).

#### Important notes (Важные замечания):

- Анонимные функции, переданные в `addEventListener`, нельзя удалить с помощью `removeEventListener`.
- Стрелочные функции в качестве обработчиков событий могут вести себя иначе в отношении `this`.
- При использовании `addEventListener` в циклах важно не создавать замыкания случайно, что может привести к неожиданному поведению.

## Event Phases and Their Differences

События в DOM проходят через три фазы, что позволяет разработчикам точно контролировать, когда и как обрабатываются события. Понимание этих фаз критически важно для создания сложных интерактивных интерфейсов и правильного управления распространением событий.

### Детальное описание фаз:

1. **Фаза захвата (Capturing Phase)**:
   - Событие начинается от корня документа (window) и спускается вниз по DOM-дереву к целевому элементу.
   - Эта фаза редко используется, но может быть полезна для перехвата событий до того, как они достигнут цели.
   - Обработчики на этой фазе срабатывают в порядке от родителя к ребенку.

2. **Фаза цели (Target Phase)**:
   - Событие достигает целевого элемента, на котором оно было инициировано.
   - На этой фазе срабатывают все обработчики, прикрепленные непосредственно к целевому элементу.

3. **Фаза всплытия (Bubbling Phase)**:
   - После достижения цели, событие "всплывает" обратно вверх по DOM-дереву к корню документа.
   - Это наиболее часто используемая фаза, так как она позволяет обрабатывать события на родительских элементах.
   - Обработчики на этой фазе срабатывают в порядке от ребенка к родителю.

**Samples:**

```javascript
// Создаем структуру DOM
const grandparent = document.createElement('div');
const parent = document.createElement('div');
const child = document.createElement('button');

grandparent.appendChild(parent);
parent.appendChild(child);
document.body.appendChild(grandparent);

// Функция для добавления обработчиков
function addHandler(element, phase) {
	element.addEventListener('click', function(event) {
		console.log(`${element.tagName} clicked - ${phase} phase`);
	}, phase === 'Capturing');
}

// Добавляем обработчики для всех фаз
addHandler(grandparent, 'Capturing');
addHandler(grandparent, 'Bubbling');

addHandler(parent, 'Capturing');
addHandler(parent, 'Bubbling');

addHandler(child, 'Capturing');
addHandler(child, 'Bubbling');

// Обработчик для фазы цели
child.addEventListener('click', function(event) {
	console.log('Button clicked - Target phase');
});

// При клике на кнопку, вывод будет следующим:
// DIV clicked - Capturing phase (grandparent)
// DIV clicked - Capturing phase (parent)
// BUTTON clicked - Capturing phase
// Button clicked - Target phase
// BUTTON clicked - Bubbling phase
// DIV clicked - Bubbling phase (parent)
// DIV clicked - Bubbling phase (grandparent)

```

### Important aspects of working with event phases (Важные аспекты работы с фазами событий):

1. **Order of execution (Порядок выполнения)**: 
   Обработчики на фазе захвата выполняются сверху вниз, затем обработчики на целевом элементе, и наконец, обработчики на фазе всплытия снизу вверх.

2. **Controlling propagation (Контроль распространения)**:
   - `event.stopPropagation()` останавливает дальнейшее распространение события, но не предотвращает обработку других обработчиков на том же элементе.
   - `event.stopImmediatePropagation()` останавливает распространение и предотвращает выполнение других обработчиков на том же элементе.

3. **Event delegation (Делегирование событий)**:
   Фаза всплытия позволяет реализовать делегирование событий, когда один обработчик на родительском элементе может управлять событиями для множества дочерних элементов.

4. **Performance (Производительность)**:
   Использование фазы захвата может быть менее эффективным, так как браузер должен сначала определить целевой элемент, прежде чем начать фазу захвата.

5. **Compatibility (Совместимость)**:
   Не все события поддерживают фазу всплытия (например, `focus`). Для таких событий можно использовать их аналоги с всплытием (например, `focusin`).

6. **Determining the current phase (Определение текущей фазы)**:
   Свойство `event.eventPhase` позволяет определить текущую фазу события (1 - захват, 2 - цель, 3 - всплытие).


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

1. **Mechanism of operation (Механизм работы)**: 
   - Когда вызывается `stopPropagation()`, событие перестает распространяться вверх по DOM-дереву.
   - Это влияет только на последующие обработчики в цепочке распространения, но не на другие обработчики того же элемента.

2. **Using in different phases (Использование в разных фазах)**:
   - Может использоваться как на фазе захвата, так и на фазе всплытия.
   - На фазе захвата предотвращает достижение события целевого элемента.

3. **stopImmediatePropagation()**:
   - Более строгая версия `stopPropagation()`.
   - Останавливает распространение и предотвращает выполнение других обработчиков даже на текущем элементе.


**Samples:**

```javascript
document.body.addEventListener('click', function() {
	console.log('Body clicked');
}, true); // Capturing phase

document.getElementById('outer').addEventListener('click', function(event) {
	console.log('Outer div clicked'); 
	event.stopPropagation();
});

document.getElementById('inner').addEventListener('click', function() {
	console.log('Inner div clicked');
});

document.getElementById('button').addEventListener('click', function(event) {
	console.log('Button clicked');
	event.stopImmediatePropagation();
});

document.getElementById('button').addEventListener('click', function() {
	console.log('This will not be logged');
});

// При клике на кнопку вывод будет:
// Body clicked (из-за фазы захвата)
// Button clicked
// Inner div clicked
// Outer div clicked не будет выведено из-за stopPropagation
```

## Preventing Default Browser Behavior

Метод `event.preventDefault()` позволяет отменить стандартное поведение браузера для определенных событий. Это ключевой инструмент для создания кастомного поведения элементов.

#### Detailed description (Подробное описание):

1. **Application (Применение)**:
   - Предотвращение отправки формы при клике на submit.
   - Отмена перехода по ссылке.
   - Запрет выделения текста или контекстного меню.

2. **Interaction with other methods (Взаимодействие с другими методами)**:
   - Не влияет на распространение события (в отличие от `stopPropagation()`).
   - Может использоваться вместе с `stopPropagation()` для полного контроля над событием.

3. **Checking the possibility of cancellation (Проверка возможности отмены)**:
   - Свойство `event.cancelable` показывает, можно ли отменить действие по умолчанию.

**Samples:**

```javascript
document.getElementById('myForm').addEventListener('submit', function(event) {
	event.preventDefault();
	// Кастомная валидация
	if (!validateForm()) {
		console.log('Form validation failed');
		return;
	}

	// Отправка данных через AJAX вместо стандартной отправки формы
	sendFormDataAjax();
});

document.addEventListener('contextmenu', function(event) {
if (event.target.classList.contains('protected-content')) {
		event.preventDefault();
			console.log('Context menu disabled for this element');
		}
	});

document.getElementById('dragElement').addEventListener('dragstart', function(event) {
		if (event.target.classList.contains('non-draggable')) {
		event.preventDefault();
		console.log('Dragging prevented for this element');
	}
});
```

## Event Delegation and Its Pros/Cons

Делегирование событий - это паттерн, который использует всплытие событий для обработки событий на родительском элементе вместо назначения обработчиков каждому дочернему элементу.

#### Extended description of advantages (Расширенное описание преимуществ):

1. **Memory efficiency (Эффективность памяти)**: 
   - Значительно уменьшает количество обработчиков событий.
   - Особенно полезно для больших списков или таблиц.

2. **Dynamic content (Динамический контент)**: 
   - Работает с элементами, добавленными после инициализации обработчика.
   - Идеально для динамически загружаемого контента.

3. **Less code (Меньше кода)**: 
   - Упрощает управление событиями для групп похожих элементов.

4. **Performance improvement (Улучшение производительности)**: 
   - Меньше обработчиков означает меньше работы для браузера при рендеринге и обновлении DOM.

#### Extended description of disadvantages (Расширенное описание недостатков):

1. **Debugging complexity (Сложность отладки)**: 
   - Может быть трудно отследить, откуда именно пришло событие.
   - Требует более тщательного логирования и отладки.

2. **Event types limitations (Ограничения по типам событий)**: 
   - Не все события всплывают (например, `focus`, `blur`, `load`).
   - Для некоторых событий нужно использовать альтернативы (например, `focusin` вместо `focus`).

3. **Processing delay (Задержка в обработке)**: 
   - Небольшая задержка между возникновением события и его обработкой из-за всплытия.

4. **Performance issues (Проблемы с производительностью)**: 
   - При неправильной реализации может привести к излишней обработке событий на родительских элементах.

**Samples:**

```javascript
document.getElementById('taskList').addEventListener('click', function(event) {
	if (event.target.tagName === 'LI') {
		// Обработка клика на элементе списка
		toggleTaskCompletion(event.target);
	} else if (event.target.classList.contains('delete-btn')) {
		// Обработка клика на кнопке удаления
		deleteTask(event.target.closest('li'));
	} else if (event.target.classList.contains('edit-btn')) {
		// Обработка клика на кнопке редактирования
		editTask(event.target.closest('li'));
}
});

function toggleTaskCompletion(taskElement) {
	taskElement.classList.toggle('completed');
}

function deleteTask(taskElement) {
	if (confirm('Are you sure you want to delete this task?')) {
		taskElement.remove();
	}
}

function editTask(taskElement) {
	const newText = prompt('Edit task:', taskElement.textContent);
	if (newText !== null) {
		taskElement.firstChild.textContent = newText;
	}
}
```
