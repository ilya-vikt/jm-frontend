<template>
  <JmDrover :drover-name="mainMenuDroverName">
    <CardBase class="main-menu">
      <ul>
        <li>
          <JmButton
            class="header-nav__lnk"
            :icon="InfoIcon"
            :icon-size="24"
            to="/about"
            has-hover
            @click="closeDrover"
          >
            О проекте
          </JmButton>
          <JmButton
            class="header-nav__lnk"
            :icon="ParcelIcon"
            :icon-size="24"
            to="/"
            has-hover
            @click="closeDrover"
          >
            Доставки
          </JmButton>
          <JmButton
            class="header-nav__lnk"
            :icon="HeartIcon"
            :icon-size="24"
            to="/"
            has-hover
            @click="closeDrover"
          >
            Избранное
          </JmButton>
          <JmButton
            class="header-nav__lnk"
            :icon="UserIcon"
            :icon-size="24"
            to="/"
            has-hover
            @click="closeDrover"
          >
            Профиль
          </JmButton>
          <JmButton
            class="header-nav__lnk"
            :icon="CartIcon"
            :icon-size="24"
            to="/"
            has-hover
            @click="closeDrover"
          >
            Корзина
          </JmButton>
        </li>
      </ul>
    </CardBase>
  </JmDrover>
</template>

<script setup lang="ts">
import { CartIcon, HeartIcon, InfoIcon, ParcelIcon, UserIcon } from '@/share/components/icons';
import JmDrover from '@/share/components/JmDrover.vue';
import JmButton from '@/share/components/JmButton.vue';
import CardBase from '@/share/components/CardBase.vue';
import { mainMenuDroverName } from '@/share/constants';
import { useDroverController } from '@/share/composable/useDroverController';

const { closeDrover } = useDroverController();
</script>
