---
title: HTML5 and Semantic Markup
---

## Semantic HTML

Семантический HTML использует теги, которые несут смысловую нагрузку, улучшая доступность и SEO веб-страницы.

**Samples:**

```html
<header>
  <h1>Заголовок сайта</h1>
  <nav>
    <ul>
      <li><a href="#home">Главная</a></li>
      <li><a href="#about">О нас</a></li>
    </ul>
  </nav>
</header>
<main>
  <article>
    <h2>Название статьи</h2>
    <p>Содержание статьи...</p>
  </article>
  <aside>
    <h3>Дополнительная информация</h3>
    <p>Боковая панель с дополнительным контентом.</p>
  </aside>
</main>
<footer>
  <p>&copy; 2024 Мой сайт</p>
</footer>
```

## Responsive Images

Отзывчивые изображения адаптируются к размеру экрана и плотности пикселей устройства.

Пример HTML:

```html
<picture>
  <source media="(min-width: 800px)" srcset="large.jpg" />
  <source media="(min-width: 400px)" srcset="medium.jpg" />
  <img src="small.jpg" alt="Описание изображения" />
</picture>

<img
  src="image.jpg"
  srcset="image-1x.jpg 1x, image-2x.jpg 2x"
  alt="Отзывчивое изображение"
/>
```

Пример CSS:

```css
.responsive-image {
  max-width: 100%;
  height: auto;
}
```
