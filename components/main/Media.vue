<template>
  <section class="media space">
    <div class="container">
      <h2 class="title">МЕДИА. БУДНИ <span> «ГЕЛИКОН PROM»</span></h2>

      <tab-toggle
        :tabs="storeMedia.medias"
        @set-active="(i: number) => storeMedia.setMediaActive(i)"
      />

      <div class="media-row">
        <div
          v-for="(item, index) in storeMedia.medias"
          :key="index"
          :style="
            item.active ? 'opacity: 1; z-index:10' : 'opacity: 0; z-index:1'
          "
          class="tab-item"
        >
          <media-swiper :item="item" :index="index" />

          <arrow :right="false" :propclass="'media-left-' + index" />
          <arrow :right="true" :propclass="'media-right-' + index" />

          <div :class="'media-pagination-' + index"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Arrow from "~/components/UI/Arrow.vue";
import MediaSwiper from "~/components/main/MediaSwiper.vue";
import TabToggle from "../UI/TabToggle.vue";

const storeMedia = useMediaStore();
</script>

<style lang="scss">
.media {
  overflow: hidden;

  h2 {
    padding-top: 23px;
    position: relative;
    &::before {
      z-index: -1;
      position: absolute;
      top: 0;
      right: 0;

      content: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTQ4IiBoZWlnaHQ9IjI3OSIgdmlld0JveD0iMCAwIDU0OCAyNzkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik03IDI3NEw2Ny4xMTI0IDE5M0w5MS4xNTczIDIwMkwxNTcuMjgxIDExOEwxNzIuMzA5IDEyN0wyNDcuNDQ5IDEzTDI4Ni41MjIgNjFMMjk1LjUzOSA1NUwzOTEuNzE5IDE1N0w0MzYuODAzIDEzOUw1NDIgMjc0IiBzdHJva2U9IiNFNUU1RTUiIHN0cm9rZS13aWR0aD0iMTUiLz4KPC9zdmc+Cg==);

      @media (max-width: 992px) {
        width: 437px;
      }

      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  .tab-item {
    grid-row: 1/2;
    grid-column: 1/2;
    transition: all 0.4s ease-in-out;
  }

  .media-row {
    position: relative;
    display: grid;
    grid-template-columns: 100%;
    width: 100%;
    margin-top: 30px;

    [class*="media-right-"],
    [class*="media-left-"] {
      position: absolute;
      top: 50%;
      z-index: 5;

      @media (max-width: 992px) {
        display: none;
      }
    }

    [class*="media-right-"] {
      right: 0;
      transform: translateY(-50%) translateX(50%);
    }

    [class*="media-left-"] {
      left: 0;
      transform: translateY(-50%) translateX(-50%);
    }

    [class*="media-pagination-"] {
      margin: 20px 0 2px;
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: center;

      @media (min-width: 993px) {
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
}
</style>
