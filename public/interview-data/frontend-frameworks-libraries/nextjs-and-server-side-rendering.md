---
title: NextJS and Server-Side Rendering
---

## Next.js Interview Questions

### General Questions:

#### What is Next.js, and how does it differ from traditional React applications?

Next.js - это фреймворк для React, который предоставляет дополнительные возможности и оптимизации для создания веб-приложений. Основные отличия от традиционных React-приложений:

1. Серверный рендеринг (SSR) из коробки
2. Статическая генерация (SSG)
3. Автоматический код-сплиттинг
4. Оптимизация изображений
5. Встроенная поддержка CSS-модулей
6. Файловая система маршрутизации

Пример простого Next.js приложения:

```jsx
// pages/index.js
function HomePage() {
  return <div>Welcome to Next.js!</div>
}

export default HomePage
```

#### Explain the concept of server-side rendering (SSR) in Next.js

Серверный рендеринг (SSR) - это процесс генерации HTML на сервере для каждого запроса. В Next.js это происходит автоматически для каждой страницы.

Преимущества SSR:

1. Улучшенная производительность начальной загрузки
2. Лучшая SEO-оптимизация
3. Более быстрое отображение контента

Пример использования SSR в Next.js:

```jsx
// pages/ssr-page.js
function Page({data}) {
  return <div>Server-side rendered data: {data}</div>
}

export async function getServerSideProps() {
  const res = await fetch(`https://api.example.com/data`)
  const data = await res.json()

  return {props: {data}}
}

export default Page
```

#### How does Next.js handle client-side routing?

Next.js использует свой собственный компонент `Link` для клиентской маршрутизации. Это позволяет осуществлять навигацию без полной перезагрузки страницы.

Пример:

```jsx
import Link from 'next/link'

function NavBar() {
  return (
    <nav>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
    </nav>
  )
}
```

#### What are the benefits of using Next.js for building React applications?

1. Улучшенная производительность благодаря SSR и SSG
2. Автоматическая оптимизация кода
3. Встроенная система маршрутизации
4. Простота настройки и разработки
5. Поддержка TypeScript из коробки
6. Встроенная оптимизация изображений
7. Поддержка API-маршрутов

#### What is the purpose of the getInitialProps function in Next.js? How is it different from using getStaticProps or getServerSideProps?

`getInitialProps` - это устаревший метод для получения данных на стороне сервера. Он выполняется как на сервере, так и на клиенте.

`getStaticProps` используется для статической генерации (SSG), где данные собираются во время сборки.

`getServerSideProps` используется для серверного рендеринга (SSR), где данные собираются для каждого запроса.

Пример `getStaticProps`:

```jsx
function Blog({posts}) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.example.com/posts')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}

export default Blog
```

#### How does Next.js handle automatic code splitting, and why is it important?

Next.js автоматически разделяет код на уровне страниц и компонентов. Это означает, что каждая страница загружает только необходимый JavaScript.

Важность:

1. Уменьшение размера начального бандла
2. Более быстрая загрузка страниц
3. Улучшенная производительность приложения

#### What is the purpose of the Link component in Next.js, and how does it differ from traditional anchor (<a>) tags?

Компонент `Link` в Next.js используется для клиентской навигации. В отличие от обычных тегов `<a>`, `Link` предварительно загружает код для связанной страницы, что ускоряет навигацию.

Пример:

```jsx
import Link from 'next/link'

function NavBar() {
  return (
    <nav>
      <Link href='/about'>
        <a>About Us</a>
      </Link>
    </nav>
  )
}
```

#### How can you configure routing in a Next.js application?

Маршрутизация в Next.js основана на файловой системе. Файлы в директории `pages` автоматически становятся маршрутами.

Примеры:

- `pages/index.js` -> `/`
- `pages/about.js` -> `/about`
- `pages/blog/[slug].js` -> `/blog/:slug`

Динамические маршруты:

```jsx
// pages/post/[pid].js
import {useRouter} from 'next/router'

const Post = () => {
  const router = useRouter()
  const {pid} = router.query

  return <p>Post: {pid}</p>
}

