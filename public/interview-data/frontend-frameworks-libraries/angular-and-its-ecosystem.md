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


## Angular Directives Concepts

### 1. What are `Directives` in Angular, and what are they used for?

Директивы в Angular — это классы, которые добавляют дополнительное поведение DOM-элементам. Они позволяют расширять и изменять HTML-элементы, их атрибуты и поведение.

#### Назначение директив

Директивы позволяют:

- Манипулировать DOM-структурой (добавлять/удалять элементы)
- Изменять внешний вид элементов
- Изменять поведение элементов
- Повторно использовать логику без дублирования кода
- Создавать абстракции высокого уровня, скрывающие сложность

#### Типы директив в Angular

1. **Компонентные директивы** — специальный тип директив с шаблоном

   - Компоненты (`@Component`) технически являются директивами с шаблоном
   - Имеют собственный HTML и поведение

2. **Структурные директивы** — изменяют структуру DOM

   - Добавляют или удаляют элементы
   - Обозначаются символом `*` перед названием
   - Примеры: `*ngIf`, `*ngFor`, `*ngSwitch`

3. **Атрибутные директивы** — изменяют внешний вид или поведение элемента
   - Изменяют класс элемента, стили, атрибуты
   - Используются как обычные атрибуты HTML
   - Примеры: `ngClass`, `ngStyle`, `ngModel`

#### Встроенные директивы Angular

Angular предоставляет набор встроенных директив:

**Структурные:**

- `*ngIf` — условное отображение элемента
- `*ngFor` — создание элементов на основе коллекции
- `*ngSwitch` — условное отображение на основе выражения

**Атрибутные:**

- `ngClass` — динамическое добавление/удаление CSS-классов
- `ngStyle` — динамическое изменение стилей
- `ngModel` — двустороннее связывание данных (для форм)

### 2. What is the difference between structural and attribute directives? Please provide examples.

#### Структурные директивы

**Определение**:
Структурные директивы изменяют структуру DOM, добавляя, удаляя или модифицируя элементы.

**Ключевые особенности**:

- Обозначаются префиксом `*` (например, `*ngIf`)
- Могут добавлять или удалять элементы из DOM
- Работают с шаблонами (`<ng-template>`)
- Могут использовать микросинтаксис (например, `let item of items`)

**Примеры структурных директив**:

1. **ngIf** — условное отображение элемента:

   ```html
   <div *ngIf="isVisible">Этот элемент будет отображен только если isVisible == true</div>
   ```

2. **ngFor** — создание элементов на основе коллекции:

   ```html
   <ul>
     <li *ngFor="let item of items; let i = index">{{ i }}: {{ item.name }}</li>
   </ul>
   ```

3. **ngSwitch** — условное отображение на основе выражения:
   ```html
   <div [ngSwitch]="status">
     <div *ngSwitchCase="'success'">Успешно!</div>
     <div *ngSwitchCase="'error'">Ошибка!</div>
     <div *ngSwitchDefault>Загрузка...</div>
   </div>
   ```

#### Атрибутные директивы

**Определение**:
Атрибутные директивы изменяют внешний вид или поведение существующего элемента.

**Ключевые особенности**:

- Используются как атрибуты HTML (без префикса `*`)
- Не добавляют и не удаляют элементы из DOM
- Изменяют свойства элемента, к которому применяются
- Могут использовать привязку данных (например, `[ngClass]="expression"`)

**Примеры атрибутных директив**:

1. **ngClass** — динамическое управление CSS-классами:

   ```html
   <div [ngClass]="{'active': isActive, 'disabled': isDisabled}">Классы зависят от состояния</div>
   ```

2. **ngStyle** — динамическое управление CSS-стилями:

   ```html
   <div [ngStyle]="{'color': textColor, 'font-size': fontSize + 'px'}">Стилизованный текст</div>
   ```

3. **ngModel** — двустороннее связывание данных (для форм):
   ```html
   <input [(ngModel)]="name" placeholder="Введите имя" />
   <p>Привет, {{ name }}!</p>
   ```

#### Сравнительная таблица

| Характеристика | Структурные директивы            | Атрибутные директивы              |
| -------------- | -------------------------------- | --------------------------------- |
| Синтаксис      | Используют префикс `*`           | Используются как обычные атрибуты |
| Влияние на DOM | Добавляют, удаляют элементы      | Изменяют существующие элементы    |
| Шаблон         | Работают с `<ng-template>`       | Не используют шаблоны             |
| Примеры        | `*ngIf`, `*ngFor`, `*ngSwitch`   | `ngClass`, `ngStyle`, `ngModel`   |
| Создание       | Требуют реализации `TemplateRef` | Реализуются проще                 |

### 3. How do you create and use a custom directive? Explain the use of the `@Directive` decorator.

Создание собственных директив позволяет расширить функциональность HTML-элементов и повторно использовать бизнес-логику в приложении.

#### Создание атрибутной директивы

#### 1. Базовая структура

```typescript
import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appHighlight]", // Селектор директивы в квадратных скобках для атрибутной директивы
})
export class HighlightDirective {
  @Input() highlightColor: string = "yellow"; // Входной параметр

  constructor(private el: ElementRef) {}

  @HostListener("mouseenter") onMouseEnter() {
    this.highlight(this.highlightColor);
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
```

#### 2. Регистрация директивы

Если вы используете NgModule:

```typescript
@NgModule({
  declarations: [HighlightDirective],
  // ...
})
export class AppModule {}
```

Для standalone-подхода:

```typescript
@Component({
  standalone: true,
  imports: [CommonModule, HighlightDirective],
  // ...
})
```

#### 3. Использование директивы

```html
<!-- Базовое использование -->
<p appHighlight>Наведите курсор на этот текст</p>

<!-- С параметром -->
<p appHighlight highlightColor="lightblue">Текст с другим цветом подсветки</p>

<!-- С динамическим параметром -->
<p [appHighlight]="true" [highlightColor]="color">Динамический цвет подсветки</p>
```

#### Создание структурной директивы

#### 1. Базовая структура

```typescript
import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appUnless]", // Селектор для структурной директивы
})
export class UnlessDirective {
  private hasView = false;

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

  @Input() set appUnless(condition: boolean) {
    // Противоположная логика ngIf
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
```

#### 2. Использование структурной директивы

```html
<div *appUnless="condition">Этот блок отображается, когда condition равно false</div>
```

#### Декоратор `@Directive`

Декоратор `@Directive` содержит метаданные для класса директивы:

```typescript
@Directive({
  selector: '[appDirective]', // CSS-селектор, определяющий, где применяется директива
  standalone: true,           // Для standalone-директив (Angular 14+)
  providers: [...],           // Зависимости, доступные только в этой директиве
  host: {                     // Альтернатива @HostBinding и @HostListener
    '(click)': 'onClick()',
    '[class.active]': 'isActive'
  },
  exportAs: 'exportName'      // Имя, которое можно использовать с #var="exportName"
})
```

#### Ключевые параметры декоратора `@Directive`

1. **selector** (обязательный) — CSS-селектор, определяющий, к каким элементам применяется директива:

   - `'[appDirective]'` — как атрибут (атрибутная директива)
   - `'.app-directive'` — как класс
   - `'app-directive'` — как элемент (редко используется для директив)

2. **standalone** (опциональный) — делает директиву независимой от NgModule (с Angular 14+)
3. **providers** (опциональный) — массив провайдеров, доступных только внутри директивы

4. **host** (опциональный) — объект, определяющий привязки к событиям и свойствам хост-элемента

5. **exportAs** (опциональный) — имя, с которым директива может быть доступна через шаблонную переменную

#### Дополнительные возможности директив

#### Инъекция зависимостей

Директивы могут получать любые зависимости через конструктор:

```typescript
@Directive({
  selector: "[appLogger]",
})
export class LoggerDirective {
  constructor(private el: ElementRef, private renderer: Renderer2, private loggingService: LoggingService) {
    this.loggingService.log("Директива создана");
  }
}
```

#### Доступ к содержимому компонента

```typescript
@Directive({
  selector: "[appContentAccess]",
})
export class ContentAccessDirective implements AfterContentInit {
  @ContentChild(ChildComponent) childComponent: ChildComponent;

  ngAfterContentInit() {
    console.log("Дочерний компонент:", this.childComponent);
  }
}
```

### 4. Explain `ngIf` and `ngFor` and their usage.

#### Директива ngIf

**ngIf** — это структурная директива, которая добавляет или удаляет элемент из DOM в зависимости от значения выражения.

#### Базовый синтаксис ngIf:

```html
<div *ngIf="condition">Содержимое отображается, если condition == true</div>
```

#### Расширенный синтаксис с else:

```html
<div *ngIf="condition; else elseBlock">Содержимое, если condition == true</div>
<ng-template #elseBlock>Альтернативное содержимое</ng-template>
```

#### Синтаксис с then и else:

```html
<div *ngIf="condition; then thenBlock else elseBlock"></div>
<ng-template #thenBlock>Содержимое, если condition == true</ng-template>
<ng-template #elseBlock>Содержимое, если condition == false</ng-template>
```

#### Сохранение контекста с as:

```html
<div *ngIf="user$ | async as user; else loading">Привет, {{ user.name }}!</div>
<ng-template #loading>Загрузка данных...</ng-template>
```

#### Особенности ngIf:

1. **Полное удаление** — элемент и его потомки полностью удаляются из DOM
2. **Создание/уничтожение** — компоненты внутри условия создаются и уничтожаются при изменении условия
3. **Жизненный цикл** — при добавлении элемента в DOM вызываются соответствующие хуки жизненного цикла (ngOnInit и т.д.)
4. **Производительность** — предотвращает ненужную отрисовку скрытых элементов

#### Директива ngFor

**ngFor** — это структурная директива, которая повторяет шаблон для каждого элемента в коллекции.

#### Базовый синтаксис ngFor:

```html
<ul>
  <li *ngFor="let item of items">{{ item.name }}</li>
</ul>
```

#### Дополнительные переменные:

```html
<div
  *ngFor="let item of items; 
            let i = index; 
            let first = first; 
            let last = last; 
            let even = even; 
            let odd = odd"
>
  [{{ i }}] {{ item.name }}
  <span *ngIf="first">(первый)</span>
  <span *ngIf="last">(последний)</span>
  <span *ngIf="even">(четный)</span>
  <span *ngIf="odd">(нечетный)</span>
</div>
```

#### Локальные переменные:

1. **index** — индекс текущего элемента
2. **first** — true, если элемент первый в коллекции
3. **last** — true, если элемент последний в коллекции
4. **even** — true, если элемент имеет четный индекс
5. **odd** — true, если элемент имеет нечетный индекс
6. **count** — общее количество элементов в коллекции (Angular 15+)

#### Оптимизация с trackBy:

```typescript
@Component({
  selector: "app-track-by-demo",
  template: `
    <ul>
      <li *ngFor="let item of items; trackBy: trackByFn">{{ item.name }}</li>
    </ul>
  `,
})
export class TrackByDemoComponent {
  items = [
    { id: 1, name: "Элемент 1" },
    { id: 2, name: "Элемент 2" },
    { id: 3, name: "Элемент 3" },
  ];

  trackByFn(index: number, item: any): number {
    return item.id; // Уникальный ключ для элемента
  }
}
```

#### Особенности ngFor:

1. **Эффективность** — перерисовывает только измененные элементы при использовании trackBy
2. **Итерируемые объекты** — работает с массивами, Maps, Sets и любыми другими итерируемыми объектами
3. **Вложенность** — поддерживает вложенные циклы
4. **Контекст** — предоставляет богатый контекст с дополнительными переменными

#### Вложенные циклы ngFor:

```html
<div *ngFor="let group of groups">
  <h3>{{ group.name }}</h3>
  <ul>
    <li *ngFor="let user of group.users">{{ user.name }}</li>
  </ul>
</div>
```

### 5. What is the difference between `*ngIf` and `[hidden]`?

`*ngIf` и `[hidden]` — это два разных способа управления видимостью элементов в Angular, но они работают принципиально по-разному.

##### Основные различия

| Характеристика     | \*ngIf                                               | [hidden]                                          |
| ------------------ | ---------------------------------------------------- | ------------------------------------------------- |
| Механизм           | Структурная директива                                | Атрибутная директива                              |
| Действие           | Удаляет/добавляет элемент в DOM                      | Изменяет CSS-свойство display                     |
| DOM                | Элемент полностью отсутствует в DOM при false        | Элемент всегда присутствует в DOM                 |
| Жизненный цикл     | Вызывает хуки жизненного цикла при каждом добавлении | Не влияет на жизненный цикл                       |
| Производительность | Лучше для сложных компонентов                        | Лучше для частого переключения                    |
| Обработка событий  | События не обрабатываются, когда элемент удален      | События могут обрабатываться даже при hidden=true |
| CSS влияние        | Не зависит от CSS                                    | Можно переопределить через CSS                    |

#### \*ngIf

```html
<div *ngIf="isVisible">Этот контент полностью удаляется из DOM, когда isVisible равно false</div>
```

**Как работает:**

1. Если условие true, элемент добавляется в DOM
2. Если условие false, элемент удаляется из DOM
3. При изменении условия с false на true создается новый экземпляр компонента
4. При изменении условия с true на false экземпляр компонента уничтожается

**Преимущества:**

- Экономит память и ресурсы для сложных компонентов
- Предотвращает выполнение ненужных запросов к API
- Избегает проблем с CSS-селекторами, которые могут затронуть скрытые элементы
- Повышает безопасность (скрытые поля формы не отправляются)

**Недостатки:**

- Создание/уничтожение компонентов может быть затратным для производительности
- Состояние компонента не сохраняется при удалении из DOM
- Не подходит для частого переключения видимости

#### [hidden]

```html
<div [hidden]="!isVisible">Этот контент остается в DOM, но скрывается через CSS, когда isVisible равно false</div>
```

**Как работает:**

1. Применяет CSS `display: none` при hidden=true
2. Элемент всегда присутствует в DOM
3. Состояние компонента сохраняется при скрытии

**Преимущества:**

- Быстрее для частого переключения видимости
- Сохраняет состояние компонента
- Избегает повторной инициализации компонентов
- Позволяет заранее загрузить компоненты для мгновенного отображения

**Недостатки:**

- Потенциально расходует больше памяти
- Продолжают работать слушатели событий и подписки
- CSS может переопределить значение, что приведет к непредсказуемым результатам
- Скрытые элементы могут влиять на производительность страницы

#### Когда что использовать?

**Используйте \*ngIf:**

- Для большинства случаев управления видимостью
- Когда содержимое не нужно загружать заранее
- Для условного рендеринга сложных компонентов с большим количеством DOM-элементов
- Когда хотите гарантировать, что компонент полностью инициализируется при каждом появлении

**Используйте [hidden]:**

- Для часто переключаемых элементов (например, тоггл-меню)
- Когда нужно сохранить состояние компонента при скрытии
- Для элементов, которые требуют долгой инициализации
- Для оптимизации производительности при частых переключениях

#### Пример совместного использования

```html
<!-- Сначала проверяем, загружены ли данные -->
<div *ngIf="dataLoaded">
  <!-- Затем используем [hidden] для быстрого переключения вкладок -->
  <div [hidden]="activeTab !== 'tab1'">Содержимое вкладки 1</div>
  <div [hidden]="activeTab !== 'tab2'">Содержимое вкладки 2</div>
  <div [hidden]="activeTab !== 'tab3'">Содержимое вкладки 3</div>
</div>
```

### 6. What is the purpose of `ngSwitch`, `ngSwitchCase`, and `ngSwitchDefault`, and how do you use them?

Директивы **ngSwitch** предоставляют функциональность, аналогичную оператору switch в JavaScript, позволяя отображать различный контент в зависимости от значения выражения.

#### Назначение директив ngSwitch

Директивы **ngSwitch** используются для:

- Условного отображения одного из нескольких альтернативных блоков
- Упрощения кода с множественными условиями по сравнению с вложенными \*ngIf
- Повышения читаемости шаблона при наличии нескольких взаимоисключающих условий

#### Структура и компоненты ngSwitch

Система ngSwitch состоит из трех основных директив:

1. **ngSwitch** — контейнерная директива, которая оценивает выражение
2. **ngSwitchCase** — определяет блок, который отображается, когда значение совпадает
3. **ngSwitchDefault** — определяет блок, который отображается, когда ни один ngSwitchCase не совпадает

#### Базовый синтаксис ngSwitch

```html
<div [ngSwitch]="expression">
  <div *ngSwitchCase="value1">Отображается, когда expression === value1</div>
  <div *ngSwitchCase="value2">Отображается, когда expression === value2</div>
  <div *ngSwitchCase="value3">Отображается, когда expression === value3</div>
  <div *ngSwitchDefault>Отображается, когда ни одно условие не совпадает</div>
</div>
```

#### Примеры использования

#### Пример 1: Отображение статуса

```html
<div [ngSwitch]="status">
  <div *ngSwitchCase="'loading'" class="loading">
    <loading-spinner></loading-spinner>
    <p>Загрузка данных...</p>
  </div>

  <div *ngSwitchCase="'success'" class="success">
    <i class="icon-success"></i>
    <p>Данные успешно загружены!</p>
  </div>

  <div *ngSwitchCase="'error'" class="error">
    <i class="icon-error"></i>
    <p>Ошибка загрузки данных!</p>
  </div>

  <div *ngSwitchDefault class="default">
    <p>Нажмите кнопку для загрузки данных</p>
  </div>
</div>
```

#### Пример 2: Выбор компонента в зависимости от роли пользователя

```html
<div [ngSwitch]="userRole">
  <app-admin-dashboard *ngSwitchCase="'admin'"></app-admin-dashboard>
  <app-manager-dashboard *ngSwitchCase="'manager'"></app-manager-dashboard>
  <app-user-dashboard *ngSwitchCase="'user'"></app-user-dashboard>
  <app-guest-view *ngSwitchDefault></app-guest-view>
</div>
```

#### Пример 3: Использование с выражениями и несколькими условиями

```html
<div [ngSwitch]="true">
  <div *ngSwitchCase="age < 18">Вы несовершеннолетний</div>
  <div *ngSwitchCase="age >= 18 && age < 65">Вы взрослый</div>
  <div *ngSwitchCase="age >= 65">Вы пенсионер</div>
  <div *ngSwitchDefault>Не удалось определить возрастную группу</div>
</div>
```

#### Особенности ngSwitch

- **Взаимоисключающие блоки**: только один блок будет отображаться одновременно
- **Строгое сравнение**: ngSwitch использует === (строгое сравнение) для проверки значений
- **Несколько ngSwitchCase для одного значения**: можно использовать несколько блоков с одинаковым значением
- **Производительность**: лучше, чем несколько отдельных \*ngIf, так как оценивается только одно выражение
- **Структурные директивы**: ngSwitchCase и ngSwitchDefault являются структурными директивами (используют \*)

#### Сравнение с \*ngIf

| ngSwitch                                    | Несколько \*ngIf                                         |
| ------------------------------------------- | -------------------------------------------------------- |
| Оценивает выражение единожды                | Оценивает каждое условие отдельно                        |
| Более эффективен для множественного выбора  | Менее оптимален при увеличении количества условий        |
| Более читаемый код при множественном выборе | Может становиться сложным при большом количестве условий |
| Поддерживает только строгое равенство       | Поддерживает любые логические выражения                  |

#### Практические рекомендации

1. Используйте **ngSwitch**, когда у вас есть 3 или более взаимоисключающих блока
2. Всегда включайте **ngSwitchDefault** для обработки непредвиденных значений
3. Для сложных сравнений можно использовать трюк с `[ngSwitch]="true"` и логическими выражениями в ngSwitchCase
4. Помните, что ngSwitch не является заменой маршрутизации для основной навигации

### 7. What is the difference between `ngStyle` and `ngClass`?

**ngStyle** и **ngClass** — это атрибутные директивы Angular, которые позволяют динамически изменять стиль и классы элементов. Хотя они обе влияют на внешний вид элементов, они делают это разными способами и имеют различные случаи применения.

#### ngStyle: динамическое управление inline-стилями

`ngStyle` позволяет устанавливать несколько встроенных стилей одновременно, принимая объект, где ключи — названия CSS-свойств, а значения — значения этих свойств.

#### Базовый синтаксис ngStyle:

```html
<div [ngStyle]="{'property': value}">Содержимое</div>
```

#### Примеры использования ngStyle:

```html
<!-- Простое использование с объектом -->
<div [ngStyle]="{'color': textColor, 'font-size': fontSize + 'px'}">Динамически стилизованный текст</div>

<!-- Использование с методом, возвращающим объект стилей -->
<div [ngStyle]="getStyles()">Стилизованный текст</div>

<!-- Условное применение стилей -->
<div [ngStyle]="isImportant ? {'color': 'red', 'font-weight': 'bold'} : {}">Важный текст</div>
```

#### Компонент с ngStyle:

```typescript
@Component({
  selector: "app-style-demo",
  template: `
    <div [ngStyle]="currentStyles">Этот текст будет стилизован динамически</div>
    <button (click)="toggleImportance()">Переключить важность</button>
  `,
})
export class StyleDemoComponent {
  isImportant = false;

  get currentStyles() {
    return {
      color: this.isImportant ? "red" : "black",
      "font-weight": this.isImportant ? "bold" : "normal",
      "font-size": this.isImportant ? "24px" : "16px",
    };
  }

  toggleImportance() {
    this.isImportant = !this.isImportant;
  }
}
```

#### ngClass: динамическое управление CSS-классами

`ngClass` позволяет динамически добавлять и удалять CSS-классы в зависимости от логических условий. Он принимает разные типы выражений для гибкого применения классов.

#### Базовый синтаксис ngClass:

```html
<div [ngClass]="expression">Содержимое</div>
```

#### Допустимые типы выражений для ngClass:

1. **Строка** — список классов, разделенных пробелами:

   ```html
   <div [ngClass]="'active highlighted'">Содержимое</div>
   ```

2. **Массив** — список классов в виде массива строк:

   ```html
   <div [ngClass]="['active', 'highlighted']">Содержимое</div>
   ```

3. **Объект** — наиболее гибкий вариант, где ключи — имена классов, значения — булевы выражения:
   ```html
   <div [ngClass]="{'active': isActive, 'highlighted': isHighlighted}">Содержимое</div>
   ```

#### Примеры использования ngClass:

```html
<!-- С объектом условий -->
<div
  [ngClass]="{
  'active': isActive,
  'disabled': isDisabled,
  'highlighted': isImportant && !isDisabled
}"
>
  Динамические классы
</div>

<!-- С методом, возвращающим классы -->
<div [ngClass]="getClasses()">Динамические классы</div>

<!-- Комбинирование с фиксированными классами -->
<div class="card" [ngClass]="{'card-success': isSuccess, 'card-error': isError}">Карточка с динамическими состояниями</div>
```

#### Компонент с ngClass:

```typescript
@Component({
  selector: "app-class-demo",
  template: `
    <div [ngClass]="currentClasses">Этот элемент имеет динамические классы</div>
    <button (click)="toggleState('active')">Активный</button>
    <button (click)="toggleState('error')">Ошибка</button>
    <button (click)="toggleState('special')">Специальный</button>
  `,
})
export class ClassDemoComponent {
  isActive = false;
  hasError = false;
  isSpecial = false;

  get currentClasses() {
    return {
      active: this.isActive,
      error: this.hasError,
      special: this.isSpecial,
    };
  }

  toggleState(state: string) {
    if (state === "active") this.isActive = !this.isActive;
    if (state === "error") this.hasError = !this.hasError;
    if (state === "special") this.isSpecial = !this.isSpecial;
  }
}
```

#### Сравнение ngStyle и ngClass

| Характеристика     | ngStyle                                | ngClass                                  |
| ------------------ | -------------------------------------- | ---------------------------------------- |
| Назначение         | Применяет inline-стили                 | Добавляет/удаляет CSS-классы             |
| Типы выражений     | Объект со стилями                      | Строка, массив или объект                |
| Специфичность CSS  | Высокая (inline-стили)                 | Ниже (классы)                            |
| Переиспользование  | Нет (стили в шаблоне)                  | Да (классы в CSS-файлах)                 |
| Читаемость         | Ниже при большом количестве стилей     | Выше с осмысленными именами классов      |
| Производительность | Менее оптимально                       | Более оптимально                         |
| Применение         | Для динамических стилей без повторения | Для переключения предопределенных стилей |

#### Когда что использовать?

**Используйте ngStyle, когда:**

- Стиль вычисляется динамически (например, по пользовательскому вводу)
- Необходимо применить стиль, который редко меняется или уникален
- Стиль зависит от значений в компоненте (цвета, размеры, координаты)
- Количество стилей невелико

**Используйте ngClass, когда:**

- Есть предопределенные наборы стилей
- Переключаетесь между известными состояниями (активно/неактивно, ошибка/успех)
- Работаете с темами или вариантами компонентов
- Стили нужно переиспользовать в разных частях приложения

**Совмещение обоих подходов:**

```html
<div class="card" [ngClass]="{'success': isSuccess, 'error': isError}" [ngStyle]="{'height': cardHeight + 'px'}">
  <!-- Сочетание статических классов, динамических классов и динамических стилей -->
</div>
```

### 8. What is `ngContainer` and what is it used for? Provide an example.

`ngContainer` — это специальный элемент в Angular, который группирует элементы без добавления дополнительного узла в DOM.

#### Назначение ngContainer

1. **Группировка элементов** без создания лишнего DOM-элемента
2. **Применение структурных директив** к группе элементов
3. **Решение проблемы с множественными структурными директивами** на одном элементе
4. **Группировка контента** без влияния на стили или макет

#### Особенности ngContainer

- **Не рендерится в DOM** — не создает дополнительного HTML-элемента
- **Поддерживает структурные директивы** — *ngIf, *ngFor, \*ngSwitch и др.
- **Не может иметь атрибуты или стили** — так как не создает DOM-элемент
- **Доступен только во время компиляции** — используется только во время обработки шаблона

#### Примеры использования ngContainer

#### Пример 1: Группировка нескольких элементов с одним условием

```html
<!-- Без ngContainer -->
<div *ngIf="isVisible">
  <h2>Заголовок</h2>
  <p>Параграф 1</p>
  <p>Параграф 2</p>
</div>

<!-- С ngContainer - избегаем лишнего div -->
<ng-container *ngIf="isVisible">
  <h2>Заголовок</h2>
  <p>Параграф 1</p>
  <p>Параграф 2</p>
</ng-container>
```

#### Пример 2: Применение нескольких структурных директив

```html
<!-- Ошибка: нельзя использовать две структурные директивы на одном элементе -->
<div *ngIf="items.length > 0" *ngFor="let item of items">{{ item.name }}</div>

<!-- Решение с ngContainer -->
<ng-container *ngIf="items.length > 0">
  <div *ngFor="let item of items">{{ item.name }}</div>
</ng-container>
```

#### Пример 3: Использование с ngSwitch

```html
<div [ngSwitch]="selectedOption">
  <ng-container *ngSwitchCase="'option1'">
    <h2>Опция 1</h2>
    <p>Описание опции 1</p>
    <button>Действие для опции 1</button>
  </ng-container>

  <ng-container *ngSwitchCase="'option2'">
    <h2>Опция 2</h2>
    <p>Описание опции 2</p>
    <button>Действие для опции 2</button>
  </ng-container>

  <ng-container *ngSwitchDefault>
    <p>Выберите опцию</p>
  </ng-container>
</div>
```

#### Пример 4: Использование с элементами таблицы

```html
<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Имя</th>
      <th>Статус</th>
    </tr>
  </thead>
  <tbody>
    <ng-container *ngFor="let user of users">
      <!-- Группировка строк для одного пользователя без нарушения структуры таблицы -->
      <tr>
        <td rowspan="2">{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.status }}</td>
      </tr>
      <tr>
        <td colspan="2">{{ user.description }}</td>
      </tr>
      <!-- Условное отображение дополнительной строки -->
      <tr *ngIf="user.hasDetails">
        <td colspan="3">{{ user.details }}</td>
      </tr>
    </ng-container>
  </tbody>
</table>
```

#### Пример 5: Комбинирование ngFor и фильтрации

```html
<ul>
  <ng-container *ngFor="let item of items">
    <li *ngIf="item.isVisible">{{ item.name }}</li>
  </ng-container>
</ul>
```

#### Сравнение с div и ng-template

| Характеристика                  | ng-container               | div                           | ng-template                         |
| ------------------------------- | -------------------------- | ----------------------------- | ----------------------------------- |
| Рендерится в DOM                | Нет                        | Да                            | Нет                                 |
| Применение структурных директив | Да                         | Да                            | Да                                  |
| Применение атрибутных директив  | Нет                        | Да                            | Да, но не рендерится                |
| Влияние на макет                | Нет                        | Да                            | Нет                                 |
| Основное назначение             | Группировка без рендеринга | Структурирование и стилизация | Шаблон для повторного использования |

#### Когда использовать ngContainer?

1. Когда нужно применить структурную директиву к группе элементов без добавления лишнего элемента
2. Когда требуется применить несколько структурных директив (*ngIf, *ngFor и т.д.) к одной группе элементов
3. Когда добавление дополнительного DOM-элемента нарушило бы структуру или стили (например, в таблицах)
4. Когда нужно условно отображать группу элементов без изменения макета или стилей

### 9. How do you create custom structural directives using `ng-template`?

Создание собственных структурных директив позволяет расширить возможности Angular и определить пользовательские шаблоны для повторного использования. В основе структурных директив лежит элемент `ng-template`.

#### Анатомия структурной директивы

Структурные директивы:

1. Используют префикс `*` в шаблонах
2. Преобразуются в элемент `<ng-template>` во время компиляции
3. Управляют добавлением/удалением DOM-элементов
4. Могут использовать микросинтаксис для передачи параметров

#### Шаг 1: Понимание преобразования микросинтаксиса

Когда вы используете структурную директиву, Angular преобразует ее в элемент `ng-template`:

```html
<!-- Исходный код с микросинтаксисом -->
<div *appCustomIf="condition">Содержимое</div>

<!-- Преобразованный код -->
<ng-template [appCustomIf]="condition">
  <div>Содержимое</div>
</ng-template>
```

#### Шаг 2: Создание простой структурной директивы

Рассмотрим пример создания директивы `appUnless`, которая действует противоположно `*ngIf` (отображает содержимое, если условие false):

```typescript
import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appUnless]",
})
export class UnlessDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>, // Ссылка на шаблон
    private viewContainer: ViewContainerRef // Контейнер, куда будет вставлен шаблон
  ) {}

  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      // Добавляем шаблон, если условие false и его еще нет
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      // Удаляем шаблон, если условие true и он уже есть
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
```

#### Шаг 3: Использование созданной директивы

```html
<div *appUnless="isLoggedIn">Пожалуйста, войдите в систему, чтобы получить доступ к контенту.</div>

<div *appUnless="isAdmin">У вас нет прав администратора для этого действия.</div>
```

#### Шаг 4: Добавление контекста в структурную директиву

Структурные директивы могут предоставлять контекст, аналогично тому, как `*ngFor` предоставляет переменные `index`, `first`, `last` и т.д.:

```typescript
import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

// Интерфейс контекста
export interface RepeatContext {
  $implicit: number; // Неявное значение (доступно как let i)
  index: number; // Индекс текущей итерации
  count: number; // Общее количество итераций
  even: boolean; // True, если индекс четный
  odd: boolean; // True, если индекс нечетный
  first: boolean; // True, если это первая итерация
  last: boolean; // True, если это последняя итерация
}

@Directive({
  selector: "[appRepeatTimes]",
})
export class RepeatTimesDirective {
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

  @Input() set appRepeatTimes(count: number) {
    // Очищаем контейнер
    this.viewContainer.clear();

    // Создаем указанное количество экземпляров
    for (let i = 0; i < count; i++) {
      // Создаем контекст для текущей итерации
      const context: RepeatContext = {
        $implicit: i,
        index: i,
        count: count,
        even: i % 2 === 0,
        odd: i % 2 !== 0,
        first: i === 0,
        last: i === count - 1,
      };

      // Создаем представление с контекстом
      this.viewContainer.createEmbeddedView(this.templateRef, context);
    }
  }
}
```

