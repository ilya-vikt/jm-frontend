<template>
  <HeaderBase>
    <div class="header-default">
      <CategoriesMenuButton class="header-default__catalog" />
      <FiltersButton />
      <SearchBar
        v-if="!isCompact"
        class="header-default__search-bar"
      />
      <HeaderNav />
    </div>
  </HeaderBase>
  <CategoriesMenu />
  <MainMenu
    v-if="isCompact"
    :disabled="!isCompact"
  />
</template>

<script setup lang="ts">
import HeaderBase from '@/share/components/HeaderBase.vue';
import HeaderNav from '@/share/blocks/HeaderNav.vue';
import MainMenu from '@/share/blocks/MainMenu.vue';
import { CategoriesMenu, SearchBar, CategoriesMenuButton, FiltersButton } from '@/catalog';
import { useBreackpoints } from '@/share/composable/useBreackpoints';

const { isCompact } = useBreackpoints();
</script>

<style scoped lang="scss">
.header-default {
  display: grid;
  grid-template-columns: clamp(300px, 30%, 500px) 1fr auto;
  align-items: center;
  gap: $gap-base;
  min-height: 70px;

  &__catalog {
    justify-self: start;
  }
}

.is-laptop .header-default {
  grid-template-columns: auto 1fr auto;
}

.is-compact {
  .header-default {
    display: flex;
    gap: initial;
  }
}
</style>
