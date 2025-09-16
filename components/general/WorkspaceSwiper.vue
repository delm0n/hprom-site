<template>
  <ClientOnly>
    <div class="workspace-row">
      <swiper-container
        :loop="true"
        :slides-per-view="1"
        :space-between="30"
        :breakpoints="{
          769: {
            slidesPerView: 3,
          },
        }"
        :navigation="{
          nextEl: swiperclass + ' .workspace-right',
          prevEl: swiperclass + ' .workspace-left',
        }"
        :pagination="{
          el: swiperclass + ' .workspace-pagination',
          type: 'bullets',
          clickable: true,
        }"
        :modules="[Navigation, Pagination]"
        class="workspace-wrapper"
      >
        <swiper-slide
          v-for="(item, index) in workspace"
          :key="index"
          class="workspace-item"
        >
          <NuxtPicture
            format="avif,webp"
            sizes="100vw xs:700px sm:300px lg:360px xl:420px"
            :src="'/images/workspace/' + item.src + '.png'"
            :alt="item.alt"
            loading="lazy"
          />
        </swiper-slide>
      </swiper-container>

      <arrow :right="false" :propclass="'workspace-left'" />
      <arrow :right="true" :propclass="'workspace-right'" />

      <div class="workspace-pagination"></div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import Arrow from "~/components/UI/Arrow.vue";
import { Navigation, Pagination } from "swiper/modules";

const prop = defineProps<{
  swiperclass: string;
}>();

const workspace = [
  {
    src: "workspace-1",
    alt: "текст",
  },
  {
    src: "workspace-2",
    alt: "текст",
  },
  {
    src: "workspace-3",
    alt: "текст",
  },
  {
    src: "workspace-1",
    alt: "текст",
  },
  {
    src: "workspace-2",
    alt: "текст",
  },
  {
    src: "workspace-3",
    alt: "текст",
  },
];
</script>

<style lang="scss">
.workspace-row {
  position: relative;

  .workspace-right,
  .workspace-left {
    position: absolute;
    top: 50%;
    z-index: 5;

    @media (max-width: 992px) {
      display: none;
    }
  }

  .workspace-right {
    right: 0;
    transform: translateY(-50%) translateX(50%);
  }

  .workspace-left {
    left: 0;
    transform: translateY(-50%) translateX(-50%);
  }

  .workspace-pagination {
    margin: 20px 0 2px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;

    @media (min-width: 1201px) {
      display: none;
    }

    .swiper-pagination-bullet {
      flex-shrink: 0;
      display: block;
      cursor: pointer;
      width: 20px;
      height: 20px;
      border: 2px solid rgba(255, 255, 255, 1);
      border-radius: 100%;

      &-active {
        background: #fff;
      }
    }
  }

  .workspace-item {
    img {
      width: 100%;
      aspect-ratio: 1/1;
      transition: opacity 0.3s;

      &:hover {
        opacity: 0.6;
      }
    }
  }
}
</style>
