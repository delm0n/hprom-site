<script setup lang="ts">
import HeliconHeaderContact from "./HeliconHeaderContact.vue";
import Search from "./Search.vue";

const storeHeader = useHeaderStore();
const viewport = useViewport();
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header-wrapper">
        <div
          v-if="!viewport.isGreaterThan('mobileWide')"
          class="header-wrapper__burger"
          @click="storeHeader.setBurger(true)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <rect x="1" y="1" width="38" height="38" rx="14" fill="#004978" />
            <rect
              x="1"
              y="1"
              width="38"
              height="38"
              rx="14"
              stroke="#004978"
              stroke-width="2"
            />
            <path
              d="M11.5 11.5H28.5V13.625H11.5V11.5ZM11.5 18.9375H22.8333V21.0625H11.5V18.9375ZM11.5 26.375H28.5V28.5H11.5V26.375Z"
              fill="white"
            />
          </svg>
        </div>
        <NuxtLink to="/" class="header-wrapper__logo">
          <NuxtPicture
            preload
            format="avif,webp"
            sizes="103px"
            width="103"
            :src="'/images/layout/logo.png'"
            alt="Хеликон"
          />
        </NuxtLink>

        <helicon-header-contact />

        <div
          class="header-wrapper__links"
          v-if="viewport.isGreaterThan('mobileWide')"
        >
          <NuxtLink
            v-for="(link, index) in storeHeader.links"
            :key="index"
            :to="link.to"
            class="link-item"
            >{{ link.text }}</NuxtLink
          >
        </div>

        <div class="header-wrapper__search">
          <search />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  position: fixed;
  width: 100%;
  background: #fff;
  z-index: 50;
  box-shadow: 0px 5px 10px 0px rgba(139, 139, 139, 0.22);
  border-radius: 0px 0px 20px 20px;

  .header-wrapper {
    padding-top: 15px;
    display: grid;
    position: relative;
    grid-template-columns: auto 1fr 188px;

    @media (max-width: 768px) {
      padding: 5px 0;
      grid-template-columns: auto auto 1fr auto;
      align-items: center;
    }

    &__logo {
      grid-row: 1/3;
      grid-column: 1/2;
      margin-right: 30px;
      transition: all 0.3s;

      @media (hover: hover) {
        cursor: pointer;
        &:hover {
          opacity: 0.5;
        }
      }

      @media (max-width: 840px) {
        width: 88px;
        margin-right: 14px;
      }

      @media (max-width: 768px) {
        grid-row: 1 / 2;
        grid-column: 2 / 3;
        margin-left: 20px;
        margin-right: 0;
        width: 71px;
      }

      @media (max-width: 375px) {
        margin-left: 10px;
      }
    }

    &__links {
      grid-row: 2/3;
      grid-column: 2/3;
      padding: 10px 0 13px;

      display: flex;
      align-items: center;

      .link-item {
        margin-right: 30px;
        font-size: 18px;
        font-weight: 500;
        line-height: 23px;
        color: rgba(50, 50, 50, 1);
        text-transform: uppercase;
        border-bottom: 1px solid rgba(50, 50, 50, 0);
        transition: all 0.3s;
        cursor: pointer;

        &:hover {
          opacity: 0.5;
          border-bottom: 1px solid rgba(50, 50, 50, 0.5);
        }

        @media (max-width: 992px) {
          font-size: 14px;
          line-height: 23px;
        }
      }
    }

    &__search {
      grid-row: 2/3;
      grid-column: 3/4;

      @media (max-width: 768px) {
        grid-column: 4/5;
        grid-row: 1/2;
      }
    }

    &__burger {
      grid-row: 1 / 2;
      grid-column: 1/2;

      @media (min-width: 769px) {
        display: none;
      }
    }
  }
}
</style>
