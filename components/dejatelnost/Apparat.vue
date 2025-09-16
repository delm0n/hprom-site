<script setup lang="ts">
import type { IImage } from "~/config/settings";
import ApparatSwiper from "./ApparatSwiper.vue";

const apparat1 = [
  {
    src: "apparat-1",
    alt: "автоклавы",
  },
  {
    src: "apparat-2",
    alt: "самогонные аппараты",
  },
  {
    src: "apparat-3",
    alt: "пивоварни",
  },
  {
    src: "apparat-4",
    alt: "соковыжималки",
  },
  {
    src: "apparat-5",
    alt: "коптильни",
  },
  {
    src: "apparat-6",
    alt: "автоклавы с ТЭН",
  },
] as IImage[];

const apparat2 = [
  {
    src: "apparat-7",
    alt: "трубогибы dino",
  },
  {
    src: "apparat-8",
    alt: "пескоструйные аппараты",
  },
  {
    src: "apparat-9",
    alt: "гриндеры",
  },
  {
    src: "apparat-10",
    alt: "трубогибы",
  },
  {
    src: "apparat-11",
    alt: "печи-буржуйки",
  },
] as IImage[];
</script>

<template>
  <section class="dejatelnost-apparat">
    <h2 id="apparat">Продукция</h2>
    <p class="dejatelnost-subtitle">
      Качественные аппараты 10 различных групп: от автоклавов до полностью
      автоматизированных пивоварен
    </p>

    <p>
      В 2012 году начали открываться наши розничные магазины в Москве,
      Петербурге, и других крупных городах России, где можно было найти товары
      для консервирования, самогоноварения, пивоварения, виноделия, копчения и
      сыроделия.
    </p>

    <apparat-swiper :index="1" :apparat="apparat1" />

    <p>
      В 2018 году стартовало новое направление — инструменты (трубогибы,
      пескоструи, станки), а с 2019 года компания начала выпускать ещё и
      печи-буржуйки. 
    </p>

    <apparat-swiper :index="2" :apparat="apparat2" />
  </section>
</template>
