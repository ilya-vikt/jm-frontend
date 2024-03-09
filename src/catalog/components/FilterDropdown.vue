<template>
  <div
    class="dropdown"
    :class="{ 'dropdown--expanded': listExpand }"
  >
    <p
      v-if="filterData.caption"
      class="dropdown__caption"
    >
      {{ filterData.caption }}
    </p>
    <label class="dropdown__top">
      <input
        class="dropdown__control"
        type="text"
        readonly
        placeholder="Выберите значение"
        :value="text"
        @blur="listExpand = false"
        @click="listExpand = !listExpand"
        @keydown.enter="listExpand = !listExpand"
        @keydown.arrow-up="setPrevValue"
        @keydown.arrow-down="setNextValue"
        @keydown.escape="listExpand = false"
      />
    </label>

    <ul class="dropdown__list">
      <li
        class="dropdown__option"
        :class="{
          'dropdown__option--selected': !modelValue
        }"
        @click="modelValue = null"
      >
        [ Не выбрано ]
      </li>
      <li
        v-for="option in filterData.possibleValues"
        :key="option.id"
        class="dropdown__option"
        :class="{
          'dropdown__option--selected': modelValue === option.id
        }"
        @click="modelValue = option.id"
      >
        {{ option.value }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, computed } from 'vue';
import type { FilterData } from '../types';

const props = defineProps<{
  filterData: FilterData & {
    possibleValues: NonNullable<FilterData['possibleValues']>;
  };
}>();

const modelValue = defineModel<number | null>({ required: true });

const text = computed(() =>
  modelValue.value
    ? props.filterData.possibleValues.find((option) => option.id === modelValue.value)?.value
    : ''
);

const listExpand = ref(false);

const setPrevValue = () => {
  if (modelValue.value === null) return;
  const idx = props.filterData.possibleValues.findIndex((el) => el.id === modelValue.value);
  if (idx === 0) {
    modelValue.value = null;
    return;
  }

  modelValue.value = props.filterData.possibleValues[idx - 1].id;
};

const setNextValue = () => {
  const idx =
    modelValue.value === -1
      ? 0
      : props.filterData.possibleValues.findIndex((el) => el.id === modelValue.value) + 1;
  if (idx >= props.filterData.possibleValues.length) return;
  modelValue.value = props.filterData.possibleValues[idx].id;
};
</script>

<style scoped lang="scss">
.dropdown {
  position: relative;
  min-width: 150px;

  &__caption {
    margin-bottom: 5px;
  }

  &__top {
    display: block;
    position: relative;
    z-index: 1;
    transition: color $animation;

    &::after {
      content: '';
      position: absolute;
      right: 10px;
      top: 10px;
      width: 10px;
      height: 10px;
      transform: rotate(45deg);
      transform-origin: 70% 70%;
      transition: transform $animation;
      border-bottom: 2px solid currentColor;
      border-right: 2px solid currentColor;
    }

    @include mouse-hover {
      color: var(--cl-text-hover);
    }
  }

  &__control {
    cursor: pointer;
    width: 100%;
    min-height: $control-minheight;
    background-color: var(--cl-block);
    padding: 5px;
    outline: none;
    user-select: none;
    transition: background-color $animation;
    border: 2px solid var(--cl-border);
    border-radius: 5px;

    &:focus-visible {
      border: 2px solid var(--cl-outline);
    }

    &::placeholder {
      color: currentColor;
    }

    @include mouse-hover {
      background-color: var(--cl-hover);
    }
  }

  &__list {
    position: absolute;
    z-index: 100;
    background-color: var(--cl-block);
    width: 100%;
    border: 2px solid var(--cl-border);
    border-top: none;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    opacity: 0;
    visibility: hidden;
    transition:
      opacity 200ms ease-out,
      visibility 0s linear 200ms;
    cursor: pointer;
  }

  &__option {
    display: flex;
    align-items: center;
    height: $control-minheight;
    gap: 5px;
    padding: 5px;
    transition:
      background-color $animation,
      color $animation;

    &::before {
      content: '';
      width: 1rem;
      height: 1rem;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
    }

    &--selected::before {
      background-image: url('@/assets/check-dark.svg');
    }

    @include mouse-hover {
      background-color: var(--cl-hover);
      color: var(--cl-text-hover);
    }
  }

  &--expanded {
    .dropdown__list {
      opacity: 1;
      visibility: visible;
      transition-delay: 0s, 0s;
    }

    .dropdown__control {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;

      &::after {
        transform: rotate(225deg);
      }
    }
  }
}
</style>
