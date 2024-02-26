<template>
  <nav class="header-nav">
    <JmButton
      class="header-nav__lnk"
      :icon="ParcelIcon"
      :icon-size="24"
      to="/"
      vertical
      has-hover
    >
      Доставки
    </JmButton>
    <JmButton
      class="header-nav__lnk"
      :icon="HeartIcon"
      :icon-size="24"
      to="/"
      vertical
      has-hover
    >
      Избранное
    </JmButton>
    <JmButton
      class="header-nav__lnk"
      :icon="UserIcon"
      :icon-size="24"
      to="/"
      vertical
      has-hover
    >
      Профиль
    </JmButton>
    <JmButton
      class="header-nav__lnk"
      :icon="CartIcon"
      :icon-size="24"
      vertical
      to="/"
      has-hover
    >
      Корзина
    </JmButton>
    <JmButton
      class="header-nav__lnk"
      :icon="InfoIcon"
      :icon-size="24"
      vertical
      to="/about"
      has-hover
    >
      О проекте
    </JmButton>
    <JmButton
      class="header-nav__burger"
      :icon="BurgerIcon"
      :icon-size="24"
      vertical
      to="/"
      has-hover
    />
  </nav>
</template>

<script setup lang="ts">
import {
  BurgerIcon,
  CartIcon,
  HeartIcon,
  InfoIcon,
  ParcelIcon,
  UserIcon
} from '@/share/components/icons';
import JmButton from '@/share/components/JmButton.vue';
</script>

<style scoped lang="scss">
.header-nav {
  display: flex;

  &__burger {
    display: none;
  }
}

.is-tablet,
.is-mobile {
  .header-nav__lnk {
    display: none;
  }

  .header-nav__burger {
    display: block;
  }
}
</style>