#### Шаг 5: Использование директивы с контекстом

```html
<div *appRepeatTimes="5; let i = $implicit; let isFirst = first; let isLast = last">
  <p [class.first]="isFirst" [class.last]="isLast">Элемент {{ i }} из 5 ({{ isFirst ? 'первый' : isLast ? 'последний' : 'средний' }})</p>
</div>
```

#### Шаг 6: Добавление дополнительных входных параметров

```typescript
@Directive({
  selector: "[appListItem]",
})
export class ListItemDirective {
  @Input() appListItemOf: any[]; // Коллекция для итерации
  @Input() appListItemAs: string; // Имя переменной (необязательно)

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

  @Input() set appListItem(config: any) {
    // Реализация директивы...
  }
}
```

#### Шаг 7: Создание сложной структурной директивы

Пример директивы, которая отображает содержимое с задержкой:

```typescript
import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appDelayRender]",
})
export class DelayRenderDirective {
  @Input() appDelayRenderTime: number = 1000; // Время задержки в мс

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

  @Input() set appDelayRender(shouldRender: boolean) {
    this.viewContainer.clear();

    if (shouldRender) {
      // Создаем представление с задержкой
      setTimeout(() => {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }, this.appDelayRenderTime);
    }
  }
}
```

Использование:

```html
<div *appDelayRender="true; time: 2000">Этот блок появится через 2 секунды</div>
```

#### Примеры практических структурных директив

#### Пример 1: Директива для рендеринга в зависимости от прав доступа

```typescript
@Directive({
  selector: "[appPermission]",
})
export class PermissionDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService // Сервис для проверки прав
  ) {}

  @Input() set appPermission(requiredPermission: string) {
    this.viewContainer.clear();

    if (this.authService.hasPermission(requiredPermission)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
```

Использование:

```html
<button *appPermission="'ADMIN'">Удалить пользователя</button>
<div *appPermission="'EDIT_CONTENT'">Редактор содержимого</div>
```

#### Пример 2: Директива для обработки асинхронных данных

```typescript
@Directive({
  selector: "[appLoader]",
})
export class LoaderDirective {
  private isLoading = false;
  private loadedTemplate: TemplateRef<any> | null = null;
  private loadingTemplate: TemplateRef<any> | null = null;
  private errorTemplate: TemplateRef<any> | null = null;

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {
    this.loadedTemplate = templateRef;
  }

  @Input() set appLoaderLoading(template: TemplateRef<any>) {
    this.loadingTemplate = template;
    this.updateView();
  }

  @Input() set appLoaderError(template: TemplateRef<any>) {
    this.errorTemplate = template;
    this.updateView();
  }

  @Input() set appLoader(state: "loading" | "loaded" | "error") {
    this.isLoading = state === "loading";
    this.updateView();
  }

  private updateView() {
    this.viewContainer.clear();

    if (this.isLoading && this.loadingTemplate) {
      this.viewContainer.createEmbeddedView(this.loadingTemplate);
    } else if (this.isLoading === false && this.loadedTemplate) {
      this.viewContainer.createEmbeddedView(this.loadedTemplate);
    } else if (this.errorTemplate) {
      this.viewContainer.createEmbeddedView(this.errorTemplate);
    }
  }
}
```

Использование:

```html
<ng-template #loading>
  <div class="spinner">Загрузка...</div>
</ng-template>

<ng-template #error>
  <div class="error">Произошла ошибка при загрузке данных</div>
</ng-template>

<div *appLoader="dataState; loading: loading; error: error">Данные успешно загружены!</div>
```

#### Заключение

Создание собственных структурных директив требует понимания взаимодействия между `TemplateRef` и `ViewContainerRef`. Ключевые моменты:

1. `TemplateRef` представляет содержимое директивы (то, что находится внутри элемента с директивой)
2. `ViewContainerRef` — место, куда будет вставлен шаблон
3. Метод `createEmbeddedView()` создает экземпляр шаблона и добавляет его в контейнер
4. Метод `clear()` удаляет все представления из контейнера
5. Входные параметры позволяют настраивать поведение директивы
6. Контекст позволяет передавать данные из директивы в шаблон

Собственные структурные директивы позволяют создавать мощные абстракции, упрощающие разработку и повышающие переиспользование кода в Angular-приложениях.

## Angular Pipes Concepts

### 1. What is a `Pipe`, and what is its purpose in Angular?

Пайпы (Pipes) в Angular — это инструменты для трансформации и форматирования данных прямо в шаблоне. Они позволяют преобразовывать данные перед их отображением пользователю без изменения исходных значений.

#### Основные концепции пайпов

- **Трансформация данных** — пайпы принимают входные данные и возвращают преобразованный результат
- **Декларативный синтаксис** — используются непосредственно в шаблонах с помощью символа `|`
- **Цепочка преобразований** — несколько пайпов могут соединяться в цепочку
- **Параметризация** — могут принимать параметры для настройки преобразования
- **Одностороннее преобразование** — они не изменяют исходные данные, а лишь трансформируют их при отображении

#### Для чего предназначены пайпы

1. **Форматирование данных** — даты, числа, строки для удобного отображения
2. **Фильтрация данных** — выборочное отображение элементов массива
3. **Сортировка данных** — упорядочивание списков и коллекций
4. **Локализация** — адаптация данных под язык/регион пользователя
5. **Обработка асинхронных данных** — работа с Observable и Promise
6. **Сокращение кода компонентов** — вынесение логики трансформации из компонентов в шаблоны

#### Синтаксис использования пайпов

```html
{{ value | pipeName:parameter1:parameter2 }}
```

Где:

- `value` — входные данные для трансформации
- `pipeName` — имя используемого пайпа
- `parameter1, parameter2, ...` — опциональные параметры, передаваемые пайпу

### 2. Can you provide examples of some built-in pipes (e.g., date, uppercase, lowercase)?

Angular предоставляет набор встроенных пайпов для часто используемых преобразований:

#### Строковые пайпы

#### `uppercase` — преобразование текста в верхний регистр

```html
{{ 'hello world' | uppercase }}
<!-- Результат: 'HELLO WORLD' -->
```

#### `lowercase` — преобразование текста в нижний регистр

```html
{{ 'Hello World' | lowercase }}
<!-- Результат: 'hello world' -->
```

#### `titlecase` — преобразование первых букв каждого слова в верхний регистр

```html
{{ 'hello world' | titlecase }}
<!-- Результат: 'Hello World' -->
```

#### Числовые пайпы

#### `number` — форматирование чисел

```html
{{ 1234.56 | number }}
<!-- Результат: '1,234.56' -->
{{ 1234.56 | number:'1.2-2' }}
<!-- Результат: '1,234.56' -->
{{ 1234.56 | number:'3.4-4' }}
<!-- Результат: '001,234.5600' -->
{{ 1234.56 | number:'3.4-4':'fr' }}
<!-- Результат: '001 234,5600' (французский формат) -->
```

#### `percent` — форматирование процентов

```html
{{ 0.75 | percent }}
<!-- Результат: '75%' -->
{{ 0.75 | percent:'2.2-2' }}
<!-- Результат: '75.00%' -->
```

#### `currency` — форматирование валют

```html
{{ 1234.56 | currency }}
<!-- Результат: '$1,234.56' -->
{{ 1234.56 | currency:'EUR' }}
<!-- Результат: '€1,234.56' -->
{{ 1234.56 | currency:'RUB':'symbol':'1.0-0':'ru' }}
<!-- Результат: '1 235 ₽' -->
```

#### `decimal` — работа с десятичными числами (Angular 15+)

```html
{{ 1234.56 | decimal }}
<!-- Результат: '1234.56' -->
{{ 1234.56 | decimal:'2.2-2' }}
<!-- Результат: '1234.56' -->
```

#### Пайп для дат

#### `date` — форматирование даты и времени

```html
{{ today | date }}
<!-- Результат: 'Jun 15, 2023' -->
{{ today | date:'short' }}
<!-- Результат: '6/15/23, 10:30 AM' -->
{{ today | date:'fullDate' }}
<!-- Результат: 'Thursday, June 15, 2023' -->
{{ today | date:'dd/MM/yyyy' }}
<!-- Результат: '15/06/2023' -->
{{ today | date:'dd MMM yyyy HH:mm' }}
<!-- Результат: '15 Jun 2023 10:30' -->
```

#### Пайпы для массивов и объектов

#### `json` — преобразование объекта в строку JSON (удобно для отладки)

```html
{{ {name: 'John', age: 30} | json }}
<!-- Результат: '{ "name": "John", "age": 30 }' -->
```

#### `slice` — выбор подмножества элементов массива

```html
{{ [1, 2, 3, 4, 5] | slice:1:3 }}
<!-- Результат: [2, 3] -->
```

#### `keyvalue` — преобразование объекта в массив пар ключ-значение

```html
<div *ngFor="let item of {name: 'John', age: 30} | keyvalue">{{ item.key }}: {{ item.value }}</div>
<!-- Результат:
  age: 30
  name: John
-->
```

#### Асинхронный пайп

#### `async` — обработка Observable и Promise

```html
{{ observableValue | async }}
<!-- подписывается на Observable и отображает его последнее значение -->
{{ promiseValue | async }}
<!-- отображает значение, когда Promise разрешится -->
```

#### Прочие пайпы

#### `i18nSelect` — условное отображение на основе значения

```html
{{ gender | i18nSelect: { 'male': 'He', 'female': 'She', 'other': 'They' } }}
```

#### `i18nPlural` — множественные формы на основе числа

```html
{{ count | i18nPlural: { '=0': 'No items', '=1': 'One item', 'other': '# items' } }}
```

### 3. What is the difference between 'pure' and 'impure' pipes. How do they affect performance?

В Angular пайпы делятся на две категории: **чистые** (pure) и **нечистые** (impure), что определяет, когда и как часто выполняется функция трансформации.

#### Чистые пайпы (Pure pipes)

**Определение:**
Чистый пайп выполняет преобразование только когда изменяется входное значение или параметры. При этом "изменение" означает изменение ссылки (reference change) для объектов или примитивных значений.

**Особенности:**

1. **Кэширование результатов** — результат трансформации кэшируется до изменения входных данных
2. **Вызов только при изменении ссылки** — не реагирует на глубокие изменения объектов или массивов
3. **Предсказуемое поведение** — результат зависит только от входных параметров
4. **По умолчанию** — все пайпы в Angular по умолчанию чистые (`pure: true`)

**Пример чистого пайпа:**

```typescript
@Pipe({
  name: "exponentialStrength",
  pure: true, // это значение по умолчанию, можно не указывать
})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent: number = 1): number {
    return Math.pow(value, exponent);
  }
}
```

**Когда используется:**

- Преобразование примитивных значений (числа, строки, булевы)
- Работа с неизменяемыми (immutable) объектами
- Случаи, где важна производительность

#### Нечистые пайпы (Impure pipes)

**Определение:**
Нечистый пайп выполняет преобразование при каждом цикле обнаружения изменений (change detection), независимо от того, изменились ли входные данные. Это позволяет реагировать на внутренние изменения объектов.

**Особенности:**

1. **Без кэширования** — трансформация выполняется при каждой проверке изменений
2. **Реагирует на любые изменения** — обнаруживает внутренние изменения объектов и массивов
3. **Может иметь побочные эффекты** — например, выполнять HTTP-запросы
4. **Явное объявление** — требует указания `pure: false` в декораторе

**Пример нечистого пайпа:**

```typescript
@Pipe({
  name: "filterItems",
  pure: false,
})
export class FilterItemsPipe implements PipeTransform {
  transform(items: any[], searchTerm: string): any[] {
    if (!items || !searchTerm) {
      return items;
    }

    return items.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
}
```

**Когда используется:**

- Фильтрация или сортировка массивов
- Работа с изменяемыми объектами
- Асинхронная обработка данных (например, `async` pipe)
- Наблюдение за внешними изменениями (DOM-события, таймеры)

#### Влияние на производительность

#### Чистые пайпы

- **Высокая производительность** — выполняются только при изменении входных данных
- **Предсказуемая нагрузка** — не создают неожиданных пиков использования CPU
- **Кэширование результатов** — не выполняют повторных вычислений для тех же входных данных
- **Оптимизированы Angular** — система обнаружения изменений учитывает чистоту пайпов

#### Нечистые пайпы

- **Потенциально низкая производительность** — выполняются при каждом цикле обнаружения изменений
- **Увеличивают нагрузку** — могут замедлить работу приложения при частом запуске
- **Могут вызывать перерисовку UI** — если результат трансформации постоянно меняется
- **Риск бесконечных циклов** — могут вызывать новые циклы обнаружения изменений

#### Рекомендации по производительности

1. **Используйте чистые пайпы по умолчанию**
2. **Применяйте нечистые пайпы только при необходимости**
3. **Для работы с изменяемыми коллекциями рассмотрите альтернативы:**
   - Перенос логики фильтрации/сортировки в компонент
   - Использование неизменяемых (immutable) структур данных
   - Использование OnPush стратегии обнаружения изменений
4. **Кэшируйте тяжелые вычисления в нечистых пайпах**
5. **Используйте `trackBy` с `*ngFor` при работе с коллекциями**

### 4. How do you use multiple pipes simultaneously?

Angular позволяет объединять несколько пайпов в цепочку для последовательного применения трансформаций. Это называется **chaining pipes** (цепочка пайпов).

#### Синтаксис цепочки пайпов

```html
{{ value | pipe1 | pipe2 | pipe3 }}
```

В этом случае:

1. Результат `value | pipe1` становится входным значением для `pipe2`
2. Результат `value | pipe1 | pipe2` становится входным значением для `pipe3`

#### Пример цепочки пайпов

```html
{{ birthday | date:'fullDate' | uppercase }}
```

В этом примере:

1. `birthday` преобразуется в формат полной даты с помощью `date:'fullDate'`
2. Затем результат преобразуется в верхний регистр с помощью `uppercase`

#### Порядок применения пайпов

Порядок пайпов в цепочке имеет значение:

```html
<!-- Преобразовать в дату, затем в верхний регистр -->
{{ dateObj | date:'shortDate' | uppercase }}
<!-- Результат: 'JUN 15, 2023' -->

<!-- Преобразовать строку в верхний регистр, затем (некорректно) пытаться преобразовать в дату -->
{{ dateStr | uppercase | date:'shortDate' }}
<!-- Ошибка или некорректный результат -->
```

#### Передача параметров в пайпы в цепочке

Каждый пайп в цепочке может принимать свои параметры:

```html
{{ price | currency:'EUR' | number:'1.2-2' }}
```

#### Сложные примеры цепочек пайпов

#### Форматирование даты и выборочное отображение

```html
{{ users | slice:0:5 | orderBy:'lastname' | json }}
```

Здесь:

1. `slice:0:5` выбирает первые 5 пользователей
2. `orderBy:'lastname'` сортирует их по фамилии (предполагая, что это пользовательский пайп)
3. `json` преобразует результат в JSON-строку для отображения

#### Работа с асинхронными данными

```html
{{ observable$ | async | date:'medium' | uppercase }}
```

Здесь:

1. `async` подписывается на Observable и получает последнее значение
2. `date:'medium'` форматирует полученную дату в средний формат
3. `uppercase` преобразует результат в верхний регистр

#### Локализованное форматирование

```html
{{ amount | currency:'USD':'symbol':'1.2-2' | i18nSelect: { '$1.00': 'Один доллар', '$2.00': 'Два доллара', 'other': 'Много долларов' } }}
```

#### Комбинирование пайпов с другими выражениями

Пайпы можно комбинировать с другими выражениями в шаблоне:

```html
<!-- Применение пайпа к результату метода -->
{{ getMessage() | translate }}

<!-- Применение пайпа к вычисляемому выражению -->
{{ (price * quantity) | currency }}

<!-- Использование пайпа с условным оператором -->
{{ isSpecial ? (price | discount:0.1) : price | currency }}
```

#### Повышение читаемости с помощью синтаксиса _as_

Для длинных цепочек пайпов можно использовать оператор `as` с `*ngIf` для повышения читаемости:

```html
<div *ngIf="complexObservable$ | async | filter:term | sort:direction as processedData">
  <div *ngFor="let item of processedData">{{ item.name }}</div>
  <p>Всего: {{ processedData.length }}</p>
</div>
```

### 5. How do you pass parameters to a Pipe to change behavior or format data?

Параметры позволяют настраивать поведение пайпов, делая их более гибкими и универсальными. Angular поддерживает передачу любого количества параметров в пайпы.

#### Базовый синтаксис передачи параметров

```html
{{ value | pipeName:param1:param2:param3 }}
```

Общие правила:

- Параметры разделяются двоеточием `:`
- Количество параметров не ограничено
- Типы параметров могут быть любыми (строки, числа, объекты, выражения)

#### Примеры передачи параметров встроенным пайпам

#### Параметры для пайпа `date`

```html
<!-- Простое форматирование -->
{{ today | date:'dd/MM/yyyy' }}
<!-- 15/06/2023 -->

<!-- Предопределенный формат + локаль -->
{{ today | date:'medium':'GMT':'ru' }}
<!-- 15 июн. 2023 г., 14:30:45 -->

<!-- Форматирование с параметрами -->
{{ today | date:dateFormat:timezone:locale }}
```

#### Параметры для пайпа `number`

```html
<!-- Параметр формата: {минЦелая.минДробная-максДробная} -->
{{ 3.14159 | number:'1.2-2' }}
<!-- 3.14 -->
{{ 3.14159 | number:'3.4-4' }}
<!-- 003.1416 -->

<!-- Параметр формата + локаль -->
{{ 1234567.89 | number:'1.2-2':'fr' }}
<!-- 1 234 567,89 (французский формат) -->
```

#### Параметры для пайпа `currency`

```html
<!-- Код валюты -->
{{ 1234.56 | currency:'EUR' }}
<!-- €1,234.56 -->

<!-- Код валюты + формат отображения -->
{{ 1234.56 | currency:'USD':'code' }}
<!-- USD1,234.56 -->
{{ 1234.56 | currency:'USD':'symbol' }}
<!-- $1,234.56 -->
{{ 1234.56 | currency:'USD':'symbol-narrow' }}
<!-- $1,234.56 -->
{{ 1234.56 | currency:'USD':'name' }}
<!-- 1,234.56 US dollars -->

<!-- Полный набор параметров -->
{{ 1234.56 | currency:'RUB':'symbol':'1.0-0':'ru' }}
<!-- 1 235 ₽ -->
```

#### Параметры для пайпа `slice`

```html
<!-- Начальный индекс -->
{{ [1, 2, 3, 4, 5] | slice:1 }}
<!-- [2, 3, 4, 5] -->

<!-- Начальный и конечный индексы -->
{{ [1, 2, 3, 4, 5] | slice:1:3 }}
<!-- [2, 3] -->

<!-- Отрицательные индексы (от конца) -->
{{ [1, 2, 3, 4, 5] | slice:-2 }}
<!-- [4, 5] -->
```

#### Динамические параметры

Параметры могут быть динамическими, основанными на свойствах компонента:

```html
<!-- Использование переменных компонента как параметров -->
{{ price | currency:selectedCurrency:currencyDisplay:'1.2-2':userLocale }}

<!-- Использование методов компонента в качестве параметров -->
{{ data | format:getFormatOptions() }}

<!-- Использование выражений -->
{{ value | customPipe:(isAdmin ? 'admin' : 'user') }}
```

#### Создание пользовательского пайпа с параметрами

```typescript
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "truncate",
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 25, trail: string = "..."): string {
    if (!value) return "";

    if (value.length <= limit) {
      return value;
    }

    // Обрезаем текст до указанного лимита и добавляем окончание
    return value.substring(0, limit) + trail;
  }
}
```

Использование:

```html
<!-- С параметрами по умолчанию -->
{{ longText | truncate }}
<!-- 'Очень длинный текст, кото...' -->

<!-- С пользовательским лимитом -->
{{ longText | truncate:10 }}
<!-- 'Очень длин...' -->

<!-- С пользовательским лимитом и окончанием -->
{{ longText | truncate:10:' [подробнее]' }}
<!-- 'Очень длин [подробнее]' -->
```

#### Пайп с множественными и сложными параметрами

```typescript
@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchTerm: string, searchFields: string[] = ["name"], caseSensitive: boolean = false): any[] {
    if (!items || !searchTerm) {
      return items;
    }

    return items.filter((item) => {
      const term = caseSensitive ? searchTerm : searchTerm.toLowerCase();

      return searchFields.some((field) => {
        const value = item[field];
        if (!value) return false;

        const fieldValue = caseSensitive ? String(value) : String(value).toLowerCase();

        return fieldValue.includes(term);
      });
    });
  }
}
```

Использование:

```html
<!-- Базовый поиск -->
{{ users | filter:searchTerm }}

<!-- Поиск по конкретным полям -->
{{ users | filter:searchTerm:['name', 'email'] }}

<!-- Поиск с учетом регистра -->
{{ users | filter:searchTerm:['name', 'email']:true }}
```

#### Рекомендации по параметрам пайпов

1. **Используйте параметры по умолчанию** в реализации пайпа для удобства использования
2. **Валидируйте параметры** внутри метода `transform` для предотвращения ошибок
3. **Документируйте ожидаемые типы и форматы** параметров в комментариях
4. **Учитывайте null и undefined** как возможные значения параметров
5. **Используйте TypeScript типизацию** для параметров метода `transform`

### 6. What are the advantages of using `Async pipes`. How do you apply them with Observable or Promise?

Асинхронный пайп (`async`) — это один из наиболее мощных встроенных пайпов в Angular, который упрощает работу с асинхронными данными в шаблонах.

#### Что такое асинхронный пайп

Асинхронный пайп (`async`) автоматически подписывается на Observable или Promise и отображает последнее полученное значение. Он также автоматически отписывается от Observable при уничтожении компонента, предотвращая утечки памяти.

```typescript
@Pipe({
  name: "async",
  pure: false, // async — это нечистый пайп
})
export class AsyncPipe implements PipeTransform {
  // Реализация в Angular
}
```

#### Преимущества использования асинхронного пайпа

1. **Автоматическое управление подписками**

   - Подписывается при создании компонента
   - Отписывается при уничтожении компонента
   - Предотвращает утечки памяти

2. **Интеграция с механизмом обнаружения изменений**

   - Автоматически запускает обнаружение изменений при получении новых данных
   - Работает корректно с OnPush стратегией обнаружения изменений

3. **Упрощение кода**

   - Устраняет необходимость ручного управления подписками
   - Сокращает шаблерный код в компонентах
   - Делает компоненты более декларативными

4. **Обработка ошибок и состояний загрузки**

   - Может использоваться с `*ngIf` для обработки состояний загрузки и ошибок
   - Поддерживает оператор `as` для сохранения результата

5. **Повышение производительности**
   - Предотвращает лишние рендеринги
   - Оптимизирует обнаружение изменений

#### Применение с Observable

#### Базовое использование

```typescript
// В компоненте
import { Component } from "@angular/core";
import { Observable, interval } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-counter",
  template: ` <p>Текущее значение: {{ counter$ | async }}</p> `,
})
export class CounterComponent {
  counter$: Observable<number> = interval(1000).pipe(map((n) => n + 1));
}
```

#### Сохранение значения с помощью as

```html
<div *ngIf="users$ | async as users; else loading">
  <h2>Список пользователей ({{ users.length }})</h2>
  <ul>
    <li *ngFor="let user of users">{{ user.name }}</li>
  </ul>
</div>
<ng-template #loading>Загрузка пользователей...</ng-template>
```

#### Обработка состояний загрузки и ошибок

```html
<ng-container *ngIf="data$ | async as data; else loadingOrError">
  <div class="data-container">{{ data | json }}</div>
</ng-container>

<ng-template #loadingOrError>
  <div *ngIf="error; else loading" class="error">Ошибка загрузки: {{ error }}</div>
  <ng-template #loading>
    <div class="loading">Загрузка данных...</div>
  </ng-template>
</ng-template>
```

Компонент с обработкой ошибок:

```typescript
@Component({
  selector: "app-data-container",
  templateUrl: "./data-container.component.html",
})
export class DataContainerComponent implements OnInit {
  data$: Observable<any>;
  error: string = null;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.data$ = this.dataService.getData().pipe(
      catchError((err) => {
        this.error = err.message;
        return EMPTY; // Возвращаем пустой Observable
      })
    );
  }
}
```

#### Работа с несколькими Observable

```typescript
@Component({
  selector: "app-dashboard",
  template: `
    <div
      *ngIf="{
        users: users$ | async,
        posts: posts$ | async,
        comments: comments$ | async
      } as data"
    >
      <app-users [users]="data.users"></app-users>
      <app-posts [posts]="data.posts"></app-posts>
      <app-comments [comments]="data.comments"></app-comments>
    </div>
  `,
})
export class DashboardComponent {
  users$ = this.userService.getUsers();
  posts$ = this.postService.getPosts();
  comments$ = this.commentService.getComments();

  constructor(private userService: UserService, private postService: PostService, private commentService: CommentService) {}
}
```

#### Применение с Promise

```typescript
@Component({
  selector: "app-promise-demo",
  template: `
    <p>Результат: {{ dataPromise | async }}</p>
    <button (click)="refreshData()">Обновить данные</button>
  `,
})
export class PromiseDemoComponent {
  dataPromise: Promise<string>;

  constructor() {
    this.refreshData();
  }

  refreshData() {
    this.dataPromise = new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve("Данные загружены " + new Date().toLocaleTimeString());
      }, 2000);
    });
  }
}
```

#### Асинхронный пайп с комбинированием операторов RxJS

````typescript
@Component({
  selector: 'app-search',
  template: `
    <input [formControl]="searchControl" placeholder="Поиск...">

    <div *ngIf="searchResults$ | async as results; else loading">
      <div *ngIf="results.length; else noResults">
        <div *ngFor="let result of results">{{ result.title }}</div>
      </div>
      <ng-template #noResults>Ничего не найдено</ng-template>
    </div>

    <ng-template #loading>
      <div *ngIf="(isLoading$ | async) === true">Поиск...</div>
    </ng-template>
  `
})
```typescript
export class SearchComponent implements OnInit {
  searchControl = new FormControl('');
  isLoading$ = new BehaviorSubject<boolean>(false);
  searchResults$: Observable<any[]>;

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.searchResults$ = this.searchControl.valueChanges.pipe(
      debounceTime(300),
      filter(term => term.length >= 2),
      tap(() => this.isLoading$.next(true)),
      switchMap(term => this.searchService.search(term).pipe(
        catchError(() => of([])), // Обработка ошибок
        finalize(() => this.isLoading$.next(false))
      ))
    );
  }
}
````

#### Передовые практики работы с async pipe

#### 1. Сочетание с другими пайпами

```html
<div>Последнее обновление: {{ data$ | async | date:'medium' }}</div>

<div>{{ (user$ | async)?.name | uppercase }}</div>
```

#### 2. Обработка неопределенных значений

```html
<!-- С оператором опциональной цепочки -->
<div>Привет, {{ (user$ | async)?.name || 'Гость' }}</div>

<!-- С ngIf и else -->
<div *ngIf="user$ | async as user; else guest">Привет, {{ user.name }}</div>
<ng-template #guest> Привет, Гость </ng-template>
```

#### 3. Разделение ответственности с RxJS

```typescript
@Component({
  selector: "app-user-profile",
  template: `
    <div *ngIf="userWithPosts$ | async as data">
      <h2>{{ data.user.name }}</h2>
      <h3>Посты ({{ data.posts.length }}):</h3>
      <ul>
        <li *ngFor="let post of data.posts">{{ post.title }}</li>
      </ul>
    </div>
  `,
})
export class UserProfileComponent {
  userId$ = new BehaviorSubject<number>(1);

  // Комбинирование нескольких потоков данных
  userWithPosts$ = this.userId$.pipe(
    switchMap((id) => combineLatest([this.userService.getUser(id), this.postService.getPostsByUser(id)])),
    map(([user, posts]) => ({ user, posts }))
  );

  constructor(private userService: UserService, private postService: PostService) {}

  loadUser(id: number) {
    this.userId$.next(id);
  }
}
```

### 7. How does the process of registering a custom pipe in a module occur?а в модуле?

Для использования собственного пайпа в приложении Angular, его необходимо правильно зарегистрировать. Процесс регистрации зависит от того, используете ли вы традиционный подход с NgModule или современный standalone-подход.

#### Создание собственного пайпа

Сначала создадим простой пайп для примера:

```typescript
// capitalize.pipe.ts
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "capitalize",
  standalone: false, // По умолчанию false, указываем для ясности
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return "";
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
}
```

#### Регистрация пайпа в NgModule

В традиционном подходе с модулями пайпы регистрируются в массиве `declarations` модуля:

```typescript
// app.module.ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { CapitalizePipe } from "./pipes/capitalize.pipe";

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe, // Регистрация пайпа
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

После регистрации пайп доступен во всех компонентах, директивах и других пайпах, которые объявлены в том же модуле.

#### Использование в шаблоне компонента

```html
<!-- app.component.html -->
<p>{{ 'hello world' | capitalize }}</p>
<!-- Результат: Hello world -->
```

#### Регистрация в feature-модуле

Если вы используете модульную архитектуру, пайп может быть объявлен в feature-модуле:

```typescript
// feature.module.ts
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FeatureComponent } from "./feature.component";
import { CapitalizePipe } from "./pipes/capitalize.pipe";

@NgModule({
  declarations: [
    FeatureComponent,
    CapitalizePipe, // Регистрация пайпа в feature-модуле
  ],
  imports: [CommonModule],
  exports: [
    FeatureComponent,
    CapitalizePipe, // Экспортируем пайп для использования в других модулях
  ],
})
export class FeatureModule {}
```

#### Создание модуля для пайпов

Для больших приложений рекомендуется создать отдельный модуль, содержащий все пользовательские пайпы:

```typescript
// pipes.module.ts
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CapitalizePipe } from "./capitalize.pipe";
import { TruncatePipe } from "./truncate.pipe";
import { FilterPipe } from "./filter.pipe";
// ... другие пайпы

@NgModule({
  declarations: [
    CapitalizePipe,
    TruncatePipe,
    FilterPipe,
    // ... другие пайпы
  ],
  imports: [CommonModule],
  exports: [
    CapitalizePipe,
    TruncatePipe,
    FilterPipe,
    // ... экспортируем все пайпы
  ],
})
export class PipesModule {}
```

Затем этот модуль можно импортировать в другие модули:

```typescript
// app.module.ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { PipesModule } from "./pipes/pipes.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PipesModule, // Импортируем весь модуль с пайпами
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

#### Регистрация standalone-пайпа

С Angular 14+ доступны standalone-компоненты и пайпы, которые не требуют явной регистрации в NgModule:

```typescript
// capitalize.pipe.ts
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "capitalize",
  standalone: true, // Это standalone-пайп
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return "";
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
}
```

#### Использование standalone-пайпа в standalone-компоненте

```typescript
// app.component.ts
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CapitalizePipe } from "./pipes/capitalize.pipe";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, CapitalizePipe], // Импортируем пайп напрямую
  template: ` <p>{{ "hello world" | capitalize }}</p> `,
})
export class AppComponent {}
```

#### Использование standalone-пайпа в NgModule-компоненте

Для использования standalone-пайпа в компоненте, объявленном в NgModule, нужно импортировать пайп в модуль:

```typescript
// app.module.ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { CapitalizePipe } from "./pipes/capitalize.pipe";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CapitalizePipe, // Импортируем standalone-пайп
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