export default Post
```

## Data Fetching:

### Compare and contrast getStaticProps and getServerSideProps in terms of use cases and performance considerations

1. `getStaticProps`:

Использование:

- Для страниц, содержимое которых может быть сгенерировано ahead of time
- Когда данные доступны во время сборки
- Для страниц, которые могут быть предварительно отрендерены и кешированы CDN

Производительность:

- Лучшая производительность, так как страницы генерируются во время сборки
- Меньшая нагрузка на сервер, так как страницы не генерируются при каждом запросе

Пример:

```jsx
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/posts')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
    revalidate: 60, // Опционально: обновление каждые 60 секунд
  }
}
```

2. `getServerSideProps`:

Использование:

- Когда нужны данные, специфичные для каждого запроса
- Для страниц, которые должны быть динамическими и всегда свежими
- Когда нужен доступ к данным запроса (cookies, headers)

Производительность:

- Более медленная начальная загрузка, так как страница генерируется при каждом запросе
- Большая нагрузка на сервер

Пример:

```jsx
export async function getServerSideProps(context) {
  const {params, req, res} = context
  const {id} = params

  const data = await fetchDataForId(id)

  return {
    props: {data},
  }
}
```

### When would you choose to use getStaticPaths in Next.js, and how does it relate to dynamic routes?

`getStaticPaths` используется в сочетании с `getStaticProps` для генерации статических страниц с динамическими маршрутами.

Использование:

- Когда у вас есть динамические маршруты (например, [id].js)
- Когда вы хотите предварительно сгенерировать определенное количество страниц во время сборки

Пример:

```jsx
// pages/posts/[id].js
export async function getStaticPaths() {
  const res = await fetch('https://api.example.com/posts')
  const posts = await res.json()

  const paths = posts.map((post) => ({
    params: {id: post.id.toString()},
  }))

  return {paths, fallback: false}
}

export async function getStaticProps({params}) {
  const res = await fetch(`https://api.example.com/posts/${params.id}`)
  const post = await res.json()

  return {props: {post}}
}

function Post({post}) {
  return <div>{post.title}</div>
}

export default Post
```

В этом примере `getStaticPaths` генерирует список всех возможных значений для [id], а `getStaticProps` использует эти значения для создания статических страниц.

## Advanced Topics:

### Describe the purpose and use cases of API routes in Next.js

API routes позволяют создавать API endpoints внутри Next.js приложения.

Цели:

- Создание серверных эндпоинтов без необходимости отдельного бэкенд-сервера
- Обработка форм
- Взаимодействие с базами данных
- Интеграция с внешними API

Пример:

```jsx
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({name: 'John Doe'})
}
```

Использование:

```jsx
async function fetchData() {
  const res = await fetch('/api/hello')
  const data = await res.json()
  console.log(data)
}
```

### Explain the concept of middleware in Next.js and its role in the application lifecycle

Middleware в Next.js - это функции, которые выполняются между получением запроса и отправкой ответа.

Роль:

- Модификация ответа
- Перенаправление запросов
- Добавление заголовков
- Аутентификация и авторизация

Пример:

```javascript
// middleware.js
import {NextResponse} from 'next/server'

export function middleware(request) {
  const response = NextResponse.next()
  response.headers.set('x-custom-header', 'my-value')
  return response
}

export const config = {
  matcher: '/api/:path*',
}
```

### How does Next.js handle authentication in applications?

Next.js не предоставляет встроенного решения для аутентификации, но предлагает гибкие способы её реализации:

1. Использование API routes для обработки аутентификации:

```jsx
// pages/api/login.js
import {sign} from 'jsonwebtoken'

export default async function handler(req, res) {
  const {username, password} = req.body

  // Проверка учетных данных
  if (username === 'admin' && password === 'password') {
    const token = sign({username}, process.env.JWT_SECRET)
    res.status(200).json({token})
  } else {
    res.status(401).json({message: 'Invalid credentials'})
  }
}
```

2. Использование middleware для проверки аутентификации:

```javascript
// middleware.js
import {NextResponse} from 'next/server'
import {verify} from 'jsonwebtoken'

export function middleware(request) {
  const token = request.cookies.get('token')

  if (!token) {
    return NextResponse.redirect('/login')
  }

  try {
    verify(token, process.env.JWT_SECRET)
    return NextResponse.next()
  } catch {
    return NextResponse.redirect('/login')
  }
}

export const config = {
  matcher: '/protected/:path*',
}
```

3. Использование библиотек, таких как NextAuth.js, для более комплексной аутентификации:

```jsx
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // Другие провайдеры...
  ],
  // Дополнительные настройки...
})
```
