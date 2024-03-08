<template><div class="loader"></div></template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.loader {
  filter: brightness(50%);
  background-color: var(--cl-hover);
  animation: shine 3s linear infinite forwards;
}

@keyframes shine {
  0%,
  100% {
    filter: brightness(100%);
  }

  50% {
    filter: brightness(75%);
  }
}
</style>