#### Генерация пайпа с помощью Angular CLI

Самый простой способ создать пайп — использовать Angular CLI:

```bash
#### Создание обычного пайпа
ng generate pipe pipes/capitalize

#### Создание standalone-пайпа
ng generate pipe pipes/capitalize --standalone
```

Это создаст все необходимые файлы и автоматически зарегистрирует пайп в модуле (для не-standalone пайпов).

#### Генерация модуля пайпов с помощью CLI

```bash
#### Создание модуля для пайпов
ng generate module pipes

#### Создание пайпа внутри модуля пайпов
ng generate pipe pipes/capitalize
```

#### Проверка регистрации

После регистрации пайпа убедитесь, что:

1. Пайп объявлен только в одном NgModule (или имеет флаг standalone: true)
2. Пайп экспортирован из модуля, если нужно использовать его в других модулях
3. Модуль, содержащий пайп, импортирован в модуль, где пайп будет использоваться

### 8. How do you handle complex transformations in pipes?

Для сложных преобразований в пайпах требуется особый подход, чтобы сохранить производительность и поддерживаемость кода. Рассмотрим различные стратегии и примеры.

#### Оптимизация производительности

#### 1. Кэширование результатов

Для вычислительно сложных операций стоит реализовать кэширование:

```typescript
@Pipe({
  name: "complexTransform",
})
export class ComplexTransformPipe implements PipeTransform {
  private lastInput: any = null;
  private lastResult: any = null;

  transform(value: any): any {
    // Если входные данные не изменились, возвращаем кэшированный результат
    if (JSON.stringify(value) === JSON.stringify(this.lastInput)) {
      return this.lastResult;
    }

    // Выполняем сложную трансформацию
    const result = this.performComplexCalculation(value);

    // Сохраняем вход и результат для последующего использования
    this.lastInput = JSON.parse(JSON.stringify(value));
    this.lastResult = result;

    return result;
  }

  private performComplexCalculation(value: any): any {
    // Сложные вычисления...
    return processedValue;
  }
}
```

#### 2. Нечистые пайпы и мемоизация

Для пайпов, которые должны обрабатывать внутренние изменения объектов, можно использовать нечистый пайп с мемоизацией:

```typescript
@Pipe({
  name: "dataProcessor",
  pure: false,
})
export class DataProcessorPipe implements PipeTransform {
  private cache = new Map<string, any>();

  transform(data: any[], filter: string, sort: string): any[] {
    const cacheKey = `${JSON.stringify(data)}_${filter}_${sort}`;

    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    // Выполняем фильтрацию
    let result = data.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()));

    // Выполняем сортировку
    if (sort === "asc") {
      result = result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "desc") {
      result = result.sort((a, b) => b.name.localeCompare(a.name));
    }

    // Кэшируем результат
    this.cache.set(cacheKey, result);

    // Ограничение размера кэша
    if (this.cache.size > 10) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }

    return result;
  }
}
```

#### Обработка разных типов данных

```typescript
@Pipe({
  name: "smartFormat",
})
export class SmartFormatPipe implements PipeTransform {
  transform(value: any, format?: string): string {
    if (value === null || value === undefined) {
      return "Н/Д";
    }

    // Определение типа значения
    const valueType = typeof value;

    switch (valueType) {
      case "number":
        return this.formatNumber(value, format);
      case "string":
        return this.formatString(value, format);
      case "boolean":
        return value ? "Да" : "Нет";
      case "object":
        if (value instanceof Date) {
          return this.formatDate(value, format);
        } else if (Array.isArray(value)) {
          return this.formatArray(value, format);
        } else {
          return this.formatObject(value, format);
        }
      default:
        return String(value);
    }
  }

  private formatNumber(value: number, format: string): string {
    // Обработка чисел в зависимости от формата
    if (format === "currency") {
      return new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB",
      }).format(value);
    } else if (format === "percent") {
      return new Intl.NumberFormat("ru-RU", {
        style: "percent",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(value / 100);
    }
    // Другие форматы...
    return value.toLocaleString();
  }

  private formatString(value: string, format: string): string {
    // Обработка строк
    if (format === "upper") {
      return value.toUpperCase();
    } else if (format === "lower") {
      return value.toLowerCase();
    } else if (format === "truncate") {
      return value.length > 20 ? value.substring(0, 20) + "..." : value;
    }
    return value;
  }

  private formatDate(value: Date, format: string): string {
    // Обработка дат
    const options: Intl.DateTimeFormatOptions = {};

    if (format === "short") {
      options.day = "2-digit";
      options.month = "2-digit";
      options.year = "numeric";
    } else if (format === "long") {
      options.day = "2-digit";
      options.month = "long";
      options.year = "numeric";
      options.weekday = "long";
    }

    return new Intl.DateTimeFormat("ru-RU", options).format(value);
  }

  private formatArray(value: any[], format: string): string {
    // Обработка массивов
    if (format === "join") {
      return value.join(", ");
    } else if (format === "count") {
      return `Элементов: ${value.length}`;
    }
    return JSON.stringify(value);
  }

  private formatObject(value: object, format: string): string {
    // Обработка объектов
    if (format === "keys") {
      return Object.keys(value).join(", ");
    }
    return JSON.stringify(value);
  }
}
```

#### Асинхронная обработка в пайпах

Для операций, требующих асинхронной обработки (HTTP-запросы, тяжелые вычисления), можно комбинировать пайпы с RxJS:

```typescript
@Pipe({
  name: "translateAsync",
  pure: false,
})
export class TranslateAsyncPipe implements PipeTransform, OnDestroy {
  private value: string = "";
  private lastKey: string = "";
  private subscription: Subscription | null = null;

  constructor(private translateService: TranslateService) {}

  transform(key: string, language: string = "en"): string {
    if (key !== this.lastKey) {
      this.lastKey = key;
      this.updateValue(key, language);
    }
    return this.value;
  }

  private updateValue(key: string, language: string): void {
    // Отменяем предыдущую подписку при новом запросе
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    // Сбрасываем значение или показываем индикатор загрузки
    this.value = `Загрузка перевода для ${key}...`;

    // Выполняем асинхронный запрос
    this.subscription = this.translateService
      .getTranslation(key, language)
      .pipe(
        catchError((error) => {
          console.error("Ошибка перевода:", error);
          return of(`Ошибка перевода для ${key}`);
        })
      )
      .subscribe((translation) => {
        this.value = translation;
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
```

Использование асинхронного пайпа:

```html
<p>{{ 'welcome_message' | translateAsync:'ru' }}</p>
```

#### Пайпы для обработки данных бизнес-домена

```typescript
@Pipe({
  name: "orderStatus",
})
export class OrderStatusPipe implements PipeTransform {
  transform(status: string, format: "icon" | "text" | "color" | "class" = "text"): string {
    const statusMap = {
      pending: {
        text: "В обработке",
        icon: "hourglass",
        color: "#FFA500",
        class: "status-pending",
      },
      approved: {
        text: "Подтвержден",
        icon: "check_circle",
        color: "#4CAF50",
        class: "status-approved",
      },
      shipped: {
        text: "Отправлен",
        icon: "local_shipping",
        color: "#2196F3",
        class: "status-shipped",
      },
      delivered: {
        text: "Доставлен",
        icon: "done_all",
        color: "#4CAF50",
        class: "status-delivered",
      },
      cancelled: {
        text: "Отменен",
        icon: "cancel",
        color: "#F44336",
        class: "status-cancelled",
      },
      refunded: {
        text: "Возвращен",
        icon: "reply",
        color: "#9E9E9E",
        class: "status-refunded",
      },
    };

    // Если статус не найден, возвращаем значение по умолчанию
    if (!statusMap[status]) {
      if (format === "text") return "Неизвестный статус";
      if (format === "icon") return "help";
      if (format === "color") return "#9E9E9E";
      if (format === "class") return "status-unknown";
      return status;
    }

    // Возвращаем нужный формат
    return statusMap[status][format];
  }
}
```

Использование в шаблоне:

```html
<div class="order-item" [ngClass]="order.status | orderStatus:'class'">
  <span class="material-icons" [style.color]="order.status | orderStatus:'color'"> {{ order.status | orderStatus:'icon' }} </span>
  <span>Статус: {{ order.status | orderStatus:'text' }}</span>
</div>
```

#### Пайпы для визуализации данных

```typescript
@Pipe({
  name: "chartData",
})
export class ChartDataPipe implements PipeTransform {
  transform(data: any[], chartType: "pie" | "bar" | "line" = "bar", options: any = {}): any {
    if (!data || !data.length) {
      return { labels: [], datasets: [] };
    }

    switch (chartType) {
      case "pie":
        return this.preparePieChartData(data, options);
      case "line":
        return this.prepareLineChartData(data, options);
      case "bar":
      default:
        return this.prepareBarChartData(data, options);
    }
  }

  private preparePieChartData(data: any[], options: any): any {
    const labels = data.map((item) => item[options.labelField || "label"]);
    const values = data.map((item) => item[options.valueField || "value"]);

    // Генерация цветов, если не указаны
    const colors = options.colors || values.map((_, i) => this.getRandomColor(i, values.length));

    return {
      labels,
      datasets: [
        {
          data: values,
          backgroundColor: colors,
        },
      ],
    };
  }

  private prepareBarChartData(data: any[], options: any): any {
    // Реализация для столбчатой диаграммы
    // ...
  }

  private prepareLineChartData(data: any[], options: any): any {
    // Реализация для линейного графика
    // ...
  }

  private getRandomColor(index: number, total: number): string {
    // Генерация цвета на основе индекса
    const hue = (index / total) * 360;
    return `hsl(${hue}, 70%, 60%)`;
  }
}
```

Использование:

```html
<div>
  <canvas baseChart [data]="salesData | chartData:'pie':{ labelField: 'category', valueField: 'amount' }" [type]="'pie'" [options]="chartOptions"> </canvas>
</div>
```

#### Комбинирование функциональности

Для очень сложных преобразований рекомендуется разбивать логику на отдельные пайпы и комбинировать их:

```typescript
// Вместо одного сложного пайпа:
{{ data | complexProcessingPipe }}

// Используйте комбинацию более простых пайпов:
{{ data | filterByStatus:activeStatus | sortBy:sortField:sortDirection | paginate:page:pageSize }}
```

Этот подход более удобен для поддержки, тестирования и переиспользования.

#### Заключение

При создании сложных пайпов помните:

1. **Оптимизируйте производительность** с помощью кэширования и мемоизации
2. **Разделяйте сложную логику** на маленькие, легко тестируемые пайпы
3. **Учитывайте влияние нечистых пайпов** на производительность
4. **Предусматривайте обработку ошибок** и крайних случаев
5. **Обеспечивайте типобезопасность** с помощью TypeScript
6. **Соблюдайте принцип единственной ответственности**
7. **Добавляйте юнит-тесты** для всех сложных трансформаций

## Angular Routing Concepts

### 1. What is `Routing` in Angular, and what is it used for?

Маршрутизация (routing) в Angular — это механизм, который позволяет создавать одностраничные приложения (SPA) с несколькими представлениями и обеспечивает навигацию между ними без полной перезагрузки страницы.

#### Основные концепции маршрутизации

- **Одностраничное приложение (SPA)** — веб-приложение, которое динамически обновляет содержимое страницы без полной перезагрузки
- **Маршрут (Route)** — правило, связывающее URL-путь с компонентом Angular
- **Router-outlet** — специальная директива, указывающая, где должны отображаться компоненты для активных маршрутов
- **RouterLink** — директива для создания ссылок между различными маршрутами
- **Router** — сервис для программной навигации между маршрутами

#### Для чего используется маршрутизация

1. **Создание многостраничного опыта** в одностраничном приложении
2. **Поддержка закладок и истории браузера** — пользователи могут сохранять URL и использовать кнопки "Назад" и "Вперед"
3. **Улучшение пользовательского опыта** — быстрые переходы между страницами без перезагрузки
4. **Модульная архитектура** — разделение приложения на независимые модули с ленивой загрузкой
5. **Управление доступом к страницам** с помощью защитников маршрутов (route guards)
6. **Передача данных между компонентами** через параметры маршрута

#### Преимущества маршрутизации в Angular

- **Декларативный подход** — маршруты определяются через конфигурацию
- **Глубокая интеграция с фреймворком** — тесно связана с другими частями Angular
- **Интеграция с Angular CLI** — автоматическая генерация и конфигурация маршрутов
- **Защита маршрутов** — механизмы для контроля доступа к разным частям приложения
- **Ленивая загрузка модулей** — загрузка кода только при необходимости
- **Расширяемость** — возможность создания пользовательских стратегий и защитников маршрутов

### 2. How do you configure a basic routing system using `RouterModule` and `router-outlet`?

Настройка базовой системы маршрутизации в Angular включает несколько шагов: определение маршрутов, импорт RouterModule, добавление router-outlet и создание навигации.

#### Шаг 1: Определение маршрутов

Создайте файл конфигурации маршрутов (обычно `app-routing.module.ts`):

```typescript
// app-routing.module.ts
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Импортируем компоненты, которые будут связаны с маршрутами
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { NotFoundComponent } from "./not-found/not-found.component";

// Определяем маршруты
const routes: Routes = [
  { path: "", component: HomeComponent }, // Маршрут по умолчанию
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "**", component: NotFoundComponent }, // Маршрут "не найдено" (всегда должен быть последним)
];

@NgModule({
  // Регистрируем маршруты в приложении
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], // Экспортируем RouterModule для использования в AppModule
})
export class AppRoutingModule {}
```

#### Шаг 2: Импорт модуля маршрутизации в основной модуль

```typescript
// app.module.ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module"; // Импортируем модуль маршрутизации

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { NotFoundComponent } from "./not-found/not-found.component";

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, ContactComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule, // Подключаем модуль маршрутизации
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

#### Шаг 3: Добавление router-outlet в шаблон

`router-outlet` — это директива, которая указывает, где будут отображаться компоненты для активных маршрутов:

```html
<!-- app.component.html -->
<header>
  <h1>Мое Angular-приложение</h1>
  <!-- Навигация будет здесь -->
</header>

<main>
  <!-- Компоненты маршрутов будут загружаться здесь -->
  <router-outlet></router-outlet>
</main>

<footer>
  <p>&copy; 2023 Мое Angular-приложение</p>
</footer>
```

#### Шаг 4: Создание навигационных ссылок

Используйте директиву `routerLink` для создания ссылок между маршрутами:

```html
<!-- app.component.html -->
<header>
  <h1>Мое Angular-приложение</h1>
  <nav>
    <ul>
      <li><a routerLink="/home" routerLinkActive="active">Главная</a></li>
      <li><a routerLink="/about" routerLinkActive="active">О нас</a></li>
      <li><a routerLink="/contact" routerLinkActive="active">Контакты</a></li>
    </ul>
  </nav>
</header>

<main>
  <router-outlet></router-outlet>
</main>

<footer>
  <p>&copy; 2023 Мое Angular-приложение</p>
</footer>
```

В этом примере:

- `routerLink` — директива для создания ссылки на маршрут
- `routerLinkActive` — директива, добавляющая CSS-класс активной ссылке

#### Шаг 5: Программная навигация (опционально)

Для навигации из кода компонента используйте сервис `Router`:

```typescript
// any.component.ts
import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-any",
  template: `
    <button (click)="goToHome()">Перейти на главную</button>
    <button (click)="goToAbout()">Перейти на страницу "О нас"</button>
  `,
})
export class AnyComponent {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(["/home"]);
  }

  goToAbout() {
    this.router.navigateByUrl("/about");
  }
}
```

#### Шаг 6: Базовый путь (опционально)

В файле `index.html` укажите базовый путь для маршрутизации:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>My Angular App</title>
    <base href="/" />
    <!-- Базовый путь для маршрутизации -->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
  </head>
  <body>
    <app-root></app-root>
  </body>
</html>
```

#### Дополнительные настройки маршрутизации

#### Маршрутизация для компонентов Angular Standalone

С Angular 14+ вы можете настроить маршрутизацию непосредственно в bootstrap:

```typescript
// main.ts (для Angular 14+)
import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { AppComponent } from "./app/app.component";

const routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  // ... другие маршруты
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
```

#### Настройка дополнительных параметров в forRoot

```typescript
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true, // Использование хэш-стратегии URL (#)
      enableTracing: true, // Включение отладки маршрутизации (для разработки)
      scrollPositionRestoration: "enabled", // Восстановление позиции прокрутки
      anchorScrolling: "enabled", // Включение прокрутки к якорям
      preloadingStrategy: PreloadAllModules, // Стратегия предварительной загрузки
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

### 3. How do you use route parameters and queryParams to pass and retrieve data in routes?

Маршрутизация в Angular позволяет передавать данные между компонентами с помощью различных типов параметров. Это особенно полезно для отображения детальной информации, фильтрации и пагинации.

#### Типы параметров в маршрутизации Angular

1. **Обязательные параметры маршрута** — внедряются в путь с префиксом `:` (например, `/users/:id`)
2. **Матричные параметры** — добавляются к сегменту пути с префиксом `;` (например, `/users;sort=name`)
3. **Query-параметры (queryParams)** — добавляются к URL после `?` (например, `/users?page=1&sort=name`)
4. **Фрагменты** — добавляются к URL после `#` (например, `/users#userList`)
5. **Данные маршрута (data)** — статические данные, определенные в конфигурации маршрута

#### Обязательные параметры маршрута

#### Определение маршрута с параметром

```typescript
const routes: Routes = [{ path: "users/:id", component: UserDetailComponent }];
```

#### Создание ссылок с параметрами

```html
<!-- С помощью routerLink -->
<a [routerLink]="['/users', user.id]">{{ user.name }}</a>

<!-- С помощью routerLink в строковом формате -->
<a routerLink="/users/{{ user.id }}">{{ user.name }}</a>
```

#### Программная навигация с параметрами

```typescript
// В компоненте
goToUserDetail(userId: string) {
  this.router.navigate(['/users', userId]);

  // Альтернативный вариант
  this.router.navigateByUrl(`/users/${userId}`);
}
```

#### Получение параметров маршрута

```typescript
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-user-detail",
  template: `<div *ngIf="user">Профиль пользователя: {{ user.name }}</div>`,
})
export class UserDetailComponent implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit() {
    // Вариант 1: использование снимка (snapshot) для одноразового получения
    const userId = this.route.snapshot.paramMap.get("id");
    this.userService.getUser(userId).subscribe((user) => (this.user = user));

    // Вариант 2: реактивный подход для реагирования на изменения параметров
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          const id = params.get("id");
          return this.userService.getUser(id);
        })
      )
      .subscribe((user) => (this.user = user));
  }
}
```

#### Query-параметры (queryParams)

Query-параметры не являются частью определения маршрута и могут использоваться с любым маршрутом для передачи дополнительной информации.

#### Создание ссылок с query-параметрами

```html
<!-- С объектом параметров -->
<a [routerLink]="['/users']" [queryParams]="{page: 1, sort: 'name'}"> Пользователи (стр. 1, сортировка по имени) </a>

<!-- Сохранение текущих параметров при навигации -->
<a [routerLink]="['/users']" [queryParams]="{page: 2}" queryParamsHandling="merge"> Следующая страница </a>
```

Параметр `queryParamsHandling` может быть:

- `"merge"` — объединение новых параметров с существующими
- `"preserve"` — сохранение всех текущих параметров без добавления новых

#### Программная навигация с query-параметрами

```typescript
// В компоненте
applyFilters() {
  this.router.navigate(['/users'], {
    queryParams: {
      category: this.selectedCategory,
      sort: this.sortOrder,
      page: 1
    },
    queryParamsHandling: 'merge' // Можно использовать 'merge' или 'preserve'
  });
}
```

#### Получение query-параметров

```typescript
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-user-list",
  template: `
    <div>
      <h2>Список пользователей</h2>
      <p>Страница: {{ page }}, Сортировка: {{ sort }}</p>
      <!-- Содержимое компонента -->
    </div>
  `,
})
export class UserListComponent implements OnInit {
  page: number = 1;
  sort: string = "name";

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Вариант 1: снимок для одноразового получения
    this.page = Number(this.route.snapshot.queryParamMap.get("page")) || 1;
    this.sort = this.route.snapshot.queryParamMap.get("sort") || "name";

    // Вариант 2: реактивный подход для реагирования на изменения параметров
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      this.page = Number(params.get("page")) || 1;
      this.sort = params.get("sort") || "name";
      this.loadUsers(); // Загружаем данные с новыми параметрами
    });
  }

  loadUsers() {
    // Логика загрузки пользователей с учетом параметров
  }
}
```

#### Матричные параметры

Матричные параметры — это альтернативный способ передачи параметров, которые привязаны к конкретному сегменту URL.

#### Создание ссылок с матричными параметрами

```html
<a [routerLink]="['/users', {sort: 'name', view: 'grid'}]"> Пользователи (сетка, сортировка по имени) </a>
```

#### Программная навигация с матричными параметрами

```typescript
this.router.navigate(["/users", { sort: "name", view: "grid" }]);
```

#### Получение матричных параметров

```typescript
this.route.paramMap.subscribe((params) => {
  const sort = params.get("sort"); // 'name'
  const view = params.get("view"); // 'grid'
});
```

#### Фрагменты (хэш-якоря)

Фрагменты используются для прокрутки к определенной части страницы.

#### Создание ссылок с фрагментами

```html
<a [routerLink]="['/users']" fragment="userList"> Перейти к списку пользователей </a>
```

#### Программная навигация с фрагментами

```typescript
this.router.navigate(["/users"], { fragment: "userList" });
```

#### Получение текущего фрагмента

```typescript
this.route.fragment.subscribe((fragment) => {
  if (fragment) {
    // Прокрутка к элементу с указанным id
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
});
```

#### Данные маршрута (data)

Данные маршрута позволяют прикрепить статические данные к маршруту, которые будут доступны компоненту.

#### Определение данных в маршруте

```typescript
const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    data: {
      title: "Панель администратора",
      requiredRole: "ADMIN",
      breadcrumb: "Админ",
    },
  },
];
```

#### Получение данных маршрута

```typescript
ngOnInit() {
  // Через снимок
  const title = this.route.snapshot.data['title'];

  // Реактивный подход
  this.route.data.subscribe(data => {
    this.pageTitle = data['title'];
    this.requiredRole = data['requiredRole'];
  });
}
```

#### Комбинирование разных типов параметров

Вы можете комбинировать различные типы параметров для сложных сценариев навигации:

```typescript
// Программная навигация со всеми типами параметров
this.router.navigate(
  ["/users", userId, { view: "details" }], // Путь с обязательным и матричными параметрами
  {
    queryParams: { ref: "dashboard" }, // Query-параметры
    fragment: "contact-info", // Фрагмент
    queryParamsHandling: "merge", // Объединение с текущими query-параметрами
  }
);
```

#### Сохранение параметров при отображении дочерних маршрутов

```typescript
const routes: Routes = [
  {
    path: "users",
    component: UsersComponent,
    children: [
      { path: "", component: UserListComponent },
      { path: ":id", component: UserDetailComponent },
    ],
  },
];
```

В этом случае, при навигации к `/users/:id`, компонент `UsersComponent` все еще будет иметь доступ к query-параметрам родительского маршрута.

### 4. Can you provide an example of using child routes?

Дочерние маршруты позволяют создавать иерархию маршрутов, где "дети" отображаются внутри "родительского" компонента. Это полезно для создания сложных интерфейсов с общими элементами (например, панель навигации, заголовки) и вложенными представлениями.

#### Основы дочерних маршрутов

Дочерние маршруты имеют следующие особенности:

- Определяются в свойстве `children` маршрута
- Требуют дополнительный `<router-outlet>` в родительском компоненте
- Обеспечивают организацию URL в иерархическую структуру
- Позволяют наследовать данные и параметры от родительских маршрутов

#### Пример 1: Базовая структура дочерних маршрутов

Рассмотрим пример панели администратора с дочерними маршрутами для разных разделов:

#### Определение маршрутов

```typescript
// app-routing.module.ts
const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent, // Родительский компонент
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" }, // Редирект на дочерний маршрут
      { path: "dashboard", component: AdminDashboardComponent }, // Дочерний маршрут
      { path: "users", component: AdminUsersComponent }, // Дочерний маршрут
      { path: "products", component: AdminProductsComponent }, // Дочерний маршрут
    ],
  },
];
```

#### Родительский компонент с router-outlet

```typescript
// admin.component.ts
@Component({
  selector: "app-admin",
  template: `
    <div class="admin-layout">
      <nav class="admin-sidebar">
        <ul>
          <li><a routerLink="./dashboard" routerLinkActive="active">Дашборд</a></li>
          <li><a routerLink="./users" routerLinkActive="active">Пользователи</a></li>
          <li><a routerLink="./products" routerLinkActive="active">Товары</a></li>
        </ul>
      </nav>
      <div class="admin-content">
        <router-outlet></router-outlet>
        <!-- Здесь будут отображаться дочерние компоненты -->
      </div>
    </div>
  `,
  styles: [
    `
      .admin-layout {
        display: flex;
      }
      .admin-sidebar {
        width: 250px;
      }
      .admin-content {
        flex: 1;
        padding: 20px;
      }
      .active {
        font-weight: bold;
      }
    `,
  ],
})
export class AdminComponent {}
```

#### Примечания к примеру

- Родительский URL: `/admin`
- Дочерние URL: `/admin/dashboard`, `/admin/users`, `/admin/products`
- `./` в `routerLink="./dashboard"` указывает на относительный путь от текущего маршрута
- Компонент `AdminComponent` всегда отображается для всех дочерних маршрутов
- Дочерние компоненты отображаются внутри `<router-outlet>` родительского компонента

#### Пример 2: Многоуровневая иерархия маршрутов

Давайте расширим предыдущий пример, добавив еще один уровень вложенности:

```typescript
const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: AdminDashboardComponent },
      {
        path: "users",
        component: AdminUsersComponent,
        children: [
          { path: "", component: UserListComponent }, // /admin/users
          { path: "create", component: UserCreateComponent }, // /admin/users/create
          { path: ":id", component: UserDetailComponent }, // /admin/users/123
          { path: ":id/edit", component: UserEditComponent }, // /admin/users/123/edit
        ],
      },
      { path: "products", component: AdminProductsComponent },
    ],
  },
];
```

#### Компонент среднего уровня

```typescript
// admin-users.component.ts
@Component({
  selector: "app-admin-users",
  template: `
    <div class="users-container">
      <header>
        <h2>Управление пользователями</h2>
        <button routerLink="./create">Добавить пользователя</button>
      </header>
      <div class="users-content">
        <router-outlet></router-outlet>
        <!-- Вложенный router-outlet для дочерних маршрутов users -->
      </div>
    </div>
  `,
})
export class AdminUsersComponent {}
```

#### Пример 3: Дочерние маршруты с параметрами и данными

```typescript
const routes: Routes = [
  {
    path: "products",
    component: ProductLayoutComponent,
    data: { breadcrumb: "Продукты" }, // Данные для хлебных крошек
    children: [
      {
        path: "",
        component: ProductListComponent,
        data: { title: "Список продуктов" },
      },
      {
        path: ":id",
        component: ProductDetailComponent,
        data: { title: "Детали продукта" },
        resolve: {
          product: ProductResolver, // Резолвер для загрузки данных о продукте
        },
      },
      {
        path: ":id/reviews",
        component: ProductReviewsComponent,
        data: { title: "Отзывы о продукте" },
      },
    ],
  },
];
```

#### Получение параметров и данных в дочерних компонентах

```typescript
// product-detail.component.ts
@Component({
  selector: "app-product-detail",
  template: `
    <div *ngIf="product">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <a [routerLink]="['./reviews']">Отзывы ({{ product.reviewCount }})</a>
    </div>
  `,
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Получение данных из резолвера
    this.product = this.route.snapshot.data["product"];

    // Или реактивный подход
    this.route.data.subscribe((data) => {
      this.product = data["product"];
    });
  }
}
```

#### Пример 4: Именованные router-outlet для параллельных маршрутов

Angular поддерживает одновременное отображение нескольких компонентов через именованные outlet:

```typescript
const routes: Routes = [
  {
    path: "workspace",
    component: WorkspaceComponent,
    children: [
      { path: "", component: WorkspaceHomeComponent }, // Основной outlet
      {
        path: "panel",
        component: SidePanelComponent,
        outlet: "side", // Именованный outlet
      },
      {
        path: "help",
        component: HelpDialogComponent,
        outlet: "popup", // Другой именованный outlet
      },
    ],
  },
];
```

#### Использование нескольких outlet в шаблоне

```html
<!-- workspace.component.html -->
<div class="workspace-layout">
  <main class="main-content">
    <router-outlet></router-outlet>
    <!-- Основной outlet (без имени) -->
  </main>

  <aside class="side-panel">
    <router-outlet name="side"></router-outlet>
    <!-- Именованный outlet 'side' -->
  </aside>

  <div class="overlay">
    <router-outlet name="popup"></router-outlet>
    <!-- Именованный outlet 'popup' -->
  </div>
</div>
```

#### Навигация к именованным outlet

```html
<!-- Активация нескольких outlet одновременно -->
<a [routerLink]="['/workspace', { outlets: { primary: '', side: 'panel', popup: 'help' } }]"> Открыть полный интерфейс </a>

<!-- Активация только одного именованного outlet -->
<button [routerLink]="['/workspace', { outlets: { side: 'panel' } }]">Открыть боковую панель</button>

<!-- Закрытие именованного outlet -->
<button [routerLink]="['/workspace', { outlets: { popup: null } }]">Закрыть справку</button>
```

#### Пример 5: Дочерние маршруты с защитой (guards)

```typescript
const routes: Routes = [
  {
    path: "account",
    component: AccountLayoutComponent,
    canActivate: [AuthGuard], // Защита всего раздела аккаунта
    children: [
      { path: "", redirectTo: "profile", pathMatch: "full" },
      { path: "profile", component: ProfileComponent },
      {
        path: "settings",
        component: SettingsComponent,
        canDeactivate: [UnsavedChangesGuard], // Защита от ухода с несохраненными изменениями
      },
      {
        path: "billing",
        component: BillingComponent,
        canActivate: [SubscriptionGuard], // Дополнительная защита для страницы биллинга
      },
    ],
  },
];
```

В этом примере:

- `AuthGuard` проверяет, авторизован ли пользователь для доступа к разделу аккаунта
- `UnsavedChangesGuard` предотвращает уход со страницы настроек при наличии несохраненных изменений
- `SubscriptionGuard` проверяет, есть ли у пользователя активная подписка для доступа к странице биллинга

#### Преимущества дочерних маршрутов

1. **Единообразный интерфейс** — общие элементы остаются на месте при навигации
2. **Модульность кода** — логическое разделение компонентов по иерархии
3. **Чистая организация URL** — иерархическая структура, отражающая структуру UI
4. **Повторное использование** — родительские компоненты и их логика используются для всех дочерних маршрутов
5. **Изоляция** — дочерние маршруты могут иметь собственные guards, resolvers и другие механизмы

#### Советы по работе с дочерними маршрутами

1. **Используйте относительную навигацию** для упрощения маршрутов:

   ```html
   <!-- Относительно текущего маршрута -->
   <a routerLink="./details">Детали</a>

   <!-- Относительно родительского маршрута -->
   <a routerLink="../settings">Настройки</a>
   ```

2. **Передавайте общие данные через родительский маршрут**:

   ```typescript
   {
     path: 'courses/:courseId',
     component: CourseComponent,
     resolve: { course: CourseResolver },
     children: [
       { path: 'lessons', component: LessonsComponent },
       { path: 'students', component: StudentsComponent }
     ]
   }
   ```

3. **Используйте lazy loading для больших подсекций**:
   ```typescript
   {
     path: 'admin',
     loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
   }
   ```

