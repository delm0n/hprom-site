<template>
  <div>
    <div class="media-toggle">
      <div
        v-for="(item, index) in tabs"
        :key="index"
        :class="['toggle-item ', item.active ? 'toggle-item--active' : '']"
        @click="setActive(index)"
      >
        <p v-html="item.title"></p>
      </div>
    </div>

    <div v-if="!viewport.isLessThan('tablet')" class="media-toggle__line">
      <div
        :style="
          'transform: translateX(' +
          activeIndex * 100 +
          '%); width: calc(100% / ' +
          tabs.length +
          ');'
        "
        class="line-active"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IMedia } from "~/config/media";
const viewport = useViewport();

const emit = defineEmits();

const props = defineProps<{
  tabs: IMedia[];
}>();

const setActive = (i: number) => {
  emit("set-active", i);
};

const activeIndex = computed(() => {
  return props.tabs.findIndex((el) => el.active);
});
</script>

<style lang="scss">
.media-toggle {
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }

  &__line {
    overflow: hidden;
    margin-top: 10px;
    background: rgba(150, 150, 150, 1);
    height: 2px;
    width: 100%;

    .line-active {
      transition: all 0.3s ease-in-out;
      height: 100%;
      background: rgba(0, 73, 120, 1);
    }
  }

  .toggle-item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    @media (max-width: 768px) {
      transition: all 0.2s;

      border-bottom: 2px solid rgba(150, 150, 150, 1);
      padding-bottom: 10px;
      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }

    p {
      font-size: 22px;
      text-align: center;
      font-weight: 500;
      color: rgba(150, 150, 150, 1);
      line-height: 26.69px;
      transition: all 0.2s;

      @media (max-width: 992px) {
        font-size: 18px;
        line-height: 21.83px;
      }
    }

    &--active {
      p {
        color: rgba(0, 73, 120, 1);
      }

      @media (max-width: 768px) {
        border-bottom: 2px solid rgba(0, 73, 120, 1);
      }
    }
  }
}
</style>
