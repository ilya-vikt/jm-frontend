<template>
  <input
    :id="checkboxId"
    v-model="modelValue"
    :value="value ?? null"
    class="checkbox-input"
    type="checkbox"
    @change="$emit('change', $event)"
  />
  <label
    class="checkbox-label"
    :for="checkboxId"
    >{{ getCaption() }}</label
  >
</template>
<script setup lang="ts">
import type { FilterData } from '@/catalog/types';
const checkboxId = crypto.randomUUID();
const props = defineProps<{
  filterData: FilterData | string;
  value?: any;
}>();

defineEmits<{
  change: [Event];
}>();
const modelValue = defineModel<typeof props.value extends undefined ? any : boolean>({
  required: true
});

const getCaption = () => (props.filterData as FilterData).caption ?? props.filterData;
</script>

<style scoped lang="scss">
.checkbox-label {
  cursor: pointer;
  display: inline-flex;
  gap: 5px;
  min-height: $control-minheight;
  padding-right: 10px;
  align-items: center;
  transition: color $animation;
  user-select: none;
  border-radius: 5px;
  border: 2px solid transparent;

  &::before {
    content: '';
    width: 1.2rem;
    height: 1.2rem;
    border: 2px solid var(--cl-border);
    border-radius: 5px;
    transition: background-color $animation;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
  }
}

.checkbox-input {
  position: absolute;
  width: 0;
  height: 0;
  border: none;
  opacity: 0;

  &:checked + .checkbox-label::before {
    background-image: url('@/assets/check-dark.svg');
  }

  &:focus-visible + .checkbox-label {
    border-color: var(--cl-outline);
  }

  @include mouse-hover {
    & + .checkbox-label {
      color: var(--cl-text-hover);
      &::before {
        background-color: var(--cl-hover);
      }
    }
  }
}
</style>