### 5. What are the preloading strategies, and how do you use them?

Стратегии предварительной загрузки (preloading strategies) в Angular определяют, как и когда должны загружаться модули с ленивой загрузкой (lazy-loaded modules) после завершения начальной загрузки приложения. Это позволяет оптимизировать пользовательский опыт, балансируя между начальным временем загрузки и отзывчивостью при последующей навигации.

#### Доступные стратегии предварительной загрузки

Angular предоставляет несколько встроенных стратегий:

1. **NoPreloading** — стратегия по умолчанию, не выполняет предварительную загрузку
2. **PreloadAllModules** — предварительно загружает все модули с ленивой загрузкой
3. **QuicklinkStrategy** — загружает только модули, связанные со ссылками на текущей странице (из библиотеки ngx-quicklink)
4. **Пользовательские стратегии** — можно создать собственную стратегию для специфических требований

#### Как использовать стратегии предварительной загрузки

#### Настройка в модуле маршрутизации

```typescript
// app-routing.module.ts
import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "admin",
    loadChildren: () => import("./admin/admin.module").then((m) => m.AdminModule),
  },
  {
    path: "products",
    loadChildren: () => import("./products/products.module").then((m) => m.ProductsModule),
  },
  {
    path: "profile",
    loadChildren: () => import("./profile/profile.module").then((m) => m.ProfileModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules, // Указываем стратегию предварительной загрузки
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

#### Использование NoPreloading (стратегия по умолчанию)

```typescript
// По умолчанию, если preloadingStrategy не указана, используется NoPreloading
RouterModule.forRoot(routes);

// Или явно
import { NoPreloading } from "@angular/router";
RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading });
```

С этой стратегией:

- Модули загружаются только по требованию при навигации
- Начальная загрузка приложения самая быстрая
- При переходе по маршруту с ленивой загрузкой будет пауза для загрузки модуля

#### Использование PreloadAllModules

```typescript
import { PreloadAllModules } from "@angular/router";

RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules,
});
```

С этой стратегией:

- Все модули с ленивой загрузкой будут предварительно загружены после завершения основной загрузки
- Навигация между маршрутами будет мгновенной, так как код уже загружен
- Подходит для небольших и средних приложений
- Повышает начальное время загрузки, но улучшает последующую отзывчивость

#### Создание пользовательской стратегии предварительной загрузки

Вы можете создать собственную стратегию предварительной загрузки, реализуя интерфейс `PreloadingStrategy`.

#### Пример: Стратегия на основе данных маршрута

Предположим, мы хотим предварительно загружать только те модули, которые помечены свойством `preload: true` в данных маршрута:

```typescript
// selective-preloading-strategy.ts
import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({ providedIn: "root" })
export class SelectivePreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    // Проверяем, есть ли у маршрута data.preload
    if (route.data && route.data["preload"]) {
      console.log(`Предварительная загрузка: ${route.path}`);
      return load(); // Предварительно загружаем модуль
    } else {
      return of(null); // Не загружаем модуль предварительно
    }
  }
}
```

#### Использование пользовательской стратегии

```typescript
// app-routing.module.ts
import { SelectivePreloadingStrategy } from "./selective-preloading-strategy";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "admin",
    loadChildren: () => import("./admin/admin.module").then((m) => m.AdminModule),
    data: { preload: true }, // Этот модуль будет предварительно загружен
  },
  {
    path: "products",
    loadChildren: () => import("./products/products.module").then((m) => m.ProductsModule),
    data: { preload: true }, // И этот тоже
  },
  {
    path: "rarely-used",
    loadChildren: () => import("./rarely-used/rarely-used.module").then((m) => m.RarelyUsedModule),
    // У этого маршрута нет data.preload, поэтому он не будет предварительно загружен
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: SelectivePreloadingStrategy,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

#### Пример: Сложная стратегия предварительной загрузки с сетевым определением

Стратегия, которая предварительно загружает модули только при хорошем соединении:

```typescript
// network-aware-preloading-strategy.ts
import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({ providedIn: "root" })
export class NetworkAwarePreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    // Проверяем соединение с помощью API NetworkInformation
    if (this.hasGoodConnection()) {
      console.log(`Предварительная загрузка: ${route.path}`);
      return load();
    } else {
      console.log(`Пропуск предварительной загрузки: ${route.path} (плохое соединение)`);
      return of(null);
    }
  }

  private hasGoodConnection(): boolean {
    // Используем API веб-браузера для проверки соединения
    const connection = (navigator as any).connection;

    if (!connection) {
      return true; // Если API не поддерживается, предполагаем хорошее соединение
    }

    // Не загружаем предварительно при медленном соединении или режиме экономии данных
    if (connection.saveData) {
      return false; // Уважаем режим экономии данных
    }

    // 'slow-2g', '2g', '3g', '4g'
    const effectiveType = connection.effectiveType || "";

    return !/slow-2g|2g|3g/.test(effectiveType);
  }
}
```

#### Пример: Стратегия с приоритетами и задержкой

Стратегия, которая загружает модули в порядке приоритета с задержкой:

```typescript
// priority-preloading-strategy.ts
import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of, timer } from "rxjs";
import { mergeMap } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class PriorityPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    const priority = route.data?.["preloadPriority"] || 0;

    if (priority <= 0) {
      return of(null); // Не загружаем модули с приоритетом <= 0
    }

    // Высчитываем задержку в зависимости от приоритета
    // Более высокий приоритет означает меньшую задержку
    const delay = 10000 / priority;

    return timer(delay).pipe(
      mergeMap(() => {
        console.log(`Предварительная загрузка: ${route.path} (приоритет: ${priority})`);
        return load();
      })
    );
  }
}
```

Использование:

```typescript
const routes: Routes = [
  {
    path: "dashboard",
    loadChildren: () => import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
    data: { preloadPriority: 100 }, // Загрузится первым с минимальной задержкой
  },
  {
    path: "products",
    loadChildren: () => import("./products/products.module").then((m) => m.ProductsModule),
    data: { preloadPriority: 50 }, // Загрузится вторым
  },
  {
    path: "admin",
    loadChildren: () => import("./admin/admin.module").then((m) => m.AdminModule),
    data: { preloadPriority: 20 }, // Загрузится третьим
  },
  {
    path: "reports",
    loadChildren: () => import("./reports/reports.module").then((m) => m.ReportsModule),
    data: { preloadPriority: 0 }, // Не будет предварительно загружен
  },
];
```

#### Отслеживание процесса предварительной загрузки

Чтобы отслеживать процесс предварительной загрузки, можно создать сервис:

```typescript
// preloading-service.ts
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

export interface PreloadingState {
  moduleName: string;
  status: "started" | "completed" | "error";
}

@Injectable({ providedIn: "root" })
export class PreloadingService {
  private preloadingSubject = new Subject<PreloadingState>();
  preloading$ = this.preloadingSubject.asObservable();

  startPreloading(moduleName: string): void {
    this.preloadingSubject.next({ moduleName, status: "started" });
  }

  completePreloading(moduleName: string): void {
    this.preloadingSubject.next({ moduleName, status: "completed" });
  }

  preloadingError(moduleName: string): void {
    this.preloadingSubject.next({ moduleName, status: "error" });
  }
}
```

И интегрировать его в пользовательскую стратегию:

```typescript
import { inject } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";
import { mergeMap, catchError } from "rxjs/operators";
import { PreloadingService } from "./preloading-service";

export class TrackedPreloadingStrategy implements PreloadingStrategy {
  private preloadingService = inject(PreloadingService);

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data?.["preload"] !== true) {
      return of(null);
    }

    const moduleName = route.path;
    this.preloadingService.startPreloading(moduleName);

    return load().pipe(
      mergeMap((module) => {
        this.preloadingService.completePreloading(moduleName);
        return of(module);
      }),
      catchError((error) => {
        this.preloadingService.preloadingError(moduleName);
        console.error(`Ошибка предварительной загрузки модуля ${moduleName}:`, error);
        return of(null);
      })
    );
  }
}
```

#### Выбор оптимальной стратегии предварительной загрузки

Рекомендации по выбору стратегии:

1. **NoPreloading**:

   - Для очень больших приложений, где быстрый первоначальный запуск критичен
   - Когда пользователи обычно работают только с одним разделом
   - Для приложений с медленным интернет-соединением

2. **PreloadAllModules**:

   - Для небольших и средних приложений
   - Когда пользователи активно перемещаются между разделами
   - Для улучшения UX после начальной загрузки

3. **Пользовательские стратегии**:
   - Для крупных приложений с четко определенными паттернами использования
   - Когда требуется учитывать сетевые условия или приоритеты
   - Для оптимизации опыта конкретных групп пользователей

### 6. How do you use `Route Guards` (e.g., `CanActivate` and `CanDeactivate`) to protect routes?

Route Guards (защитники маршрутов) — это механизмы в Angular, которые позволяют контролировать доступ к маршрутам и навигацию между ними. Они помогают реализовать различные сценарии безопасности, предотвращать потерю данных и управлять навигацией на основе бизнес-логики.

#### Типы Guards в Angular

Angular предоставляет несколько встроенных интерфейсов для создания защитников маршрутов:

1. **CanActivate** — контролирует, может ли пользователь получить доступ к маршруту
2. **CanActivateChild** — контролирует, может ли пользователь получить доступ к дочерним маршрутам
3. **CanDeactivate** — контролирует, может ли пользователь покинуть маршрут (например, при несохраненных изменениях)
4. **CanLoad** — контролирует, может ли быть загружен модуль с ленивой загрузкой
5. **Resolve** — загружает данные перед активацией маршрута

#### Пример 1: CanActivate Guard для аутентификации

CanActivate используется, чтобы разрешить или запретить доступ к маршруту на основе определенных условий.

```typescript
// auth.guard.ts
import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isLoggedIn()) {
      return true; // Доступ разрешен
    }

    // Перенаправление на страницу входа с сохранением исходного URL
    return this.router.createUrlTree(["/login"], {
      queryParams: { returnUrl: state.url },
    });
  }
}
```

#### Применение AuthGuard в маршрутах

```typescript
// app-routing.module.ts
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthGuard], // Применение guard к одиночному маршруту
  },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard], // Guard для родительского маршрута
    // При необходимости можно использовать дополнительные guard
    canActivateChild: [AdminGuard],
    children: [
      { path: "dashboard", component: AdminDashboardComponent },
      { path: "users", component: AdminUsersComponent },
      { path: "settings", component: AdminSettingsComponent },
    ],
  },
];
```

#### Пример 2: CanActivate с проверкой ролей

Расширенный guard для проверки прав доступа на основе ролей пользователя:

```typescript
// role.guard.ts
import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Ожидаемая роль определена в данных маршрута
    const expectedRole = route.data["role"];

    // Проверяем, авторизован ли пользователь и имеет ли он нужную роль
    if (this.authService.isLoggedIn() && this.authService.hasRole(expectedRole)) {
      return true;
    }

    // Если пользователь авторизован, но не имеет нужной роли
    if (this.authService.isLoggedIn()) {
      this.router.navigate(["/forbidden"]);
    } else {
      this.router.navigate(["/login"], {
        queryParams: { returnUrl: state.url },
      });
    }

    return false;
  }
}
```

#### Применение RoleGuard в маршрутах

```typescript
const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [RoleGuard],
    data: { role: "ADMIN" }, // Передаем ожидаемую роль
  },
  {
    path: "editor",
    component: EditorComponent,
    canActivate: [RoleGuard],
    data: { role: "EDITOR" },
  },
  {
    path: "forbidden",
    component: ForbiddenComponent,
  },
];
```

#### Пример 3: CanDeactivate для предотвращения потери данных

CanDeactivate используется для предотвращения случайного ухода со страницы при наличии несохраненных изменений:

```typescript
// unsaved-changes.guard.ts
import { Injectable } from "@angular/core";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

// Интерфейс для компонентов, которые могут иметь несохраненные изменения
export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: "root",
})
export class UnsavedChangesGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // Вызываем метод canDeactivate компонента, если он существует
    if (component.canDeactivate) {
      return component.canDeactivate();
    }

    // По умолчанию разрешаем переход
    return true;
  }
}
```

#### Реализация интерфейса в компоненте формы

```typescript
// edit-form.component.ts
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { CanComponentDeactivate } from "./unsaved-changes.guard";

@Component({
  selector: "app-edit-form",
  templateUrl: "./edit-form.component.html",
})
export class EditFormComponent implements OnInit, CanComponentDeactivate {
  form: FormGroup;
  initialFormValue: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: [""],
      email: [""],
      message: [""],
    });

    // Сохраняем начальное состояние формы
    this.initialFormValue = this.form.value;
  }

  // Метод для проверки наличия несохраненных изменений
  hasUnsavedChanges(): boolean {
    return JSON.stringify(this.initialFormValue) !== JSON.stringify(this.form.value);
  }

  // Реализация интерфейса CanComponentDeactivate
  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (this.hasUnsavedChanges()) {
      return confirm("У вас есть несохраненные изменения. Вы уверены, что хотите покинуть страницу?");
    }
    return true;
  }

  save() {
    // Логика сохранения
    this.initialFormValue = this.form.value;
  }
}
```

#### Применение UnsavedChangesGuard в маршрутах

```typescript
const routes: Routes = [{ path: "edit", component: EditFormComponent, canDeactivate: [UnsavedChangesGuard] }];
```

#### Пример 4: CanLoad для защиты ленивой загрузки модулей

CanLoad предотвращает загрузку модуля с ленивой загрузкой, если условие не выполняется:

```typescript
// auth-can-load.guard.ts
import { Injectable } from "@angular/core";
import { CanLoad, Route, UrlSegment, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthCanLoadGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }

    this.router.navigate(["/login"]);
    return false;
  }
}
```

#### Применение CanLoad в маршрутах

```typescript
const routes: Routes = [
  {
    path: "admin",
    loadChildren: () => import("./admin/admin.module").then((m) => m.AdminModule),
    canLoad: [AuthCanLoadGuard], // Предотвращает загрузку модуля, если пользователь не авторизован
  },
];
```

#### Пример 5: Resolve для предварительной загрузки данных

Resolver позволяет загрузить данные перед активацией маршрута:

```typescript
// user.resolver.ts
import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { UserService } from "./user.service";
import { User } from "./user.model";

@Injectable({
  providedIn: "root",
})
export class UserResolver implements Resolve<User> {
  constructor(private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    const userId = route.paramMap.get("id");

    return this.userService.getUser(userId).pipe(
      catchError((error) => {
        console.error("Ошибка при загрузке пользователя", error);
        return of(null); // Возвращаем null в случае ошибки
      })
    );
  }
}
```

#### Применение Resolver в маршрутах

```typescript
const routes: Routes = [
  {
    path: "users/:id",
    component: UserDetailComponent,
    resolve: {
      user: UserResolver, // Данные будут доступны как route.data.user
    },
  },
];
```

#### Доступ к данным резолвера в компоненте

```typescript
// user-detail.component.ts
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { User } from "./user.model";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
})
export class UserDetailComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Данные уже загружены резолвером и доступны в route.data
    this.user = this.route.snapshot.data["user"];

    // Или с использованием Observable для реактивности
    this.route.data.subscribe((data) => {
      this.user = data["user"];
      // Нет необходимости в индикаторе загрузки,
      // так как компонент отрисовывается только после загрузки данных
    });
  }
}
```

#### Создание многофункционального защитника с помощью функций (Angular 14+)

Начиная с Angular 14, можно использовать функциональный подход для создания guards:

```typescript
// auth.guards.ts
import { CanActivateFn, CanDeactivateFn, CanMatchFn, Router, UrlTree } from "@angular/router";
import { inject } from "@angular/core";
import { AuthService } from "./auth.service";

// Функциональный CanActivate
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  }

  return router.createUrlTree(["/login"], {
    queryParams: { returnUrl: state.url },
  });
};

// Функциональный CanDeactivate
export const unsavedChangesGuard: CanDeactivateFn<any> = (component, currentRoute, currentState, nextState) => {
  if (component.canDeactivate) {
    return component.canDeactivate();
  }
  
  if (component.hasUnsavedChanges && component.hasUnsavedChanges()) {
    return confirm('У вас есть несохраненные изменения. Вы уверены, что хотите покинуть страницу?');
  }
  
  return true;
};

// Функциональный CanMatch (замена CanLoad в Angular 14+)
export const roleMatchGuard: CanMatchFn = (route, segments) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const requiredRole = route.data?.['role'];
  
  if (authService.isLoggedIn() && authService.hasRole(requiredRole)) {
    return true;
  }
  
  if (authService.isLoggedIn()) {
    router.navigate(['/forbidden']);
  } else {
    router.navigate(['/login']);
  }
  
  return false;
};
```

Применение функциональных guards:

```typescript
const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [authGuard],
    canMatch: [roleMatchGuard],
    data: { role: 'ADMIN' }
  },
  {
    path: 'profile/edit',
    component: ProfileEditComponent,
    canDeactivate: [unsavedChangesGuard]
  }
];
```

#### Комбинирование нескольких guards

В Angular можно комбинировать несколько guards для одного маршрута:

```typescript
const routes: Routes = [
  {
    path: 'admin/settings',
    component: AdminSettingsComponent,
    canActivate: [AuthGuard, RoleGuard, FeatureGuard], // Все guards должны вернуть true
    data: { 
      role: 'ADMIN',
      requiredFeature: 'settings'
    },
    canDeactivate: [UnsavedChangesGuard]
  }
];
```

Порядок выполнения guards:
1. `canLoad` / `canMatch` — выполняется перед загрузкой модуля с ленивой загрузкой
2. `canActivate` — выполняется перед навигацией на маршрут
3. `canActivateChild` — выполняется для дочерних маршрутов
4. `resolve` — выполняется для загрузки данных перед активацией маршрута
5. `canDeactivate` — выполняется перед уходом с маршрута

#### Передача данных между guards и компонентами

```typescript
// permission.guard.ts
@Injectable({ providedIn: 'root' })
export class PermissionGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const permissions = this.getPermissions();
    
    // Сохраняем данные о разрешениях, чтобы они были доступны компоненту
    route.data = {
      ...route.data,
      resolvedPermissions: permissions
    };
    
    return true;
  }
  
  private getPermissions() {
    return ['read', 'write', 'delete'];
  }
}
```

#### Практические советы по использованию guards

1. **Используйте AuthGuard для защиты закрытых разделов**:
   ```typescript
   {
     path: 'secure',
     canActivate: [AuthGuard],
     children: [
       { path: 'profile', component: ProfileComponent },
       { path: 'settings', component: SettingsComponent }
     ]
   }
   ```

2. **Используйте RoleGuard для проверки прав доступа**:
   ```typescript
   {
     path: 'admin',
     canActivate: [AuthGuard, RoleGuard],
     data: { role: 'ADMIN' }
   }
   ```

3. **Используйте CanDeactivate для форм с несохраненными изменениями**:
   ```typescript
   {
     path: 'edit/:id',
     component: EditComponent,
     canDeactivate: [UnsavedChangesGuard]
   }
   ```

4. **Используйте Resolver для предварительной загрузки данных**:
   ```typescript
   {
     path: 'dashboard',
     component: DashboardComponent,
     resolve: {
       stats: StatisticsResolver,
       notifications: NotificationsResolver
     }
   }
   ```

5. **Используйте CanLoad для оптимизации загрузки бандлов**:
   ```typescript
   {
     path: 'reports',
     loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule),
     canLoad: [AuthGuard]
   }
   ```

### 7. What is `ActivatedRoute`, and how do you apply it to get information about the current route?

`ActivatedRoute` — это сервис в Angular, который содержит информацию о текущем активированном маршруте. Он предоставляет доступ к параметрам маршрута, query-параметрам, данным и другой информации, связанной с текущим URL и маршрутом.

#### Основные свойства ActivatedRoute

`ActivatedRoute` предоставляет следующие ключевые свойства:

1. **`url`** — Observable, содержащий URL-сегменты текущего маршрута
2. **`params`** — Observable с параметрами маршрута (например, `:id` в `/users/:id`)
3. **`queryParams`** — Observable с query-параметрами URL (после `?` в URL)
4. **`fragment`** — Observable с фрагментом URL (после `#` в URL)
5. **`data`** — Observable с данными, определенными в конфигурации маршрута или resolvers
6. **`snapshot`** — неизменяемый снимок текущего состояния маршрута

#### Основные способы использования ActivatedRoute

#### 1. Получение параметров маршрута

```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  template: `<div>Пользователь ID: {{ userId }}</div>`
})
export class UserDetailComponent implements OnInit {
  userId: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Вариант 1: Использование снимка (snapshot) для одноразового получения
    this.userId = this.route.snapshot.paramMap.get('id');
    
    // Вариант 2: Реактивный подход для отслеживания изменений параметра
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.userId = params.get('id');
    });
  }
}
```

#### 2. Получение query-параметров

```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-list',
  template: `
    <div>
      <h2>Список товаров</h2>
      <p>Категория: {{ category }}</p>
      <p>Сортировка: {{ sortOrder }}</p>
      <p>Страница: {{ page }}</p>
    </div>
  `
})
export class ProductListComponent implements OnInit {
  category: string;
  sortOrder: string;
  page: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Вариант 1: Использование snapshot
    this.category = this.route.snapshot.queryParamMap.get('category');
    this.sortOrder = this.route.snapshot.queryParamMap.get('sort');
    this.page = Number(this.route.snapshot.queryParamMap.get('page') || '1');
    
    // Вариант 2: Реактивный подход для отслеживания изменений query-параметров
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      this.category = params.get('category');
      this.sortOrder = params.get('sort');
      this.page = Number(params.get('page') || '1');
    });
  }
}
```

#### 3. Получение фрагмента (якоря)

```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  template: `
    <h1>Длинная статья</h1>
    <p>Текущий фрагмент: {{ fragment }}</p>
    <div id="intro">Введение...</div>
    <div id="section1">Раздел 1...</div>
    <div id="section2">Раздел 2...</div>
    <div id="conclusion">Заключение...</div>
  `
})
export class ArticleComponent implements OnInit {
  fragment: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Вариант 1: Через snapshot
    this.fragment = this.route.snapshot.fragment;
    
    // Вариант 2: Реактивный подход
    this.route.fragment.subscribe(fragment => {
      this.fragment = fragment;
      if (fragment) {
        // Прокрутка к элементу с данным ID
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
}
```

#### 4. Получение данных маршрута и resolve данных

```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from './user.model';

@Component({
  selector: 'app-user-profile',
  template: `
    <div *ngIf="user">
      <h2>{{ user.name }}</h2>
      <p>Email: {{ user.email }}</p>
      <p>Роль: {{ user.role }}</p>
    </div>
  `
})
export class UserProfileComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Вариант 1: Через snapshot
    this.user = this.route.snapshot.data['user'];
    
    // Вариант 2: Реактивный подход
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });
  }
}
```

#### 5. Получение полного URL и его сегментов

```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-path-display',
  template: `
    <h3>Текущий путь:</h3>
    <ul>
      <li *ngFor="let segment of urlSegments">{{ segment.path }}</li>
    </ul>
  `
})
export class PathDisplayComponent implements OnInit {
  urlSegments: UrlSegment[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Вариант 1: Через snapshot
    this.urlSegments = this.route.snapshot.url;
    
    // Вариант 2: Реактивный подход
    this.route.url.subscribe(segments => {
      this.urlSegments = segments;
    });
  }
}
```

#### Использование ActivatedRoute с родительскими и дочерними маршрутами

#### Доступ к родительскому маршруту

```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child',
  template: `<p>ID родителя: {{ parentId }}</p>`
})
export class ChildComponent implements OnInit {
  parentId: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Получение параметра из родительского маршрута
    this.parentId = this.route.parent.snapshot.paramMap.get('id');
    
    // Или реактивный подход
    this.route.parent.paramMap.subscribe(params => {
      this.parentId = params.get('id');
    });
  }
}
```

#### Доступ к корневому маршруту

```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nested',
  template: `<p>Root URL: {{ rootUrl }}</p>`
})
export class NestedComponent implements OnInit {
  rootUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Получение корневого URL
    let route = this.route;
    while (route.parent) {
      route = route.parent;
    }
    
    this.rootUrl = route.snapshot.url.map(segment => segment.path).join('/');
  }
}
```

#### Более сложные примеры использования ActivatedRoute

#### 1. Комбинированное отслеживание нескольких параметров

```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-view',
  template: `<div>Комбинированные параметры: {{ combinedParams | json }}</div>`
})
export class ProductViewComponent implements OnInit {
  combinedParams: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Комбинирование параметров маршрута и query-параметров
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).pipe(
      map(([params, queryParams]) => ({
        id: params.get('id'),
        category: queryParams.get('category'),
        sort: queryParams.get('sort'),
        page: Number(queryParams.get('page') || '1')
      }))
    ).subscribe(combined => {
      this.combinedParams = combined;
      this.loadData(combined);
    });
  }

  loadData(params: any) {
    // Загрузка данных с комбинированными параметрами
    console.log('Загрузка данных с параметрами:', params);
  }
}
```

#### 2. Реактивная навигация на основе параметров

```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-navigation',
  template: `
    <div *ngIf="product">
      <h2>{{ product.name }}</h2>
      <button (click)="goToNext()">Следующий товар</button>
      <button (click)="goToPrevious()">Предыдущий товар</button>
    </div>
  `
})
export class ProductNavigationComponent implements OnInit {
  product: any;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}
  
  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return this.productService.getProduct(id);
      })
    ).subscribe(product => {
      this.product = product;
    });
  }
  
  goToNext() {
    if (this.product) {
      this.router.navigate(['/products', this.product.nextId]);
    }
  }
  
  goToPrevious() {
    if (this.product) {
      this.router.navigate(['/products', this.product.prevId]);
    }
  }
}
```

#### 3. Использование матричных параметров

```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  template: `
    <h2>Результаты поиска</h2>
    <div>
      <button (click)="toggleView('grid')">Сетка</button>
      <button (click)="toggleView('list')">Список</button>
      <button (click)="toggleSort('name')">По имени</button>
      <button (click)="toggleSort('date')">По дате</button>
    </div>
    <div [ngClass]="view">
      <!-- Содержимое в зависимости от view и sort -->
    </div>
  `
})
export class SearchResultsComponent implements OnInit {
  view: string = 'list';
  sort: string = 'name';
  
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.view = params.get('view') || 'list';
      this.sort = params.get('sort') || 'name';
    });
  }
  
  toggleView(view: string) {
    this.router.navigate(['/search', { view, sort: this.sort }]);
  }
  
  toggleSort(sort: string) {
    this.router.navigate(['/search', { view: this.view, sort }]);
  }
}
```

#### 4. Доступ к данным через относительный путь

```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  template: `
    <nav>
      <a [routerLink]="['../']">Назад</a>
      <span> / </span>
      <span>{{ currentPage }}</span>
    </nav>
  `
})
export class BreadcrumbComponent implements OnInit {
  currentPage: string;
  
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.route.data.subscribe(data => {
      this.currentPage = data['title'] || 'Страница';
    });
  }
}
```

#### Советы по работе с ActivatedRoute

1. **Используйте реактивный подход для динамических страниц**:
   - Подписывайтесь на параметры через Observable для автоматической обработки изменений
   - Используйте `switchMap` для загрузки данных при изменении параметров

2. **Используйте snapshot для статических страниц**:
   - Для страниц, на которых не ожидается изменение параметров без перезагрузки компонента
   - Это проще и требует меньше кода

3. **Объединяйте параметры для комплексной навигации**:
   - Используйте `combineLatest` для одновременного отслеживания нескольких типов параметров
   - Создавайте объект с нужными данными для удобства использования

4. **Используйте родительские маршруты**:
   - Доступ к родительским параметрам через `route.parent`
   - Создавайте иерархические структуры данных для сложных интерфейсов

5. **Не забывайте отписываться от Observables**:
   - Используйте `takeUntil`, `take(1)` или `async pipe` для предотвращения утечек памяти
   - Особенно важно для компонентов, которые часто создаются и уничтожаются

### 8. How do you handle lazy loading in routing?

Ленивая загрузка (lazy loading) в Angular позволяет загружать модули только тогда, когда они действительно необходимы, а не при начальном запуске приложения. Это значительно уменьшает время первоначальной загрузки и повышает производительность.

#### Основные принципы ленивой загрузки

- **Модульность** — код организован в отдельные feature-модули
- **По требованию** — модули загружаются только при переходе к соответствующему маршруту 
- **Автономность** — lazy-loaded модули должны быть самодостаточными
- **Независимость** — ленивые модули подгружаются независимо от основного приложения

#### Настройка ленивой загрузки модуля

#### Шаг 1: Создание feature-модуля с маршрутизацией

Сначала создайте feature-модуль с его собственными маршрутами:

```typescript
// admin/admin-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '', // Пустой путь, так как префикс будет добавлен в главном модуле
    component: AdminComponent, // Корневой компонент для админ-панели
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UsersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // forChild для дочерних маршрутов
  exports: [RouterModule]
})
export class AdminRoutingModule { }
```

#### Шаг 2: Создание feature-модуля

```typescript
// admin/admin.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule // Импортируем модуль маршрутизации feature-модуля
  ]
})
export class AdminModule { }
```

#### Шаг 3: Настройка ленивой загрузки в основном модуле маршрутизации

```typescript
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canLoad: [AuthGuard] // Опционально: защита от загрузки модуля
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

#### Ленивая загрузка с Angular 14+ (standalone компоненты)

С версии Angular 14+ появились standalone компоненты, которые можно лениво загружать без создания полноценного модуля:

```typescript
// app-routing.ts (для standalone-компонентов)
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin',
    loadComponent: () => import('./admin/admin.component').then(c => c.AdminComponent)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.routes').then(r => r.PRODUCT_ROUTES)
  }
];
```

Маршруты для feature-модуля с standalone-компонентами:

```typescript
// products/products.routes.ts
import { Routes } from '@angular/router';

export const PRODUCT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./product-list/product-list.component').then(c => c.ProductListComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./product-detail/product-detail.component').then(c => c.ProductDetailComponent)
  }
];
```

#### Преимущества ленивой загрузки

1. **Меньший начальный размер бандла**:
   - Приложение загружается быстрее, так как начальный бандл содержит только необходимый код
   - Улучшает время до интерактивности (Time to Interactive)

2. **Загрузка по требованию**:
   - Код загружается только тогда, когда он действительно нужен
   - Пользователи не загружают код для разделов, которые они не посещают

3. **Лучшая организация кода**:
   - Поощряет модульную архитектуру
   - Каждый feature-модуль самодостаточен и имеет четкую ответственность

4. **Оптимизация кэширования**:
   - При обновлении приложения пользователям не нужно повторно загружать весь код
   - Обновления в одном модуле не влияют на кэширование других модулей

#### Общие правила и рекомендации

1. **Структурируйте приложение правильно**:
   - Делите функциональность на логические модули
   - Избегайте циклических зависимостей между модулями

2. **Выбирайте правильные кандидаты для ленивой загрузки**:
   - Большие разделы, которые не все пользователи посещают
   - Административные панели и другие редко используемые функции
   - Элементы, которые не требуются для начального отображения

3. **Избегайте чрезмерной фрагментации**:
   - Слишком много мелких ленивых модулей может ухудшить UX из-за частых загрузок
   - Объединяйте связанные функции в один ленивый модуль

4. **Учитывайте предварительную загрузку**:
   - Используйте стратегии предварительной загрузки для улучшения UX
   - Баланс между начальной загрузкой и отзывчивостью

#### Продвинутые сценарии ленивой загрузки

#### 1. Ленивая загрузка вложенных модулей

```typescript
// Основной модуль маршрутизации
const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];

