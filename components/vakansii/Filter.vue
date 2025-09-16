<template>
  <div class="filter-box">
    <div v-for="(item, index) in filters" :key="index" class="filter-box__item">
      <p class="filter-subtitle" v-text="item.title"></p>

      <div
        v-for="(checkbox, idx) in item.content"
        :key="idx"
        class="filter-box__item-checkbox"
        @click="setActive(index, idx)"
      >
        <div :class="['checkbox', checkbox.active ? 'checkbox-active' : '']">
          <div class="box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
            >
              <path
                d="M1 7.56424L5.92308 12.4531L17 1.45312"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
        </div>

        <span v-text="checkbox.name"></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IFilter } from "~/config/filter";
const emit = defineEmits();

const props = defineProps<{
  filters: IFilter[];
}>();

const setActive = (index: number, idx: number) => {
  emit("set-active", index, idx);
};
</script>

<style lang="scss">
.filter-box {
  &__item {
    &:not(:last-child) {
      margin-bottom: 20px;
    }

    .filter-subtitle {
      font-size: 18px;
      font-weight: 500;
      line-height: 21.83px;
      color: rgba(50, 50, 50, 1);
      margin-bottom: 10px;

      @media (max-width: 768px) {
        font-size: 14px;
        line-height: 16.98px;
      }
    }

    &-checkbox {
      display: flex;
      align-items: center;

      &:not(:last-child) {
        margin-bottom: 5px;
      }

      span {
        margin-left: 5px;
        display: block;
        font-size: 16px;
        font-weight: 500;
        line-height: 19.41px;
        color: rgba(100, 100, 100, 1);

        @media (max-width: 768px) {
          font-size: 12px;
          line-height: 14.56px;
        }
      }
    }
  }
}
</style>
