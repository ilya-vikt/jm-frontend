<template>
  <div class="range">
    <p
      v-if="props.filterData.caption"
      class="range__caption"
    >
      {{ props.filterData.caption }}
    </p>
    <div class="range__inputs">
      <label class="range__block">
        <span>От</span>
        <input
          v-model="modelValue[0]"
          type="number"
          :min="filterData.meta.minVal"
          @change="changeMinHandler($event.target as HTMLInputElement)"
        />
      </label>
      <label class="range__block">
        <span>До</span>
        <input
          v-model="modelValue[1]"
          type="number"
          :max="filterData.meta.maxVal"
          @change="changeMaxHandler($event.target as HTMLInputElement)"
        />
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FilterData } from '../types';

const props = defineProps<{
  filterData: FilterData & {
    meta: {
      minVal: number;
      maxVal: number;
    };
  };
}>();
const modelValue = defineModel<[number, number]>({ required: true });

if (modelValue.value[0] < props.filterData.meta.minVal) {
  modelValue.value[0] = props.filterData.meta.minVal;
}

if (modelValue.value[1] > props.filterData.meta.maxVal) {
  modelValue.value[1] = props.filterData.meta.maxVal;
}

const changeMaxHandler = (target: HTMLInputElement) => {
  if (+target.value > props.filterData.meta.maxVal) {
    modelValue.value[1] = props.filterData.meta.maxVal;
  }

  if (+target.value < modelValue.value[0]) {
    modelValue.value[1] = modelValue.value[0];
  }
};

const changeMinHandler = (target: HTMLInputElement) => {
  if (+target.value < props.filterData.meta.minVal) {
    modelValue.value[0] = props.filterData.meta.minVal;
  }

  if (+target.value > modelValue.value[1]) {
    modelValue.value[0] = modelValue.value[1];
  }
};
</script>
<style scoped lang="scss">
.range {
  &__caption {
    margin-bottom: 5px;
  }

  &__inputs {
    display: flex;
    gap: $gap-base;
  }

  &__block {
    display: flex;
    align-items: baseline;
    gap: 5px;

    input {
      width: 100px;
      min-height: $control-minheight;
      padding: 5px;
      line-height: 1;
      border: 2px solid var(--cl-border);
      border-radius: 5px;
      background-color: var(--cl-block);
      -moz-appearance: textfield;
      outline: none;
      transition:
        background-color $animation,
        color $animation;

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }

      &:focus-visible {
        border-color: var(--cl-outline);
      }

      @include mouse-hover {
        color: var(--cl-text-hover);
        background-color: var(--cl-hover);
      }
    }
  }
}
</style>