// dashboard-routing.module.ts
const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'analytics',
        loadChildren: () => import('./analytics/analytics.module').then(m => m.AnalyticsModule)
      }
    ]
  }
];
```

#### 2. Динамическая ленивая загрузка на основе прав пользователя

```typescript
// Создаем фабрику маршрутов для динамической загрузки
export function getUserModules(userPermissions: string[]): Routes {
  const routes: Routes = [];
  
  if (userPermissions.includes('admin')) {
    routes.push({
      path: 'admin',
      loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    });
  }
  
  if (userPermissions.includes('reports')) {
    routes.push({
      path: 'reports',
      loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)
    });
  }
  
  return routes;
}

// Использование в сервисе маршрутизации
@Injectable({ providedIn: 'root' })
export class RouteConfigService {
  constructor(private router: Router, private authService: AuthService) {}
  
  configureRoutesForUser() {
    const userPermissions = this.authService.getCurrentUserPermissions();
    const userRoutes = getUserModules(userPermissions);
    
    // Добавляем маршруты динамически
    this.router.resetConfig([
      ...this.router.config,
      ...userRoutes
    ]);
  }
}
```

#### 3. PreloadingStrategy для оптимизации пользовательского опыта

```typescript
import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    // Пропускаем модули, помеченные как не требующие предварительной загрузки
    if (route.data && route.data['preload'] === false) {
      return of(null);
    }
    
    // Приоритет предварительной загрузки (по умолчанию 0)
    const priority = route.data && route.data['preloadPriority'] ? route.data['preloadPriority'] : 0;
    
    // Задержка на основе приоритета
    const delay = priority > 0 ? 2000 / priority : 5000;
    
    return timer(delay).pipe(
      mergeMap(() => {
        console.log(`Предварительная загрузка: ${route.path}`);
        return load();
      })
    );
  }
}
```

Использование:

```typescript
// app-routing.module.ts
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    data: { preload: false } // Не предзагружать
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
    data: { preloadPriority: 100 } // Высокий приоритет предзагрузки
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
    data: { preloadPriority: 50 } // Средний приоритет
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloadingStrategy
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

#### Мониторинг и управление ленивой загрузкой

#### 1. Отображение индикатора загрузки

```typescript
// loading.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();
  
  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => 
        event instanceof NavigationStart ||
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      )
    ).subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loadingSubject.next(true);
      } else {
        this.loadingSubject.next(false);
      }
    });
  }
}
```

```typescript
// app.component.ts
@Component({
  selector: 'app-root',
  template: `
    <div class="loading-overlay" *ngIf="loading$ | async">
      <div class="spinner"></div>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .loading-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    }
    .spinner {
      width: 50px;
      height: 50px;
      border: 5px solid #f3f3f3;
      border-top: 5px solid #3498db;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `]
})
export class AppComponent {
  loading$ = this.loadingService.loading$;
  
  constructor(private loadingService: LoadingService) {}
}
```

#### 2. Обработка ошибок ленивой загрузки

```typescript
// app-routing.module.ts
const routes: Routes = [
  { 
    path: 'feature', 
    loadChildren: () => 
      import('./feature/feature.module')
      .then(m => m.FeatureModule)
      .catch(err => {
        console.error('Ошибка ленивой загрузки:', err);
        // Можно перенаправить на страницу ошибки или показать уведомление
        return import('./error/error.module').then(m => m.ErrorModule);
      })
  }
];
```

#### Оптимизации и лучшие практики

#### 1. Использование NgModules с именованным экспортом

```typescript
// Вместо этого (загружает весь модуль)
loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)

// Лучше использовать именованный экспорт (может быть эффективнее для tree-shaking)
loadChildren: () => import('./admin').then(m => m.AdminModule)
```

#### 2. Выделение общей функциональности в отдельные модули

```typescript
// shared.module.ts
@NgModule({
  declarations: [
    CommonComponents,
    CommonDirectives,
    CommonPipes
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    CommonComponents,
    CommonDirectives,
    CommonPipes
  ]
})
export class SharedModule { }
```

```typescript
// feature.module.ts
@NgModule({
  declarations: [
    FeatureComponents
  ],
  imports: [
    SharedModule, // Импортируем общие компоненты и модули
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
```

#### 3. Загрузка ресурсов по требованию

```typescript
// Ленивая загрузка переводов в i18n
@Injectable({ providedIn: 'root' })
export class TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return from(import(`./assets/i18n/${lang}.json`)).pipe(
      map(module => module.default)
    );
  }
}
```

#### 4. Группировка маршрутов по функциональности

```typescript
const routes: Routes = [
  // Базовые маршруты, всегда загружаются
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  
  // Группа администрирования (загружается лениво как один модуль)
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  
  // Группа работы с контентом (загружается лениво как один модуль)
  {
    path: 'content',
    loadChildren: () => import('./content/content.module').then(m => m.ContentModule)
  }
];
```

#### Советы по отладке ленивой загрузки

1. **Проверка загрузки в инструментах разработчика**:
   - В Chrome DevTools перейдите на вкладку Network
   - При переходе на маршрут с ленивой загрузкой вы увидите загрузку соответствующего JavaScript-файла

2. **Анализ размера бандла**:
   - Используйте `ng build --stats-json` для генерации статистики бандлов
   - Анализируйте результаты с помощью инструментов вроде Webpack Bundle Analyzer

3. **Мониторинг производительности**:
   - Отслеживайте метрики загрузки в Production (FCP, TTI)
   - Сравнивайте время загрузки до и после внедрения ленивой загрузки

4. **Проверка зависимостей**:
   - Убедитесь, что нет циклических зависимостей между модулями
   - Проверьте, не импортируется ли случайно лениво загружаемый модуль в основной модуль

#### Заключение

Ленивая загрузка — мощный инструмент для оптимизации производительности Angular-приложений. Она позволяет уменьшить начальный размер загружаемого кода и улучшить время запуска приложения, что особенно важно для мобильных устройств и соединений с ограниченной пропускной способностью.

При правильном использовании ленивой загрузки с соответствующими стратегиями предварительной загрузки вы можете достичь оптимального баланса между быстрым начальным запуском и отзывчивым пользовательским интерфейсом при дальнейшей навигации.

## RxJS в Angular

### 1. Define the concept of `RxJS` and its usage in Angular.

RxJS (Reactive Extensions for JavaScript) — это библиотека для реактивного программирования, которая позволяет работать с асинхронными потоками данных с использованием паттерна Observable.

#### Основные концепции RxJS

- **Реактивное программирование** — парадигма, основанная на потоках данных и распространении изменений
- **Декларативный подход** — описывает "что" должно произойти, а не "как" это должно быть реализовано
- **Асинхронные потоки данных** — унифицированный способ работы с разными типами асинхронных событий
- **Функциональное программирование** — использование чистых функций для трансформации данных

#### Ключевые элементы RxJS

1. **Observable** — основной примитив, представляющий собой поток асинхронных событий
2. **Observer** — потребитель, который подписывается на Observable и реагирует на его события
3. **Subscription** — объект, представляющий текущую подписку и позволяющий от нее отписаться
4. **Операторы** — функции для трансформации, фильтрации и комбинирования потоков
5. **Subject** — специальный тип Observable, который может как излучать события, так и подписываться на них
6. **Schedulers** — механизмы для контроля выполнения и многозадачности

#### Использование RxJS в Angular

Angular глубоко интегрирован с RxJS и использует его для многих своих внутренних механизмов:

1. **HTTP-клиент** — методы `HttpClient` возвращают Observable для асинхронных HTTP-запросов:

   ```typescript
   this.http.get("/api/users").subscribe((users) => (this.users = users));
   ```

2. **Маршрутизация** — параметры маршрутов, события навигации предоставляются как Observable:

   ```typescript
   this.route.params.subscribe((params) => this.loadUser(params.id));
   ```

3. **Формы** — отслеживание изменений в формах через Observable:

   ```typescript
   this.form.valueChanges.subscribe((value) => console.log(value));
   ```

4. **EventEmitter** — базируется на RxJS Subject для обработки событий компонентов:

   ```typescript
   @Output() userSelected = new EventEmitter<User>();
   ```

5. **Управление состоянием** — хранение и обновление состояния приложения:

   ```typescript
   private stateSubject = new BehaviorSubject<AppState>(initialState);
   state$ = this.stateSubject.asObservable();
   ```

6. **Реактивное обновление UI** — автоматическое обновление интерфейса при изменении данных:
   ```html
   <div *ngIf="(user$ | async) as user">{{ user.name }}</div>
   ```

#### Преимущества использования RxJS в Angular

1. **Единый паттерн для асинхронности** — унифицированный подход к работе с событиями, таймерами, промисами, HTTP-запросами
2. **Декларативный код** — более чистый и понятный код для сложных асинхронных операций
3. **Управление потоками данных** — мощные инструменты для трансформации, комбинирования и фильтрации данных
4. **Отмена запросов** — простая отмена операций через отписку от Observable
5. **Обработка ошибок** — встроенные механизмы для обработки ошибок и повторных попыток
6. **Интеграция с Angular** — натурная поддержка и использование в компонентах Angular

### 2. What are _Observable_, Observer, and Subscriptions?

#### Observable

**Observable** — это основной строительный блок RxJS, представляющий поток асинхронных или синхронных данных, к которому можно подписаться.

#### Ключевые характеристики Observable

- **Ленивый** — не выполняет работу до подписки на него
- **Может излучать несколько значений** — в отличие от Promise, который разрешается только один раз
- **Может быть отменен** — через отписку от подписки
- **Поддерживает операторы** — для трансформации, фильтрации и комбинирования данных

#### Создание Observable

```typescript
import { Observable } from "rxjs";

// Создание простого Observable
const simpleObservable = new Observable<number>((observer) => {
  observer.next(1); // Излучаем значение 1
  observer.next(2); // Излучаем значение 2
  observer.next(3); // Излучаем значение 3
  observer.complete(); // Завершаем поток
});

// Создание Observable из событий
const clickObservable = new Observable((observer) => {
  const handler = (event) => observer.next(event);
  document.addEventListener("click", handler);

  // Функция очистки при отписке
  return () => {
    document.removeEventListener("click", handler);
  };
});
```

#### Типы событий Observable

Observable может излучать три типа уведомлений:

1. **next** — новое значение в потоке
2. **error** — ошибка, завершающая поток
3. **complete** — успешное завершение потока

#### Observer

**Observer** — это потребитель, который слушает значения, доставляемые Observable. Это объект с колбэк-методами для обработки различных типов уведомлений от Observable.

#### Структура Observer

```typescript
const observer = {
  next: (value) => console.log("Получено значение:", value),
  error: (err) => console.error("Произошла ошибка:", err),
  complete: () => console.log("Observable завершен"),
};
```

Все методы являются опциональными — можно предоставить только те, которые вам нужны:

```typescript
// Минимальный Observer, обрабатывающий только next
observable.subscribe((value) => console.log(value));

// Полный Observer
observable.subscribe({
  next: (value) => console.log(value),
  error: (err) => console.error(err),
  complete: () => console.log("Завершено"),
});
```

#### Subscription

**Subscription** — это объект, представляющий отменяемый ресурс, обычно выполнение Observable. Он предоставляет метод `unsubscribe()` для отмены выполнения и освобождения ресурсов.

#### Основные операции с Subscription

```typescript
// Создание подписки
const subscription = observable.subscribe(observer);

// Отписка для остановки выполнения и освобождения ресурсов
subscription.unsubscribe();

// Объединение нескольких подписок
const subscription1 = observable1.subscribe(observer1);
const subscription2 = observable2.subscribe(observer2);

subscription1.add(subscription2); // subscription2 будет отменена при отмене subscription1
```

#### Управление подписками в компонентах Angular

В компонентах Angular важно отписываться от Observables при уничтожении компонента, чтобы избежать утечек памяти:

```typescript
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { DataService } from "./data.service";

@Component({
  selector: "app-my-component",
  template: "...",
})
export class MyComponent implements OnInit, OnDestroy {
  private subscription = new Subscription(); // Для хранения всех подписок

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Добавляем подписки к основной подписке
    this.subscription.add(
      this.dataService.getData().subscribe((data) => {
        this.processData(data);
      })
    );

    this.subscription.add(
      this.otherObservable.subscribe((value) => {
        this.handleValue(value);
      })
    );
  }

  ngOnDestroy() {
    // Отписываемся от всех подписок при уничтожении компонента
    this.subscription.unsubscribe();
  }
}
```

#### Взаимодействие Observable, Observer и Subscription

1. **Observable** определяет, как создаются и передаются значения
2. **Observer** определяет, как обрабатываются значения, ошибки и завершение
3. **Subscription** представляет соединение между Observable и Observer и позволяет его прервать

```typescript
// Observable генерирует последовательность чисел каждую секунду
const numberObservable = new Observable<number>((observer) => {
  let count = 0;
  const interval = setInterval(() => {
    observer.next(count++);

    if (count > 5) {
      observer.complete();
      clearInterval(interval);
    }
  }, 1000);

  // Функция очистки при отписке
  return () => {
    console.log("Отписка: очистка ресурсов");
    clearInterval(interval);
  };
});

// Observer обрабатывает эти числа
const numberObserver = {
  next: (value) => console.log(`Получено число: ${value}`),
  error: (err) => console.error(`Ошибка: ${err}`),
  complete: () => console.log("Последовательность завершена"),
};

// Subscription связывает Observable и Observer
const subscription = numberObservable.subscribe(numberObserver);

// Через 3 секунды прерываем подписку
setTimeout(() => {
  subscription.unsubscribe();
  console.log("Подписка отменена");
}, 3000);
```

### 3. What is the difference between Observable and Promise?

Observable и Promise — это два механизма для работы с асинхронными операциями в JavaScript, но они имеют существенные различия в функциональности и применении.

#### Основные различия

| Характеристика      | Promise                                 | Observable                                       |
| ------------------- | --------------------------------------- | ------------------------------------------------ |
| Количество значений | Может предоставить только одно значение | Может излучать множество значений со временем    |
| Лениво/Нетерпеливо  | Нетерпеливо (начинает выполнение сразу) | Лениво (начинает выполнение только при подписке) |
| Отмена              | Нельзя отменить выполнение              | Поддерживает отмену через отписку                |
| Операторы           | Базовая цепочка через .then()           | Богатый набор операторов для трансформации       |
| Обработка ошибок    | Через .catch()                          | Через оператор catchError или обработчик error   |
| Повторные попытки   | Требуется ручная реализация             | Встроенные операторы retry/retryWhen             |
| Комбинирование      | Ограниченное через Promise.all/race     | Множество операторов комбинирования              |
| Стандартизация      | Часть стандарта JavaScript              | Сторонняя библиотека                             |

#### Сравнение примеров кода

#### 1. Получение одного значения

```typescript
// Promise
function getDataPromise() {
  return new Promise((resolve, reject) => {
    fetchData()
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}

getDataPromise()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

// Observable
import { Observable } from "rxjs";

function getDataObservable() {
  return new Observable((observer) => {
    fetchData()
      .then((data) => {
        observer.next(data);
        observer.complete();
      })
      .catch((err) => observer.error(err));
  });
}

const subscription = getDataObservable().subscribe({
  next: (data) => console.log(data),
  error: (err) => console.error(err),
  complete: () => console.log("Observable завершен"),
});

// Отписка при необходимости
subscription.unsubscribe();
```

#### 2. Получение множества значений

```typescript
// Promise (не идеально)
function multipleValuesPromise() {
  let count = 0;

  function getNext() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(count++);
        if (count < 5) getNext(); // Не очень удобно и неясно, как получить все значения
      }, 1000);
    });
  }

  return getNext();
}

// Observable (естественно)
function multipleValuesObservable() {
  return new Observable((observer) => {
    let count = 0;
    const interval = setInterval(() => {
      observer.next(count++);
      if (count >= 5) {
        clearInterval(interval);
        observer.complete();
      }
    }, 1000);

    // Функция очистки при отписке
    return () => clearInterval(interval);
  });
}

const subscription = multipleValuesObservable().subscribe({
  next: (val) => console.log(val),
  complete: () => console.log("Последовательность завершена"),
});

// Можно отменить в любой момент
setTimeout(() => subscription.unsubscribe(), 2500); // Отменим после получения трех значений
```

#### 3. Преобразование между Promise и Observable

```typescript
// Из Promise в Observable
import { from } from "rxjs";

const promise = fetch("/api/data");
const observable = from(promise); // Преобразует Promise в Observable

observable.subscribe({
  next: (response) => console.log(response),
  error: (err) => console.error(err),
});

// Из Observable в Promise
import { firstValueFrom, lastValueFrom } from "rxjs"; // В RxJS 7+

// Получение первого значения из Observable как Promise
async function getFirstValue() {
  const value = await firstValueFrom(observable);
  console.log(value);
}

// Получение последнего значения из Observable как Promise
async function getLastValue() {
  const value = await lastValueFrom(observable);
  console.log(value);
}
```

#### Когда использовать Observable вместо Promise

**Используйте Observable, когда:**

1. Вам нужно обрабатывать множество значений со временем (потоки данных)
2. Вам требуется отмена операций
3. Вам нужны сложные трансформации данных (с использованием операторов RxJS)
4. Вы работаете с событиями UI или WebSockets
5. Операция должна запускаться лениво
6. Вам нужна возможность повторных попыток или polling
7. Вы работаете в экосистеме Angular, которая полагается на Observable

**Используйте Promise, когда:**

1. Вам нужно одно значение из асинхронной операции
2. Вы работаете с API, которые возвращают или принимают Promise (например, fetch)
3. Вам важна простота кода и минимальные зависимости
4. Вы используете async/await синтаксис
5. Вы не нуждаетесь в отмене операции

#### Совместное использование в Angular

В Angular часто используются оба механизма в разных контекстах:

```typescript
@Component({
  selector: "app-data",
  template: `
    <!-- Используем async pipe с Observable -->
    <div *ngIf="data$ | async as data; else loading">
      {{ data | json }}
    </div>
    <ng-template #loading>Loading...</ng-template>

    <!-- Кнопка для запуска Promise-операции -->
    <button (click)="loadDataAsync()">Load with Promise</button>
  `,
})
export class DataComponent {
  // Observable для потоковых данных
  data$ = this.dataService.getData();

  constructor(private dataService: DataService) {}

  // Promise с async/await для простых одноразовых операций
  async loadDataAsync() {
    try {
      const data = await this.dataService.getDataPromise();
      this.processData(data);
    } catch (error) {
      this.handleError(error);
    }
  }
}
```

### 4. Can you provide examples of basic RxJS operators in Angular (e.g., map, filter, catchError, switchMap)?

RxJS предоставляет богатый набор операторов для работы с потоками данных. Операторы позволяют трансформировать, фильтровать, комбинировать потоки и выполнять множество других операций, что делает RxJS невероятно мощным инструментом для работы с асинхронными данными.

#### Операторы трансформации

#### 1. `map` — преобразование каждого значения в потоке

```typescript
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

// Пример в сервисе
getUserData() {
  return this.http.get<UserResponse>('/api/users').pipe(
    map(response => {
      return {
        ...response,
        fullName: `${response.firstName} ${response.lastName}`,
        isAdmin: response.roles.includes('ADMIN')
      };
    })
  );
}

// Базовый пример
of(1, 2, 3, 4).pipe(
  map(x => x * 2)
).subscribe(val => console.log(val)); // Вывод: 2, 4, 6, 8
```

#### 2. `pluck` — извлечение свойства из объекта (устарел в RxJS 7+)

```typescript
import { from } from "rxjs";
import { pluck } from "rxjs/operators";

const users = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
];

from(users)
  .pipe(pluck("name"))
  .subscribe((name) => console.log(name)); // Вывод: 'John', 'Alice', 'Bob'

// Альтернатива в RxJS 7+
from(users)
  .pipe(map((user) => user.name))
  .subscribe((name) => console.log(name));
```

#### 3. `scan` — аккумулирование значений (как reduce, но излучает промежуточные результаты)

```typescript
import { of } from "rxjs";
import { scan } from "rxjs/operators";

of(1, 2, 3, 4)
  .pipe(scan((acc, value) => acc + value, 0))
  .subscribe((sum) => console.log(sum)); // Вывод: 1, 3, 6, 10
```

#### Операторы фильтрации

#### 1. `filter` — пропускает только значения, удовлетворяющие условию

```typescript
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

// Пример в компоненте
getActiveUsers() {
  return this.userService.getUsers().pipe(
    filter(user => user.isActive)
  );
}

// Базовый пример
from([1, 2, 3, 4, 5]).pipe(
  filter(x => x % 2 === 0)
).subscribe(val => console.log(val)); // Вывод: 2, 4
```

#### 2. `take` — берет определенное количество значений и завершает поток

```typescript
import { interval } from "rxjs";
import { take } from "rxjs/operators";

interval(1000)
  .pipe(take(5))
  .subscribe({
    next: (val) => console.log(val), // Вывод: 0, 1, 2, 3, 4
    complete: () => console.log("Завершено"),
  });
```

#### 3. `debounceTime` — излучает значение только если прошло указанное время после последнего значения

```typescript
import { fromEvent } from "rxjs";
import { debounceTime, map } from "rxjs/operators";

// Пример обработки поиска
@Component({
  selector: "app-search",
  template: '<input #searchInput type="text" placeholder="Search...">',
})
export class SearchComponent implements AfterViewInit {
  @ViewChild("searchInput") searchInput: ElementRef;

  ngAfterViewInit() {
    fromEvent(this.searchInput.nativeElement, "input")
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(300) // Ждем 300мс паузы во вводе
      )
      .subscribe((value) => {
        this.search(value);
      });
  }

  search(query: string) {
    console.log(`Searching for: ${query}`);
  }
}
```

#### 4. `distinctUntilChanged` — пропускает значения, только если они отличаются от предыдущего

```typescript
import { from } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

from([1, 1, 2, 2, 3, 1, 2, 3])
  .pipe(distinctUntilChanged())
  .subscribe((val) => console.log(val)); // Вывод: 1, 2, 3, 1, 2, 3
