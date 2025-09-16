<template>
  <main class="sotrudnichestvo-page page">
    <div class="container">
      <BreadCrumbs :array="breadCrumbs" />

      <h1 class="page-title">Оптовым клиентам</h1>
      <div class="sotrudnichestvo-wrapper">
        <side-bar
          :title="'Оптовым клиентам'"
          :page="'/sotrudnichestvo'"
          :array="storeSotrudnichestvo.sotrudnichestvo"
        />

        <div class="optovym-wrapper">это страница Оптовым клиентам</div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import SideBar from "~/components/UI/SideBar.vue";
import BreadCrumbs from "~/components/UI/BreadCrumbs.vue";
import type { IBreadCrumbs } from "~/config/settings";
const storeSotrudnichestvo = useSotrudnichestvoStore();

const breadCrumbs: IBreadCrumbs[] = [
  {
    title: "Главная",
    ref: "/",
  },

  {
    title: "Сотрудничество",
    ref: "/sotrudnichestvo/vakansii",
  },

  {
    title: "Оптовым клиентам",
  },
];
</script>

<style lang="scss">
.optovym-wrapper {
}
</style>
