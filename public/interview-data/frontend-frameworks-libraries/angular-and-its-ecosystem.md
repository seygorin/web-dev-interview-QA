---
title: Angular and its Ecosystem
---

## Angular General Concepts

### 1. What is Angular and what is it used for?

Angular - это платформа и фреймворк для создания одностраничных клиентских приложений (SPA) с использованием HTML и TypeScript. Angular написан на TypeScript и реализует основную и дополнительную функциональность в виде набора TypeScript библиотек, которые импортируются в приложение.

#### Main characteristics of Angular

- **Компонентная архитектура**: Приложение строится из компонентов - изолированных блоков с собственным представлением и логикой
- **Декларативные шаблоны**: HTML-шаблоны с расширениями Angular для динамического отображения данных
- **Двусторонняя привязка данных**: Автоматическая синхронизация между моделью и представлением
- **TypeScript**: Строгая типизация для улучшения качества кода и повышения продуктивности
- **Инъекция зависимостей**: Мощная система управления зависимостями для модульного и тестируемого кода
- **RxJS**: Реактивное программирование для асинхронных операций
- **Сигналы (Angular 16+)**: Новая система реактивности для упрощенного управления состоянием

#### Areas of application of Angular

Angular используется для создания:

1. **Крупных корпоративных приложений**

   - Сложные бизнес-системы
   - Внутренние корпоративные инструменты
   - CRM, ERP и другие системы управления

2. **Прогрессивных веб-приложений (PWA)**

   - Приложения с возможностью работы офлайн
   - Приложения с быстрой загрузкой и отзывчивостью

3. **Кроссплатформенных мобильных приложений**

   - С использованием Ionic или NativeScript
   - Единая кодовая база для веб и мобильных платформ

4. **Динамических веб-приложений**
   - Интерактивные панели управления
   - Онлайн-редакторы и инструменты

#### Преимущества использования Angular

- **Поддержка Google**: Долгосрочная поддержка и регулярные обновления
- **Масштабируемость**: Эффективная организация кода для крупных проектов
- **Производительность**: Оптимизированный рендеринг и обнаружение изменений
- **Тестируемость**: Встроенные инструменты для модульного и интеграционного тестирования
- **Экосистема**: Богатый набор библиотек, инструментов и расширений
- **Сообщество**: Большое активное сообщество разработчиков и обширная документация

### 2. What is Angular CLI and what are its main features?

Angular CLI (Command Line Interface) - это официальный инструмент командной строки для Angular, который значительно упрощает создание, развитие и поддержку Angular приложений. Он предоставляет стандартизированную структуру проекта и автоматизирует множество повторяющихся задач разработки.

#### Main functions of Angular CLI

#### 1. Инициализация проекта

```bash
ng new my-app
```

- Создаёт новое Angular приложение с правильной структурой файлов
- Настраивает TypeScript, Karma, Jasmine и другие инструменты
- Устанавливает все необходимые зависимости
- Предлагает опции для настройки (маршрутизация, CSS-препроцессоры)

#### 2. Генерация компонентов и других артефактов

```bash
ng generate component my-component

ng g c my-component
```

CLI может генерировать различные элементы Angular приложения:

- Компоненты (`component`)
- Директивы (`directive`)
- Сервисы (`service`)
- Пайпы (`pipe`)
- Классы (`class`)
- Интерфейсы (`interface`)
- Модули (`module`)
- Гарды (`guard`)
- Перехватчики (`interceptor`)
- Библиотеки (`library`)
- Приложения (`application`)
- Среды (`environment`)

#### 3. Сервер для разработки

```bash
ng serve
```

- Запускает локальный сервер разработки
- Обеспечивает автоматическую перезагрузку при изменении кода
- Компилирует TypeScript в JavaScript на лету
- Поддерживает опции для кросс-доменных запросов, прокси и портов

#### 4. Сборка для Production

```bash
ng build --configuration production
```

- Оптимизирует код для производственной среды
- Минифицирует и обфусцирует JavaScript
- Генерирует файлы с хэшированными именами для кэширования
- Выполняет Tree-Shaking (удаление неиспользуемого кода)
- Создает разделенные бандлы для оптимизации загрузки

#### 5. Тестирование

```bash
ng test        # Запуск модульных тестов
ng e2e         # Запуск e2e тестов
```

- Запускает модульные тесты с Karma и Jasmine
- Запускает end-to-end тесты с Protractor (до Angular 12) или Cypress/Playwright (новые версии)
- Позволяет тестировать компоненты изолированно

#### 6. Линтинг и форматирование

```bash
ng lint        # Проверка кода на соответствие стилю
```

- Проверяет код на соответствие стилевым правилам
- Может автоматически исправлять некоторые проблемы

#### 7. Обновление версий

```bash
ng update
```

- Обновляет Angular и связанные пакеты
- Автоматически применяет миграции между версиями
- Предоставляет отчет о процессе обновления

#### 8. Schematic и настройка проекта

```bash
ng add @angular/material   # Добавление библиотек через schematics
ng config                   # Управление настройками проекта
```

- Добавляет и настраивает внешние библиотеки
- Позволяет изменять конфигурацию проекта

#### Преимущества использования Angular CLI

- **Стандартизация**: Обеспечивает единообразную структуру проекта
- **Продуктивность**: Автоматизирует рутинные задачи разработки
- **Лучшие практики**: Следует рекомендованным подходам разработки
- **Обновляемость**: Упрощает процесс обновления между версиями
- **Консистентность**: Гарантирует одинаковое поведение инструментов сборки
- **Расширяемость**: Поддерживает собственные схемы и плагины

### 3. What is a module in Angular, and what is its role in an application?

Модуль в Angular (NgModule) - это механизм для организации компонентов, директив, пайпов и сервисов, связанных между собой, в функциональные блоки. Модули играют ключевую роль в структурировании приложения и управлении его сложностью.

#### Structure of NgModule

Модуль в Angular определяется с помощью декоратора `@NgModule`, который принимает объект конфигурации со следующими свойствами:

```typescript
@NgModule({
  declarations: [
    /* компоненты, директивы, пайпы */
  ],
  imports: [
    /* другие модули */
  ],
  exports: [
    /* компоненты, директивы, пайпы для использования вне модуля */
  ],
  providers: [
    /* сервисы */
  ],
  bootstrap: [
    /* корневой компонент (только для AppModule) */
  ],
})
export class FeatureModule {}
```

#### Main properties of NgModule

- **declarations**: Список компонентов, директив и пайпов, принадлежащих модулю
- **imports**: Другие модули, чей экспортируемый функционал необходим для работы текущего модуля
- **exports**: Компоненты, директивы и пайпы, которые должны быть доступны другим модулям, импортирующим этот модуль
- **providers**: Сервисы, которые будут доступны через инъекцию зависимостей
- **bootstrap**: (Только для корневого модуля) Компонент, который будет загружен первым при запуске приложения