```

#### Операторы обработки ошибок

#### 1. `catchError` — перехватывает ошибки и возвращает новый Observable

```typescript
import { of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Пример в сервисе
getData() {
  return this.http.get<Data[]>('/api/data').pipe(
    catchError(error => {
      console.error('Error fetching data:', error);

      // Возврат пустого массива вместо ошибки
      return of([]);

      // ИЛИ повторный выброс ошибки
      // return throwError(() => new Error('Failed to fetch data'));
    })
  );
}
```

#### 2. `retry` — повторяет подписку указанное количество раз при ошибке

```typescript
import { interval, throwError } from 'rxjs';
import { mergeMap, retry } from 'rxjs/operators';

// Пример в сервисе
fetchWithRetry() {
  return this.http.get('/api/data').pipe(
    retry(3)  // При ошибке повторить запрос до 3 раз
  );
}

// Базовый пример
interval(1000).pipe(
  mergeMap(val => {
    if (val > 2) return throwError(() => new Error('Error!'));
    return of(val);
  }),
  retry(2)
).subscribe({
  next: val => console.log(val),
  error: err => console.error('Error caught:', err)
});
```

#### Операторы комбинирования

#### 1. `switchMap` — переключает на новый Observable, отменяя предыдущую подписку

```typescript
import { fromEvent } from "rxjs";
import { switchMap } from "rxjs/operators";

// Пример в компоненте Angular
@Component({
  selector: "app-user",
  template: `<input #userId type="text" [value]="initialId" />`,
})
export class UserComponent implements AfterViewInit {
  @ViewChild("userId") userIdInput: ElementRef;

  ngAfterViewInit() {
    // При каждом изменении ID, отменяем предыдущий запрос
    // и делаем новый
    fromEvent(this.userIdInput.nativeElement, "input")
      .pipe(
        map((event: any) => event.target.value),
        switchMap((id) => this.userService.getUser(id))
      )
      .subscribe((user) => {
        this.displayUser(user);
      });
  }
}
```

#### 2. `mergeMap` (или `flatMap`) — проецирует каждое значение на Observable и объединяет результаты

```typescript
import { from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

// Пример в сервисе
getAllUsersWithPosts() {
  return this.http.get<User[]>('/api/users').pipe(
    mergeMap(users => {
      // Для каждого пользователя делаем запрос на получение его постов
      // Все запросы выполняются параллельно
      return from(users).pipe(
        mergeMap(user => {
          return this.http.get<Post[]>(`/api/users/${user.id}/posts`).pipe(
            map(posts => ({ ...user, posts }))
          );
        })
      );
    })
  );
}
```

#### 3. `concatMap` — как mergeMap, но сохраняет порядок и не выполняет следующий запрос, пока не завершится предыдущий

```typescript
import { from } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';

// Пример в сервисе
processItemsSequentially(items: any[]) {
  return from(items).pipe(
    concatMap(item => {
      // Обрабатываем элементы последовательно, один за другим
      return this.processItem(item).pipe(
        delay(1000) // Подождать 1 секунду после каждой обработки
      );
    })
  );
}
```

#### 4. `forkJoin` — комбинирует последние значения нескольких Observables

```typescript
import { forkJoin } from "rxjs";

// Пример параллельных запросов
@Component({
  // ...
})
export class DashboardComponent implements OnInit {
  ngOnInit() {
    forkJoin({
      users: this.userService.getUsers(),
      posts: this.postService.getPosts(),
      settings: this.settingsService.getSettings(),
    }).subscribe((results) => {
      this.users = results.users;
      this.posts = results.posts;
      this.settings = results.settings;
      this.isLoading = false;
    });
  }
}
```

#### Операторы комбинирования событий

#### 1. `combineLatest` — комбинирует последние значения из нескольких потоков при каждом изменении

```typescript
import { combineLatest } from "rxjs";

// Пример в компоненте фильтрации
@Component({
  // ...
})
export class ProductListComponent implements OnInit {
  ngOnInit() {
    // Различные фильтры, которые могут меняться независимо
    const category$ = this.categoryControl.valueChanges;
    const price$ = this.priceControl.valueChanges;
    const search$ = this.searchControl.valueChanges.pipe(debounceTime(300));

    // Комбинируем все текущие значения фильтров
    combineLatest([category$, price$, search$]).subscribe(([category, price, search]) => {
      this.applyFilters({
        category,
        price,
        search,
      });
    });
  }
}
```

#### 2. `withLatestFrom` — комбинирует значения из основного потока со значениями из других потоков

```typescript
import { fromEvent } from "rxjs";
import { withLatestFrom } from "rxjs/operators";

// Пример взаимодействия потоков данных
@Component({
  // ...
})
export class MapComponent implements OnInit {
  ngOnInit() {
    // Поток кликов по карте
    const clicks$ = fromEvent(this.mapElement.nativeElement, "click");

    // Текущие настройки отображения
    const settings$ = this.settingsService.getSettings();

    // При клике получаем текущие настройки
    clicks$.pipe(withLatestFrom(settings$)).subscribe(([clickEvent, settings]) => {
      this.handleMapClick(clickEvent, settings);
    });
  }
}
```

#### Операторы создания потоков

#### 1. `of` — создает Observable из произвольных аргументов

```typescript
import { of } from "rxjs";

of(1, 2, 3).subscribe((val) => console.log(val)); // Вывод: 1, 2, 3
```

#### 2. `from` — создает Observable из массива, промиса или итерируемого объекта

```typescript
import { from } from "rxjs";

from([1, 2, 3]).subscribe((val) => console.log(val)); // Вывод: 1, 2, 3

// Из Promise
from(fetch("/api/data")).subscribe((response) => console.log(response));
```

#### 3. `interval` — создает поток, излучающий значения через заданные промежутки времени

```typescript
import { interval } from "rxjs";
import { take } from "rxjs/operators";

interval(1000)
  .pipe(take(5))
  .subscribe((val) => console.log(val)); // Вывод: 0, 1, 2, 3, 4 (с интервалом в 1 секунду)
```

#### Примеры использования операторов в Angular

#### Пример 1: Обработка поисковых запросов

```typescript
@Component({
  selector: "app-search",
  template: `
    <input type="text" [formControl]="searchControl" placeholder="Search..." />
    <div *ngIf="loading">Loading...</div>
    <div *ngFor="let result of results">{{ result.name }}</div>
  `,
})
export class SearchComponent implements OnInit, OnDestroy {
  searchControl = new FormControl("");
  results: any[] = [];
  loading = false;
  private subscription = new Subscription();

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.subscription = this.searchControl.valueChanges
      .pipe(
        debounceTime(300), // Ждем 300мс после ввода
        distinctUntilChanged(), // Игнорируем одинаковые значения подряд
        filter((term) => term.length > 2), // Минимум 3 символа для поиска
        tap(() => (this.loading = true)), // Устанавливаем состояние загрузки
        switchMap((term) => {
          // Отменяем предыдущие запросы
          return this.searchService.search(term).pipe(
            catchError((error) => {
              console.error("Search error:", error);
              return of([]); // Возвращаем пустой массив при ошибке
            }),
            finalize(() => (this.loading = false)) // Всегда сбрасываем состояние загрузки
          );
        })
      )
      .subscribe((results) => {
        this.results = results;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
```

#### Пример 2: Загрузка данных с автоматическим повтором при ошибке

```typescript
@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private http: HttpClient) {}

  getDataWithRetry() {
    return this.http.get("/api/data").pipe(
      retry(3), // Повторить запрос до 3 раз при ошибке
      timeout(5000), // Установить таймаут 5 секунд
      catchError((error) => {
        if (error.name === "TimeoutError") {
          return throwError(() => new Error("Request timed out"));
        }
        return throwError(() => error);
      }),
      shareReplay(1) // Кэшировать результат для всех подписчиков
    );
  }
}
```

#### Пример 3: Параллельные запросы с комбинированием результатов

```typescript
@Component({
  selector: "app-dashboard",
  template: `
    <div *ngIf="isLoading">Loading dashboard...</div>
    <div *ngIf="error">{{ error }}</div>
    <div *ngIf="dashboardData">
      <app-user-panel [users]="dashboardData.users"></app-user-panel>
      <app-stats [statistics]="dashboardData.statistics"></app-stats>
      <app-notifications [items]="dashboardData.notifications"></app-notifications>
    </div>
  `,
})
export class DashboardComponent implements OnInit {
  dashboardData: any;
  isLoading = true;
  error: string = null;

  constructor(private userService: UserService, private statsService: StatsService, private notificationService: NotificationService) {}

  ngOnInit() {
    forkJoin({
      users: this.userService.getUsers(),
      statistics: this.statsService.getLatestStats(),
      notifications: this.notificationService.getUnreadNotifications(),
    })
      .pipe(
        timeout(10000),
        catchError((error) => {
          this.error = "Failed to load dashboard data";
          return throwError(() => error);
        }),
        finalize(() => (this.isLoading = false))
      )
      .subscribe((data) => {
        this.dashboardData = data;
      });
  }
}
```

#### Пример 4: Обработка маршрутов с извлечением параметров и загрузкой данных

```typescript
@Component({
  selector: "app-user-detail",
  template: `
    <div *ngIf="user$ | async as user; else loading">
      <h2>{{ user.name }}</h2>
      <div>Email: {{ user.email }}</div>

      <h3>Posts</h3>
      <div *ngFor="let post of user.posts">
        <h4>{{ post.title }}</h4>
        <p>{{ post.body }}</p>
      </div>
    </div>
    <ng-template #loading>Loading user...</ng-template>
  `,
})
export class UserDetailComponent implements OnInit {
  user$: Observable<User>;

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit() {
    this.user$ = this.route.paramMap.pipe(
      map((params) => params.get("id")),
      switchMap((id) => {
        if (!id) return throwError(() => new Error("User ID is required"));
        return this.userService.getUser(id);
      }),
      switchMap((user) => {
        return this.userService.getUserPosts(user.id).pipe(
          map((posts) => ({ ...user, posts })),
          catchError(() => {
            // Если не удалось загрузить посты, вернем пользователя без постов
            return of({ ...user, posts: [] });
          })
        );
      }),
      catchError((error) => {
        console.error("Error loading user:", error);
        return of(null);
      })
    );
  }
}
```

#### Пример 5: Оптимизация загрузки с использованием cache и share

```typescript
@Injectable({
  providedIn: "root",
})
export class CachedApiService {
  private cache = new Map<string, Observable<any>>();

  constructor(private http: HttpClient) {}

  getData(url: string, forceRefresh = false): Observable<any> {
    // Если данные уже есть в кэше и не требуется обновление, вернуть кэшированные данные
    if (this.cache.has(url) && !forceRefresh) {
      return this.cache.get(url);
    }

    // Создать запрос с обработкой ошибок и кэшированием
    const request = this.http.get(url).pipe(
      // Обработать ошибки и не разрывать поток
      catchError((error) => {
        console.error(`Error fetching ${url}:`, error);
        // Удалить ошибочный запрос из кэша
        this.cache.delete(url);
        return throwError(() => error);
      }),
      // Кэшировать результаты для всех подписчиков и будущих запросов
      shareReplay(1),
      // Автоматически удалить из кэша через 5 минут
      timeout(5 * 60 * 1000)
    );

    // Сохранить в кэше
    this.cache.set(url, request);

    return request;
  }

  clearCache() {
    this.cache.clear();
  }

  removeFromCache(url: string) {
    this.cache.delete(url);
  }
}
```

### 5. How do you create a Custom Observable using the new Observable method and manage the data passed into the stream?

Создание собственного Observable позволяет генерировать потоки данных с нуля и полностью контролировать, как и когда в поток попадают новые значения, ошибки или завершение. Это особенно полезно для специфических сценариев, когда встроенные функции создания не подходят.

#### Базовый синтаксис создания Observable

```typescript
import { Observable } from "rxjs";

const myObservable = new Observable<type>((subscriber) => {
  // Логика, выполняемая при подписке

  // Генерация значений
  subscriber.next(value1);
  subscriber.next(value2);

  // Опционально, сообщение об ошибке
  subscriber.error(new Error("Something went wrong"));

  // Опционально, сообщение о завершении
  subscriber.complete();

  // Опционально, функция очистки, которая выполняется при отписке
  return () => {
    // Логика очистки ресурсов
  };
});
```

#### Простые примеры создания Observable

#### 1. Observable для чисел от 1 до 5

```typescript
import { Observable } from "rxjs";

function generateNumbers(): Observable<number> {
  return new Observable<number>((subscriber) => {
    console.log("Observable executed");

    // Генерируем числа от 1 до 5
    for (let i = 1; i <= 5; i++) {
      subscriber.next(i);
    }

    // Завершаем поток
    subscriber.complete();

    // Функция очистки (в данном случае просто логирование)
    return () => {
      console.log("Observable cleaned up");
    };
  });
}

// Использование
const numbers$ = generateNumbers();

// Observable не выполняется, пока на него не подпишутся
console.log("Before subscription");

// Подписываемся и запускаем выполнение
const subscription = numbers$.subscribe({
  next: (num) => console.log(`Received number: ${num}`),
  error: (err) => console.error(`Error: ${err}`),
  complete: () => console.log("Observable completed"),
});

console.log("After subscription");

// Отписываемся (в данном случае не нужно, так как поток уже завершен)
subscription.unsubscribe();
```

#### 2. Observable для событий DOM

```typescript
import { Observable } from "rxjs";

function fromDOMEvent(target: HTMLElement, eventName: string): Observable<Event> {
  return new Observable<Event>((subscriber) => {
    // Функция-обработчик события
    const handler = (event: Event) => {
      subscriber.next(event);
    };

    // Подписываемся на событие
    target.addEventListener(eventName, handler);

    // Функция очистки для отписки от события
    return () => {
      target.removeEventListener(eventName, handler);
    };
  });
}

// Использование
const button = document.querySelector("#myButton");
const clicks$ = fromDOMEvent(button, "click");

const subscription = clicks$.subscribe({
  next: (event) => console.log("Button clicked", event),
  error: (err) => console.error(err),
  complete: () => console.log("Observable completed"), // Не вызывается в этом случае
});

// Отписка после 5 секунд
setTimeout(() => {
  subscription.unsubscribe();
  console.log("Unsubscribed from clicks");
}, 5000);
```

#### Управление асинхронным поведением в Observable

#### 1. Observable с таймером

```typescript
import { Observable } from "rxjs";

function countdown(seconds: number): Observable<number> {
  return new Observable<number>((subscriber) => {
    let count = seconds;

    console.log("Timer started");

    // Запускаем интервал для обратного отсчета
    const intervalId = setInterval(() => {
      subscriber.next(count);

      count--;

      if (count < 0) {
        clearInterval(intervalId);
        subscriber.complete();
      }
    }, 1000);

    // Функция очистки для отписки
    return () => {
      clearInterval(intervalId);
      console.log("Timer cancelled");
    };
  });
}

// Использование
const timer$ = countdown(5);

const subscription = timer$.subscribe({
  next: (val) => console.log(`Countdown: ${val}`),
  complete: () => console.log("Countdown finished"),
});

// Отмена отсчета после 3 секунд
setTimeout(() => {
  subscription.unsubscribe();
}, 3000);
```

#### 2. Observable для HTTP-запроса с отменой

```typescript
import { Observable } from "rxjs";

function makeRequest(url: string): Observable<Response> {
  return new Observable<Response>((subscriber) => {
    // Создаем контроллер для отмены запроса
    const controller = new AbortController();
    const { signal } = controller;

    console.log(`Starting request to ${url}`);

    // Делаем запрос
    fetch(url, { signal })
      .then((response) => {
        subscriber.next(response);
        subscriber.complete();
      })
      .catch((error) => {
        // Проверяем, была ли ошибка вызвана отменой запроса
        if (error.name === "AbortError") {
          console.log("Request was cancelled");
        } else {
          subscriber.error(error);
        }
      });

    // Функция очистки для отмены запроса
    return () => {
      console.log("Aborting request");
      controller.abort();
    };
  });
}

// Использование
const request$ = makeRequest("https://api.example.com/data");

const subscription = request$.subscribe({
  next: (response) => console.log("Response received", response),
  error: (err) => console.error("Request failed", err),
  complete: () => console.log("Request completed"),
});

// Отмена запроса через 2 секунды
setTimeout(() => {
  subscription.unsubscribe();
}, 2000);
```

#### Создание собственного Observable с состоянием

```typescript
import { Observable } from "rxjs";

interface User {
  id: number;
  name: string;
  isActive: boolean;
}

class UserService {
  private users: User[] = [
    { id: 1, name: "John", isActive: true },
    { id: 2, name: "Alice", isActive: true },
    { id: 3, name: "Bob", isActive: false },
  ];

  // Observable для уведомлений об изменениях в списке пользователей
  getUsers(): Observable<User[]> {
    return new Observable<User[]>((subscriber) => {
      // Первоначальная отправка списка
      subscriber.next([...this.users]);

      // Имитация периодических обновлений
      const intervalId = setInterval(() => {
        // Меняем статус случайного пользователя
        const randomIndex = Math.floor(Math.random() * this.users.length);
        this.users[randomIndex].isActive = !this.users[randomIndex].isActive;

        // Отправляем обновленный список (создаем новый массив, чтобы не отправлять ссылку)
        subscriber.next([...this.users]);
      }, 3000);

      // Функция очистки
      return () => {
        clearInterval(intervalId);
        console.log("User updates stopped");
      };
    });
  }

  // Метод для добавления пользователя
  addUser(user: User): void {
    this.users.push(user);
    // Обратите внимание: обновление произойдет автоматически в следующем интервале
  }
}

// Использование
const userService = new UserService();
const users$ = userService.getUsers();

const subscription = users$.subscribe({
  next: (users) => console.log("Updated users:", users),
  error: (err) => console.error("Error:", err),
});

// Добавляем нового пользователя через 5 секунд
setTimeout(() => {
  userService.addUser({ id: 4, name: "Emma", isActive: true });
}, 5000);

// Останавливаем обновления через 10 секунд
setTimeout(() => {
  subscription.unsubscribe();
}, 10000);
```

#### Использование фабричных методов для создания Observable

Кроме конструктора, RxJS предоставляет несколько фабричных методов для создания Observable:

#### 1. `Observable.create` (устаревший)

```typescript
import { Observable } from "rxjs";

// Устаревший метод, эквивалентный конструктору
const observable = Observable.create((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.complete();
});

// Предпочтительный современный вариант
const observable2 = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.complete();
});
```

#### 2. Пользовательская фабричная функция

```typescript
import { Observable } from "rxjs";

function observe<T>(generator: () => Generator<T>): Observable<T> {
  return new Observable<T>((subscriber) => {
    try {
      const iterator = generator();
      let result = iterator.next();

      while (!result.done) {
        subscriber.next(result.value);
        result = iterator.next();
      }

      subscriber.complete();
    } catch (error) {
      subscriber.error(error);
    }
  });
}

// Использование
function* generateValues() {
  yield "A";
  yield "B";
  yield "C";
}

const letters$ = observe(generateValues);

letters$.subscribe({
  next: (letter) => console.log(letter),
  complete: () => console.log("Completed"),
});
```

#### Управление потоком данных в Observable

#### 1. Условная отправка значений

```typescript
import { Observable } from "rxjs";

function conditionalStream(maxValue: number): Observable<number> {
  return new Observable<number>((subscriber) => {
    let value = 0;

    const intervalId = setInterval(() => {
      // Проверка - подписан ли еще кто-то
      if (subscriber.closed) {
        clearInterval(intervalId);
        return;
      }

      // Условная логика
      if (value % 2 === 0) {
        subscriber.next(value);
      }

      value++;

      // Завершение по достижении максимального значения
      if (value > maxValue) {
        subscriber.complete();
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  });
}

// Использование
conditionalStream(10).subscribe({
  next: (val) => console.log(`Received: ${val}`),
  complete: () => console.log("Stream completed"),
});
```

#### 2. Пауза и возобновление потока

```typescript
import { Observable } from "rxjs";

function pausableStream<T>(source: T[]): Observable<T> {
  return new Observable<T>((subscriber) => {
    let index = 0;
    let isPaused = false;
    let intervalId: any = null;

    // Функция для запуска или возобновления потока
    function resume() {
      if (!isPaused) return;

      isPaused = false;
      processNext();
    }

    // Функция для приостановки потока
    function pause() {
      isPaused = true;
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    }

    // Функция для обработки следующего элемента
    function processNext() {
      if (isPaused) return;

      intervalId = setInterval(() => {
        if (index < source.length) {
          subscriber.next(source[index++]);
        } else {
          clearInterval(intervalId);
          subscriber.complete();
        }
      }, 1000);
    }

    // Экспортируем методы управления потоком через подписчика
    (subscriber as any).pause = pause;
    (subscriber as any).resume = resume;

    // Начинаем поток
    processNext();

    // Функция очистки
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  });
}

// Использование
const items = ["A", "B", "C", "D", "E"];
const stream$ = pausableStream(items);

// Расширенная подписка с доступом к методам управления
const subscription: any = stream$.subscribe({
  next: (item) => console.log(`Item: ${item}`),
  complete: () => console.log("Stream completed"),
});

// Приостановка через 2 секунды
setTimeout(() => {
  console.log("Pausing stream");
  subscription.pause();

  // Возобновление через еще 3 секунды
  setTimeout(() => {
    console.log("Resuming stream");
    subscription.resume();
  }, 3000);
}, 2000);
```

#### Практическое использование в Angular

#### Observable для отслеживания изменений размера окна

```typescript
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { share } from "rxjs/operators";

export interface WindowSize {
  width: number;
  height: number;
}

@Injectable({
  providedIn: "root",
})
export class WindowService {
  // Создаем Observable для отслеживания изменений размера окна
  readonly size$: Observable<WindowSize>;

  constructor() {
    this.size$ = new Observable<WindowSize>((subscriber) => {
      // Первоначальная отправка текущего размера
      this.emitSize(subscriber);

      // Подписываемся на изменения размера окна
      const resizeHandler = () => this.emitSize(subscriber);
      window.addEventListener("resize", resizeHandler);

      // Функция очистки
      return () => {
        window.removeEventListener("resize", resizeHandler);
      };
    }).pipe(
      // Используем share(), чтобы несколько подписчиков использовали один поток
      share()
    );
  }

  private emitSize(subscriber: any): void {
    subscriber.next({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
}

// Использование в компоненте
@Component({
  selector: "app-responsive",
  template: `<div>Window size: {{ (windowSize$ | async)?.width }} x {{ (windowSize$ | async)?.height }}</div>`,
})
export class ResponsiveComponent {
  windowSize$ = this.windowService.size$;

  constructor(private windowService: WindowService) {}
}
```

#### Observable для мониторинга сетевого подключения

```typescript
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { share } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class NetworkService {
  readonly online$: Observable<boolean>;

  constructor() {
    this.online$ = new Observable<boolean>((subscriber) => {
      // Отправляем текущее состояние соединения
      subscriber.next(navigator.onLine);

      // Обработчики событий
      const onlineHandler = () => subscriber.next(true);
      const offlineHandler = () => subscriber.next(false);

      // Подписываемся на события подключения/отключения
      window.addEventListener("online", onlineHandler);
      window.addEventListener("offline", offlineHandler);

      // Функция очистки
      return () => {
        window.removeEventListener("online", onlineHandler);
        window.removeEventListener("offline", offlineHandler);
      };
    }).pipe(share());
  }
}

// Использование в компоненте
@Component({
  selector: "app-network-status",
  template: `
    <div [ngClass]="{ online: isOnline$ | async, offline: !(isOnline$ | async) }">
      {{ (isOnline$ | async) ? "Connected" : "No Internet Connection" }}
    </div>
  `,
})
export class NetworkStatusComponent {
  isOnline$ = this.networkService.online$;

  constructor(private networkService: NetworkService) {}
}
```

### 6. What are Subject and BehaviorSubject, and how are they used in Angular?

#### Основы Subject

**Subject** — это особый тип Observable, который одновременно является и наблюдаемым (Observable) и наблюдателем (Observer). Это означает, что Subject может как генерировать события (через метод `next()`), так и подписываться на другие Observable.

#### Ключевые характеристики Subject

- **Многоадресность** — рассылает значения всем своим подписчикам
- **Без начального значения** — новые подписчики не получают предыдущие значения
- **Горячий Observable** — выполняется независимо от наличия подписчиков
- **Может излучать события программно** — через вызовы методов `next()`, `error()` и `complete()`

#### Базовый пример Subject

```typescript
import { Subject } from "rxjs";

// Создаем Subject
const subject = new Subject<number>();

// Добавляем первого подписчика
subject.subscribe({
  next: (value) => console.log(`Observer A: ${value}`),
});

// Генерируем событие
subject.next(1); // Observer A: 1

// Добавляем второго подписчика (который не получает ранее отправленную 1)
subject.subscribe({
  next: (value) => console.log(`Observer B: ${value}`),
});

// Генерируем еще события
subject.next(2); // Observer A: 2, Observer B: 2
subject.next(3); // Observer A: 3, Observer B: 3

// Завершаем Subject
subject.complete();
```

#### BehaviorSubject и другие специализированные Subject

#### BehaviorSubject

**BehaviorSubject** — особый тип Subject, который требует начальное значение и всегда предоставляет последнее значение новым подписчикам.

```typescript
import { BehaviorSubject } from "rxjs";

// Создаем BehaviorSubject с начальным значением 0
const behaviorSubject = new BehaviorSubject<number>(0);

// Добавляем первого подписчика (сразу получает начальное значение 0)
behaviorSubject.subscribe({
  next: (value) => console.log(`Observer A: ${value}`),
}); // Observer A: 0

// Генерируем событие
behaviorSubject.next(1); // Observer A: 1

// Добавляем второго подписчика (получает последнее значение - 1)
behaviorSubject.subscribe({
  next: (value) => console.log(`Observer B: ${value}`),
}); // Observer B: 1

// Получаем текущее значение без подписки
console.log(`Current value: ${behaviorSubject.value}`); // Current value: 1

// Генерируем еще события
behaviorSubject.next(2); // Observer A: 2, Observer B: 2
```

#### ReplaySubject

**ReplaySubject** — Subject, который запоминает указанное количество предыдущих значений и воспроизводит их для новых подписчиков.

```typescript
import { ReplaySubject } from "rxjs";

// Создаем ReplaySubject с буфером на 2 значения
const replaySubject = new ReplaySubject<number>(2);

replaySubject.next(1);
replaySubject.next(2);
replaySubject.next(3);

// Новый подписчик получит 2 последних значения (2 и 3)
replaySubject.subscribe({
  next: (value) => console.log(`Observer: ${value}`),
}); // Observer: 2, Observer: 3
```

#### AsyncSubject

**AsyncSubject** — Subject, который излучает только последнее значение и только когда он завершен (complete).

```typescript
import { AsyncSubject } from "rxjs";

const asyncSubject = new AsyncSubject<number>();

asyncSubject.subscribe({
  next: (value) => console.log(`Observer A: ${value}`),
});

asyncSubject.next(1);
asyncSubject.next(2);
asyncSubject.next(3);

// Добавляем второго подписчика
asyncSubject.subscribe({
  next: (value) => console.log(`Observer B: ${value}`),
});

// Оба подписчика получат только последнее значение (3) и только после complete()
asyncSubject.next(4);
asyncSubject.complete(); // Observer A: 4, Observer B: 4
```

#### Использование Subject в Angular

#### 1. Передача данных между компонентами через сервис

```typescript
// data.service.ts
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataService {
  // Subject для передачи данных между компонентами
  private messageSource = new Subject<string>();

  // Observable, на который будут подписываться компоненты
  messages$ = this.messageSource.asObservable();

  // Метод для отправки сообщений
  sendMessage(message: string): void {
    this.messageSource.next(message);
  }
}

// sender.component.ts
@Component({
  selector: "app-sender",
  template: `
    <input #messageInput type="text" placeholder="Enter message" />
    <button (click)="sendMessage(messageInput.value)">Send</button>
  `,
})
export class SenderComponent {
  constructor(private dataService: DataService) {}

  sendMessage(message: string): void {
    this.dataService.sendMessage(message);
  }
}

// receiver.component.ts
@Component({
  selector: "app-receiver",
  template: `<p>Latest message: {{ message }}</p>`,
})
export class ReceiverComponent implements OnInit, OnDestroy {
  message: string;
  private subscription: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.subscription = this.dataService.messages$.subscribe((message) => {
      this.message = message;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
```

#### 2. Управление состоянием приложения с BehaviorSubject

```typescript
// auth.service.ts
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "./user.model";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  // BehaviorSubject с начальным значением null (пользователь не авторизован)
  private currentUserSubject = new BehaviorSubject<User>(null);

  // Публичный Observable для компонентов
  currentUser$ = this.currentUserSubject.asObservable();

  // Геттер для получения текущего значения без подписки
  get currentUser(): User {
    return this.currentUserSubject.value;
  }

  // Геттер для проверки авторизации
  get isLoggedIn(): boolean {
    return !!this.currentUserSubject.value;
  }

  constructor(private http: HttpClient) {
    // Проверяем наличие пользователя в localStorage при инициализации
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      this.currentUserSubject.next(JSON.parse(savedUser));
    }
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>("/api/login", { email, password }).pipe(
      tap((user) => {
        // Сохраняем пользователя в localStorage
        localStorage.setItem("currentUser", JSON.stringify(user));

        // Обновляем BehaviorSubject
        this.currentUserSubject.next(user);
      })
    );
  }

  logout(): void {
    // Удаляем пользователя из localStorage
    localStorage.removeItem("currentUser");

    // Обновляем BehaviorSubject значением null
    this.currentUserSubject.next(null);
  }
}
```

Использование в компонентах:

```typescript
// header.component.ts
@Component({
  selector: "app-header",
  template: `
    <nav>
      <a routerLink="/">Home</a>
      <ng-container *ngIf="isLoggedIn$ | async; else loginBtn">
        <span>Welcome, {{ (currentUser$ | async)?.name }}</span>
        <button (click)="logout()">Logout</button>
      </ng-container>
      <ng-template #loginBtn>
        <a routerLink="/login">Login</a>
      </ng-template>
    </nav>
  `,
})
export class HeaderComponent {
  currentUser$ = this.authService.currentUser$;
  isLoggedIn$ = this.currentUser$.pipe(map((user) => !!user));

  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}
```

#### 3. Реализация loading state с BehaviorSubject

```typescript
// loading.service.ts
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  setLoading(isLoading: boolean): void {
    this.loadingSubject.next(isLoading);
  }

  // Вспомогательные методы для более чистого API
  startLoading(): void {
    this.loadingSubject.next(true);
  }

  stopLoading(): void {
    this.loadingSubject.next(false);
  }
}

// Использование в HTTP-перехватчике
@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private activeRequests = 0;

  constructor(private loadingService: LoadingService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.activeRequests === 0) {
      this.loadingService.startLoading();
    }

    this.activeRequests++;

    return next.handle(req).pipe(
      finalize(() => {
        this.activeRequests--;
        if (this.activeRequests === 0) {
          this.loadingService.stopLoading();
        }
      })
    );
  }
}

// app.component.ts
@Component({
  selector: "app-root",
  template: `
    <div *ngIf="loading$ | async" class="loading-overlay">
      <div class="spinner"></div>
    </div>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  loading$ = this.loadingService.loading$;

  constructor(private loadingService: LoadingService) {}
}
```

#### 4. Реализация корзины товаров с BehaviorSubject

```typescript
// cart.service.ts
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: "root",
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  // Производные Observables
  totalItems$ = this.cartItems$.pipe(map((items) => items.reduce((total, item) => total + item.quantity, 0)));

  totalPrice$ = this.cartItems$.pipe(map((items) => items.reduce((total, item) => total + item.price * item.quantity, 0)));

  constructor() {
    // Инициализация корзины из localStorage
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      this.cartItemsSubject.next(JSON.parse(savedCart));
    }
  }

  private saveCart(items: CartItem[]): void {
    localStorage.setItem("cart", JSON.stringify(items));
    this.cartItemsSubject.next(items);
  }

  addToCart(product: CartItem): void {
    const currentItems = this.cartItemsSubject.value;
    const existingItem = currentItems.find((item) => item.id === product.id);

    let updatedItems: CartItem[];

    if (existingItem) {
      // Обновляем количество существующего товара
      updatedItems = currentItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item));
    } else {
      // Добавляем новый товар
      updatedItems = [...currentItems, product];
    }

    this.saveCart(updatedItems);
  }

  updateQuantity(productId: number, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }

    const updatedItems = this.cartItemsSubject.value.map((item) => (item.id === productId ? { ...item, quantity } : item));

    this.saveCart(updatedItems);
  }

  removeFromCart(productId: number): void {
    const updatedItems = this.cartItemsSubject.value.filter((item) => item.id !== productId);
    this.saveCart(updatedItems);
  }

  clearCart(): void {
    this.saveCart([]);
  }
}
```

Использование в компонентах:

```typescript
// cart.component.ts
@Component({
  selector: 'app-cart',
  template: `
    <div *ngIf="(totalItems$ | async) === 0">
      Your cart is empty.
    </div>

    <div *ngIf="(totalItems$ | async) > 0">
      <h2>Your Cart</h2>
      <ul>
        <li *ngFor="let item of cartItems$ | async">
          {{ item.name }} - ${{ item.price }} x
          <input type="number" [value]="item.quantity"
                 (change)="updateQuantity(item.id, $event.target.value)">
          <button (click)="removeItem(item.id)">Remove</button>
        </li>
      </ul>

      <div class="cart-summary">
        <p>Total Items: {{ totalItems$ | async }}</p>
        <p>Total Price: ${{ totalPrice$ | async | number:'1.2-2' }}</p>
        <button (click)="clearCart()">Clear Cart</button>
        <button (click)="checkout()">Checkout</button>
      </div>
    </div>
  `
})
export class CartComponent {
  cartItems$ = this.cartService.cartItems$;
  totalItems$ = this.cartService.totalItems$;
  totalPrice$ = this.cartService.totalPrice$;

  constructor(private cartService: CartService) {}

  updateQuantity(id: number, quantityStr: string): void {
    const quantity = parseInt(quantityStr, 10);
    this.cartService.updateQuantity(id, quantity);
  }

  removeItem(id: number): void {
    this.cartService.removeFromCart(id);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  checkout(): void {
    // Реализация перехода к оформлению заказа
  }
}
```

#### 5. Использование Subject для уведомлений

```typescript
// notification.service.ts
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

export interface Notification {
  type: "success" | "error" | "info" | "warning";
  message: string;
  duration?: number;
}

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  private notificationSubject = new Subject<Notification>();
  notifications$ = this.notificationSubject.asObservable();

  success(message: string, duration = 3000): void {
    this.notify({ type: "success", message, duration });
  }

  error(message: string, duration = 5000): void {
    this.notify({ type: "error", message, duration });
  }

  info(message: string, duration = 3000): void {
    this.notify({ type: "info", message, duration });
  }

  warning(message: string, duration = 4000): void {
    this.notify({ type: "warning", message, duration });
  }

  private notify(notification: Notification): void {
    this.notificationSubject.next(notification);
  }
}

// notification.component.ts
@Component({
  selector: "app-notifications",
  template: `
    <div class="notifications-container">
      <div *ngFor="let notification of activeNotifications" [ngClass]="['notification', notification.type]" [@fadeInOut]>
        {{ notification.message }}
      </div>
    </div>
  `,
  animations: [trigger("fadeInOut", [transition(":enter", [style({ opacity: 0, transform: "translateY(20px)" }), animate("300ms ease-out", style({ opacity: 1, transform: "translateY(0)" }))]), transition(":leave", [animate("300ms ease-in", style({ opacity: 0, transform: "translateY(-20px)" }))])])],
})
export class NotificationsComponent implements OnInit, OnDestroy {
  activeNotifications: Notification[] = [];
  private subscription: Subscription;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.subscription = this.notificationService.notifications$.subscribe((notification) => {
      // Добавляем уведомление
      this.activeNotifications.push(notification);

      // Удаляем уведомление после указанной задержки
      setTimeout(() => {
        this.removeNotification(notification);
      }, notification.duration || 3000);
    });
  }

  removeNotification(notification: Notification): void {
    const index = this.activeNotifications.indexOf(notification);
    if (index !== -1) {
      this.activeNotifications.splice(index, 1);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
```

#### Преимущества и особенности использования Subject и BehaviorSubject

#### Когда использовать Subject:

1. **Для публикации событий** — когда компоненты должны уведомляться о событиях, но не обязательно знать о предыдущих событиях
2. **Для одноразовых нотификаций** — когда сообщение должно быть доставлено только текущим подписчикам, а не будущим
3. **Для внешней коммуникации** — когда вы хотите отправлять события от внешних источников в вашу систему

#### Когда использовать BehaviorSubject:

1. **Для хранения состояний** — когда нужно всегда иметь доступ к текущему состоянию
2. **Для рационального доступа к данным** — когда компоненты, загружаемые позже, должны знать о текущем значении
3. **Для кэширования данных** — когда нужно сохранить последний ответ API для новых подписчиков
4. **Для хранения настроек пользователя** — когда нужно хранить текущие пользовательские предпочтения

#### Когда использовать ReplaySubject:

1. **Для истории действий** — когда компоненты нуждаются в нескольких последних действиях
2. **Для ленивой загрузки с историей** — когда поздно загруженные компоненты должны видеть предыдущие значения
3. **Для потоков с предысторией** — когда нужно предоставить контекст в виде нескольких предыдущих сообщений

#### Когда использовать AsyncSubject:

1. **Для завершаемых операций** — когда нужно только последнее значение долгой операции
2. **Для единичных расчетов** — когда результат вычисления должен быть известен только в конце

### 7. How would you explain the concepts of _Hot_ and _Cold_ Observables?

Концепции "горячих" и "холодных" Observables относятся к тому, как Observable создает и распределяет свои значения, и это фундаментальная характеристика, которая влияет на поведение потоков данных.

#### Холодные Observables

**Холодный Observable** создает новый "производитель" данных для каждого подписчика. Это означает, что каждый подписчик получает свой собственный, независимый поток всех значений с самого начала.

#### Ключевые характеристики холодных Observables:

1. **Ленивые** — начинают производить данные только при подписке
2. **Уникальные** — каждый подписчик получает свою собственную, независимую последовательность
3. **Воспроизводимые** — каждый подписчик получает все значения с самого начала
4. **Единичные** — последовательность уникальна для каждого подписчика

#### Примеры холодных Observables:

- HTTP-запросы с `HttpClient`
- Потоки, созданные операторами `of()`, `from()`, `range()`
- Большинство операторов создают холодные Observables

```typescript
import { Observable, of } from "rxjs";
import { ajax } from "rxjs/ajax";

// Холодный Observable из оператора of
const cold1$ = of(1, 2, 3);

// Холодный Observable, созданный вручную
const cold2$ = new Observable<number>((subscriber) => {
  console.log("Cold Observable executed");
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
});

// Холодный Observable из HTTP-запроса
const cold3$ = ajax.getJSON("https://api.example.com/data");

// Демонстрация холодного поведения
console.log("Before first subscription");
cold2$.subscribe((val) => console.log(`Subscriber 1: ${val}`));

// Через 2 секунды подписываемся снова
setTimeout(() => {
  console.log("Before second subscription");
  cold2$.subscribe((val) => console.log(`Subscriber 2: ${val}`));
}, 2000);

// Вывод:
// Before first subscription
// Cold Observable executed
// Subscriber 1: 1
// Subscriber 1: 2
// Subscriber 1: 3
// Before second subscription
// Cold Observable executed  <-- Обратите внимание, выполнение происходит снова
// Subscriber 2: 1
// Subscriber 2: 2
// Subscriber 2: 3
```

В этом примере мы видим, что каждый подписчик получает свой собственный набор данных, и для каждого из них код создания Observable выполняется заново.

#### Горячие Observables

**Горячий Observable** использует общий "производитель" данных для всех подписчиков. Это означает, что подписчики получают только те значения, которые излучаются после их подписки.

#### Ключевые характеристики горячих Observables:

1. **Активные** — могут излучать данные независимо от наличия подписчиков
2. **Общие** — все подписчики разделяют один и тот же поток данных
3. **В реальном времени** — подписчики получают только текущие и будущие значения
4. **Многоадресные** — одна последовательность распределяется между всеми подписчиками

#### Примеры горячих Observables:

- События DOM (клики, ввод и т.д.)
- `fromEvent()` для любых браузерных событий
- `interval()` и `timer()` с оператором `share()`
- `Subject` и его подклассы
- `WebSocket` подключения с совместным использованием

```typescript
import { Subject, fromEvent, interval } from "rxjs";
import { share } from "rxjs/operators";

// Горячий Observable из Subject
const subject = new Subject<number>();
const hot1$ = subject.asObservable();

// Горячий Observable из DOM-события
const button = document.querySelector("#myButton");
const hot2$ = fromEvent(button, "click");

// Горячий Observable из холодного с помощью share()
const hot3$ = interval(1000).pipe(share());

// Демонстрация горячего поведения с Subject
console.log("Before first subscription");
hot1$.subscribe((val) => console.log(`Subscriber 1: ${val}`));

// Генерируем значение
subject.next(1);

// Подписываемся вторым подписчиком
console.log("Before second subscription");
hot1$.subscribe((val) => console.log(`Subscriber 2: ${val}`));

// Генерируем еще значения
subject.next(2);
subject.next(3);

// Вывод:
// Before first subscription
// Subscriber 1: 1
// Before second subscription
// Subscriber 1: 2
// Subscriber 2: 2  <-- Второй подписчик не получил 1
// Subscriber 1: 3
// Subscriber 2: 3
```

В этом примере мы видим, что второй подписчик не получает значение 1, которое было излучено до его подписки.

#### Превращение холодного Observable в горячий

Существует несколько способов превратить холодный Observable в горячий:

#### 1. Использование `share()` или `shareReplay()`

```typescript
import { interval } from "rxjs";
import { share, shareReplay } from "rxjs/operators";

// Холодный Observable
const cold$ = interval(1000);

// Преобразование в горячий с помощью share()
const hot$ = cold$.pipe(share());

// Преобразование в горячий с кэшированием последних N значений
const hotWithReplay$ = cold$.pipe(shareReplay(2)); // Сохраняет 2 последних значения
```

#### 2. Использование Subject

```typescript
import { Observable, Subject } from "rxjs";

// Холодный Observable
const cold$ = new Observable((subscriber) => {
  const intervalId = setInterval(() => {
    const value = Math.random();
    console.log(`Generated: ${value}`);
    subscriber.next(value);
  }, 1000);

  return () => clearInterval(intervalId);
});

// Создаем Subject
const subject = new Subject();

// Подписываем Subject на холодный Observable (multicasting)
const subscription = cold$.subscribe(subject);

// Теперь подписчики могут подписаться на горячий Subject
const subscriber1 = subject.subscribe((val) => console.log(`Subscriber 1: ${val}`));

// Через 3 секунды добавляем второго подписчика
setTimeout(() => {
  const subscriber2 = subject.subscribe((val) => console.log(`Subscriber 2: ${val}`));
}, 3000);

// Через 6 секунд отписываемся от всего
setTimeout(() => {
  subscriber1.unsubscribe();
  subscriber2.unsubscribe();
  subscription.unsubscribe();
}, 6000);
```

#### 3. Использование multicast с Subject

```typescript
import { interval, Subject } from "rxjs";
import { multicast, refCount } from "rxjs/operators";

const source$ = interval(1000);

// Создаем подключаемый (connectable) Observable
const multicasted$ = source$.pipe(
  multicast(() => new Subject()),
  refCount() // Автоматически подключает/отключает в зависимости от количества подписчиков
);

// То же самое, что и выше, но короче
const shared$ = source$.pipe(share());
```

#### Практическое сравнение в реальных сценариях

#### Пример 1: HTTP-запросы (холодные по умолчанию)

```typescript
// Без share() — каждый подписчик делает отдельный HTTP-запрос
this.http.get('/api/data').subscribe(...); // Запрос 1
this.http.get('/api/data').subscribe(...); // Запрос 2

// С share() — все подписчики разделяют один запрос
const sharedRequest$ = this.http.get('/api/data').pipe(share());
sharedRequest$.subscribe(...); // Общий запрос
sharedRequest$.subscribe(...); // Без дополнительного запроса
```

#### Пример 2: Кэширование с replay

```typescript
@Injectable({
  providedIn: "root",
})
export class DataService {
  private cachedData$: Observable<any>;

  getData(): Observable<any> {
    if (!this.cachedData$) {
      // Загружаем данные только один раз и кэшируем для всех подписчиков
      this.cachedData$ = this.http.get("/api/data").pipe(
        shareReplay(1) // Кэшируем последний результат
      );
    }
    return this.cachedData$;
  }

  refreshData(): void {
    // Сбрасываем кэш
    this.cachedData$ = null;
  }
}
```

#### Пример 3: Уведомления о действиях пользователя

```typescript
@Injectable({
  providedIn: "root",
})
export class UserActivityService {
  // Горячий Observable для активностей пользователя
  private activitySubject = new Subject<string>();
  userActivity$ = this.activitySubject.asObservable();

  recordActivity(activity: string): void {
    console.log(`User performed: ${activity}`);
    this.activitySubject.next(activity);
  }
}

// Использование в компоненте
@Component({
  selector: "app-activity-tracker",
  template: `
    <button (click)="performAction('save')">Save</button>
    <button (click)="performAction('delete')">Delete</button>
    <button (click)="performAction('update')">Update</button>
  `,
})
export class ActivityTrackerComponent {
  constructor(private activityService: UserActivityService) {}

  performAction(action: string): void {
    this.activityService.recordActivity(action);
  }
}

// Компонент для отображения последних действий
@Component({
  selector: "app-activity-log",
  template: `
    <h3>Recent Activities:</h3>
    <ul>
      <li *ngFor="let action of recentActivities">{{ action }}</li>
    </ul>
  `,
})
export class ActivityLogComponent implements OnInit, OnDestroy {
  recentActivities: string[] = [];
  private subscription: Subscription;

  constructor(private activityService: UserActivityService) {}

  ngOnInit(): void {
    this.subscription = this.activityService.userActivity$.subscribe((activity) => {
      this.recentActivities.unshift(activity);
      // Сохраняем только 5 последних активностей
      this.recentActivities = this.recentActivities.slice(0, 5);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
```

#### Вывод и практические рекомендации

#### Когда использовать холодные Observables:

1. **HTTP-запросы**, которые должны выполняться заново для каждого подписчика
2. **Уникальные данные** для каждого подписчика
3. **Ленивые вычисления**, которые должны начинаться только при подписке

#### Когда использовать горячие Observables:

1. **События реального времени**, которые могут происходить независимо от подписок
2. **Общие данные** между несколькими компонентами
3. **Кэширование данных**, когда нужно избежать повторных загрузок
4. **Коммуникация между компонентами** через сервисы
5. **Потоки состояний** в приложении (подобно Redux/NgRx, но на базовом уровне)

Понимание различий между горячими и холодными Observables критически важно для правильного проектирования потоков данных в приложениях на Angular и предотвращения неожиданного поведения или утечек.

### 8. How do you properly unsubscribe from an Observable?

Правильная отписка от Observable в Angular является критически важной для предотвращения утечек памяти и избыточных вычислений. Когда компонент уничтожается, но подписки остаются активными, это может привести к серьезным проблемам производительности и ошибкам.

#### Почему важно отписываться

1. **Предотвращение утечек памяти** — неотмененные подписки удерживают ссылки на компоненты, препятствуя их очистке сборщиком мусора
2. **Предотвращение ошибок** — события могут продолжать поступать в уничтоженные компоненты
3. **Оптимизация производительности** — ненужные подписки потребляют ресурсы и могут выполнять излишнюю работу
4. **Предотвращение неожиданного поведения** — устаревшие данные могут влиять на состояние приложения

#### Основные подходы к отписке

#### 1. Явная отписка в ngOnDestroy

Самый базовый и надежный подход — хранить ссылки на все подписки и отписываться в методе `ngOnDestroy()`:

```typescript
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { DataService } from "./data.service";

@Component({
  selector: "app-data-display",
  template: `<div>{{ data | json }}</div>`,
})
export class DataDisplayComponent implements OnInit, OnDestroy {
  data: any;
  private subscription: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.subscription = this.dataService.getData().subscribe((result) => (this.data = result));
  }

  ngOnDestroy(): void {
    // Отписываемся при уничтожении компонента
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
```

#### 2. Использование составной подписки

Для нескольких подписок можно использовать составную подписку:

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from './data.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-dashboard',
  template: `
    <div>
      <h2>User: {{ userName }}</h2>
      <div>Data: {{ data | json }}</div>
      <div>Stats: {{ stats | json }}</div>
    </div>
  `
})
export class DashboardComponent implements OnInit, OnDestroy {
  userName: string;
  data: any;
  stats: any;
  
  // Составная подписка для всех подписок компонента
  private subscriptions = new Subscription();
  
  constructor(
    private dataService: DataService,
    private userService: UserService
  ) {}
  
  ngOnInit(): void {
    // Добавляем каждую подписку в составную подписку
    this.subscriptions.add(
      this.userService.getCurrentUser().subscribe(user => {
        this.userName = user.name;
      })
    );
    
    this.subscriptions.add(
      this.dataService.getData().subscribe(data => {
        this.data = data;
      })
    );
    
    this.subscriptions.add(
      this.dataService.getStats().subscribe(stats => {
        this.stats = stats;
      })
    );
  }
  
  ngOnDestroy(): void {
    // Отписываемся от всех подписок одним вызовом
    this.subscriptions.unsubscribe();
  }
}
```

#### 3. Использование async pipe в шаблонах

`async` pipe автоматически подписывается на Observable и отписывается при разрушении компонента:

```typescript
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-async-display',
  template: `
    <div *ngIf="data$ | async as data; else loading">
      {{ data | json }}
    </div>
    <ng-template #loading>Loading...</ng-template>
  `
})
export class AsyncDisplayComponent {
  data$: Observable<any>;
  
  constructor(private dataService: DataService) {
    this.data$ = this.dataService.getData();
  }
}
```

#### 4. Использование операторов takeUntil/takeWhile

Другой популярный подход — использование операторов, завершающих поток при определенных условиях:

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DataService } from './data.service';

@Component({
  selector: 'app-take-until',
  template: `<div>{{ data | json }}</div>`
})
export class TakeUntilComponent implements OnInit, OnDestroy {
  data: any;
  
  // Сигнал для завершения всех подписок
  private destroy$ = new Subject<void>();
  
  constructor(private dataService: DataService) {}
  
  ngOnInit(): void {
    // takeUntil автоматически отписывается, когда destroy$ излучает значение
    this.dataService.getData().pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => {
      this.data = data;
    });
    
    // Другие подписки с тем же оператором
    this.dataService.getUpdates().pipe(
      takeUntil(this.destroy$)
    ).subscribe(updates => {
      console.log('Updates:', updates);
    });
  }
  
  ngOnDestroy(): void {
    // Сигнализируем о завершении
    this.destroy$.next();
    // Завершаем Subject
    this.destroy$.complete();
  }
}
```

#### 5. Использование takeWhile

```typescript
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-take-while',
  template: `<div>Counter: {{ counter }}</div>`
})
export class TakeWhileComponent implements OnInit {
  counter = 0;
  private alive = true;
  
  ngOnInit(): void {
    interval(1000).pipe(
      // Подписка активна, пока alive === true
      takeWhile(() => this.alive)
    ).subscribe(count => {
      this.counter = count;
    });
  }
  
  ngOnDestroy(): void {
    // Установка флага в false завершит все потоки с takeWhile
    this.alive = false;
  }
}
```

#### 6. Использование операторов take, first, или takeUntil(timer)

Иногда нужно ограничить количество значений или время подписки:

```typescript
import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { take, first, takeUntil } from 'rxjs/operators';
import { DataService } from './data.service';

@Component({
  selector: 'app-limited-subscription',
  template: ``
})
export class LimitedSubscriptionComponent {
  constructor(private dataService: DataService) {
    // Получить только первое значение
    this.dataService.getData().pipe(
      first()
    ).subscribe(data => {
      console.log('First data:', data);
    });
    
    // Получить только первые 3 значения
    this.dataService.getUpdates().pipe(
      take(3)
    ).subscribe(update => {
      console.log('Limited update:', update);
    });
    
    // Подписка активна только 5 секунд
    this.dataService.getStream().pipe(
      takeUntil(timer(5000))
    ).subscribe(item => {
      console.log('Timed item:', item);
    });
  }
}
```

#### Сравнение подходов к отписке

| Подход | Преимущества | Недостатки |
|--------|--------------|------------|
| `unsubscribe()` | Явный и понятный, полный контроль | Требует ручного отслеживания подписок |
| Составная подписка | Управление несколькими подписками одновременно | Необходимо не забыть добавить все подписки |
| `async` pipe | Автоматическая отписка, декларативный подход | Ограничен использованием в шаблонах |
| `takeUntil(destroy$)` | Централизованная отписка для многих потоков | Может затруднить отладку, если забыть добавить оператор |
| `takeWhile(() => alive)` | Простой в использовании | Нуждается в булевой переменной для отслеживания |
| `take/first` | Автоматическая отписка после N значений | Подходит только для ограниченных потоков |

#### Комбинирование подходов в реальных приложениях

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription, merge } from 'rxjs';
import { takeUntil, switchMap, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';
import { PostService } from './post.service';

@Component({
  selector: 'app-user-profile',
  template: `
    <div *ngIf="user$ | async as user">
      <h2>{{ user.name }}</h2>
      <p>{{ user.bio }}</p>
      
      <h3>Latest Posts</h3>
      <div *ngFor="let post of posts">
        <h4>{{ post.title }}</h4>
        <p>{{ post.content }}</p>
      </div>
      
      <button (click)="refresh()">Refresh</button>
    </div>
  `
})
export class UserProfileComponent implements OnInit, OnDestroy {
  // Используем async pipe для User
  user$: Observable<User>;
  
  // Для постов используем ручное управление - они могут обновляться отдельно
  posts: Post[] = [];
  
  // Для событий обновления страницы
  private refresh$ = new Subject<void>();
  
  // Для отписки
  private destroy$ = new Subject<void>();
  private subscriptions = new Subscription();
  
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private postService: PostService
  ) {}
  
  ngOnInit(): void {
    // Настраиваем поток user$ - отписка будет через async pipe
    this.user$ = this.route.paramMap.pipe(
      switchMap(params => {
        const userId = params.get('id');
        return this.userService.getUser(userId);
      })
    );
    
    // Подписываемся на посты с использованием takeUntil
    this.route.paramMap.pipe(
      switchMap(params => {
        const userId = params.get('id');
        return this.postService.getUserPosts(userId);
      }),
      takeUntil(this.destroy$)
    ).subscribe(posts => {
      this.posts = posts;
    });
    
    // Подписка на пользовательские обновления
    this.subscriptions.add(
      this.refresh$.pipe(
        switchMap(() => this.route.paramMap),
        switchMap(params => {
          const userId = params.get('id');
          return this.postService.getUserPosts(userId, true); // принудительное обновление
        })
      ).subscribe(posts => {
        this.posts = posts;
      })
    );
    
    // Подписываемся на активность пользователя
    this.subscriptions.add(
      this.userService.userActivity$.pipe(
        takeUntil(this.destroy$)
      ).subscribe(activity => {
        console.log('User activity:', activity);
      })
    );
  }
  
  refresh(): void {
    this.refresh$.next();
  }
  
  ngOnDestroy(): void {
    // Двойной подход для надежности
    this.destroy$.next();
    this.destroy$.complete();
    this.subscriptions.unsubscribe();
  }
}
```

#### Лучшие практики отписки

1. **Используйте интерфейс OnDestroy**:
   ```typescript
   export class MyComponent implements OnDestroy {
     ngOnDestroy() {
       // Отписка
     }
   }
   ```

2. **Предпочитайте async pipe**, когда это возможно:
   ```html
   <div *ngIf="data$ | async as data">{{ data }}</div>
   ```

3. **Создайте удобную базовую функциональность**:
   ```typescript
   export abstract class BaseComponent implements OnDestroy {
     protected destroy$ = new Subject<void>();
     
     ngOnDestroy() {
       this.destroy$.next();
       this.destroy$.complete();
     }
   }
   
   // Использование в компонентах
   export class MyComponent extends BaseComponent {
     ngOnInit() {
       this.service.getData().pipe(
         takeUntil(this.destroy$)
       ).subscribe(data => {
         // Обработка данных
       });
     }
   }
   ```

4. **Используйте линтеры для проверки отписок**:
   - ESLint с правилами для RxJS может помочь обнаружить потенциальные утечки

5. **Придерживайтесь единого подхода** в рамках приложения:
   - Выберите один или два основных подхода и следуйте им
   - Документируйте принятые практики для команды

6. **Тестируйте утечки**:
   - Создавайте и уничтожайте компоненты в тестах, проверяя, что подписки корректно отменяются

#### Особые случаи и ловушки

1. **Nested Subscriptions** — вложенные подписки требуют особого внимания:
   ```typescript
   // Неправильно: внутренняя подписка не будет отменена автоматически
   this.service.getUsers().pipe(
     takeUntil(this.destroy$)
   ).subscribe(users => {
     // Эта подписка не защищена takeUntil!
     this.service.getPosts(users[0].id).subscribe(posts => {
       this.posts = posts;
     });
   });
   
   // Правильно: используйте операторы типа switchMap для вложенных подписок
   this.service.getUsers().pipe(
     takeUntil(this.destroy$),
     switchMap(users => this.service.getPosts(users[0].id))
   ).subscribe(posts => {
     this.posts = posts;
   });
   ```

2. **Операторы, пропускающие takeUntil** — некоторые операторы могут создавать внутренние подписки:
   ```typescript
   // Проблемное использование mergeMap без дополнительного takeUntil
   this.source$.pipe(
     takeUntil(this.destroy$),
     mergeMap(id => this.getData(id))
   ).subscribe();
   
   // Правильная версия с takeUntil внутри mergeMap
   this.source$.pipe(
     takeUntil(this.destroy$),
     mergeMap(id => this.getData(id).pipe(takeUntil(this.destroy$)))
   ).subscribe();
   ```

3. **Оператор share/shareReplay** — требует осторожности с отпиской:
   ```typescript
   // Создает постоянную подписку, которая не очищается автоматически
   const shared$ = this.http.get('/api/data').pipe(
     shareReplay(1)
   );
   
   // Лучше указать refCount: true для автоматической отписки при отсутствии подписчиков
   const sharedBetter$ = this.http.get('/api/data').pipe(
     shareReplay({ bufferSize: 1, refCount: true })
   );
   ```

### 9. What are the different approaches to state management in Angular? What are the benefits of using service-based methods versus NgRx or other state management libraries?

Управление состоянием — один из ключевых аспектов разработки современных Angular-приложений. С ростом сложности приложений становится важным иметь предсказуемый и эффективный способ хранения, изменения и доступа к данным.

#### Основные подходы к управлению состоянием в Angular

#### 1. Локальное состояние компонентов

Самый простой подход — хранение состояния внутри компонентов.

```typescript
@Component({
  selector: 'app-counter',
  template: `
    <p>Count: {{ count }}</p>
    <button (click)="increment()">+</button>
    <button (click)="decrement()">-</button>
  `
})
export class CounterComponent {
  count = 0;
  
  increment() {
    this.count++;
  }
  
  decrement() {
    this.count--;
  }
}
```

**Преимущества**:
- Простота реализации
- Инкапсуляция данных
- Не требует дополнительных зависимостей

**Недостатки**:
- Сложно делиться данными между компонентами
- Трудно сохранять состояние при навигации
- Плохо масштабируется для сложных приложений

#### 2. Сервисы для управления состоянием

Хранение общего состояния в сервисах с использованием RxJS.

```typescript
// state.service.ts
@Injectable({
  providedIn: 'root'
})
export class StateService {
  private counterSubject = new BehaviorSubject<number>(0);
  counter$ = this.counterSubject.asObservable();
  
  increment() {
    this.counterSubject.next(this.counterSubject.value + 1);
  }
  
  decrement() {
    this.counterSubject.next(this.counterSubject.value - 1);
  }
}

// counter.component.ts
@Component({
  selector: 'app-counter',
  template: `
    <p>Count: {{ counter$ | async }}</p>
    <button (click)="increment()">+</button>
    <button (click)="decrement()">-</button>
  `
})
export class CounterComponent {
  counter$ = this.stateService.counter$;
  
  constructor(private stateService: StateService) {}
  
  increment() {
    this.stateService.increment();
  }
  
  decrement() {
    this.stateService.decrement();
  }
}
```

**Преимущества**:
- Данные доступны нескольким компонентам
- Хорошо работает с Observable и async pipe
- Встроено в Angular без дополнительных библиотек
- Легко интегрируется с существующим кодом

**Недостатки**:
- Может быть сложно отслеживать изменения в крупных приложениях
- Возможны неконтролируемые мутации состояния

#### 3. Управление состоянием с помощью NgRx

NgRx — библиотека управления состоянием, реализующая паттерн Redux для Angular.

```typescript
// counter.actions.ts
import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');

// counter.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as CounterActions from './counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(CounterActions.increment, state => state + 1),
  on(CounterActions.decrement, state => state - 1)
);

// counter.component.ts
@Component({
  selector: 'app-counter',
  template: `
    <p>Count: {{ counter$ | async }}</p>
    <button (click)="increment()">+</button>
    <button (click)="decrement()">-</button>
  `
})
export class CounterComponent {
  counter$ = this.store.select(state => state.counter);
  
  constructor(private store: Store<{ counter: number }>) {}
  
  increment() {
    this.store.dispatch(increment());
  }
  
  decrement() {
    this.store.dispatch(decrement());
  }
}
```

**Преимущества**:
- Централизованное неизменяемое (immutable) состояние
- Предсказуемые изменения через определенные действия
- Средства отладки и инспекции состояния
- DevTools для отслеживания всех изменений
- Хорошо подходит для крупных приложений

**Недостатки**:
- Большая кривая обучения
- Избыточный шаблонный код (boilerplate)
- Повышенная сложность для простых случаев

#### 4. NGXS — альтернативная библиотека управления состоянием

NGXS упрощает синтаксис NgRx с помощью декораторов и классов.

```typescript
// counter.state.ts
import { State, Action, StateContext } from '@ngxs/store';

export class Increment {
  static readonly type = '[Counter] Increment';
}

export class Decrement {
  static readonly type = '[Counter] Decrement';
}

@State<number>({
  name: 'counter',
  defaults: 0
})
export class CounterState {
  @Action(Increment)
  increment(ctx: StateContext<number>) {
    ctx.setState(ctx.getState() + 1);
  }
  
  @Action(Decrement)
  decrement(ctx: StateContext<number>) {
    ctx.setState(ctx.getState() - 1);
  }
}

// counter.component.ts
@Component({
  selector: 'app-counter',
  template: `
    <p>Count: {{ counter$ | async }}</p>
    <button (click)="increment()">+</button>
    <button (click)="decrement()">-</button>
  `
})
export class CounterComponent {
  counter$ = this.store.select(state => state.counter);
  
  constructor(private store: Store) {}
  
  increment() {
    this.store.dispatch(new Increment());
  }
  
  decrement() {
    this.store.dispatch(new Decrement());
  }
}
```

**Преимущества**:
- Меньше шаблонного кода, чем NgRx
- Использует декораторы для лучшей читаемости
- Интеграция с Angular DI
- Похожие инструменты отладки, как в NgRx

**Недостатки**:
- Меньшее сообщество по сравнению с NgRx
- Всё еще избыточно для простых приложений

#### 5. Akita — прогрессивное управление состоянием

Akita предлагает более интуитивный API, вдохновленный принципами DDD и CQRS.

```typescript
// counter.store.ts
import { Store, StoreConfig } from '@datorama/akita';

export interface CounterState {
  count: number;
}

export function createInitialState(): CounterState {
  return {
    count: 0
  };
}

@StoreConfig({ name: 'counter' })
export class CounterStore extends Store<CounterState> {
  constructor() {
    super(createInitialState());
  }
}

// counter.query.ts
import { Query } from '@datorama/akita';
import { CounterState, CounterStore } from './counter.store';

export class CounterQuery extends Query<CounterState> {
  count$ = this.select(state => state.count);
  
  constructor(protected store: CounterStore) {
    super(store);
  }
}

// counter.service.ts
import { Injectable } from '@angular/core';
import { CounterStore } from './counter.store';

@Injectable({ providedIn: 'root' })
export class CounterService {
  constructor(private counterStore: CounterStore) {}
  
  increment() {
    this.counterStore.update(state => ({
      count: state.count + 1
    }));
  }
  
  decrement() {
    this.counterStore.update(state => ({
      count: state.count - 1
    }));
  }
}

// counter.component.ts
@Component({
  selector: 'app-counter',
  template: `
    <p>Count: {{ count$ | async }}</p>
    <button (click)="increment()">+</button>
    <button (click)="decrement()">-</button>
  `
})
export class CounterComponent {
  count$ = this.counterQuery.count$;
  
  constructor(
    private counterQuery: CounterQuery,
    private counterService: CounterService
  ) {}
  
  increment() {
    this.counterService.increment();
  }
  
  decrement() {
    this.counterService.decrement();
  }
}
```

**Преимущества**:
- Интуитивный API на основе реальных сценариев использования
- Меньше шаблонного кода
- Удобный доступ к состоянию с кэшированием
- Хорошая поддержка TypeScript

**Недостатки**:
- Меньшее сообщество
- Не такое широкое распространение, как NgRx

#### Преимущества использования методов на основе сервисов перед библиотеками управления состоянием

#### 1. Простота и малая кривая обучения

Сервисный подход использует встроенные механизмы Angular и RxJS, которые уже знакомы большинству разработчиков Angular.

```typescript
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todosSubject = new BehaviorSubject<Todo[]>([]);
  todos$ = this.todosSubject.asObservable();
  
  // Производные состояния
  completedTodos$ = this.todos$.pipe(
    map(todos => todos.filter(todo => todo.completed))
  );
  
  activeTodos$ = this.todos$.pipe(
    map(todos => todos.filter(todo => !todo.completed))
  );
  
  // Действия, изменяющие состояние
  addTodo(title: string) {
    const todos = [...this.todosSubject.value];
    todos.push({
      id: Date.now(),
      title,
      completed: false
    });
    this.todosSubject.next(todos);
  }
  
  toggleTodo(id: number) {
    const todos = this.todosSubject.value.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.todosSubject.next(todos);
  }
  
  // ...другие методы
}
```

#### 2. Минимальный шаблонный код

Сервисный подход требует значительно меньше кода по сравнению с библиотеками типа NgRx:

```typescript
// Полноценный сервис управления состоянием в ~50 строк
@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private countSubject = new BehaviorSubject<number>(0);
  count$ = this.countSubject.asObservable();
  
  get currentCount() {
    return this.countSubject.value;
  }
  
  increment() {
    this.countSubject.next(this.currentCount + 1);
  }
  
  decrement() {
    this.countSubject.next(this.currentCount - 1);
  }
  
  reset() {
    this.countSubject.next(0);
  }
  
  setCount(value: number) {
    this.countSubject.next(value);
  }
}
```

#### 3. Меньше зависимостей

Сервисный подход не требует дополнительных библиотек, что упрощает проект и уменьшает размер бандла.

#### 4. Инкрементальное принятие

Сервисы можно внедрять постепенно, рефакторить существующий код без полной перестройки архитектуры.

```typescript
// Начнем с простого сервиса
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(null);
  user$ = this.userSubject.asObservable();
  
  login(credentials) {
    // логика входа
    this.userSubject.next(user);
  }
  
  logout() {
    this.userSubject.next(null);
  }
}

