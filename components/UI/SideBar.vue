<template>
  <div class="side-bar">
    <ClientOnly
      ><div
        @click="bool = !bool"
        :class="['side-bar__hero', bool ? 'side-bar__hero--open' : '']"
      >
        <p>{{ title }}</p>

        <svg
          :style="
            bool ? 'transform: rotate(180deg)' : 'transform: rotate(0deg)'
          "
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="9"
          viewBox="0 0 16 9"
          fill="none"
        >
          <path
            d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 7L7 8L9 8L9 7L7 7Z"
            fill="white"
          />
        </svg>
      </div>

      <transition
        name="drop"
        @before-enter="beforeEnter"
        @enter="enter"
        @before-leave="beforeLeave"
        @leave="leave"
      >
        <div
          v-show="bool || viewport.isGreaterThan('mobileWide')"
          class="side-bar__box"
        >
          <div class="box-container">
            <NuxtLink
              :to="page + '/' + item.url"
              v-for="(item, index) in array"
              :key="index"
              :class="[
                'side-bar-item',
                isActive(item.url) ? 'side-bar-item--active' : '',
              ]"
              v-html="item.title"
            ></NuxtLink>
          </div>
        </div> </transition
    ></ClientOnly>
  </div>
</template>

<script setup lang="ts">
import type { IMedia } from "~/config/media";
import type { ISotrudnichestvo } from "~/config/sotrudnichestvo";

const route = useRoute();
const viewport = useViewport();

const props = defineProps<{
  array: (IMedia | ISotrudnichestvo)[]; // здесь используются поля из IPageDefault
  page: string;
  title: string;
}>();

const bool = ref(false);

const isActive = (url: string) => {
  return route.path.includes(url);
};
</script>

<style lang="scss">
.side-bar {
  max-width: 308px;
  width: 100%;
  margin-right: 30px;
  flex-shrink: 0;

  @media (max-width: 1400px) {
    max-width: 263px;
  }

  @media (max-width: 1200px) {
    max-width: 218px;
    margin-right: 20px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }

  &__hero {
    background: rgba(0, 73, 120, 1);
    box-shadow: 0px 5px 10px 0px rgba(173, 173, 173, 0.15);
    border-radius: 20px;
    color: rgba(255, 255, 255, 1);
    padding: 5px 20px;
    transition: 0.3s;

    justify-content: space-between;
    align-items: center;
    display: none;

    @media (max-width: 768px) {
      display: flex;
    }

    svg {
      transition: 0.3s ease-in-out;
      transform-origin: center;
    }

    &--open {
      border-radius: 20px 20px 0 0;
    }
  }

  &__box {
    transition: 0.3s ease-in-out;

    .box-container {
      padding: 20px;
      background: rgba(246, 246, 246, 1);
      border-radius: 20px;

      @media (max-width: 768px) {
        border-radius: 0 0 20px 20px;
        padding: 10px 20px;
      }
    }
  }

  .side-bar-item {
    display: block;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    line-height: 21.83px;
    transition: all 0.3s;
    color: rgba(100, 100, 100, 1);

    @media (max-width: 992px) {
      font-size: 14px;
      line-height: 16.98px;
    }

    &:hover,
    &--active {
      color: rgba(50, 50, 50, 1);
    }

    &:not(:last-child) {
      margin-bottom: 20px;

      @media (max-width: 992px) {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