#### Types of modules in Angular

#### 1. Корневой модуль (Root Module)

Это основной модуль приложения, обычно называемый `AppModule`. Каждое Angular приложение имеет один корневой модуль.

```typescript
@NgModule({
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

#### 2. Функциональные модули (Feature Modules)

Модули, организующие связанный код вокруг определенной функциональности приложения.

```typescript
@NgModule({
  imports: [CommonModule, UserRoutingModule],
  declarations: [UserListComponent, UserDetailComponent],
  exports: [UserListComponent],
})
export class UserModule {}
```

#### 3. Общие модули (Shared Modules)

Содержат компоненты, директивы и пайпы, используемые в разных частях приложения.

```typescript
@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, FooterComponent, LoadingSpinnerComponent],
  exports: [HeaderComponent, FooterComponent, LoadingSpinnerComponent],
})
export class SharedModule {}
```

#### 4. Модули маршрутизации (Routing Modules)

Выделяют настройку маршрутизации в отдельные модули для улучшения организации кода.

```typescript
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
```

#### 5. Сервисные модули (Service Modules)

Предоставляют сервисы, но не декларируют компоненты.

```typescript
@NgModule({
  providers: [AuthService, TokenService, UserService],
})
export class CoreModule {}
```

#### Role of modules in the application

- **Организация и структурирование кода**: Модули помогают разделить приложение на логические блоки
- **Инкапсуляция**: Компоненты, определенные в модуле, по умолчанию доступны только внутри этого модуля
- **Повторное использование кода**: Экспортируя компоненты, модули делают их доступными для других частей приложения
- **Ленивая загрузка (Lazy Loading)**: Модули могут загружаться по требованию, улучшая начальное время загрузки
- **Управление зависимостями**: Модули контролируют, какие компоненты и сервисы доступны для инъекции зависимостей
- **Оптимизация сборки**: Модули помогают инструментам сборки определить, какой код необходим для конкретной части приложения

#### Modern alternative: Standalone components (Angular)

Начиная с Angular 14, появилась возможность создавать standalone компоненты, которые не требуют объявления в NgModule.

```typescript
@Component({
  standalone: true,
  selector: "app-user-profile",
  imports: [CommonModule, RouterModule],
  template: `...`,
})
export class UserProfileComponent {}
```

Это более простой подход для небольших приложений, который постепенно становится предпочтительным способом организации кода в Angular.

### 4. What is inter-component communication in Angular? Describe different ways of sharing data between components

Межкомпонентное взаимодействие в Angular - это обмен данными между различными компонентами приложения. Существует несколько способов организации такого взаимодействия, каждый из которых имеет свои преимущества и сценарии использования.

#### 1. @Input/@Output decorators

Самый простой и распространенный способ передачи данных между родительским и дочерним компонентами.

#### Передача данных от родителя к ребенку через @Input

```typescript
// Дочерний компонент
@Component({
  selector: "app-child",
  template: "<p>{{ inputData }}</p>",
})
export class ChildComponent {
  @Input() inputData!: string;
}

// Родительский компонент
@Component({
  selector: "app-parent",
  template: `
    <app-child [inputData]="parentData"></app-child>
    <button (click)="updateData()">Обновить данные</button>
  `,
})
export class ParentComponent {
  parentData = "Данные от родителя";

  updateData() {
    this.parentData = "Обновленные данные " + Date.now();
  }
}
```

#### Передача данных от ребенка к родителю через @Output

```typescript
// Дочерний компонент
@Component({
  selector: "app-child",
  template: '<button (click)="sendMessage()">Отправить сообщение</button>',
})
export class ChildComponent {
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit("Сообщение от дочернего компонента");
  }
}

// Родительский компонент
@Component({
  selector: "app-parent",
  template: `
    <app-child (messageEvent)="handleMessage($event)"></app-child>
    <p *ngIf="message">{{ message }}</p>
  `,
})
export class ParentComponent {
  message: string | null = null;

  handleMessage(msg: string) {
    this.message = msg;
  }
}
```

#### 2. RxJS service for shared state

Использование сервиса с RxJS для обмена данными между любыми компонентами, даже не связанными напрямую.

```typescript
// Сервис
@Injectable({
  providedIn: "root",
})
export class DataService {
  private messageSource = new BehaviorSubject<string>("Начальное сообщение");
  currentMessage$ = this.messageSource.asObservable();

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}

// Компонент A
@Component({
  selector: "app-comp-a",
  template: `
    <p>{{ message }}</p>
    <button (click)="updateMessage()">Обновить сообщение</button>
  `,
})
export class CompAComponent implements OnInit {
  message: string = "";

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.currentMessage$.subscribe((msg) => (this.message = msg));
  }

  updateMessage() {
    this.dataService.changeMessage("Сообщение от компонента A");
  }
}

// Компонент B
@Component({
  selector: "app-comp-b",
  template: "<p>{{ message }}</p>",
})
export class CompBComponent implements OnInit {
  message: string = "";

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.currentMessage$.subscribe((msg) => (this.message = msg));
  }
}
```

#### 3. ViewChild/ContentChild

Прямой доступ родительского компонента к методам и свойствам дочернего компонента.

```typescript
// Дочерний компонент
@Component({
  selector: "app-child",
  template: "<p>Child Component</p>",
})
export class ChildComponent {
  childMethod() {
    return "Вызван метод дочернего компонента";
  }
}

// Родительский компонент
@Component({
  selector: "app-parent",
  template: `
    <app-child #childComp></app-child>
    <button (click)="callChildMethod()">Вызвать метод ребенка</button>
  `,
})
export class ParentComponent implements AfterViewInit {
  @ViewChild("childComp") childComponent!: ChildComponent;

  ngAfterViewInit() {
    // ViewChild доступен только после инициализации view
    console.log(this.childComponent);
  }

  callChildMethod() {
    const result = this.childComponent.childMethod();
    console.log(result);
  }
}
```

#### 4. Template variable

Создание ссылки на дочерний компонент прямо в шаблоне.

```typescript
@Component({
  selector: "app-parent",
  template: `
    <app-child #child></app-child>
    <button (click)="child.childMethod()">Вызвать метод через шаблонную переменную</button>
  `,
})
export class ParentComponent {}
```

#### 5. Signals (Angular 16+)

Сигналы представляют собой современный подход к реактивному программированию и управлению состоянием.

```typescript
// Дочерний компонент
@Component({
  selector: "app-child",
  template: "<p>{{ inputSignal() }}</p>",
})
export class ChildComponent {
  @Input() inputSignal = input<string>("Начальное значение");
}