// Позже можно расширить его до более сложного управления состоянием
@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  private stateSubject = new BehaviorSubject<AppState>(initialState);
  private store = this.stateSubject.asObservable().pipe(
    shareReplay(1)
  );
  
  select<T>(selector: (state: AppState) => T): Observable<T> {
    return this.store.pipe(
      map(selector),
      distinctUntilChanged()
    );
  }
  
  dispatch(action: StateAction) {
    const currentState = this.stateSubject.value;
    const newState = this.reducer(currentState, action);
    this.stateSubject.next(newState);
  }
  
  private reducer(state: AppState, action: StateAction): AppState {
    // Логика reducer
  }
}
```

#### 5. Баланс между мощностью и сложностью

Сервисный подход обеспечивает хороший баланс между функциональностью и сложностью реализации, особенно для малых и средних приложений.

#### Расширенный пример сервисного подхода к управлению состоянием

```typescript
// app-state.model.ts
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface AppState {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
  user: User | null;
  loading: boolean;
  error: string | null;
}

export const initialState: AppState = {
  todos: [],
  filter: 'all',
  user: null,
  loading: false,
  error: null
};

// state.service.ts
@Injectable({
  providedIn: 'root'
})
export class StateService {
  // Основной BehaviorSubject для хранения состояния
  private state = new BehaviorSubject<AppState>(initialState);
  
  // Селекторы - публичные Observable для компонентов
  todos$ = this.state.pipe(
    map(state => state.todos),
    distinctUntilChanged()
  );
  
  filteredTodos$ = this.state.pipe(
    map(state => {
      switch (state.filter) {
        case 'active':
          return state.todos.filter(todo => !todo.completed);
        case 'completed':
          return state.todos.filter(todo => todo.completed);
        default:
          return state.todos;
      }
    }),
    distinctUntilChanged()
  );
  
  filter$ = this.state.pipe(
    map(state => state.filter),
    distinctUntilChanged()
  );
  
  user$ = this.state.pipe(
    map(state => state.user),
    distinctUntilChanged()
  );
  
  loading$ = this.state.pipe(
    map(state => state.loading),
    distinctUntilChanged()
  );
  
  error$ = this.state.pipe(
    map(state => state.error),
    distinctUntilChanged()
  );
  
  // Методы для обновления состояния
  
  // Геттер для текущего состояния
  private get currentState(): AppState {
    return this.state.getValue();
  }
  
  // Метод для безопасного обновления состояния
  private setState(newState: Partial<AppState>) {
    this.state.next({
      ...this.currentState,
      ...newState
    });
  }
  
  // Действия для ToDo
  
  addTodo(title: string) {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false
    };
    
    this.setState({
      todos: [...this.currentState.todos, newTodo]
    });
  }
  
  toggleTodo(id: number) {
    const updatedTodos = this.currentState.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    
    this.setState({ todos: updatedTodos });
  }
  
  removeTodo(id: number) {
    const updatedTodos = this.currentState.todos.filter(todo => todo.id !== id);
    this.setState({ todos: updatedTodos });
  }
  
  updateFilter(filter: 'all' | 'active' | 'completed') {
    this.setState({ filter });
  }
  
  // Асинхронные действия с обработкой состояния загрузки и ошибок
  
  loadTodos() {
    this.setState({ loading: true, error: null });
    
    this.todosService.getTodos().pipe(
      tap(todos => {
        this.setState({ todos, loading: false });
      }),
      catchError(error => {
        this.setState({ error: error.message, loading: false });
        return EMPTY;
      })
    ).subscribe();
  }
  
  login(email: string, password: string) {
    this.setState({ loading: true, error: null });
    
    this.authService.login(email, password).pipe(
      tap(user => {
        this.setState({ user, loading: false });
      }),
      catchError(error => {
        this.setState({ error: error.message, loading: false });
        return EMPTY;
      })
    ).subscribe();
  }
  
  logout() {
    this.setState({ user: null });
  }
  
  constructor(
    private todosService: TodosService,
    private authService: AuthService
  ) {}
}
```

#### Использование сервиса в компоненте

```typescript
@Component({
  selector: 'app-todo-list',
  template: `
    <div *ngIf="loading$ | async">Loading...</div>
    <div *ngIf="error$ | async as error" class="error">{{ error }}</div>
    
    <div class="filters">
      <button (click)="updateFilter('all')" [class.active]="(filter$ | async) === 'all'">All</button>
      <button (click)="updateFilter('active')" [class.active]="(filter$ | async) === 'active'">Active</button>
      <button (click)="updateFilter('completed')" [class.active]="(filter$ | async) === 'completed'">Completed</button>
    </div>
    
    <div *ngFor="let todo of filteredTodos$ | async">
      <input type="checkbox" [checked]="todo.completed" (change)="toggleTodo(todo.id)">
      <span [class.completed]="todo.completed">{{ todo.title }}</span>
      <button (click)="removeTodo(todo.id)">X</button>
    </div>
    
    <div>
      <input #newTodo placeholder="Add new todo">
      <button (click)="addTodo(newTodo.value); newTodo.value = ''">Add</button>
    </div>
  `
})
export class TodoListComponent implements OnInit {
  filteredTodos$ = this.stateService.filteredTodos$;
  filter$ = this.stateService.filter$;
  loading$ = this.stateService.loading$;
  error$ = this.stateService.error$;
  
  constructor(private stateService: StateService) {}
  
  ngOnInit() {
    this.stateService.loadTodos();
  }
  
  addTodo(title: string) {
    if (title.trim()) {
      this.stateService.addTodo(title);
    }
  }
  
