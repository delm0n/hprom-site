<template>
  <div class="page-breadcrumbs">
    <ClientOnly>
      <div
        v-for="(item, index) in array.slice(0, array.length - 1)"
        :key="index"
      >
        <NuxtLink :to="item.ref" v-html="item.title"></NuxtLink>
        &nbsp;—&nbsp;
      </div>
    </ClientOnly>

    <span>
      {{ array[array.length - 1].title }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { IBreadCrumbs } from "~/config/settings";

const props = defineProps<{
  array: IBreadCrumbs[];
}>();
</script>

<style lang="scss">
.page-breadcrumbs {
  display: flex;
  flex-wrap: wrap;

  & > div {
    display: flex;
  }

  span,
  a,
  & > div {
    cursor: pointer;
    color: rgba(100, 100, 100, 1);
    transition: all 0.3s;

    font-size: 16px;
    font-weight: 400;
    line-height: 19.2px;

    @media (max-width: 992px) {
      font-size: 12px;
      line-height: 14.4px;
    }
  }

  span,
  a {
    &:hover {
      color: rgba(50, 50, 50, 0.5);
    }
  }
}
</style>