// Родительский компонент
@Component({
  selector: "app-parent",
  template: '<app-child [inputSignal]="parentSignal()"></app-child>',
})
export class ParentComponent {
  parentSignal = signal("Значение от родителя");

  updateSignal() {
    this.parentSignal.set("Новое значение");
  }
}
```

#### 6. NgRx/State management

Для сложных приложений с множеством взаимодействующих компонентов можно использовать библиотеку управления состоянием, такую как NgRx.

```typescript
// Пример действия в NgRx
export const incrementCounter = createAction("[Counter] Increment");

// Пример редьюсера
export const counterReducer = createReducer(
  0,
  on(incrementCounter, (state) => state + 1)
);

// Компонент использующий NgRx
@Component({
  selector: "app-counter",
  template: `
    <p>Counter: {{ counter$ | async }}</p>
    <button (click)="increment()">Increment</button>
  `,
})
export class CounterComponent {
  counter$ = this.store.select((state) => state.counter);

  constructor(private store: Store<{ counter: number }>) {}

  increment() {
    this.store.dispatch(incrementCounter());
  }
}
```

#### Recommendations for choosing a method of interaction:

1. **@Input/@Output**: Для прямой передачи данных между родительским и дочерним компонентами
2. **Сервисы с RxJS**: Для обмена данными между компонентами в разных частях приложения
3. **ViewChild/ContentChild**: Когда родитель нуждается в прямом доступе к API дочернего компонента
4. **Шаблонные переменные**: Для простого доступа к дочерним компонентам непосредственно из шаблона
5. **Сигналы**: Современный подход для реактивного программирования в Angular 16+
6. **NgRx/Менеджеры состояний**: Для сложных приложений с множеством взаимосвязанных компонентов и состояний

Выбор метода зависит от конкретного сценария, сложности приложения и отношений между компонентами.

## Angular Components Concepts

### 1. What are `Components` in Angular, and how are they the foundation of an application structure?

Компоненты — это фундаментальные строительные блоки Angular-приложений. Они представляют собой самодостаточные, переиспользуемые части пользовательского интерфейса, каждая из которых управляет своим представлением и логикой.

#### Структура компонента

Компонент в Angular состоит из трех основных частей:

1. **Класс компонента** (TypeScript): содержит данные и логику
2. **Шаблон** (HTML): определяет пользовательский интерфейс
3. **Стили** (CSS/SCSS/Less): отвечают за визуальное оформление

```typescript
@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"],
})
export class UserProfileComponent {
  user = { name: "Алиса", age: 28 };

