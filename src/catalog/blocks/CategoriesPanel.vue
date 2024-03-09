<template>
  <CardBase>
    <ul>
      <li
        v-for="category in currentCategories"
        :key="category.id"
      >
        <JmButton
          :to="createUrl(category.slug)"
          has-hover
        >
          {{ category.name }}
        </JmButton>
      </li>
    </ul>
  </CardBase>
</template>

<script setup lang="ts">
import CardBase from '@/share/components/CardBase.vue';
import JmButton from '@/share/components/JmButton.vue';
import { useCategories } from '@/catalog/composable/useCategories';
import { computed } from 'vue';
import { controllerName } from '../constants';

const { categories, currentPrimaryCategoryId } = useCategories();

const currentCategories = computed(() =>
  categories.value
    ? categories.value.filter(({ parentId }) => parentId === (currentPrimaryCategoryId.value ?? 0))
    : null
);

const createUrl = (slug: string) => {
  const primaryCategorySlug = categories.value?.find(
    (cat) => cat.id === currentPrimaryCategoryId.value
  )?.slug;
  return primaryCategorySlug
    ? `/${controllerName}/${primaryCategorySlug}/${slug}`
    : `/${controllerName}/${slug}`;
};
</script>
