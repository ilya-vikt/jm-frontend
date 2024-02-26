<template>
  <ul class="about-timeline">
    <li class="about-timeline__stage about-timeline__stage--completed">
      <h4 class="about-timeline__title">Разработка модуля каталога</h4>
      <p class="about-timeline__descr">
        Модуль каталога содержит главную страницу сайта с витриной, страницу одного товара, страницу
        поиска, а так же меню каталога
      </p>
    </li>
    <li class="about-timeline__stage">
      <h4 class="about-timeline__title">Разработка модуля авторизации</h4>
      <p class="about-timeline__descr">
        Модуль авторизации позволяет пользователям регистрироваться, входить в личный кабинет,
        форировать заказы, отслеживать доставку
      </p>
    </li>
    <li class="about-timeline__stage">
      <h4 class="about-timeline__title">Разработка модуля заказов</h4>
      <p class="about-timeline__descr">
        Модуль заказов позволяет оформить и оплатить заказ, а так же отслеживать его статус
        отправления и доставки
      </p>
    </li>
    <li class="about-timeline__stage about-timeline__stage--finish">
      <h4 class="about-timeline__title">Разработка модуля отзывов</h4>
      <p class="about-timeline__descr">
        Модуль отзывов позволяет зарегистрированным пользователям оставлять отзвывы о купленных
        товарах, которые будут отображаться в карточке товара
      </p>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.about-timeline {
  padding-left: 0.75rem;

  &__stage {
    padding-left: calc($gap-base + 0.72rem);
    position: relative;
    border-left: 2px solid var(--cl-border);
    padding-bottom: $gap-base * 2;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -1px;
      width: 1.44rem;
      height: 1.44rem;
      transform: translateX(-50%);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.42rem;
      color: var(--cl-green);
      border: 2px solid var(--cl-border);
      border-radius: 5px;
      background-color: var(--cl-block);
    }

    &--completed::before {
      content: '✓';
    }

    &--finish {
      border-color: transparent;
    }
  }

  &__title {
    font-size: 1.2rem;
    margin-bottom: $gap-base;
    text-transform: uppercase;
  }
}
</style>