  updateUser() {
    // Логика обновления данных пользователя
  }
}
```

#### Древовидная структура приложения

Angular-приложения организованы в виде дерева компонентов:

- **Корневой компонент** (обычно AppComponent) является точкой входа
- **Дочерние компоненты** вложены внутрь родительских компонентов
- Каждый компонент инкапсулирует свою функциональность и данные

Примерная структура:

AppComponent
├── HeaderComponent
│ ├── LogoComponent
│ └── NavigationComponent
├── MainContentComponent
│ ├── SidebarComponent
│ └── ArticleListComponent
│ └── ArticleComponent (многократно)
└── FooterComponent

``

#### Преимущества компонентного подхода

1. **Модульность**: каждый компонент выполняет конкретную задачу
2. **Повторное использование**: компоненты можно использовать многократно
3. **Тестируемость**: изолированные компоненты легче тестировать
4. **Поддерживаемость**: разделение ответственности упрощает разработку
5. **Инкапсуляция**: компоненты скрывают свою внутреннюю реализацию

### 2. How do you configure a component's selector, template, and style using the `@Component` decorator?

Декоратор `@Component` используется для определения компонента в Angular и настройки его ключевых характеристик.

#### Основные параметры декоратора Component

```typescript
@Component({
  selector: 'app-example', // Определяет, как компонент будет использоваться в шаблоне
  templateUrl: './example.component.html', // Внешний шаблон (HTML)
  // или
  template: '<div>Содержимое</div>', // Встроенный шаблон
  styleUrls: ['./example.component.css'], // Внешние файлы стилей
  // или
  styles: ['.my-class { color: blue; }'], // Встроенные стили

  // Другие параметры
  encapsulation: ViewEncapsulation.Emulated, // Стратегия инкапсуляции стилей
  changeDetection: ChangeDetectionStrategy.OnPush, // Стратегия обнаружения изменений
  animations: [...], // Анимации
  providers: [...], // Провайдеры для инъекции зависимостей
})
export class ExampleComponent { }
```

#### Селектор компонента

Селектор определяет, как компонент будет использоваться в HTML-шаблонах. Существует три типа селекторов:

1. **Селектор по имени элемента**

   ```typescript
   selector: "app-example";
   ```

   Использование: `<app-example></app-example>`

2. **Селектор по классу**

   ```typescript
   selector: ".app-example";
   ```

   Использование: `<div class="app-example"></div>`

3. **Селектор по атрибуту**
   ```typescript
   selector: "[app-example]";
   ```
   Использование: `<div app-example></div>`

#### Шаблоны компонента

Существует два способа определения шаблона:

1. **Внешний шаблон** - хранится в отдельном файле

   ```typescript
   templateUrl: "./example.component.html";
   ```

2. **Встроенный шаблон** - определяется непосредственно в декораторе
   ```typescript
   template: `
     <div>
       <h1>{{ title }}</h1>
       <p>{{ description }}</p>
     </div>
   `;
   ```

#### Стили компонента

Аналогично шаблонам, стили можно определить двумя способами:

1. **Внешние файлы стилей**

   ```typescript
   styleUrls: ["./example.component.css", "./additional.css"];
   ```

2. **Встроенные стили**
   ```typescript
   styles: [
     `
     .title { font-weight: bold; }
     .description { color: gray; }
   `,
   ];
   ```

#### Инкапсуляция стилей

Параметр `encapsulation` определяет, как стили компонента применяются к HTML:

1. **ViewEncapsulation.Emulated** (по умолчанию) - эмулирует теневой DOM, добавляя уникальные атрибуты
2. **ViewEncapsulation.None** - стили применяются глобально без изоляции
3. **ViewEncapsulation.ShadowDom** - использует нативный Shadow DOM браузера (полная изоляция)

```typescript
@Component({
  selector: 'app-example',
  template: '...',
  styles: ['.title { color: red; }'],
  encapsulation: ViewEncapsulation.Emulated
})
```

### 3. How would you explain the component lifecycle and its main methods

Компоненты в Angular проходят через предсказуемый жизненный цикл, который управляется фреймворком. Angular предоставляет набор хуков жизненного цикла (lifecycle hooks), которые позволяют выполнять действия на разных этапах существования компонента.

#### Последовательность хуков жизненного цикла

1. **constructor()** - Вызывается при создании экземпляра компонента

   - Используется для внедрения зависимостей и базовой инициализации
   - Не место для тяжелой логики

2. **ngOnChanges()** - Вызывается при изменении входных свойств (@Input)

   - Срабатывает перед ngOnInit и каждый раз, когда изменяются входные данные
   - Получает объект SimpleChanges с предыдущими и текущими значениями

3. **ngOnInit()** - Вызывается один раз после первого ngOnChanges

   - Основное место для инициализации компонента, запроса данных и тяжелой логики
   - Компонент и его свойства уже инициализированы к этому моменту

4. **ngDoCheck()** - Вызывается при каждой проверке изменений

   - Используется для реализации собственной логики обнаружения изменений
   - Вызывается очень часто, поэтому важно оптимизировать код внутри

5. **ngAfterContentInit()** - Вызывается после инициализации проецируемого контента

   - Срабатывает, когда контент, проецируемый через ng-content, становится доступным

6. **ngAfterContentChecked()** - Вызывается после каждой проверки проецируемого контента

   - Вызывается при каждой проверке изменений после ngAfterContentInit

7. **ngAfterViewInit()** - Вызывается после инициализации представления

   - Срабатывает, когда представление компонента и дочерние представления полностью инициализированы
   - Здесь безопасно работать с DOM элементами компонента

8. **ngAfterViewChecked()** - Вызывается после каждой проверки представления

   - Вызывается после каждой проверки изменений в представлении и дочерних представлениях

9. **ngOnDestroy()** - Вызывается перед уничтожением компонента
   - Критически важен для очистки ресурсов: отписка от Observable, удаление обработчиков событий
   - Предотвращает утечки памяти

#### Пример использования хуков жизненного цикла

```typescript
@Component({
  selector: "app-lifecycle-demo",
  template: "<div>{{ data }}</div>",
})
export class LifecycleDemoComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() inputData: string;

  constructor() {
    console.log("Constructor called");
    // Внедрение зависимостей, простая инициализация
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called", changes);
    // Реакция на изменения входных свойств
  }

  ngOnInit() {
    console.log("ngOnInit called");
    // Инициализация, HTTP запросы, подписки
  }

  ngDoCheck() {
    console.log("ngDoCheck called");
    // Собственная логика обнаружения изменений
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit called");
    // Доступ к проецируемому контенту
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called");
    // Доступ к представлению, элементам DOM
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called");
    // Очистка ресурсов
  }
}
```

#### Лучшие практики использования хуков жизненного цикла

- **constructor**: Внедрение зависимостей, простая инициализация переменных
- **ngOnInit**: Сложная инициализация, HTTP запросы, подписки на Observable
- **ngOnChanges**: Реакция на изменения входных данных
- **ngOnDestroy**: Очистка ресурсов (отписки от Observable, освобождение памяти)
- Избегайте тяжелой логики в ngDoCheck, ngAfterViewChecked и ngAfterContentChecked (вызываются очень часто)

### 4. How does two-way data binding work in Angular, and how does it differ from one-way data binding?

Связывание данных (data binding) в Angular — это механизм, который позволяет синхронизировать данные между компонентом и его представлением (DOM). Angular поддерживает как одностороннее, так и двустороннее связывание данных.

#### Типы связывания данных в Angular

#### 1. Одностороннее связывание: компонент → шаблон

1. **Интерполяция** - связывает значение из компонента с текстовым содержимым элемента

   ```html
   <p>Имя: {{ name }}</p>
   ```

2. **Привязка свойств** - связывает свойство элемента с выражением в компоненте
   ```html
   <img [src]="imageUrl" /> <button [disabled]="isDisabled">Кнопка</button>
   ```

#### 2. Одностороннее связывание: шаблон → компонент

3. **Привязка событий** - вызывает метод в компоненте при возникновении события в DOM
   ```html
   <button (click)="onClick()">Кликни меня</button> <input (input)="onInput($event)" />
   ```

#### 3. Двустороннее связывание: компонент ↔ шаблон

4. **Двустороннее связывание** - комбинирует привязку свойства и обработку события
   ```html
   <input [(ngModel)]="name" />
   ```

#### Как работает двустороннее связывание

Двустороннее связывание `[(ngModel)]` на самом деле является сокращением для комбинации привязки свойства и обработки события:

```html
<!-- Полная форма двустороннего связывания -->
<input [ngModel]="name" (ngModelChange)="name = $event" />

<!-- Сокращенная форма -->
<input [(ngModel)]="name" />
```

Что происходит:

1. `[ngModel]="name"` - значение свойства `name` из компонента устанавливается как значение поля ввода
2. `(ngModelChange)="name = $event"` - при изменении значения в поле ввода, событие `ngModelChange` обновляет свойство `name` в компоненте
3. Когда свойство `name` обновляется, Angular обнаруживает изменение и обновляет DOM

#### Отличия между односторонним и двусторонним связыванием

| Характеристика     | Одностороннее связывание                                               | Двустороннее связывание                                  |
| ------------------ | ---------------------------------------------------------------------- | -------------------------------------------------------- |
| Направление данных | Только в одном направлении (компонент → шаблон или шаблон → компонент) | В обоих направлениях (компонент ↔ шаблон)                |
| Производительность | Более эффективное, меньше накладных расходов                           | Может быть менее эффективным при частых изменениях       |
| Использование      | Для отображения данных или обработки событий                           | Для форм ввода и элементов управления                    |
| Предсказуемость    | Более предсказуемый поток данных                                       | Менее очевидный поток данных при сложных взаимодействиях |
| Поддержка          | Встроена в Angular, не требует дополнительных модулей                  | Для `ngModel` требуется импорт FormsModule               |

#### Создание пользовательского двустороннего связывания

Для создания собственного двустороннего связывания в компоненте, необходимо:

1. Создать свойство с декоратором `@Input()`
2. Создать `EventEmitter` с тем же именем и суффиксом `Change` с декоратором `@Output()`

```typescript
@Component({
  selector: "app-counter",
  template: `
    <div>
      <button (click)="decrement()">-</button>
      {{ value }}
      <button (click)="increment()">+</button>
    </div>
  `,
})
export class CounterComponent {
  @Input() value: number = 0;
  @Output() valueChange = new EventEmitter<number>();

  increment() {
    this.value++;
    this.valueChange.emit(this.value);
  }

