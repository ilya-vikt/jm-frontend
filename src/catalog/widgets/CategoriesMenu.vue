<template>
  <JmDrover :drover-name="categoriesMenuDroverName">
    <div class="categories-menu">
      <CardBase
        v-if="!isCompact || (isCompact && !primaryId)"
        class="categories-menu__primary"
      >
        <CloseDroverButton
          v-if="isCompact"
          class="categories-menu__close"
        />

        <PrimaryList />
      </CardBase>

      <CardBase
        v-if="!isCompact || (isCompact && primaryId)"
        class="categories-menu__secondary"
      >
        <div class="categories-menu__panel">
          <JmButton
            v-if="isCompact"
            has-hover
            icon-size="24"
            :icon="ArrowLeftIcon"
            @click="primaryId = null"
          />
          <p class="categories-menu__title">{{ primaryTitle }}</p>
          <CloseDroverButton class="categories-menu__close" />
        </div>
        <SecondaryList />
      </CardBase>
    </div>
  </JmDrover>
</template>

<script setup lang="ts">
import JmDrover from '@/share/components/JmDrover.vue';
import JmButton from '@/share/components/JmButton.vue';
import CardBase from '@/share/components/CardBase.vue';
import PrimaryList from '@/catalog/blocks/PrimaryList.vue';
import SecondaryList from '@/catalog/blocks/SecondaryList.vue';
import { ArrowLeftIcon } from '@/share/components/icons';

import { useCategories } from '@/catalog/composable/useCategories';
import { useBreackpoints } from '@/share/composable/useBreackpoints';
import { categoriesMenuDroverName } from '@/catalog/constants';
import CloseDroverButton from '@/share/blocks/CloseDroverButton.vue';

const { primaryId, primaryTitle } = useCategories();
const { isCompact } = useBreackpoints();
</script>

<style scoped lang="scss">
.categories-menu {
  display: flex;
  gap: $gap-base;
  height: 100%;

  &__panel {
    display: flex;
    align-items: center;
    gap: $gap-base;
  }

  &__title {
    font-size: 1.4rem;
  }

  &__primary,
  &__secondary {
    display: flex;
    flex-direction: column;
    gap: $gap-base;
    overflow-y: auto;
  }

  &__primary {
    width: clamp(300px, 30%, 400px);
  }

  &__secondary {
    flex-grow: 1;
  }

  &__close {
    margin-left: auto;
  }
}

.is-compact .categories-menu__primary {
  flex-basis: 100%;
}
</style>
