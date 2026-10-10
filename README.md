# Professional Portfolio

A modern personal portfolio website built with Vue 3 and Vite. This project presents a professional online presence with a hero section, skills overview, about section, project showcase, and contact area, along with animated visual effects and a blog section.

## Overview

This portfolio is designed as a polished single-page experience for showcasing:

- professional identity and role title
- expertise and technology focus areas
- biography and background
- selected projects and case studies
- contact information and CTA sections
- additional blog/article pages for thought leadership

The interface uses Bootstrap styling, custom SCSS, AOS animations, and particle/cloud backgrounds to create a premium, modern feel.

## Tech Stack

- Vue 3
- Vite
- TypeScript
- Vue Router
- Bootstrap 5
- SCSS
- AOS
- tsparticles / vue3-particles

## Project Structure

```bash
src/
├── components/
│   ├── AppHero.vue
│   ├── AppSkills.vue
│   ├── AppAbout.vue
│   ├── AppProjects.vue
│   ├── AppContact.vue
│   ├── AppNav.vue
│   ├── AppFooter.vue
│   └── AppClouds.vue
├── views/
│   ├── HomeView.vue
│   ├── Blog.vue
│   ├── ArticleVue3Guide.vue
│   ├── ArticleCssTechniques.vue
│   └── ArticleWebFuture.vue
├── router/
│   └── index.ts
├── App.vue
├── main.ts
└── assets/
```

## Features

- animated hero section with typing effect
- responsive layout for desktop and mobile devices
- sections for skills, about, projects, and contact
- embedded project video carousel
- custom cloud and particle style backgrounds
- smooth section scrolling and interaction effects
- blog page and article route structure

## Getting Started

### Install dependencies

```bash
npm install
```

### Run in development mode

```bash
npm run dev
```

The app will be available in the browser through the local Vite server URL.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Notes

This repository currently contains placeholder profile and project text in several sections, so it can be customized.

## License

This project is for showcase use and is not currently configured with a specific open-source license.
