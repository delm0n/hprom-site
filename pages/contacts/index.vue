<template>
  <main class="contact-page page">
    <div class="container">
      <BreadCrumbs :array="breadCrumbs" />

      <h1 class="page-title">Контакты</h1>
      <div class="contact-wrapper">
        <contacts-side />

        <contacts-map />
        <contacts-gallery />
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import ContactsSide from "~/components/contacts/Side.vue";
import ContactsMap from "~/components/contacts/Map.vue";
import BreadCrumbs from "~/components/UI/BreadCrumbs.vue";
import type { IBreadCrumbs } from "~/config/settings";
import ContactsGallery from "~/components/contacts/Gallery.vue";

const breadCrumbs: IBreadCrumbs[] = [
  {
    title: "Главная",
    ref: "/",
  },

  {
    title: "Контакты",
  },
];
</script>

<style lang="scss">
.contact-page {
  .contact-wrapper {
    display: grid;
    grid-template-columns: auto 66%;
    grid-template-rows: 1fr calc(50% - 15px);
    // 1fr auto;
    gap: 20px;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }

    &__side {
      max-width: 420px;
      width: 100%;
      grid-row: 1/3;
      grid-column: 1/2;

      @media (max-width: 768px) {
        max-width: 100%;
      }
    }

    .contact-map {
      grid-row: 1/2;
      grid-column: 2/3;
    }

    .contact-gallery {
      grid-row: 2/3;
      grid-column: 2/3;
    }
  }
}
</style>
