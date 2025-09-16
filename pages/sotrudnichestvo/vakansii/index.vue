<template>
  <main class="sotrudnichestvo-page page">
    <div class="container">
      <BreadCrumbs :array="breadCrumbs" />

      <h1 class="page-title">Вакансии</h1>
      <div class="sotrudnichestvo-wrapper">
        <side-bar
          :title="'Вакансии'"
          :page="'/sotrudnichestvo'"
          :array="storeSotrudnichestvo.sotrudnichestvo"
        />

        <div class="vakansii-wrapper">
          <div
            v-for="(item, index) in storeSotrudnichestvo.vakansii"
            :key="index"
            class="vakansii-item"
          >
            <div class="vakansii-item__img skeleton-image">
              <NuxtPicture
                format="avif,webp"
                sizes="840px"
                :src="'/images/vakansii/' + item.imgVakansii + '.png'"
                :alt="item.title"
              />
            </div>

            <div class="vakansii-item__content">
              <h2 v-text="item.title"></h2>
              <p class="content-description" v-text="item.description"></p>

              <NuxtLink
                :to="'/sotrudnichestvo/vakansii/' + item.url"
                class="button-secondary"
                ><span>Смотреть вакансии</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                >
                  <path
                    d="M1 6.5C0.447715 6.5 4.82823e-08 6.94772 0 7.5C-4.82823e-08 8.05228 0.447715 8.5 1 8.5L1 6.5ZM15.7071 8.20711C16.0976 7.81658 16.0976 7.18342 15.7071 6.79289L9.34315 0.428933C8.95262 0.0384085 8.31946 0.0384084 7.92893 0.428933C7.53841 0.819457 7.53841 1.45262 7.92893 1.84315L13.5858 7.5L7.92893 13.1569C7.53841 13.5474 7.53841 14.1805 7.92893 14.5711C8.31946 14.9616 8.95262 14.9616 9.34314 14.5711L15.7071 8.20711ZM1 8.5L15 8.5L15 6.5L1 6.5L1 8.5Z"
                    fill="#323232"
                  />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <popular-vakansii />
  </main>
</template>

<script setup lang="ts">
import SideBar from "~/components/UI/SideBar.vue";
import BreadCrumbs from "~/components/UI/BreadCrumbs.vue";
import type { IBreadCrumbs } from "~/config/settings";
import PopularVakansii from "~/components/general/Popular.vue";
const storeSotrudnichestvo = useSotrudnichestvoStore();

const breadCrumbs: IBreadCrumbs[] = [
  {
    title: "Главная",
    ref: "/",
  },

  {
    title: "Сотрудничество",
    ref: "/sotrudnichestvo/vakansii",
  },

  {
    title: "Вакансии",
  },
];
</script>

<style lang="scss">
.vakansii-wrapper {
  flex-grow: 1;

  .vakansii-item {
    overflow: hidden;
    border-radius: 20px;
    background: rgba(246, 246, 246, 1);
    display: grid;
    grid-template-columns: 420px 1fr;
    align-items: center;

    @media (max-width: 1136px) {
      grid-template-columns: 301px 1fr;
    }

    @media (max-width: 992px) {
      grid-template-columns: 43% 1fr;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    &__img {
      aspect-ratio: 420 / 388;
      position: relative;
      overflow: hidden;
      height: 100%;

      @media (max-width: 1136px) {
        aspect-ratio: auto;
      }
      @media (max-width: 768px) {
        aspect-ratio: 540 / 270;
      }
      img {
        width: 100%;
        @media (min-width: 769px) {
          position: absolute;
          object-fit: cover;
          object-position: center;
          height: 100%;
        }
      }
    }

    &__content {
      padding: 30px;
      flex-grow: 1;

      @media (max-width: 992px) {
        padding: 20px;
      }
    }

    h2 {
      font-size: 22px;
      font-weight: 700;
      line-height: 27.24px;
      margin-bottom: 7px;
      color: rgba(50, 50, 50, 1);

      @media (max-width: 992px) {
        font-size: 18px;
        line-height: 22.28px;
        margin-bottom: 5px;
      }
    }

    .content-description {
      font-size: 18px;
      font-weight: 400;
      line-height: 21.6px;
      color: rgba(100, 100, 100, 1);

      @media (max-width: 992px) {
        font-size: 14px;
        line-height: 16.8px;
      }
    }

    &:not(:last-child) {
      margin-bottom: 30px;
    }

    .button-secondary {
      max-width: 213px;
      max-width: max-content;
      margin-top: 20px;
    }
  }
}
</style>
