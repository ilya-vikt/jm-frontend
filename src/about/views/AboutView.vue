<template>
  <CardBase class="about">
    <div class="about__inner">
      <AboutArticle />
      <div class="about__stages">
        <h2>Этапы выполнения работ</h2>
        <AboutTimeline class="about__timeline" />
      </div>
      <AboutContacts />
    </div>
  </CardBase>
</template>

<script setup lang="ts">
import CardBase from '@/share/components/CardBase.vue';
import AboutArticle from '@/about/blocks/AboutArticle.vue';
import AboutTimeline from '@/about/blocks/AboutTimeline.vue';
import AboutContacts from '@/about/blocks/AboutContacts.vue';
</script>

<style scoped lang="scss">
.about {
  &__inner {
    display: flex;
    flex-direction: column;
    gap: $gap-base * 4;
    max-width: 1000px;
    margin: 0 auto;
  }
}
</style>
