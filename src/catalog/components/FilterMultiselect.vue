<template>
  <div class="multiselect"></div>
  <p
    v-if="filterData.caption"
    class="multiselect__caption"
  >
    {{ filterData.caption }}
  </p>
  <ul class="multiselect__list">
    <li
      v-for="checkbox in filterData.possibleValues"
      :key="checkbox.id"
      class="multiselect__item"
    >
      <FilterCheckbox
        v-model="modelValue"
        :value="checkbox.id"
        :filter-data="checkbox.value"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { FilterData } from '@/catalog/types';
import FilterCheckbox from './FilterCheckbox.vue';
defineProps<{
  filterData: FilterData;
}>();

const modelValue = defineModel<number[]>({ required: false });
</script>

<style scoped lang="scss">
.multiselect {
  &__caption {
    margin-bottom: 5px;
  }
}
</style>