  decrement() {
    this.value--;
    this.valueChange.emit(this.value);
  }
}
```

Использование компонента с двусторонним связыванием:

```html
<app-counter [(value)]="counterValue"></app-counter>
<p>Значение счетчика: {{ counterValue }}</p>
```

### 5. Standalone components

Standalone компоненты, появившиеся в Angular 14, представляют собой компоненты, которые могут функционировать без объявления в NgModule. Они упрощают структуру приложения и уменьшают необходимость в NgModule для простых сценариев.

#### Создание standalone компонента

```typescript
@Component({
  selector: "app-standalone",
  standalone: true, // Указывает, что компонент является автономным
  imports: [CommonModule, RouterModule], // Импорт необходимых зависимостей
  template: `
    <h1>{{ title }}</h1>
    <p>Это автономный компонент</p>
    <router-outlet></router-outlet>
  `,
})
export class StandaloneComponent {
  title = "Standalone Component";
}
```

#### Основные особенности standalone компонентов

1. **Прямой импорт зависимостей** - компонент сам импортирует всё, что ему нужно
2. **Отсутствие NgModule** - не требуется объявлять компонент в NgModule
3. **Самодостаточность** - компонент содержит всю информацию о своих зависимостях
4. **Упрощенное использование** - меньше бойлерплейт-кода для простых компонентов
5. **Прямой импорт в другие компоненты** - standalone компонент можно импортировать напрямую

#### Импорт standalone компонентов

Standalone компоненты можно импортировать в:

1. **Другие standalone компоненты**:

   ```typescript
   @Component({
     standalone: true,
     imports: [CommonModule, StandaloneComponent],
     // ...
   })
   ```

2. **NgModule**:
   ```typescript
   @NgModule({
     imports: [CommonModule, StandaloneComponent],
     // ...
   })
   ```

#### Преимущества standalone компонентов

- **Упрощение организации кода** - меньше NgModules означает меньше complexity
- **Более понятные зависимости** - все зависимости указаны прямо в компоненте
- **Легче создавать библиотеки** - проще публиковать отдельные компоненты как библиотеки
- **Удобнее для тестирования** - не нужно создавать тестовые модули

### 6. What are ViewChild and ViewChildren?

`ViewChild` и `ViewChildren` - это декораторы в Angular, которые предоставляют возможность доступа к дочерним элементам (DOM элементы или компоненты) из класса компонента.

#### ViewChild

`ViewChild` позволяет получить ссылку на первый элемент или директиву (компонент), которая соответствует селектору.

```typescript
@Component({
  selector: "app-parent",
  template: `
    <div #content>Контент</div>
    <app-child #childComp></app-child>
    <button (click)="accessChild()">Доступ к дочернему элементу</button>
  `,
})
export class ParentComponent implements AfterViewInit {
  // Доступ к DOM элементу
  @ViewChild("content") contentElement: ElementRef;

  // Доступ к компоненту
  @ViewChild("childComp") childComponent: ChildComponent;

  // Доступ к компоненту по типу (без ссылки в шаблоне)
  @ViewChild(ChildComponent) childComponentByType: ChildComponent;

  ngAfterViewInit() {
    // Доступ к DOM элементу
    console.log(this.contentElement.nativeElement.textContent);

    // Доступ к свойствам и методам дочернего компонента
    console.log(this.childComponent.data);
    this.childComponent.someMethod();
  }

  accessChild() {
    this.childComponent.doSomething();
  }
}
```

#### ViewChildren

`ViewChildren` возвращает `QueryList` со всеми элементами или директивами, соответствующими селектору.

```typescript
@Component({
  selector: "app-parent",
  template: `
    <app-child *ngFor="let item of items" #childrenList [data]="item"></app-child>
    <button (click)="notifyAllChildren()">Уведомить всех</button>
  `,
})
export class ParentComponent implements AfterViewInit {
  items = [1, 2, 3, 4, 5];

  @ViewChildren("childrenList") childrenComponents: QueryList<ChildComponent>;

  ngAfterViewInit() {
    // QueryList имеет методы для работы с коллекцией
    console.log("Количество дочерних компонентов:", this.childrenComponents.length);

    // Перебор всех дочерних компонентов
    this.childrenComponents.forEach((child, index) => {
      console.log(`Дочерний компонент ${index}:`, child.data);
    });

    // QueryList является наблюдаемым - вы можете подписаться на изменения
    this.childrenComponents.changes.subscribe((list) => {
      console.log("Список дочерних компонентов изменился", list);
    });
  }

  notifyAllChildren() {
    this.childrenComponents.forEach((child) => child.notify());
  }
}
```

#### Опции для ViewChild и ViewChildren

Оба декоратора принимают объект опций в качестве второго параметра:

```typescript
@ViewChild('contentElement', {
  static: false, // true - доступ до AfterViewInit, false - после (по умолчанию)
  read: ElementRef // какой тип ссылки получить (ElementRef, ViewContainerRef, Component и т.д.)
}) content: ElementRef;
```

#### Важные особенности

1. **Время доступности**:

   - Для `static: false` (по умолчанию): доступны после `ngAfterViewInit()`
   - Для `static: true`: доступны уже в `ngOnInit()`

2. **Изменения в QueryList**:

   - Если коллекция дочерних элементов меняется, `QueryList.changes` сообщит об этом

3. **Доступ к нативным элементам**:
   - `@ViewChild('elem') elem: ElementRef` - требуется использовать `elem.nativeElement` для доступа к DOM
   - При использовании `elem.nativeElement` нет проверки типов, будьте осторожны

### 7. What is the difference between ElementRef and Renderer2?

`ElementRef` и `Renderer2` — это две важных абстракции в Angular для работы с DOM. Они имеют разные цели и подходы к манипуляции DOM-элементами.

#### ElementRef

`ElementRef` предоставляет прямой доступ к нативному DOM-элементу через свойство `nativeElement`.

```typescript
@Component({
  selector: "app-direct-dom",
  template: "<div #myElement>Текст</div>",
})
export class DirectDomComponent implements AfterViewInit {
  @ViewChild("myElement") element: ElementRef;

  ngAfterViewInit() {
    // Прямое изменение DOM (не рекомендуется)
    this.element.nativeElement.style.backgroundColor = "red";
    this.element.nativeElement.textContent = "Изменено напрямую";
  }
}
```

**Особенности ElementRef**:

- Предоставляет **прямой доступ** к DOM-элементу
- **Не является** кросс-платформенным (не работает на платформах без DOM)
- **Потенциально опасен** для безопасности (XSS-уязвимости)
- **Простой** в использовании, но не рекомендуется для прямых манипуляций

#### Renderer2

`Renderer2` предоставляет абстракцию для манипуляций с DOM, обеспечивая кросс-платформенный и безопасный подход.

```typescript
@Component({
  selector: "app-renderer-dom",
  template: "<div #renderedElement>Текст</div>",
})
export class RendererDomComponent implements AfterViewInit {
  @ViewChild("renderedElement") element: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    // Безопасное изменение DOM через Renderer2
    this.renderer.setStyle(this.element.nativeElement, "background-color", "blue");
    this.renderer.setText(this.element.nativeElement, "Изменено через Renderer");

