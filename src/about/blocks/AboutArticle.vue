<template>
  <article>
    <h1>О проекте Joky Market</h1>
    <h2>Цель</h2>
    <p>Целью проекта является демонстрация моих навыков работы с фреймворком Vue 3</p>
    <h2>Техническое описание</h2>
    <p>Joky Market это FullStack приложение</p>
    <p>Frontend написан с использованием фреймворка Vue 3</p>
    <p>
      <OuterLink
        :icon="GithubIcon"
        href="https://github.com/ilya-vikt/jm-frontend"
        underline
        target="_blank"
        >Код на GitHub</OuterLink
      >
    </p>
    <p>Backend написан с использованием фреймворка Nest</p>
    <p>
      <OuterLink
        :icon="GithubIcon"
        href="https://github.com/ilya-vikt/jm-backend"
        underline
        target="_blank"
        >Код на GitHub</OuterLink
      >
    </p>
  </article>
</template>

<script setup lang="ts">
import GithubIcon from '@/share/components/icons/GithubIcon.vue';
import OuterLink from '@/about/components/OuterLink.vue';
</script>
