<template>
  <CardBase class="filters-panel">
    <ul
      v-if="filtersValues"
      class="filters-panel__list"
    >
      <li
        v-for="(filter, idx) in filters"
        :key="filter.id"
        class="filters-panel__item"
      >
        <component
          :is="getFilterComponent(filter.type)"
          v-model="filtersValues![idx]"
          :filter-data="filter"
        />
      </li>
    </ul>

    <div
      v-if="filtersValues"
      class="filters-panel__control"
    >
      <JmButton
        :icon="CheckIcon"
        has-border
        has-hover
        @click="applyFilters"
      >
        Применить
      </JmButton>
      <JmButton
        :icon="CloseIcon"
        has-border
        has-hover
        @click="resetFilters"
      >
        Сбросить
      </JmButton>
    </div>

    <div
      v-if="!filtersValues"
      class="filters-panel__sceleton"
    >
      <span
        v-for="idx in 6"
        :key="idx"
        class="loader"
        :style="{
          '--idx': idx
        }"
      ></span>
    </div>
  </CardBase>
</template>
<script setup lang="ts">
import type { FilterValue, FitlersByCategoryInput, NumberFilter } from '@/catalog/types';
import CardBase from '@/share/components/CardBase.vue';
import FilterCheckbox from '@/catalog/components/FilterCheckbox.vue';
import FilterMultiselect from '@/catalog/components/FilterMultiselect.vue';
import FilterDropdown from '@/catalog/components/FilterDropdown.vue';
import FilterRange from '@/catalog/components/FilterRange.vue';
import { useProducts } from '@/catalog/composable/useProducts';
import JmButton from '@/share/components/JmButton.vue';
import { CloseIcon, CheckIcon } from '@/share/components/icons';
import { useRoute, useRouter } from 'vue-router';
import { useFilters } from '@/catalog//composable/useFilters';
import { prepareFilterValue } from '@/catalog//utils';
import { onMounted, ref, watch } from 'vue';
import { useDroverController } from '@/share/composable/useDroverController';

const { closeDrover } = useDroverController();
const { filters, searchParams } = useFilters();
const { getQueryParams } = useProducts();

const filtersValues = ref<FilterValue[] | null>(null);

const getFilterComponent = (filterType: FitlersByCategoryInput['type']) => {
  switch (filterType) {
    case 'BOOLEAN':
      return FilterCheckbox;
    case 'NUMBER':
      return FilterRange;
    case 'LIST':
      return FilterDropdown;
    case 'MULTILIST':
      return FilterMultiselect;
  }
};

const getApplyedFilters = () => {
  if (!filtersValues.value) return null;

  const appliedFilters = filtersValues.value.reduce<
    {
      id: number;
      value: NonNullable<FilterValue>;
    }[]
  >((acc, val, idx) => {
    const filter = filters.value![idx];

    if (
      !(
        (filter.type === 'NUMBER' &&
          (filter as NumberFilter).meta.minVal === (val as [number, number])[0] &&
          (filter as NumberFilter).meta.maxVal === (val as [number, number])[1]) ||
        (filter.type === 'MULTILIST' && (val as number[]).length === 0) ||
        !val
      )
    ) {
      acc.push({
        id: filter.id,
        value: Array.isArray(val) ? [...val] : val
      });
    }
    return acc;
  }, []);
  return appliedFilters.length ? appliedFilters : null;
};

const applyFilters = () => {
  searchParams.appliedFilters = getApplyedFilters();
  router.replace({
    query: getQueryParams()
  });
  closeDrover();
};

const router = useRouter();
const route = useRoute();

const initFiltersValues = () => {
  filtersValues.value =
    filters.value?.map((filter) => prepareFilterValue(route.query[filter.name], filter)) ?? null;
  searchParams.appliedFilters = getApplyedFilters();
};

/**
 *When filters change you need to create new filtersValues
 */
watch(filters, initFiltersValues);

const resetFilters = async () => {
  await router.replace({
    query: searchParams.searchString ? { search: searchParams.searchString } : {}
  });
  initFiltersValues();
  closeDrover();
};

onMounted(() => {
  initFiltersValues();
});
</script>

<style scoped lang="scss">
.filters-panel {
  &__close {
    margin-left: auto;
    margin-bottom: $padding-v;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: $gap-base * 1.5;
  }

  &__item {
    border-bottom: 1px solid var(--cl-border);
    padding-bottom: $gap-base;
  }

  &__control {
    display: flex;
    gap: $gap-base;
    justify-content: space-between;
    padding-top: $gap-base;
  }

  &__sceleton {
    display: flex;
    flex-direction: column;
    gap: $gap-base;

    span {
      height: 2rem;
      border-radius: 5px;
    }
  }
}
</style>