    // Создание нового элемента
    const newElement = this.renderer.createElement("span");
    const text = this.renderer.createText("Новый элемент");
    this.renderer.appendChild(newElement, text);
    this.renderer.appendChild(this.element.nativeElement, newElement);

    // Добавление класса
    this.renderer.addClass(this.element.nativeElement, "highlight");

    // Добавление обработчика события
    this.renderer.listen(this.element.nativeElement, "click", () => {
      console.log("Элемент кликнут");
    });
  }
}
```

**Особенности Renderer2**:

- Предоставляет **абстракцию** над DOM-операциями
- **Кросс-платформенный**: работает на всех платформах (браузер, сервер, воркеры)
- **Безопасный**: снижает риск XSS-атак
- **Имеет расширенный API** для работы с элементами, атрибутами, классами и событиями

#### Сравнение ElementRef и Renderer2

| Характеристика         | ElementRef                              | Renderer2                               |
| ---------------------- | --------------------------------------- | --------------------------------------- |
| Доступ к DOM           | Прямой доступ                           | Опосредованный через абстракцию         |
| Кросс-платформенность  | Ограничен браузером                     | Работает на всех платформах             |
| Безопасность           | Менее безопасный                        | Более безопасный                        |
| Производительность     | Потенциально быстрее                    | Может иметь небольшие накладные расходы |
| Простота использования | Очень прост                             | Требует больше кода                     |
| Рекомендуется Angular  | Не рекомендуется для прямых манипуляций | Рекомендуется для всех DOM-манипуляций  |

#### Когда использовать каждый из них?

- **ElementRef**:

  - Для чтения значений элементов без изменения их
  - Когда нужен доступ к нативным свойствам элемента для интеграции с внешними библиотеками
  - В комбинации с Renderer2 для ссылки на элемент

- **Renderer2**:
  - Для всех манипуляций с DOM (изменение стилей, классов, атрибутов)
  - Для создания, удаления, перемещения элементов
  - Для обработки событий
  - Для кросс-платформенных приложений (особенно с SSR - Server-Side Rendering)

### 8. How do HostBinding and HostListener decorators work?

Декораторы `@HostBinding` и `@HostListener` в Angular позволяют взаимодействовать с элементом-хостом компонента или директивы (элементом, к которому они применяются).

#### HostBinding

`@HostBinding` привязывает свойство хост-элемента к свойству компонента или директивы. Это позволяет динамически изменять атрибуты, свойства, классы и стили хост-элемента.

```typescript
@Component({
  selector: "app-host-binding-demo",
  template: `
    <p>Наведите курсор на компонент</p>
    <button (click)="toggleActive()">Переключить активное состояние</button>
  `,
  styles: [":host { display: block; padding: 10px; }"],
})
export class HostBindingDemoComponent {
  // Привязка к атрибуту
  @HostBinding("attr.role") hostRole = "button";

  // Привязка к свойству
  @HostBinding("title") hostTitle = "Это подсказка";

  // Привязка к классу
  @HostBinding("class.active") isActive = false;

  // Привязка к стилю
  @HostBinding("style.cursor") hostCursor = "pointer";

  // Привязка к сложному стилю
  @HostBinding("style.backgroundColor") hostBgColor = "white";

  toggleActive() {
    this.isActive = !this.isActive;
    this.hostBgColor = this.isActive ? "lightblue" : "white";
  }
}
```

#### HostListener

`@HostListener` добавляет прослушиватель событий к хост-элементу компонента или директивы. Это позволяет реагировать на события DOM, происходящие на хост-элементе или глобальных объектах.

```typescript
@Component({
  selector: "app-host-listener-demo",
  template: `<p>Взаимодействуйте с компонентом</p>`,
  styles: [":host { display: block; padding: 15px; border: 1px solid #ccc; }"],
})
export class HostListenerDemoComponent {
  // Прослушивание события на хост-элементе
  @HostListener("click")
  onClick() {
    console.log("Компонент был кликнут");
  }

  // Прослушивание события с данными события
  @HostListener("mouseenter", ["$event"])
  onMouseEnter(event: MouseEvent) {
    console.log("Курсор навели на компонент", event);
  }

  // Прослушивание глобальных событий (window)
  @HostListener("window:resize", ["$event"])
  onResize(event: Event) {
    console.log("Окно изменило размер", event);
  }

