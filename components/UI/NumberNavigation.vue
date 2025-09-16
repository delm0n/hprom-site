<script setup lang="ts">
import Arrow from "./Arrow.vue";
const emit = defineEmits();

const props = defineProps<{
  page: number;
  countOfPage: number;
}>();

const setPage = (i: number) => {
  emit("set-page", i);
};
</script>

<template>
  <div class="number-navigation">
    <arrow :right="false" @click="page != 1 ? setPage(page - 1) : ''" />

    <p
      :class="['number-navigation__number', item == page ? 'active' : '']"
      v-for="(item, index) in countOfPage"
      :key="index"
      v-text="item"
      @click="setPage(item)"
    ></p>

    <arrow
      :right="true"
      @click="page != countOfPage ? setPage(page + 1) : ''"
    />
  </div>
</template>

<style lang="scss">
.number-navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 30px;

  &__number {
    font-size: 22px;
    font-weight: 700;
    line-height: 27.24px;
    cursor: pointer;
    color: rgba(100, 100, 100, 1);
    text-align: center;
    width: 12px;

    &.active {
      color: rgba(50, 50, 50, 1);
    }
  }
}
</style>
