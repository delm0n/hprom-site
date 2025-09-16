<template>
  <section class="sotrudnichestvo space">
    <div class="container">
      <h2 class="title">СТАНЬ ЧАСТЬЮ КОМАНДЫ</h2>

      <tab-toggle
        :tabs="storeSotrudnichestvo.vakansii"
        @set-active="(i: number) => storeSotrudnichestvo.setVakansiiActive(i)"
      />
    </div>

    <div class="sotrudnichestvo-row">
      <div
        v-for="(item, index) in storeSotrudnichestvo.vakansii"
        :key="index"
        :style="
          item.active ? 'opacity: 1; z-index:10' : 'opacity: 0; z-index:1'
        "
        class="tab-item"
      >
        <sotrudnichestvo-swiper :item="item" :index="index" />

        <arrow :right="false" :propclass="'sotrudnichestvo-left-' + index" />
        <arrow :right="true" :propclass="'sotrudnichestvo-right-' + index" />

        <div :class="'sotrudnichestvo-pagination-' + index"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Arrow from "~/components/UI/Arrow.vue";
import SotrudnichestvoSwiper from "~/components/main/SotrudnichestvoSwiper.vue";
import TabToggle from "../UI/TabToggle.vue";

const storeSotrudnichestvo = useSotrudnichestvoStore();
</script>

<style lang="scss">
.sotrudnichestvo {
  overflow: hidden;

  .tab-item {
    grid-row: 1/2;
    grid-column: 1/2;
    transition: all 0.4s ease-in-out;
  }

  .sotrudnichestvo-row {
    position: relative;
    display: grid;
    grid-template-columns: 100%;

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

    .swiper-button-disabled {
      display: none;
    }

    [class*="sotrudnichestvo-right-"],
    [class*="sotrudnichestvo-left-"] {
      position: absolute;
      top: 50%;
      z-index: 5;

      @media (max-width: 992px) {
        display: none;
      }
    }

    [class*="sotrudnichestvo-right-"] {
      right: 0;
      transform: translateY(-50%) translateX(calc(50% - 30px));
    }

    [class*="sotrudnichestvo-left-"] {
      left: 0;
      transform: translateY(-50%) translateX(calc(-50% + 30px));
    }

    [class*="sotrudnichestvo-pagination-"] {
      @media (max-width: 992px) {
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
}
</style>