  toggleTodo(id: number) {
    this.stateService.toggleTodo(id);
  }
  
  removeTodo(id: number) {
    this.stateService.removeTodo(id);
  }
  
  updateFilter(filter: 'all' | 'active' | 'completed') {
    this.stateService.updateFilter(filter);
  }
}
```

#### Когда выбирать библиотеки управления состоянием (NgRx, NGXS, Akita)

Несмотря на преимущества сервисного подхода, есть случаи, когда библиотеки управления состоянием предпочтительнее:

1. **Крупные Enterprise-приложения**:
   - Множество команд работает над одним приложением
   - Сложные потоки данных и взаимозависимые состояния
   - Высокая сложность бизнес-логики

2. **Требуется строгий контроль над изменениями состояния**:
   - Потребность в точной отладке изменений состояния
   - Необходимость отмены/повтора действий
   - Важная требование аудита всех изменений

3. **Сложные взаимодействия с эффектами**:
   - Множество асинхронных операций
   - Сложная логика отмены/повтора запросов
   - Операции, зависящие от состояния других частей приложения

4. **Требуется Time-Travel Debugging**:
   - Возможность перемещаться между состояниями для поиска ошибок
   - Сохранение и воспроизведение последовательностей действий

#### Гибридный подход к управлению состоянием

Во многих проектах оптимальным решением является гибридный подход:

1. **Локальное состояние для изолированных компонентов**
2. **Сервисы для состояния домена среднего размера**
3. **Библиотеки управления состоянием для критических глобальных данных**

```typescript
// Локальное состояние
@Component({
  selector: 'app-toggle',
  template: `<button (click)="toggle()">{{ isOpen ? 'Close' : 'Open' }}</button>`
})
export class ToggleComponent {
  isOpen = false;
  
  toggle() {
    this.isOpen = !this.isOpen;
  }
}

// Сервис для предметной области
@Injectable({
  providedIn: 'root'
})
export class UserPreferencesService {
  private preferencesSubject = new BehaviorSubject<UserPreferences>(defaultPreferences);
  preferences$ = this.preferencesSubject.asObservable();
  
  updateTheme(theme: string) {
    const current = this.preferencesSubject.value;
    this.preferencesSubject.next({ ...current, theme });
  }
  
  // ...другие методы
}

// NgRx для критического глобального состояния
// app.effects.ts
@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
  
  login$ = createEffect(() => 
    this.actions$.pipe(
      ofType(AuthActions.login),
      exhaustMap(action => 
        this.authService.login(action.credentials).pipe(
          map(user => AuthActions.loginSuccess({ user })),
          catchError(error => of(AuthActions.loginFailure({ error: error.message })))
        )
      )
    )
  );
  
  loginSuccess$ = createEffect(() => 
    this.actions$.pipe(
      ofType(AuthActions.loginSuccess),
      tap(({ user }) => {
        localStorage.setItem('token', user.token);
        this.router.navigateByUrl('/dashboard');
      })
    ),
    { dispatch: false }
  );
  
  // ...другие эффекты
}
```

#### Создание масштабируемого сервисного подхода

Для средних и крупных приложений можно реализовать более структурированный сервисный подход, который включает многие преимущества библиотек управления состоянием:

```typescript
// base-state.service.ts
export abstract class BaseStateService<T> {
  protected stateSubject: BehaviorSubject<T>;
  protected state$: Observable<T>;
  
  protected get state(): T {
    return this.stateSubject.getValue();
  }
  
  protected setState(newState: Partial<T>): void {
    this.stateSubject.next({
      ...this.state,
      ...newState
    });
  }
  
  select<K>(selector: (state: T) => K): Observable<K> {
    return this.state$.pipe(
      map(selector),
      distinctUntilChanged()
    );
  }
  
  constructor(initialState: T) {
    this.stateSubject = new BehaviorSubject<T>(initialState);
    this.state$ = this.stateSubject.asObservable();
  }
}

// users.state.ts
export interface UsersState {
  users: User[];
  selectedUserId: number | null;
  loading: boolean;
  error: string | null;
}

export const initialUsersState: UsersState = {
  users: [],
  selectedUserId: null,
  loading: false,
  error: null
};

// users.service.ts
@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseStateService<UsersState> {
  // Селекторы
  users$ = this.select(state => state.users);
  selectedUser$ = this.select(state => {
    const { users, selectedUserId } = state;
    return selectedUserId !== null
      ? users.find(user => user.id === selectedUserId) || null
      : null;
  });
  loading$ = this.select(state => state.loading);
  error$ = this.select(state => state.error);
  
  // Действия
  loadUsers() {
    this.setState({ loading: true, error: null });
    
    this.api.getUsers().pipe(
      tap(users => {
        this.setState({ users, loading: false });
      }),
      catchError(error => {
        this.setState({ error: error.message, loading: false });
        return EMPTY;
      })
    ).subscribe();
  }
  
  selectUser(id: number) {
    this.setState({ selectedUserId: id });
  }
  
  addUser(user: Partial<User>) {
    this.setState({ loading: true });
    
    this.api.createUser(user).pipe(
      tap(newUser => {
        this.setState({
          users: [...this.state.users, newUser],
          loading: false
        });
      }),
      catchError(error => {
        this.setState({ error: error.message, loading: false });
        return EMPTY;
      })
    ).subscribe();
  }
  
  // ... другие методы
  
  constructor(private api: ApiService) {
    super(initialUsersState);
  }
}
```

#### Заключение

Выбор подхода к управлению состоянием зависит от множества факторов:

1. **Размер и сложность приложения** — чем больше и сложнее приложение, тем больше преимуществ у библиотек типа NgRx
2. **Опыт команды** — если команда уже знакома с определенным подходом, это может быть решающим фактором
3. **Требования к отладке** — если требуется детальная отладка состояния, лучше выбрать NgRx или аналоги
4. **Временные ограничения** — сервисный подход быстрее внедрить в небольших и средних проектах
5. **Компромисс между функциональностью и сложностью** — стремитесь к наименьшей сложности, которая удовлетворяет требованиям
В итоге, оба подхода — сервисный и на основе библиотек — имеют свои преимущества и недостатки. Вдумчивый выбор и, возможно, гибридный подход часто дают наилучший результат.

### 10. How do you handle error handling and retry logic with RxJS?

Обработка ошибок и логика повторных попыток являются важными аспектами работы с асинхронными операциями в Angular. RxJS предоставляет мощные механизмы для эффективного решения этих задач.

#### Основные операторы для обработки ошибок

#### 1. catchError — перехват и обработка ошибок

Оператор `catchError` позволяет перехватить ошибку в потоке и заменить ее другим Observable.

```typescript
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Базовый пример
this.http.get<User[]>('/api/users').pipe(
  catchError(error => {
    console.error('Error loading users:', error);
    return of([]); // Возвращаем пустой массив в случае ошибки
  })
).subscribe(users => {
  this.users = users;
});
```

#### 2. throwError — создание Observable с ошибкой

```typescript
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

this.http.get<User>('/api/users/1').pipe(
  catchError(error => {
    if (error.status === 404) {
      return throwError(() => new Error('User not found'));
    }
    return throwError(() => new Error('Server error'));
  })
).subscribe({
  next: user => this.user = user,
  error: err => this.errorMessage = err.message
});
```

#### 3. finalize — выполнение кода независимо от успеха или ошибки

```typescript
import { finalize } from 'rxjs/operators';

this.loading = true;

this.http.get<User[]>('/api/users').pipe(
  finalize(() => {
    // Выполняется независимо от результата
    this.loading = false;
  })
).subscribe({
  next: users => this.users = users,
  error: err => this.errorMessage = err.message
});
```

#### Операторы для повторных попыток

#### 1. retry — простой повтор при ошибке

```typescript
import { retry } from 'rxjs/operators';

// Повторить запрос до 3 раз в случае ошибки
this.http.get<Data[]>('/api/data').pipe(
  retry(3),
  catchError(error => {
    console.error('Failed after 3 attempts:', error);
    return of([]);
  })
).subscribe(data => {
  this.data = data;
});
```

#### 2. retryWhen — продвинутый контроль повторных попыток

```typescript
import { timer } from 'rxjs';
import { retryWhen, delayWhen, scan, tap } from 'rxjs/operators';

this.http.get<Data[]>('/api/data').pipe(
  retryWhen(errors => 
    errors.pipe(
      // Подсчитываем количество попыток
      scan((attempts, error) => {
        attempts++;
        if (attempts > 3) {
          throw error; // После 3 попыток пробрасываем ошибку дальше
        }
        return attempts;
      }, 0),
      // Логируем попытки
      tap(attempts => console.log(`Attempt ${attempts}`)),
      // Увеличиваем задержку с каждой попыткой (exponential backoff)
      delayWhen(attempts => timer(attempts * 1000))
    )
  ),
  catchError(error => {
    console.error('Failed after retries:', error);
    return of([]);
  })
).subscribe(data => {
  this.data = data;
});
```

#### Комплексные стратегии обработки ошибок

#### 1. Комбинация catchError и retry для HTTP-запросов

```typescript
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users').pipe(
      retry(2),
      catchError(error => {
        if (error.status === 0) {
          // Ошибка сети
          return throwError(() => new Error('Network error. Please check your connection.'));
        } else if (error.status === 401) {
          // Неавторизован
          this.authService.redirectToLogin();
          return throwError(() => new Error('You must be logged in to access this resource.'));
        } else if (error.status >= 500) {
          // Серверная ошибка
          this.logService.logError(error);
          return throwError(() => new Error('Server error. Please try again later.'));
        } else {
          // Другие ошибки
          return throwError(() => new Error(error.message || 'Unknown error'));
        }
      })
    );
  }
  
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private logService: LogService
  ) {}
}
```

#### 2. Стратегия экспоненциальной задержки с ограничением попыток

```typescript
import { Observable, throwError, timer } from 'rxjs';
import { mergeMap, retryWhen, scan } from 'rxjs/operators';

/**
 * Стратегия повторных попыток с экспоненциальной задержкой
 * @param maxRetries Максимальное количество попыток
 * @param initialDelay Начальная задержка (мс)
 * @param backoffFactor Коэффициент увеличения задержки
 * @param maxDelay Максимальная задержка (мс)
 */
export function retryWithBackoff<T>(
  maxRetries = 3,
  initialDelay = 300,
  backoffFactor = 2,
  maxDelay = 30000
): (src: Observable<T>) => Observable<T> {
  return (source: Observable<T>) => 
    source.pipe(
      retryWhen(errors => 
        errors.pipe(
          scan((attempts, error) => {
            attempts++;
            if (attempts > maxRetries) {
              throw error;
            }
            return attempts;
          }, 0),
          mergeMap(attempts => {
            const delay = Math.min(
              initialDelay * Math.pow(backoffFactor, attempts - 1),
              maxDelay
            );
            console.log(`Retry attempt ${attempts} after ${delay}ms`);
            return timer(delay);
          })
        )
      )
    );
}

// Использование
this.http.get<Data[]>('/api/data').pipe(
  retryWithBackoff(3, 500, 2, 10000),
  catchError(error => {
    console.error('Failed after all retries:', error);
    return of([]);
  })
).subscribe(data => {
  this.data = data;
});
```

#### 3. Фильтрация ошибок для повторных попыток

Не все ошибки следует повторять. Например, ошибки 404 или 400 обычно не исправятся при повторении.

```typescript
import { timer, Observable, throwError } from 'rxjs';
import { retryWhen, mergeMap, tap } from 'rxjs/operators';

/**
 * Повторяет операцию только для определенных типов ошибок
 */
export function retryForSpecificErrors<T>(
  maxRetries = 3,
  delayMs = 1000,
  retryableStatusCodes = [0, 408, 429, 500, 502, 503, 504]
): (src: Observable<T>) => Observable<T> {
  let retries = 0;
  
  return (source: Observable<T>) => 
    source.pipe(
      retryWhen(errors => 
        errors.pipe(
          mergeMap(error => {
            // Для HTTP-ошибок проверяем статус
            const status = error.status;
            
            if (retries >= maxRetries) {
              return throwError(() => error);
            }
            
            // Если ошибка подходит для повтора
            if (retryableStatusCodes.includes(status)) {
              retries++;
              console.log(`Retrying after error: ${status}, attempt ${retries}`);
              return timer(delayMs);
            }
            
            // Для ошибок, которые не следует повторять
            return throwError(() => error);
          })
        )
      )
    );
}

// Использование
this.http.get<User>('/api/users/1').pipe(
  retryForSpecificErrors(),
  catchError(error => {
    if (error.status === 404) {
      return throwError(() => new Error('User not found'));
    }
    return throwError(() => new Error('Failed to load user'));
  })
).subscribe({
  next: user => this.user = user,
  error: err => this.errorMessage = err.message
});
```

#### Обработка ошибок на разных уровнях

#### 1. Глобальный HTTP-перехватчик для обработки общих ошибок

```typescript
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private toastService: ToastService) {}
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // Общая обработка HTTP-ошибок
        if (error.status === 0) {
          this.toastService.show('Network error', 'error');
        } else if (error.status === 401) {
          this.toastService.show('Please log in to continue', 'error');
        } else if (error.status === 403) {
          this.toastService.show('You do not have permission to access this resource', 'error');
        } else if (error.status >= 500) {
          this.toastService.show('Server error, please try again later', 'error');
        }
        
        // Пробрасываем ошибку дальше
        return throwError(() => error);
      })
    );
  }
}

// Регистрация в провайдерах
@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ]
})
export class AppModule { }
```

#### 2. Обработка ошибок на уровне сервиса

```typescript
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed:`, error);
      
      // Можно отправить ошибку в сервис аналитики
      this.analyticsService.logError(error);
      
      // Преобразуем ошибку в удобный для пользователя формат
      let userMessage: string;
      
      if (error instanceof HttpErrorResponse) {
        // Обработка HTTP-ошибок
        if (error.error instanceof ErrorEvent) {
          userMessage = `Client error: ${error.error.message}`;
        } else {
          // Серверная ошибка
          userMessage = `Server error: ${error.status} ${error.statusText}`;
          
          // Используем сообщение от сервера, если оно есть
          if (error.error && error.error.message) {
            userMessage = error.error.message;
          }
        }
      } else {
        userMessage = error.message || String(error);
      }
      
      // Показать уведомление пользователю
      this.notificationService.error(userMessage);
      
      // Возвращаем безопасное значение или перебрасываем ошибку
      return result !== undefined ? of(result as T) : throwError(() => new Error(userMessage));
    };
  }
  
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>('/api/items').pipe(
      retry(2),
      catchError(this.handleError<Item[]>('getItems', []))
    );
  }
  
  getItemById(id: number): Observable<Item> {
    return this.http.get<Item>(`/api/items/${id}`).pipe(
      catchError(this.handleError<Item>('getItemById'))
    );
  }
  
  constructor(
    private http: HttpClient,
    private notificationService: NotificationService,
    private analyticsService: AnalyticsService
  ) {}
}
```

#### 3. Обработка ошибок на уровне компонента

```typescript
@Component({
  selector: 'app-item-list',
  template: `
    <div *ngIf="loading" class="loading-spinner">Loading...</div>
    <div *ngIf="error" class="error-message">{{ error }}</div>
    
    <div *ngIf="!loading && !error">
      <div *ngIf="items.length === 0">No items found</div>
      <ul *ngIf="items.length > 0">
        <li *ngFor="let item of items">{{ item.name }}</li>
      </ul>
    </div>
    
    <button (click)="loadItems()">Reload</button>
  `
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];
  loading = false;
  error: string | null = null;
  
  constructor(private dataService: DataService) {}
  
  ngOnInit() {
    this.loadItems();
  }
  
  loadItems() {
    this.loading = true;
    this.error = null;
    
    this.dataService.getItems().pipe(
      finalize(() => this.loading = false)
    ).subscribe({
      next: (items) => {
        this.items = items;
      },
      error: (err) => {
        this.error = err.message || 'Failed to load items';
        this.items = [];
      }
    });
  }
}
```

#### Продвинутые техники обработки ошибок и повторных попыток

#### 1. Создание сервиса для управления повторными попытками

```typescript
@Injectable({
  providedIn: 'root'
})
export class RetryService {
  /**
   * Общий метод для повторных попыток с настройками
   */
  genericRetry<T>(options: {
    maxRetries?: number;
    scalingDuration?: number;
    excludedStatusCodes?: number[];
  } = {}): MonoTypeOperatorFunction<T> {
    const {
      maxRetries = 3,
      scalingDuration = 1000,
      excludedStatusCodes = [400, 401, 403, 404]
    } = options;
    
    return (source: Observable<T>) => source.pipe(
      retryWhen(attempts => {
        return attempts.pipe(
          mergeMap((error, i) => {
            const retryAttempt = i + 1;
            
            // Если это HttpErrorResponse, проверяем статус
            if (error instanceof HttpErrorResponse && 
                excludedStatusCodes.includes(error.status)) {
              return throwError(() => error);
            }
            
            // Превышено максимальное количество попыток
            if (retryAttempt > maxRetries) {
              return throwError(() => error);
            }
            
            // Экспоненциальная задержка
            const delay = retryAttempt * scalingDuration;
            console.log(`Retry attempt ${retryAttempt} after ${delay}ms`);
            
            return timer(delay);
          })
        );
      })
    );
  }
  
  /**
   * Повторные попытки для HTTP-запросов
   */
  httpRetry<T>(options?: {
    maxRetries?: number;
    delayMs?: number;
    excludedStatusCodes?: number[];
  }): MonoTypeOperatorFunction<T> {
    return this.genericRetry<T>(options);
  }
  
  /**
   * Повторные попытки для WebSocket
   */
  wsRetry<T>(
    maxRetries: number = 5,
    delayMs: number = 2000
  ): MonoTypeOperatorFunction<T> {
    return this.genericRetry<T>({
      maxRetries,
      scalingDuration: delayMs,
      excludedStatusCodes: [] // Все ошибки WebSocket повторяем
    });
  }
}

// Использование
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users').pipe(
      this.retryService.httpRetry(),
      catchError(this.errorHandler.handleHttpError('getUsers', []))
    );
  }
  
  constructor(
    private http: HttpClient,
    private retryService: RetryService,
    private errorHandler: ErrorHandlerService
  ) {}
}
```

#### 2. Централизованный сервис обработки ошибок

```typescript
@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  /**
   * Обрабатывает HTTP-ошибки и преобразует их в удобные сообщения
   */
  handleHttpError<T>(operation = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      let userMessage: string;
      
      // Логирование ошибки
      console.error(`${operation} failed:`, error);
      
      // Определяем сообщение на основе типа ошибки
      if (error.status === 0) {
        userMessage = 'Unable to connect to the server';
        this.logService.logNetworkError(error);
      } else if (error.status === 401) {
        userMessage = 'You need to log in to access this resource';
        this.authService.handleUnauthorized();
      } else if (error.status === 403) {
        userMessage = 'You do not have permission to access this resource';
      } else if (error.status === 404) {
        userMessage = 'The requested resource was not found';
      } else if (error.status >= 500) {
        userMessage = 'A server error occurred. Please try again later.';
        this.logService.logServerError(error);
      } else {
        userMessage = error.error?.message || 'An error occurred';
      }
      
      // Показать уведомление пользователю
      this.notificationService.error(userMessage);
      
      // Отправить ошибку в аналитику
      this.analyticsService.logError({
        operation,
        status: error.status,
        message: error.message,
        url: error.url || 'unknown'
      });
      
      // Возвращаем резервное значение или перебрасываем ошибку
      return result !== undefined ? of(result as T) : throwError(() => new Error(userMessage));
    };
  }
  
  /**
   * Обрабатывает общие JS ошибки
   */
  handleError(error: any, context: string = 'operation'): Observable<never> {
    console.error(`Error in ${context}:`, error);
    
    const message = error.message || 'An unexpected error occurred';
    this.notificationService.error(message);
    
    return throwError(() => new Error(message));
  }
  
  constructor(
    private notificationService: NotificationService,
    private authService: AuthService,
    private logService: LogService,
    private analyticsService: AnalyticsService
  ) {}
}
```

#### 3. Обработка ошибок с учетом состояния сети

```typescript
@Injectable({
  providedIn: 'root'
})
export class NetworkAwareRetryService {
  private online$ = merge(
    of(navigator.onLine),
    fromEvent(window, 'online').pipe(map(() => true)),
    fromEvent(window, 'offline').pipe(map(() => false))
  ).pipe(
    shareReplay(1)
  );
  
  /**
   * Повторяет операцию с учетом состояния сети
   */
  retryWithNetworkCheck<T>(
    maxRetries = 3,
    initialDelayMs = 1000
  ): MonoTypeOperatorFunction<T> {
    return (source: Observable<T>) => source.pipe(
      retryWhen(errors => 
        errors.pipe(
          scan((attempts, error) => {
            return { count: attempts.count + 1, error };
          }, { count: 0, error: null as any }),
          mergeMap(attempts => {
            // Превышено макс. число попыток
            if (attempts.count > maxRetries) {
              return throwError(() => attempts.error);
            }
            
            // Для сетевых ошибок ждем восстановления соединения
            if (attempts.error instanceof HttpErrorResponse && attempts.error.status === 0) {
              console.log('Network error detected, waiting for reconnection...');
              
              return this.online$.pipe(
                filter(isOnline => isOnline), // Продолжить только когда сеть появится
                take(1),
                tap(() => console.log('Network connection restored, retrying...'))
              );
            }
            
            // Для других ошибок используем обычную задержку
            const delay = initialDelayMs * Math.pow(2, attempts.count - 1);
            console.log(`Retrying in ${delay}ms (attempt ${attempts.count})`);
            
            return timer(delay);
          })
        )
      )
    );
  }
  
  constructor() {}
}
```

#### 4. Кэширование и резервное значение при ошибках

```typescript
@Injectable({
  providedIn: 'root'
})
export class CachingDataService {
  private cache = new Map<string, any>();
  
  /**
   * Получает данные с кэшированием и резервным значением при ошибке
   */
  getCachedData<T>(
    key: string,
    fetcher: () => Observable<T>,
    fallbackStrategy: 'cache' | 'empty' | 'error' = 'cache',
    fallbackValue?: T
  ): Observable<T> {
    // Проверяем, есть ли данные в кэше
    if (this.cache.has(key)) {
      console.log(`Using cached data for ${key}`);
      return of(this.cache.get(key));
    }
    
    // Получаем свежие данные
    return fetcher().pipe(
      tap(data => {
        // Сохраняем результат в кэш
        this.cache.set(key, data);
        
        // Также сохраняем в localStorage для долгосрочного хранения
        try {
          localStorage.setItem(`cache_${key}`, JSON.stringify(data));
        } catch (e) {
          console.warn('Failed to save to localStorage:', e);
        }
      }),
      catchError(error => {
        console.error(`Error fetching ${key}:`, error);
        
        // Стратегия обработки ошибок
        if (fallbackStrategy === 'cache') {
          // Проверяем, есть ли данные в localStorage
          try {
            const savedData = localStorage.getItem(`cache_${key}`);
            if (savedData) {
              const data = JSON.parse(savedData);
              this.cache.set(key, data);
              console.log(`Using localStorage data for ${key}`);
              return of(data);
            }
          } catch (e) {
            console.warn('Failed to retrieve from localStorage:', e);
          }
        }
        
        // Используем явно переданное значение
        if (fallbackValue !== undefined) {
          return of(fallbackValue);
        }
        
        // Стратегия 'empty' возвращает пустое значение по умолчанию
        if (fallbackStrategy === 'empty') {
          const emptyValue = this.getEmptyValue<T>();
          return of(emptyValue);
        }
        
        // Стратегия 'error' пробрасывает ошибку дальше
        return throwError(() => error);
      })
    );
  }
  
  /**
   * Создает пустое значение по умолчанию для разных типов
   */
  private getEmptyValue<T>(): T {
    // Это очень примитивная реализация. В реальном приложении нужен более надежный подход.
    return [] as unknown as T;
  }
  
  /**
   * Очищает кэш
   */
  clearCache(key?: string): void {
    if (key) {
      this.cache.delete(key);
      localStorage.removeItem(`cache_${key}`);
    } else {
      this.cache.clear();
      
      // Очищаем только элементы с префиксом cache_
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('cache_')) {
          localStorage.removeItem(key);
        }
      }
    }
  }
}

// Использование
@Component({
  selector: 'app-products',
  template: `
    <div *ngIf="products$ | async as products">
      <div *ngIf="products.length === 0">No products found</div>
      <div *ngFor="let product of products">{{ product.name }}</div>
    </div>
  `
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;
  
  constructor(
    private productService: ProductService,
    private cachingService: CachingDataService
  ) {}
  
  ngOnInit() {
    this.products$ = this.cachingService.getCachedData(
      'products',
      () => this.productService.getProducts().pipe(
        retry(2)
      ),
      'cache',
      []
    );
  }
}
```

#### Комплексный пример полной стратегии обработки ошибок в приложении

```typescript
// app.module.ts
@NgModule({
  providers: [
    // Глобальный перехватчик ошибок HTTP
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    // Глобальный обработчик ошибок Angular
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ]
})
export class AppModule { }

// global-error-handler.ts
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private zone: NgZone,
    private notificationService: NotificationService,
    private errorLogService: ErrorLogService
  ) {}

  handleError(error: any): void {
    // Выполняем в зоне Angular для корректной работы UI
    this.zone.run(() => {
      console.error('Unhandled error:', error);
      
      // Отправляем ошибку в сервис логирования
      this.errorLogService.logError(error).subscribe();
      
      // Показываем уведомление только на клиенте (избегаем SSR проблем)
      if (isPlatformBrowser(this.platformId)) {
        this.notificationService.error('An unexpected error occurred');
      }
    });
  }
}

// error.interceptor.ts
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private authService: AuthService,
    private notificationService: NotificationService,
    private retryService: RetryService
  ) {}
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Пропускаем запросы к сервису логирования ошибок
    if (request.url.includes('/api/error-logs')) {
      return next.handle(request);
    }
    
    return next.handle(request).pipe(
      // Применяем стратегию повторных попыток для определенных запросов
      this.getRetryStrategy(request),
      
      catchError((error: HttpErrorResponse) => {
        // Обрабатываем особые HTTP-статусы
        if (error.status === 401) {
          // Неавторизованный запрос
          this.authService.clearCredentials();
          this.router.navigate(['/login'], {
            queryParams: { returnUrl: this.router.url }
          });
          this.notificationService.warning('Session expired. Please log in again.');
        } else if (error.status === 403) {
          // Запрещенный запрос
          this.router.navigate(['/forbidden']);
          this.notificationService.error('You do not have permission to access this resource');
        } else if (error.status === 404) {
          // Ресурс не найден
          if (!request.url.includes('/api/check/')) { // Игнорируем проверочные запросы
            this.notificationService.error('The requested resource was not found');
          }
        } else if (error.status === 429) {
          // Слишком много запросов
          this.notificationService.warning('Too many requests. Please try again later.');
        } else if (error.status >= 500) {
          // Серверная ошибка
          this.notificationService.error('A server error occurred. Our team has been notified.');
        } else if (error.status === 0) {
          // Проблема с сетью
          this.notificationService.error('Network error. Please check your connection.');
        }
        
        return throwError(() => error);
      })
    );
  }
  
  /**
   * Выбирает стратегию повторных попыток в зависимости от типа запроса
   */
  private getRetryStrategy(request: HttpRequest<any>): MonoTypeOperatorFunction<HttpEvent<any>> {
    // GET запросы повторяем, POST/PUT/DELETE обычно нет
    if (request.method === 'GET') {
      // Для важных данных используем более агрессивную стратегию
      if (request.url.includes('/api/critical-data')) {
        return this.retryService.httpRetry({
          maxRetries: 5,
          delayMs: 1000
        });
      }
      
      // Для обычных GET запросов используем стандартную стратегию
      return this.retryService.httpRetry();
    }
    
    // Для остальных запросов не делаем повторных попыток
    return source => source;
  }
}

// retry.service.ts (сокращенная версия)
@Injectable({
  providedIn: 'root'
})
export class RetryService {
  httpRetry<T>(options: RetryOptions = {}): MonoTypeOperatorFunction<T> {
    // Реализация из предыдущих примеров
    // ...
  }
}

// Base data service
@Injectable()
export abstract class BaseDataService {
  protected handleError<T>(operation = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      // Базовая реализация обработки ошибок
      console.error(`${operation} failed:`, error);
      
      // Если передано запасное значение, возвращаем его
      if (result !== undefined) {
        return of(result as T);
      }
      
      // Иначе пробрасываем ошибку дальше
      return throwError(() => error);
    };
  }
  
  constructor(protected http: HttpClient) {}
}

// Specific data service
@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseDataService {
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users').pipe(
      catchError(this.handleError<User[]>('getUsers', []))
    );
  }
  
  getUser(id: number): Observable<User> {
    return this.http.get<User>(`/api/users/${id}`).pipe(
      catchError(this.handleError<User>('getUser'))
    );
  }
  
  createUser(user: User): Observable<User> {
    return this.http.post<User>('/api/users', user).pipe(
      catchError(this.handleError<User>('createUser'))
    );
  }
  
  constructor(protected override http: HttpClient) {
    super(http);
  }
}
```

#### Практические советы по обработке ошибок и повторным попыткам

1. **Классифицируйте ошибки** на разные типы и обрабатывайте их соответственно:
   - Ошибки сети (статус 0)
   - Ошибки аутентификации (401, 403)
   - Ошибки клиента (400, 404)
   - Ошибки сервера (500+)
   - Ошибки JavaScript

2. **Используйте многоуровневую стратегию обработки ошибок**:
   - Глобальные обработчики для неперехваченных ошибок
   - HTTP-перехватчики для единообразной обработки HTTP-ошибок
   - Обработка на уровне сервисов для логики предметной области
   - Обработка на уровне компонентов для специфичного пользовательского интерфейса

3. **Повторяйте только подходящие операции**:
   - GET-запросы обычно можно повторить безопасно
   - POST/PUT/DELETE могут иметь побочные эффекты, повторение не всегда безопасно
   - Не повторяйте запросы при ошибках 4xx (кроме 408, 429)
   - Используйте разные стратегии для разных типов ошибок

4. **Предоставляйте пользователям понятные сообщения**:
   - Не показывайте технические детали ошибок
   - Объясняйте, что пошло не так и что делать дальше
   - Предлагайте действия, которые могут решить проблему

5. **Логируйте ошибки** для отслеживания и анализа:
   - Отправляйте ошибки на сервер для анализа
   - Включайте контекст и метаданные (URL, пользователь, время)
   - Фильтруйте часто повторяющиеся ошибки

6. **Комбинируйте обработку ошибок с кэшированием**:
   - Используйте кэшированные данные при ошибках сети
   - Реализуйте стратегию "stale-while-revalidate"
   - Сохраняйте резервные копии важных данных

7. **Тестируйте обработку ошибок**:
   - Пишите тесты для различных сценариев ошибок
   - Моделируйте сетевые ошибки и ошибки сервера
   - Проверяйте, как приложение реагирует на неожиданные ошибки

#### Заключение

Эффективная обработка ошибок и стратегии повторных попыток играют важную роль в создании надежных Angular-приложений. RxJS предоставляет широкий спектр операторов и техник для управления ошибками и повторного выполнения операций, что позволяет создавать отказоустойчивые приложения с хорошим пользовательским опытом даже в случае возникновения проблем.

Комбинируя различные техники и подходы, можно создать комплексную стратегию, которая:
- Минимизирует влияние временных ошибок
- Предоставляет полезную обратную связь пользователям
- Собирает данные для анализа и улучшения приложения
- Обеспечивает корректную работу приложения в разных сетевых условиях

Такой многоуровневый подход к обработке ошибок является ключом к созданию надежных и устойчивых Angular-приложений.
