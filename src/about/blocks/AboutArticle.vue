<template>
  <article>
    <h1>О проекте Joky&nbsp;Market</h1>
    <h2>Цель</h2>
    <p>
      Целью проекта является демонстрация моих знаний и&nbsp;навыков работы с&nbsp;фреймворком
      Vue&nbsp;3, JavaScript, TypeScript, HTML5, CSS3 и&nbsp;других сопутствующих технологий
      web-разработки. А&nbsp;также моих навыков адаптивной и&nbsp;семантической верстки.
    </p>
    <h2>Описание</h2>
    <p>
      Joky Market это FullStack приложение, имитирующее интернет-магазин. В&nbsp;текущий момент
      реализован модуль каталога, это позволит вам оценить мой уровень компетенции и&nbsp;понять,
      походит ли&nbsp;он&nbsp;под ваши задачи. В&nbsp;дальнейшем планируется реализовать больше
      возможностей, присущих современным торговым интернет-площадкам. Весь код проекта находится
      в&nbsp;открытом доступе.
    </p>
    <p>Frontend написан с использованием фреймворка Vue&nbsp;3</p>
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
    <h2>Об авторе</h2>
    <p>
      Меня зовут Илья Викторов, я&nbsp;занимаюсь web-разработкой с&nbsp;2021&nbsp;года. Создаю сайты
      для организаций и&nbsp;частных лиц. Последние два года изучаю и&nbsp;практикуюсь
      в&nbsp;Frontend разработке с использованием фреймворка Vue&nbsp;3
    </p>
  </article>
</template>

<script setup lang="ts">
import GithubIcon from '@/share/components/icons/GithubIcon.vue';
import OuterLink from '@/about/components/OuterLink.vue';
</script>
