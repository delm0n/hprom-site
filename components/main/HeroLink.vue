<template>
  <NuxtLink :to="link.ref" :class="['link', link.customClass]">
    <div class="link-icon" v-html="link.svg"></div>

    <div class="link-content">
      <p class="link-content__title" v-text="link.title"></p>
      <p class="link-content__text" v-text="link.text"></p>
    </div>

    <div class="link-arrow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="24"
        viewBox="0 0 14 24"
        fill="none"
      >
        <path
          d="M13.0607 13.0607C13.6464 12.4749 13.6464 11.5251 13.0607 10.9393L3.51472 1.3934C2.92893 0.807611 1.97919 0.807611 1.3934 1.3934C0.807611 1.97919 0.807611 2.92893 1.3934 3.51472L9.87868 12L1.3934 20.4853C0.807611 21.0711 0.807611 22.0208 1.3934 22.6066C1.97919 23.1924 2.92893 23.1924 3.51472 22.6066L13.0607 13.0607ZM11 13.5H12V10.5H11V13.5Z"
          fill="#323232"
        />
      </svg>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import type { ILink } from "~/config/settings";

const props = defineProps<{
  link: ILink;
}>();
</script>

<style lang="scss">
.link {
  cursor: pointer;
  position: absolute;
  box-shadow: 0px 5px 10px 0px rgba(139, 139, 139, 0.22);
  background: rgba(255, 255, 255, 1);
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 30px;
  width: calc(50% - 30px - 30px / 2);
  transform: translateY(50%);
  @media (max-width: 1136px) and (min-width: 993px) {
    transform: translateY(75%);
  }
  @media (max-width: 992px) {
    padding: 20px;
    width: calc(50% - 30px - 20px / 2);
  }

  @media (max-width: 768px) {
    position: static;
    transform: translateY(0);
    width: 100%;
  }

  &__first {
    left: 30px;
    bottom: 0;

    @media (max-width: 768px) {
      margin-bottom: 20px;
    }
  }

  &__last {
    right: 30px;
    bottom: 0;
    @media (max-width: 768px) {
      margin-bottom: 30px;
    }
  }

  .link-content {
    flex-grow: 1;
    margin: 0 20px;

    @media (max-width: 992px) {
      margin: 0 10px;
    }

    &__title {
      font-size: 22px;
      font-weight: 700;
      line-height: 27.24px;
      margin-bottom: 5px;
      color: rgba(50, 50, 50, 1);

      @media (max-width: 992px) {
        font-size: 18px;
        line-height: 22.28px;
      }
    }

    &__text {
      font-size: 18px;
      font-weight: 400;
      line-height: 21.6px;
      color: rgba(100, 100, 100, 1);

      @media (max-width: 992px) {
        font-size: 14px;
        line-height: 16.8px;
      }
    }
  }

  .link-arrow {
    background: rgba(246, 246, 246, 1);
    transition: all 0.3s;
    width: 59px;
    height: 59px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    @media (max-width: 992px) {
      width: 44px;
      height: 44px;

      svg {
        width: 10px;
        height: 17px;
        margin-left: 2px;
      }
    }

    svg {
      margin-left: 4px;
      display: block;
    }
  }

  .link-icon {
    flex-shrink: 0;
    svg {
      display: block;
      @media (max-width: 992px) {
        width: 44px;
        height: 44px;
      }
    }
  }

  &:hover {
    .link-arrow {
      background: rgba(0, 73, 120, 1);
      svg path {
        fill: #fff;
      }
    }
  }
}
</style>