  // Прослушивание глобальных событий (document)
  @HostListener("document:keydown", ["$event"])
  onKeyDown(event: KeyboardEvent) {
    console.log("Нажата клавиша", event.key);
  }
}
```

#### Практические примеры комбинирования HostBinding и HostListener

#### Пример 1: Интерактивная кнопка

```typescript
@Component({
  selector: "app-interactive-button",
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: inline-block;
        padding: 10px 15px;
        border-radius: 4px;
        transition: all 0.3s;
      }
    `,
  ],
})
export class InteractiveButtonComponent {
  @HostBinding("style.backgroundColor") bgColor = "#3f51b5";
  @HostBinding("style.color") textColor = "white";
  @HostBinding("style.transform") transform = "scale(1)";

  @HostListener("mouseenter")
  onMouseEnter() {
    this.bgColor = "#303f9f";
    this.transform = "scale(1.05)";
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.bgColor = "#3f51b5";
    this.transform = "scale(1)";
  }

  @HostListener("click")
  onClick() {
    this.bgColor = "#1a237e";
    setTimeout(() => {
      this.bgColor = "#3f51b5";
    }, 200);
  }
}
```

#### Пример 2: Директива для валидации ввода

```typescript
@Directive({
  selector: "[appNumberOnly]",
})
export class NumberOnlyDirective {
  @HostBinding("style.borderColor") borderColor = "initial";

  @HostListener("input", ["$event"])
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    // Разрешаем только цифры
    const newValue = value.replace(/[^0-9]/g, "");

    // Если значение изменилось, обновляем поле ввода
    if (value !== newValue) {
      input.value = newValue;
      // Создаем собственное событие input для триггера ngModel
      const customEvent = new Event("input", { bubbles: true });
      input.dispatchEvent(customEvent);

      this.borderColor = "red";
      setTimeout(() => {
        this.borderColor = "initial";
      }, 500);
    }
  }
}
```

#### Преимущества использования HostBinding и HostListener

1. **Декларативный подход** - код становится более читаемым и понятным
2. **Инкапсуляция** - взаимодействие с DOM остается внутри компонента/директивы
3. **Типобезопасность** - TypeScript обеспечивает строгую типизацию
4. **Кросс-платформенность** - в отличие от прямого доступа к DOM, работает на всех платформах
5. **Удобство тестирования** - легче создавать модульные тесты

### 9. What is the change detection mechanism in Angular, and how do the Default and OnPush strategies differ? When is it better to use each one?

Обнаружение изменений (Change Detection) в Angular — это процесс, который определяет, когда модель данных изменилась и DOM нужно обновить. Angular следит за изменениями в компонентах и автоматически обновляет DOM для отражения этих изменений.

#### Как работает обнаружение изменений

1. Angular создает дерево обнаружения изменений, соответствующее дереву компонентов
2. Когда происходит асинхронное событие, Angular запускает цикл обнаружения изменений
3. Angular проверяет каждый компонент на наличие изменений
4. Если изменения обнаружены, Angular обновляет DOM соответственно

#### Источники (триггеры) обнаружения изменений

Обнаружение изменений запускается следующими событиями:

- События DOM (`click`, `submit`, и т.д.)
- AJAX запросы (HTTP)
- Таймеры (`setTimeout`, `setInterval`)
- Промисы и их разрешения
- Наблюдаемые объекты (Observables) и их эмиссии

#### Стратегии обнаружения изменений

Angular предлагает две стратегии обнаружения изменений, которые определяют, когда и как компонент будет проверяться на наличие изменений.

#### 1. Default (ChangeDetectionStrategy.Default)

```typescript
@Component({
  selector: "app-default-strategy",
  template: "...",
  changeDetection: ChangeDetectionStrategy.Default, // По умолчанию
})
export class DefaultStrategyComponent {}
```

**Характеристики Default стратегии**:

- **Проверяет все**: Angular проверяет все компоненты в дереве сверху вниз при каждом событии
- **Надежно**: Обнаруживает все типы изменений, включая мутацию объектов и массивов
- **Менее производительно**: Требует больше ресурсов, особенно в крупных приложениях
- **Простота использования**: Не требует особого внимания со стороны разработчика

#### 2. OnPush (ChangeDetectionStrategy.OnPush)

```typescript
@Component({
  selector: "app-on-push-strategy",
  template: "...",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnPushStrategyComponent {}
```

**Характеристики OnPush стратегии**:

- **Ограниченные проверки**: Проверяет компонент только когда:
  - Изменяются входные свойства (@Input) по ссылке (не по значению)
  - Происходит событие в самом компоненте или его дочерних элементах
  - Явно вызывается обнаружение изменений
  - Срабатывает async pipe в шаблоне
- **Более производительно**: Снижает количество проверок и повышает производительность
- **Требует внимания**: Необходим иммутабельный подход к данным и понимание жизненного цикла
- **Предсказуемость**: Более предсказуемое поведение обнаружения изменений

#### Сравнение стратегий

| Аспект                       | Default            | OnPush             |
| ---------------------------- | ------------------ | ------------------ |
| Производительность           | Ниже               | Выше               |
| Простота использования       | Проще              | Сложнее            |
| Обнаружение мутаций объектов | Автоматически      | Не обнаруживает    |
| Предсказуемость              | Менее предсказуемо | Более предсказуемо |
| Контроль                     | Меньше контроля    | Больше контроля    |

#### Ручное управление обнаружением изменений

Для работы с OnPush стратегией часто требуется ручное управление обнаружением изменений через `ChangeDetectorRef`:

```typescript
@Component({
  selector: "app-optimized",
  template: `<div>{{ data.value }}</div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptimizedComponent {
  data = { value: "initial" };

  constructor(private cd: ChangeDetectorRef) {}

  updateData() {
    // Мутация объекта НЕ вызовет обновления с OnPush
    this.data.value = "updated";

    // Необходимо явно запустить обнаружение изменений
    this.cd.markForCheck(); // Помечает компонент и его предков для проверки
    // или
    this.cd.detectChanges(); // Немедленно запускает проверку для этого компонента и его потомков
  }

  detach() {
    // Отключает обнаружение изменений для этого компонента
    this.cd.detach();
  }

  reattach() {
    // Включает обнаружение изменений для этого компонента
    this.cd.reattach();
  }
}
```

#### Лучшие практики работы с OnPush

1. **Используйте иммутабельный подход**: создавайте новые объекты вместо мутации существующих

   ```typescript
   // Плохо (не вызовет обновление с OnPush)
   this.user.name = "Новое имя";

   // Хорошо (вызовет обновление с OnPush)
   this.user = { ...this.user, name: "Новое имя" };
   ```

2. **Используйте async pipe в шаблонах**

   ```html
   <div>{{ data$ | async }}</div>
   ```

3. **Оптимизируйте рендеринг списков**
   ```html
   <div *ngFor="let item of items; trackBy: trackByFn">{{ item.name }}</div>
   ```
   ```typescript
   trackByFn(index, item) {
     return item.id; // Используйте уникальные идентификаторы
   }
   ```

#### Когда использовать каждую стратегию

**Default (по умолчанию)**:

- Небольшие приложения с простой структурой
- Начальная разработка, когда производительность не критична
- Прототипирование
- Когда часто мутируются объекты и массивы
- Когда стабильность важнее производительности

**OnPush**:

- Крупные приложения с глубоким деревом компонентов
- Компоненты, которые часто отображаются (например, элементы списка)
- Компоненты с тяжелыми вычислениями или сложным DOM
- Когда используются иммутабельные структуры данных
- Компоненты, данные которых редко меняются

### 10. How do you handle dynamic components?

Динамические компоненты — это компоненты, которые создаются и уничтожаются программно во время выполнения приложения, а не декларативно в шаблоне. Они особенно полезны для модальных окон, всплывающих подсказок, динамических форм и других элементов, которые нужно создавать по требованию.

#### Современный подход с ViewContainerRef (Angular 13+)

С Angular 13+ процесс создания динамических компонентов был упрощен:

```typescript
@Component({
  selector: "app-dynamic-host",
  template: "<ng-container #container></ng-container>",
})
export class DynamicHostComponent implements AfterViewInit {
  @ViewChild("container", { read: ViewContainerRef }) container!: ViewContainerRef;

  createDynamicComponent() {
    // Создание компонента
    const componentRef = this.container.createComponent(DynamicComponent);

    // Доступ к экземпляру и его свойствам
    componentRef.instance.data = "Данные для динамического компонента";
    componentRef.instance.config = { showHeader: true };

    // С Angular 14+ можно использовать setInput
    componentRef.setInput("title", "Динамический заголовок");

    // Подписка на события компонента
    componentRef.instance.close.subscribe(() => {
      // Удаление компонента
      componentRef.destroy();
    });

    return componentRef;
  }
}
```

#### Подход с NgComponentOutlet (декларативный)

Для более простых случаев можно использовать директиву в шаблоне:

```typescript
@Component({
  selector: "app-dynamic-outlet",
  template: `
    <ng-container *ngComponentOutlet="currentComponent; inputs: componentInputs"> </ng-container>
    <button (click)="toggleComponent()">Переключить компонент</button>
  `,
})
export class DynamicOutletComponent {
  currentComponent: any = ComponentA;
  componentInputs = { message: "Привет из родителя", data: [1, 2, 3] };

  toggleComponent() {
    this.currentComponent = this.currentComponent === ComponentA ? ComponentB : ComponentA;
    this.componentInputs = {
      message: "Компонент переключен",
      data: [4, 5, 6],
    };
  }
}
```

#### Передача данных в динамические компоненты

Существует несколько способов передачи данных в динамические компоненты:

#### 1. Через свойства экземпляра

```typescript
const componentRef = this.container.createComponent(DynamicComponent);
componentRef.instance.data = "Значение свойства";
componentRef.instance.config = { title: "Заголовок", showClose: true };
```

#### 2. Через Input-ы (Angular 14+)

```typescript
const componentRef = this.container.createComponent(DynamicComponent);
componentRef.setInput("data", "Значение input-свойства");
componentRef.setInput("config", { title: "Заголовок", showClose: true });
```

#### 3. Через сервисы

```typescript
@Injectable()
export class SharedDataService {
  private dataSubject = new BehaviorSubject<any>(null);
  data$ = this.dataSubject.asObservable();

  setData(data: any) {
    this.dataSubject.next(data);
  }
}

// В компоненте-создателе
this.sharedDataService.setData({ message: 'Данные для динамического компонента' });

// В динамическом компоненте
constructor(private sharedDataService: SharedDataService) {
  this.sharedDataService.data$.subscribe(data => {
    if (data) this.processData(data);
  });
}
```

#### Обработка событий из динамических компонентов

#### 1. Через Output-ы

```typescript
// Определение динамического компонента
@Component({
  selector: "app-dynamic",
  template: `
    <div>
      <h3>{{ title }}</h3>
      <button (click)="onClose.emit('Закрыто')">Закрыть</button>
    </div>
  `,
})
export class DynamicComponent {
  @Input() title: string = "Динамический компонент";
  @Output() onClose = new EventEmitter<string>();
}

// Обработка события при создании
const componentRef = this.container.createComponent(DynamicComponent);
componentRef.instance.onClose.subscribe((data: string) => {
  console.log("Получено событие:", data);
  componentRef.destroy(); // Удаление компонента
});
```

#### Управление жизненным циклом динамических компонентов

```typescript
// Создание
const componentRef = this.container.createComponent(DynamicComponent);

// Отслеживание ссылки для последующего использования
this.activeComponents.push(componentRef);

// Проверка на уничтожение
const isDestroyed = componentRef.hostView.destroyed;

// Уничтожение при необходимости
componentRef.destroy();

// Очистка всех компонентов в контейнере
this.container.clear();
```

#### Практический пример: Модальное окно

```typescript
// Компонент модального окна
@Component({
  selector: "app-modal",
  template: `
    <div class="modal-backdrop" (click)="close()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h2>{{ title }}</h2>
          <button class="close-btn" (click)="close()">&times;</button>
        </div>
        <div class="modal-body">
          {{ content }}
        </div>
        <div class="modal-footer">
          <button (click)="onAction.emit(true)">Подтвердить</button>
          <button (click)="close()">Отмена</button>
        </div>
      </div>
    </div>
  `,
  styles: [
    /* стили модального окна */
  ],
})
export class ModalComponent {
  @Input() title: string = "Модальное окно";
  @Input() content: string = "";
  @Output() onClose = new EventEmitter<void>();
  @Output() onAction = new EventEmitter<boolean>();

  close() {
    this.onClose.emit();
  }
}

// Сервис для управления модальными окнами
@Injectable({
  providedIn: "root",
})
export class ModalService {
  private modalContainer: ViewContainerRef | null = null;
  private activeModal: ComponentRef<ModalComponent> | null = null;

  setContainer(container: ViewContainerRef) {
    this.modalContainer = container;
  }

  openModal(title: string, content: string): Observable<boolean> {
    if (!this.modalContainer) {
      throw new Error("Modal container is not set");
    }

    // Создаем модальное окно
    const modalRef = this.modalContainer.createComponent(ModalComponent);
    modalRef.instance.title = title;
    modalRef.instance.content = content;

    // Сохраняем ссылку
    this.activeModal = modalRef;

    // Создаем Subject для возврата результата
    const resultSubject = new Subject<boolean>();

    // Подписываемся на события
    const closeSub = modalRef.instance.onClose.subscribe(() => {
      resultSubject.next(false);
      resultSubject.complete();
      this.closeModal();
    });

    const actionSub = modalRef.instance.onAction.subscribe((result) => {
      resultSubject.next(result);
      resultSubject.complete();
      this.closeModal();
    });

    // Возвращаем Observable результата
    return resultSubject.asObservable();
  }

  closeModal() {
    if (this.activeModal) {
      this.activeModal.destroy();
      this.activeModal = null;
    }
  }
}

// Использование сервиса
@Component({
  selector: "app-root",
  template: `
    <button (click)="showModal()">Открыть модальное окно</button>
    <ng-container #modalContainer></ng-container>
  `,
})
export class AppComponent implements AfterViewInit {
  @ViewChild("modalContainer", { read: ViewContainerRef })
  modalContainer!: ViewContainerRef;

  constructor(private modalService: ModalService) {}

  ngAfterViewInit() {
    this.modalService.setContainer(this.modalContainer);
  }

  showModal() {
    this.modalService.openModal("Подтверждение", "Вы уверены, что хотите продолжить?").subscribe((result) => {
      if (result) {
        console.log("Действие подтверждено");
      } else {
        console.log("Действие отменено");
      }
    });
  }
}
```

#### Преимущества использования динамических компонентов

1. **Гибкость UI**: возможность адаптировать интерфейс в зависимости от действий пользователя
2. **Эффективное использование ресурсов**: создание компонентов только когда они нужны
3. **Модульность**: изолированные компоненты с четкими границами ответственности
4. **Переиспользуемость**: динамические компоненты легко переиспользовать в разных частях приложения
5. **Разделение ответственности**: логика создания компонентов может быть вынесена в сервисы

```
