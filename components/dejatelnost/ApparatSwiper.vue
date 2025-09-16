<template>
  <ClientOnly>
    <div class="apparat-row">
      <swiper-container
        :loop="true"
        :slides-per-view="1"
        :space-between="20"
        :breakpoints="{
          577: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          993: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }"
        :navigation="{
          nextEl: '.apparat-right-' + index,
          prevEl: '.apparat-left-' + index,
        }"
        :modules="[Navigation]"
        class="apparat-wrapper"
      >
        <swiper-slide
          v-for="(item, i) in apparat"
          :key="i"
          class="apparat-item"
        >
          <!-- <NuxtPicture
            format="avif,webp"
            :src="'/images/organizacija/dejatelnost/' + item.src + '.png'"
            :alt="item.alt"
            sizes="330px"
            loading="lazy"
          /> -->
          <img
            :src="'/images/organizacija/dejatelnost/' + item.src + '.png'"
            :alt="item.alt"
            loading="lazy"
          />
        </swiper-slide>
      </swiper-container>

      <arrow
        :right="false"
        :propclass="'apparat-left' + ' apparat-left-' + index"
      />
      <arrow
        :right="true"
        :propclass="'apparat-right' + ' apparat-right-' + index"
      />
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import Arrow from "~/components/UI/Arrow.vue";
import { Navigation } from "swiper/modules";
import type { IImage } from "~/config/settings";

const props = defineProps<{
  apparat: IImage[];
  index: number;
}>();
</script>

<style lang="scss">
.apparat-row {
  position: relative;
  margin: 20px 0;
  .apparat-item {
    background: rgba(246, 246, 246, 1);
    overflow: hidden;
    border-radius: 20px;

    img {
      margin: 0 auto;
      aspect-ratio: 314/ 420;
      width: 100%;
    }
  }

  .apparat-right,
  .apparat-left {
    position: absolute;
    top: 50%;
    z-index: 5;
  }

  .apparat-right {
    right: 0;
    transform: translateY(-50%) translateX(50%);
  }

  .apparat-left {
    left: 0;
    transform: translateY(-50%) translateX(-50%);
  }
}
</style>
