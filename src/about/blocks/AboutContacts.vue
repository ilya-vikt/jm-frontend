<template>
  <div class="about-contacts">
    <h2>По вопросам сотрудничества со мной можно связаяться следующими способами</h2>
    <ul class="about-contacts__list">
      <li>
        <OuterLink
          :icon="PhoneIcon"
          href="tel:+79950336614"
        >
          +7 (995) 033-66-14
        </OuterLink>
      </li>
      <li>
        <OuterLink
          :icon="MailIcon"
          href="mailto:ilya-vikt@yandex.ru"
          target="_blank"
        >
          ilya-vikt@yandex.ru
        </OuterLink>
      </li>
      <li>
        <OuterLink
          :icon="WhatsappIcon"
          href="https://wa.me/+79950336614"
          target="_blank"
        >
          +7 (995) 033-66-14
        </OuterLink>
      </li>
      <li>
        <OuterLink
          :icon="TelegramIcon"
          href="https://t.me/vikt_ilya"
          target="_blank"
        >
          @vikt_ilya
        </OuterLink>
      </li>
    </ul>
    <OuterLink
      :icon="ResumeIcon"
      href="https://hh.ru/resume/cb4d9b0cff0bf69e0f0039ed1f727148687145"
      target="_blank"
    >
      Мое резюме на hh.ru
    </OuterLink>
  </div>
</template>

<script setup lang="ts">
import {
  PhoneIcon,
  MailIcon,
  TelegramIcon,
  WhatsappIcon,
  ResumeIcon
} from '@/share/components/icons';
import OuterLink from '@/about/components/OuterLink.vue';
</script>

<style scoped lang="scss">
.about-contacts {
  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
