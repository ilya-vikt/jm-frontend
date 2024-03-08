<template>
  <JmButton
    has-hover
    icon-size="24"
    :icon="CloseIcon"
    @click="closeDrover"
  />
</template>
<script setup lang="ts">
import JmButton from '@/share/components/JmButton.vue';
import { CloseIcon } from '@/share/components/icons';
import { useDroverController } from '@/share/composable/useDroverController';

const { closeDrover } = useDroverController();
</script>
