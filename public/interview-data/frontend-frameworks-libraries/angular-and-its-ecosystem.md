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

Выбор метода зависит от конкретного сценария, с#ложности приложения и отношений между компонентами.

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

## RxJS in Angular

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

## Dependency Injection in Angular

### 1. What is `Dependency Injection`, and what are its objectives in Angular?

Dependency Injection (DI) — это паттерн проектирования и механизм, который позволяет классам получать свои зависимости извне, а не создавать их самостоятельно. В Angular DI реализована как встроенная система, которая выполняет следующие цели:

- **Повышение модульности** — компоненты делегируют создание зависимостей инжектору, что уменьшает связанность кода
- **Улучшение тестируемости** — зависимости можно легко заменить моками при тестировании
- **Управление жизненным циклом объектов** — система DI контролирует создание и уничтожение экземпляров сервисов
- **Повторное использование служб** — один экземпляр сервиса может совместно использоваться несколькими компонентами
- **Повышение гибкости приложения** — реализации сервисов можно заменять без изменения использующих их компонентов

### 2. How do you create a service and use it in components for dependency injection?

**Создание сервиса:**

```typescript
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private data: string[] = [];

  addData(item: string): void {
    this.data.push(item);
  }

  getData(): string[] {
    return this.data;
  }
}
```

**Использование сервиса в компоненте:**

```typescript
import { Component, OnInit } from "@angular/core";
import { DataService } from "./data.service";

@Component({
  selector: "app-example",
  template: `
    <div>
      <input #dataInput />
      <button (click)="addData(dataInput.value)">Add</button>
      <ul>
        <li *ngFor="let item of items">{{ item }}</li>
      </ul>
    </div>
  `,
})
export class ExampleComponent implements OnInit {
  items: string[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.items = this.dataService.getData();
  }

  addData(data: string): void {
    this.dataService.addData(data);
    this.items = this.dataService.getData();
  }
}
```

### 3. What is the difference between providedIn: 'root', providedIn: 'any', and registering a provider in the "providers" section of NgModule?

**providedIn: 'root'**:

- Создается единственный экземпляр сервиса на уровне всего приложения
- Доступен для всех компонентов и сервисов приложения
- Оптимизируется механизмом tree-shaking (сервис включается в бандл только если используется)
- Идеален для создания синглтон-сервисов

**providedIn: 'any'**:

- Создает по одному экземпляру для каждого модуля, использующего сервис
- Особенно полезен для lazy-loaded модулей, которым нужны собственные экземпляры сервисов
- Экземпляры сервиса изолированы между модулями, но общие в пределах одного модуля
- Позволяет иметь разные состояния сервиса в разных частях приложения

**Регистрация в providers NgModule**:

- Создает экземпляр сервиса на уровне модуля
- Все компоненты/директивы внутри модуля используют один и тот же экземпляр
- Не оптимизируется tree-shaking (включается в бандл вместе с модулем)
- Предоставляет гибкость в определении области видимости сервиса
- Полезно, когда сервис должен быть доступен только внутри определенного модуля

### 4. What are `useClass`, `useValue`, and `useFactory`? How are they used when creating providers?

В Angular провайдеры определяют, как создавать и внедрять зависимости. Существуют различные способы конфигурации провайдеров:

**useClass**:

```typescript
{ provide: Logger, useClass: ProductionLogger }
```

- Создает экземпляр указанного класса при запросе токена
- Используется, когда нужно заменить реализацию сервиса альтернативной
- Полезно для подмены сервисов в разных окружениях (разработка/продакшн)

**useValue**:

```typescript
{ provide: API_URL, useValue: 'https://api.example.com' }
```

- Предоставляет готовое значение вместо создания экземпляра
- Идеально для внедрения конфигурационных значений, констант
- Используется для внедрения моков в тестах
- Может использоваться для любого типа значений (объекты, строки, числа)

**useFactory**:

```typescript
{
  provide: AuthService,
  useFactory: (http: HttpClient, config: AppConfig) => {
    if (config.authType === 'jwt') {
      return new JwtAuthService(http, config);
    } else {
      return new BasicAuthService(http, config);
    }
  },
  deps: [HttpClient, AppConfig]
}
```

- Использует фабричную функцию для создания экземпляра
- Позволяет создавать зависимости динамически, на основе условий
- Может зависеть от других сервисов через массив deps
- Наиболее гибкий способ создания зависимостей

### 5. Explain the concept of Injector and provider hierarchy.

**Injector (Инжектор)** в Angular — это механизм, который ответственен за:

- Создание экземпляров сервисов
- Хранение созданных экземпляров
- Внедрение этих экземпляров в компоненты/другие сервисы

**Иерархия инжекторов**:
Angular создает иерархию инжекторов, которая обычно соответствует иерархии компонентов DOM:

1. **Root Injector (корневой инжектор)**:

   - Создается при загрузке приложения
   - Содержит сервисы с `providedIn: 'root'`
   - Доступен для всего приложения

2. **Module Injectors (инжекторы модулей)**:

   - Создаются для каждого NgModule
   - Наследуют от корневого инжектора
   - Содержат сервисы, определенные в providers модуля

3. **Component Injectors (инжекторы компонентов)**:
   - Создаются для компонентов с providers в декораторе @Component
   - Образуют иерархию, соответствующую дереву компонентов
   - Могут переопределять провайдеры из родительских инжекторов

**Процесс разрешения зависимостей**:

1. Когда компонент запрашивает зависимость, Angular сначала проверяет инжектор этого компонента
2. Если зависимость не найдена, запрос перенаправляется к инжектору родительского компонента
3. Поиск продолжается вверх по дереву инжекторов до корневого
4. Если зависимость не найдена нигде, генерируется ошибка (если не указано @Optional)

### 6. What is a DI token, and how do you use it for dependency injection?

**DI-токен** (токен внедрения зависимостей) — это уникальный идентификатор, который Angular использует для поиска и предоставления зависимостей. Токены могут быть:

1. **Классы** (наиболее распространенный тип токена):

```typescript
@Injectable()
class UserService {}

// Внедрение
constructor(private userService: UserService) {}
```

2. **Строки** (не рекомендуется из-за возможных конфликтов):

```typescript
{ provide: 'API_URL', useValue: 'https://api.example.com' }

// Внедрение
constructor(@Inject('API_URL') private apiUrl: string) {}
```

3. **InjectionToken** (рекомендуется для значений, не являющихся классами):

```typescript
// Создание токена
export const API_URL = new InjectionToken<string>('api.url');

// Регистрация провайдера
providers: [
  { provide: API_URL, useValue: 'https://api.example.com' }
]

// Внедрение
constructor(@Inject(API_URL) private apiUrl: string) {}
```

**Преимущества InjectionToken**:

- Типобезопасность
- Предотвращение конфликтов имен
- Лучшая документация через описание токена
- Поддержка оптимизации через tree-shaking

### 7. How do you use `@Optional`, `@Self`, and `@SkipSelf` decorators to control dependency injection and their handling?

**@Optional**:

```typescript
constructor(@Optional() private logger: LoggerService) {
  if (this.logger) {
    this.logger.log('Service initialized');
  }
}
```

- Указывает, что зависимость необязательна
- Если зависимость не найдена, внедряется null вместо ошибки
- Позволяет компонентам работать даже при отсутствии некоторых сервисов

**@Self**:

```typescript
constructor(@Self() private themeService: ThemeService) {}
```

- Ограничивает поиск зависимости только инжектором текущего компонента
- Не проверяет родительские инжекторы
- Генерирует ошибку, если зависимость не найдена в локальном инжекторе (если не @Optional)
- Используется для обеспечения инкапсуляции и изоляции компонентов

**@SkipSelf**:

```typescript
constructor(@SkipSelf() private dataService: DataService) {}
```

- Пропускает инжектор текущего компонента и начинает поиск с родительского инжектора
- Полезно для доступа к родительским сервисам при переопределении провайдеров
- Предотвращает циклические зависимости
- Часто используется в сочетании с @Optional

**Комбинации декораторов**:

```typescript
constructor(
  @Optional() @Self() private localConfig: Config,
  @Optional() @SkipSelf() private parentConfig: Config
) {
  this.config = localConfig || parentConfig || DEFAULT_CONFIG;
}
```

- Позволяют создавать гибкие политики разрешения зависимостей
- Обеспечивают возможности для продвинутых сценариев композиции сервисов

### 8. How do you inject dependencies based on conditions or by different provided implementations?

**Условное внедрение зависимостей** можно реализовать несколькими способами:

**1. Использование useFactory**:

```typescript
providers: [
  {
    provide: AuthService,
    useFactory: (config: AppConfig) => {
      return config.environment === "production" ? new ProductionAuthService() : new DevelopmentAuthService();
    },
    deps: [AppConfig],
  },
];
```

**2. Использование токенов для нескольких реализаций**:

```typescript
const STORAGE_STRATEGY = new InjectionToken<StorageStrategy>('storage.strategy');

// В модуле
providers: [
  {
    provide: STORAGE_STRATEGY,
    useClass: environment.isProd ? IndexedDbStorage : LocalStorage
  }
]

// Использование
constructor(@Inject(STORAGE_STRATEGY) private storage: StorageStrategy) {}
```

**3. Фабричные методы в сервисах**:

```typescript
@Injectable({ providedIn: 'root' })
export class ApiClientFactory {
  constructor(private http: HttpClient, private config: AppConfig) {}

  createApiClient(): ApiClient {
    if (this.config.useMockApi) {
      return new MockApiClient();
    } else {
      return new RealApiClient(this.http, this.config.apiUrl);
    }
  }
}

// Использование
constructor(private apiClientFactory: ApiClientFactory) {
  this.apiClient = this.apiClientFactory.createApiClient();
}
```

**4. Стратегия по умолчанию с возможностью переопределения**:

```typescript
// В корневом модуле
providers: [{ provide: DataService, useClass: DefaultDataService }];

// В функциональном модуле
providers: [{ provide: DataService, useClass: SpecializedDataService }];
```

### 9. What is a multi-provider and how do you configure it?

**Мульти-провайдер** позволяет зарегистрировать несколько значений для одного токена DI. Это полезно для создания расширяемых коллекций, когда разные части приложения вносят свой вклад в общую коллекцию.

**Настройка мульти-провайдера**:

```typescript
// Определение токена
export const VALIDATORS = new InjectionToken<Validator[]>("app.validators");

// В одном модуле
providers: [
  { provide: VALIDATORS, useClass: EmailValidator, multi: true },
  { provide: VALIDATORS, useClass: RequiredValidator, multi: true },
];

// В другом модуле
providers: [{ provide: VALIDATORS, useClass: CreditCardValidator, multi: true }];
```

**Внедрение и использование**:

```typescript
constructor(@Inject(VALIDATORS) private validators: Validator[]) {
  // validators содержит массив всех зарегистрированных валидаторов
}

validate(value: any): ValidationResult[] {
  return this.validators.map(validator => validator.validate(value));
}
```

**Ключевые аспекты мульти-провайдеров**:

- Флаг `multi: true` обязателен для всех провайдеров с одним токеном
- Angular собирает все значения в массив
- Порядок элементов определяется порядком регистрации провайдеров
- Работает на любом уровне инжектора (root, module, component)
- Часто используется для HTTP-интерсепторов, роутинг-стратегий, плагинов приложения

### 10. How do you implement dependency injection for standalone components?

**Компонентный уровень DI** позволяет создавать экземпляры сервисов, область видимости которых ограничена компонентом и его дочерними элементами:

**Определение провайдеров в компоненте**:

```typescript
@Component({
  selector: "app-feature",
  templateUrl: "./feature.component.html",
  providers: [FeatureService, { provide: DataService, useClass: FeatureDataService }],
})
export class FeatureComponent {
  constructor(private featureService: FeatureService) {}
}
```

**Особенности компонентного DI**:

- Каждый экземпляр компонента получает свой инжектор с уникальными экземплярами сервисов
- Сервисы создаются при создании компонента и уничтожаются при его удалении
- Дочерние компоненты могут внедрять эти сервисы через свои конструкторы
- Компонентные провайдеры могут переопределять провайдеры из родительских инжекторов

**Использование viewProviders**:

```typescript
@Component({
  selector: "app-parent",
  template: `
    <div>Parent Content</div>
    <ng-content></ng-content>
    <app-child></app-child>
  `,
  viewProviders: [{ provide: DataService, useClass: SpecialDataService }],
})
export class ParentComponent {}
```

- `viewProviders` делают сервисы доступными только для шаблона компонента и его дочерних компонентов
- Контент, проецируемый через `<ng-content>`, не имеет доступа к этим сервисам
- Полезно для обеспечения инкапсуляции в компонентных библиотеках

### 11. How can you reuse standalone components across different parts of your Angular application?

**Повторное использование компонентов** в Angular может быть реализовано несколькими способами:

**1. Модульная архитектура**:

```typescript
@NgModule({
  declarations: [ReusableComponent],
  exports: [ReusableComponent],
  imports: [CommonModule],
})
export class SharedModule {}

// Использование в других модулях
@NgModule({
  imports: [SharedModule],
})
export class FeatureModule {}
```

**2. Создание автономных (standalone) компонентов**:

```typescript
@Component({
  selector: "app-reusable",
  templateUrl: "./reusable.component.html",
  standalone: true,
  imports: [CommonModule],
})
export class ReusableComponent {}

// Использование в другом standalone компоненте
@Component({
  selector: "app-feature",
  templateUrl: "./feature.component.html",
  standalone: true,
  imports: [ReusableComponent],
})
export class FeatureComponent {}
```

**3. Использование инжекции зависимостей для конфигурации**:

```typescript
// Конфигурационный токен
export const DATATABLE_CONFIG = new InjectionToken<DataTableConfig>("datatable.config");

// Компонент
@Component({
  selector: "app-data-table",
  templateUrl: "./data-table.component.html",
})
export class DataTableComponent {
  constructor(@Optional() @Inject(DATATABLE_CONFIG) private config: DataTableConfig) {
    this.config = config || DEFAULT_CONFIG;
  }
}

// Использование с разной конфигурацией
@Component({
  selector: "app-users",
  providers: [{ provide: DATATABLE_CONFIG, useValue: userTableConfig }],
  template: `<app-data-table [data]="users"></app-data-table>`,
})
export class UsersComponent {}
```

**4. Паттерн композиции с @Input/@Output**:

```typescript
@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <div class="card-header" *ngIf="title">{{ title }}</div>
      <div class="card-body">
        <ng-content></ng-content>
      </div>
      <div class="card-footer" *ngIf="showFooter">
        <ng-content select="[footer]"></ng-content>
      </div>
    </div>
  `
})
export class CardComponent {
  @Input() title?: string;
  @Input() showFooter = false;
}

// Использование
<app-card title="User Profile" [showFooter]="true">
  <app-user-details [user]="currentUser"></app-user-details>
  <div footer>
    <button (click)="save()">Save</button>
  </div>
</app-card>
```

**5. Директивы для расширения функциональности**:

```typescript
@Directive({
  selector: "[appHighlight]",
})
export class HighlightDirective {
  @Input() highlightColor = "yellow";

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener("mouseenter")
  onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, "background-color", this.highlightColor);
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, "background-color");
  }
}

// Использование на любом элементе
<div appHighlight highlightColor="lightblue">
  Наведите на меня
</div>;
```

**Ключевые принципы повторного использования компонентов**:

- Проектирование с учетом независимости от контекста
- Четко определенный интерфейс с @Input и @Output
- Поддержка настройки через DI и конфигурационные токены
- Следование принципу единственной ответственности
- Использование паттернов композиции вместо наследования

## Forms in Angular

### 1. What is the difference between `Template-driven` Forms and `Reactive` Forms?

**Template-driven Forms**:

- **Основаны на директивах** в HTML-шаблоне (ngModel, ngForm)
- **Простота использования** — требуют минимального кода TypeScript
- **Асинхронная валидация** — форма становится доступной с задержкой
- **Импортируются через FormsModule**
- **Состояние формы** создается автоматически Angular на основе шаблона
- **Двустороннее связывание** с использованием [(ngModel)]
- **Менее тестируемые**, так как логика встроена в шаблон
- **Предпочтительны для** простых форм с минимальной логикой

Пример:

```html
<form #loginForm="ngForm" (ngSubmit)="onSubmit(loginForm.value)">
  <div>
    <label for="email">Email</label>
    <input type="email" id="email" name="email" [(ngModel)]="user.email" required email />
  </div>
  <div>
    <label for="password">Password</label>
    <input type="password" id="password" name="password" [(ngModel)]="user.password" required minlength="6" />
  </div>
  <button type="submit" [disabled]="!loginForm.valid">Login</button>
</form>
```

**Reactive Forms**:

- **Создаются программно** в TypeScript-коде
- **Более гибкие** и мощные для сложных сценариев
- **Синхронный доступ** к модели формы в момент создания
- **Импортируются через ReactiveFormsModule**
- **Состояние формы** явно определено в коде компонента
- **Односторонняя связь** с использованием [formControl] и [formGroup]
- **Легче тестируемые**, так как логика формы разделена от представления
- **Предпочтительны для** сложных форм с условной логикой и динамическим поведением

Пример:

```typescript
// Component class
this.loginForm = this.fb.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(6)]]
});

// Получение значений
onSubmit() {
  console.log(this.loginForm.value);
}
```

```html
<form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
  <div>
    <label for="email">Email</label>
    <input type="email" id="email" formControlName="email" />
    <div *ngIf="loginForm.get('email')?.invalid && loginForm.get('email')?.touched">Пожалуйста, введите корректный email</div>
  </div>
  <div>
    <label for="password">Password</label>
    <input type="password" id="password" formControlName="password" />
    <div *ngIf="loginForm.get('password')?.invalid && loginForm.get('password')?.touched">Пароль должен содержать минимум 6 символов</div>
  </div>
  <button type="submit" [disabled]="loginForm.invalid">Login</button>
</form>
```

### 2. What are `FormControl`, `FormGroup`, and `FormArray` in the context of Reactive Forms?

**FormControl**:

- Базовый строительный блок реактивных форм
- Представляет отдельное поле ввода с его значением и состоянием
- Отслеживает значение, статус валидации и взаимодействия пользователя с полем
- Может использоваться как отдельно, так и в составе FormGroup/FormArray

```typescript
const nameControl = new FormControl("", [Validators.required, Validators.maxLength(50)]);

// Получение значения
console.log(nameControl.value); // ''

// Задание значения
nameControl.setValue("John Doe");

// Проверка валидности
console.log(nameControl.valid); // true

// Подписка на изменения
nameControl.valueChanges.subscribe((newValue) => {
  console.log("Value changed:", newValue);
});
```

**FormGroup**:

- Группирует несколько FormControl в единый объект
- Объединяет состояния и значения вложенных элементов управления
- Считается валидным, только если все вложенные элементы валидны
- Значение представляется как объект, где ключи соответствуют именам контролов

```typescript
const userForm = new FormGroup({
  firstName: new FormControl("", Validators.required),
  lastName: new FormControl("", Validators.required),
  address: new FormGroup({
    street: new FormControl(""),
    city: new FormControl(""),
    zipCode: new FormControl(""),
  }),
});

// Получение значения всей формы
console.log(userForm.value);
// { firstName: '', lastName: '', address: { street: '', city: '', zipCode: '' } }

// Получение значения вложенного контрола
console.log(userForm.get("firstName")?.value); // ''
console.log(userForm.get("address.city")?.value); // ''

// Проверка состояния всей формы
console.log(userForm.valid); // false
```

**FormArray**:

- Управляет динамическим набором элементов формы
- Хранит упорядоченный массив FormControl, FormGroup или других FormArray
- Идеален для работы со списками (добавление/удаление элементов)
- Значение представляется как массив значений вложенных элементов

```typescript
const skillsArray = new FormArray([new FormControl("Angular"), new FormControl("TypeScript")]);

// Добавление нового контрола
skillsArray.push(new FormControl("JavaScript"));

// Удаление контрола
skillsArray.removeAt(1);

// Получение всех значений
console.log(skillsArray.value); // ['Angular', 'JavaScript']

// Получение количества элементов
console.log(skillsArray.length); // 2

// Итерация по элементам
for (let i = 0; i < skillsArray.length; i++) {
  console.log(skillsArray.at(i).value);
}
```

### 3. What are the differences in working with validation for Template-driven Forms and Reactive Forms?

**Template-driven Forms валидация**:

1. **Директивы HTML**:
   - Используются атрибуты HTML5 и директивы Angular
   - Валидаторы привязываются через атрибуты (required, email, pattern и т.д.)
   - Angular автоматически создает соответствующие объекты валидаторов

```html
<input type="email" name="email" [(ngModel)]="user.email" required email #emailInput="ngModel" />

<div *ngIf="emailInput.invalid && emailInput.touched">
  <div *ngIf="emailInput.errors?.required">Email обязателен</div>
  <div *ngIf="emailInput.errors?.email">Введите корректный email</div>
</div>
```

2. **Доступ к состоянию валидации**:

   - Через шаблонные переменные (#emailInput="ngModel")
   - Отложенное создание элементов управления формой
   - Проверка валидности осуществляется через properties: valid, invalid, errors

3. **Пользовательские валидаторы**:
   - Необходимо создать директивы валидации
   - Сложнее в реализации и настройке
   - Требуют больше шаблонного кода

**Reactive Forms валидация**:

1. **Программное определение**:
   - Валидаторы задаются в коде компонента
   - Могут комбинироваться и создаваться динамически
   - Валидаторы передаются как аргументы при создании FormControl

```typescript
this.registrationForm = new FormGroup(
  {
    email: new FormControl("", [Validators.required, Validators.email, this.customEmailDomainValidator]),
    password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)]),
    confirmPassword: new FormControl(""),
  },
  { validators: this.passwordMatchValidator }
);
```

2. **Доступ к состоянию валидации**:
   - Прямой программный доступ к состоянию валидации (синхронно)
   - Более детальный контроль через методы: get(), getError(), hasError()
   - Легче управлять сложной логикой валидации

```html
<div *ngIf="registrationForm.get('email')?.invalid && registrationForm.get('email')?.touched">
  <div *ngIf="registrationForm.get('email')?.errors?.required">Email обязателен</div>
  <div *ngIf="registrationForm.get('email')?.errors?.email">Введите корректный email</div>
  <div *ngIf="registrationForm.get('email')?.errors?.invalidDomain">Разрешены только домены example.com и example.org</div>
</div>
```

3. **Пользовательские валидаторы**:
   - Реализуются как простые функции
   - Легко тестировать и повторно использовать
   - Могут применяться к отдельным контролам или целым группам

### 4. How do you implement custom validators for forms?

**Синхронный валидатор для Reactive Forms**:

Валидатор — это функция, которая принимает AbstractControl и возвращает объект ошибок или null:

```typescript
// Валидатор для отдельного контрола
function forbiddenNameValidator(forbiddenName: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = forbiddenName.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}

// Применение в форме
this.heroForm = new FormGroup({
  name: new FormControl("", [Validators.required, Validators.minLength(4), forbiddenNameValidator(/admin/i)]),
});
```

**Валидатор для FormGroup (перекрестная проверка полей)**:

```typescript
// Проверка совпадения пароля и его подтверждения
function passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
  const password = group.get("password")?.value;
  const confirmPassword = group.get("confirmPassword")?.value;

  return password === confirmPassword ? null : { passwordMismatch: true };
}

// Применение к форме целиком
this.registrationForm = new FormGroup(
  {
    password: new FormControl("", [Validators.required]),
    confirmPassword: new FormControl("", [Validators.required]),
  },
  { validators: passwordMatchValidator }
);
```

**Асинхронный валидатор**:

```typescript
// Проверка уникальности имени пользователя
function uniqueUsernameValidator(userService: UserService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return userService.checkUsernameExists(control.value).pipe(
      map((exists) => (exists ? { usernameExists: true } : null)),
      catchError(() => of(null))
    );
  };
}

// Применение в форме с асинхронным валидатором
this.registrationForm = this.fb.group({
  username: [
    "",
    {
      validators: [Validators.required, Validators.minLength(3)],
      asyncValidators: [uniqueUsernameValidator(this.userService)],
      updateOn: "blur", // Валидация происходит после потери фокуса
    },
  ],
});
```

**Собственная директива валидации для Template-driven Forms**:

```typescript
@Directive({
  selector: '[appForbiddenName]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ForbiddenNameDirective,
    multi: true
  }]
})
export class ForbiddenNameDirective implements Validator {
  @Input('appForbiddenName') forbiddenName: string = '';

  validate(control: AbstractControl): ValidationErrors | null {
    if (this.forbiddenName && control.value === this.forbiddenName) {
      return { forbiddenName: { value: control.value } };
    }
    return null;
  }
}

// Использование в шаблоне
<input type="text" name="heroName" [(ngModel)]="hero.name" appForbiddenName="admin">
```

### 5. How can you retrieve and process data from forms after submission?

**Извлечение данных из Template-driven Forms**:

1. **Через обработчик события отправки формы**:

```html
<form #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm)">
  <!-- поля формы -->
  <button type="submit">Отправить</button>
</form>
```

```typescript
onSubmit(form: NgForm): void {
  if (form.valid) {
    // Доступ к полным данным формы
    const formData = form.value;
    console.log('Form data:', formData);

    // Доступ к отдельным полям
    console.log('Name:', formData.name);
    console.log('Email:', formData.email);

    // Отправка данных на сервер
    this.userService.createUser(formData).subscribe({
      next: (response) => {
        console.log('Success:', response);
        form.resetForm(); // Сброс формы после успешной отправки
      },
      error: (error) => console.error('Error:', error)
    });
  }
}
```

2. **Через привязку с помощью NgModel**:

```html
<form (ngSubmit)="onSubmit()">
  <input [(ngModel)]="user.name" name="name" required />
  <input [(ngModel)]="user.email" name="email" required />
  <button type="submit">Отправить</button>
</form>
```

```typescript
user = { name: '', email: '' };

onSubmit(): void {
  // Данные уже доступны через объект user
  console.log('User data:', this.user);

  this.userService.createUser(this.user).subscribe({
    next: (response) => {
      console.log('Success:', response);
      this.user = { name: '', email: '' }; // Сброс данных
    },
    error: (error) => console.error('Error:', error)
  });
}
```

**Извлечение данных из Reactive Forms**:

1. **Через обработчик события отправки формы**:

```html
<form [formGroup]="registrationForm" (ngSubmit)="onSubmit()">
  <!-- поля формы -->
  <button type="submit" [disabled]="registrationForm.invalid">Зарегистрироваться</button>
</form>
```

```typescript
onSubmit(): void {
  if (this.registrationForm.valid) {
    // Доступ к полным данным формы
    const formData = this.registrationForm.value;
    console.log('Form data:', formData);

    // Доступ к отдельным полям
    console.log('Username:', formData.username);

    // Доступ к вложенным полям
    if (formData.address) {
      console.log('City:', formData.address.city);
    }

    // Получение только части данных
    const userData = {
      username: this.registrationForm.get('username')?.value,
      email: this.registrationForm.get('email')?.value
    };

    // Отправка данных на сервер
    this.authService.register(formData).subscribe({
      next: (response) => {
        console.log('Registration successful:', response);
        this.registrationForm.reset();
      },
      error: (error) => console.error('Registration failed:', error)
    });
  }
}
```

2. **Частичный доступ к данным с помощью getRawValue() или value**:

```typescript
// Получение всех данных, включая отключенные поля
const completeData = this.form.getRawValue();

// Получение только активных полей
const activeData = this.form.value;

// Обработка данных из FormArray
const skillsArray = this.form.get("skills") as FormArray;
const skillsList = skillsArray.controls.map((control) => control.value);
```

3. **Преобразование данных перед отправкой**:

```typescript
onSubmit(): void {
  if (this.profileForm.valid) {
    const formData = this.profileForm.value;

    // Преобразование даты в формат ISO
    const transformedData = {
      ...formData,
      birthDate: formData.birthDate ? new Date(formData.birthDate).toISOString() : null,
      fullName: `${formData.firstName} ${formData.lastName}`,
      // Удаление ненужных полей
      confirmPassword: undefined
    };

    this.userService.updateProfile(transformedData).subscribe(/* ... */);
  }
}
```

### 6. What is two-way data binding in the context of Template-driven Forms?

**Двустороннее связывание данных (Two-way Data Binding)** в Angular — это механизм, который позволяет автоматически синхронизировать данные между моделью компонента и представлением (DOM). Особенно мощно этот механизм используется в Template-driven Forms.

**Принцип работы**:

- **Из модели в представление**: изменения в данных компонента автоматически отображаются в DOM
- **Из представления в модель**: пользовательский ввод автоматически обновляет данные компонента

**Реализация с помощью [(ngModel)]**:

```html
<input type="text" [(ngModel)]="username" name="username" />
<p>Привет, {{ username }}!</p>
```

```typescript
export class AppComponent {
  username = "guest";
}
```

**Под капотом [(ngModel)]**:

- Синтаксис `[(ngModel)]` — это сокращение для комбинации односторонней привязки свойства `[ngModel]` и привязки события `(ngModelChange)`
- Эквивалентная запись:

```html
<input type="text" [ngModel]="username" (ngModelChange)="username = $event" name="username" />
```

**Полная форма с двусторонним связыванием**:

```html
<form #userForm="ngForm" (ngSubmit)="onSubmit()">
  <div>
    <label for="name">Имя:</label>
    <input type="text" id="name" [(ngModel)]="user.name" name="name" required />
  </div>

  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" [(ngModel)]="user.email" name="email" required email />
  </div>

  <div>
    <label>Пол:</label>
    <label> <input type="radio" [(ngModel)]="user.gender" name="gender" value="male" /> Мужской </label>
    <label> <input type="radio" [(ngModel)]="user.gender" name="gender" value="female" /> Женский </label>
  </div>

  <div>
    <label for="country">Страна:</label>
    <select id="country" [(ngModel)]="user.country" name="country" required>
      <option value="">-- Выберите страну --</option>
      <option *ngFor="let country of countries" [value]="country.code">{{ country.name }}</option>
    </select>
  </div>

  <div>
    <label>
      <input type="checkbox" [(ngModel)]="user.acceptTerms" name="acceptTerms" required />
      Я принимаю условия пользовательского соглашения
    </label>
  </div>

  <button type="submit" [disabled]="userForm.invalid">Отправить</button>
</form>

<div *ngIf="userForm.submitted">
  <h3>Отправленные данные:</h3>
  <pre>{{ user | json }}</pre>
</div>
```

```typescript
export class UserFormComponent {
  user = {
    name: "",
    email: "",
    gender: "",
    country: "",
    acceptTerms: false,
  };

  countries = [
    { code: "us", name: "США" },
    { code: "ca", name: "Канада" },
    { code: "uk", name: "Великобритания" },
    { code: "ru", name: "Россия" },
  ];

  onSubmit(): void {
    console.log("Form submitted:", this.user);
    // this.userService.saveUser(this.user).subscribe(/* ... */);
  }
}
```

**Особенности двустороннего связывания**:

- **Простота использования** — минимальный шаблонный код
- **Автоматическая синхронизация** — не требуется писать обработчики событий
- **Работа с вложенными объектами** — `[(ngModel)]="user.address.city"`
- **Валидация** — интеграция с системой валидации Angular
- **Возможные проблемы производительности** при большом количестве полей с двусторонним связыванием

### 7. How do you use FormBuilder to create reactive forms using convenient and shorter syntax notation?

**FormBuilder** — это сервис, предоставляемый Angular, который упрощает создание сложных форм. Он позволяет использовать более компактный синтаксис для создания FormGroup, FormControl и FormArray.

**Базовое использование**:

```typescript
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
})
export class UserProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Создание формы с помощью FormBuilder
    this.profileForm = this.fb.group({
      firstName: ["", [Validators.required, Validators.maxLength(50)]],
      lastName: ["", [Validators.required, Validators.maxLength(50)]],
      email: ["", [Validators.required, Validators.email]],
      age: [null, [Validators.min(18), Validators.max(100)]],
    });
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
    }
  }
}
```

**Сравнение с традиционным подходом**:

```typescript
// Традиционный подход
this.profileForm = new FormGroup({
  firstName: new FormControl("", [Validators.required, Validators.maxLength(50)]),
  lastName: new FormControl("", [Validators.required, Validators.maxLength(50)]),
  email: new FormControl("", [Validators.required, Validators.email]),
  age: new FormControl(null, [Validators.min(18), Validators.max(100)]),
});

// Использование FormBuilder
this.profileForm = this.fb.group({
  firstName: ["", [Validators.required, Validators.maxLength(50)]],
  lastName: ["", [Validators.required, Validators.maxLength(50)]],
  email: ["", [Validators.required, Validators.email]],
  age: [null, [Validators.min(18), Validators.max(100)]],
});
```

**Создание вложенных форм**:

```typescript
this.registrationForm = this.fb.group({
  personalInfo: this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    dob: [null, Validators.required],
  }),
  contactInfo: this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    phone: ["", Validators.pattern(/^\d{10}$/)],
    address: this.fb.group({
      street: [""],
      city: ["", Validators.required],
      state: [""],
      zip: ["", Validators.pattern(/^\d{5}$/)],
    }),
  }),
  account: this.fb.group(
    {
      username: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(8)]],
      confirmPassword: ["", Validators.required],
    },
    { validators: this.passwordMatchValidator }
  ),
});
```

**Работа с динамическими формами (FormArray)**:

```typescript
this.productForm = this.fb.group({
  name: ['', Validators.required],
  description: [''],
  price: [0, [Validators.required, Validators.min(0)]],
  // Создание FormArray
  variants: this.fb.array([])
});

// Получение доступа к FormArray
get variants() {
  return this.productForm.get('variants') as FormArray;
}

// Добавление нового элемента в FormArray
addVariant() {
  const variantForm = this.fb.group({
    color: ['', Validators.required],
    size: ['', Validators.required],
    quantity: [1, [Validators.required, Validators.min(0)]]
  });

  this.variants.push(variantForm);
}

// Удаление элемента из FormArray
removeVariant(index: number) {
  this.variants.removeAt(index);
}
```

**Использование с асинхронными валидаторами**:

```typescript
this.userForm = this.fb.group({
  username: ['', {
    validators: [Validators.required, Validators.minLength(3)],
    asyncValidators: [this.usernameValidator()],
    updateOn: 'blur'
  }],
  email: ['', {
    validators: [Validators.required, Validators.email],
    asyncValidators: [this.emailValidator()],
    updateOn: 'blur'
  }]
});

// Асинхронный валидатор
usernameValidator(): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return this.userService.checkUsernameExists(control.value).pipe(
      map(exists => exists ? { usernameExists: true } : null),
      catchError(() => of(null))
    );
  };
}
```

**Обновление и сброс формы**:

```typescript
// Обновление всей формы
this.profileForm.setValue({
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  age: 30,
});

// Частичное обновление формы
this.profileForm.patchValue({
  firstName: "John",
  lastName: "Doe",
});

// Сброс формы
this.profileForm.reset();
```

### 8. ow do you track the change state of forms or form controls (e.g., touched, dirty)?

Angular отслеживает несколько состояний для форм и элементов управления, что позволяет реагировать на различные стадии взаимодействия пользователя с формой.

**Основные состояния элементов управления**:

1. **pristine/dirty** — был ли изменен элемент:

   - `pristine`: пользователь еще не изменял значение
   - `dirty`: пользователь изменил значение элемента

2. **untouched/touched** — был ли фокус на элементе:

   - `untouched`: пользователь еще не взаимодействовал с элементом
   - `touched`: пользователь взаимодействовал с элементом и снял фокус

3. **valid/invalid** — состояние валидации:

   - `valid`: элемент проходит все проверки валидации
   - `invalid`: элемент не проходит хотя бы одну проверку валидации

4. **pending** — ожидание результата асинхронной валидации:
   - `true`: выполняется асинхронная валидация
   - `false`: асинхронная валидация завершена или не инициирована

**Отслеживание состояний в Template-driven Forms**:

```html
<form #loginForm="ngForm" (ngSubmit)="onSubmit()">
  <div>
    <label for="email">Email</label>
    <input type="email" id="email" name="email"
           [(ngModel)]="loginData.email"
           required email
           #emailControl="ngModel">

    <div *ngIf="emailControl.invalid && (emailControl.dirty || emailControl.touched)">
      <div *ngIf="emailControl.errors?.required">Email обязателен</div>
      <div *ngIf="emailControl.errors?.email">Введите корректный email</div>
    </div>
  </div>

<button type="button" [disabled]="loginForm.pristine" (click)="loginForm.resetForm()">Сбросить</button>
  </div>
</form>

<!-- Отображение состояния формы для отладки -->
<div>
  <p>Form valid: {{ loginForm.valid }}</p>
  <p>Form touched: {{ loginForm.touched }}</p>
  <p>Form dirty: {{ loginForm.dirty }}</p>
  <p>Form submitted: {{ loginForm.submitted }}</p>
</div>
```

**Отслеживание состояний в Reactive Forms**:

```html
<form [formGroup]="registrationForm" (ngSubmit)="onSubmit()">
  <div>
    <label for="username">Имя пользователя</label>
    <input type="text" id="username" formControlName="username" />

    <div *ngIf="username.invalid && (username.dirty || username.touched)">
      <div *ngIf="username.errors?.required">Имя пользователя обязательно</div>
      <div *ngIf="username.errors?.minlength">Имя пользователя должно содержать минимум {{ username.errors?.minlength.requiredLength }} символов</div>
    </div>
  </div>

  <div>
    <button type="submit" [disabled]="registrationForm.invalid">Зарегистрироваться</button>
    <button type="button" [disabled]="registrationForm.pristine" (click)="resetForm()">Сбросить</button>
  </div>
</form>
```

```typescript
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
    });

    // Подписка на изменения состояния формы
    this.registrationForm.statusChanges.subscribe((status) => {
      console.log("Form status:", status); // 'VALID', 'INVALID', 'PENDING'
    });
  }

  // Геттер для удобного доступа к контролу username
  get username() {
    return this.registrationForm.get("username");
  }

  // Программное управление состоянием
  markFormAsTouched() {
    this.registrationForm.markAllAsTouched();
  }

  resetForm() {
    this.registrationForm.reset();
  }

  // Проверка определенных состояний
  isFormDirtyAndInvalid(): boolean {
    return this.registrationForm.dirty && this.registrationForm.invalid;
  }

  onSubmit() {
    // Принудительная проверка всех полей перед отправкой
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    }

    // Форма валидна, обработка данных
    console.log(this.registrationForm.value);
  }
}
```

**Программное управление состояниями**:

```typescript
// Для отдельного контрола
this.registrationForm.get("email").markAsTouched();
this.registrationForm.get("email").markAsDirty();
this.registrationForm.get("email").markAsPristine();
this.registrationForm.get("email").markAsUntouched();

// Для всей формы
this.registrationForm.markAllAsTouched();
this.registrationForm.markAsDirty();
this.registrationForm.markAsPristine();
```

**Отслеживание изменений значений и состояний**:

```typescript
ngOnInit() {
  // Подписка на изменения значения
  this.registrationForm.get('username').valueChanges.subscribe(value => {
    console.log('Username changed:', value);
  });

  // Подписка на изменения состояния
  this.registrationForm.get('email').statusChanges.subscribe(status => {
    console.log('Email status changed:', status);
  });

  // Подписка на изменения всей формы
  this.registrationForm.valueChanges.subscribe(formValues => {
    console.log('Form values changed:', formValues);

    // Сохранение в localStorage при изменении
    localStorage.setItem('formDraft', JSON.stringify(formValues));
  });
}
```

**Использование статусов для условного форматирования**:

```css
.ng-valid[required],
.ng-valid.required {
  border-left: 5px solid #42a948; /* зеленый */
}

.ng-invalid:not(form) {
  border-left: 5px solid #a94442; /* красный */
}

.ng-pending {
  border-left: 5px solid #e8ac12; /* желтый */
}
```

**Создание собственных индикаторов состояния**:

```html
<div class="form-field" [class.field-error]="username.invalid && username.touched" [class.field-success]="username.valid && username.touched" [class.field-pending]="username.pending">
  <label for="username">Имя пользователя</label>
  <input type="text" id="username" formControlName="username" />

  <div class="validation-message" *ngIf="username.invalid && username.touched">
    <!-- Сообщения об ошибках -->
  </div>

  <div class="validation-indicator">
    <span *ngIf="username.pending" class="spinner">проверка...</span>
    <span *ngIf="username.valid && username.touched" class="check">✓</span>
    <span *ngIf="username.invalid && username.touched" class="error">✗</span>
  </div>
</div>
```

### 9. How do you handle asynchronous validation?

Асинхронная валидация позволяет проверять данные формы через API или выполнять другие асинхронные операции (например, проверять уникальность имени пользователя или email).

**Создание асинхронного валидатора**:

```typescript
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";
import { map, debounceTime, switchMap, catchError, first } from "rxjs/operators";
import { UserService } from "./user.service";

// Функция-фабрика для создания асинхронного валидатора
export function uniqueUsernameValidator(userService: UserService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    if (!control.value) {
      return of(null); // Пустое значение не проверяем
    }

    return of(control.value).pipe(
      // Задержка для предотвращения множества запросов при быстром вводе
      debounceTime(400),
      // Переключаемся на новый запрос при каждом изменении
      switchMap((username) =>
        userService.checkUsernameExists(username).pipe(
          // Преобразуем результат в формат валидатора
          map((exists) => (exists ? { usernameExists: true } : null)),
          // Берем только первый результат
          first(),
          // В случае ошибки запроса считаем проверку пройденной
          catchError(() => of(null))
        )
      )
    );
  };
}
```

**Применение асинхронного валидатора в Reactive Forms**:

```typescript
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../services/user.service";
import { uniqueUsernameValidator } from "../validators/async-validators";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: [
        "",
        {
          validators: [Validators.required, Validators.minLength(3)],
          asyncValidators: [uniqueUsernameValidator(this.userService)],
          updateOn: "blur", // Валидация при потере фокуса, а не при каждом нажатии клавиши
        },
      ],
      email: [
        "",
        [Validators.required, Validators.email],
        // Несколько асинхронных валидаторов
        [this.emailDomainValidator(), uniqueEmailValidator(this.userService)],
      ],
      password: ["", [Validators.required, Validators.minLength(8)]],
    });
  }

  // Геттер для удобного доступа
  get username() {
    return this.registrationForm.get("username");
  }

  get email() {
    return this.registrationForm.get("email");
  }

  // Встроенный асинхронный валидатор
  emailDomainValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const email = control.value;
      if (!email || !email.includes("@")) {
        return of(null);
      }

      const domain = email.split("@")[1];
      return this.userService.getAllowedDomains().pipe(
        map((allowedDomains) => (allowedDomains.includes(domain) ? null : { invalidDomain: true })),
        catchError(() => of(null))
      );
    };
  }

  onSubmit() {
    // Отключаем кнопку отправки пока идет асинхронная валидация
    if (this.registrationForm.pending) {
      return;
    }

    if (this.registrationForm.valid) {
      console.log("Form submitted:", this.registrationForm.value);
      this.userService.registerUser(this.registrationForm.value).subscribe(/* ... */);
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }
}
```

**Отображение состояния асинхронной валидации в шаблоне**:

```html
<form [formGroup]="registrationForm" (ngSubmit)="onSubmit()">
  <div class="form-group">
    <label for="username">Имя пользователя</label>
    <input type="text" id="username" formControlName="username" />

    <!-- Индикатор загрузки -->
    <div *ngIf="username.pending" class="spinner">Проверка доступности...</div>

    <!-- Сообщения об ошибках -->
    <div *ngIf="username.invalid && (username.dirty || username.touched) && !username.pending">
      <div *ngIf="username.errors?.required">Имя пользователя обязательно</div>
      <div *ngIf="username.errors?.minlength">Минимальная длина {{ username.errors?.minlength.requiredLength }} символов</div>
      <div *ngIf="username.errors?.usernameExists">Это имя пользователя уже занято</div>
    </div>
  </div>

  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" formControlName="email" />

    <!-- Индикатор загрузки -->
    <div *ngIf="email.pending" class="spinner">Проверка email...</div>

    <!-- Сообщения об ошибках -->
    <div *ngIf="email.invalid && (email.dirty || email.touched) && !email.pending">
      <div *ngIf="email.errors?.required">Email обязателен</div>
      <div *ngIf="email.errors?.email">Введите корректный email</div>
      <div *ngIf="email.errors?.emailExists">Этот email уже зарегистрирован</div>
      <div *ngIf="email.errors?.invalidDomain">Недопустимый домен email. Разрешены только корпоративные домены.</div>
    </div>
  </div>

  <!-- Другие поля -->

  <button type="submit" [disabled]="registrationForm.invalid || registrationForm.pending">
    <span *ngIf="registrationForm.pending">Проверка...</span>
    <span *ngIf="!registrationForm.pending">Зарегистрироваться</span>
  </button>
</form>
```

**Обработка асинхронной валидации с помощью сервиса состояния**:

```typescript
@Injectable({
  providedIn: "root",
})
export class ValidationService {
  checkUsernameUnique(username: string): Observable<boolean> {
    // Имитация запроса к API
    return of(username !== "admin" && username !== "root").pipe(
      delay(1000) // Задержка для демонстрации
    );
  }

  validateUsername(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.checkUsernameUnique(control.value).pipe(
        map((isUnique) => (isUnique ? null : { usernameExists: true })),
        catchError(() => of(null))
      );
    };
  }
}
```

**Оптимизация асинхронной валидации**:

1. **Предотвращение частых запросов**:

```typescript
return control.valueChanges.pipe(
  debounceTime(500), // Ждем 500 мс после ввода
  distinctUntilChanged(), // Игнорируем, если значение не изменилось
  take(1), // Берем только первое значение
  switchMap((value) => {
    return this.userService.checkUsernameExists(value);
  }),
  map((exists) => (exists ? { usernameExists: true } : null))
);
```

2. **Кеширование результатов**:

```typescript
const cache = new Map<string, boolean>();

return (control: AbstractControl): Observable<ValidationErrors | null> => {
  const value = control.value;

  // Проверяем кеш
  if (cache.has(value)) {
    const exists = cache.get(value);
    return of(exists ? { usernameExists: true } : null);
  }

  // Если нет в кеше, делаем запрос
  return this.userService.checkUsernameExists(value).pipe(
    map((exists) => {
      // Сохраняем в кеш
      cache.set(value, exists);
      return exists ? { usernameExists: true } : null;
    })
  );
};
```

3. **Условный пропуск валидации**:

```typescript
// Проверяем только если значение прошло синхронную валидацию
if (control.errors && !control.errors.usernameExists) {
  return of(null); // Не выполняем асинхронную валидацию
}

// Проверяем только если длина достаточная
if (control.value.length < 3) {
  return of(null);
}
```

**Визуальное отображение состояний асинхронной валидации**:

```css
.field-container {
  position: relative;
}

.field-status {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.pending-indicator {
  width: 20px;
  height: 20px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.valid-indicator {
  color: green;
}

.invalid-indicator {
  color: red;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

```html
<div class="field-container">
  <input type="text" formControlName="username" />

  <div class="field-status">
    <div *ngIf="username.pending" class="pending-indicator"></div>
    <div *ngIf="!username.pending && username.valid && username.touched" class="valid-indicator">✓</div>
    <div *ngIf="!username.pending && username.invalid && username.touched" class="invalid-indicator">✗</div>
  </div>
</div>
```

Асинхронная валидация — мощный инструмент, который позволяет проверять данные формы через внешние источники данных. Правильное использование асинхронных валидаторов, включая оптимизацию запросов и наглядное отображение состояний, значительно улучшает пользовательский опыт при работе с формами.

## Lazy Loading in Angular

### 1. What is `Lazy loading`, and what is its purpose in Angular applications?

**Lazy Loading (ленивая загрузка)** — это техника оптимизации, которая позволяет загружать части приложения (обычно модули) по требованию, а не при начальном запуске. В Angular эта концепция тесно связана с маршрутизацией и модульной архитектурой.

**Принцип работы**:

- При начальной загрузке приложения загружаются только основные (eagerly loaded) модули
- Модули, настроенные на ленивую загрузку, компилируются в отдельные JavaScript-файлы (бандлы)
- Эти файлы загружаются только тогда, когда пользователь переходит по соответствующему маршруту
- После загрузки модуль становится доступным в приложении наравне с eagerly-loaded модулями

**Основные цели и преимущества**:

- **Ускорение начальной загрузки** — уменьшение размера начального бандла приложения
- **Оптимизация использования ресурсов** — загружаются только те функции, которые действительно используются
- **Улучшение пользовательского опыта** — более быстрый запуск приложения
- **Масштабируемость** — возможность добавлять функциональность без существенного увеличения времени загрузки
- **Разделение ответственности** — чистое разделение кода по функциональным модулям

**Сценарии использования**:

- **Крупные приложения** с множеством функциональных модулей
- **Административные панели** с редко используемыми функциями
- **Специализированные разделы** приложения (например, аналитика, настройки)
- **Функции для определенных ролей пользователей** (например, модуль администратора)
- **Редко используемые страницы** (например, страницы помощи, справочные материалы)

### 2. How do you configure lazy loading for a specific module?

Настройка ленивой загрузки для модуля включает несколько основных шагов:

**1. Создание отдельного Feature-модуля**:

```typescript
// src/app/feature/feature.module.ts
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FeatureRoutingModule } from "./feature-routing.module";
import { FeatureComponent } from "./feature.component";

@NgModule({
  declarations: [FeatureComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule, // Модуль маршрутизации для функционального модуля
  ],
})
export class FeatureModule {}
```

**2. Настройка внутренней маршрутизации модуля**:

```typescript
// src/app/feature/feature-routing.module.ts
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeatureComponent } from "./feature.component";

// Внутренние маршруты модуля
const routes: Routes = [
  {
    path: "", // Пустой путь, так как префикс указывается в основном маршрутизаторе
    component: FeatureComponent,
  },
  {
    path: "detail/:id",
    component: FeatureDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Важно: forChild, а не forRoot
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
```

**3. Настройка основного маршрутизатора для ленивой загрузки**:

```typescript
// src/app/app-routing.module.ts
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "feature",
    // Здесь используется функция import() для ленивой загрузки
    loadChildren: () => import("./feature/feature.module").then((m) => m.FeatureModule),
  },
  {
    path: "admin",
    loadChildren: () => import("./admin/admin.module").then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

**4. Убедитесь, что модуль не импортируется напрямую в AppModule**:
Важное правило: ленивозагружаемые модули НЕ должны импортироваться через обычные imports в AppModule или другие eagerly-loaded модули. Это нарушит принцип ленивой загрузки.

**5. Правильная организация компонентов**:
Компоненты, используемые внутри ленивозагружаемого модуля, должны быть объявлены в этом модуле, а не в AppModule или других shared-модулях.

**6. Для работы с Standalone компонентами** (начиная с Angular 14+):

```typescript
// Использование standalone-компонентов
const routes: Routes = [
  {
    path: "profile",
    loadComponent: () => import("./profile/profile.component").then((c) => c.ProfileComponent),
  },
];
```

**7. Для вложенных ленивозагружаемых маршрутов**:

```typescript
const routes: Routes = [
  {
    path: "dashboard",
    loadChildren: () => import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
    // Можно добавить guard, title, data и другие свойства
    canActivate: [AuthGuard],
    data: { preload: true },
  },
];
```

### 3. What changes to the routing system are necessary to support lazy loading?

Для поддержки ленивой загрузки в маршрутизации Angular необходимы следующие ключевые изменения:

**1. Использование loadChildren вместо прямого указания компонентов**:

```typescript
// Традиционная маршрутизация без ленивой загрузки
{ path: 'admin', component: AdminComponent }

// Маршрутизация с ленивой загрузкой
{
  path: 'admin',
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
}
```

**2. Разделение структуры маршрутов на уровни**:

- **Корневой маршрутизатор** (AppRoutingModule): определяет основные маршруты и точки ленивой загрузки
- **Маршрутизаторы функциональных модулей**: определяют внутренние маршруты для своего модуля

**3. Правильное использование RouterModule.forRoot() и RouterModule.forChild()**:

- `RouterModule.forRoot()` используется только в главном AppRoutingModule
- `RouterModule.forChild()` используется во всех ленивозагружаемых модулях

**4. Настройка структуры путей**:

- Базовый путь для модуля устанавливается в корневом маршрутизаторе
- Внутренние пути модуля начинаются с пустого пути ('') или с относительных путей

```typescript
// app-routing.module.ts
{
  path: 'products', // Базовый путь
  loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
}

// products-routing.module.ts
const routes: Routes = [
  { path: '', component: ProductListComponent }, // Соответствует /products
  { path: 'new', component: AddProductComponent }, // Соответствует /products/new
  { path: ':id', component: ProductDetailComponent } // Соответствует /products/123
];
```

**5. Настройка предварительной загрузки (preloading)**:

```typescript
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules, // или CustomPreloadingStrategy
      // Другие опции: useHash, enableTracing, scrollPositionRestoration и т.д.
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

**6. Обработка Guards и Resolvers для ленивозагружаемых маршрутов**:

- Guards (например, AuthGuard) можно применять как к основному маршруту модуля, так и к внутренним
- Важно учитывать, что Guard будет загружен вместе с основным бандлом, даже если защищает ленивозагружаемый маршрут

```typescript
{
  path: 'admin',
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  canActivate: [AuthGuard],
  canLoad: [AuthGuard] // Предотвращает даже загрузку модуля неавторизованным пользователям
}
```

**7. Передача данных в ленивозагружаемые модули**:

```typescript
{
  path: 'dashboard',
  loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  data: { title: 'Dashboard', requiredRole: 'admin' }
}
```

**8. Работа с дочерними маршрутами**:

```typescript
// В feature-routing.module.ts
const routes: Routes = [
  {
    path: "",
    component: FeatureComponent,
    children: [
      { path: "overview", component: OverviewComponent },
      { path: "details", component: DetailsComponent },
    ],
  },
];
```

### 4. What are the advantages of using lazy loading in your application?

**1. Улучшение производительности начальной загрузки**:

- **Уменьшение размера начального бандла** — загружаются только необходимые для старта модули
- **Сокращение времени до интерактивности (TTI)** — приложение быстрее становится отзывчивым
- **Более быстрая загрузка критических путей** — пользователи получают доступ к основным функциям раньше
- **Количественные улучшения**: снижение времени загрузки может достигать 30-60% в крупных приложениях

**2. Оптимизация использования сетевых ресурсов**:

- **Загрузка по требованию** — пользователи загружают только то, что используют
- **Сокращение трафика** — особенно важно для мобильных пользователей
- **Распределение нагрузки** — запросы к серверу распределяются во времени
- **Эффективное кеширование** — отдельные модули могут кешироваться браузером независимо

**3. Улучшение пользовательского опыта**:

- **Более быстрый отклик приложения** — пользователи видят основной контент раньше
- **Плавные переходы** — при правильной настройке предварительной загрузки
- **Индикаторы загрузки** — можно добавить индикаторы загрузки для больших модулей

**4. Организационные преимущества для разработчиков**:

- **Четкое разделение кода** — функциональные модули изолированы друг от друга
- **Масштабируемость кодовой базы** — команды могут работать над модулями независимо
- **Упрощение сопровождения** — модули можно обновлять и тестировать независимо
- **Более четкая структура проекта** — принуждает к хорошему разделению функциональности

**5. Бизнес-преимущества**:

- **Удержание пользователей** — быстрые сайты имеют более низкие показатели отказов
- **Улучшение конверсии** — каждая секунда загрузки критически важна для бизнес-показателей
- **Экономия на серверной инфраструктуре** — сокращение трафика может снизить затраты
- **Лучший SEO** — поисковые системы отдают предпочтение быстрым сайтам

**6. Технические преимущества**:

- **Возможность реализации функциональных флагов** — можно включать/отключать целые модули
- **Упрощение A/B-тестирования** — возможность загружать разные версии модулей
- **Лучшая изоляция кода** — ошибки в одном модуле реже влияют на другие части приложения
- **Возможность обновления отдельных частей приложения** без полной перезагрузки

**7. Примеры конкретных ситуаций**:

- **Административная панель**, которую использует лишь малая часть пользователей
- **Страницы настроек**, которые посещаются редко
- **Инструменты аналитики и отчетов**, используемые небольшим процентом пользователей
- **Расширенные функции редактирования** в приложениях с контентом
- **Функциональность для определенных ролей**, например, модерирование контента

### 5. What is Preload strategy, and what are the main strategies used for preloading modules (`NoPreloading` or `PreloadAllModules`)?

**Стратегия предварительной загрузки (PreloadingStrategy)** — это механизм, который определяет, когда и какие ленивозагружаемые модули должны быть загружены в фоновом режиме после завершения начальной загрузки приложения. Это позволяет оптимизировать пользовательский опыт, сначала быстро отображая критический контент, а затем незаметно для пользователя загружая остальные модули.

**Основные встроенные стратегии**:

**1. NoPreloading** (стратегия по умолчанию):

- **Принцип работы**: модули загружаются только при непосредственном переходе на соответствующий маршрут
- **Плюсы**: минимальное использование сетевого трафика, модули загружаются только при необходимости
- **Минусы**: при переходе на новый маршрут пользователю приходится ждать загрузки модуля
- **Применение**: подходит для приложений с большим количеством редко используемых модулей или для экономии трафика

```typescript
import { RouterModule, NoPreloading } from "@angular/router";

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

**2. PreloadAllModules**:

- **Принцип работы**: все ленивозагружаемые модули автоматически загружаются в фоновом режиме после завершения начальной загрузки
- **Плюсы**: пользователь получает ощущение мгновенной навигации, так как модули уже предзагружены
- **Минусы**: повышенное использование трафика, может быть неэффективно для очень больших приложений
- **Применение**: идеально для средних приложений с ограниченным количеством модулей

```typescript
import { RouterModule, PreloadAllModules } from "@angular/router";

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

**Пользовательские стратегии предварительной загрузки**:

**3. Selective Preloading** (выборочная предварительная загрузка):

- **Принцип работы**: выбирает определенные модули для предзагрузки на основе метаданных маршрута
- **Реализация**: создается пользовательская стратегия, которая проверяет свойство data маршрута

```typescript
import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({ providedIn: "root" })
export class SelectivePreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    // Проверяем флаг preload в метаданных маршрута
    if (route.data && route.data["preload"]) {
      console.log(`Preloading: ${route.path}`);
      return load();
    } else {
      return of(null);
    }
  }
}

// Использование в маршрутах
const routes: Routes = [
  {
    path: "important-feature",
    loadChildren: () => import("./important/important.module").then((m) => m.ImportantModule),
    data: { preload: true }, // Этот модуль будет предзагружен
  },
  {
    path: "less-important",
    loadChildren: () => import("./less-important/less-important.module").then((m) => m.LessImportantModule),
    // Этот модуль не будет предзагружен
  },
];
```

**4. Network-Aware Preloading** (предзагрузка с учетом сети):

- **Принцип работы**: загружает модули только при определенных сетевых условиях (например, только на WiFi)
- **Реализация**: использует Network Information API для определения типа подключения

```typescript
import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({ providedIn: "root" })
export class NetworkAwarePreloadStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    // Проверяем тип соединения, если доступен API
    if (navigator.connection) {
      // Предзагружаем только на WiFi или быстром соединении
      const connection = (navigator as any).connection;
      if (connection.saveData) {
        // Режим экономии трафика активен, не предзагружаем
        return of(null);
      }

      const effectiveType = connection.effectiveType || "";
      if (effectiveType === "4g") {
        // Предзагружаем только при 4G соединении
        return load();
      }
    }

    // По умолчанию или если Network API недоступен
    // можно проверить наличие флага preload
    if (route.data && route.data["preload"]) {
      return load();
    }

    return of(null);
  }
}
```

**5. QuickLink Strategy** (предзагрузка на основе видимых ссылок):

- **Принцип работы**: предзагружает модули, к которым ведут ссылки, видимые на текущем экране
- **Реализация**: использует IntersectionObserver для отслеживания видимости ссылок

```typescript
// Обычно используется с библиотекой ngx-quicklink
import { QuicklinkStrategy } from "ngx-quicklink";

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: QuicklinkStrategy,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

**6. Приоритетная предварительная загрузка**:

- **Принцип работы**: загружает модули в порядке приоритета, указанного в настройках маршрута
- **Реализация**: задерживает загрузку низкоприоритетных модулей

```typescript
@Injectable({ providedIn: "root" })
export class PriorityPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    const priority = route.data?.["preloadPriority"] || 0;

    // Задержка в зависимости от приоритета
    const delay = 1000 * (5 - priority); // 0-5 секунд задержки

    return of(true).pipe(
      delay(delay),
      switchMap(() => {
        console.log(`Preloading with priority ${priority}: ${route.path}`);
        return load();
      })
    );
  }
}

// Использование
const routes: Routes = [
  {
    path: "high-priority",
    data: { preloadPriority: 5 },
    loadChildren: () => import("./high-priority/high-priority.module").then((m) => m.HighPriorityModule),
  },
  {
    path: "medium-priority",
    data: { preloadPriority: 3 },
    loadChildren: () => import("./medium-priority/medium-priority.module").then((m) => m.MediumPriorityModule),
  },
];
```

### 6. How do you use PreloadingStrategy with Angular Router to organize preloading of data?

**Предварительная загрузка данных** (не только модулей) — это расширенный сценарий использования стратегий предзагрузки. Он позволяет загрузить не только код модуля, но и данные, необходимые для работы модуля, еще до того, как пользователь перейдет на соответствующую страницу.

**1. Реализация кастомной стратегии предзагрузки данных**:

```typescript
import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of, switchMap } from "rxjs";
import { DataService } from "./data.service";

@Injectable({ providedIn: "root" })
export class DataPreloadingStrategy implements PreloadingStrategy {
  constructor(private dataService: DataService) {}

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    // Проверяем наличие флага и информации о данных для предзагрузки
    if (route.data && route.data["preloadData"]) {
      const dataKey = route.data["dataKey"];

      // Сначала загружаем модуль
      return load().pipe(
        // Затем загружаем связанные данные
        switchMap((loadedModule) => {
          console.log(`Preloading data for ${route.path}`);

          // Загружаем данные и сохраняем их в сервисе кеширования
          return this.dataService.preloadData(dataKey);
        })
      );
    }

    // Если нет флага предзагрузки данных, просто загружаем модуль
    if (route.data && route.data["preload"]) {
      return load();
    }

    return of(null); // Не предзагружаем модуль и данные
  }
}
```

**2. Сервис для кеширования предзагруженных данных**:

```typescript
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of, tap, catchError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private cache = new Map<string, any>();

  constructor(private http: HttpClient) {}

  preloadData(dataKey: string): Observable<any> {
    // Проверяем, есть ли данные уже в кеше
    if (this.cache.has(dataKey)) {
      console.log(`Using cached data for ${dataKey}`);
      return of(this.cache.get(dataKey));
    }

    const url = this.getUrlForDataKey(dataKey);

    // Загружаем данные и сохраняем в кеше
    return this.http.get(url).pipe(
      tap((data) => {
        console.log(`Cached data for ${dataKey}`);
        this.cache.set(dataKey, data);
      }),
      catchError((error) => {
        console.error(`Failed to preload data for ${dataKey}`, error);
        return of(null);
      })
    );
  }

  // Получение данных из кеша или загрузка, если их нет
  getData(dataKey: string): Observable<any> {
    if (this.cache.has(dataKey)) {
      return of(this.cache.get(dataKey));
    }

    return this.preloadData(dataKey);
  }

  private getUrlForDataKey(dataKey: string): string {
    // Преобразуем ключ данных в URL
    const apiBase = "/api";
    switch (dataKey) {
      case "products":
        return `${apiBase}/products`;
      case "users":
        return `${apiBase}/users`;
      default:
        return `${apiBase}/${dataKey}`;
    }
  }
}
```

**3. Настройка маршрутов с предзагрузкой данных**:

```typescript
const routes: Routes = [
  {
    path: "products",
    loadChildren: () => import("./products/products.module").then((m) => m.ProductsModule),
    data: {
      preload: true, // Предзагрузить модуль
      preloadData: true, // Предзагрузить данные
      dataKey: "products", // Ключ для определения данных
    },
  },
  {
    path: "users",
    loadChildren: () => import("./users/users.module").then((m) => m.UsersModule),
    data: {
      preload: true,
      preloadData: true,
      dataKey: "users",
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: DataPreloadingStrategy,
    }),
  ],
  exports: [RouterModule],
  providers: [DataPreloadingStrategy],
})
export class AppRoutingModule {}
```

**4. Использование предзагруженных данных в компоненте**:

```typescript
import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  loading = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loading = true;

    // Получаем данные из кеша (если они были предзагружены) или загружаем
    this.dataService.getData("products").subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading products", error);
        this.loading = false;
      },
    });
  }
}
```

**5. Более сложный сценарий: предзагрузка с зависимостями**:

```typescript
import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of, forkJoin, switchMap } from "rxjs";
import { DataService } from "./data.service";

@Injectable({ providedIn: "root" })
export class AdvancedPreloadingStrategy implements PreloadingStrategy {
  constructor(private dataService: DataService) {}

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (!route.data || !route.data["preload"]) {
      return of(null);
    }

    // Загружаем модуль
    return load().pipe(
      switchMap((loadedModule) => {
        // Если есть данные для предзагрузки
        if (route.data && route.data["preloadData"]) {
          const dataKeys = Array.isArray(route.data["dataKey"]) ? route.data["dataKey"] : [route.data["dataKey"]];

          // Загружаем все указанные данные параллельно
          const dataObservables = dataKeys.map((key) => this.dataService.preloadData(key));

          // Ждем загрузки всех данных
          return forkJoin(dataObservables);
        }

        return of(loadedModule);
      })
    );
  }
}
```

**6. Интеграция с Guards для условной предзагрузки**:

````typescript
import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

```typescript
@Injectable({ providedIn: 'root' })
export class GuardAwarePreloadingStrategy implements PreloadingStrategy {
  constructor(private injector: Injector) {}

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    // Если маршрут не предназначен для предзагрузки
    if (!route.data || !route.data['preload']) {
      return of(null);
    }

    // Если у маршрута есть canLoad guard, проверяем его перед предзагрузкой
    if (route.canLoad) {
      const guards = route.canLoad.map(guard => {
        const guardInstance = this.injector.get(guard);
        return guardInstance.canLoad ?
          guardInstance.canLoad(route) :
          guardInstance;
      });

      // Проверяем все guards
      return forkJoin(guards).pipe(
        map(results => results.every(result => result === true)),
        switchMap(canLoad => canLoad ? load() : of(null))
      );
    }

    // Если guards нет, просто загружаем
    return load();
  }
}
````

### 7. What are the disadvantages of lazy loading?

Несмотря на многочисленные преимущества, ленивая загрузка имеет ряд недостатков и ограничений, которые следует учитывать:

**1. Задержка при первой навигации к маршруту**:

- **Проблема**: При первом переходе к ленивозагружаемому маршруту пользователю приходится ждать загрузки модуля
- **Последствия**: Ощущение "зависания" приложения, особенно на медленных соединениях
- **Решение**: Использовать стратегии предзагрузки и индикаторы загрузки для улучшения UX

**2. Увеличение общего размера приложения**:

- **Проблема**: Ленивая загрузка часто приводит к дублированию кода в бандлах
- **Технические детали**: Каждый ленивозагружаемый модуль содержит свои зависимости, которые могут дублироваться
- **Пример**: Различные модули могут включать одни и те же общие утилиты
- **Решение**: Использовать shared модули и следить за размером бандлов

**3. Сложность разработки и отладки**:

- **Проблема**: Усложнение структуры приложения и маршрутизации
- **Последствия**: Потенциальные ошибки в настройке и циклические зависимости
- **Примеры сложностей**: Взаимодействие между модулями, сервисы с разными экземплярами
- **Решение**: Четкая архитектура и инструменты отладки

**4. Проблемы с совместным использованием сервисов**:

- **Проблема**: Сервисы в ленивозагружаемых модулях могут создавать отдельные экземпляры
- **Пример**: Если сервис A предоставляется в AppModule и в ленивозагружаемом модуле, создаются два экземпляра
- **Решение**: Использовать провайдеры с `providedIn: 'root'` или создавать singleton сервисы

**5. Усложнение серверного рендеринга (SSR)**:

- **Проблема**: Ленивая загрузка усложняет настройку и оптимизацию SSR
- **Причины**: Серверу необходимы все маршруты заранее, а ленивая загрузка скрывает их
- **Решение**: Специальная настройка Universal модуля и стратегий предзагрузки для SSR

**6. Возможные проблемы с SEO**:

- **Проблема**: Поисковые системы могут не видеть контент в ленивозагружаемых модулях
- **Решение**: Использование SSR или убедиться, что важный контент находится в eagerly-loaded модулях

**7. Потеря преимуществ с кешированием HTTP/2**:

- **Проблема**: Современные серверы с HTTP/2 могут отправлять все ресурсы параллельно
- **Последствия**: В некоторых случаях разделение на маленькие бандлы менее эффективно
- **Решение**: Тестировать производительность с и без ленивой загрузки

**8. Дополнительные сетевые запросы**:

- **Проблема**: Каждый ленивозагружаемый модуль требует отдельного HTTP-запроса
- **Последствия**: Увеличение времени загрузки из-за задержек между запросами
- **Решение**: Уменьшать количество модулей, группировать функциональность

**9. Трудности с миграцией существующего кода**:

- **Проблема**: Переход от eager-loading к lazy-loading в существующем проекте может быть сложным
- **Причины**: Циклические зависимости, глобальное состояние, проблемы с импортами
- **Решение**: Постепенная миграция, тщательное планирование и тестирование

**10. Проблемы с измерением и мониторингом**:

- **Проблема**: Сложнее отслеживать производительность и ошибки
- **Причины**: Ошибки могут возникать только при определенных навигационных паттернах
- **Решение**: Расширенный мониторинг и инструменты для отслеживания загрузки модулей

### 8. How do you debug lazy loading issues?

Отладка проблем ленивой загрузки может быть сложной задачей из-за динамической природы загрузки модулей. Вот комплексный подход:

**1. Использование инструментов разработчика в браузере**:

- **Network панель**: Отслеживает загрузку JavaScript-файлов для ленивозагружаемых модулей
  ```
  Шаги:
  1. Откройте DevTools (F12)
  2. Перейдите на вкладку Network
  3. Отфильтруйте по JS (*.js)
  4. Наблюдайте за загрузкой чанков при навигации
  ```
- **Performance панель**: Анализирует время, затраченное на загрузку и выполнение кода
  ```
  Шаги:
  1. Откройте вкладку Performance
  2. Нажмите Record
  3. Выполните навигацию к ленивозагружаемому маршруту
  4. Остановите запись и проанализируйте timeline
  ```

**2. Webpack Bundle Analyzer для анализа бандлов**:

- Визуализирует содержимое каждого бандла и помогает выявить дублирование

  ```bash
  # Установка
  npm install --save-dev webpack-bundle-analyzer

  # Использование с Angular CLI
  ng build --stats-json
  npx webpack-bundle-analyzer dist/your-project/stats.json
  ```

**3. Включение трассировки маршрутизации в Angular**:

```typescript
// app-routing.module.ts
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true, // <-- только для разработки!
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

- В консоли будет отображаться детальная информация о событиях маршрутизации

**4. Логирование процесса загрузки модулей**:

```typescript
// Кастомная стратегия с логированием
@Injectable()
export class LoggingPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data["preload"]) {
      console.log(`Preloading: ${route.path}`);
      return load().pipe(
        tap(() => console.log(`Finished preloading: ${route.path}`)),
        catchError((err) => {
          console.error(`Error preloading ${route.path}:`, err);
          return of(null);
        })
      );
    }
    return of(null);
  }
}
```

**5. Проверка конфигурации маршрутов**:

- Убедитесь, что нет циклических зависимостей между модулями
- Проверьте правильность путей в loadChildren

**6. Отладка проблем с Angular-компилятором**:

- **JIT компиляция**: Временно переключитесь на JIT для более подробных сообщений об ошибках
  ```bash
  ng serve --aot=false
  ```
- **Verbose output**: Включите подробный вывод Angular CLI
  ```bash
  ng build --verbose
  ```

**7. Тестирование с разными сетевыми условиями**:

- Используйте Chrome DevTools для симуляции медленного соединения
  ```
  Шаги:
  1. DevTools → Network → Throttling
  2. Выберите "Slow 3G" для тестирования
  ```
- Проверьте поведение приложения при нестабильном соединении

**8. Проверка отсутствия повторных импортов модулей**:

- Убедитесь, что ленивозагружаемые модули не импортируются явно в AppModule
- Проверьте SharedModule на предмет правильного экспорта общих компонентов

**9. Использование индикаторов загрузки для улучшения UX**:

```typescript
// router-events.service.ts
@Injectable({ providedIn: 'root' })
export class RouterEventsService {
  loading$ = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event =>
        event instanceof NavigationStart ||
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ),
      map(event => event instanceof NavigationStart)
    ).subscribe(isLoading => this.loading$.next(isLoading));
  }
}

// В компоненте:
<div *ngIf="routerEvents.loading$ | async" class="loading-indicator">
  Загрузка...
</div>
```

**10. Пользовательские инструменты для отладки Angular Router**:

- **ngx-router-explorer**: Визуализирует структуру маршрутов
- **Angular DevTools**: Расширение Chrome для отладки Angular приложений

**11. Проверка конфигурации Webpack в Angular.json**:

```json
"optimization": true,
"buildOptimizer": true,
"vendorChunk": true,
```

- `vendorChunk: true` создает отдельный бандл для библиотек
- Проверьте, что настройки оптимизации не конфликтуют с ленивой загрузкой

**12. Решение распространенных проблем**:

- **Модуль не загружается**:

  - Проверьте консоль на ошибки
  - Убедитесь, что путь в loadChildren правильный
  - Проверьте экспорты/импорты в модуле

- **Дублирование кода в бандлах**:

  - Переместите общий код в SharedModule
  - Используйте libraryTarget: 'umd' для общих библиотек

- **Компоненты невидимы после ленивой загрузки**:

  - Проверьте, что компоненты объявлены в правильном модуле
  - Убедитесь, что SharedModule правильно экспортирует компоненты

- **Проблемы с провайдерами и сервисами**:
  - Используйте providedIn: 'root' для сервисов, которые должны быть синглтонами
  - Проверьте, что сервисы не предоставляются на разных уровнях

Отладка проблем ленивой загрузки часто требует комбинации нескольких подходов. Важно понимать основы работы Angular Router и системы бандлинга Webpack, а также иметь хорошую стратегию логирования и анализа производительности.

## Modules in Angular

### 1. What is a `Module` in Angular, and what role does it play in an application?

**Модуль (NgModule)** в Angular — это ключевой механизм организации кода, который объединяет связанные компоненты, директивы, сервисы и другие элементы в функциональные блоки. Модуль можно рассматривать как контейнер, который инкапсулирует определенную часть приложения.

**Роли модулей в Angular-приложении**:

**1. Организация кода и управление сложностью**:

- **Группировка функциональных блоков** — логически связанные компоненты, директивы и сервисы собираются вместе
- **Разделение ответственности** — каждый модуль отвечает за определенную часть функциональности
- **Улучшение поддерживаемости** — модульная структура упрощает понимание и изменение кода
- **Масштабируемость** — легче добавлять новую функциональность в виде отдельных модулей

**2. Изоляция и повторное использование**:

- **Инкапсуляция** — модули скрывают внутреннюю реализацию и экспортируют только нужные элементы
- **Переиспользование** — модули можно импортировать в разные части приложения или даже в разные проекты
- **Изоляция функциональности** — позволяет командам работать над отдельными модулями независимо

**3. Управление зависимостями**:

- **Локальные сервисы** — модули могут предоставлять сервисы для своих компонентов
- **Импорт других модулей** — модули используют другие модули для получения необходимой функциональности
- **Injection Scope** — определение области видимости для внедрения зависимостей

**4. Оптимизация производительности**:

- **Ленивая загрузка** — модули могут загружаться по требованию, улучшая начальное время загрузки
- **Компиляция** — Angular компилятор использует информацию из модулей для оптимизации кода
- **Tree-shaking** — механизм для исключения неиспользуемого кода при сборке

**5. Основные типы модулей в типичном Angular-приложении**:

- **Root Module (AppModule)** — корневой модуль, который запускает приложение

  ```typescript
  @NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, SharedModule],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}
  ```

- **Feature Modules** — модули, реализующие конкретные функции приложения

  ```typescript
  @NgModule({
    declarations: [UserListComponent, UserDetailComponent],
    imports: [CommonModule, UserRoutingModule, SharedModule],
    providers: [UserService],
  })
  export class UserModule {}
  ```

- **Shared Modules** — модули с общими компонентами, директивами и пайпами

  ```typescript
  @NgModule({
    declarations: [CardComponent, ButtonComponent, HighlightDirective],
    imports: [CommonModule],
    exports: [CardComponent, ButtonComponent, HighlightDirective],
  })
  export class SharedModule {}
  ```

- **Core Module** — содержит синглтон-сервисы, которые используются во всем приложении

  ```typescript
  @NgModule({
    imports: [CommonModule, HttpClientModule],
    providers: [AuthService, LoggingService, ApiService],
  })
  export class CoreModule {
    // Предотвращает импортирование CoreModule более одного раза
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
      if (parentModule) {
        throw new Error("CoreModule уже загружен. Импортируйте его только в AppModule.");
      }
    }
  }
  ```

- **Routing Modules** — модули, содержащие настройки маршрутизации
  ```typescript
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class ProductRoutingModule {}
  ```

### 2. Can you explain the structure of a module and its metadata?

**Структура модуля Angular** определяется декоратором `@NgModule`, который принимает объект метаданных, определяющий свойства и поведение модуля.

**Основные свойства метаданных @NgModule**:

**1. declarations** — компоненты, директивы и пайпы, принадлежащие этому модулю:

```typescript
declarations: [ProductListComponent, ProductDetailComponent, ProductFilterPipe, QuantitySelectorDirective];
```

- Каждый компонент, директива или пайп должны быть объявлены только в одном модуле
- Объявленные элементы видны только внутри модуля, если не экспортированы
- Нельзя объявлять один и тот же элемент в нескольких модулях

**2. imports** — другие модули, функциональность которых необходима этому модулю:

```typescript
imports: [
  CommonModule, // Базовые директивы Angular
  ReactiveFormsModule, // Поддержка реактивных форм
  RouterModule, // Функциональность маршрутизации
  SharedModule, // Общие компоненты
];
```

- Импорт делает доступными экспортируемые компоненты, директивы и пайпы из других модулей
- Обычно импортируются общие модули и модули с необходимой функциональностью
- Импорт модуля не делает автоматически доступными его провайдеры (кроме модулей с providedIn)

**3. exports** — компоненты, директивы и пайпы, которые должны быть доступны в других модулях:

```typescript
exports: [ProductCardComponent, StarRatingComponent, PricePipe];
```

- Экспортируемые элементы становятся публичным API модуля
- Можно экспортировать элементы из declarations
- Можно также реэкспортировать элементы из импортированных модулей

**4. providers** — сервисы, которые будут доступны через DI этого модуля:

```typescript
providers: [ProductService, { provide: ProductStrategy, useClass: DefaultProductStrategy }, { provide: API_URL, useValue: "https://api.example.com/products" }];
```

- Определяет сервисы, доступные для всего модуля и его дочерних компонентов
- Создает единый экземпляр сервиса на уровне модуля
- В современных приложениях вместо этого часто используется providedIn синтаксис

**5. bootstrap** — корневой компонент, который Angular должен создать и вставить в index.html:

```typescript
bootstrap: [AppComponent];
```

- Используется только в корневом модуле (обычно AppModule)
- Определяет точку входа приложения
- Обычно содержит только один компонент

**6. entryComponents** — компоненты, которые создаются динамически:

```typescript
entryComponents: [ModalComponent, DynamicFormComponent];
```

- Используется для компонентов, создаваемых программно (не через селекторы в шаблонах)
- В Angular 9+ с Ivy рендерером это свойство стало необязательным

**7. schemas** — определяет, какие элементы и свойства разрешены в шаблонах:

```typescript
schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA];
```

- `CUSTOM_ELEMENTS_SCHEMA` — разрешает использование нестандартных элементов (например, веб-компонентов)
- `NO_ERRORS_SCHEMA` — отключает проверку неизвестных элементов и свойств (не рекомендуется для продакшна)

**8. id** — уникальный идентификатор для модуля, используемый в некоторых продвинутых сценариях:

```typescript
id: "ProductModule";
```

**9. jit** — флаг, указывающий, что модуль должен компилироваться с помощью JIT-компиляции:

```typescript
jit: true;
```

**Полный пример структуры модуля**:

```typescript
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { ProductListComponent } from "./product-list.component";
import { ProductDetailComponent } from "./product-detail.component";
import { ProductFormComponent } from "./product-form.component";
import { ProductFilterPipe } from "./product-filter.pipe";
import { QuantitySelectorDirective } from "./quantity-selector.directive";

import { ProductService } from "./product.service";
import { ProductRoutingModule } from "./product-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent, ProductFormComponent, ProductFilterPipe, QuantitySelectorDirective],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, ProductRoutingModule, SharedModule],
  exports: [ProductListComponent, ProductFilterPipe],
  providers: [
    ProductService,
    {
      provide: "PRODUCT_CONFIG",
      useValue: {
        apiEndpoint: "/api/products",
        pageSize: 10,
      },
    },
  ],
})
export class ProductModule {}
```

### 3. How can you separate functionality into different modules and connect them to the main application module?

Разделение приложения на модули — ключевая практика для создания масштабируемых и поддерживаемых Angular-приложений. Вот подробное руководство по разделению функциональности и подключению модулей:

**1. Определение модульной структуры приложения**:

**Типовая структура** современного Angular-приложения обычно включает:

- **AppModule** — корневой модуль приложения
- **CoreModule** — основные синглтон-сервисы, компоненты для оболочки приложения (header, footer)
- **SharedModule** — общие компоненты, директивы и пайпы, используемые во многих местах
- **Feature Modules** — модули с конкретной функциональностью (пользователи, продукты, заказы и т.д.)
- **Widget Modules** — переиспользуемые UI-компоненты (карточки, таблицы, модальные окна)

**2. Создание и организация модулей**:

**A. Создание CoreModule**:

```typescript
// core/core.module.ts
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AuthService } from "./services/auth.service";
import { LoggingService } from "./services/logging.service";
import { ApiService } from "./services/api.service";

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [NavbarComponent, FooterComponent],
  providers: [AuthService, LoggingService, ApiService],
})
export class CoreModule {
  // Предотвращает многократный импорт CoreModule
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error("CoreModule уже загружен. Импортируйте его только в AppModule.");
    }
  }
}
```

**B. Создание SharedModule**:

```typescript
// shared/shared.module.ts
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CardComponent } from "./components/card/card.component";
import { ButtonComponent } from "./components/button/button.component";
import { TruncatePipe } from "./pipes/truncate.pipe";
import { HighlightDirective } from "./directives/highlight.directive";

@NgModule({
  declarations: [CardComponent, ButtonComponent, TruncatePipe, HighlightDirective],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    // Экспортируем собственные компоненты, директивы и пайпы
    CardComponent,
    ButtonComponent,
    TruncatePipe,
    HighlightDirective,
    // Реэкспортируем часто используемые модули
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
```

**C. Создание Feature Module**:

```typescript
// products/products.module.ts
import { NgModule } from "@angular/core";

import { ProductsRoutingModule } from "./products-routing.module";
import { SharedModule } from "../shared/shared.module";

import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { ProductFormComponent } from "./components/product-form/product-form.component";
import { ProductFilterPipe } from "./pipes/product-filter.pipe";

import { ProductService } from "./services/product.service";

@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent, ProductFormComponent, ProductFilterPipe],
  imports: [SharedModule, ProductsRoutingModule],
  providers: [ProductService],
})
export class ProductsModule {}
```

**D. Настройка маршрутизации для Feature Module**:

```typescript
// products/products-routing.module.ts
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { ProductFormComponent } from "./components/product-form/product-form.component";
import { ProductGuard } from "./guards/product.guard";

const routes: Routes = [
  { path: "", component: ProductListComponent },
  { path: "new", component: ProductFormComponent },
  {
    path: ":id",
    component: ProductDetailComponent,
    canActivate: [ProductGuard],
  },
  {
    path: ":id/edit",
    component: ProductFormComponent,
    canActivate: [ProductGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
```

**3. Подключение модулей в корневом AppModule**:

```typescript
// app/app.module.ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { HomeModule } from "./home/home.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular базовые модули
    BrowserModule,
    BrowserAnimationsModule,

    // Собственные модули приложения
    CoreModule, // Импортируем только один раз
    SharedModule, // Общие компоненты для всего приложения
    HomeModule, // Eagerly loaded модуль для главной страницы

    // Маршрутизация (важно, чтобы была последней)
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

**4. Настройка маршрутизации для ленивой загрузки модулей**:

```typescript
// app/app-routing.module.ts
import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./core/components/page-not-found/page-not-found.component";
import { AuthGuard } from "./core/guards/auth.guard";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "products",
    loadChildren: () => import("./products/products.module").then((m) => m.ProductsModule),
  },
  {
    path: "orders",
    loadChildren: () => import("./orders/orders.module").then((m) => m.OrdersModule),
    canActivate: [AuthGuard],
  },
  {
    path: "admin",
    loadChildren: () => import("./admin/admin.module").then((m) => m.AdminModule),
    canActivate: [AuthGuard],
    data: { roles: ["ADMIN"] },
  },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

**5. Практические рекомендации по разделению на модули**:

**A. Когда создавать отдельный модуль:**

- **Логически связанные компоненты** — группируйте компоненты, относящиеся к одной бизнес-функции
- **Переиспользуемая функциональность** — выделяйте в модули код, который можно использовать в разных частях приложения
- **Большие наборы компонентов** — разделяйте большие группы компонентов на модули для лучшей организации
- **Ленивая загрузка** — создавайте отдельные модули для функциональности, которая загружается по требованию

**B. Принципы организации модулей:**

- **Однонаправленные зависимости** — избегайте циклических зависимостей между модулями
- **Видимость** — экспортируйте только компоненты, которые должны использоваться извне
- **Сервисы** — размещайте сервисы в соответствующих модулях или используйте providedIn: 'root'
- **Реэкспорт** — в SharedModule часто реэкспортируют CommonModule, FormsModule и т.д.

**C. Типовая файловая структура для модульного Angular-приложения:**

```
src/
├── app/
│   ├── app.component.ts
│   ├── app.module.ts
│   ├── app-routing.module.ts
│   ├── core/
│   │   ├── core.module.ts
│   │   ├── guards/
│   │   ├── interceptors/
│   │   ├── services/
│   │   └── components/
│   ├── shared/
│   │   ├── shared.module.ts
│   │   ├── components/
│   │   ├── directives/
│   │   └── pipes/
│   ├── features/
│   │   ├── products/
│   │   │   ├── products.module.ts
│   │   │   ├── products-routing.module.ts
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   └── models/
│   │   ├── orders/
│   │   │   ├── orders.module.ts
│   │   │   ├── orders-routing.module.ts
│   │   │   └── ...
│   │   └── admin/
│   │       ├── admin.module.ts
│   │       └── ...
│   └── home/
│       ├── home.module.ts
│       └── home.component.ts
├── assets/
└── environments/
```

**6. Продвинутые техники организации модулей**:

**A. Conditionally Loaded Modules (модули, загружаемые при определенных условиях):**

```typescript
// Загрузка модуля в зависимости от роли пользователя
const routes: Routes = [
  {
    path: "admin",
    loadChildren: () => {
      const user = this.authService.currentUser;
      if (user && user.hasRole("ADMIN")) {
        return import("./admin/admin.module").then((m) => m.AdminModule);
      } else {
        return import("./access-denied/access-denied.module").then((m) => m.AccessDeniedModule);
      }
    },
  },
];
```

**B. Feature Toggles с помощью модулей:**

```typescript
// app.module.ts
let featureModules = [];
if (environment.features.newUI) {
  featureModules.push(NewUIModule);
} else {
  featureModules.push(LegacyUIModule);
}

@NgModule({
  imports: [BrowserModule, ...featureModules, AppRoutingModule],
  // ...
})
export class AppModule {}
```

**C. Dynamic Module Loading (динамическая загрузка модулей):**

```typescript
// Загрузка модуля программно вне маршрутизации
import { Compiler, Injector, NgModuleFactory } from "@angular/core";

@Injectable({ providedIn: "root" })
export class DynamicModuleLoader {
  constructor(private compiler: Compiler, private injector: Injector) {}

  async loadModule(modulePath: string): Promise<any> {
    const moduleOrFactory = await import(modulePath);
    const moduleFactory = moduleOrFactory instanceof NgModuleFactory ? moduleOrFactory : await this.compiler.compileModuleAsync(moduleOrFactory);

    return moduleFactory.create(this.injector).instance;
  }
}
```

**D. Multi-Module Applications (проекты с несколькими приложениями):**

```typescript
// projects/admin-app/src/app/app.module.ts
@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    SharedLibraryModule, // Общая библиотека компонентов
    AdminModule,
  ],
  // ...
})
export class AdminAppModule {}

// projects/customer-app/src/app/app.module.ts
@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    SharedLibraryModule, // Та же общая библиотека
    CustomerModule,
  ],
  // ...
})
export class CustomerAppModule {}
```

Разделение приложения на модули требует тщательного планирования, но приносит значительные преимущества в плане организации кода, производительности и масштабируемости. Правильная модульная структура упрощает совместную работу команд и позволяет эффективно управлять сложностью больших приложений.

## HTTP in Angular

### 1. What is `HttpClientModule`, and why is it important in Angular applications?

**HttpClientModule** — это встроенный модуль Angular, который предоставляет клиент для выполнения HTTP-запросов к серверам. Этот модуль является частью `@angular/common/http` пакета и служит основным механизмом для взаимодействия с внешними API и сервисами.

**Ключевые компоненты HttpClientModule**:

- **HttpClient** — основной сервис для выполнения HTTP-запросов (GET, POST, PUT, DELETE и др.)
- **HttpHeaders** — класс для работы с HTTP-заголовками
- **HttpParams** — класс для управления URL-параметрами
- **HttpInterceptor** — интерфейс для перехвата и модификации HTTP-запросов и ответов
- **HttpResponse** и **HttpErrorResponse** — классы для работы с ответами сервера

**Важность HttpClientModule в Angular-приложениях**:

**1. Основа коммуникации клиент-сервер**:

- Обеспечивает стандартизированный способ взаимодействия с бэкенд-сервисами
- Позволяет приложению получать, создавать, обновлять и удалять данные на сервере
- Является ключевым компонентом для создания динамических приложений

**2. Интеграция с RxJS**:

- HttpClient возвращает Observable вместо Promise, что обеспечивает мощные возможности по работе с потоками данных
- Поддерживает отмену запросов, конкатенацию, объединение и другие операции с потоками
- Позволяет создавать реактивные приложения с асинхронной обработкой данных

**3. Типизация и безопасность**:

- Поддерживает строгую типизацию с помощью дженериков для запросов и ответов
- Упрощает проверку типов на этапе компиляции
- Позволяет создавать четко определенные интерфейсы для данных API

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

this.http.get<User[]>("/api/users").subscribe((users) => (this.users = users));
```

**4. Продвинутая обработка ошибок**:

- Предоставляет механизмы для перехвата и обработки HTTP-ошибок
- Поддерживает единый подход к обработке ошибок во всем приложении
- Позволяет реализовать стратегии повторных попыток, резервного копирования и т.д.

**5. Настраиваемое поведение через интерсепторы**:

- Позволяет модифицировать запросы и ответы с помощью интерсепторов
- Упрощает добавление общих заголовков, обработку ошибок и аутентификацию
- Обеспечивает точки расширения для мониторинга, кеширования и других аспектов

**6. Тестируемость**:

- HttpClientTestingModule предоставляет инструменты для тестирования HTTP-запросов
- Позволяет имитировать ответы сервера без реальных сетевых запросов
- Упрощает написание модульных и интеграционных тестов

**7. Безопасность**:

- Автоматически защищает от XSS-атак при обработке ответов
- Поддерживает XSRF-защиту для предотвращения атак подделки межсайтовых запросов
- Позволяет реализовать проверки безопасности на уровне приложения

**Пример использования HttpClientModule**:

Регистрация в приложении:

```typescript
// В AppModule или CoreModule
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    // другие модули
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### 2. How can you make HTTP requests using Angular's `HttpClient`?

**HttpClient** предоставляет широкий набор методов для выполнения различных типов HTTP-запросов. Вот подробное руководство по основным возможностям:

**1. Базовые HTTP-методы**:

**GET** — получение данных:

```typescript
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private apiUrl = "https://api.example.com/users";

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }
}
```

**POST** — создание новых данных:

```typescript
createUser(user: User): Observable<User> {
  return this.http.post<User>(this.apiUrl, user);
}
```

**PUT** — полное обновление существующих данных:

```typescript
updateUser(id: number, user: User): Observable<User> {
  return this.http.put<User>(`${this.apiUrl}/${id}`, user);
}
```

**PATCH** — частичное обновление данных:

```typescript
partialUpdateUser(id: number, changes: Partial<User>): Observable<User> {
  return this.http.patch<User>(`${this.apiUrl}/${id}`, changes);
}
```

**DELETE** — удаление данных:

```typescript
deleteUser(id: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/${id}`);
}
```

**2. Настройка запросов с помощью параметров**:

**Добавление параметров запроса (query parameters)**:

```typescript
import { HttpParams } from '@angular/common/http';

searchUsers(term: string, page: number = 1, limit: number = 10): Observable<User[]> {
  // Создание объекта HttpParams
  let params = new HttpParams()
    .set('q', term)
    .set('page', page.toString())
    .set('limit', limit.toString());

  // Альтернативный синтаксис
  // let params = new HttpParams({ fromObject: { q: term, page: page.toString(), limit: limit.toString() } });

  return this.http.get<User[]>(`${this.apiUrl}/search`, { params });
}
```

**Настройка HTTP-заголовков**:

```typescript
import { HttpHeaders } from '@angular/common/http';

getUsersWithHeaders(): Observable<User[]> {
  const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${this.authService.getToken()}`)
    .set('X-API-Version', '1.0');

  return this.http.get<User[]>(this.apiUrl, { headers });
}
```

**3. Дополнительные опции запросов**:

**Отслеживание прогресса загрузки**:

```typescript
uploadUserAvatar(userId: number, file: File): Observable<any> {
  const formData = new FormData();
  formData.append('avatar', file, file.name);

  return this.http.post(`${this.apiUrl}/${userId}/avatar`, formData, {
    reportProgress: true,
    observe: 'events'
  }).pipe(
    tap(event => {
      if (event.type === HttpEventType.UploadProgress) {
        const percentDone = event.total ? Math.round(100 * event.loaded / event.total) : 0;
        console.log(`Upload progress: ${percentDone}%`);
      } else if (event.type === HttpEventType.Response) {
        console.log('Upload complete');
      }
    })
  );
}
```

**Получение полного ответа с метаданными**:

```typescript
getUsersWithFullResponse(): Observable<HttpResponse<User[]>> {
  return this.http.get<User[]>(this.apiUrl, {
    observe: 'response'
  });
}

// Использование
this.userService.getUsersWithFullResponse().subscribe(response => {
  console.log('Status code:', response.status);
  console.log('Headers:', response.headers);
  console.log('Body:', response.body);
});
```

**Настройка ожидаемого типа ответа**:

```typescript
downloadUserReport(userId: number): Observable<Blob> {
  return this.http.get(`${this.apiUrl}/${userId}/report`, {
    responseType: 'blob'
  });
}

getTextConfig(): Observable<string> {
  return this.http.get('/assets/config.txt', {
    responseType: 'text'
  });
}
```

**4. Отмена запросов**:

```typescript
import { Subject, takeUntil } from "rxjs";

export class UserComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService
      .getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((users) => (this.users = users));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
```

**5. Объединение и комбинирование запросов**:

**Параллельные запросы**:

```typescript
import { forkJoin } from 'rxjs';

getUserData(userId: number): Observable<[User, Post[], Comment[]]> {
  return forkJoin([
    this.http.get<User>(`/api/users/${userId}`),
    this.http.get<Post[]>(`/api/users/${userId}/posts`),
    this.http.get<Comment[]>(`/api/users/${userId}/comments`)
  ]);
}

// Использование
this.userService.getUserData(123).subscribe(([user, posts, comments]) => {
  this.user = user;
  this.posts = posts;
  this.comments = comments;
});
```

**Последовательные запросы**:

```typescript
import { switchMap } from 'rxjs/operators';

getLatestPostComments(userId: number): Observable<Comment[]> {
  return this.http.get<Post[]>(`/api/users/${userId}/posts?limit=1`)
    .pipe(
      switchMap(posts => {
        if (posts.length === 0) {
          return of([]);
        }
        return this.http.get<Comment[]>(`/api/posts/${posts[0].id}/comments`);
      })
    );
}
```

**6. Обработка ответов и преобразование данных**:

```typescript
import { map, catchError } from 'rxjs/operators';

getFormattedUsers(): Observable<FormattedUser[]> {
  return this.http.get<User[]>(this.apiUrl)
    .pipe(
      map(users => users.map(user => ({
        fullName: `${user.firstName} ${user.lastName}`,
        email: user.email,
        isAdmin: user.role === 'ADMIN',
        lastActive: new Date(user.lastLogin)
      }))),
      catchError(error => {
        console.error('Error fetching users', error);
        return of([]);
      })
    );
}
```

**7. Создание многоразовых конфигураций**:

```typescript
private createAuthHeaders(): HttpHeaders {
  return new HttpHeaders()
    .set('Authorization', `Bearer ${this.authService.getToken()}`);
}

private getRequestOptions(params?: any): object {
  return {
    headers: this.createAuthHeaders(),
    params: params ? new HttpParams({ fromObject: params }) : undefined
  };
}

getProtectedResource(path: string, params?: any): Observable<any> {
  return this.http.get(`${this.apiBaseUrl}${path}`, this.getRequestOptions(params));
}

postProtectedResource(path: string, body: any, params?: any): Observable<any> {
  return this.http.post(`${this.apiBaseUrl}${path}`, body, this.getRequestOptions(params));
}
```

HttpClient в Angular предоставляет мощный и гибкий API для выполнения HTTP-запросов. Интеграция с RxJS позволяет эффективно управлять асинхронными операциями, комбинировать запросы и обрабатывать ответы. Типизация обеспечивает надежность кода, а различные опции позволяют настраивать поведение под конкретные сценарии.

### 3. Can you explain the difference between Observables and Promises in handling HTTP responses?

В Angular для обработки HTTP-ответов можно использовать как Promises, так и Observables, но между ними существуют фундаментальные различия, которые важно понимать для эффективной разработки.

**Ключевые различия между Observables и Promises**:

**1. Парадигма и концептуальная модель**:

**Promise**:

- **Одиночное значение** — предоставляет одно разрешенное или отклоненное значение
- **Базируется на концепции "eventual completion"** — обещание выполнить операцию в будущем
- **Императивный подход** — фокусируется на результате асинхронной операции
- **Часть спецификации ECMAScript** — нативно поддерживается в JavaScript

```javascript
// Пример Promise
fetch("/api/users")
  .then((response) => response.json())
  .then((users) => console.log(users))
  .catch((error) => console.error(error));
```

**Observable**:

- **Поток значений** — может эмитить множество значений с течением времени
- **Базируется на паттерне "observer"** — реактивное представление последовательности событий
- **Декларативный подход** — фокусируется на обработке потока данных
- **Реализуется библиотекой RxJS** — предоставляет мощный API для работы с асинхронными потоками

```typescript
// Пример Observable
this.http
  .get("/api/users")
  .pipe(
    tap((users) => console.log("Original users:", users)),
    map((users) => users.filter((user) => user.active)),
    catchError((error) => {
      console.error(error);
      return of([]);
    })
  )
  .subscribe((activeUsers) => console.log("Active users:", activeUsers));
```

**2. Функциональные возможности**:

**Promise**:

- **Ограниченный функционал** — только `.then()`, `.catch()` и `.finally()`
- **Нет отмены** — once created, a Promise cannot be cancelled
- **Eager execution** — выполняется сразу после создания
- **Не поддерживает операторы трансформации** — ограниченные возможности для манипуляции данными

**Observable**:

- **Богатый набор операторов** — более 100 операторов для трансформации, фильтрации, комбинирования и т.д.
- **Поддержка отмены** — можно отменить подписку в любой момент
- **Lazy execution** — не выполняется до вызова `.subscribe()`
- **Возможность комбинирования** — мощные инструменты для объединения потоков данных

**3. Подписка и отмена**:

**Promise**:

- **Автоматическое выполнение** — начинает выполняться сразу после создания
- **Нет механизма отмены** — нельзя остановить или отменить Promise
- **Одноразовое потребление** — каждый тогда/перехват выполняется один раз

**Observable**:

- **Требует подписки** — не выполняется до вызова `.subscribe()`
- **Управляемый жизненный цикл** — можно отписаться в любой момент
- **Многократное потребление** — можно иметь несколько подписчиков на один Observable

```typescript
// Отмена подписки на Observable
const subscription = this.http.get("/api/users").subscribe((users) => (this.users = users));

// Позже, когда подписка больше не нужна
subscription.unsubscribe();
```

**4. Обработка ошибок**:

**Promise**:

- **Централизованная обработка ошибок** — через `.catch()`
- **Распространение ошибок по цепочке** — ошибка прерывает всю цепочку до ближайшего `.catch()`
- **Невозможность восстановления потока** — после ошибки Promise остается отклоненным

**Observable**:

- **Гибкая обработка ошибок** — через операторы `catchError`, `retry`, `retryWhen`
- **Возможность продолжения потока** — после ошибки поток может продолжиться
- **Стратегии восстановления** — возможность повторных попыток или переключения на резервные данные

```typescript
this.http
  .get("/api/users")
  .pipe(
    // Повтор запроса при ошибке
    retry(3),

    // Или обработка ошибки и продолжение с запасными данными
    catchError((error) => {
      console.error("Error fetching users", error);
      return of([{ id: 0, name: "Default User" }]);
    })
  )
  .subscribe((users) => (this.users = users));
```

**5. Трансформация и комбинирование**:

**Promise**:

- **Ограниченные возможности трансформации** — только через `.then()`
- **Базовое комбинирование** — `Promise.all()`, `Promise.race()`, `Promise.allSettled()`

```javascript
// Комбинирование Promises
Promise.all([fetch("/api/users").then((r) => r.json()), fetch("/api/posts").then((r) => r.json())]).then(([users, posts]) => {
  console.log({ users, posts });
});
```

**Observable**:

- **Мощные операторы трансформации** — `map`, `filter`, `reduce`, `scan`, `groupBy`, и т.д.
- **Широкие возможности комбинирования** — `forkJoin`, `combineLatest`, `merge`, `concat`, `zip`, и т.д.
- **Временные операторы** — `debounceTime`, `throttleTime`, `delay`, `timeout`
- **Специализированные операторы** — для конкретных сценариев использования

```typescript
// Комбинирование Observables
forkJoin([this.http.get("/api/users"), this.http.get("/api/posts")])
  .pipe(
    map(([users, posts]) => {
      // Объединение данных
      return users.map((user) => ({
        ...user,
        posts: posts.filter((post) => post.userId === user.id),
      }));
    })
  )
  .subscribe((usersWithPosts) => (this.usersWithPosts = usersWithPosts));
```

**6. Обработка HTTP-запросов в Angular**:

**HttpClient с Promise**:

```typescript
// Преобразование Observable в Promise
getUsersAsPromise(): Promise<User[]> {
  return this.http.get<User[]>('/api/users').toPromise();
}

// Использование
async loadUsers() {
  try {
    this.users = await this.userService.getUsersAsPromise();
  } catch (error) {
    console.error('Error loading users', error);
  }
}
```

**HttpClient с Observable (стандартный подход)**:

```typescript
// Нативное использование Observable
getUsers(): Observable<User[]> {
  return this.http.get<User[]>('/api/users');
}

// Использование
loadUsers() {
  this.userService.getUsers().pipe(
    takeUntil(this.destroy$) // Автоматическая отмена при уничтожении компонента
  ).subscribe({
    next: users => this.users = users,
    error: error => this.handleError(error),
    complete: () => console.log('Users loaded')
  });
}
```

**7. Практические различия при использовании в Angular**:

**Observable преимущества в Angular**:

- **Встроенная отмена запросов** — предотвращает утечки памяти и нежелательные обновления состояния
- **Интеграция с AsyncPipe** — декларативное связывание с шаблонами без ручного управления подписками
- **Легкость композиции** — упрощает объединение нескольких источников данных
- **Оптимизация производительности** — операторы `distinctUntilChanged`, `debounceTime` для уменьшения запросов

```html
<!-- AsyncPipe с Observable -->
<div *ngIf="users$ | async as users">
  <div *ngFor="let user of users">{{ user.name }}</div>
</div>
```

**Promise ограничения в Angular**:

- **Сложная отмена** — нет простого способа отменить HTTP-запрос при уничтожении компонента
- **Ручное управление подписками** — требуется явное управление жизненным циклом запросов
- **Более сложная композиция** — усложняется при работе с несколькими источниками данных
- **Ограниченные возможности оптимизации** — меньше инструментов для предотвращения излишних запросов

**8. Рекомендации по выбору между Observable и Promise**:

**Использовать Observable, когда**:

- Работаете с потенциально многократными событиями
- Требуется возможность отмены операции
- Нужна богатая функциональность трансформации и комбинирования
- Работаете с Angular компонентами и их жизненным циклом
- Используете реактивные формы и другие реактивные API Angular

**Использовать Promise, когда**:

- Нужно однократное разрешение значения
- Работаете с существующим кодом на Promise
- Используете async/await для более линейного потока кода
- Интегрируете с API, основанными на Promise
- Нет необходимости в отмене операции

В контексте Angular HttpClient, Observable предоставляет больше преимуществ и лучше интегрируется с экосистемой фреймворка, что делает его предпочтительным выбором для большинства HTTP-операций.

### 4. How can you handle errors during HTTP requests in Angular?

Эффективная обработка ошибок при HTTP-запросах является критически важной частью разработки надежных Angular-приложений. Angular и RxJS предоставляют мощные инструменты для обработки различных типов ошибок на разных уровнях приложения.

**Уровни обработки ошибок в Angular**:

**1. Локальная обработка в компоненте или сервисе**:

```typescript
import { Component, OnInit } from "@angular/core";
import { catchError } from "rxjs/operators";
import { of } from "rxjs";
import { UserService } from "./user.service";

@Component({
  selector: "app-user-list",
  template: `
    <div *ngIf="error" class="error-message">
      {{ error }}
    </div>
    <div *ngIf="users.length">
      <ul>
        <li *ngFor="let user of users">{{ user.name }}</li>
      </ul>
    </div>
    <div *ngIf="!users.length && !loading && !error">No users found</div>
    <div *ngIf="loading">Loading...</div>
  `,
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  loading = false;
  error: string | null = null;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.loading = true;
    this.error = null;

    this.userService
      .getUsers()
      .pipe(
        catchError((error) => {
          // Обработка ошибки локально в компоненте
          console.error("Error fetching users", error);

          if (error.status === 404) {
            this.error = "Users not found";
          } else if (error.status === 403) {
            this.error = "You do not have permission to view users";
          } else {
            this.error = "Failed to load users. Please try again later.";
          }

          // Возвращаем пустой массив, чтобы компонент мог продолжить работу
          return of([]);
        })
      )
      .subscribe({
        next: (users) => {
          this.users = users;
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
        },
      });
  }
}
```

**2. Централизованная обработка в сервисе**:

```typescript
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private apiUrl = "https://api.example.com/users";

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      retry(2), // Повторить запрос до 2 раз при ошибке
      catchError(this.handleError("getUsers", []))
    );
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError<User>(`getUser id=${id}`)));
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user).pipe(catchError(this.handleError<User>("createUser")));
  }

  // Обобщенный метод обработки ошибок
  private handleError<T>(operation = "operation", result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      // Логирование ошибки в консоль
      console.error(`${operation} failed:`, error);

      // Определение пользовательского сообщения об ошибке
      let errorMessage = "Unknown error occurred";

      if (error.error instanceof ErrorEvent) {
        // Клиентская ошибка
        errorMessage = `Error: ${error.error.message}`;
      } else {
        // Серверная ошибка
        errorMessage = `Server returned code ${error.status}, error message: ${error.error?.message || error.statusText}`;
      }

      // Можно отправить ошибку в системы мониторинга
      this.logErrorService.logError(errorMessage, error);

      // Возвращаем наблюдаемую с резервным значением или пробрасываем ошибку
      return result !== undefined ? of(result) : throwError(() => new Error(errorMessage));
    };
  }
}
```

**3. Глобальная обработка с помощью HTTP-интерсептора**:

```typescript
import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { NotificationService } from "./notification.service";
import { AuthService } from "./auth.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private notificationService: NotificationService, private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Продолжаем с запросом
    return next.handle(request).pipe(
      // Опционально можно добавить retry для некритичных операций
      // retry(1),

      catchError((error: HttpErrorResponse) => {
        let errorMessage = "";

        if (error.error instanceof ErrorEvent) {
          // Клиентская ошибка
          errorMessage = `Client Error: ${error.error.message}`;
          this.notificationService.showError("Network error occurred. Please check your connection.");
        } else {
          // Серверная ошибка
          switch (error.status) {
            case 0:
              errorMessage = "Network error. Please check your connection.";
              this.notificationService.showError(errorMessage);
              break;

            case 400:
              errorMessage = "Bad request. Please check your input.";
              this.notificationService.showError(errorMessage);
              break;

            case 401:
              errorMessage = "Unauthorized. Please log in again.";
              this.notificationService.showError(errorMessage);
              // Перенаправляем на страницу входа
              this.authService.logout();
              break;

            case 403:
              errorMessage = "Forbidden. You do not have permission to access this resource.";
              this.notificationService.showError(errorMessage);
              break;

            case 404:
              errorMessage = "Resource not found.";
              this.notificationService.showError(errorMessage);
              break;

            case 500:
              errorMessage = "Internal server error. Please try again later.";
              this.notificationService.showError(errorMessage);
              break;

            default:
              errorMessage = `Server Error: ${error.status} - ${error.message}`;
              this.notificationService.showError("An unexpected error occurred. Please try again later.");
          }
        }

        // Логируем ошибку
        console.error(`HTTP Error: ${request.url}`, errorMessage, error);

        // Отправляем ошибку в систему мониторинга
        this.loggingService.logError(errorMessage, {
          url: request.url,
          method: request.method,
          status: error.status,
          error: error.error,
        });

        // Пробрасываем ошибку дальше
        return throwError(() => error);
      })
    );
  }
}
```

**Регистрация интерсептора в модуле**:

```typescript
import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ErrorInterceptor } from "./error.interceptor";

@NgModule({
  imports: [HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
```

**4. Продвинутые техники обработки ошибок**:

**Стратегия повторных попыток с экспоненциальной задержкой**:

```typescript
import { timer, Observable, throwError } from 'rxjs';
import { mergeMap, retryWhen, delayWhen } from 'rxjs/operators';

// Функция для создания стратегии повторных попыток
export function retryWithBackoff<T>(
  maxRetries = 3,
  initialDelay = 1000,
  maxDelay = 30000,
  scalingFactor = 2,
  shouldRetry = (error: any) => true
) {
  return (source: Observable<T>) =>
    source.pipe(
      retryWhen(errors => errors.pipe(
        // Пронумеруем попытки повтора
        scan((attempt, error) => {
          // Проверяем, нужно ли повторять при данной ошибке
          if (!shouldRetry(error) || attempt >= maxRetries) {
            throw error;
          }
          return attempt + 1;
        }, 0),
        // Рассчитываем задержку
        delayWhen(attempt => {
          const delay = Math.min(
            maxDelay,
            initialDelay * Math.pow(scalingFactor, attempt)
          );
          console.log(`Retry attempt ${attempt + 1} with delay ${delay}ms`);
          return timer(delay);
        })
      ))
    );
}

// Использование в сервисе
getUserData(): Observable<User> {
  return this.http.get<User>('/api/user').pipe(
    retryWithBackoff(3, 1000, 10000, 2, error => {
      // Повторяем только при ошибках сети или 500-х ошибках
      return error.status === 0 || (error.status >= 500 && error.status < 600);
    }),
    catchError(error => {
      // Финальная обработка ошибки после всех попыток
      this.notificationService.error('Failed to load user data');
      return throwError(() => error);
    })
  );
}
```

**Обработка ошибок с использованием switchMap для резервного API**:

```typescript
getUserProfile(userId: string): Observable<UserProfile> {
  return this.http.get<UserProfile>(`/api/v2/users/${userId}`).pipe(
    catchError(error => {
      // Если новое API недоступно, переключаемся на старое API
      if (error.status === 404) {
        console.warn('Falling back to legacy API for user profile');
        return this.http.get<LegacyUserProfile>(`/api/v1/users/${userId}`).pipe(
          map(legacyProfile => this.convertToNewProfile(legacyProfile))
        );
      }
      return throwError(() => error);
    })
  );
}
```

**Обработка множественных ошибок с использованием finalize**:

```typescript
import { finalize } from 'rxjs/operators';

loadData() {
  this.loading = true;
  this.error = null;

  this.dataService.getData().pipe(
    catchError(error => {
      this.error = 'Failed to load data';
      return throwError(() => error);
    }),
    finalize(() => {
      // Выполняется всегда, независимо от успеха или ошибки
      this.loading = false;
    })
  ).subscribe({
    next: data => this.data = data,
    error: error => {
      // Дополнительная обработка ошибок, если нужно
      console.error('Error in component:', error);
    }
  });
}
```

**5. Обработка ошибок при множественных параллельных запросах**:

```typescript
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

loadDashboardData() {
  this.loading = true;

  // Оборачиваем каждый запрос в catchError, чтобы предотвратить падение всего forkJoin
  const users$ = this.userService.getUsers().pipe(
    catchError(error => {
      this.errors.users = 'Failed to load users';
      console.error('Users error:', error);
      return of([]); // Возвращаем пустой массив как запасной вариант
    })
  );

  const stats$ = this.statsService.getStats().pipe(
    catchError(error => {
      this.errors.stats = 'Failed to load statistics';
      console.error('Stats error:', error);
      return of(null);
    })
  );

  const notifications$ = this.notificationService.getNotifications().pipe(
    catchError(error => {
      this.errors.notifications = 'Failed to load notifications';
      console.error('Notifications error:', error);
      return of([]);
    })
  );

  forkJoin({
    users: users$,
    stats: stats$,
    notifications: notifications$
  }).pipe(
    finalize(() => this.loading = false)
  ).subscribe(results => {
    this.users = results.users;
    this.stats = results.stats;
    this.notifications = results.notifications;
  });
}
```

**6. Обработка ошибок при последовательных зависимых запросах**:

```typescript
getUserAndPosts(userId: string) {
  this.userService.getUser(userId).pipe(
    catchError(error => {
      this.userError = `Failed to load user: ${error.message}`;
      // Прекращаем цепочку запросов
      return throwError(() => error);
    }),
    switchMap(user => {
      this.user = user;

      // Теперь загружаем посты пользователя
      return this.postService.getPostsByUser(userId).pipe(
        catchError(error => {
          // Обрабатываем ошибку загрузки постов, но не прерываем поток
          this.postsError = `Failed to load posts: ${error.message}`;
          return of([]);  // Продолжаем с пустым массивом постов
        })
      );
    }),
    finalize(() => this.loading = false)
  ).subscribe(posts => {
    this.posts = posts;
  });
}
```

**7. Лучшие практики обработки ошибок в Angular**:

1. **Многоуровневый подход** — комбинируйте обработку ошибок на разных уровнях:

   - Глобальные интерсепторы для общих ошибок (аутентификация, сеть)
   - Сервисы для ошибок, специфичных для бизнес-логики
   - Компоненты для представления ошибок пользователю

2. **Типизация ошибок** — создавайте интерфейсы для различных типов ошибок:

```typescript
interface ApiError {
  code: string;
  message: string;
  details?: string;
}

// Использование
this.http.get<User[]>("/api/users").pipe(
  catchError((error: HttpErrorResponse) => {
    const apiError = error.error as ApiError;
    this.errorMessage = apiError.message || "Unknown error";
    return throwError(() => apiError);
  })
);
```

3. **Информативные сообщения** — обеспечьте понятные пользователю сообщения об ошибках:

```typescript
getErrorMessage(error: HttpErrorResponse): string {
  if (error.error instanceof ErrorEvent) {
    // Клиентская ошибка
    return `Network error: Please check your connection`;
  }

  // Серверная ошибка с пользовательскими кодами
  const apiError = error.error as ApiError;

  switch (apiError.code) {
    case 'RESOURCE_NOT_FOUND':
      return 'The requested item does not exist';
    case 'PERMISSION_DENIED':
      return 'You do not have permission to perform this action';
    case 'VALIDATION_ERROR':
      return `Validation error: ${apiError.details}`;
    default:
      return 'An unexpected error occurred. Please try again later.';
  }
}
```

4. **Стратегии восстановления** — предусмотрите резервные варианты при ошибках:

   - Кеширование предыдущих результатов
   - Использование локальных данных
   - Переключение на альтернативные API
   - Повторные попытки с задержкой

5. **Сохранение состояния приложения** — защитите приложение от сбоев:
   - Регулярно сохраняйте данные формы
   - Используйте хранилище состояния (например, NgRx)
   - Реализуйте механизм автоматического восстановления

Эффективная обработка ошибок HTTP в Angular требует комбинации различных подходов и тщательного планирования. Правильно реализованная стратегия обработки ошибок значительно повышает надежность приложения и улучшает пользовательский опыт, даже когда происходят неизбежные сбои.

### 5. What are some techniques to optimize HTTP requests and handle caching considerations for Angular applications?

Оптимизация HTTP-запросов и эффективное кеширование играют ключевую роль в создании быстрых и отзывчивых Angular-приложений. Рассмотрим комплексный набор техник для повышения производительности работы с сетью:

**1. Встроенное кеширование в Angular HttpClient**:

**Базовый механизм кеширования с shareReplay**:

```typescript
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { shareReplay } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ConfigService {
  private configUrl = "/api/config";
  private config$: Observable<AppConfig> | null = null;

  constructor(private http: HttpClient) {}

  getConfig(): Observable<AppConfig> {
    // Если запрос уже был сделан, используем кешированный результат
    if (!this.config$) {
      this.config$ = this.http.get<AppConfig>(this.configUrl).pipe(
        // shareReplay(1) сохраняет последнее значение и делится им с новыми подписчиками
        shareReplay(1)
      );
    }
    return this.config$;
  }
}
```

**Расширенное кеширование с управлением временем жизни**:

```typescript
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { shareReplay, tap, catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CachingService {
  private cache: Map<string, CacheEntry> = new Map();
  private readonly DEFAULT_TTL = 5 * 60 * 1000; // 5 минут в миллисекундах

  constructor(private http: HttpClient) {}

  get<T>(url: string, options?: any, ttl?: number): Observable<T> {
    const cacheKey = this.createCacheKey(url, options);
    const entry = this.cache.get(cacheKey);
    const now = Date.now();

    // Если есть кешированные данные и они не устарели
    if (entry && entry.expiresAt > now) {
      return of(entry.data as T);
    }

    // Удаляем устаревшие данные
    if (entry) {
      this.cache.delete(cacheKey);
    }

    // Делаем новый запрос и кешируем результат
    return this.http.get<T>(url, options).pipe(
      tap((response) => {
        const expiresAt = now + (ttl || this.DEFAULT_TTL);
        this.cache.set(cacheKey, { data: response, expiresAt });
      }),
      shareReplay(1),
      catchError((error) => {
        // Опционально: использовать устаревшие данные в случае ошибки
        if (entry) {
          console.warn("Using stale data for:", url);
          return of(entry.data as T);
        }
        return throwError(() => error);
      })
    );
  }

  // Очистка кеша
  clearCache(url?: string, options?: any): void {
    if (url) {
      // Удаляем конкретный элемент
      const cacheKey = this.createCacheKey(url, options);
      this.cache.delete(cacheKey);
    } else {
      // Очищаем весь кеш
      this.cache.clear();
    }
  }

  // Инвалидация устаревших записей
  invalidateCache(): void {
    const now = Date.now();
    for (const [key, entry] of this.cache.entries()) {
      if (entry.expiresAt < now) {
        this.cache.delete(key);
      }
    }
  }

  private createCacheKey(url: string, options?: any): string {
    return `${url}:${options ? JSON.stringify(options) : ""}`;
  }
}

interface CacheEntry {
  data: any;
  expiresAt: number;
}
```

**2. Использование HTTP-заголовков для кеширования**:

```typescript
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class HttpCacheService {
  private etags: Map<string, string> = new Map();
  private lastModified: Map<string, string> = new Map();
  private responseCache: Map<string, any> = new Map();

  constructor(private http: HttpClient) {}

  get<T>(url: string): Observable<T> {
    // Подготавливаем заголовки для условных запросов
    let headers = new HttpHeaders();

    if (this.etags.has(url)) {
      headers = headers.set("If-None-Match", this.etags.get(url)!);
    }

    if (this.lastModified.has(url)) {
      headers = headers.set("If-Modified-Since", this.lastModified.get(url)!);
    }

    // Запрашиваем полный ответ с заголовками
    return this.http
      .get<T>(url, {
        headers,
        observe: "response",
      })
      .pipe(
        tap((response: HttpResponse<T>) => {
          // Сохраняем ETag если имеется
          if (response.headers.has("ETag")) {
            this.etags.set(url, response.headers.get("ETag")!);
          }

          // Сохраняем Last-Modified если имеется
          if (response.headers.has("Last-Modified")) {
            this.lastModified.set(url, response.headers.get("Last-Modified")!);
          }

          // Кешируем тело ответа
          if (response.body) {
            this.responseCache.set(url, response.body);
          }
        }),
        map((response: HttpResponse<T>) => {
          // Если сервер вернул 304 Not Modified, используем кешированный ответ
          if (response.status === 304 && this.responseCache.has(url)) {
            return this.responseCache.get(url);
          }
          return response.body!;
        })
      );
  }
}
```

**3. Кеширование с помощью Interceptor**:

```typescript
import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { tap, shareReplay } from "rxjs/operators";

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  private cache = new Map<string, HttpResponse<any>>();
  private readonly CACHEABLE_METHODS = ["GET"];
  private readonly CACHEABLE_URLS = ["/api/config", "/api/countries", "/api/static-data"];

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Кешируем только GET запросы к определенным URL
    if (!this.isCacheable(request)) {
      return next.handle(request);
    }

    const cacheKey = this.createCacheKey(request);
    const cachedResponse = this.cache.get(cacheKey);

    if (cachedResponse) {
      return of(cachedResponse.clone());
    }

    return next.handle(request).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          this.cache.set(cacheKey, event.clone());
        }
      }),
      shareReplay(1)
    );
  }

  private isCacheable(request: HttpRequest<any>): boolean {
    if (!this.CACHEABLE_METHODS.includes(request.method)) {
      return false;
    }

    return this.CACHEABLE_URLS.some((url) => request.url.includes(url));
  }

  private createCacheKey(request: HttpRequest<any>): string {
    return `${request.method}-${request.urlWithParams}`;
  }
}
```

**4. Оптимизация запросов с debounceTime и distinctUntilChanged**:

```typescript
import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";
import { UserService } from "./user.service";

@Component({
  selector: "app-user-search",
  template: `
    <input type="text" [formControl]="searchControl" placeholder="Search users..." />
    <div *ngIf="loading">Loading...</div>
    <ul>
      <li *ngFor="let user of users">{{ user.name }}</li>
    </ul>
  `,
})
export class UserSearchComponent implements OnInit {
  searchControl = new FormControl("");
  users: User[] = [];
  loading = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        // Ждем 300ms после последнего ввода перед отправкой запроса
        debounceTime(300),

        // Не отправляем запрос, если значение не изменилось
        distinctUntilChanged(),

        // Отменяем предыдущий запрос при новом вводе
        switchMap((term) => {
          this.loading = true;
          return this.userService.searchUsers(term);
        })
      )
      .subscribe({
        next: (users) => {
          this.users = users;
          this.loading = false;
        },
        error: (error) => {
          console.error("Error searching users", error);
          this.loading = false;
        },
      });
  }
}
```

**5. Предварительная загрузка данных с Resolvers**:

```typescript
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User> {
  constructor(private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    const userId = route.paramMap.get('id')!;

    return this.userService.getUser(userId).pipe(
      catchError(error => {
        console.error('Error in UserResolver', error);
        return of({ id: '0', name: 'Unknown User' } as User);
      })
    );
  }
}

// Настройка маршрута
const routes: Routes = [
  {
    path: 'user/:id',
    component: UserDetailComponent,
    resolve: {
      user: UserResolver
    }
  }
];

// Использование в компоненте
@Component({ ... })
export class UserDetailComponent implements OnInit {
  user!: User;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Данные уже загружены до активации компонента
    this.user = this.route.snapshot.data['user'];
  }
}
```

**6. Использование IndexedDB для локального кеширования**:

```typescript
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { from, Observable, of } from "rxjs";
import { tap, switchMap, catchError } from "rxjs/operators";
import { openDB, DBSchema, IDBPDatabase } from "idb";

interface AppDBSchema extends DBSchema {
  apiCache: {
    key: string;
    value: {
      data: any;
      timestamp: number;
    };
  };
}

@Injectable({
  providedIn: "root",
})
export class IndexedDBCacheService {
  private db!: Promise<IDBPDatabase<AppDBSchema>>;
  private readonly CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 часа

  constructor(private http: HttpClient) {
    this.initDB();
  }

  private initDB() {
    this.db = openDB<AppDBSchema>("app-cache", 1, {
      upgrade(db) {
        db.createObjectStore("apiCache");
      },
    });
  }

  get<T>(url: string, maxAge = this.CACHE_DURATION): Observable<T> {
    return from(this.getCachedData<T>(url, maxAge)).pipe(
      switchMap((cachedData) => {
        if (cachedData) {
          return of(cachedData);
        }

        return this.http.get<T>(url).pipe(tap((response) => this.cacheData(url, response)));
      }),
      catchError((error) => {
        console.error("Cache error:", error);
        return this.http.get<T>(url);
      })
    );
  }

  private async getCachedData<T>(url: string, maxAge: number): Promise<T | null> {
    const db = await this.db;
    const cachedItem = await db.get("apiCache", url);

    if (!cachedItem) {
      return null;
    }

    const now = Date.now();
    if (now - cachedItem.timestamp > maxAge) {
      // Данные устарели, удаляем их
      await db.delete("apiCache", url);
      return null;
    }

    return cachedItem.data as T;
  }

  private async cacheData(url: string, data: any): Promise<void> {
    const db = await this.db;
    await db.put(
      "apiCache",
      {
        data,
        timestamp: Date.now(),
      },
      url
    );
  }

  async clearCache(url?: string): Promise<void> {
    const db = await this.db;
    if (url) {
      await db.delete("apiCache", url);
    } else {
      await db.clear("apiCache");
    }
  }
}
```

**7. Батчинг (объединение) запросов**:

```typescript
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, forkJoin } from "rxjs";
import { buffer, debounceTime, map, switchMap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class BatchRequestService {
  private userRequestQueue = new Subject<{ id: string; subscriber: Subject<User> }>();

  constructor(private http: HttpClient) {
    // Объединяем запросы, поступающие в течение 50 мс
    this.userRequestQueue
      .pipe(
        buffer(this.userRequestQueue.pipe(debounceTime(50))),
        switchMap((requests) => {
          if (requests.length === 0) {
            return [];
          }

          // Извлекаем уникальные ID для пакетного запроса
          const uniqueIds = [...new Set(requests.map((r) => r.id))];

          return this.http.get<User[]>(`/api/users/batch?ids=${uniqueIds.join(",")}`).pipe(
            map((users) => {
              // Для каждого запроса находим соответствующего пользователя и возвращаем результат
              requests.forEach((request) => {
                const user = users.find((u) => u.id === request.id);
                request.subscriber.next(user || null);
                request.subscriber.complete();
              });
              return users;
            })
          );
        })
      )
      .subscribe();
  }

  getUser(id: string): Observable<User> {
    const subject = new Subject<User>();

    // Добавляем запрос в очередь
    this.userRequestQueue.next({ id, subscriber: subject });

    return subject.asObservable();
  }
}
```

**8. Прогрессивная загрузка данных**:

```typescript
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { scan, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private productsSubject = new BehaviorSubject<Product[]>([]);
  private pageSize = 20;
  private currentPage = 0;
  private isLoading = false;
  private hasMore = true;

  products$ = this.productsSubject.asObservable();

  constructor(private http: HttpClient) {}

  loadMoreProducts(): Observable<Product[]> {
    if (this.isLoading || !this.hasMore) {
      return this.products$;
    }

    this.isLoading = true;
    this.currentPage++;

    return this.http
      .get<ProductResponse>("/api/products", {
        params: {
          page: this.currentPage.toString(),
          size: this.pageSize.toString(),
        },
      })
      .pipe(
        tap((response) => {
          const currentProducts = this.productsSubject.value;
          const newProducts = [...currentProducts, ...response.items];

          this.hasMore = response.hasMore;
          this.isLoading = false;
          this.productsSubject.next(newProducts);
        })
      );
  }

  resetProducts(): void {
    this.currentPage = 0;
    this.hasMore = true;
    this.productsSubject.next([]);
  }
}

interface ProductResponse {
  items: Product[];
  hasMore: boolean;
  total: number;
}
```

**9. Оптимизация графовых запросов с GraphQL**:

```typescript
import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { GET_USER_WITH_DETAILS, GET_USER_BASIC } from "./graphql.queries";

@Injectable({
  providedIn: "root",
})
export class UserGraphQLService {
  constructor(private apollo: Apollo) {}

  // Получение только нужных полей
  getUserBasic(id: string): Observable<User> {
    return this.apollo
      .query<any>({
        query: GET_USER_BASIC,
        variables: { id },
      })
      .pipe(map((result) => result.data.user));
  }

  // Получение всех деталей пользователя
  getUserWithDetails(id: string): Observable<UserWithDetails> {
    return this.apollo
      .query<any>({
        query: GET_USER_WITH_DETAILS,
        variables: { id },
      })
      .pipe(map((result) => result.data.user));
  }
}

// Определение запросов
const GET_USER_BASIC = gql`
  query GetUserBasic($id: ID!) {
    user(id: $id) {
      id
      name
      email
    }
  }
`;

const GET_USER_WITH_DETAILS = gql`
  query GetUserWithDetails($id: ID!) {
    user(id: $id) {
      id
      name
      email
      phone
      company {
        name
        address
      }
      posts {
        id
        title
        createdAt
      }
    }
  }
`;
```

**10. Оптимизация загрузки изображений**:

```typescript
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ImageCacheService {
  private cache = new Map<string, string>();

  constructor(private http: HttpClient) {
    // Инициализация кеша из localStorage при загрузке
    this.loadCacheFromStorage();

    // Сохранение кеша в localStorage перед закрытием
    window.addEventListener("beforeunload", () => {
      this.saveCacheToStorage();
    });
  }

  getImage(url: string): Observable<string> {
    // Проверяем кеш
    if (this.cache.has(url)) {
      return of(this.cache.get(url)!);
    }

    // Загружаем изображение как Blob
    return this.http.get(url, { responseType: "blob" }).pipe(
      tap((blob) => {
        // Конвертируем Blob в Data URL
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64data = reader.result as string;
          this.cache.set(url, base64data);
        };
      }),
      // Преобразуем Blob в URL для немедленного использования
      map((blob) => URL.createObjectURL(blob)),
      catchError((error) => {
        console.error("Error loading image", error);
        return of("assets/placeholder.png"); // Fallback изображение
      })
    );
  }

  private loadCacheFromStorage(): void {
    try {
      const storedCache = localStorage.getItem("imageCacheIndex");
      if (storedCache) {
        const urls = JSON.parse(storedCache) as string[];

        urls.forEach((url) => {
          const cachedImage = localStorage.getItem(`imageCache:${url}`);
          if (cachedImage) {
            this.cache.set(url, cachedImage);
          }
        });
      }
    } catch (error) {
      console.error("Failed to load image cache", error);
    }
  }

  private saveCacheToStorage(): void {
    try {
      // Сохраняем индекс URL
      const urls = Array.from(this.cache.keys());
      localStorage.setItem("imageCacheIndex", JSON.stringify(urls));

      // Сохраняем каждое изображение отдельно
      for (const [url, dataUrl] of this.cache.entries()) {
        localStorage.setItem(`imageCache:${url}`, dataUrl);
      }
    } catch (error) {
      console.error("Failed to save image cache", error);
    }
  }

  clearCache(): void {
    this.cache.clear();
    // Очистка localStorage
    const keys = Object.keys(localStorage);
    keys.forEach((key) => {
      if (key === "imageCacheIndex" || key.startsWith("imageCache:")) {
        localStorage.removeItem(key);
      }
    });
  }
}
```

**11. Сервис сетевого состояния для интеллектуального кеширования**:

```typescript
import { Injectable } from "@angular/core";
import { BehaviorSubject, fromEvent, merge, Observable, of } from "rxjs";
import { map, distinctUntilChanged } from "rxjs/operators";

export enum NetworkStatus {
  ONLINE,
  OFFLINE,
}

@Injectable({
  providedIn: "root",
})
export class NetworkService {
  private networkStatus = new BehaviorSubject<NetworkStatus>(navigator.onLine ? NetworkStatus.ONLINE : NetworkStatus.OFFLINE);

  constructor() {
    // Слушаем события онлайн/оффлайн
    merge(fromEvent(window, "online").pipe(map(() => NetworkStatus.ONLINE)), fromEvent(window, "offline").pipe(map(() => NetworkStatus.OFFLINE))).subscribe((status) => {
      console.log("Network status changed:", status);
      this.networkStatus.next(status);
    });
  }

  get online$(): Observable<boolean> {
    return this.networkStatus.pipe(
      map((status) => status === NetworkStatus.ONLINE),
      distinctUntilChanged()
    );
  }

  get offline$(): Observable<boolean> {
    return this.networkStatus.pipe(
      map((status) => status === NetworkStatus.OFFLINE),
      distinctUntilChanged()
    );
  }

  get isOnline(): boolean {
    return this.networkStatus.value === NetworkStatus.ONLINE;
  }

  get isOffline(): boolean {
    return this.networkStatus.value === NetworkStatus.OFFLINE;
  }
}

// Использование в data service
@Injectable({ providedIn: "root" })
export class SmartCachingService {
  constructor(private http: HttpClient, private networkService: NetworkService, private storage: LocalStorageService) {}

  getData<T>(url: string): Observable<T> {
    // Всегда пытаемся получить из кэша
    const cachedData = this.storage.get<{ data: T; timestamp: number }>(url);

    // Если оффлайн, используем кешированные данные
    if (this.networkService.isOffline) {
      if (cachedData) {
        console.log("Offline: using cached data for", url);
        return of(cachedData.data);
      }
      return throwError(() => new Error("No cached data available and device is offline"));
    }

    // Если онлайн, проверяем свежесть кеша
    if (cachedData && Date.now() - cachedData.timestamp < 5 * 60 * 1000) {
      console.log("Using fresh cached data for", url);
      return of(cachedData.data);
    }

    // Делаем запрос и кешируем результат
    return this.http.get<T>(url).pipe(
      tap((data) => {
        this.storage.set(url, { data, timestamp: Date.now() });
      }),
      catchError((error) => {
        // В случае ошибки сети, используем кеш если доступен
        if (cachedData) {
          console.log("Error occurred, using cached data for", url);
          return of(cachedData.data);
        }
        return throwError(() => error);
      })
    );
  }
}
```

**12. Лучшие практики оптимизации HTTP и кеширования в Angular**:

1. **Выбирайте правильную стратегию кеширования**:

   - Для статичных данных — долгосрочное кеширование (часы/дни)
   - Для часто меняющихся данных — короткий TTL или условные запросы
   - Для пользовательских данных — персонализированное кеширование

2. **Оптимизируйте пересылаемые данные**:

   - Используйте GraphQL для точного указания нужных полей
   - Применяйте фильтрацию на стороне сервера
   - Компрессия ответов (gzip/brotli)
   - Пагинация для больших наборов данных

3. **Используйте многоуровневое кеширование**:

   - In-memory кеширование для часто используемых данных
   - LocalStorage/IndexedDB для более крупных наборов данных
   - HTTP-кеширование с заголовками для оптимизации на уровне браузера

4. **Оптимизируйте частоту запросов**:

   - Используйте debounceTime для поисковых запросов
   - Применяйте throttling для событий прокрутки
   - Отменяйте ненужные запросы при навигации

5. **Реализуйте проактивное кеширование**:

   - Предварительная загрузка вероятных маршрутов
   - Загрузка связанных данных вместе с основными
   - Обновление кеша в фоновом режиме

6. **Обеспечьте устойчивость к ошибкам**:

   - Стратегия stale-while-revalidate (показ устаревших данных при обновлении)
   - Degradation grace (деградация функциональности при проблемах с сетью)
   - Оффлайн-режим с синхронизацией при восстановлении соединения

7. **Мониторинг и оптимизация**:
   - Анализ времени загрузки и размера данных
   - Измерение процента кеш-хитов
   - Профилирование производительности запросов

Оптимизация HTTP-запросов и эффективное кеширование — это важные аспекты производительности Angular-приложений. Правильно реализованные стратегии могут значительно улучшить пользовательский опыт, снизить нагрузку на сервер и обеспечить работу приложения даже при нестабильном соединении.

### 6. What is the purpose of `HttpInterceptor` in Angular, and how does it work?

**HttpInterceptor** — это мощный механизм в Angular, который позволяет перехватывать и модифицировать HTTP-запросы и ответы перед их обработкой. Концептуально это похоже на middleware в серверных фреймворках.

**Основные цели HttpInterceptor**:

**1. Модификация запросов и ответов**:

- Добавление заголовков (например, авторизационных токенов)
- Трансформация тела запроса или ответа
- Изменение URL или параметров запроса
- Стандартизация форматов данных

**2. Централизованная обработка ошибок**:

- Единообразная обработка HTTP-ошибок
- Перенаправление при ошибках аутентификации
- Повторные попытки запросов при сбоях сети
- Логирование ошибок

**3. Функции безопасности**:

- Добавление токенов аутентификации
- Защита от CSRF-атак
- Проверка и обработка JWT-токенов
- Шифрование/дешифрование данных

**4. Мониторинг и логирование**:

- Логирование запросов для отладки
- Сбор метрик производительности
- Отслеживание статусов запросов
- Интеграция с системами мониторинга

**5. Кеширование и оптимизация**:

- Реализация кеширования на стороне клиента
- Предотвращение дублирующихся запросов
- Управление offline-режимом
- Оптимизация сетевого трафика

**Принцип работы HttpInterceptor**:

HttpInterceptor представляет собой класс, реализующий интерфейс `HttpInterceptor`, который имеет единственный метод `intercept()`. Этот метод получает HTTP-запрос и ссылку на следующий обработчик в цепочке интерсепторов.

```typescript
import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ExampleInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Обработка запроса перед отправкой
    console.log("Request intercepted:", request.url);

    // Модификация запроса (запросы иммутабельны, поэтому создаем новый)
    const modifiedRequest = request.clone({
      headers: request.headers.set("X-Custom-Header", "custom-value"),
    });

    // Передача модифицированного запроса следующему обработчику
    return next.handle(modifiedRequest);
  }
}
```

**Жизненный цикл HTTP-запроса с интерсепторами**:

1. **Создание запроса**: Приложение создает HTTP-запрос через HttpClient
2. **Цепочка интерсепторов (запрос)**: Запрос проходит через все зарегистрированные интерсепторы в порядке их регистрации
3. **Отправка запроса**: После прохождения всех интерсепторов запрос отправляется на сервер
4. **Получение ответа**: Сервер возвращает ответ
5. **Цепочка интерсепторов (ответ)**: Ответ проходит через все интерсепторы в обратном порядке
6. **Обработка ответа**: Ответ возвращается в компонент или сервис, который инициировал запрос

**Регистрация интерсепторов**:

Интерсепторы регистрируются в массиве провайдеров через специальный токен `HTTP_INTERCEPTORS`. Важно, что порядок регистрации определяет порядок их применения.

```typescript
import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { AuthInterceptor } from "./auth.interceptor";
import { LoggingInterceptor } from "./logging.interceptor";
import { CachingInterceptor } from "./caching.interceptor";
import { ErrorInterceptor } from "./error.interceptor";

@NgModule({
  imports: [HttpClientModule],
  providers: [
    // Интерсепторы выполняются в порядке регистрации
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
})
export class CoreModule {}
```

**Ключевые особенности HttpInterceptor**:

**1. Иммутабельность запросов**:

- Объекты HttpRequest иммутабельны для безопасности
- Для модификации необходимо создавать новые экземпляры с помощью метода `clone()`

```typescript
// Правильно:
const modifiedRequest = request.clone({
  headers: request.headers.set("Authorization", `Bearer ${token}`),
});
return next.handle(modifiedRequest);

// Неправильно (не будет работать):
request.headers.set("Authorization", `Bearer ${token}`);
return next.handle(request);
```

**2. Модификация тела запроса**:

```typescript
intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  // Добавляем временную метку к каждому запросу
  let modifiedBody = request.body || {};
  if (typeof modifiedBody === 'object') {
    modifiedBody = {
      ...modifiedBody,
      timestamp: new Date().toISOString()
    };
  }

  const modifiedRequest = request.clone({
    body: modifiedBody
  });

  return next.handle(modifiedRequest);
}
```

**3. Фильтрация запросов (обработка только определенных запросов)**:

```typescript
intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  // Применяем интерсептор только к API-запросам
  if (request.url.includes('/api/')) {
    const modifiedRequest = request.clone({
      headers: request.headers.set('API-Version', '1.0')
    });
    return next.handle(modifiedRequest);
  }

  // Пропускаем другие запросы без изменений
  return next.handle(request);
}
```

**4. Модификация ответа**:

```typescript
import { tap, map } from 'rxjs/operators';

intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  return next.handle(request).pipe(
    // Фильтруем только HTTP-ответы (не события прогресса)
    filter(event => event instanceof HttpResponse),

    // Преобразуем ответ
    map((event: HttpResponse<any>) => {
      // Нормализация данных ответа
      if (event.body && event.body.data) {
        return event.clone({
          body: event.body.data
        });
      }
      return event;
    })
  );
}
```

**5. Обработка ошибок с возможностью восстановления**:

```typescript
import { catchError, retry, switchMap } from 'rxjs/operators';

intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  return next.handle(request).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        // Пытаемся обновить токен и повторить запрос
        return this.authService.refreshToken().pipe(
          switchMap(token => {
            // Создаем новый запрос с обновленным токеном
            const updatedRequest = request.clone({
              headers: request.headers.set('Authorization', `Bearer ${token}`)
            });

            // Повторяем запрос с новым токеном
            return next.handle(updatedRequest);
          }),
          catchError(refreshError => {
            // Если не удалось обновить токен, перенаправляем на вход
            this.authService.logout();
            this.router.navigate(['/login']);
            return throwError(() => refreshError);
          })
        );
      }

      // Для других ошибок просто прокидываем их дальше
      return throwError(() => error);
    })
  );
}
```

**6. Интерсептор для отображения индикатора загрузки**:

```typescript
import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { LoaderService } from "./loader.service";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private activeRequests = 0;

  constructor(private loaderService: LoaderService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Увеличиваем счетчик активных запросов
    this.activeRequests++;
    this.loaderService.show();

    return next.handle(request).pipe(
      finalize(() => {
        // Уменьшаем счетчик и скрываем индикатор, если запросов больше нет
        this.activeRequests--;
        if (this.activeRequests === 0) {
          this.loaderService.hide();
        }
      })
    );
  }
}
```

**7. Взаимодействие между интерсепторами**:

Интерсепторы образуют цепочку, где выход одного становится входом для следующего. Порядок выполнения:

1. Запрос проходит через интерсепторы в порядке их регистрации
2. Ответ проходит через интерсепторы в обратном порядке

```
Запрос: Компонент -> ИнтерсепторA -> ИнтерсепторB -> ИнтерсепторC -> Сервер
Ответ:  Сервер -> ИнтерсепторC -> ИнтерсепторB -> ИнтерсепторA -> Компонент
```

Интерсепторы представляют собой мощный инструмент для централизованной обработки HTTP-запросов в Angular-приложениях. Они позволяют реализовать сквозную функциональность, такую как аутентификация, кеширование, логирование и обработка ошибок, в едином месте, избегая дублирования кода и соблюдая принцип DRY (Don't Repeat Yourself).

### 7. In which scenarios would you consider using an interceptor for error handling in an Angular application?

Интерсепторы для обработки ошибок представляют собой мощный инструмент централизованного управления ошибками HTTP-запросов. Рассмотрим ключевые сценарии их применения:

**1. Централизованная обработка общих ошибок HTTP**:

Это наиболее распространенный сценарий использования интерсепторов для обработки ошибок. Вместо дублирования логики обработки в каждом сервисе, можно реализовать единый подход.

```typescript
@Injectable()
export class GlobalErrorInterceptor implements HttpInterceptor {
  constructor(private notificationService: NotificationService, private logger: LoggingService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // Классификация и обработка различных типов ошибок
        let userMessage: string;
        let logLevel: LogLevel = LogLevel.ERROR;

        if (error.error instanceof ErrorEvent) {
          // Клиентские ошибки (сетевые проблемы)
          userMessage = "Проблема с подключением. Проверьте соединение.";
          logLevel = LogLevel.WARN;
        } else {
          // Серверные ошибки
          switch (error.status) {
            case 0:
              userMessage = "Нет соединения с сервером. Пожалуйста, проверьте подключение.";
              break;
            case 400:
              userMessage = "Некорректный запрос. Пожалуйста, проверьте данные.";
              break;
            case 404:
              userMessage = "Запрашиваемый ресурс не найден.";
              break;
            case 500:
              userMessage = "Внутренняя ошибка сервера. Попробуйте позже.";
              break;
            default:
              userMessage = `Произошла ошибка: ${error.status} ${error.statusText}`;
          }
        }

        // Показываем уведомление пользователю
        this.notificationService.showError(userMessage);

        // Логируем подробности ошибки для разработчиков
        this.logger.log(logLevel, "HTTP Error", {
          url: request.url,
          method: request.method,
          status: error.status,
          error: error.error,
          message: error.message,
        });

        // Пробрасываем ошибку дальше
        return throwError(() => error);
      })
    );
  }
}
```

**2. Автоматическая аутентификация при истечении срока действия токена**:

Когда API возвращает ошибку 401 (Unauthorized), интерсептор может автоматически обновить токен и повторить запрос.

```typescript
@Injectable()
export class AuthErrorInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private authService: AuthService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          // Проверяем, это запрос на обновление токена уже неудачен?
          if (request.url.includes("refresh-token")) {
            // Если сам запрос обновления токена вернул 401, значит нужен полный логаут
            this.authService.logout();
            this.router.navigate(["/login"]);
            return throwError(() => error);
          }

          return this.handle401Error(request, next);
        }

        return throwError(() => error);
      })
    );
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.authService.refreshToken().pipe(
        switchMap((token) => {
          this.isRefreshing = false;
          this.refreshTokenSubject.next(token);

          // Создаем новый запрос с новым токеном
          const updatedRequest = this.addTokenToRequest(request, token);
          return next.handle(updatedRequest);
        }),
        catchError((error) => {
          this.isRefreshing = false;

          // Если не удалось обновить токен, выполняем логаут
          this.authService.logout();
          this.router.navigate(["/login"]);

          return throwError(() => error);
        })
      );
    } else {
      // Если уже идет процесс обновления токена, ждем его завершения
      return this.refreshTokenSubject.pipe(
        filter((token) => token !== null),
        take(1),
        switchMap((token) => {
          const updatedRequest = this.addTokenToRequest(request, token);
          return next.handle(updatedRequest);
        })
      );
    }
  }

  private addTokenToRequest(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      headers: request.headers.set("Authorization", `Bearer ${token}`),
    });
  }
}
```

**3. Стратегия повторных попыток для нестабильных сетей**:

Для мобильных приложений или нестабильных сетей полезно автоматически повторять запросы при временных сбоях.

```typescript
@Injectable()
export class RetryInterceptor implements HttpInterceptor {
  constructor(private networkService: NetworkService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      // Применяем стратегию повторных попыток только для GET запросов
      switchMap((event) => {
        // Пропускаем все успешные события
        return of(event);
      }),
      catchError((error: HttpErrorResponse) => {
        // Повторяем только определенные типы ошибок
        if (this.isRetryable(request, error)) {
          return this.retryWithBackoff(request, next);
        }

        // Остальные ошибки просто пробрасываем
        return throwError(() => error);
      })
    );
  }

  private isRetryable(request: HttpRequest<any>, error: HttpErrorResponse): boolean {
    // Повторяем только GET запросы
    if (request.method !== "GET") {
      return false;
    }

    // Повторяем при ошибках сети или 5xx ошибках сервера
    return error.status === 0 || (error.status >= 500 && error.status < 600);
  }

  private retryWithBackoff(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return of(null).pipe(
      delay(1000), // Начальная задержка 1 секунда
      switchMap(() => {
        console.log(`Retrying ${request.url}`);
        return next.handle(request).pipe(
          // Рекурсивно повторяем до 3 раз с экспоненциальной задержкой
          retryWhen((errors) =>
            errors.pipe(
              scan((count, error) => {
                if (count >= 3) {
                  throw error;
                }
                console.log(`Retry attempt ${count + 1} for ${request.url}`);
                return count + 1;
              }, 0),
              delayWhen((count) => timer(Math.pow(2, count) * 1000))
            )
          )
        );
      })
    );
  }
}
```

**4. Обработка оффлайн-режима и синхронизация**:

Для приложений, которые должны работать в оффлайне, интерсептор может перенаправлять запросы в локальное хранилище.

```typescript
@Injectable()
export class OfflineInterceptor implements HttpInterceptor {
  constructor(private networkService: NetworkService, private offlineStorage: OfflineStorageService, private syncQueue: SyncQueueService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Проверяем подключение к сети
    if (!this.networkService.isOnline) {
      // Для GET запросов - пытаемся взять из кеша
      if (request.method === "GET") {
        return from(this.offlineStorage.getFromCache(request)).pipe(
          map((data) => {
            if (!data) {
              throw new Error("No cached data available");
            }

            // Создаем искусственный HTTP-ответ из кешированных данных
            return new HttpResponse({
              body: data,
              status: 200,
              statusText: "OK (cached)",
              headers: new HttpHeaders({ "X-Data-Source": "offline-cache" }),
            });
          }),
          catchError((error) => {
            // Если в кеше ничего нет, возвращаем ошибку
            return throwError(
              () =>
                new HttpErrorResponse({
                  error: "Offline mode: No cached data available",
                  status: 0,
                  statusText: "Offline",
                  url: request.url,
                })
            );
          })
        );
      } else {
        // Для модифицирующих запросов (POST, PUT, DELETE) - добавляем в очередь синхронизации
        this.syncQueue.addToQueue(request);

        // Возвращаем "оптимистичный" ответ
        return of(
          new HttpResponse({
            status: 202,
            statusText: "Accepted Offline",
            body: { success: true, offlineQueued: true },
          })
        );
      }
    }

    // Если онлайн, просто выполняем запрос
    return next.handle(request).pipe(
      // Кешируем успешные GET-ответы для оффлайн-режима
      tap((event) => {
        if (event instanceof HttpResponse && request.method === "GET") {
          this.offlineStorage.cacheResponse(request, event.body);
        }
      })
    );
  }
}
```

**5. Логирование и анализ ошибок**:

Для целей отладки, мониторинга и аналитики, интерсептор может отправлять подробную информацию об ошибках в системы логирования.

```typescript
@Injectable()
export class ErrorReportingInterceptor implements HttpInterceptor {
  constructor(private errorReportingService: ErrorReportingService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const startTime = Date.now();
    let requestId = this.generateRequestId();

    // Добавляем ID запроса для корреляции с серверными логами
    const trackedRequest = request.clone({
      headers: request.headers.set("X-Request-ID", requestId),
    });

    return next.handle(trackedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        const duration = Date.now() - startTime;
        const errorContext = {
          requestId,
          url: request.url,
          method: request.method,
          headers: this.sanitizeHeaders(request.headers),
          body: this.sanitizeBody(request.body),
          duration,
          status: error.status,
          statusText: error.statusText,
          error: error.error,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          appVersion: environment.version,
        };

        // Отправляем отчет об ошибке в мониторинговые системы
        this.errorReportingService.reportError("HttpError", error.message, errorContext);

        // Добавляем пометку, что ошибка уже была зарегистрирована
        const processedError = new HttpErrorResponse({
          error: error.error,
          headers: error.headers,
          status: error.status,
          statusText: error.statusText,
          url: error.url || undefined,
        });
        (processedError as any).__reported = true;

        return throwError(() => processedError);
      })
    );
  }

  private generateRequestId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }

  private sanitizeHeaders(headers: HttpHeaders): any {
    const sanitized = {};
    headers.keys().forEach((key) => {
      // Скрываем чувствительные заголовки
      if (key.toLowerCase() === "authorization") {
        sanitized[key] = "Bearer [REDACTED]";
      } else {
        sanitized[key] = headers.getAll(key);
      }
    });
    return sanitized;
  }

  private sanitizeBody(body: any): any {
    if (!body) return body;

    // Создаем копию для безопасного редактирования
    const sanitized = JSON.parse(JSON.stringify(body));

    // Скрываем чувствительные поля
    const sensitiveFields = ["password", "token", "credit_card", "ssn"];
    this.recursivelyRedact(sanitized, sensitiveFields);

    return sanitized;
  }

  private recursivelyRedact(obj: any, sensitiveFields: string[]): void {
    if (typeof obj !== "object" || obj === null) return;

    Object.keys(obj).forEach((key) => {
      if (sensitiveFields.includes(key.toLowerCase())) {
        obj[key] = "[REDACTED]";
      } else if (typeof obj[key] === "object" && obj[key] !== null) {
        this.recursivelyRedact(obj[key], sensitiveFields);
      }
    });
  }
}
```

**6. Управление зависимыми запросами при ошибках**:

Интерсептор может отменять зависимые запросы, если основной запрос завершился с ошибкой.

```typescript
@Injectable()
export class DependentRequestInterceptor implements HttpInterceptor {
  private errorSubject = new Subject<string>();
  public errors$ = this.errorSubject.asObservable().pipe(shareReplay(1), debounceTime(100));

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Проверяем, является ли запрос зависимым
    const dependsOn = request.headers.get("X-Depends-On");

    if (dependsOn) {
      // Для зависимых запросов подписываемся на поток ошибок
      return this.errors$.pipe(
        // Ждем 100мс, проверяя, не произошла ли ошибка в зависимостях
        take(1),
        timeout(100),
        catchError((timeoutError) => {
          // Если не было ошибок в зависимостях, выполняем запрос
          return next.handle(request);
        }),
        // Если была ошибка в зависимостях, отменяем запрос
        switchMap((errorKey) => {
          if (errorKey === dependsOn) {
            return throwError(() => new Error(`Canceled due to error in dependent request: ${dependsOn}`));
          }
          return next.handle(request);
        })
      );
    }

    // Для независимых запросов просто обрабатываем и публикуем ошибки
    return next.handle(request).pipe(
      catchError((error) => {
        // Публикуем ошибку для зависимых запросов
        if (request.headers.has("X-Request-Key")) {
          this.errorSubject.next(request.headers.get("X-Request-Key")!);
        }
        return throwError(() => error);
      })
    );
  }
}
```

**7. Изоляция ошибок в микрофронтендах**:

В приложениях с микрофронтенд-архитектурой нужно изолировать ошибки, чтобы сбой в одном модуле не влиял на другие.

```typescript
@Injectable()
export class MicrofrontendErrorIsolationInterceptor implements HttpInterceptor {
  constructor(private errorBoundaryService: ErrorBoundaryService, private moduleRegistry: ModuleRegistryService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Определяем, к какому микрофронтенду относится запрос
    const moduleName = this.identifyModuleFromRequest(request);

    return next.handle(request).pipe(
      catchError((error) => {
        // Регистрируем ошибку в контексте конкретного модуля
        this.errorBoundaryService.registerError(moduleName, error);

        // Проверяем, критична ли ошибка для всего приложения
        if (this.isCriticalError(error)) {
          // Для критичных ошибок уведомляем все модули
          this.moduleRegistry.notifyError(error);
          return throwError(() => error);
        }

        // Для некритичных ошибок создаем запасной ответ
        if (this.canProvideDefaultResponse(request)) {
          const fallbackResponse = this.createFallbackResponse(moduleName, request);
          return of(fallbackResponse);
        }

        return throwError(() => error);
      })
    );
  }

  private identifyModuleFromRequest(request: HttpRequest<any>): string {
    // Определяем модуль по URL или заголовкам
    const moduleName = request.headers.get("X-Module-Name");
    if (moduleName) {
      return moduleName;
    }

    // Определение по URL
    const url = request.url;
    for (const module of this.moduleRegistry.getModules()) {
      if (url.includes(module.apiPrefix)) {
        return module.name;
      }
    }

    return "core";
  }

  private isCriticalError(error: HttpErrorResponse): boolean {
    // Проверка на критические ошибки
    return error.status === 401 || error.status === 403 || error.status === 0;
  }

  private canProvideDefaultResponse(request: HttpRequest<any>): boolean {
    // Проверка, можем ли предоставить запасной ответ
    return request.method === "GET" && !request.headers.has("X-No-Fallback");
  }

  private createFallbackResponse(moduleName: string, request: HttpRequest<any>): HttpResponse<any> {
    // Получаем запасные данные для модуля
    const fallbackData = this.moduleRegistry.getFallbackData(moduleName, request.url);

    return new HttpResponse({
      body: fallbackData,
      status: 200,
      statusText: "OK (fallback)",
      headers: new HttpHeaders({ "X-Fallback": "true" }),
    });
  }
}
```

**8. Обработка ошибок в мультитенантных приложениях**:

В приложениях с поддержкой нескольких клиентов (тенантов) интерсептор может применять разные стратегии обработки ошибок.

```typescript
@Injectable()
export class MultiTenantErrorInterceptor implements HttpInterceptor {
  constructor(private tenantService: TenantService, private notificationService: NotificationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // Получаем текущего клиента
        const tenant = this.tenantService.getCurrentTenant();

        // Получаем настройки обработки ошибок для клиента
        const errorConfig = tenant.errorHandlingConfig;

        // Применяем специфические для клиента правила обработки ошибок
        switch (error.status) {
          case 400:
            this.handleBadRequest(error, errorConfig);
            break;
          case 404:
            this.handleNotFound(error, errorConfig);
            break;
          case 500:
            this.handleServerError(error, errorConfig);
            break;
          default:
            this.handleGenericError(error, errorConfig);
        }

        // Пробрасываем оригинальную ошибку или кастомную
        if (errorConfig.transformErrors) {
          const transformedError = this.transformError(error, errorConfig);
          return throwError(() => transformedError);
        }

        return throwError(() => error);
      })
    );
  }

  private handleBadRequest(error: HttpErrorResponse, config: TenantErrorConfig): void {
    if (config.logValidationErrors) {
      this.logError("Validation Error", error);
    }

    if (config.showValidationMessages) {
      const errorMessage = this.extractValidationMessage(error, config);
      this.notificationService.showError(errorMessage, config.validationErrorTitle);
    }
  }

  private handleNotFound(error: HttpErrorResponse, config: TenantErrorConfig): void {
    if (config.redirectOnNotFound) {
      this.router.navigate([config.notFoundRedirectPath || "/not-found"]);
    }

    if (config.showNotFoundMessage) {
      this.notificationService.showWarning(config.notFoundMessage || "The requested resource was not found.", config.notFoundTitle || "Not Found");
    }
  }

  private handleServerError(error: HttpErrorResponse, config: TenantErrorConfig): void {
    if (config.automaticRetryOnServerError) {
      // Логика повторных попыток...
    }

    if (config.showServerErrorMessage) {
      const contactInfo = config.supportContactInfo ? `Please contact support at ${config.supportContactInfo}` : "";

      this.notificationService.showError(`${config.serverErrorMessage || "An unexpected server error occurred."} ${contactInfo}`, config.serverErrorTitle || "Server Error");
    }
  }

  private extractValidationMessage(error: HttpErrorResponse, config: TenantErrorConfig): string {
    // Извлекаем сообщения об ошибках в зависимости от формата, который использует клиент
    if (config.validationErrorFormat === "flat") {
      return error.error.message || "Validation error occurred";
    } else if (config.validationErrorFormat === "field-errors") {
      const fieldErrors = error.error.errors || {};
      return Object.values(fieldErrors).join(". ") || "Please check the form for errors";
    }

    return "Please check your input and try again";
  }

  private transformError(error: HttpErrorResponse, config: TenantErrorConfig): any {
    // Трансформируем ошибку в соответствии с требованиями клиента
    if (config.useCustomErrorFormat) {
      return {
        code: error.status,
        message: this.getCustomErrorMessage(error, config),
        timestamp: new Date().toISOString(),
        tenantId: config.tenantId,
        requestId: error.headers?.get("X-Request-ID") || undefined,
      };
    }

    return error;
  }

  private getCustomErrorMessage(error: HttpErrorResponse, config: TenantErrorConfig): string {
    // Возвращаем сообщение в соответствии с настройками клиента
    const defaultMessages = config.defaultErrorMessages || {};
    return defaultMessages[error.status] || error.message;
  }
}
```

Интерсепторы для обработки ошибок представляют собой гибкий и мощный инструмент для централизованного управления ошибками HTTP в Angular-приложениях. Они позволяют реализовать единообразную обработку ошибок, улучшить пользовательский опыт, обеспечить логирование и отладку, а также реализовать сложные сценарии восстановления после ошибок.

### 8. How do you handle authentication and authorization with HTTP interceptors?

HTTP-интерсепторы предоставляют мощный механизм для централизованной обработки аутентификации и авторизации в Angular-приложениях. Они позволяют единообразно управлять безопасностью всех HTTP-запросов, не дублируя код в каждом сервисе.

**Основные аспекты обработки аутентификации и авторизации через интерсепторы**:

**1. Добавление токенов аутентификации к запросам**:

```typescript
import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Получаем текущий токен из сервиса аутентификации
    const token = this.authService.getToken();

    // Пропускаем запросы к публичным API или запросы аутентификации
    if (this.isPublicRequest(request)) {
      return next.handle(request);
    }

    // Если есть токен, добавляем его к запросу
    if (token) {
      // Клонируем запрос, так как оригинальный запрос иммутабелен
      const authRequest = request.clone({
        headers: request.headers.set("Authorization", `Bearer ${token}`),
      });

      // Передаем модифицированный запрос следующему обработчику
      return next.handle(authRequest);
    }

    // Если токена нет, просто передаем запрос дальше
    return next.handle(request);
  }

  private isPublicRequest(request: HttpRequest<any>): boolean {
    // Логика определения публичных запросов
    const publicUrls = ["/api/auth/login", "/api/auth/register", "/api/public"];

    return publicUrls.some((url) => request.url.includes(url));
  }
}
```

**2. Перехват и обработка 401/403 ошибок**:

```typescript
import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError, BehaviorSubject } from "rxjs";
import { catchError, filter, take, switchMap } from "rxjs/operators";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Injectable()
export class AuthErrorInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private authService: AuthService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          // Обработка ошибок аутентификации
          if (error.status === 401) {
            return this.handle401Error(request, next);
          }

          // Обработка ошибок авторизации
          if (error.status === 403) {
            return this.handle403Error(error);
          }
        }

        // Пробрасываем остальные ошибки
        return throwError(() => error);
      })
    );
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Проверяем, не является ли это запросом на обновление токена
    if (request.url.includes("refresh-token")) {
      // Если сам запрос обновления токена неудачен, делаем полный логаут
      this.authService.logout();
      this.router.navigate(["/login"]);
      return throwError(() => new Error("Session expired. Please login again."));
    }

    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.authService.refreshToken().pipe(
        switchMap((token) => {
          this.isRefreshing = false;
          this.refreshTokenSubject.next(token);

          // Клонируем оригинальный запрос с новым токеном
          const authReq = request.clone({
            headers: request.headers.set("Authorization", `Bearer ${token}`),
          });

          // Повторяем оригинальный запрос с новым токеном
          return next.handle(authReq);
        }),
        catchError((error) => {
          this.isRefreshing = false;

          // Если не удалось обновить токен, делаем логаут
          this.authService.logout();
          this.router.navigate(["/login"]);

          return throwError(() => new Error("Session expired. Please login again."));
        })
      );
    } else {
      // Если процесс обновления токена уже идет, ждем завершения
      return this.refreshTokenSubject.pipe(
        filter((token) => token !== null),
        take(1),
        switchMap((token) => {
          // Клонируем запрос с новым токеном
          const authReq = request.clone({
            headers: request.headers.set("Authorization", `Bearer ${token}`),
          });

          // Повторяем запрос с новым токеном
          return next.handle(authReq);
        })
      );
    }
  }

  private handle403Error(error: HttpErrorResponse): Observable<HttpEvent<any>> {
    // Логируем информацию о доступе
    console.error("Access denied:", error);

    // Перенаправляем на страницу "Доступ запрещен"
    this.router.navigate(["/forbidden"], {
      queryParams: { returnUrl: this.router.url },
    });

    // Возвращаем более информативную ошибку
    return throwError(() => new Error("You do not have permission to access this resource"));
  }
}
```

**3. Управление сессией и автоматический выход**:

```typescript
@Injectable()
export class SessionInterceptor implements HttpInterceptor {
  private readonly SESSION_HEADER = "X-Session-Info";

  constructor(private authService: AuthService, private notificationService: NotificationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((event) => {
        // Проверяем только HTTP-ответы
        if (event instanceof HttpResponse) {
          // Обновляем информацию о сессии, если она есть в заголовках
          if (event.headers.has(this.SESSION_HEADER)) {
            const sessionInfo = JSON.parse(atob(event.headers.get(this.SESSION_HEADER)!));

            // Обновляем время сессии
            if (sessionInfo.expiresAt) {
              this.authService.updateSessionExpiration(sessionInfo.expiresAt);
            }

            // Показываем предупреждение, если сессия скоро истечет
            if (sessionInfo.expiresIn && sessionInfo.expiresIn < 300) {
              // Меньше 5 минут
              this.notificationService.warning(`Your session will expire in ${Math.ceil(sessionInfo.expiresIn / 60)} minutes. ` + `Would you like to extend it?`, "Session Expiring Soon", {
                action: "Extend",
                duration: 10000,
                onAction: () => this.authService.extendSession(),
              });
            }
          }
        }
      }),
      catchError((error) => {
        // Проверяем на ошибки сессии
        if (error instanceof HttpErrorResponse) {
          // Обрабатываем особые коды ошибок для управления сессией
          if (error.status === 440) {
            // Кастомный код "Session Timeout"
            this.authService.logout();
            this.notificationService.error("Your session has expired");
            this.router.navigate(["/login"]);
            return throwError(() => new Error("Session expired"));
          }

          // Обрабатываем случай одновременного входа с другого устройства
          if (error.status === 409 && error.error?.code === "SESSION_CONFLICT") {
            this.authService.logout();
            this.notificationService.error("Your account has been logged in from another device", "Session Conflict");
            this.router.navigate(["/login"]);
            return throwError(() => new Error("Session conflict"));
          }
        }

        return throwError(() => error);
      })
    );
  }
}
```

**4. Реализация CSRF/XSRF защиты**:

Angular уже имеет встроенную защиту от CSRF-атак через `HttpClientXsrfModule`, но иногда требуется кастомная реализация.

```typescript
@Injectable()
export class CsrfInterceptor implements HttpInterceptor {
  constructor(private cookieService: CookieService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Пропускаем GET-запросы (они должны быть идемпотентными)
    if (request.method === "GET") {
      return next.handle(request);
    }

    // Получаем CSRF-токен из cookie
    const csrfToken = this.cookieService.get("XSRF-TOKEN");

    if (csrfToken) {
      // Клонируем запрос с добавленным заголовком
      const modifiedRequest = request.clone({
        headers: request.headers.set("X-XSRF-TOKEN", csrfToken),
      });

      return next.handle(modifiedRequest);
    }

    // Если токена нет, сначала запрашиваем его с сервера
    if (!request.url.includes("/api/csrf-token")) {
      return this.getCsrfToken().pipe(
        switchMap((token) => {
          const modifiedRequest = request.clone({
            headers: request.headers.set("X-XSRF-TOKEN", token),
          });

          return next.handle(modifiedRequest);
        })
      );
    }

    // Передаем запрос без модификации (например, для запроса CSRF-токена)
    return next.handle(request);
  }

  private getCsrfToken(): Observable<string> {
    // Запрашиваем новый CSRF-токен с сервера
    return this.http.get("/api/csrf-token", { responseType: "text" }).pipe(
      map((token) => {
        this.cookieService.set("XSRF-TOKEN", token);
        return token;
      })
    );
  }
}
```

**5. Управление доступом на основе ролей**:

```typescript
@Injectable()
export class RoleBasedAuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Извлекаем требуемую роль из метаданных запроса или ссылок API
    const requiredRole = this.extractRequiredRole(request);

    if (requiredRole) {
      // Проверяем роль пользователя
      const userRoles = this.authService.getUserRoles();

      if (!userRoles.includes(requiredRole)) {
        // Перенаправляем на страницу "доступ запрещен"
        this.router.navigate(["/forbidden"]);

        // Возвращаем ошибку
        return throwError(
          () =>
            new HttpErrorResponse({
              error: `Access denied: Required role '${requiredRole}'`,
              status: 403,
              statusText: "Forbidden",
              url: request.url,
            })
        );
      }
    }

    // Пропускаем запрос, если проверка пройдена или роль не требуется
    return next.handle(request);
  }

  private extractRequiredRole(request: HttpRequest<any>): string | null {
    // Извлекаем роль из заголовка (установленного сервисом)

    if (request.headers.has("X-Required-Role")) {
      return request.headers.get("X-Required-Role");
    }

    // Или определяем роль на основе endpoint URL
    const adminPatterns = ["/api/admin/", "/api/manage/users"];
    if (adminPatterns.some((pattern) => request.url.includes(pattern))) {
      return "ADMIN";
    }

    const moderatorPatterns = ["/api/moderate/", "/api/manage/content"];
    if (moderatorPatterns.some((pattern) => request.url.includes(pattern))) {
      return "MODERATOR";
    }

    return null; // Роль не требуется
  }
}
```

**6. Многофакторная аутентификация (MFA)**:

```typescript
@Injectable()
export class MfaInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private mfaService: MfaService, private dialog: MatDialog) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error) => {
        // Проверяем, требуется ли MFA для данного запроса
        if (error instanceof HttpErrorResponse && error.status === 403 && error.error?.code === "MFA_REQUIRED") {
          // Открываем диалоговое окно для MFA
          return this.showMfaDialog().pipe(
            switchMap((mfaCode) => {
              // Повторяем запрос с MFA кодом
              const mfaRequest = request.clone({
                headers: request.headers.set("X-MFA-Code", mfaCode),
              });

              return next.handle(mfaRequest);
            }),
            catchError((mfaError) => {
              // Обрабатываем ошибки MFA процесса
              if (mfaError === "CANCELED") {
                return throwError(() => new Error("MFA verification was canceled"));
              }

              return throwError(() => mfaError);
            })
          );
        }

        // Пробрасываем остальные ошибки
        return throwError(() => error);
      })
    );
  }

  private showMfaDialog(): Observable<string> {
    // Открываем диалоговое окно для ввода MFA
    const dialogRef = this.dialog.open(MfaDialogComponent, {
      width: "350px",
      disableClose: true,
      data: {
        phone: this.authService.getCurrentUser()?.phone,
        mfaType: this.mfaService.getPreferredMfaType(),
      },
    });

    // Получаем код из диалога
    return dialogRef.afterClosed();
  }
}
```

**7. API с разными схемами аутентификации**:

```typescript
@Injectable()
export class MultiAuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private apiKeyService: ApiKeyService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Определяем схему аутентификации по URL
    const authScheme = this.getAuthScheme(request.url);

    let modifiedRequest: HttpRequest<any>;

    switch (authScheme) {
      case "JWT":
        // Стандартная JWT аутентификация
        const jwtToken = this.authService.getToken();
        if (jwtToken) {
          modifiedRequest = request.clone({
            headers: request.headers.set("Authorization", `Bearer ${jwtToken}`),
          });
        } else {
          // Если нет токена для защищенного ресурса
          return throwError(() => new Error("Authentication required"));
        }
        break;

      case "API_KEY":
        // API ключ для внешних сервисов
        const apiKey = this.apiKeyService.getApiKey();
        modifiedRequest = request.clone({
          headers: request.headers.set("X-API-Key", apiKey),
        });
        break;

      case "BASIC":
        // Basic аутентификация
        const credentials = this.authService.getBasicCredentials();
        if (credentials) {
          modifiedRequest = request.clone({
            headers: request.headers.set("Authorization", `Basic ${btoa(`${credentials.username}:${credentials.password}`)}`),
          });
        } else {
          return throwError(() => new Error("Basic authentication credentials required"));
        }
        break;

      case "NONE":
      default:
        // Публичный API без аутентификации
        modifiedRequest = request;
    }

    return next.handle(modifiedRequest);
  }

  private getAuthScheme(url: string): string {
    // Определяем схему по URL или домену
    if (url.includes("/api/auth/") || url.includes("/public/")) {
      return "NONE";
    }

    if (url.includes("/api/admin/") || url.includes("/api/user/")) {
      return "JWT";
    }

    if (url.includes("external-api.com")) {
      return "API_KEY";
    }

    if (url.includes("legacy-api.com")) {
      return "BASIC";
    }

    // По умолчанию используем JWT
    return "JWT";
  }
}
```

**8. Обработка Single Sign-On (SSO) и OAuth**:

```typescript
@Injectable()
export class OAuthInterceptor implements HttpInterceptor {
  constructor(private oauthService: OAuthService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Проверяем, требуется ли аутентификация для запроса
    if (this.requiresAuthentication(request)) {
      // Получаем текущий OAuth токен
      const token = this.oauthService.getAccessToken();

      if (!token) {
        // Если токена нет, перенаправляем на аутентификацию
        this.oauthService.initLoginFlow();
        return throwError(() => new Error("Authentication required"));
      }

      // Проверяем, не истек ли токен
      if (this.oauthService.hasValidAccessToken()) {
        // Добавляем токен к запросу
        const authRequest = request.clone({
          headers: request.headers.set("Authorization", `Bearer ${token}`),
        });

        return next.handle(authRequest).pipe(
          catchError((error) => {
            if (error instanceof HttpErrorResponse && error.status === 401) {
              // Пытаемся обновить токен через refresh_token
              return from(this.oauthService.refreshToken()).pipe(
                switchMap(() => {
                  // Получаем новый токен после обновления
                  const newToken = this.oauthService.getAccessToken();

                  // Повторяем запрос с новым токеном
                  const refreshedRequest = request.clone({
                    headers: request.headers.set("Authorization", `Bearer ${newToken}`),
                  });

                  return next.handle(refreshedRequest);
                }),
                catchError((refreshError) => {
                  // Если не удалось обновить токен, перенаправляем на вход
                  console.error("Failed to refresh token", refreshError);
                  this.oauthService.logOut();
                  this.router.navigate(["/login"]);
                  return throwError(() => new Error("Session expired"));
                })
              );
            }

            return throwError(() => error);
          })
        );
      } else {
        // Токен истек, пытаемся обновить
        return from(this.oauthService.refreshToken()).pipe(
          switchMap(() => {
            const newToken = this.oauthService.getAccessToken();

            const refreshedRequest = request.clone({
              headers: request.headers.set("Authorization", `Bearer ${newToken}`),
            });

            return next.handle(refreshedRequest);
          }),
          catchError((error) => {
            // Не удалось обновить токен, перенаправляем на вход
            this.oauthService.logOut();
            this.router.navigate(["/login"]);
            return throwError(() => new Error("Session expired"));
          })
        );
      }
    }

    // Пропускаем запрос, если аутентификация не требуется
    return next.handle(request);
  }

  private requiresAuthentication(request: HttpRequest<any>): boolean {
    // Исключаем запросы для аутентификации и публичные API
    const publicUrls = ["/assets/", "/api/public/", this.oauthService.loginUrl, this.oauthService.tokenEndpoint];

    return !publicUrls.some((url) => request.url.includes(url));
  }
}
```

**9. Обработка JWT с реактивным обновлением**:

```typescript
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  private refreshTokenInProgress = false;
  private tokenRefreshedSource = new Subject<void>();
  private tokenRefreshed$ = this.tokenRefreshedSource.asObservable().pipe(share());

  constructor(private authService: AuthService, private jwtHelper: JwtHelperService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Проверяем, нужно ли добавлять токен к запросу
    if (this.shouldAddToken(request)) {
      return this.addToken(request, next);
    }

    // Если токен не нужен, пропускаем запрос без изменений
    return next.handle(request);
  }

  private addToken(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Получаем текущий токен
    const token = this.authService.getToken();

    if (!token) {
      return next.handle(request);
    }

    // Проверяем, валиден ли токен
    if (this.jwtHelper.isTokenExpired(token)) {
      // Если токен истек, пытаемся обновить
      return this.handleExpiredToken(request, next);
    }

    // Проверяем, скоро ли истекает токен (за 30 секунд)
    const tokenExpirationDate = this.jwtHelper.getTokenExpirationDate(token);
    const now = new Date();
    const tokenExpiresInSeconds = (tokenExpirationDate!.getTime() - now.getTime()) / 1000;

    if (tokenExpiresInSeconds < 30) {
      // Если токен скоро истекает, проактивно обновляем
      return this.handleExpiredToken(request, next);
    }

    // Если токен в порядке, добавляем его к запросу
    return next.handle(this.createRequestWithToken(request, token));
  }

  private handleExpiredToken(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Если процесс обновления токена уже запущен, ждем его завершения
    if (this.refreshTokenInProgress) {
      return this.tokenRefreshed$.pipe(switchMap(() => this.addToken(request, next)));
    }

    this.refreshTokenInProgress = true;

    // Сбрасываем состояние subject
    this.tokenRefreshedSource.next();

    return this.authService.refreshToken().pipe(
      switchMap((token) => {
        this.refreshTokenInProgress = false;
        this.tokenRefreshedSource.next();

        // Повторяем запрос с новым токеном
        return next.handle(this.createRequestWithToken(request, token));
      }),
      catchError((error) => {
        this.refreshTokenInProgress = false;

        // Если не удалось обновить токен, делаем логаут
        this.authService.logout();
        return throwError(() => error);
      })
    );
  }

  private shouldAddToken(request: HttpRequest<any>): boolean {
    // Определяем, нужно ли добавлять токен к запросу
    const skipUrls = ["/api/auth/login", "/api/auth/refresh-token", "/assets/"];

    return !skipUrls.some((url) => request.url.includes(url));
  }

  private createRequestWithToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      headers: request.headers.set("Authorization", `Bearer ${token}`),
    });
  }
}
```

**10. Использование HTTP-интерсепторов для разных сред разработки**:

```typescript
@Injectable()
export class EnvironmentInterceptor implements HttpInterceptor {
  constructor(private configService: ConfigService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Получаем текущую конфигурацию окружения
    const environment = this.configService.getEnvironment();
    const apiBase = this.configService.getApiBaseUrl();

    // Преобразуем относительные URL в абсолютные
    if (request.url.startsWith("/api")) {
      const modifiedRequest = request.clone({
        url: `${apiBase}${request.url}`,
      });

      // Добавляем информацию об окружении
      if (environment !== "production") {
        modifiedRequest = modifiedRequest.clone({
          headers: modifiedRequest.headers.set("X-Environment", environment),
        });
      }

      return next.handle(modifiedRequest);
    }

    // Добавляем информацию о тестировании в не-production средах
    if (environment === "testing" || environment === "development") {
      const testRequest = request.clone({
        headers: request.headers.set("X-Test-Mode", "true"),
      });

      return next.handle(testRequest);
    }

    return next.handle(request);
  }
}
```

**Лучшие практики при работе с интерсепторами для аутентификации и авторизации**:

1. **Порядок регистрации интерсепторов**:
   - Регистрируйте интерсепторы аутентификации перед интерсепторами, которые зависят от данных аутентификации
   - Сначала должны идти интерсепторы, модифицирующие запросы, затем обрабатывающие ответы

```typescript
providers: [
  { provide: HTTP_INTERCEPTORS, useClass: EnvironmentInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: CsrfInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: AuthErrorInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlingInterceptor, multi: true },
];
```

2. **Безопасное хранение токенов**:

   - Используйте secure и httpOnly cookies для важных токенов
   - Для SPA обычно используется localStorage или sessionStorage, но с пониманием рисков XSS
   - Рассмотрите возможность шифрования токенов перед хранением

3. **Реактивное обновление UI при изменении статуса аутентификации**:

   - Используйте сервис с Observable для оповещения компонентов об изменениях статуса аутентификации
   - Применяйте Guards для защиты маршрутов с учетом текущего статуса аутентификации

4. **Обработка одновременных запросов**:

   - Используйте механизмы предотвращения race condition при обновлении токенов
   - Кешируйте процесс обновления токена, чтобы избежать множественных обновлений

5. **Отладка интерсепторов**:

   - Добавляйте возможность логирования для облегчения отладки (с переключателями для prod/dev)
   - Используйте инструменты разработчика для проверки правильности заголовков

6. **Гибкая конфигурация**:

   - Создавайте конфигурируемые интерсепторы, которые могут работать в разных окружениях
   - Используйте инъекцию зависимостей и сервисы конфигурации для настройки поведения

7. **Изоляция бизнес-логики**:
   - Храните основную логику аутентификации в сервисах, а не в интерсепторах
   - Интерсепторы должны быть тонким слоем, использующим сервисы для выполнения операций

HTTP-интерсепторы представляют собой мощный механизм для централизованной обработки аутентификации и авторизации в Angular-приложениях. Правильно реализованные интерсепторы обеспечивают безопасность, улучшают пользовательский опыт и значительно упрощают управление сессиями и токенами в приложении.

## Tests in Angular

### 1. What types of `Testing` does Angular support (e.g., unit tests, integration tests, e2e tests)?

Angular предоставляет комплексный инструментарий для различных типов тестирования, позволяющий проверять приложение на разных уровнях:

**1. Модульные тесты (Unit Tests)**:

- **Назначение**: тестирование отдельных изолированных компонентов и функций
- **Фокус**: проверка отдельных блоков кода в изоляции от других частей
- **Инструменты**: Jasmine, Karma, TestBed
- **Характеристики**: быстрые, изолированные, с использованием моков и заглушек
- **Что тестируется**: сервисы, компоненты, директивы, пайпы, функции-утилиты

```typescript
describe("CounterService", () => {
  let service: CounterService;

  beforeEach(() => {
    service = new CounterService();
  });

  it("should increment counter", () => {
    expect(service.count).toBe(0);
    service.increment();
    expect(service.count).toBe(1);
  });
});
```

**2. Интеграционные тесты (Integration Tests)**:

- **Назначение**: тестирование взаимодействия между различными частями приложения
- **Фокус**: проверка совместной работы нескольких компонентов или модулей
- **Инструменты**: TestBed, ComponentFixture, DebugElement
- **Характеристики**: тестирование взаимодействий, реальных зависимостей, DOM-событий
- **Что тестируется**: взаимодействие компонентов, сервисов, директив, DOM-события

```typescript
describe("UserProfileComponent", () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;
  let userService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserProfileComponent, UserAvatarComponent],
      providers: [UserService],
    }).compileComponents();

    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
  });

  it("should display user data correctly", () => {
    const testUser = { id: 1, name: "Test User" };
    spyOn(userService, "getUser").and.returnValue(of(testUser));

    fixture.detectChanges(); // Запускает ngOnInit и применяет изменения

    const nameElement = fixture.debugElement.query(By.css(".user-name"));
    expect(nameElement.nativeElement.textContent).toContain("Test User");
  });
});
```

**3. End-to-End тесты (E2E Tests)**:

- **Назначение**: тестирование всего приложения в реальном окружении браузера
- **Фокус**: проверка пользовательских сценариев от начала до конца
- **Инструменты**: Protractor (устаревает), Cypress, Playwright, Selenium
- **Характеристики**: моделируют реальные действия пользователя, длительные по времени выполнения
- **Что тестируется**: полные пользовательские сценарии, бизнес-процессы, потоки работы

```typescript
// Пример с использованием Cypress
describe("Login Flow", () => {
  it("should log in a user successfully", () => {
    cy.visit("/login");
    cy.get('input[name="email"]').type("user@example.com");
    cy.get('input[name="password"]').type("password123");
    cy.get('button[type="submit"]').click();

    // Проверяем, что пользователь перенаправлен на dashboard
    cy.url().should("include", "/dashboard");
    cy.get(".user-welcome").should("contain", "Welcome, User");
  });
});
```

**4. Тесты для компонентного взаимодействия (Component Interaction Tests)**:

- **Назначение**: тестирование взаимодействия между родительскими и дочерними компонентами
- **Фокус**: проверка передачи данных через @Input и @Output
- **Инструменты**: TestBed, ComponentFixture
- **Характеристики**: проверка передачи данных, обработки событий, жизненного цикла
- **Что тестируется**: @Input, @Output, @ViewChild, ng-content, проекция контента

```typescript
describe("ParentComponent interaction with ChildComponent", () => {
  let parentFixture: ComponentFixture<ParentComponent>;
  let parentComponent: ParentComponent;
  let childDebugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentComponent, ChildComponent],
    }).compileComponents();

    parentFixture = TestBed.createComponent(ParentComponent);
    parentComponent = parentFixture.componentInstance;
    parentFixture.detectChanges();

    childDebugElement = parentFixture.debugElement.query(By.directive(ChildComponent));
  });

  it("should pass data to child component via @Input", () => {
    parentComponent.dataForChild = "test data";
    parentFixture.detectChanges();

    const childComponent = childDebugElement.componentInstance;
    expect(childComponent.inputData).toBe("test data");
  });

  it("should react to child component events via @Output", () => {
    const childComponent = childDebugElement.componentInstance;

    // Проверяем, что parentComponent.handleChildEvent вызывается
    // когда childComponent.buttonClicked эмитирует событие
    spyOn(parentComponent, "handleChildEvent");
    childComponent.buttonClicked.emit("child event data");

    expect(parentComponent.handleChildEvent).toHaveBeenCalledWith("child event data");
  });
});
```

**5. Тесты маршрутизации (Routing Tests)**:

- **Назначение**: тестирование навигации и маршрутизации в приложении
- **Фокус**: проверка работы Guards, Resolvers, правильности маршрутов
- **Инструменты**: RouterTestingModule, Router, Location
- **Характеристики**: проверка URL, перенаправлений, параметров маршрута
- **Что тестируется**: конфигурация маршрутов, защита маршрутов, резолверы данных

```typescript
describe("App Routing", () => {
  let router: Router;
  let location: Location;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [AppComponent, HomeComponent, AboutComponent],
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(AppComponent);

    fixture.detectChanges();
  });

  it('should navigate to "about" successfully', fakeAsync(() => {
    router.navigate(["/about"]);
    tick(); // Для обработки асинхронной навигации

    expect(location.path()).toBe("/about");
    fixture.detectChanges();

    const aboutElement = fixture.debugElement.query(By.css("app-about"));
    expect(aboutElement).toBeTruthy();
  }));
});
```

**6. Тесты форм (Form Tests)**:

- **Назначение**: тестирование поведения и валидации форм
- **Фокус**: проверка состояний формы, валидации, отправки данных
- **Инструменты**: ReactiveFormsModule, FormsModule
- **Характеристики**: проверка валидности, состояний формы, обработки отправки
- **Что тестируется**: модели форм, валидаторы, состояния контролов

```typescript
describe("LoginForm", () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [LoginFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should validate email format", () => {
    const emailControl = component.loginForm.get("email");

    emailControl?.setValue("not-an-email");
    expect(emailControl?.valid).toBeFalsy();
    expect(emailControl?.errors?.["email"]).toBeTruthy();

    emailControl?.setValue("valid@example.com");
    expect(emailControl?.valid).toBeTruthy();
  });

  it("should submit form when valid", () => {
    spyOn(component, "onSubmit");

    component.loginForm.setValue({
      email: "test@example.com",
      password: "password123",
    });

    const submitButton = fixture.debugElement.query(By.css('button[type="submit"]'));
    submitButton.nativeElement.click();

    expect(component.onSubmit).toHaveBeenCalled();
  });
});
```

**7. Тесты HTTP-запросов (HTTP Tests)**:

- **Назначение**: тестирование взаимодействия с серверным API
- **Фокус**: проверка запросов, ответов, обработки ошибок
- **Инструменты**: HttpClientTestingModule, HttpTestingController
- **Характеристики**: мокирование HTTP-запросов без реальных сетевых вызовов
- **Что тестируется**: сервисы работы с API, перехватчики, трансформации данных

```typescript
describe("UserService", () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });

    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Проверяет, что нет незавершенных ожиданий
  });

  it("should fetch users", () => {
    const mockUsers = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];

    service.getUsers().subscribe((users) => {
      expect(users).toEqual(mockUsers);
    });

    const req = httpMock.expectOne("/api/users");
    expect(req.request.method).toBe("GET");
    req.flush(mockUsers); // Имитируем успешный ответ
  });

  it("should handle errors", () => {
    service.getUsers().subscribe({
      next: () => fail("Should have failed"),
      error: (error) => {
        expect(error.status).toBe(404);
      },
    });

    const req = httpMock.expectOne("/api/users");
    req.flush("Not found", { status: 404, statusText: "Not Found" });
  });
});
```

**8. Тесты директив и пайпов (Directive and Pipe Tests)**:

- **Назначение**: тестирование преобразований данных и манипуляций с DOM
- **Фокус**: проверка трансформации данных, манипуляций с DOM
- **Инструменты**: TestBed, ComponentFixture
- **Характеристики**: изолированное тестирование логики трансформации
- **Что тестируется**: пользовательские директивы и пайпы

```typescript
// Тест для пайпа
describe("FileSizePipe", () => {
  let pipe: FileSizePipe;

  beforeEach(() => {
    pipe = new FileSizePipe();
  });

  it("should convert bytes to human readable format", () => {
    expect(pipe.transform(0)).toBe("0 B");
    expect(pipe.transform(1024)).toBe("1 KB");
    expect(pipe.transform(1048576)).toBe("1 MB");
    expect(pipe.transform(1073741824)).toBe("1 GB");
  });
});

// Тест для директивы
describe("HighlightDirective", () => {
  let fixture: ComponentFixture<TestComponent>;
  let des: DebugElement[];

  @Component({
    template: `<div appHighlight="yellow">Highlight me!</div>`,
  })
  class TestComponent {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighlightDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    des = fixture.debugElement.queryAll(By.directive(HighlightDirective));
  });

  it("should change background color on mouseenter", () => {
    const element = des[0].nativeElement;

    // Исходное состояние
    expect(element.style.backgroundColor).toBe("");

    // Симулируем событие mouseenter
    des[0].triggerEventHandler("mouseenter", null);
    fixture.detectChanges();

    expect(element.style.backgroundColor).toBe("yellow");

    // Симулируем событие mouseleave
    des[0].triggerEventHandler("mouseleave", null);
    fixture.detectChanges();

    expect(element.style.backgroundColor).toBe("");
  });
});
```

**9. Тесты состояний (State Management Tests)**:

- **Назначение**: тестирование управления состоянием приложения
- **Фокус**: проверка изменений состояния, побочных эффектов, селекторов
- **Инструменты**: специфические для используемой библиотеки (NgRx, NGXS и т.д.)
- **Характеристики**: тестирование редьюсеров, эффектов, селекторов
- **Что тестируется**: логика изменения состояния, обработка действий, выборка данных

```typescript
// Тесты NgRx редьюсера
describe("Counter Reducer", () => {
  it("should increment counter", () => {
    const initialState = { count: 0 };
    const action = increment();
    const newState = counterReducer(initialState, action);

    expect(newState.count).toBe(1);
  });

  it("should decrement counter", () => {
    const initialState = { count: 5 };
    const action = decrement();
    const newState = counterReducer(initialState, action);

    expect(newState.count).toBe(4);
  });
});

// Тесты NgRx эффекта
describe("Auth Effects", () => {
  let effects: AuthEffects;
  let actions$: ReplaySubject<any>;
  let authService: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    const authServiceSpy = jasmine.createSpyObj("AuthService", ["login"]);

    TestBed.configureTestingModule({
      providers: [AuthEffects, provideMockActions(() => actions$), { provide: AuthService, useValue: authServiceSpy }],
    });

    effects = TestBed.inject(AuthEffects);
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    actions$ = new ReplaySubject(1);
  });

  it("should dispatch loginSuccess after successful login", () => {
    const credentials = { username: "test", password: "pass" };
    const user = { id: 1, username: "test" };

    authService.login.and.returnValue(of(user));

    actions$.next(login({ credentials }));

    effects.login$.subscribe((action) => {
      expect(action.type).toBe("[Auth] Login Success");
      expect(action.user).toEqual(user);
    });
  });
});
```

Angular поддерживает различные уровни тестирования, от модульных тестов отдельных компонентов до комплексных E2E-тестов всего приложения. Эта гибкость позволяет создавать эффективные тестовые стратегии, соответствующие конкретным потребностям проекта и обеспечивающие надежность разрабатываемого ПО.

### 2. What are the main tools and libraries used by Angular for testing (`Jasmine`, `Karma`, and `Protractor`)?

Angular предоставляет комплексный набор инструментов для тестирования, включающий несколько ключевых библиотек и фреймворков. Рассмотрим подробно каждый из них:

**1. Jasmine: Фреймворк для написания тестов**

Jasmine — это фреймворк для тестирования JavaScript, который используется по умолчанию в Angular для написания модульных и интеграционных тестов.

**Ключевые особенности Jasmine**:

- **Поддержка BDD-синтаксиса** (Behavior-Driven Development)
- **Не зависит от других фреймворков**, библиотек или DOM
- **Встроенные асинхронные возможности** для тестирования асинхронного кода
- **Встроенная система моков** (spies) для имитации объектов и функций

**Основные элементы синтаксиса Jasmine**:

- `describe()`: определяет набор тестов (тестовый сьют)
- `it()`: определяет отдельный тест (спецификацию)
- `beforeEach()`, `afterEach()`: хуки для настройки и очистки перед/после каждого теста
- `beforeAll()`, `afterAll()`: выполняется один раз перед/после всех тестов в блоке
- `expect()`: создает утверждение с матчерами (toEqual, toBe, toContain и т.д.)
- `spyOn()`: создает шпиона (spy) для мокирования функций

```typescript
describe("Calculator", () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it("should add two numbers correctly", () => {
    const result = calculator.add(3, 5);
    expect(result).toBe(8);
  });

  it("should subtract two numbers correctly", () => {
    const result = calculator.subtract(10, 4);
    expect(result).toBe(6);
  });

  it("should call logger when performing calculations", () => {
    const logger = jasmine.createSpyObj("Logger", ["log"]);
    calculator.setLogger(logger);

    calculator.add(1, 2);
    expect(logger.log).toHaveBeenCalledWith("Calculation performed: 1 + 2 = 3");
  });
});
```

**2. Karma: Средство запуска тестов**

Karma — это средство запуска тестов (test runner), которое обеспечивает выполнение тестов в различных браузерах и средах.

**Ключевые особенности Karma**:

- **Запуск тестов в реальных браузерах** (Chrome, Firefox, Safari и др.)
- **Поддержка режима наблюдения** (watch mode) для непрерывного выполнения тестов при изменении кода
- **Интеграция с системами CI/CD** (continuous integration/continuous deployment)
- **Расширяемость через плагины** для поддержки различных фреймворков, reporters и browsers

**Конфигурация Karma** (karma.conf.js):

```javascript
module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [require("karma-jasmine"), require("karma-chrome-launcher"), require("karma-jasmine-html-reporter"), require("karma-coverage"), require("@angular-devkit/build-angular/plugins/karma")],
    client: {
      clearContext: false, // оставляет видимой панель Jasmine в браузере
    },
    coverageReporter: {
      dir: require("path").join(__dirname, "./coverage/my-app"),
      subdir: ".",
      reporters: [{ type: "html" }, { type: "text-summary" }],
    },
    reporters: ["progress", "kjhtml"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Chrome"],
    singleRun: false,
    restartOnFileChange: true,
  });
};
```

**Типичные способы запуска тестов с Karma**:

```bash
#### Запуск всех тестов один раз
ng test

#### Запуск в режиме наблюдения (перезапуск при изменении файлов)
ng test --watch=true

#### Запуск с отчетом о покрытии
ng test --code-coverage

#### Запуск определенного набора тестов
ng test --include='src/app/feature/**/*.spec.ts'
```

**3. Protractor: Фреймворк для E2E-тестирования (устаревает)**

Protractor — это фреймворк для end-to-end тестирования, который был создан специально для Angular. Важно отметить, что Protractor **устаревает**, и команда Angular рекомендует переходить на современные альтернативы, такие как Cypress, Playwright или WebdriverIO.

**Ключевые особенности Protractor**:

- **Ориентирован на Angular**: автоматическая синхронизация с операциями Angular
- **Построен на основе Selenium WebDriver**
- **Использует Jasmine в качестве фреймворка тестирования по умолчанию**
- **Поддержка паттерна Page Object** для улучшения организации тестов

**Пример теста на Protractor**:

```typescript
describe("Todo App", () => {
  beforeEach(() => {
    browser.get("/");
  });

  it("should add a todo", () => {
    element(by.css("input.new-todo")).sendKeys("Learn Protractor");
    element(by.css("input.new-todo")).sendKeys(protractor.Key.ENTER);

    const todoList = element.all(by.css(".todo-list li"));
    expect(todoList.count()).toEqual(1);
    expect(todoList.get(0).getText()).toEqual("Learn Protractor");
  });

  it("should mark a todo as completed", () => {
    const checkbox = element(by.css(".todo-list li:first-child .toggle"));
    checkbox.click();

    const completedTodo = element(by.css(".todo-list li.completed"));
    expect(completedTodo.isPresent()).toBe(true);
  });
});
```

**4. TestBed: Утилита для настройки и инициализации тестов Angular**

TestBed не является отдельной библиотекой, а представляет собой часть фреймворка тестирования Angular, которая помогает настраивать и инициализировать тестовые окружения.

**Ключевые особенности TestBed**:

- **Создание тестового модуля** для компонентов, директив, сервисов и пайпов Angular
- **Конфигурация зависимостей** (providers)
- **Компиляция компонентов**
- **Создание экземпляров компонентов**
- **Доступ к инжектируемым сервисам**

```typescript
describe("UserProfileComponent", () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;
  let userService: jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    const userServiceSpy = jasmine.createSpyObj("UserService", ["getUser"]);

    await TestBed.configureTestingModule({
      declarations: [UserProfileComponent, AvatarComponent],
      providers: [{ provide: UserService, useValue: userServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
  });

  it("should create the component", () => {
    expect(component).toBeTruthy();
  });

  it("should load user data on init", () => {
    const mockUser = { id: 1, name: "John Doe" };
    userService.getUser.and.returnValue(of(mockUser));

    fixture.detectChanges(); // Triggers ngOnInit

    expect(userService.getUser).toHaveBeenCalled();
    expect(component.user).toEqual(mockUser);
  });
});
```

**5. Современные альтернативы для E2E-тестирования**

Так как Protractor устаревает, команда Angular рекомендует использовать следующие альтернативы:

**a. Cypress**:

- **Архитектура**: выполняется в том же цикле выполнения, что и тестируемое приложение
- **Преимущества**: быстрый, надежный, интерактивный, отличный визуальный интерфейс
- **Популярный выбор** для Angular-приложений после отказа от Protractor

```typescript
// cypress/integration/todo-app.spec.ts
describe("Todo App", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should add a new todo", () => {
    cy.get(".new-todo").type("Learn Cypress{enter}");

    cy.get(".todo-list li").should("have.length", 1).first().should("have.text", "Learn Cypress");
  });

  it("should toggle todo status when clicked", () => {
    cy.get(".todo-list li:first-child .toggle").click();
    cy.get(".todo-list li").should("have.class", "completed");
  });
});
```

**b. Playwright**:

- **Многобраузерная поддержка**: Chrome, Firefox, Safari из коробки
- **Отличная работа с тенями DOM** и web-компонентами
- **Мощные API** для тестирования современных веб-приложений
- **Высокая производительность** благодаря параллельному запуску тестов

```typescript
// playwright-test.ts
import { test, expect } from "@playwright/test";

test.describe("Todo App", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4200");
  });

  test("should add a new todo", async ({ page }) => {
    await page.fill(".new-todo", "Learn Playwright");
    await page.press(".new-todo", "Enter");

    await expect(page.locator(".todo-list li")).toHaveCount(1);
    await expect(page.locator(".todo-list li").first()).toHaveText("Learn Playwright");
  });

  test("should toggle todo status when clicked", async ({ page }) => {
    await page.click(".todo-list li:first-child .toggle");
    await expect(page.locator(".todo-list li")).toHaveClass(/completed/);
  });
});
```

**6. Другие полезные инструменты для тестирования в Angular**

**a. ng-mocks**: Библиотека для упрощения мокирования компонентов и директив в модульных тестах

```typescript
import { MockBuilder, MockRender } from "ng-mocks";

describe("ParentComponent", () => {
  beforeEach(() => {
    return MockBuilder(ParentComponent)
      .mock(ChildComponent) // Автоматически мокируем дочерний компонент
      .mock(SomeDirective)
      .keep(SharedModule); // Оставляем немокированным
  });

  it("should render with mocked dependencies", () => {
    const fixture = MockRender(ParentComponent, { inputProp: "test" });
    expect(fixture.point.componentInstance.inputProp).toBe("test");
  });
});
```

**b. jest-preset-angular**: Пресет для использования Jest вместо Jasmine/Karma

```bash
npm install --save-dev jest jest-preset-angular @types/jest
```

**Конфигурация в jest.config.js**:

```javascript
module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.spec.json",
      stringifyContentPathRegex: "\\.html$",
    },
  },
};
```

**c. Spectator**: Библиотека для упрощения написания тестов Angular

```typescript
import { createComponentFactory, Spectator } from "@ngneat/spectator";

describe("ButtonComponent", () => {
  let spectator: Spectator<ButtonComponent>;
  const createComponent = createComponentFactory(ButtonComponent);

  beforeEach(() => {
    spectator = createComponent({
      props: { text: "Click me" },
    });
  });

  it("should display the button text", () => {
    expect(spectator.query("button")).toHaveText("Click me");
  });

  it("should emit click event", () => {
    let clicked = false;
    spectator.component.clicked.subscribe(() => (clicked = true));

    spectator.click("button");
    expect(clicked).toBe(true);
  });
});
```

**d. @testing-library/angular**: Библиотека для написания тестов, ориентированных на пользовательский опыт

```typescript
import { render, screen, fireEvent } from "@testing-library/angular";

describe("LoginComponent", () => {
  it("should show error message for invalid email", async () => {
    await render(LoginComponent, {
      componentProperties: {
        submitForm: jasmine.createSpy("submitForm"),
      },
    });

    // Заполняем email некорректно
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.input(emailInput, { target: { value: "not-an-email" } });

    // Кликаем на кнопку отправки
    const submitButton = screen.getByRole("button", { name: /login/i });
    fireEvent.click(submitButton);

    // Проверяем появление сообщения об ошибке
    expect(screen.getByText(/please enter a valid email/i)).toBeInTheDocument();
  });
});
```

**Сравнение основных инструментов тестирования в Angular**:

| Инструмент     | Тип                                 | Сильные стороны                                                      | Ограничения                                                   | Применение                            |
| -------------- | ----------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------- |
| **Jasmine**    | Фреймворк тестирования              | Интуитивный синтаксис, встроенные моки, не требует DOM               | Ограниченные асинхронные возможности, меньше функций чем Jest | Модульные тесты, интеграционные тесты |
| **Karma**      | Средство запуска тестов             | Запуск в реальных браузерах, интеграция с Angular CLI                | Медленнее чем Jest, сложная настройка                         | Запуск тестов в браузере              |
| **Jest**       | Фреймворк и средство запуска тестов | Быстрее Karma+Jasmine, снапшот-тестирование, параллельное выполнение | Требует дополнительной настройки для Angular                  | Альтернатива Jasmine+Karma            |
| **Protractor** | E2E-тестирование                    | Синхронизация с Angular                                              | Устаревает, сложный в поддержке                               | Устаревшее E2E-тестирование           |
| **Cypress**    | E2E-тестирование                    | Визуальный интерфейс, стабильность, простота использования           | Ограниченная поддержка некоторых браузеров                    | Современное E2E-тестирование          |
| **Playwright** | E2E-тестирование                    | Поддержка всех основных браузеров, отличная производительность       | Более новый, чем Cypress (меньше ресурсов)                    | Кросс-браузерное E2E-тестирование     |

Команда Angular регулярно развивает набор инструментов для тестирования, адаптируя его к современным тенденциям в разработке. Выбор конкретных инструментов зависит от нужд проекта, его масштаба, требований к тестированию и предпочтений команды.

### 3. What is `TestBed`, and how is it used to set up a testing environment?

**TestBed** — это ключевая утилита Angular для создания и настройки тестового окружения. Она моделирует Angular DI (Dependency Injection) систему, позволяя тестировать компоненты, директивы, сервисы и пайпы в среде, максимально приближенной к реальной работе приложения.

**Основные возможности TestBed**:

**1. Создание тестового модуля**:
TestBed предоставляет API для конфигурации тестового NgModule, который содержит все необходимые компоненты, директивы, пайпы и сервисы для тестирования.

```typescript
TestBed.configureTestingModule({
  declarations: [UserProfileComponent, UserAvatarComponent],
  imports: [CommonModule, RouterTestingModule],
  providers: [UserService, { provide: API_URL, useValue: "http://test-api.example.com" }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
});
```

**2. Компиляция компонентов**:
Для тестирования компонентов с шаблонами нужно их скомпилировать:

```typescript
beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [MyComponent],
  }).compileComponents(); // Асинхронная компиляция компонентов
});
```

**3. Создание экземпляров компонентов**:
TestBed позволяет создавать экземпляры компонентов вместе с их компонентным деревом:

```typescript
const fixture = TestBed.createComponent(UserProfileComponent);
const component = fixture.componentInstance;
```

**4. Доступ к инжектируемым сервисам**:
Получение экземпляров сервисов через систему внедрения зависимостей:

```typescript
const userService = TestBed.inject(UserService);
const httpClient = TestBed.inject(HttpClient);
```

**5. Переопределение провайдеров**:
Возможность подмены реальных зависимостей тестовыми заглушками:

```typescript
TestBed.configureTestingModule({
  providers: [
    { provide: UserService, useClass: MockUserService },
    { provide: Router, useValue: routerSpy },
  ],
});
```

**6. Настройка и управление циклами обнаружения изменений**:

```typescript
fixture.detectChanges(); // Запускает цикл обнаружения изменений
fixture.componentInstance.name = "New Name";
fixture.detectChanges(); // Применяет изменения к DOM
```

**Полный пример использования TestBed для тестирования компонента**:

```typescript
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";

import { UserProfileComponent } from "./user-profile.component";
import { UserService } from "./user.service";
import { UserAvatarComponent } from "./user-avatar.component";

describe("UserProfileComponent", () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;
  let userServiceSpy: jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    // Создаем шпион для сервиса
    const spy = jasmine.createSpyObj("UserService", ["getUserProfile", "updateProfile"]);

    // Настраиваем тестовый модуль
    await TestBed.configureTestingModule({
      declarations: [UserProfileComponent, UserAvatarComponent],
      imports: [
        RouterTestingModule, // Имитация маршрутизации
      ],
      providers: [
        { provide: UserService, useValue: spy }, // Подменяем реальный сервис шпионом
      ],
    }).compileComponents(); // Компилируем компоненты асинхронно

    // Сохраняем ссылку на шпион
    userServiceSpy = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
  });

  beforeEach(() => {
    // Настраиваем поведение шпиона для каждого теста
    userServiceSpy.getUserProfile.and.returnValue(
      of({
        id: "123",
        name: "Test User",
        email: "test@example.com",
        avatarUrl: "https://example.com/avatar.jpg",
      })
    );

    // Создаем компонент и получаем его экземпляр
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;

    // Запускаем первоначальное обнаружение изменений
    fixture.detectChanges();
  });

  it("should create the component", () => {
    expect(component).toBeTruthy();
  });

  it("should load user profile on initialization", () => {
    // Проверяем, что сервис был вызван
    expect(userServiceSpy.getUserProfile).toHaveBeenCalled();

    // Проверяем, что данные были сохранены в компоненте
    expect(component.user.name).toBe("Test User");
    expect(component.user.email).toBe("test@example.com");
  });

  it("should display user name in the template", () => {
    // Находим элемент, отображающий имя пользователя
    const nameElement = fixture.debugElement.query(By.css(".user-name"));

    // Проверяем содержимое элемента
    expect(nameElement.nativeElement.textContent).toContain("Test User");
  });

  it("should render user avatar component with correct URL", () => {
    // Находим дочерний компонент аватара
    const avatarComponent = fixture.debugElement.query(By.directive(UserAvatarComponent));

    // Проверяем, что его входной параметр установлен правильно
    expect(avatarComponent).toBeTruthy();
    expect(avatarComponent.componentInstance.imageUrl).toBe("https://example.com/avatar.jpg");
  });

  it("should call updateProfile when save button is clicked", () => {
    // Настраиваем шпион для метода updateProfile
    userServiceSpy.updateProfile.and.returnValue(of({ success: true }));

    // Находим кнопку сохранения и кликаем по ней
    const saveButton = fixture.debugElement.query(By.css(".save-button"));
    saveButton.nativeElement.click();

    // Проверяем, что метод сервиса был вызван с правильными параметрами
    expect(userServiceSpy.updateProfile).toHaveBeenCalledWith(component.user);
  });
});
```

**Продвинутые техники использования TestBed**:

**1. Переопределение DI-провайдеров на уровне компонента**:

```typescript
const fixture = TestBed.createComponent(MyComponent, {
  providers: [{ provide: SomeService, useClass: MockSomeService }],
});
```

**2. Тестирование компонентов с входными и выходными параметрами**:

```typescript
// Создаем фикстуру и экземпляр компонента
const fixture = TestBed.createComponent(ProductCardComponent);
const component = fixture.componentInstance;

// Устанавливаем входные параметры
component.product = { id: 1, name: "Test Product", price: 99.99 };
component.showActions = true;

// Подписываемся на выходные события
let selectedProduct: any;
component.productSelected.subscribe((product) => {
  selectedProduct = product;
});

// Запускаем обнаружение изменений для применения входных параметров
fixture.detectChanges();

// Проверяем, что компонент отображает данные правильно
expect(fixture.nativeElement.querySelector(".product-name").textContent).toContain("Test Product");

// Симулируем клик по кнопке выбора
fixture.nativeElement.querySelector(".select-button").click();

// Проверяем, что событие было эмитировано с правильными данными
expect(selectedProduct).toEqual({ id: 1, name: "Test Product", price: 99.99 });
```

**3. Тестирование с разными конфигурациями для разных тестов**:

```typescript
describe("MyComponent with featureEnabled = true", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyComponent],
      providers: [{ provide: FeatureConfig, useValue: { enabled: true } }],
    });

    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should show feature UI when enabled", () => {
    expect(fixture.nativeElement.querySelector(".feature-ui")).toBeTruthy();
  });
});

describe("MyComponent with featureEnabled = false", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyComponent],
      providers: [{ provide: FeatureConfig, useValue: { enabled: false } }],
    });

    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should not show feature UI when disabled", () => {
    expect(fixture.nativeElement.querySelector(".feature-ui")).toBeFalsy();
  });
});
```

**4. Использование TestBed для инициализации сервисов**:

```typescript
describe("AuthService", () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService, { provide: AUTH_CONFIG, useValue: { apiUrl: "/api/auth" } }],
    });

    // Инжектируем сервисы
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it("should authenticate user with valid credentials", () => {
    const mockUser = { id: 1, name: "Test User", token: "abc123" };

    service.login("test@example.com", "password").subscribe((user) => {
      expect(user).toEqual(mockUser);
    });

    const req = httpMock.expectOne("/api/auth/login");
    expect(req.request.method).toBe("POST");
    expect(req.request.body).toEqual({
      email: "test@example.com",
      password: "password",
    });

    req.flush(mockUser);
  });
});
```

**5. Тестирование маршрутизации с помощью TestBed**:

```typescript
describe("AppRoutingModule", () => {
  let router: Router;
  let location: Location;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [AppComponent, HomeComponent, AboutComponent],
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(AppComponent);

    router.initialNavigation(); // Инициализируем маршрутизатор
  });

  it('should navigate to "about" successfully', fakeAsync(() => {
    router.navigate(["/about"]);
    tick(); // Продвигаем виртуальный таймер

    expect(location.path()).toBe("/about");

    // Проверяем, что компонент About был создан
    const aboutElement = fixture.debugElement.query(By.directive(AboutComponent));
    expect(aboutElement).toBeTruthy();
  }));
});
```

**6. Тестирование с помощью автономных компонентов (Angular 14+)**:

```typescript
// Для тестирования автономных компонентов
describe("StandaloneButtonComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandaloneButtonComponent], // Прямой импорт автономного компонента
    }).compileComponents();
  });

  it("should create the component", () => {
    const fixture = TestBed.createComponent(StandaloneButtonComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
```

**7. Работа с NgModules в тестах**:

```typescript
// Тестирование компонента из модуля
describe("FeatureComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureModule], // Импортируем весь модуль вместо отдельных компонентов
      providers: [{ provide: FeatureService, useClass: MockFeatureService }],
    }).compileComponents();
  });

  it("should create the feature component", () => {
    const fixture = TestBed.createComponent(FeatureComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
```

TestBed является центральной частью фреймворка тестирования Angular и обеспечивает мощную инфраструктуру для тестирования компонентов и сервисов в контексте, близком к реальному приложению. Он позволяет настраивать тестовое окружение, управлять зависимостями и легко интегрироваться с другими инструментами тестирования.

### 4. How do you test Angular components using `ComponentFixture` and `DebugElement`?

**ComponentFixture** и **DebugElement** — это ключевые инструменты для тестирования компонентов Angular, позволяющие взаимодействовать с компонентом и его DOM-элементами.

**1. ComponentFixture: оболочка для тестирования компонентов**

**ComponentFixture** — это оболочка (wrapper) вокруг экземпляра компонента и его шаблона, предоставляющая доступ к компоненту, его DOM-элементу и методам для управления жизненным циклом компонента.

**Основные свойства и методы ComponentFixture**:

- **componentInstance**: прямой доступ к экземпляру компонента
- **debugElement**: предоставляет DebugElement, связанный с корневым DOM-элементом компонента
- **nativeElement**: прямой доступ к DOM-элементу компонента
- **detectChanges()**: запускает обнаружение изменений в компоненте
- **whenStable()**: возвращает Promise, который разрешается, когда все асинхронные операции завершены
- **autoDetectChanges(isEnabled)**: включает или отключает автоматическое обнаружение изменений

**Создание и использование ComponentFixture**:

```typescript
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CounterComponent } from "./counter.component";

describe("CounterComponent", () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Запускает ngOnInit и применяет изменения
  });

  it("should create the component", () => {
    expect(component).toBeTruthy();
  });

  it("should increment counter when button is clicked", () => {
    // Проверяем начальное значение
    expect(component.count).toBe(0);

    // Находим кнопку и кликаем по ней
    const incrementButton = fixture.nativeElement.querySelector(".increment-button");
    incrementButton.click();

    // Проверяем, что значение изменилось
    expect(component.count).toBe(1);

    // Запускаем обнаружение изменений
    fixture.detectChanges();

    // Проверяем, что DOM обновился
    const counterText = fixture.nativeElement.querySelector(".counter-value");
    expect(counterText.textContent).toContain("1");
  });
});
```

**2. DebugElement: абстракция для кросс-платформенного тестирования DOM**

**DebugElement** предоставляет абстракцию над DOM-элементами, обеспечивая кросс-платформенные возможности для тестирования компонентов Angular. Это особенно полезно при тестировании на платформах, отличных от браузера (например, в серверном рендеринге).

**Основные свойства и методы DebugElement**:

- **nativeElement**: прямой доступ к базовому DOM-элементу
- **properties**: свойства элемента
- **attributes**: атрибуты элемента
- **classes**: CSS-классы элемента
- **styles**: встроенные стили элемента
- **childNodes**: дочерние DebugElement-ы
- **parent**: родительский DebugElement
- **query(predicate)**: поиск одного дочернего элемента
- **queryAll(predicate)**: поиск всех дочерних элементов
- **triggerEventHandler(eventName, eventObj)**: вызывает обработчик события

**Использование DebugElement для тестирования компонентов**:

```typescript
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { TodoListComponent } from "./todo-list.component";
import { TodoItemComponent } from "./todo-item.component";

describe("TodoListComponent", () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TodoListComponent, TodoItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;

    // Устанавливаем начальные данные
    component.todos = [
      { id: 1, title: "Learn Angular", completed: false },
      { id: 2, title: "Write tests", completed: true },
    ];

    fixture.detectChanges();
  });

  it("should render correct number of todo items", () => {
    // Используем debugElement.queryAll для поиска всех элементов TodoItemComponent
    const todoItems = fixture.debugElement.queryAll(By.directive(TodoItemComponent));
    expect(todoItems.length).toBe(2);
  });

  it("should pass the correct data to todo items", () => {
    const todoItems = fixture.debugElement.queryAll(By.directive(TodoItemComponent));

    // Проверяем, что первому TodoItemComponent передан правильный объект
    const firstTodoItem = todoItems[0].componentInstance;
    expect(firstTodoItem.todo.title).toBe("Learn Angular");
    expect(firstTodoItem.todo.completed).toBe(false);

    // Проверяем, что второму TodoItemComponent передан правильный объект
    const secondTodoItem = todoItems[1].componentInstance;
    expect(secondTodoItem.todo.title).toBe("Write tests");
    expect(secondTodoItem.todo.completed).toBe(true);
  });

  it("should handle todo completion toggling", () => {
    const todoItems = fixture.debugElement.queryAll(By.directive(TodoItemComponent));
    const firstTodoItemDebug = todoItems[0];

    // Создаем шпиона для метода toggleComplete
    spyOn(component, "toggleComplete").and.callThrough();

    // Симулируем событие toggleComplete от первого TodoItemComponent
    firstTodoItemDebug.triggerEventHandler("toggleComplete", 1);

    // Проверяем, что метод toggleComplete был вызван с правильным ID
    expect(component.toggleComplete).toHaveBeenCalledWith(1);

    // Проверяем, что состояние первого todo изменилось
    expect(component.todos[0].completed).toBe(true);
  });

  it("should add a new todo when form is submitted", () => {
    // Находим форму и инпут
    const form = fixture.debugElement.query(By.css("form"));
    const input = fixture.debugElement.query(By.css('input[type="text"]'));

    // Устанавливаем значение инпута
    input.nativeElement.value = "New Todo Item";
    input.nativeElement.dispatchEvent(new Event("input"));

    // Отправляем форму
    form.triggerEventHandler("submit", null);
    fixture.detectChanges();

    // Проверяем, что новый todo был добавлен
    expect(component.todos.length).toBe(3);
    expect(component.todos[2].title).toBe("New Todo Item");

    // Проверяем, что DOM обновился
    const todoItems = fixture.debugElement.queryAll(By.directive(TodoItemComponent));
    expect(todoItems.length).toBe(3);
  });

  it("should filter todos based on status", () => {
    // Устанавливаем фильтр на "completed"
    component.filter = "completed";
    fixture.detectChanges();

    // Проверяем, что отображается только завершенные задачи
    let visibleTodoItems = fixture.debugElement.queryAll(By.css(".todo-item:not(.hidden)"));
    expect(visibleTodoItems.length).toBe(1);

    // Меняем фильтр на "active"
    component.filter = "active";
    fixture.detectChanges();

    // Проверяем, что отображаются только активные задачи
    visibleTodoItems = fixture.debugElement.queryAll(By.css(".todo-item:not(.hidden)"));
    expect(visibleTodoItems.length).toBe(1);

    // Меняем фильтр на "all"
    component.filter = "all";
    fixture.detectChanges();

    // Проверяем, что отображаются все задачи
    visibleTodoItems = fixture.debugElement.queryAll(By.css(".todo-item:not(.hidden)"));
    expect(visibleTodoItems.length).toBe(2);
  });
});
```

**3. Продвинутые техники тестирования компонентов**

**a. Тестирование компонентов с входными и выходными параметрами**:

```typescript
describe("RatingComponent", () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RatingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RatingComponent);
    component = fixture.componentInstance;
  });

  it("should display the correct number of stars", () => {
    // Устанавливаем входной параметр
    component.value = 3;
    component.max = 5;
    fixture.detectChanges();

    // Проверяем DOM
    const stars = fixture.debugElement.queryAll(By.css(".star"));
    expect(stars.length).toBe(5);

    const activeStars = fixture.debugElement.queryAll(By.css(".star.active"));
    expect(activeStars.length).toBe(3);
  });

  it("should emit ratingChange event when star is clicked", () => {
    component.max = 5;
    fixture.detectChanges();

    // Создаем шпиона для выходного параметра
    spyOn(component.ratingChange, "emit");

    // Находим и кликаем по четвертой звезде
    const stars = fixture.debugElement.queryAll(By.css(".star"));
    stars[3].nativeElement.click();

    // Проверяем, что событие было эмитировано с правильным значением
    expect(component.ratingChange.emit).toHaveBeenCalledWith(4);
  });
});
```

**b. Тестирование компонентов с внедренными сервисами**:

```typescript
describe("UserListComponent", () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userServiceSpy: jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    // Создаем шпиона для UserService
    const spy = jasmine.createSpyObj("UserService", ["getUsers", "deleteUser"]);

    await TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers: [{ provide: UserService, useValue: spy }],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    userServiceSpy = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;

    // Настраиваем шпиона для возврата фиктивных данных
    userServiceSpy.getUsers.and.returnValue(
      of([
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Smith", email: "jane@example.com" },
      ])
    );

    fixture.detectChanges();
  });

  it("should load and display users on initialization", () => {
    // Проверяем, что сервис был вызван
    expect(userServiceSpy.getUsers).toHaveBeenCalled();

    // Проверяем, что компонент сохранил данные
    expect(component.users.length).toBe(2);

    // Проверяем DOM
    const userElements = fixture.debugElement.queryAll(By.css(".user-item"));
    expect(userElements.length).toBe(2);
    expect(userElements[0].nativeElement.textContent).toContain("John Doe");
    expect(userElements[1].nativeElement.textContent).toContain("Jane Smith");
  });

  it("should delete a user when delete button is clicked", () => {
    // Настраиваем шпиона для deleteUser
    userServiceSpy.deleteUser.and.returnValue(of(true));

    // Находим кнопку удаления для первого пользователя
    const deleteButtons = fixture.debugElement.queryAll(By.css(".delete-button"));
    deleteButtons[0].nativeElement.click();

    // Проверяем, что сервис был вызван с правильным ID
    expect(userServiceSpy.deleteUser).toHaveBeenCalledWith(1);

    // Если компонент удаляет пользователя из списка после успешного удаления
    if (component.removeUserFromList) {
      component.removeUserFromList(1);
      fixture.detectChanges();

      // Проверяем, что пользователь удален из списка
      const updatedUserElements = fixture.debugElement.queryAll(By.css(".user-item"));
      expect(updatedUserElements.length).toBe(1);
      expect(updatedUserElements[0].nativeElement.textContent).toContain("Jane Smith");
    }
  });
});
```

**c. Тестирование шаблонов, использующих структурные директивы**:

```typescript
describe("UserTableComponent", () => {
  let component: UserTableComponent;
  let fixture: ComponentFixture<UserTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserTableComponent],
      imports: [CommonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(UserTableComponent);
    component = fixture.componentInstance;
  });

  it("should show empty state when there are no users", () => {
    component.users = [];
    fixture.detectChanges();

    const emptyState = fixture.debugElement.query(By.css(".empty-state"));
    expect(emptyState).toBeTruthy();
    expect(emptyState.nativeElement.textContent).toContain("No users found");

    const tableRows = fixture.debugElement.queryAll(By.css("tbody tr"));
    expect(tableRows.length).toBe(0);
  });

  it("should display users in table rows when users are provided", () => {
    component.users = [
      { id: 1, name: "John", role: "Admin" },
      { id: 2, name: "Jane", role: "User" },
    ];
    fixture.detectChanges();

    const emptyState = fixture.debugElement.query(By.css(".empty-state"));
    expect(emptyState).toBeFalsy();

    const tableRows = fixture.debugElement.queryAll(By.css("tbody tr"));
    expect(tableRows.length).toBe(2);

    // Проверяем содержимое первой строки
    const firstRowCells = tableRows[0].queryAll(By.css("td"));
    expect(firstRowCells[0].nativeElement.textContent).toContain("1");
    expect(firstRowCells[1].nativeElement.textContent).toContain("John");
    expect(firstRowCells[2].nativeElement.textContent).toContain("Admin");

    // Проверяем содержимое второй строки
    const secondRowCells = tableRows[1].queryAll(By.css("td"));
    expect(secondRowCells[0].nativeElement.textContent).toContain("2");
    expect(secondRowCells[1].nativeElement.textContent).toContain("Jane");
    expect(secondRowCells[2].nativeElement.textContent).toContain("User");
  });

  it("should highlight admin users", () => {
    component.users = [
      { id: 1, name: "John", role: "Admin" },
      { id: 2, name: "Jane", role: "User" },
    ];
    component.highlightAdmins = true;
    fixture.detectChanges();

    const tableRows = fixture.debugElement.queryAll(By.css("tbody tr"));

    // Проверяем, что строка с админом имеет класс 'admin-row'
    expect(tableRows[0].nativeElement.classList).toContain("admin-row");

    // Проверяем, что строка с обычным пользователем не имеет класса 'admin-row'
    expect(tableRows[1].nativeElement.classList).not.toContain("admin-row");
  });
});
```

**d. Тестирование компонентов с использованием CSS-селекторов**:

```typescript
describe("NavigationComponent", () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);

    fixture.detectChanges();
  });

  it("should highlight active link based on current route", () => {
    // Устанавливаем текущий маршрут
    spyOnProperty(router, "url", "get").and.returnValue("/about");

    // Устанавливаем навигационные ссылки в компоненте
    component.navLinks = [
      { path: "/home", label: "Home" },
      { path: "/about", label: "About" },
      { path: "/contact", label: "Contact" },
    ];

    fixture.detectChanges();

    // Проверяем, что правильная ссылка отмечена как активная
    const links = fixture.debugElement.queryAll(By.css(".nav-link"));
    expect(links.length).toBe(3);

    expect(links[0].nativeElement.classList).not.toContain("active");
    expect(links[1].nativeElement.classList).toContain("active");
    expect(links[2].nativeElement.classList).not.toContain("active");
  });

  it("should navigate to the correct route when link is clicked", () => {
    // Шпион для router.navigate
    spyOn(router, "navigateByUrl");

    component.navLinks = [
      { path: "/home", label: "Home" },
      { path: "/about", label: "About" },
    ];

    fixture.detectChanges();

    // Находим ссылки и кликаем по первой
    const links = fixture.debugElement.queryAll(By.css(".nav-link"));
    links[0].nativeElement.click();

    // Проверяем, что была выполнена навигация на правильный маршрут
    expect(router.navigateByUrl).toHaveBeenCalledWith("/home", jasmine.any(Object));
  });
});
```

**e. Тестирование событий и пользовательских взаимодействий**:

```typescript
describe("SearchComponent", () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should debounce search input and emit search event", fakeAsync(() => {
    // Создаем шпиона для выходного события
    spyOn(component.search, "emit");

    // Находим поле ввода
    const input = fixture.debugElement.query(By.css('input[type="text"]'));

    // Симулируем ввод текста
    input.nativeElement.value = "test";
    input.nativeElement.dispatchEvent(new Event("input"));

    // Проверяем, что событие не было эмитировано сразу
    expect(component.search.emit).not.toHaveBeenCalled();

    // Перематываем виртуальный таймер на время дебаунса
    tick(300); // Предполагаем, что дебаунс установлен на 300мс

    // Теперь событие должно быть эмитировано
    expect(component.search.emit).toHaveBeenCalledWith("test");

    // Вводим новый текст
    input.nativeElement.value = "angular";
    input.nativeElement.dispatchEvent(new Event("input"));

    // Перематываем таймер только на половину времени дебаунса
    tick(150);

    // Событие не должно быть эмитировано снова, так как не прошло достаточно времени
    expect(component.search.emit).toHaveBeenCalledTimes(1);

    // Перематываем оставшееся время
    tick(150);

    // Теперь событие должно быть эмитировано снова
    expect(component.search.emit).toHaveBeenCalledTimes(2);
    expect(component.search.emit).toHaveBeenCalledWith("angular");
  }));

  it("should handle keyboard events", () => {
    spyOn(component, "handleKeyboardEvent").and.callThrough();
    spyOn(component.clearSearch, "emit");

    // Находим поле ввода
    const input = fixture.debugElement.query(By.css('input[type="text"]'));

    // Симулируем нажатие Escape
    const escapeEvent = new KeyboardEvent("keydown", {
      key: "Escape",
      bubbles: true,
    });
    input.nativeElement.dispatchEvent(escapeEvent);

    // Проверяем, что метод был вызван и событие очистки было эмитировано
    expect(component.handleKeyboardEvent).toHaveBeenCalled();
    expect(component.clearSearch.emit).toHaveBeenCalled();
  });

  it("should clear input when clear button is clicked", () => {
    // Устанавливаем значение в форму
    component.searchForm.get("query")?.setValue("test query");
    fixture.detectChanges();

    // Проверяем, что кнопка очистки отображается
    const clearButton = fixture.debugElement.query(By.css(".clear-button"));
    expect(clearButton).toBeTruthy();

    // Кликаем по кнопке очистки
    clearButton.nativeElement.click();

    // Проверяем, что значение формы сброшено
    expect(component.searchForm.get("query")?.value).toBe("");

    // Проверяем, что кнопка очистки больше не отображается
    fixture.detectChanges();
    const updatedClearButton = fixture.debugElement.query(By.css(".clear-button"));
    expect(updatedClearButton).toBeFalsy();
  });
});
```

**f. Тестирование вложенных компонентов и проекции контента**:

```typescript
// Тестирование компонента, использующего ng-content
describe("CardComponent", () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let testHost: TestHostComponent;

  // Компонент-хост для тестирования проекции контента
  @Component({
    template: `
      <app-card [title]="cardTitle">
        <div class="card-content">Projected content</div>
        <div footer>Footer content</div>
      </app-card>
    `,
  })
  class TestHostComponent {
    cardTitle = "Test Card";
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent, TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should display the card title", () => {
    const titleElement = fixture.debugElement.query(By.css(".card-title"));
    expect(titleElement.nativeElement.textContent).toContain("Test Card");
  });

  it("should project content into the default slot", () => {
    const contentElement = fixture.debugElement.query(By.css(".card-content"));
    expect(contentElement.nativeElement.textContent).toContain("Projected content");
  });

  it("should project content into the footer slot", () => {
    const footerElement = fixture.debugElement.query(By.css(".card-footer"));
    expect(footerElement.nativeElement.textContent).toContain("Footer content");
  });

  it("should update when input properties change", () => {
    // Изменяем входное свойство
    testHost.cardTitle = "Updated Title";
    fixture.detectChanges();

    // Проверяем, что UI обновился
    const titleElement = fixture.debugElement.query(By.css(".card-title"));
    expect(titleElement.nativeElement.textContent).toContain("Updated Title");
  });
});
```

**4. Проблемы и решения при тестировании компонентов**

**a. Тестирование компонентов с внешними стилями**:

```typescript
describe("StyledComponent", () => {
  let fixture: ComponentFixture<StyledComponent>;
  let component: StyledComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StyledComponent],
    })
      .overrideComponent(StyledComponent, {
        set: {
          styleUrls: [], // Убираем внешние стили для тестов
          styles: [
            `.special-style { color: red; }`, // Добавляем только необходимые стили
          ],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(StyledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should apply correct styles", () => {
    const element = fixture.debugElement.query(By.css(".special-style"));
    const computedStyle = window.getComputedStyle(element.nativeElement);
    expect(computedStyle.color).toBe("rgb(255, 0, 0)"); // red color
  });
});
```

**b. Доступ к приватным свойствам и методам для тестирования**:

```typescript
describe("ComponentWithPrivateMethods", () => {
  let component: ComponentWithPrivateMethods;
  let fixture: ComponentFixture<ComponentWithPrivateMethods>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentWithPrivateMethods],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentWithPrivateMethods);
    component = fixture.componentInstance;
  });

  it("should calculate correct total", () => {
    // Доступ к приватному методу для тестирования
    const calculateTotal = (component as any).calculateTotal;

    // Вызываем приватный метод напрямую
    const result = calculateTotal([10, 20, 30]);
    expect(result).toBe(60);
  });

  it("should calculate discount correctly", () => {
    // Доступ к приватному свойству
    (component as any).discountRate = 0.1;

    // Вызываем публичный метод, который использует приватное свойство
    const result = component.calculateFinalPrice(100);
    expect(result).toBe(90);
  });
});
```

**c. Тестирование анимаций**:

```typescript
describe("AnimatedComponent", () => {
  let component: AnimatedComponent;
  let fixture: ComponentFixture<AnimatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimatedComponent],
      imports: [NoopAnimationsModule], // Отключаем анимации для тестов
    }).compileComponents();

    fixture = TestBed.createComponent(AnimatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should set correct animation state when toggled", () => {
    expect(component.animationState).toBe("hidden");

    component.toggle();
    fixture.detectChanges();

    expect(component.animationState).toBe("visible");

    component.toggle();
    fixture.detectChanges();

    expect(component.animationState).toBe("hidden");
  });
});
```

**d. Тестирование динамических компонентов**:

```typescript
describe("DynamicContentComponent", () => {
  let component: DynamicContentComponent;
  let fixture: ComponentFixture<DynamicContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicContentComponent, InfoComponent, WarningComponent, ErrorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicContentComponent);
    component = fixture.componentInstance;
  });

  it("should create info component dynamically", () => {
    component.createComponent("info", "Info message");
    fixture.detectChanges();

    const infoComponent = fixture.debugElement.query(By.directive(InfoComponent));
    expect(infoComponent).toBeTruthy();
    expect(infoComponent.componentInstance.message).toBe("Info message");
  });

  it("should create warning component dynamically", () => {
    component.createComponent("warning", "Warning message");
    fixture.detectChanges();

    const warningComponent = fixture.debugElement.query(By.directive(WarningComponent));
    expect(warningComponent).toBeTruthy();
    expect(warningComponent.componentInstance.message).toBe("Warning message");
  });

  it("should clear dynamic content", () => {
    component.createComponent("info", "Some message");
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.directive(InfoComponent))).toBeTruthy();

    component.clearContent();
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.directive(InfoComponent))).toBeFalsy();
    expect(fixture.debugElement.query(By.css(".dynamic-container")).children.length).toBe(0);
  });
});
```

ComponentFixture и DebugElement предоставляют мощный инструментарий для всестороннего тестирования компонентов Angular. Они позволяют тестировать не только логику компонентов, но и их взаимодействие с DOM, обработку событий, жизненный цикл и интеграцию с другими компонентами. Правильное использование этих инструментов обеспечивает надежное тестирование UI-части Angular-приложений.

### 5. How do you test directives and pipes in Angular?

Директивы и пайпы — это важные строительные блоки Angular-приложений, и их тестирование имеет свои особенности. Рассмотрим подробно подходы к тестированию каждого из этих типов.

#### Тестирование директив

Директивы манипулируют DOM и реагируют на пользовательские события, поэтому для их тестирования обычно требуется создание тестового компонента, в котором они будут использоваться.

**1. Подходы к тестированию директив**:

**a. Изолированное тестирование самой директивы**:

```typescript
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { HighlightDirective } from "./highlight.directive";

describe("HighlightDirective (изолированно)", () => {
  // Создаем экземпляр директивы напрямую
  it("should change background color on mouseenter", () => {
    // Создаем фейковый ElementRef
    const mockElementRef = {
      nativeElement: document.createElement("div"),
    };

    // Создаем фейковый Renderer2
    const mockRenderer = jasmine.createSpyObj("Renderer2", ["setStyle", "removeStyle"]);

    // Создаем экземпляр директивы с моками
    const directive = new HighlightDirective(mockElementRef, mockRenderer);

    // Устанавливаем входной параметр
    directive.highlightColor = "yellow";

    // Вызываем метод, который должен срабатывать при mouseenter
    directive.onMouseEnter();

    // Проверяем, что Renderer2.setStyle был вызван с правильными параметрами
    expect(mockRenderer.setStyle).toHaveBeenCalledWith(mockElementRef.nativeElement, "background-color", "yellow");

    // Вызываем метод, который должен срабатывать при mouseleave
    directive.onMouseLeave();

    // Проверяем, что style был удален
    expect(mockRenderer.removeStyle).toHaveBeenCalledWith(mockElementRef.nativeElement, "background-color");
  });
});
```

**b. Тестирование директивы через тестовый хост-компонент**:

```typescript
// Создаем тестовый хост-компонент, использующий директиву
@Component({
  template: `
    <div appHighlight="yellow" class="highlighted">Highlight me!</div>
    <div class="not-highlighted">Normal element</div>
  `,
})
class TestComponent {}

describe("HighlightDirective (в тестовом компоненте)", () => {
  let fixture: ComponentFixture<TestComponent>;
  let highlightedElements: DebugElement[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighlightDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    // Находим элементы с директивой
    highlightedElements = fixture.debugElement.queryAll(By.directive(HighlightDirective));
  });

  it("should have one highlighted element", () => {
    expect(highlightedElements.length).toBe(1);
    expect(highlightedElements[0].nativeElement.classList).toContain("highlighted");
  });

  it("should change background color on mouseenter", () => {
    const highlightedElement = highlightedElements[0];

    // Изначально фона нет
    expect(highlightedElement.nativeElement.style.backgroundColor).toBe("");

    // Симулируем событие mouseenter
    highlightedElement.triggerEventHandler("mouseenter", null);
    fixture.detectChanges();

    // Проверяем, что фон изменился
    expect(highlightedElement.nativeElement.style.backgroundColor).toBe("yellow");

    // Симулируем событие mouseleave
    highlightedElement.triggerEventHandler("mouseleave", null);
    fixture.detectChanges();

    // Проверяем, что фон вернулся к исходному
    expect(highlightedElement.nativeElement.style.backgroundColor).toBe("");
  });

  it("should not affect elements without the directive", () => {
    const normalElement = fixture.debugElement.query(By.css(".not-highlighted"));

    // Проверяем, что элемент без директивы не изменяется
    expect(normalElement.nativeElement.style.backgroundColor).toBe("");

    // Симулируем событие mouseenter на элементе без директивы
    normalElement.triggerEventHandler("mouseenter", null);
    fixture.detectChanges();

    // Проверяем, что фон не изменился
    expect(normalElement.nativeElement.style.backgroundColor).toBe("");
  });
});
```

**2. Тестирование структурных директив**:

Структурные директивы (начинающиеся с \*) изменяют структуру DOM и требуют особого подхода к тестированию.

```typescript
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { UnlessDirective } from "./unless.directive";

// Создаем тестовый компонент, использующий структурную директиву
@Component({
  template: `
    <div *appUnless="condition" class="unless-false">Show if condition is false</div>
    <div *appUnless="!condition" class="unless-true">Show if condition is true</div>
  `,
})
class TestComponent {
  condition = false;
}

describe("UnlessDirective", () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnlessDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should display content when condition is false", () => {
    // condition = false, поэтому элемент with unless-false должен отображаться
    const unlessFalseElement = fixture.debugElement.query(By.css(".unless-false"));
    expect(unlessFalseElement).toBeTruthy();

    // unless-true не должен отображаться
    const unlessTrueElement = fixture.debugElement.query(By.css(".unless-true"));
    expect(unlessTrueElement).toBeFalsy();
  });

  it("should respond to changes in condition", () => {
    // Изначально condition = false
    expect(fixture.debugElement.query(By.css(".unless-false"))).toBeTruthy();
    expect(fixture.debugElement.query(By.css(".unless-true"))).toBeFalsy();

    // Меняем условие
    component.condition = true;
    fixture.detectChanges();

    // Теперь должно быть наоборот
    expect(fixture.debugElement.query(By.css(".unless-false"))).toBeFalsy();
    expect(fixture.debugElement.query(By.css(".unless-true"))).toBeTruthy();
  });
});
```

**3. Тестирование директив с входными параметрами**:

```typescript
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TooltipDirective } from './tooltip.directive';

// Тестовый компонент с директивой, имеющей входные параметры
@Component({
  template: `
    <div [appTooltip]="tooltipText"
         [tooltipPosition]="position"
         class="with-tooltip">Hover me</div>
  `
})
class TestComponent {
  tooltipText = 'Test tooltip';
  position = 'top';
}

describe('TooltipDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let tooltipElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TooltipDirective, TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    tooltipElement = fixture.debugElement.query(By.directive(TooltipDirective));
  });

  it('should create tooltip when mouse enters', () => {
    // Проверяем, что изначально подсказки нет в DOM
    expect(document.querySelector('.tooltip')).toBeFalsy();

    // Симулируем наведение мыши
    tooltipElement.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();

    // Проверяем, что подсказка появилась
    const tooltip = document.querySelector('.tooltip');
    expect(tooltip).toBeTruthy();
    expect(tooltip?.textContent).toContain('Test tooltip');
    expect(tooltip?.classList).toContain('tooltip-top'); // Проверяем позицию

    // Симулируем уход мыши
    tooltipElement.triggerEventHandler('mouseleave', null);
    fixture.detectChanges();

// Проверяем, что подсказка исчезла
expect(document.querySelector('.tooltip')).toBeNull();
});

it('должен показывать пользовательский контент в подсказке', () => {
  // Создаем элемент с директивой и пользовательским контентом
  component.tooltipContent = '<strong>Важная информация!</strong>';
  fixture.detectChanges();

  // Наводим мышь на элемент
  tooltipElement.triggerEventHandler('mouseenter', null);
  fixture.detectChanges();

  // Проверяем, что подсказка содержит HTML
  const tooltip = document.querySelector('.tooltip');
  expect(tooltip.innerHTML).toContain('<strong>Важная информация!</strong>');
});
```

#### Тестирование асинхронных операций

При тестировании асинхронных операций в компонентах важно правильно обрабатывать таймеры, промисы и Observable:

```typescript
describe("AsyncComponent", () => {
  let component: AsyncComponent;
  let fixture: ComponentFixture<AsyncComponent>;
  let dataService: jasmine.SpyObj<DataService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj("DataService", ["getData"]);

    await TestBed.configureTestingModule({
      declarations: [AsyncComponent],
      providers: [{ provide: DataService, useValue: spy }],
    }).compileComponents();

    dataService = TestBed.inject(DataService) as jasmine.SpyObj<DataService>;
    fixture = TestBed.createComponent(AsyncComponent);
    component = fixture.componentInstance;
  });

  it("должен загружать данные при инициализации (с fakeAsync)", fakeAsync(() => {
    const testData = ["item1", "item2", "item3"];
    dataService.getData.and.returnValue(of(testData).pipe(delay(1000)));

    fixture.detectChanges(); // Вызывает ngOnInit

    // В начале данных нет
    expect(component.isLoading).toBeTrue();
    expect(component.items.length).toBe(0);

    // Перематываем таймер
    tick(1000);

    // Проверяем данные после получения
    expect(component.isLoading).toBeFalse();
    expect(component.items).toEqual(testData);
    expect(component.error).toBeNull();
  }));

  it("должен обрабатывать ошибки при загрузке данных (с async/await)", async () => {
    const errorMessage = "Error loading data";
    dataService.getData.and.returnValue(throwError(() => new Error(errorMessage)));

    fixture.detectChanges(); // Вызывает ngOnInit

    // Ждем выполнения всех асинхронных операций
    await fixture.whenStable();

    // Проверяем состояние после ошибки
    expect(component.isLoading).toBeFalse();
    expect(component.error).toEqual(errorMessage);
    expect(component.items.length).toBe(0);
  });
});
```

#### Тестирование маршрутизации

Тестирование компонентов с маршрутизацией требует создания имитации Router и ActivatedRoute:

```typescript
describe("ProfileComponent", () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let userService: jasmine.SpyObj<UserService>;
  let mockActivatedRoute: any;
  let mockRouter: any;

  beforeEach(async () => {
    userService = jasmine.createSpyObj("UserService", ["getUserById"]);

    mockActivatedRoute = {
      paramMap: of(convertToParamMap({ id: "123" })),
    };

    mockRouter = jasmine.createSpyObj("Router", ["navigate"]);

    await TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      providers: [
        { provide: UserService, useValue: userService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
  });

  it("должен загружать профиль по id из URL", () => {
    const testUser = { id: 123, name: "John Doe", email: "john@example.com" };
    userService.getUserById.and.returnValue(of(testUser));

    fixture.detectChanges();

    expect(userService.getUserById).toHaveBeenCalledWith("123");
    expect(component.user).toEqual(testUser);
  });

  it("должен перенаправлять на страницу 404 при отсутствии пользователя", () => {
    userService.getUserById.and.returnValue(of(null));

    fixture.detectChanges();

    expect(mockRouter.navigate).toHaveBeenCalledWith(["/not-found"]);
  });
});
```

#### Тестирование сложных взаимодействий компонентов

Тестирование сложных взаимодействий между родительскими и дочерними компонентами:

```typescript
describe("ShoppingCartComponent", () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingCartComponent, CartItemComponent, TotalSummaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
  });

  it("должен обновлять итоговую сумму при изменении количества товаров", () => {
    // Устанавливаем начальные товары
    component.items = [
      { id: 1, name: "Item 1", price: 10, quantity: 1 },
      { id: 2, name: "Item 2", price: 20, quantity: 2 },
    ];

    fixture.detectChanges();

    // Проверяем начальную сумму (10*1 + 20*2 = 50)
    const totalElement = fixture.debugElement.query(By.css(".total-amount"));
    expect(totalElement.nativeElement.textContent).toContain("50");

    // Находим кнопки увеличения количества для первого товара
    const firstItemIncreaseButton = fixture.debugElement.queryAll(By.css(".item-increase"))[0];
    firstItemIncreaseButton.triggerEventHandler("click", null);

    fixture.detectChanges();

    // Проверяем обновленную сумму (10*2 + 20*2 = 60)
    expect(totalElement.nativeElement.textContent).toContain("60");
  });

  it("должен удалять товар из корзины", () => {
    // Устанавливаем начальные товары
    component.items = [
      { id: 1, name: "Item 1", price: 10, quantity: 1 },
      { id: 2, name: "Item 2", price: 20, quantity: 1 },
    ];

    fixture.detectChanges();

    // Проверяем начальное количество товаров
    let itemElements = fixture.debugElement.queryAll(By.css(".cart-item"));
    expect(itemElements.length).toBe(2);

    // Находим кнопку удаления для первого товара
    const removeButton = fixture.debugElement.queryAll(By.css(".remove-button"))[0];
    removeButton.triggerEventHandler("click", null);

    fixture.detectChanges();

    // Проверяем, что товар удален
    itemElements = fixture.debugElement.queryAll(By.css(".cart-item"));
    expect(itemElements.length).toBe(1);
    expect(component.items.length).toBe(1);
    expect(component.items[0].id).toBe(2);
  });
});
```

### 6. How do you mock (mock) and stub (stub) dependencies in tests for services?

При тестировании сервисов в Angular часто необходимо изолировать тестируемый сервис от его зависимостей. Вот несколько подходов:

#### Использование jasmine.createSpyObj

```typescript
// Тестирование UserService, который зависит от HttpClient и LoggerService
describe("UserService", () => {
  let userService: UserService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let loggerServiceSpy: jasmine.SpyObj<LoggerService>;

  beforeEach(() => {
    // Создаем шпионы (мок-объекты) для зависимостей
    httpClientSpy = jasmine.createSpyObj("HttpClient", ["get", "post", "put", "delete"]);
    loggerServiceSpy = jasmine.createSpyObj("LoggerService", ["log", "error", "warn"]);

    // Создаем экземпляр тестируемого сервиса с моками
    userService = new UserService(httpClientSpy, loggerServiceSpy);
  });

  it("должен возвращать ожидаемых пользователей при успешном запросе", () => {
    // Подготовка тестовых данных
    const expectedUsers: User[] = [
      { id: 1, name: "Тестовый пользователь 1" },
      { id: 2, name: "Тестовый пользователь 2" },
    ];

    // Настраиваем мок для имитации успешного HTTP-запроса
    httpClientSpy.get.and.returnValue(of(expectedUsers));

    // Вызываем тестируемый метод
    userService.getUsers().subscribe({
      next: (users) => {
        // Проверяем, что результат соответствует ожиданиям
        expect(users).toEqual(expectedUsers, "ожидаемые пользователи");
        // Проверяем, что метод логирования был вызван
        expect(loggerServiceSpy.log).toHaveBeenCalledWith("Пользователи получены");
      },
    });

    // Проверяем, что метод HttpClient был вызван с правильным URL
    expect(httpClientSpy.get).toHaveBeenCalledWith("api/users");
  });
});
```

#### Использование TestBed для внедрения моков

```typescript
describe("AuthService", () => {
  let authService: AuthService;
  let httpTestingController: HttpTestingController;
  let storageServiceMock: any;

  beforeEach(() => {
    // Создаем мок для StorageService
    storageServiceMock = {
      getItem: jasmine.createSpy("getItem").and.returnValue(null),
      setItem: jasmine.createSpy("setItem"),
      removeItem: jasmine.createSpy("removeItem"),
    };

    // Конфигурируем TestBed с моками
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Импортируем специальный модуль для тестирования HTTP
      providers: [
        AuthService,
        { provide: StorageService, useValue: storageServiceMock }, // Заменяем реальный сервис моком
      ],
    });

    // Получаем экземпляры сервиса и контроллера HTTP
    authService = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  // Очистка после каждого теста
  afterEach(() => {
    httpTestingController.verify(); // Проверяем, что все ожидаемые запросы были выполнены
  });

  it("должен аутентифицировать пользователя и сохранить токен", () => {
    // Тестовые данные
    const credentials = { username: "test", password: "password" };
    const mockResponse = { token: "fake-jwt-token" };

    // Вызываем тестируемый метод
    authService.login(credentials).subscribe((response) => {
      expect(response).toEqual(mockResponse);
      // Проверяем, что токен был сохранен
      expect(storageServiceMock.setItem).toHaveBeenCalledWith("auth_token", "fake-jwt-token");
    });

    // Имитируем HTTP-ответ
    const req = httpTestingController.expectOne("api/auth/login");
    expect(req.request.method).toEqual("POST");
    expect(req.request.body).toEqual(credentials);

    // Отправляем имитированный ответ
    req.flush(mockResponse);
  });
});
```

#### Использование моков для зависимостей, не связанных с Angular

```typescript
// Мокирование внешних библиотек и API
describe("PaymentService", () => {
  let service: PaymentService;
  let stripeApiMock: any;

  beforeEach(() => {
    // Создаем мок для внешнего API Stripe
    stripeApiMock = {
      createToken: jasmine.createSpy("createToken").and.returnValue(Promise.resolve({ token: "fake-stripe-token" })),
      processPayment: jasmine.createSpy("processPayment").and.returnValue(Promise.resolve({ success: true })),
    };

    TestBed.configureTestingModule({
      providers: [
        PaymentService,
        { provide: STRIPE_API, useValue: stripeApiMock }, // Используем InjectionToken
      ],
    });

    service = TestBed.inject(PaymentService);
  });

  it("должен обрабатывать платеж с использованием Stripe API", async () => {
    // Тестовые данные
    const paymentDetails = {
      cardNumber: "4242424242424242",
      expMonth: 12,
      expYear: 2025,
      cvc: "123",
    };

    // Вызов тестируемого метода
    const result = await service.processPayment(paymentDetails, 99.99);

    // Проверки
    expect(stripeApiMock.createToken).toHaveBeenCalledWith({
      card: jasmine.objectContaining(paymentDetails),
    });

    expect(stripeApiMock.processPayment).toHaveBeenCalledWith("fake-stripe-token", 99.99);
    expect(result.success).toBeTrue();
  });
});
```

### 7. How do you test forms based on templates and reactive forms?

#### Тестирование форм на основе шаблонов (Template-driven Forms)

```typescript
describe("LoginFormComponent (Template-driven)", () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let formElement: DebugElement;
  let submitSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule], // Импортируем FormsModule для поддержки шаблонных форм
      declarations: [LoginFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    formElement = fixture.debugElement.query(By.css("form"));

    // Шпионим за методом отправки формы
    submitSpy = spyOn(component, "onSubmit").and.callThrough();

    fixture.detectChanges(); // Инициализируем представление
  });

  it("должен показывать ошибку, если email невалидный", async () => {
    // Получаем элементы формы
    const emailInput = fixture.debugElement.query(By.css('input[name="email"]')).nativeElement;

    // Вводим невалидный email и триггерим события
    emailInput.value = "invalid-email";
    emailInput.dispatchEvent(new Event("input"));
    emailInput.dispatchEvent(new Event("blur")); // Важно для триггера валидации
    fixture.detectChanges();

    // Ждем завершения асинхронных операций
    await fixture.whenStable();

    // Проверяем, что сообщение об ошибке видимо
    const emailError = fixture.debugElement.query(By.css(".email-error"));
    expect(emailError).not.toBeNull("Сообщение об ошибке должно быть видимо для невалидного email");
    expect(emailError.nativeElement.textContent).toContain("Введите корректный email");

    // Проверяем, что форма невалидная
    expect(component.loginForm.valid).toBeFalse("Форма должна быть невалидной");
  });

  it("должен успешно отправлять форму с валидными данными", async () => {
    // Получаем элементы формы
    const emailInput = fixture.debugElement.query(By.css('input[name="email"]')).nativeElement;
    const passwordInput = fixture.debugElement.query(By.css('input[name="password"]')).nativeElement;

    // Вводим валидные данные
    emailInput.value = "test@example.com";
    emailInput.dispatchEvent(new Event("input"));

    passwordInput.value = "password123";
    passwordInput.dispatchEvent(new Event("input"));

    fixture.detectChanges();
    await fixture.whenStable();

    // Отправляем форму
    formElement.triggerEventHandler("submit", null);
    fixture.detectChanges();

    // Проверяем, что метод onSubmit был вызван с правильными данными
    expect(submitSpy).toHaveBeenCalled();
    expect(component.loginForm.value).toEqual({
      email: "test@example.com",
      password: "password123",
    });
  });
});
```

#### Тестирование реактивных форм (Reactive Forms)

```typescript
describe("RegisterFormComponent (Reactive)", () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;
  let formElement: DebugElement;
  let authServiceMock: jasmine.SpyObj<AuthService>;

  beforeEach(async () => {
    // Создаем мок для AuthService
    authServiceMock = jasmine.createSpyObj("AuthService", ["register"]);

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule], // Импортируем ReactiveFormsModule
      declarations: [RegisterFormComponent],
      providers: [{ provide: AuthService, useValue: authServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    formElement = fixture.debugElement.query(By.css("form"));

    fixture.detectChanges(); // Инициализируем форму
  });

  it("должен создать форму с необходимыми контролами", () => {
    // Проверяем наличие всех контролов формы
    expect(component.registerForm.contains("name")).toBeTrue();
    expect(component.registerForm.contains("email")).toBeTrue();
    expect(component.registerForm.contains("password")).toBeTrue();
    expect(component.registerForm.contains("confirmPassword")).toBeTrue();

    // Проверяем, что все контролы обязательны
    const nameControl = component.registerForm.get("name");
    nameControl.setValue("");
    expect(nameControl.valid).toBeFalse("Поле имени должно быть обязательным");
    expect(nameControl.errors.required).toBeTruthy();
  });

  it("должен проверять совпадение паролей", () => {
    // Устанавливаем разные пароли
    const passwordControl = component.registerForm.get("password");
    const confirmPasswordControl = component.registerForm.get("confirmPassword");

    passwordControl.setValue("password123");
    confirmPasswordControl.setValue("differentpassword");

    // Проверяем наличие ошибки несовпадения
    expect(component.registerForm.errors.passwordMismatch).toBeTruthy("Должна быть ошибка несовпадения паролей");

    // Устанавливаем одинаковые пароли
    confirmPasswordControl.setValue("password123");

    // Проверяем, что ошибка исчезла
    expect(component.registerForm.errors?.passwordMismatch).toBeFalsy("Ошибка несовпадения паролей должна исчезнуть");
  });

  it("должен вызывать AuthService при отправке валидной формы", () => {
    // Готовим тестовые данные
    const testUser = {
      name: "Test User",
      email: "test@example.com",
      password: "StrongPass123",
    };

    // Настраиваем мок сервиса
    authServiceMock.register.and.returnValue(of({ success: true }));

    // Заполняем форму
    component.registerForm.patchValue({
      name: testUser.name,
      email: testUser.email,
      password: testUser.password,
      confirmPassword: testUser.password,
    });

    // Проверяем, что форма валидна
    expect(component.registerForm.valid).toBeTrue("Форма должна быть валидной");

    // Отправляем форму
    component.onSubmit();

    // Проверяем, что сервис был вызван с правильными данными
    expect(authServiceMock.register).toHaveBeenCalledWith({
      name: testUser.name,
      email: testUser.email,
      password: testUser.password,
    });
  });

  it("должен отключать кнопку отправки для невалидной формы", () => {
    // Проверяем, что изначально кнопка отключена (форма пустая)
    const submitButton = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;
    expect(submitButton.disabled).toBeTrue("Кнопка должна быть отключена для невалидной формы");

    // Заполняем форму валидными данными
    component.registerForm.patchValue({
      name: "Test User",
      email: "test@example.com",
      password: "StrongPass123",
      confirmPassword: "StrongPass123",
    });
    fixture.detectChanges();

    // Проверяем, что кнопка активна
    expect(submitButton.disabled).toBeFalse("Кнопка должна быть активна для валидной формы");
  });
});
```

### 8. What are `async`, `fakeAsync`, and `tick`, and how are they used when testing asynchronous code?

#### async

Функция `async` используется для тестирования кода, который возвращает Promise. Она создает специальную зону, которая отслеживает все асинхронные операции.

```typescript
// Тестирование компонента, загружающего данные асинхронно
it("должен загружать данные после инициализации", async(() => {
  // Мокируем сервис
  const mockData = ["item1", "item2"];
  const serviceSpy = fixture.debugElement.injector.get(DataService);
  spyOn(serviceSpy, "getData").and.returnValue(Promise.resolve(mockData));

  // Инициализируем компонент
  fixture.detectChanges(); // Вызывает ngOnInit

  // Ждем завершения асинхронных операций
  fixture.whenStable().then(() => {
    // После разрешения всех промисов запускаем повторное обнаружение изменений
    fixture.detectChanges();

    // Проверяем, что данные загружены в компонент
    expect(component.data).toEqual(mockData);

    // Проверяем, что данные отображаются в шаблоне
    const listItems = fixture.debugElement.queryAll(By.css("li"));
    expect(listItems.length).toBe(2);
    expect(listItems[0].nativeElement.textContent).toContain("item1");
  });
}));
```

#### fakeAsync

Функция `fakeAsync` создает специальную зону, которая позволяет синхронно тестировать асинхронный код, контролируя время. Вместе с `tick()` она позволяет имитировать течение времени.

```typescript
// Тестирование задержки ввода с использованием debounceTime
it("должен вызывать поиск после задержки ввода", fakeAsync(() => {
  // Шпионим за методом поиска
  spyOn(component, "search");

  // Получаем элемент ввода
  const input = fixture.debugElement.query(By.css("input")).nativeElement;

  // Вводим текст
  input.value = "test query";
  input.dispatchEvent(new Event("input"));

  // На этом этапе поиск еще не должен быть вызван (из-за debounceTime)
  expect(component.search).not.toHaveBeenCalled();

  // Перематываем таймер на 300 мс (обычное значение для debounceTime)
  tick(300);

  // Теперь поиск должен быть вызван
  expect(component.search).toHaveBeenCalledWith("test query");
}));

// Тестирование нескольких асинхронных операций
it("должен обрабатывать несколько асинхронных операций последовательно", fakeAsync(() => {
  let status = "initial";

  // Имитируем асинхронные операции с разными задержками
  setTimeout(() => {
    status = "first update";
  }, 100);

  setTimeout(() => {
    status = "second update";
  }, 200);

  // Проверяем начальное состояние
  expect(status).toBe("initial");

  // Перематываем первый таймер
  tick(100);
  expect(status).toBe("first update");

  // Перематываем второй таймер
  tick(100); // Еще 100 мс (всего 200 мс)
  expect(status).toBe("second update");
}));
```

#### tick

Функция `tick()` работает только внутри `fakeAsync` и имитирует прохождение времени, вызывая выполнение всех таймеров, которые должны сработать за указанный период.

```typescript
// Тестирование интервала с использованием setInterval
it("должен обновлять счетчик каждую секунду", fakeAsync(() => {
  // Запускаем интервал в компоненте
  component.startCounter();

  // Изначально счетчик равен 0
  expect(component.counter).toBe(0);

  // Перематываем таймер на 1 секунду
  tick(1000);
  expect(component.counter).toBe(1);

  // Перематываем таймер еще на 2 секунды
  tick(2000);
  expect(component.counter).toBe(3);

  // Очищаем таймеры, чтобы избежать утечек памяти
  component.stopCounter();
}));

// Тестирование анимаций
it("должен показывать/скрывать элемент с анимацией", fakeAsync(() => {
  // Компонент с анимацией появления/исчезновения
  component.isVisible = false;
  fixture.detectChanges();

  // Элемент скрыт
  let element = fixture.debugElement.query(By.css(".animated-element"));
  expect(element).toBeNull();

  // Показываем элемент
  component.show();
  fixture.detectChanges();

  // Сразу после вызова show() элемент должен быть в состоянии "анимации появления"
  element = fixture.debugElement.query(By.css(".animated-element"));
  expect(element).not.toBeNull();
  expect(element.classes["fade-in"]).toBeTrue();
  expect(element.classes["visible"]).toBeFalse(); // Еще не полностью виден

  // Перематываем таймер на продолжительность анимации
  tick(300); // Предполагаем, что анимация длится 300 мс
  fixture.detectChanges();

  // После анимации элемент должен быть полностью виден
  expect(element.classes["fade-in"]).toBeFalse();
  expect(element.classes["visible"]).toBeTrue();
}));
```

### 9. How do you ensure your tests are isolated and do not interfere with each other?

#### Сброс состояния перед каждым тестом

```typescript
describe("DataService", () => {
  let service: DataService;

  // Перед каждым тестом создаем новый экземпляр сервиса
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService],
    });
    service = TestBed.inject(DataService);
  });

  it("тест 1: должен добавлять элемент в список", () => {
    expect(service.items.length).toBe(0); // Изначально список пуст
    service.addItem("test item");
    expect(service.items.length).toBe(1);
  });

  it("тест 2: список должен быть пустым", () => {
    // Благодаря beforeEach это новый экземпляр сервиса со свежим списком
    expect(service.items.length).toBe(0);
  });
});
```

#### Использование независимых фикстур для каждого теста

```typescript
// Каждый тест создает свою собственную фикстуру
describe("FormComponent", () => {
  it("тест 1: должен показывать ошибку для невалидного email", () => {
    // Создаем фикстуру только для этого теста
    const fixture = TestBed.createComponent(FormComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    // ... тестовая логика для проверки валидации email
  });

  it("тест 2: должен успешно отправлять форму с валидными данными", () => {
    // Создаем новую фикстуру для этого теста
    const fixture = TestBed.createComponent(FormComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    // ... тестовая логика для отправки формы
  });
});
```

#### Использование спай-объектов вместо реальных зависимостей

```typescript
describe("NotificationService", () => {
  let service: NotificationService;
  let toastServiceSpy: jasmine.SpyObj<ToastService>;
  let loggerServiceSpy: jasmine.SpyObj<LoggerService>;

  beforeEach(() => {
    // Создаем отдельные спай-объекты для каждого теста
    const toastSpy = jasmine.createSpyObj("ToastService", ["show", "hide"]);
    const loggerSpy = jasmine.createSpyObj("LoggerService", ["log", "error"]);

    TestBed.configureTestingModule({
      providers: [NotificationService, { provide: ToastService, useValue: toastSpy }, { provide: LoggerService, useValue: loggerSpy }],
    });

    service = TestBed.inject(NotificationService);
    toastServiceSpy = TestBed.inject(ToastService) as jasmine.SpyObj<ToastService>;
    loggerServiceSpy = TestBed.inject(LoggerService) as jasmine.SpyObj<LoggerService>;
  });

  it("должен показывать успешное уведомление", () => {
    service.showSuccess("Операция выполнена!");

    expect(toastServiceSpy.show).toHaveBeenCalledWith("Операция выполнена!", { type: "success" });
    expect(loggerServiceSpy.log).toHaveBeenCalled();
  });

  // Другие тесты не зависят от состояния предыдущих тестов,
  // так как спай-объекты создаются заново перед каждым тестом
});
```

#### Изоляция состояния DOM

```typescript
describe("ModalComponent", () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalComponent],
    }).compileComponents();

    // Создаем новую фикстуру перед каждым тестом
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Очищаем DOM после каждого теста
  afterEach(() => {
    // Удаляем все модальные окна, которые могли быть добавлены в body
    document.body.querySelectorAll(".modal").forEach((el) => el.remove());
    document.body.className = ""; // Сбрасываем классы на body (например, modal-open)

    // Сбрасываем слушатели событий, которые могли быть добавлены к window или document
    window.onkeydown = null;
    window.onresize = null;
  });

  it("должен добавлять модальное окно в body при открытии", () => {
    component.open();
    fixture.detectChanges();

    const modalElement = document.body.querySelector(".modal");
    expect(modalElement).not.toBeNull();
    expect(document.body.classList).toContain("modal-open");
  });

  it("должен закрывать модальное окно при нажатии Escape", () => {
    component.open();
    fixture.detectChanges();

    // Имитируем нажатие клавиши Escape
    const escapeEvent = new KeyboardEvent("keydown", { key: "Escape" });
    document.dispatchEvent(escapeEvent);
    fixture.detectChanges();

    // Проверяем, что модальное окно закрыто
    const modalElement = document.body.querySelector(".modal");
    expect(modalElement).toBeNull();
    expect(document.body.classList).not.toContain("modal-open");
  });
});
```

#### Сброс глобальных сервисов или значений

```typescript
describe("ThemeService", () => {
  let service: ThemeService;

  beforeEach(() => {
    // Сброс localStorage перед каждым тестом
    localStorage.clear();

    TestBed.configureTestingModule({
      providers: [ThemeService],
    });

    service = TestBed.inject(ThemeService);
  });

  it("должен загружать тему из localStorage при инициализации", () => {
    // Предварительно устанавливаем значение в localStorage
    localStorage.setItem("theme", "dark");

    // Создаем новый экземпляр сервиса, который должен прочитать значение из localStorage
    service = new ThemeService();

    expect(service.currentTheme).toBe("dark");
  });

  it("должен использовать тему по умолчанию, если в localStorage ничего нет", () => {
    // localStorage уже очищен в beforeEach

    // Создаем новый экземпляр сервиса
    service = new ThemeService();

    expect(service.currentTheme).toBe("light"); // светлая тема по умолчанию
  });
});
```

#### Изоляция с использованием конфигурации тестовых модулей

````typescript
describe('AuthGuard', () => {
  let authGuard: AuthGuard;
  let authServiceMock: jasmine.SpyObj<AuthService>;
  let routerMock: jasmine.SpyObj<Router>;

  // Отдельная конфигурация модуля для каждого набора тестов
  describe('когда пользователь аутентифицирован', () => {
    beforeEach(() => {
      // Создаем моки с нужным состоянием для этого набора тестов
      authServiceMock = jasmine.createSpyObj('AuthService', ['isAuthenticated']);
      authServiceMock.isAuthenticated.and.returnValue(true);

      routerMock = jasmine.createSpyObj('Router', ['navigate']);

      TestBed.configureTestingModule({
        providers: [
          AuthGuard,
          { provide: AuthService, useValue: authServiceMock },
          { provide: Router, useValue: routerMock }
        ]
      });

      authGuard = TestBed.inject(AuthGuard);
    });

Продолжаю объяснение про изоляцию тестов в Angular:

```typescript
    it('должен разрешать доступ к защищенному маршруту', () => {
      const canActivate = authGuard.canActivate(null, null);
      expect(canActivate).toBeTrue();
      expect(routerMock.navigate).not.toHaveBeenCalled();
    });
  });

  // Полностью независимый набор тестов с другой конфигурацией
  describe('когда пользователь не аутентифицирован', () => {
    beforeEach(() => {
      // Создаем моки с другим состоянием для этого набора тестов
      authServiceMock = jasmine.createSpyObj('AuthService', ['isAuthenticated']);
      authServiceMock.isAuthenticated.and.returnValue(false);

      routerMock = jasmine.createSpyObj('Router', ['navigate']);

      TestBed.configureTestingModule({
        providers: [
          AuthGuard,
          { provide: AuthService, useValue: authServiceMock },
          { provide: Router, useValue: routerMock }
        ]
      });

      authGuard = TestBed.inject(AuthGuard);
    });

    it('должен блокировать доступ и перенаправлять на страницу логина', () => {
      const canActivate = authGuard.canActivate(null, null);
      expect(canActivate).toBeFalse();
      expect(routerMock.navigate).toHaveBeenCalledWith(['/login']);
    });
  });
});
````

#### Использование testEnvironment и TestScheduler для тестирования Observable

```typescript
describe("SearchService", () => {
  let service: SearchService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let testScheduler: TestScheduler;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj("HttpClient", ["get"]);

    // Создаем scheduler для управления временем в RxJS
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    service = new SearchService(httpClientSpy);
  });

  it("должен возвращать результаты поиска с задержкой и отменять предыдущие запросы", () => {
    // Используем testScheduler для синхронного тестирования асинхронного кода
    testScheduler.run(({ cold, hot, expectObservable }) => {
      // Имитируем последовательный ввод пользователя
      const input$ = hot("a-b-c", {
        a: "i",
        b: "ip",
        c: "iph",
      });

      // Имитируем ответы сервера с задержкой
      const response1 = cold("---a|", { a: ["item1", "item2"] });
      const response2 = cold("---b|", { b: ["iphone", "ipad"] });
      const response3 = cold("---c|", { c: ["iphone 13", "iphone 14"] });

      // Настраиваем шпион для возврата разных ответов на разные запросы
      httpClientSpy.get.and.returnValues(response1, response2, response3);

      // Создаем поток поиска, используя входной поток пользователя
      const result$ = input$.pipe(switchMap((term) => service.search(term)));

      // Определяем ожидаемый результат
      // Из-за switchMap и задержки ответа сервера, только последний запрос (iph) должен вернуть результат
      expectObservable(result$).toBe("------c", {
        c: ["iphone 13", "iphone 14"],
      });
    });
  });
});
```

#### Использование NgModuleMetadata для изоляции модульных зависимостей

```typescript
// Создаем изолированный модуль для тестирования компонентов с маршрутизацией
describe("NavigationComponent", () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let location: Location;
  let router: Router;

  // Создаем отдельные маршруты для тестов, которые не влияют на другие тесты
  const routes: Routes = [
    { path: "", component: HomeStubComponent },
    { path: "products", component: ProductsStubComponent },
    { path: "about", component: AboutStubComponent },
  ];

  // Создаем заглушки компонентов для маршрутов
  @Component({ template: "<div>Home</div>" })
  class HomeStubComponent {}

  @Component({ template: "<div>Products</div>" })
  class ProductsStubComponent {}

  @Component({ template: "<div>About</div>" })
  class AboutStubComponent {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Импортируем RouterTestingModule с нашими тестовыми маршрутами
      imports: [RouterTestingModule.withRoutes(routes)],
      // Декларируем компонент, который тестируем, и заглушки для маршрутов
      declarations: [NavigationComponent, HomeStubComponent, ProductsStubComponent, AboutStubComponent],
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // Навигируем на главную страницу перед началом теста
    router.initialNavigation();
  });

  it("должен подсвечивать активный пункт меню", async () => {
    // Проверяем начальное состояние (активна главная страница)
    let activeLinks = fixture.debugElement.queryAll(By.css(".nav-link.active"));
    expect(activeLinks.length).toBe(1);
    expect(activeLinks[0].nativeElement.textContent).toContain("Home");

    // Кликаем по ссылке на страницу Products
    const productsLink = fixture.debugElement.queryAll(By.css(".nav-link"))[1].nativeElement;
    productsLink.click();

    // Ждем завершения навигации
    await fixture.whenStable();
    fixture.detectChanges();

    // Проверяем, что активная ссылка изменилась
    activeLinks = fixture.debugElement.queryAll(By.css(".nav-link.active"));
    expect(activeLinks.length).toBe(1);
    expect(activeLinks[0].nativeElement.textContent).toContain("Products");

    // Проверяем текущий путь
    expect(location.path()).toBe("/products");
  });
});
```

#### Дополнительные техники изоляции и эффективного тестирования

#### Использование jasmine.clock() для контроля времени

```typescript
describe("AutoSaveService", () => {
  let service: AutoSaveService;
  let storageServiceSpy: jasmine.SpyObj<StorageService>;

  beforeEach(() => {
    jasmine.clock().install(); // Устанавливаем контроль над встроенными таймерами

    storageServiceSpy = jasmine.createSpyObj("StorageService", ["saveData"]);
    service = new AutoSaveService(storageServiceSpy);
  });

  afterEach(() => {
    jasmine.clock().uninstall(); // Обязательно удаляем контроль после теста
  });

  it("должен автоматически сохранять данные каждые 60 секунд", () => {
    // Запускаем автосохранение
    service.startAutoSave({ text: "Начальный текст" });

    // Изначально не должно быть вызовов сохранения
    expect(storageServiceSpy.saveData).not.toHaveBeenCalled();

    // Перематываем время на 30 секунд
    jasmine.clock().tick(30000);
    expect(storageServiceSpy.saveData).not.toHaveBeenCalled(); // Еще не должно быть вызова

    // Обновляем данные
    service.updateData({ text: "Обновленный текст" });

    // Перематываем время еще на 30 секунд (всего 60 секунд)
    jasmine.clock().tick(30000);

    // Теперь должно произойти сохранение
    expect(storageServiceSpy.saveData).toHaveBeenCalledWith({ text: "Обновленный текст" });
    storageServiceSpy.saveData.calls.reset(); // Сбрасываем счетчик вызовов

    // Перематываем еще на 60 секунд
    jasmine.clock().tick(60000);

    // Должно произойти еще одно сохранение
    expect(storageServiceSpy.saveData).toHaveBeenCalledTimes(1);

    // Останавливаем автосохранение
    service.stopAutoSave();

    // Сбрасываем счетчик вызовов
    storageServiceSpy.saveData.calls.reset();

    // Перематываем еще на 60 секунд
    jasmine.clock().tick(60000);

    // Больше не должно быть вызовов сохранения
    expect(storageServiceSpy.saveData).not.toHaveBeenCalled();
  });
});
```

#### Использование сбрасываемых шпионов (resetSpies)

```typescript
describe("UserAdminComponent", () => {
  let component: UserAdminComponent;
  let fixture: ComponentFixture<UserAdminComponent>;
  let userServiceSpy: jasmine.SpyObj<UserService>;
  let notificationServiceSpy: jasmine.SpyObj<NotificationService>;

  // Функция для сброса всех шпионов
  function resetSpies(): void {
    userServiceSpy.getUsers.calls.reset();
    userServiceSpy.deleteUser.calls.reset();
    userServiceSpy.updateUser.calls.reset();
    notificationServiceSpy.showSuccess.calls.reset();
    notificationServiceSpy.showError.calls.reset();
  }

  beforeEach(async () => {
    userServiceSpy = jasmine.createSpyObj("UserService", ["getUsers", "deleteUser", "updateUser"]);
    notificationServiceSpy = jasmine.createSpyObj("NotificationService", ["showSuccess", "showError"]);

    await TestBed.configureTestingModule({
      declarations: [UserAdminComponent],
      providers: [
        { provide: UserService, useValue: userServiceSpy },
        { provide: NotificationService, useValue: notificationServiceSpy },
      ],
    }).compileComponents();

    // Настраиваем дефолтное поведение сервиса
    userServiceSpy.getUsers.and.returnValue(
      of([
        { id: 1, name: "User 1", role: "admin" },
        { id: 2, name: "User 2", role: "user" },
      ])
    );

    userServiceSpy.deleteUser.and.returnValue(of({ success: true }));
    userServiceSpy.updateUser.and.returnValue(of({ success: true }));

    fixture = TestBed.createComponent(UserAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // Сбрасываем все вызовы шпионов после инициализации компонента
    resetSpies();
  });

  it("должен удалять пользователя при подтверждении", () => {
    // Вызываем метод удаления пользователя
    component.confirmDelete(1);

    expect(userServiceSpy.deleteUser).toHaveBeenCalledWith(1);
    expect(notificationServiceSpy.showSuccess).toHaveBeenCalled();

    // Сбрасываем шпионы перед следующим тестом
    resetSpies();
  });

  it("должен обновлять роль пользователя", () => {
    // Вызываем метод обновления роли
    component.updateUserRole(2, "admin");

    expect(userServiceSpy.updateUser).toHaveBeenCalledWith(2, { role: "admin" });
    expect(notificationServiceSpy.showSuccess).toHaveBeenCalled();
  });
});
```

Эти подходы обеспечивают надежную изоляцию тестов и предотвращают их взаимное влияние, что в свою очередь повышает стабильность и предсказуемость тестов в Angular-приложениях.

## Signals in Angular

### 1. What are Signals?

Signals (сигналы) — это новая система реактивного программирования, представленная в Angular 16 и полностью интегрированная в Angular 17. Сигналы представляют собой примитивы для отслеживания зависимостей и автоматического обновления производных значений.

Сигнал — это контейнер для значения, который уведомляет заинтересованные стороны (потребителей) об изменениях этого значения. Сигналы предлагают прямую, явную и детерминированную реактивность в отличие от традиционного подхода обнаружения изменений в Angular.

Основные преимущества сигналов:

- Гранулярная реактивность на уровне переменных
- Улучшенная производительность благодаря точному отслеживанию зависимостей
- Более декларативный и понятный код
- Лучшая интеграция с системой шаблонов Angular

### 2. How to read and modify the value of a signal?

Работа с сигналами включает в себя создание, чтение и изменение:

**Создание сигнала:**

```typescript
// Импортируем необходимые функции из Angular Core
import { signal } from "@angular/core";

// В компоненте создаем сигнал с начальным значением
export class UserProfileComponent {
  // Создаем сигнал для хранения имени пользователя
  public userName = signal("Гость"); // Начальное значение "Гость"

  // Создаем сигнал для хранения возраста пользователя
  public userAge = signal(0); // Начальное значение 0

  // Можно создавать сигналы любого типа, включая объекты
  public userProfile = signal({
    id: 0,
    name: "Гость",
    email: "",
    role: "user",
  });
}
```

**Чтение значения сигнала:**

Чтение значения сигнала выполняется путем вызова сигнала как функции без аргументов:

```typescript
// В методе компонента
showUserInfo() {
  // Получаем текущее значение сигнала, вызывая его как функцию
  const name = this.userName(); // Возвращает "Гость"

  // Можно использовать в выражениях и условиях
  if (this.userAge() > 18) {
    console.log(`${name} - совершеннолетний пользователь`);
  }

  // Доступ к свойствам объектного сигнала
  const email = this.userProfile().email; // Получение отдельного свойства
}
```

**Изменение значения сигнала:**

Для изменения значения сигнала используются методы `set()`, `update()` и `mutate()`:

```typescript
// Метод set() полностью заменяет значение сигнала
updateName(newName: string) {
  // set() устанавливает новое значение, заменяя предыдущее
  this.userName.set(newName); // Теперь userName содержит новое значение
}

// Метод update() изменяет значение на основе предыдущего
incrementAge() {
  // update() позволяет обновить значение, используя предыдущее
  // previousAge - текущее значение сигнала userAge
  this.userAge.update(previousAge => previousAge + 1);
}

// Для объектных сигналов можно использовать mutate() для изменения свойств
updateEmail(newEmail: string) {
  // mutate() позволяет изменять свойства объекта внутри сигнала
  // без создания нового объекта
  this.userProfile.mutate(profile => {
    // Изменяем только email, остальные свойства остаются без изменений
    profile.email = newEmail;
  });
}

// Полная замена объекта в сигнале
setNewProfile(newProfile: UserProfile) {
  // set() для полной замены объекта
  this.userProfile.set(newProfile);
}
```

### 3. What is the main advantage of using signals instead of primitive values?

Использование сигналов вместо примитивных значений предоставляет множество преимуществ:

1. **Автоматическое отслеживание зависимостей**: Сигналы автоматически отслеживают, где используются их значения, создавая граф зависимостей, что позволяет автоматически обновлять только затронутые части приложения.

2. **Точное обновление UI**: Вместо проверки всего дерева компонентов, Angular обновляет только те части DOM, которые зависят от изменившихся сигналов.

3. **Детерминированная реактивность**: Сигналы обеспечивают предсказуемый поток данных и обновления, в отличие от традиционного обнаружения изменений, которое иногда может быть непредсказуемым.

4. **Улучшенная производительность**: Благодаря точному отслеживанию зависимостей, приложение тратит меньше ресурсов на обнаружение изменений, что особенно важно для крупных приложений.

5. **Лучшая типизация и статический анализ**: TypeScript лучше понимает и проверяет сигналы, чем обычные свойства класса.

6. **Уменьшение бойлерплейта**: Сигналы часто требуют меньше кода для реализации реактивного поведения, чем подход с Observable и подписками.

7. **Более явное управление состоянием**: Сигналы делают управление состоянием более явным и прозрачным, что облегчает отладку.

8. **Интеграция с жизненным циклом компонентов**: Сигналы автоматически интегрируются с жизненным циклом компонентов, уменьшая необходимость в ручном управлении подписками.

### 4. What is the advantage of using Signal Inputs?

Сигнальные входы (`input signals`) — это новый способ определения входных свойств компонентов в Angular, представленный в версии 17. Они предлагают значительные преимущества по сравнению с традиционными входными свойствами:

1. **Интеграция с системой сигналов**: Сигнальные входы полностью интегрированы с остальной системой сигналов, создавая единый согласованный подход к реактивности.

2. **Оптимизированное отслеживание изменений**: Повышается эффективность обнаружения изменений, так как Angular точно знает, когда меняются входные свойства.

3. **Упрощенный синтаксис**: Более краткий и понятный синтаксис для определения входных свойств:

```typescript
import { Component, input } from "@angular/core";

@Component({
  selector: "app-user-profile",
  template: `
    <div class="user-card">
      <h2>{{ userName() }}</h2>
      <p>Роль: {{ userRole() }}</p>
    </div>
  `,
})
export class UserProfileComponent {
  // Определение входного сигнала с возможностью задать значение по умолчанию
  userName = input<string>("Гость"); // Значение по умолчанию "Гость"

  // Входной сигнал с трансформацией значения при получении
  userRole = input<string, string>("user", {
    // transform позволяет преобразовать входное значение перед использованием
    transform: (role: string) => role.toUpperCase(),
    // Если передано 'admin', в сигнале будет 'ADMIN'
  });
}
```

4. **Проверка обязательных входных параметров**: Возможность обозначить входные параметры как обязательные:

```typescript
// Обязательный входной параметр userId
userId = input.required<number>(); // Ошибка TypeScript, если не передано значение
```

5. **Удобный доступ к значению**: Значение доступно напрямую через вызов функции, без необходимости обращаться к свойству, что упрощает код шаблона и компонента.

6. **Ленивая инициализация**: Сигнальные входы инициализируются лениво, только когда к ним обращаются, что может улучшить производительность.

7. **Лучшая совместимость с зонами (zoneless)**: Сигнальные входы хорошо работают в приложениях без зон выполнения (zoneless), что становится важным в современных версиях Angular.

### 5. How do we subscribe to a signal?

Существует несколько способов "подписаться" на изменения сигнала в Angular:

#### 1. Использование computed() для создания вычисляемых сигналов:

```typescript
import { Component, signal, computed } from "@angular/core";

@Component({
  selector: "app-pricing",
  template: `
    <div>
      <h2>Расчет цены</h2>
      <p>Базовая цена: {{ basePrice() }}</p>
      <p>Налог (%): {{ taxRate() }}</p>
      <p>Итоговая цена: {{ totalPrice() }}</p>
      <!-- totalPrice автоматически пересчитывается при изменении basePrice или taxRate -->
    </div>
  `,
})
export class PricingComponent {
  // Создаем базовые сигналы
  basePrice = signal(100); // Базовая цена
  taxRate = signal(20); // Ставка налога в процентах

  // Вычисляемый сигнал, зависящий от basePrice и taxRate
  // Этот сигнал "подписан" на изменения basePrice и taxRate
  totalPrice = computed(() => {
    // При доступе к значениям других сигналов внутри computed
    // создается зависимость, и при их изменении totalPrice пересчитывается
    const price = this.basePrice();
    const tax = this.taxRate();

    // Вычисляем итоговую цену с налогом
    return price * (1 + tax / 100);
  });

  updatePrice(newPrice: number) {
    this.basePrice.set(newPrice);
    // totalPrice автоматически пересчитается
  }
}
```

#### 2. Использование effect() для выполнения побочных эффектов:

```typescript
import { Component, signal, effect, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-user-status",
  template: `<div>Статус пользователя: {{ userStatus() }}</div>`,
})
export class UserStatusComponent implements OnInit, OnDestroy {
  userStatus = signal("offline");
  private statusEffect: any; // Для хранения ссылки на эффект

  ngOnInit() {
    // Создаем эффект, который выполняется при каждом изменении userStatus
    this.statusEffect = effect(() => {
      // Получаем текущее значение сигнала, создавая зависимость
      const status = this.userStatus();

      // Выполняем побочный эффект - логирование изменения статуса
      console.log(`Статус пользователя изменился на: ${status}`);

      // Можно выполнять другие действия, например, отправку аналитики
      if (status === "online") {
        this.logUserActivity("user_came_online");
      } else if (status === "offline") {
        this.logUserActivity("user_went_offline");
      }
    });
  }

  // Не забываем очистить эффект при уничтожении компонента
  ngOnDestroy() {
    if (this.statusEffect) {
      this.statusEffect.destroy();
    }
  }

  setUserStatus(status: "online" | "offline" | "away") {
    this.userStatus.set(status);
    // Эффект автоматически сработает после изменения значения
  }

  private logUserActivity(event: string) {
    // Отправка события в аналитическую систему
  }
}
```

#### 3. Прямое использование в шаблонах:

```typescript
import { Component, signal } from "@angular/core";

@Component({
  selector: "app-counter",
  template: `
    <!-- Шаблон автоматически "подписывается" на изменения count -->
    <div>
      <h2>Счетчик: {{ count() }}</h2>
      <button (click)="increment()">Увеличить</button>
      <button (click)="decrement()">Уменьшить</button>

      <!-- Условное отображение, зависящее от значения сигнала -->
      <div *ngIf="count() > 10" class="warning">Значение счетчика слишком большое!</div>
    </div>
  `,
})
export class CounterComponent {
  count = signal(0);

  increment() {
    this.count.update((value) => value + 1);
    // UI автоматически обновится после изменения сигнала
  }

  decrement() {
    this.count.update((value) => Math.max(0, value - 1));
  }
}
```

### 6. Can we read the value of a signal from a computed signal without creating a dependency?

Да, в Angular есть способ прочитать значение сигнала из вычисляемого сигнала (computed signal) без создания зависимости — используя функцию `untracked()`:

```typescript
import { Component, signal, computed, untracked } from "@angular/core";

@Component({
  selector: "app-data-dashboard",
  template: `
    <div>
      <h2>Данные</h2>
      <p>Основное значение: {{ mainValue() }}</p>
      <p>Дополнительное значение: {{ secondaryValue() }}</p>
      <p>Результат: {{ result() }}</p>
    </div>
  `,
})
export class DataDashboardComponent {
  // Создаем базовые сигналы
  mainValue = signal(10);
  secondaryValue = signal(5);

  // Вычисляемый сигнал, который зависит только от mainValue,
  // но читает значение secondaryValue без создания зависимости
  result = computed(() => {
    // Создаем зависимость от mainValue
    const main = this.mainValue();

    // Читаем значение secondaryValue без создания зависимости
    // Изменения в secondaryValue не будут вызывать пересчет result
    const secondary = untracked(() => this.secondaryValue());

    return main * secondary;
  });

  updateMainValue(value: number) {
    this.mainValue.set(value);
    // result будет пересчитан, потому что зависит от mainValue
  }

  updateSecondaryValue(value: number) {
    this.secondaryValue.set(value);
    // result НЕ будет пересчитан, потому что secondaryValue читается через untracked
  }
}
```

Функция `untracked()` позволяет:

1. **Избирательно управлять зависимостями**: Вы можете решить, какие сигналы должны вызывать пересчет, а какие нет.

2. **Оптимизировать производительность**: Предотвращает лишние пересчеты вычисляемых сигналов, когда некоторые значения меняются, но не должны влиять на результат.

3. **Работать с циклическими зависимостями**: Помогает разрывать потенциальные циклические зависимости между сигналами.

Типичные сценарии использования:

- **Константы и конфигурация**: Чтение значений констант или конфигурации, которые необходимы для вычисления, но редко меняются.
- **Кеширование**: Создание вычисляемых значений, которые перерассчитываются только при изменении определенных ключевых входных данных.
- **Условное вычисление**: Когда зависимость должна учитываться только при определенных условиях.

### 7. Detecting signal changes with the effect() API

API `effect()` предоставляет мощный способ реагирования на изменения сигналов и выполнения побочных эффектов при каждом изменении значений сигналов:

```typescript
import { Component, signal, effect, OnInit, OnDestroy, inject } from "@angular/core";
import { LocalStorageService } from "./local-storage.service";

@Component({
  selector: "app-theme-switcher",
  template: `
    <div [class]="'theme-' + theme()">
      <h2>Настройки темы</h2>
      <button (click)="toggleTheme()">Переключить тему</button>
      <div class="theme-preview">Предпросмотр темы</div>
    </div>
  `,
})
export class ThemeSwitcherComponent implements OnInit, OnDestroy {
  // Инжектируем сервис для работы с localStorage
  private storage = inject(LocalStorageService);

  // Сигнал для текущей темы
  theme = signal<"light" | "dark">("light");

  // Ссылка на эффект для дальнейшей очистки
  private themeEffect: any;

  ngOnInit() {
    // Загружаем сохраненную тему при инициализации
    const savedTheme = this.storage.getItem("app_theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      this.theme.set(savedTheme);
    }

    // Создаем эффект для автоматического сохранения темы
    // и применения к document.body при каждом изменении
    this.themeEffect = effect(() => {
      // Получаем текущее значение темы (создаем зависимость)
      const currentTheme = this.theme();

      // Эффект 1: Сохраняем тему в localStorage
      this.storage.setItem("app_theme", currentTheme);

      // Эффект 2: Применяем класс темы к body для глобальных стилей
      document.body.classList.remove("theme-light", "theme-dark");
      document.body.classList.add(`theme-${currentTheme}`);

      // Эффект 3: Обновляем мета-теги для поддержки темной темы в браузере
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute("content", currentTheme === "dark" ? "#1a1a1a" : "#ffffff");
      }

      // Логируем изменение темы
      console.log(`Тема изменена на: ${currentTheme}`);
    });
  }

  // Очищаем эффект при уничтожении компонента
  ngOnDestroy() {
    if (this.themeEffect) {
      this.themeEffect.destroy();
    }
  }

  // Метод для переключения темы
  toggleTheme() {
    this.theme.update((current) => (current === "light" ? "dark" : "light"));
    // Эффект автоматически сработает после изменения значения
  }
}
```

Ключевые особенности `effect()`:

1. **Автоматическое отслеживание зависимостей**: Effect автоматически определяет, от каких сигналов он зависит, просто читая их значения внутри функции эффекта.

2. **Выполнение при изменениях**: Эффект выполняется сразу при создании и затем при каждом изменении любого сигнала, от которого он зависит.

3. **Управление жизненным циклом**: Эффекты должны быть уничтожены при уничтожении компонента, чтобы избежать утечек памяти.

4. **Настройки выполнения**: API эффектов поддерживает дополнительные опции для настройки поведения:

```typescript
// Создание эффекта с дополнительными опциями
this.customEffect = effect(
  () => {
    const userData = this.userData();
    console.log("Данные пользователя изменились:", userData);
  },
  {
    // Выполнять эффект только после рендеринга
    allowSignalWrites: true,

    // Пропустить первое автоматическое выполнение
    manualCleanup: true,

    // Функция для очистки предыдущих ресурсов эффекта
    onCleanup: (cleanupFn) => {
      // Функция, которая будет вызвана перед следующим выполнением эффекта
      // или при его уничтожении
      cleanupFn();
    },
  }
);
```

### 8. What is the relation between Signals and change detection?

Сигналы представляют собой эволюцию подхода к обнаружению изменений в Angular, предлагая более детерминированный и эффективный механизм:

#### Традиционный подход к обнаружению изменений

В традиционном подходе Angular:

1. **Зональное отслеживание**: Angular использует Zone.js для отслеживания асинхронных операций (HTTP-запросы, таймеры, события DOM и т.д.)
2. **Проверка всех компонентов**: При срабатывании любого асинхронного события Angular запускает проверку всего дерева компонентов (или его части при использовании OnPush)
3. **Сравнение объектов**: Angular сравнивает предыдущие и текущие значения свойств компонентов для определения изменений
4. **Обновление DOM**: Если обнаружены изменения, Angular обновляет соответствующие части DOM

#### Подход с использованием сигналов

С сигналами:

1. **Явное отслеживание изменений**: Изменения значений происходят явно через API сигналов (set, update, mutate)
2. **Точное знание изменений**: Angular точно знает, какой сигнал изменился, без необходимости сравнивать объекты
3. **Граф зависимостей**: Система сигналов автоматически строит граф зависимостей между сигналами и их потребителями
4. **Целевое обновление**: Обновляются только те части приложения, которые действительно зависят от изменившихся сигналов

Связь между сигналами и обнаружением изменений:

```typescript
import { Component, signal, computed, effect } from "@angular/core";

@Component({
  selector: "app-signal-demo",
  template: `
    <div>
      <h2>Счетчик: {{ counter() }}</h2>
      <p>Квадрат: {{ counterSquared() }}</p>
      <button (click)="increment()">+</button>
      <button (click)="decrement()">-</button>
    </div>
  `,
})
export class SignalDemoComponent {
  // Базовый сигнал
  counter = signal(0);

  // Вычисляемый сигнал (зависит от counter)
  counterSquared = computed(() => this.counter() * this.counter());

  constructor() {
    // Создаем эффект для демонстрации работы обнаружения изменений
    effect(() => {
      // Этот код будет выполняться при каждом изменении counter
      console.log("Счетчик изменился:", this.counter());
      console.log("Текущий квадрат:", this.counterSquared());

      // При использовании сигналов Angular знает точно:
      // 1. Что именно изменилось (counter)
      // 2. Какие вычисляемые значения зависят от него (counterSquared)
      // 3. Какие части шаблона нужно обновить (только те, где используются
      //    counter() и counterSquared())
    });
  }

  increment() {
    // При вызове set/update Angular немедленно знает, что counter изменился
    this.counter.update((value) => value + 1);

    // В отличие от традиционного подхода, не нужно запускать
    // полную проверку изменений или использовать ChangeDetectorRef
  }

  decrement() {
    this.counter.update((value) => value - 1);
  }
}
```

Ключевые отличия в механизме обнаружения изменений:

1. **Производительность**: Сигналы обеспечивают существенный прирост производительности, особенно в больших приложениях, так как обновляются только зависимые части.

2. **Предсказуемость**: С сигналами обнаружение изменений становится более предсказуемым и детерминированным.

3. **Совместимость с режимом без зон (zoneless)**: Сигналы хорошо работают в режиме без зон (zoneless mode), который является будущим направлением развития Angular.

4. **Интеграция со стратегией OnPush**: Сигналы автоматически работают как с Default, так и с OnPush стратегией обнаружения изменений.

5. **Сокращение бойлерплейта**: Меньше необходимости в явных вызовах `markForCheck()` или `detectChanges()`.

### 9. How do you handle signal debugging?

Отладка приложений, использующих сигналы, имеет свои особенности. Вот несколько подходов и инструментов для эффективной отладки:

#### 1. Мониторинг изменений через эффекты

Самый простой способ — использовать эффекты для логирования изменений:

```typescript
import { Component, signal, effect, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-debug-demo",
  template: `<div>Значение: {{ value() }}</div>`,
})
export class DebugDemoComponent implements OnInit, OnDestroy {
  // Сигнал, который хотим отслеживать
  value = signal(0);

  // Для хранения ссылки на эффект
  private debugEffect: any;

  ngOnInit() {
    // Создаем отладочный эффект в режиме разработки
    if (isDevMode()) {
      this.debugEffect = effect(() => {
        // Создаем зависимость от сигнала
        const currentValue = this.value();

        // Логируем текущее значение и стек вызовов
        console.log(
          `[DEBUG] Сигнал "value" изменился: ${currentValue}`,
          new Error().stack // Показываем стек вызовов для определения источника изменения
        );
      });
    }
  }

  ngOnDestroy() {
    if (this.debugEffect) {
      this.debugEffect.destroy();
    }
  }

  // Методы для изменения значения
  setValue(newValue: number) {
    this.value.set(newValue);
  }
}
```

#### 2. Создание утилиты для отладки сигналов

Более мощный подход — создание специальной утилиты для отладки:

````typescript
// signal-debugger.ts
import { signal, Signal, effect, isSignal } from '@angular/core';

export class SignalDebugger {
  private static activeDebuggers = new Map<string, any>();

  /**
   * Создает отлаживаемую версию сигнала
   * @param originalSignal Исходный сигнал
   * @param name Имя для идентификации в логах
   */
  static debugSignal<T>(originalSignal: Signal<T>, name: string): Signal<T> {
    // Если это не сигнал или мы не в режиме разработки, возвращаем исходный сигнал
    if (!isSignal(originalSignal) || !isDevMode()) {
      return originalSignal;
    }

    // Создаем прокси-функцию, которая перехватывает обращения к сигналу
    const debugProxy = function() {
      const value = originalSignal();

```typescript
      // Логируем чтение значения сигнала
      console.log(`[SIGNAL READ] ${name}:`, value);
      return value;
    } as Signal<T>;

    // Добавляем методы оригинального сигнала (set, update, mutate и т.д.)
    if ('set' in originalSignal) {
      debugProxy['set'] = function(newValue: T) {
        console.log(`[SIGNAL SET] ${name}:`, {
          previousValue: originalSignal(),
          newValue: newValue
        });
        return (originalSignal as any).set(newValue);
      };
    }

    if ('update' in originalSignal) {
      debugProxy['update'] = function(updateFn: (value: T) => T) {
        const previousValue = originalSignal();
        console.log(`[SIGNAL UPDATE] ${name} - previous value:`, previousValue);
        const result = (originalSignal as any).update(updateFn);
        console.log(`[SIGNAL UPDATE] ${name} - new value:`, originalSignal());
        return result;
      };
    }

    if ('mutate' in originalSignal) {
      debugProxy['mutate'] = function(mutateFn: (value: T) => void) {
        console.log(`[SIGNAL MUTATE] ${name} - before:`, JSON.stringify(originalSignal()));
        const result = (originalSignal as any).mutate(mutateFn);
        console.log(`[SIGNAL MUTATE] ${name} - after:`, JSON.stringify(originalSignal()));
        return result;
      };
    }

    // Создаем эффект для отслеживания изменений
    if (!this.activeDebuggers.has(name)) {
      const debugEffect = effect(() => {
        // Получаем текущее значение, создавая зависимость
        const value = originalSignal();
        // Не логируем при первом запуске
        if (debugEffect.runCount > 1) {
          console.log(`[SIGNAL CHANGED] ${name}:`, value);
          console.trace(`Change stack for ${name}`);
        }
      });

      this.activeDebuggers.set(name, debugEffect);
    }

    return debugProxy;
  }

  /**
   * Прекращает отладку для указанного сигнала
   */
  static stopDebugging(name: string): void {
    if (this.activeDebuggers.has(name)) {
      this.activeDebuggers.get(name).destroy();
      this.activeDebuggers.delete(name);
      console.log(`[SIGNAL DEBUG] Stopped debugging signal "${name}"`);
    }
  }

  /**
   * Прекращает отладку всех сигналов
   */
  static stopAll(): void {
    this.activeDebuggers.forEach((debugger, name) => {
      debugger.destroy();
      console.log(`[SIGNAL DEBUG] Stopped debugging signal "${name}"`);
    });
    this.activeDebuggers.clear();
  }
}
````

Использование этой утилиты:

```typescript
import { Component, signal, computed } from "@angular/core";
import { SignalDebugger } from "./signal-debugger";

@Component({
  selector: "app-debuggable",
  template: `
    <h2>Отладка сигналов</h2>
    <p>Count: {{ debugCount() }}</p>
    <p>Doubled: {{ debugDoubled() }}</p>
    <button (click)="increment()">Увеличить</button>
  `,
})
export class DebuggableComponent {
  // Обычные сигналы
  private count = signal(0);
  private doubled = computed(() => this.count() * 2);

  // Отлаживаемые версии сигналов
  debugCount = SignalDebugger.debugSignal(this.count, "count");
  debugDoubled = SignalDebugger.debugSignal(this.doubled, "doubled");

  increment() {
    // Используем оригинальный метод set или update
    this.count.update((val) => val + 1);
  }

  ngOnDestroy() {
    // Останавливаем отладку перед уничтожением компонента
    SignalDebugger.stopAll();
  }
}
```

#### 3. Визуализация графа зависимостей сигналов

Для сложных приложений полезно визуализировать граф зависимостей между сигналами:

```typescript
// signal-graph-visualizer.ts
import { isSignal, computed, Signal } from "@angular/core";

interface SignalNode {
  name: string;
  value: any;
  dependencies: string[];
  dependents: string[];
}

export class SignalGraphVisualizer {
  private static signalRegistry = new Map<string, SignalNode>();

  /**
   * Регистрирует сигнал для отслеживания
   */
  static registerSignal<T>(signal: Signal<T>, name: string): void {
    if (!isSignal(signal)) return;

    if (!this.signalRegistry.has(name)) {
      this.signalRegistry.set(name, {
        name,
        value: signal(),
        dependencies: [],
        dependents: [],
      });

      // Для вычисляемых сигналов пытаемся определить зависимости
      if ((signal as any).__node?.dependencies) {
        const deps = (signal as any).__node.dependencies;
        // Находим имена зависимостей
        for (const [depName, depNode] of this.signalRegistry.entries()) {
          if (deps.includes(depNode)) {
            this.addDependency(name, depName);
          }
        }
      }
    }
  }

  /**
   * Добавляет зависимость между сигналами
   */
  static addDependency(dependent: string, dependency: string): void {
    if (!this.signalRegistry.has(dependent) || !this.signalRegistry.has(dependency)) return;

    const dependentNode = this.signalRegistry.get(dependent);
    const dependencyNode = this.signalRegistry.get(dependency);

    if (!dependentNode.dependencies.includes(dependency)) {
      dependentNode.dependencies.push(dependency);
    }

    if (!dependencyNode.dependents.includes(dependent)) {
      dependencyNode.dependents.push(dependent);
    }
  }

  /**
   * Выводит в консоль текущий граф зависимостей
   */
  static visualizeGraph(): void {
    console.group("Signal Dependency Graph");

    this.signalRegistry.forEach((node, name) => {
      console.group(`Signal: ${name} (Current value: ${JSON.stringify(node.value)})`);

      if (node.dependencies.length > 0) {
        console.log("Dependencies:", node.dependencies);
      } else {
        console.log("No dependencies (root signal)");
      }

      if (node.dependents.length > 0) {
        console.log("Dependents:", node.dependents);
      } else {
        console.log("No dependents (leaf signal)");
      }

      console.groupEnd();
    });

    console.groupEnd();
  }

  /**
   * Генерирует визуальное представление графа в формате DOT
   * для использования с Graphviz
   */
  static generateDotGraph(): string {
    let dot = "digraph SignalGraph {\n";

    // Добавляем узлы
    this.signalRegistry.forEach((node, name) => {
      dot += `  "${name}" [label="${name}\\nValue: ${JSON.stringify(node.value)}"]\n`;
    });

    // Добавляем связи
    this.signalRegistry.forEach((node, name) => {
      node.dependencies.forEach((dep) => {
        dot += `  "${dep}" -> "${name}"\n`;
      });
    });

    dot += "}";
    return dot;
  }
}
```

#### 4. Расширения DevTools для работы с сигналами

Angular разрабатывает DevTools, которые в будущем будут поддерживать отладку сигналов. Сейчас можно использовать общие инструменты:

```typescript
import { ApplicationRef, Component, signal } from "@angular/core";

@Component({
  selector: "app-devtools-integration",
  template: `<div>{{ counter() }}</div>`,
})
export class DevToolsIntegrationComponent {
  counter = signal(0);

  constructor(private appRef: ApplicationRef) {
    // Делаем сигналы доступными в консоли для отладки
    (window as any).__DEBUG__ = {
      signals: {
        counter: this.counter,
      },

      // Вспомогательные функции для отладки
      getSignalValue: (signalName: string) => {
        return (window as any).__DEBUG__.signals[signalName]();
      },

      setSignalValue: (signalName: string, value: any) => {
        (window as any).__DEBUG__.signals[signalName].set(value);
        // Запускаем обнаружение изменений вручную, если нужно
        this.appRef.tick();
      },

      // Логирование всех значений сигналов
      logAllSignals: () => {
        const signals = (window as any).__DEBUG__.signals;
        console.table(
          Object.entries(signals).reduce((acc, [name, signal]) => {
            acc[name] = signal();
            return acc;
          }, {})
        );
      },
    };

    console.log("Debug API available at window.__DEBUG__");
  }
}
```

#### 5. Использование JSON-сериализации для отладки объектных сигналов

Для сложных объектных сигналов:

```typescript
import { Component, signal, effect } from "@angular/core";

@Component({
  selector: "app-object-signal-debug",
  template: `<div>Объект обновлен {{ updateCount() }} раз</div>`,
})
export class ObjectSignalDebugComponent {
  // Сложный объектный сигнал
  userProfile = signal({
    id: 1,
    name: "Тестовый пользователь",
    settings: {
      theme: "dark",
      notifications: {
        email: true,
        push: false,
      },
    },
    activities: [],
  });

  // Счетчик обновлений для отображения в UI
  updateCount = signal(0);

  constructor() {
    // Отладочный эффект для объектного сигнала
    effect(() => {
      // Получаем значение сигнала (создаем зависимость)
      const profile = this.userProfile();

      // Увеличиваем счетчик обновлений
      this.updateCount.update((count) => count + 1);

      // Вывод 1: Полное значение объекта
      console.log("[ОБЪЕКТ ОБНОВЛЕН]", profile);

      // Вывод 2: JSON-представление для лучшей читаемости
      console.log("[JSON]", JSON.stringify(profile, null, 2));

      // Вывод 3: Плоское представление для сложных вложенных объектов
      const flattenObject = (obj, prefix = "") => {
        return Object.keys(obj).reduce((acc, key) => {
          const pre = prefix.length ? `${prefix}.` : "";
          if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
            Object.assign(acc, flattenObject(obj[key], `${pre}${key}`));
          } else {
            acc[`${pre}${key}`] = obj[key];
          }
          return acc;
        }, {});
      };

      // Выводим плоскую структуру объекта для легкого сравнения
      console.table(flattenObject(profile));
    });
  }

  // Метод для обновления части объекта
  updateTheme(theme: "light" | "dark") {
    this.userProfile.mutate((profile) => {
      profile.settings.theme = theme;
    });
  }

  // Метод для добавления активности
  addActivity(activity: string) {
    this.userProfile.mutate((profile) => {
      profile.activities.push({
        id: profile.activities.length + 1,
        name: activity,
        timestamp: new Date().toISOString(),
      });
    });
  }
}
```

#### Лучшие практики отладки сигналов

1. **Документируйте зависимости**: Ведите документацию о том, какие сигналы от чего зависят, особенно для сложных вычисляемых сигналов.

2. **Используйте описательные имена**: Давайте сигналам четкие, описательные имена, которые указывают на их назначение и содержимое.

3. **Создавайте специфичные эффекты для отладки**: Вместо одного большого эффекта используйте несколько специфичных для легкой отладки.

4. **Изолируйте отладочный код**: Используйте утилиты и сервисы для отладки, которые можно отключить в продакшене.

5. **Используйте мемоизацию**: Для сложных вычислений с сигналами рассмотрите использование мемоизации, чтобы избежать лишних пересчетов.

6. **Отслеживайте производительность**: Следите за количеством перевычислений сигналов, особенно в критических путях приложения.

7. **Держите граф зависимостей плоским**: Избегайте глубоких цепочек зависимостей между сигналами для упрощения отладки.

Сигналы в Angular представляют собой мощный механизм для создания реактивных приложений с высокой производительностью и предсказуемым поведением. Они обеспечивают более явный и декларативный подход к управлению состоянием приложения по сравнению с традиционными подходами, и в будущем станут основным способом работы с реактивностью в Angular.


## Angular 16, 17, 18 features:

### 1. What's new in Angular 16, 17, and 18 versions?

#### Angular 16 (май 2023)

Angular 16 принес ряд значительных улучшений, сфокусированных на производительности, удобстве разработки и модернизации фреймворка:

**Сигналы (Signals)** - Введение новой системы реактивности на основе сигналов, предоставляющей более детерминированный и эффективный подход к управлению состоянием и обнаружению изменений. Сигналы стали первым шагом к новой модели реактивности Angular.

**Отдельные компоненты (Standalone Components)** - Переход от обязательных NgModules к отдельным компонентам стал стабильным. Это позволило разработчикам создавать приложения без необходимости обертывания компонентов, директив и пайпов в модули.

**Улучшения в Server-Side Rendering (SSR)** - Angular Universal получил значительные улучшения производительности и обновления API для упрощения интеграции с современными серверными технологиями, такими как Vite.

**Улучшенная гидратация** - Новый подход к гидратации приложения при переходе от серверного к клиентскому рендерингу, что ускоряет загрузку и улучшает пользовательский опыт.

**Удаление устаревших браузеров** - Прекращение поддержки IE11 и других устаревших браузеров, что позволило оптимизировать код и использовать современные возможности JavaScript.

**Улучшения в Angular CLI** - Обновленный генератор приложений с автоматической поддержкой TypeScript 5.0, ESLint вместо TSLint, и оптимизированной конфигурацией.

#### Angular 17 (ноябрь 2023)

Angular 17 стал одним из самых значительных обновлений за многие годы:

**Новый синтаксис шаблонов** - Введение нового, более интуитивного синтаксиса управления потоком в шаблонах с блоками `@if`, `@for`, `@switch` и другими, которые заменяют структурные директивы с префиксом `*`.

**Отложенная загрузка компонентов (Deferred Loading)** - Новый блок `@defer`, позволяющий оптимизировать загрузку частей приложения с помощью ряда триггеров, таких как видимость, взаимодействие пользователя или таймер.

**Дополнительное использование зон** - Возможность создания приложений без Zone.js, что улучшает производительность и упрощает интеграцию с внешними библиотеками.

**Новый режим разработки** - Улучшенные инструменты разработки с более информативными сообщениями об ошибках и рекомендациями по оптимизации.

**Инкрементальная миграция** - Улучшенные инструменты для постепенного перехода от NgModules к отдельным компонентам.

**Обновленные экспериментальные сигналы** - Расширение API сигналов с новыми возможностями и улучшенной документацией.

**Angular Language Service** - Обновленный языковой сервис для лучшей поддержки нового синтаксиса шаблонов в IDE.

#### Angular 18 (май 2024)

Angular 18 продолжил инновации с фокусом на производительность и разработку:

**Стабильные сигналы** - API сигналов полностью стабилизирован, включая входные сигналы (input signals) и улучшенную интеграцию с другими частями Angular.

**Новая документация** - Полностью переработанный сайт документации angular.io с улучшенной навигацией, поиском и интерактивными примерами.

**Автоматическая оптимизация изображений** - Встроенная оптимизация изображений в директиве NgOptimizedImage для улучшения производительности загрузки страниц.

**Улучшенная работа с формами** - Новый API для работы с формами на основе сигналов, обеспечивающий лучшую типизацию и более интуитивную работу.

**ESBuild для разработки** - Использование ESBuild вместо webpack для режима разработки, что значительно ускорило время сборки и перезагрузки.

**Улучшенная поддержка SSR** - Расширенная поддержка серверного рендеринга с автоматической передачей состояния от сервера к клиенту.

**Поддержка режима "без зон"** - Улучшенная поддержка разработки без использования Zone.js.

**Angular DevTools** - Улучшенные инструменты для отладки с поддержкой нового синтаксиса шаблонов и сигналов.

### 2. Describe the new features @if, @for, @switch, @defer.

#### @if блок

Блок `@if` заменяет структурную директиву `*ngIf` и предоставляет более читаемый и мощный синтаксис для условного отображения содержимого:

```typescript
<!-- Старый синтаксис с *ngIf -->
<div *ngIf="user; else noUser">
  Привет, {{ user.name }}!
</div>
<ng-template #noUser>
  Пожалуйста, войдите в систему.
</ng-template>

<!-- Новый синтаксис с @if -->
@if (user) {
  <div>Привет, {{ user.name }}!</div>
} @else {
  <div>Пожалуйста, войдите в систему.</div>
}
```

Преимущества `@if`:

1. **Более явный синтаксис** - Улучшенная читаемость, особенно для вложенных условий
2. **Каскадные условия** - Поддержка конструкций `@else if` для нескольких условий
3. **Лучшая типизация** - Улучшенный вывод типов в блоках
4. **Производительность** - Оптимизированная обработка условных блоков

Пример с несколькими условиями:

```typescript
@if (status === 'loading') {
  <!-- Блок кода, выполняемый, когда status равен 'loading' -->
  <app-loading-spinner></app-loading-spinner>
} @else if (status === 'error') {
  <!-- Блок кода, выполняемый, когда status равен 'error' -->
  <app-error-message [message]="errorMessage"></app-error-message>
} @else if (status === 'empty') {
  <!-- Блок кода, выполняемый, когда status равен 'empty' -->
  <app-empty-state></app-empty-state>
} @else {
  <!-- Блок кода, выполняемый, когда ни одно из условий не выполнено -->
  <app-data-display [data]="data"></app-data-display>
}
```

#### @for блок

Блок `@for` заменяет директиву `*ngFor`, обеспечивая более богатый функционал для итерации по коллекциям:

```typescript
<!-- Старый синтаксис с *ngFor -->
<div *ngFor="let item of items; index as i; trackBy: trackByFn">
  {{ i + 1 }}. {{ item.name }}
</div>

<!-- Новый синтаксис с @for -->
@for (item of items; track item.id; let i = $index) {
  <div>{{ i + 1 }}. {{ item.name }}</div>
} @empty {
  <div>Список пуст.</div>
}
```

Преимущества `@for`:

1. **Обязательный трекинг** - Требование указать `track` для лучшей производительности
2. **Блок @empty** - Встроенная обработка пустых коллекций
3. **Расширенные переменные** - Доступ к переменным `$index`, `$first`, `$last`, `$even`, `$odd`, `$count`
4. **Улучшенная производительность** - Оптимизированная обработка списков
5. **Более чистый синтаксис** - Нет необходимости в дополнительных директивах для трекинга и индексации

Пример с дополнительными переменными:

```typescript
@for (user of users; track user.id; let i = $index; let isFirst = $first; let isLast = $last; let isEven = $even; let count = $count) {
  <!--
  Доступные переменные в блоке:
  - i: индекс текущего элемента
  - isFirst: true, если это первый элемент
  - isLast: true, если это последний элемент
  - isEven: true, если индекс четный
  - count: общее количество элементов в коллекции
  -->
  <div [class.first-item]="isFirst" [class.last-item]="isLast" [class.even-row]="isEven">
    {{ i + 1 }} из {{ count }}: {{ user.name }}
  </div>
}
```

#### @switch блок

Блок `@switch` заменяет директивы `[ngSwitch]`, `*ngSwitchCase` и `*ngSwitchDefault`, предоставляя более понятный синтаксис для работы с множественными условиями:

```typescript
<!-- Старый синтаксис с [ngSwitch] -->
<div [ngSwitch]="role">
  <div *ngSwitchCase="'admin'">Панель администратора</div>
  <div *ngSwitchCase="'editor'">Редактор контента</div>
  <div *ngSwitchDefault>Панель пользователя</div>
</div>

<!-- Новый синтаксис с @switch -->
@switch (role) {
  @case ('admin') {
    <div>Панель администратора</div>
  }
  @case ('editor') {
    <div>Редактор контента</div>
  }
  @default {
    <div>Панель пользователя</div>
  }
}
```

Преимущества `@switch`:

1. **Единый блок кода** - Более читаемая и структурированная организация условий
2. **Явная связь** - Ясная визуальная связь между выражением и ветками
3. **Более чистый синтаксис** - Устранение необходимости в использовании нескольких директив
4. **Поддержка нескольких значений** - Возможность указать несколько значений для одного случая

Пример с несколькими значениями для одного случая:

```typescript
@switch (userStatus) {
  @case ('online', 'active') {
    <!-- Этот блок выполняется, если userStatus равен 'online' или 'active' -->
    <div class="status-indicator online">Онлайн</div>
  }
  @case ('away', 'busy') {
    <!-- Этот блок выполняется, если userStatus равен 'away' или 'busy' -->
    <div class="status-indicator away">Занят</div>
  }
  @default {
    <!-- Этот блок выполняется для всех других значений userStatus -->
    <div class="status-indicator offline">Не в сети</div>
  }
}
```

#### @defer блок

Блок `@defer` представляет совершенно новую возможность для отложенной загрузки частей шаблона, что позволяет оптимизировать начальную загрузку приложения:

```typescript
<!-- Отложенная загрузка тяжелого компонента -->
@defer {
  <app-heavy-component [data]="data"></app-heavy-component>
} @loading {
  <!-- Показывается во время загрузки -->
  <div class="loading-placeholder">Загрузка...</div>
} @error {
  <!-- Показывается в случае ошибки загрузки -->
  <div class="error-message">Ошибка загрузки компонента</div>
} @placeholder {
  <!-- Показывается до начала загрузки -->
  <div class="placeholder">Нажмите для загрузки</div>
}
```

Преимущества `@defer`:

1. **Оптимизация начальной загрузки** - Загрузка компонентов только при необходимости
2. **Различные триггеры** - Поддержка разных условий для начала загрузки
3. **Состояния загрузки** - Явное определение состояний загрузки, ошибок и плейсхолдеров
4. **Приоритизация контента** - Фокус на важном контенте при начальной загрузке
5. **Улучшение метрик Core Web Vitals** - Сокращение времени до интерактивности

Триггеры для `@defer`:

```typescript
<!-- Загрузка при появлении элемента в области видимости -->
@defer (on viewport) {
  <app-chart [data]="analyticsData"></app-chart>
}

<!-- Загрузка при взаимодействии пользователя -->
@defer (on interaction) {
  <app-comments [postId]="post.id"></app-comments>
}

<!-- Загрузка после таймера (3 секунды) -->
@defer (on timer(3000)) {
  <app-recommendations></app-recommendations>
}

<!-- Загрузка при наведении на определенный элемент -->
@defer (on hover(hoverTrigger)) {
  <app-product-details [product]="product"></app-product-details>
}
<button #hoverTrigger>Подробнее о продукте</button>

<!-- Комбинация нескольких триггеров -->
@defer (on viewport; on interaction; on timer(5000)) {
  <app-feedback-form></app-feedback-form>
}

<!-- Немедленная загрузка при удовлетворении условия -->
@defer (when isAuthenticated()) {
  <app-user-dashboard></app-user-dashboard>
}
```

### 3. Can you explain the benefits of using the new Angular Ivy renderer introduced in Angular 18?

Ivy - это название нового движка рендеринга Angular, который был впервые представлен в Angular 9, но продолжает получать значительные улучшения в каждой версии, включая Angular 18. В Angular 18 Ivy достиг новой зрелости и оптимизации, предлагая целый ряд преимуществ:

#### Улучшенная компиляция и размер бандла

1. **Инкрементальная компиляция** - Ivy компилирует каждый компонент отдельно, что значительно ускоряет процесс сборки, особенно при внесении небольших изменений.

2. **Tree Shaking на уровне шаблонов** - Ivy включает в сборку только те части Angular, которые фактически используются в вашем приложении, что приводит к значительному сокращению размера бандла.

3. **Локализованные метаданные** - Метаданные компонентов хранятся вместе с самими компонентами, а не в отдельных файлах, что упрощает отладку и оптимизацию.

#### Улучшенная производительность

1. **Ленивая загрузка модулей и компонентов** - Ivy обеспечивает более эффективную ленивую загрузку, загружая только необходимые части приложения при необходимости.

2. **Более быстрое время запуска** - Благодаря меньшему размеру бандла и оптимизированному рендерингу, приложения запускаются быстрее.

3. **Эффективное обнаружение изменений** - Ivy использует более эффективный алгоритм обнаружения изменений, который фокусируется только на частях шаблона, которые могли измениться.

4. **Локальная перекомпиляция (patching)** - При обновлении компонентов Ivy может перекомпилировать только измененные части, а не весь компонент.

#### Улучшенная отладка и диагностика

1. **Улучшенные сообщения об ошибках** - Ivy предоставляет более понятные и подробные сообщения об ошибках с рекомендациями по исправлению.

2. **Улучшенная трассировка ошибок** - Более точная информация о том, где именно в шаблоне произошла ошибка.

3. **Инструменты разработки** - Улучшенная интеграция с Angular DevTools для отладки компонентов, маршрутизации и обнаружения изменений.

### Интеграция с новыми возможностями Angular

1. **Поддержка нового синтаксиса шаблонов** - Ivy полностью поддерживает новый синтаксис шаблонов с блоками `@if`, `@for`, `@switch` и `@defer`.

2. **Интеграция с сигналами** - Ivy оптимизирован для работы с новой системой реактивности на основе сигналов, обеспечивая более эффективное обновление DOM.

3. **Самостоятельные компоненты** - Ivy обеспечивает полную поддержку самостоятельных компонентов (standalone components), что устраняет необходимость в NgModules.

#### Расширяемость и гибкость

1. **Режим без зон (zoneless)** - Ivy является ключевым компонентом для поддержки приложений без Zone.js, что упрощает интеграцию с внешними библиотеками и улучшает производительность.

2. **Адаптация компиляции** - Ivy позволяет настраивать процесс компиляции для различных целевых сред (браузер, сервер, веб-воркеры).

3. **Мета-программирование** - Ivy предоставляет более мощные инструменты для метапрограммирования, позволяя создавать более гибкие и динамические компоненты.

В Angular 18 рендерер Ivy также получил специфические улучшения:

- **Оптимизированная обработка событий** - Улучшенная система делегирования событий, уменьшающая накладные расходы при большом количестве обработчиков событий.

- **Эффективная интеграция с WebComponents** - Лучшая поддержка веб-компонентов и возможность создания Angular-компонентов как веб-компонентов.

- **Дополнительная оптимизация гидратации** - Улучшенный процесс гидратации для приложений с серверным рендерингом, что снижает мерцание и улучшает взаимодействие с пользователем.

### 4. How does Angular 18 improve performance and bundle size optimization compared to previous versions?

Angular 18 предлагает ряд существенных улучшений в области производительности и оптимизации размера пакета:

#### Улучшения в сборке и компиляции

1. **ESBuild для разработки** - Переход от webpack к ESBuild для режима разработки, который обеспечивает значительное ускорение процесса сборки:

   - На 80-90% более быстрая инициализация сервера разработки
   - Существенно более быстрый отклик при внесении изменений в код
   - Снижение потребления памяти во время разработки

2. **Улучшенный Tree Shaking** - Более агрессивный и точный Tree Shaking, который удаляет неиспользуемый код:

   - Удаление неиспользуемых CSS стилей
   - Устранение неиспользуемых директив и пайпов
   - Оптимизация импортов от сторонних библиотек

3. **Инкрементальная сборка AOT** - Улучшенная инкрементальная сборка в режиме Ahead-of-Time (AOT), которая пересобирает только измененные компоненты.

4. **Оптимизация повторно используемых шаблонов** - Компилятор обнаруживает и оптимизирует повторяющиеся части шаблонов.

#### Оптимизации во время выполнения

1. **Эффективное управление памятью** - Улучшенное управление памятью с уменьшенным количеством утечек и более эффективным использованием ресурсов:

   - Автоматическое удаление слушателей событий
   - Более эффективное управление жизненным циклом компонентов
   - Улучшенная очистка ресурсов при уничтожении компонентов

2. **Оптимизированная обработка событий** - Переработанная система обработки событий, которая уменьшает накладные расходы:

   - Делегирование событий на уровне документа
   - Уменьшение количества слушателей событий
   - Более эффективное связывание контекста событий

3. **Ленивая инициализация компонентов** - Компоненты инициализируются только тогда, когда они действительно нужны:
   - Улучшенная стратегия монтирования компонентов
   - Отложенная инициализация невидимых компонентов
   - Приоритизация компонентов в области видимости

#### Оптимизация размера пакета

1. **Улучшенная модульность сигналов** - Система сигналов была перепроектирована для лучшей модульности, что позволяет включать только необходимые части API.

2. **Оптимизация импортов RxJS** - Более эффективный импорт только необходимых операторов и функций из RxJS.

3. **Сокращение размера ядра Angular** - Уменьшение размера основных пакетов Angular путем переноса редко используемых функций в отдельные пакеты.

4. **Поддержка терсера (Terser) v5** - Обновленный минификатор кода для более эффективного сжатия JavaScript.

5. **Оптимизация статических ресурсов** - Встроенная оптимизация статических ресурсов, включая сжатие изображений и CSS.

#### Производительность рендеринга

1. **Сигналы и обнаружение изменений** - Полная интеграция системы сигналов с механизмом обнаружения изменений:

   - Точное отслеживание изменений на уровне переменных
   - Минимизация ненужных циклов проверки
   - Оптимизированное обновление DOM

2. **Улучшенное кэширование шаблонов** - Более эффективное кэширование скомпилированных шаблонов для повторного использования.

3. **Оптимизация отображения списков** - Улучшенный алгоритм для отображения длинных списков с минимальным воздействием на производительность.

4. **Отложенная загрузка с @defer** - Встроенная поддержка отложенной загрузки частей шаблона для улучшения начальной загрузки страницы.

#### Конкретные цифры улучшений

По сравнению с Angular 17, Angular 18 демонстрирует следующие улучшения:

- **Размер начального бандла**: Уменьшение на 10-15% для типичных приложений
- **Время запуска приложения**: Ускорение на 15-20% для средних и крупных приложений
- **Время перехода между маршрутами**: Уменьшение на 25-30% благодаря оптимизированной ленивой загрузке
- **Потребление памяти**: Снижение на 10-15% во время выполнения
- **Время сборки в режиме разработки**: Ускорение на 70-80% благодаря использованию ESBuild
- **Время сборки в режиме продакшн**: Ускорение на 15-20% благодаря улучшенной инкрементальной компиляции

### 5. What enhancements or additions have been made to Angular Material in the recent versions?

В последних версиях Angular (16, 17 и 18) библиотека Angular Material получила ряд значительных улучшений и новых функций:

#### Интеграция с новыми возможностями Angular

1. **Поддержка отдельных компонентов (Standalone)** - Все компоненты Material были переработаны для поддержки использования без NgModules:

   - Каждый компонент теперь может использоваться непосредственно, без импорта модуля
   - Возможность импортировать только те компоненты, которые необходимы
   - Улучшенная поддержка древовидного встряхивания (tree-shaking)

2. **Поддержка нового синтаксиса шаблонов** - Компоненты Material обновлены для работы с новыми блоками `@if`, `@for` и `@switch`:

   - Оптимизированное использование в списках (mat-list, mat-selection-list)
   - Улучшенная обработка условного рендеринга в компонентах меню и форм
   - Более эффективное обновление таблиц и сеток данных

3. **Интеграция с блоком @defer** - Поддержка отложенной загрузки тяжелых компонентов с помощью блока `@defer`:
   - Оптимизированная загрузка диалогов и панелей
   - Улучшенная загрузка компонентов с богатым контентом
   - Приоритизация критических компонентов пользовательского интерфейса

#### Улучшения доступности (a11y)

1. **Расширенная поддержка ARIA** - Улучшенная поддержка атрибутов ARIA для всех компонентов:

   - Более точные роли и состояния
   - Улучшенное взаимодействие с программами чтения с экрана
   - Поддержка новых рекомендаций WAI-ARIA 1.2

2. **Улучшенная навигация с клавиатуры** - Расширенная поддержка навигации с клавиатуры для всех интерактивных компонентов:

   - Более последовательные шаблоны фокусировки
   - Улучшенная поддержка клавиатурных сокращений
   - Лучшая поддержка режима высокого контраста

3. **Соответствие WCAG 2.1 AA** - Компоненты обновлены для соответствия рекомендациям WCAG 2.1 уровня AA:
   - Улучшенные уровни контраста
   - Поддержка масштабирования текста
   - Улучшенная поддержка жестов для мобильных устройств

#### Новые функции и компоненты

1. **Улучшенные таблицы (MatTable)** - Значительные улучшения в компоненте таблицы:

   - Виртуальная прокрутка для больших наборов данных
   - Улучшенные API для сортировки и фильтрации
   - Поддержка вложенных таблиц и древовидных данных
   - Улучшенный опыт редактирования ячеек

Продолжаю описание улучшений Angular Material:

2. **Material 3 (Material You)** (продолжение):

   - Адаптивные элементы управления, которые автоматически подстраиваются под размер экрана
   - Улучшенная поддержка темной темы с более естественными переходами
   - Новая система теней и эффектов глубины
   - Интеграция с системными настройками темы в Android и других платформах

3. **Новые компоненты и улучшения**:

   - **MatDateRangePicker** - Улучшенный выбор диапазона дат:

     - Поддержка нескольких календарей
     - Улучшенная навигация по месяцам и годам
     - Настраиваемые предустановленные диапазоны

   - **MatAutocomplete** - Расширенные возможности автозаполнения:

     - Асинхронная загрузка предложений
     - Группировка результатов
     - Кастомизация отображения элементов

   - **MatChipGrid** - Новый компонент для работы с сетками чипов:
     - Улучшенная доступность
     - Поддержка drag-and-drop
     - Интеграция с формами

#### Улучшения производительности

1. **Оптимизация рендеринга**:

   - Уменьшение количества перерисовок компонентов
   - Улучшенное управление жизненным циклом компонентов
   - Оптимизация CSS для уменьшения количества вычислений стилей

2. **Уменьшение размера бандла**:

   - Модульная структура компонентов для лучшего tree-shaking
   - Оптимизация импортов CSS
   - Сокращение зависимостей компонентов

3. **Улучшенная работа с памятью**:
   - Автоматическая очистка ресурсов при уничтожении компонентов
   - Оптимизация подписок на события
   - Улучшенное управление кэшем

#### CDK (Component Development Kit) улучшения

1. **Новые утилиты для разработчиков**:

   - Улучшенные инструменты для создания пользовательских компонентов
   - Новые хуки жизненного цикла
   - Расширенные возможности для работы с фокусом и навигацией

2. **Улучшенная поддержка мобильных устройств**:

   - Оптимизированные жесты для сенсорных экранов
   - Улучшенная поддержка различных размеров экрана
   - Адаптивные компоненты для мобильных устройств

3. **Новые экспериментальные функции**:
   - Поддержка виртуального скроллинга для любых компонентов
   - Улучшенная система перетаскивания (drag-and-drop)
   - Новые утилиты для работы с оверлеями

### 6. How does Angular 18 support server-side rendering (SSR) and what improvements does it offer in this area?

Angular 18 значительно улучшил поддержку серверного рендеринга (SSR) через Angular Universal и новые API:

#### Улучшения в гидратации

1. **Прогрессивная гидратация**:

   - Постепенная активация компонентов по мере необходимости
   - Приоритизация критических компонентов
   - Уменьшение времени до интерактивности (TTI)

2. **Умная гидратация**:

   - Сохранение состояния компонентов при гидратации
   - Предотвращение мерцания контента
   - Оптимизация передачи данных между сервером и клиентом

3. **Селективная гидратация**:
   - Возможность выбора компонентов для гидратации
   - Отложенная гидратация неприоритетных компонентов
   - Интеграция с блоком @defer

#### Улучшения производительности SSR

1. **Оптимизация рендеринга**:

   - Параллельный рендеринг компонентов на сервере
   - Кэширование результатов рендеринга
   - Оптимизация потребления памяти

2. **Улучшенная передача состояния**:

   - Эффективная сериализация состояния
   - Минимизация дублирования данных
   - Оптимизация размера передаваемых данных

3. **Интеграция с современными платформами**:
   - Улучшенная поддержка Cloudflare Workers
   - Интеграция с Vercel Edge Functions
   - Поддержка Deno Deploy

#### Новые API и возможности

1. **Улучшенный TransferState API**:

   - Типобезопасная передача данных
   - Поддержка сложных структур данных
   - Автоматическая сериализация/десериализация

2. **Серверные хуки**:

   - Новые хуки жизненного цикла для SSR
   - Улучшенный контроль над процессом рендеринга
   - Возможность влиять на приоритеты загрузки

3. **Интеграция с сигналами**:
   - Поддержка сигналов в SSR
   - Эффективная передача состояния сигналов
   - Оптимизация обновлений на клиенте

### 7. Discuss any updates or improvements made to Angular CLI and its features in the latest releases.

Angular CLI получил значительные улучшения в последних версиях:

#### Улучшения производительности

1. **ESBuild интеграция**:

   - Значительное ускорение сборки в режиме разработки
   - Оптимизированная обработка модулей
   - Улучшенная поддержка TypeScript

2. **Оптимизация сборки**:

   - Улучшенный кэш сборки
   - Параллельная компиляция
   - Инкрементальная сборка

3. **Улучшенная система плагинов**:
   - Новый API для создания плагинов
   - Улучшенная интеграция с внешними инструментами
   - Расширенные возможности настройки

#### Новые команды и возможности

1. **Улучшенные генераторы**:

   - Поддержка создания отдельных компонентов
   - Новые шаблоны для сигналов
   - Генерация тестов с современными практиками

2. **Инструменты анализа**:

   - Улучшенный анализ размера бандла
   - Отчеты о производительности
   - Инструменты для оптимизации

3. **Инструменты миграции**:
   - Автоматическая миграция на новые версии
   - Конвертация NgModules в отдельные компоненты
   - Обновление синтаксиса шаблонов

#### Улучшения разработки

1. **Улучшенный режим разработки**:

   - Более информативные сообщения об ошибках
   - Быстрая перезагрузка при изменениях
   - Улучшенная интеграция с IDE

2. **Новые инструменты отладки**:

   - Встроенные инструменты профилирования
   - Улучшенная интеграция с Chrome DevTools
   - Расширенные возможности логирования

3. **Улучшенная конфигурация**:
   - Типобезопасная конфигурация
   - Поддержка современных форматов конфигурации
   - Улучшенная валидация настроек

Эти улучшения делают Angular 18 более мощным и удобным инструментом для разработки современных веб-приложений, особенно в области производительности, разработки и поддержки серверного рендеринга.
