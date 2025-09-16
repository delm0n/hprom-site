<template>
  <section :class="swiperclass + ' workspace '">
    <h2 class="subtutle">Рабочее пространство</h2>

    <workspace-swiper :swiperclass="'.' + swiperclass" />
  </section>
</template>

<script setup lang="ts">
import WorkspaceSwiper from "~/components/general/WorkspaceSwiper.vue";
const swiperclass = "workspace_sotrudnichestvo";
</script>

<style lang="scss">
.workspace.workspace_sotrudnichestvo {
  padding: 50px 0 0;

  @media (max-width: 992px) {
    padding: 30px 0;
  }

  .workspace-row .workspace-pagination {
    @media (min-width: 993px) {
      display: none;
    }

    .swiper-pagination-bullet {
      border: 2px solid rgba(0, 73, 120, 1);

      &-active {
        background: rgba(0, 73, 120, 1);
      }
    }
  }
}
</style>
