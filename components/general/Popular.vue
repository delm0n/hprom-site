<template>
  <section class="popular">
    <div class="container">
      <h2 class="subtutle">Популярные вакансии</h2>
    </div>

    <div class="popular-row">
      <ClientOnly>
        <swiper-container
          :slides-per-view="'auto'"
          :space-between="10"
          :pagination="{
            el: '.popular-pagination',
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
                el: '.popular-pagination',
                type: 'bullets',
              },

              grid: {
                rows: 2,
                fill: 'row',
              },
            },

            993: {
              spaceBetween: 30,
              slidesPerView: 4,

              slidesOffsetAfter: 0,
              slidesOffsetBefore: 0,

              grid: {
                rows: 2,
                fill: 'row',
              },
            },
          }"
          :navigation="{
            nextEl: '.popular-right',
            prevEl: '.popular-left',
          }"
          :modules="[Navigation, Pagination, Grid]"
          class="popular-wrapper-swiper"
        >
          <swiper-slide
            v-for="(slide, i) in storeSotrudnichestvo.getPopularVakansii"
            :key="i"
            class="popular-item"
          >
            <NuxtLink
              :to="'/sotrudnichestvo/vakansii/' + slide.url + '/' + slide.path"
            >
              <work-item :item="slide" />
            </NuxtLink>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>

      <arrow :right="false" :propclass="'popular-left'" />
      <arrow :right="true" :propclass="'popular-right'" />

      <div :class="'popular-pagination'"></div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Pagination, Navigation, Grid } from "swiper/modules";
import Arrow from "~/components/UI/Arrow.vue";
import WorkItem from "../general/WorkItem.vue";

const storeSotrudnichestvo = useSotrudnichestvoStore();
</script>

<style lang="scss">
.popular {
  padding-top: 50px;

  .popular-row {
    position: relative;

    max-width: 1360px;
    width: 90%;
    margin: 30px auto 0;
    padding: 0 30px;

    @media (max-width: 1200px) {
      width: 100%;
    }

    @media (max-width: 768px) {
      padding: 0;
      width: 100%;
    }

    // для grid в swiper
    @media (min-width: 769px) {
      ::part(wrapper) {
        flex-wrap: wrap;
      }
    }
  }

  .popular-wrapper-swiper {
    align-items: stretch;
    .popular-item {
      height: auto !important;

      @media (max-width: 768px) {
        max-width: 400px;
      }

      @media (max-width: 576px) {
        max-width: 300px;
      }
    }
  }

  .popular-right,
  .popular-left {
    position: absolute;
    top: 50%;
    z-index: 5;

    @media (max-width: 992px) {
      display: none;
    }
  }

  .popular-right {
    right: 0;
    transform: translateY(-50%) translateX(calc(50% - 30px));
  }

  .popular-left {
    left: 0;
    transform: translateY(-50%) translateX(calc(-50% + 30px));
  }

  .popular-pagination {
    @media (min-width: 769px) {
      display: none;
    }

    @media (max-width: 768px) {
      margin: 10px 16px;
      border-radius: 3px;
      overflow: hidden;
      height: 3px;
      position: relative;
      background: #f6f6f6;
      .swiper-pagination-progressbar-fill {
        background: #004978;
        display: block;
        left: 0;
        position: absolute;
        height: 3px;
        top: 0;
        transform-origin: left top;
        width: 100%;
      }
    }
  }
}
</style>
