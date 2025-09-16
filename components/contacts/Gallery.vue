<template>
  <section class="contact-gallery">
    <ClientOnly>
      <swiper-container
        :loop="true"
        :slides-per-view="1"
        :space-between="30"
        :breakpoints="{
          992: {
            slidesPerView: 2,
          },
        }"
        :pagination="{
          el: '.gallery-pagination',
          type: 'bullets',
          clickable: true,
        }"
        :modules="[Pagination]"
        class="contact-gallery-swiper"
      >
        <swiper-slide
          v-for="(item, index) in gallery"
          :key="index"
          class="gallery-item"
        >
          <div class="gallery-item__img">
            <NuxtPicture
              format="avif,webp"
              sizes="600px"
              :src="'/images/workspace/' + item.src + '.png'"
              :alt="item.alt"
            />
          </div>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>

    <div class="gallery-pagination"></div>
  </section>
</template>

<script setup lang="ts">
import { Pagination } from "swiper/modules";

const gallery = [
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
.contact-gallery {
  &-swiper {
    height: 100%;
  }

  .gallery-item {
    width: 100%;
    height: 100%;

    border-radius: 20px;
    overflow: hidden;
    img {
      width: 100%;
    }
    @media (min-width: 769px) {
      img {
        height: 100%;
        object-fit: cover;
        position: absolute;
      }

      &__img {
        position: relative;
        height: 100%;
      }
    }
  }

  .gallery-pagination {
    display: none;

    @media (max-width: 768px) {
      margin: 20px 0 2px;
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: center;

      .swiper-pagination-bullet {
        flex-shrink: 0;
        display: block;
        cursor: pointer;
        width: 20px;
        height: 20px;
        border: 2px solid rgba(0, 73, 120, 1);
        border-radius: 100%;

        &-active {
          background: rgba(0, 73, 120, 1);
        }
      }
    }
  }
}
</style>
