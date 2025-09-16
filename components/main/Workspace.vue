<template>
  <section :class="swiperclass + ' workspace space'">
    <div class="container">
      <h2>Рабочее пространство</h2>

      <workspace-swiper :swiperclass="'.' + swiperclass" />
    </div>
  </section>
</template>

<script setup lang="ts">
import WorkspaceSwiper from "~/components/general/WorkspaceSwiper.vue";
const swiperclass = "workspace_main";
</script>

<style lang="scss">
.workspace.workspace_main {
  background: rgba(37, 37, 37, 1);
  padding: 50px 0;
  overflow: hidden;

  @media (max-width: 992px) {
    padding: 30px 0;
  }

  h2 {
    margin-bottom: 50px;
    color: rgba(255, 255, 255, 1);

    font-size: 32px;
    font-weight: 500;
    line-height: 38.82px;
    text-align: center;

    @media (max-width: 992px) {
      margin-bottom: 30px;
      font-size: 24px;
      line-height: 29.11px;
    }

    @media (max-width: 768px) {
      margin-bottom: 15px;
    }
  }
}
</style>
