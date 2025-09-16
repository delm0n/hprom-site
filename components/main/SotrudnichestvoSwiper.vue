<template>
  <ClientOnly>
    <swiper-container
      :slides-per-view="'auto'"
      :space-between="10"
      :pagination="{
        el: '.sotrudnichestvo-pagination-' + index,
        type: 'progressbar',
      }"
      :slides-offset-after="18"
      :slides-offset-before="18"
      :breakpoints="{
        769: {
          spaceBetween: 20,
          slidesPerView: 3,

          slidesOffsetAfter: 0,
          slidesOffsetBefore: 0,

          pagination: {
            el: '.sotrudnichestvo-pagination-' + index,
            type: 'bullets',
          },
        },

        993: {
          spaceBetween: 30,
          slidesPerView: 4,

          slidesOffsetAfter: 0,
          slidesOffsetBefore: 0,
        },
      }"
      :navigation="{
        nextEl: '.sotrudnichestvo-right-' + index,
        prevEl: '.sotrudnichestvo-left-' + index,
      }"
      :modules="[Navigation, Pagination]"
      class="sotrudnichestvo-wrapper-swiper"
    >
      <swiper-slide
        v-for="(slide, i) in storeSotrudnichestvo.getVakansiiContent10(item)"
        :key="i"
        class="sotrudnichestvo-item"
      >
        <NuxtLink
          :to="'/sotrudnichestvo/vakansii/' + item.url + '/' + slide.path"
        >
          <work-item :item="slide" />
        </NuxtLink>
      </swiper-slide>

      <swiper-slide class="sotrudnichestvo-item last-slide">
        <div class="sotrudnichestvo-item__content">
          <p class="content-title">Корпоративная культура</p>

          <NuxtLink :to="'/404'" class="button-secondary"
            ><span>Перейти</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
            >
              <path
                d="M1 6.5C0.447715 6.5 4.82823e-08 6.94772 0 7.5C-4.82823e-08 8.05228 0.447715 8.5 1 8.5L1 6.5ZM15.7071 8.20711C16.0976 7.81658 16.0976 7.18342 15.7071 6.79289L9.34315 0.428933C8.95262 0.0384085 8.31946 0.0384084 7.92893 0.428933C7.53841 0.819457 7.53841 1.45262 7.92893 1.84315L13.5858 7.5L7.92893 13.1569C7.53841 13.5474 7.53841 14.1805 7.92893 14.5711C8.31946 14.9616 8.95262 14.9616 9.34314 14.5711L15.7071 8.20711ZM1 8.5L15 8.5L15 6.5L1 6.5L1 8.5Z"
                fill="#323232"
              />
            </svg>
          </NuxtLink>
        </div>
      </swiper-slide>

      <swiper-slide class="sotrudnichestvo-item last-slide">
        <div class="sotrudnichestvo-item__content">
          <p class="content-title">Смотреть все актуальные вакансии</p>

          <NuxtLink :to="'/sotrudnichestvo/vakansii'" class="button-secondary"
            ><span>Перейти</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
            >
              <path
                d="M1 6.5C0.447715 6.5 4.82823e-08 6.94772 0 7.5C-4.82823e-08 8.05228 0.447715 8.5 1 8.5L1 6.5ZM15.7071 8.20711C16.0976 7.81658 16.0976 7.18342 15.7071 6.79289L9.34315 0.428933C8.95262 0.0384085 8.31946 0.0384084 7.92893 0.428933C7.53841 0.819457 7.53841 1.45262 7.92893 1.84315L13.5858 7.5L7.92893 13.1569C7.53841 13.5474 7.53841 14.1805 7.92893 14.5711C8.31946 14.9616 8.95262 14.9616 9.34314 14.5711L15.7071 8.20711ZM1 8.5L15 8.5L15 6.5L1 6.5L1 8.5Z"
                fill="#323232"
              />
            </svg>
          </NuxtLink>
        </div>
      </swiper-slide> </swiper-container
  ></ClientOnly>
</template>

<script setup lang="ts">
import { Pagination, Navigation } from "swiper/modules";
import type { IVakansii } from "~/config/sotrudnichestvo";
import WorkItem from "../general/WorkItem.vue";
const storeSotrudnichestvo = useSotrudnichestvoStore();

const props = defineProps<{
  index: number;
  item: IVakansii;
}>();
</script>

<style lang="scss">
.sotrudnichestvo-wrapper-swiper {
  align-items: stretch;

  .sotrudnichestvo-item {
    height: auto;

    @media (max-width: 768px) {
      max-width: 400px;
    }

    @media (max-width: 576px) {
      max-width: 300px;
    }
    @media (max-width: 375px) {
      max-width: 270px;
    }
  }

  .last-slide {
    background: rgba(246, 246, 246, 1);
    border-radius: 20px;
    overflow: hidden;
    height: auto;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
      padding: 20px;
    }

    .content-title {
      font-size: 22px;
      font-weight: 700;
      line-height: 27.24px;
      margin-bottom: 5px;
      color: rgba(50, 50, 50, 1);

      @media (max-width: 768px) {
        font-size: 18px;
        line-height: 22.28px;
      }
    }

    .button-secondary {
      max-width: 117px;
      max-width: max-content;
      margin-top: 10px;
    }
  }
}
</style>
