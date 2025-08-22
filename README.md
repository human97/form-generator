# Описание проекта Form Generator

Этот проект представляет собой **генератор форм**, разработанный с использованием следующих технологий:

- **Vue 3 (Composition API)**
- **TypeScript**
- **Vuex**
- **Vue Router**
- **Vite**
- **SCSS**

1.​ Создал переиспользуемый компонент-генератор форм, поддерживающий
следующие типы элементов:
    -​ input
    - select
    -​ checkbox
    -​ textarea
    -​ кнопки для сохранения и отмены формы

2.​ Компонент импортируется на страницу и принимает следующую структуру данных:
    -​ объект с описанием полей формы (label, атрибуты и другие необходимые параметры)
    -​ объект для хранения значений полей формы, реализованный через v-model (значения могут приходить с сервера или задаваться вручную)

3.​ Обеспечил кастомизацию каждого поля формы с помощью слотов.
 
4.​ Реализовал обработку событий по нажатию на кнопки сохранения и отмены.

5.​ Подготовил несколько демонстрационных страниц с произвольными формами для демонстрации работы компонента.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
