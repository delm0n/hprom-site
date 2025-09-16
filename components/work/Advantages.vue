<template>
  <section class="advantages" v-if="advantages.length > 0">
    <p class="advantages-title">Что мы предлагаем?</p>

    <div v-if="viewport.isGreaterThan('mobileWide')" class="advantages-wrapper">
      <advantage-item
        v-for="(item, index) in advantages"
        :key="index"
        :item="item"
      />
    </div>

    <div v-else>
      <ClientOnly>
        <swiper-container
          :slides-per-view="1"
          :space-between="20"
          :breakpoints="{
            769: {
              slidesPerView: 3,
            },
          }"
          :pagination="{
            el: '.advantages-pagination',
            type: 'bullets',
            clickable: true,
          }"
          :modules="[Pagination]"
        >
          <swiper-slide v-for="(item, index) in advantages" :key="index">
            <advantage-item :item="item" />
          </swiper-slide>
        </swiper-container>
      </ClientOnly>

      <div class="advantages-pagination"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Pagination } from "swiper/modules";
import type { IAdvantage } from "~/config/settings";
import AdvantageItem from "./AdvantageItem.vue";
const viewport = useViewport();

const props = defineProps<{
  advantages: IAdvantage[];
}>();
</script>

<style lang="scss">
.advantages {
  overflow: hidden;
  background: rgba(246, 246, 246, 1);
  border-radius: 20px;
  padding: 20px;

  .advantages-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media (max-width: 1136px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  .advantages-title {
    font-size: 27px;
    font-weight: 500;
    line-height: 32.75px;
    color: rgba(50, 50, 50, 1);
    margin-bottom: 10px;

    @media (max-width: 992px) {
      font-size: 22px;
      line-height: 26.4px;
    }
  }

  .advantages-pagination {
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
      border: 2px solid rgba(0, 73, 120, 1);
      border-radius: 100%;

      &-active {
        background: rgba(0, 73, 120, 1);
      }
    }
  }
}
</style>
