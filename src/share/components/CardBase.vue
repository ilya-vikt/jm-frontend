<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.card {
  background-color: var(--cl-block);
  padding: $padding-v $padding-h;
  border-radius: $border-radius;
}
</style>
