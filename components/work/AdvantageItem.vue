<template>
  <div class="advantages-item">
    <div class="img-box">
      <div class="skeleton-image">
        <NuxtPicture
          format="avif,webp"
          sizes="300px"
          :src="'/images/advantages/' + item.img + '.png'"
          :alt="item.title"
          loading="lazy"
        />
      </div>

      <div class="advantages-item__hidden">
        <p v-html="item.text"></p>
      </div>
    </div>
    <div class="advantages-item__title">
      <p>
        <span v-text="item.title"></span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
        >
          <g clip-path="url(#clip0_740_8549)">
            <path
              d="M13 0C20.1797 0 26 5.8203 26 13C26 20.1797 20.1797 26 13 26C5.8203 26 0 20.1797 0 13C0 5.8203 5.8203 0 13 0ZM13 21.6667C14.1966 21.6667 15.1667 20.6966 15.1667 19.5L15.1667 13C15.1667 11.8034 14.1966 10.8333 13 10.8333C11.8034 10.8333 10.8333 11.8034 10.8333 13L10.8333 19.5C10.8333 20.6966 11.8034 21.6667 13 21.6667ZM13 8.66667C14.1966 8.66667 15.1667 7.69662 15.1667 6.5C15.1667 5.30338 14.1966 4.33333 13 4.33333C11.8034 4.33333 10.8333 5.30338 10.8333 6.5C10.8333 7.69662 11.8034 8.66667 13 8.66667Z"
              fill="#004978"
            />
          </g>
          <defs>
            <clipPath id="clip0_740_8549">
              <rect width="26" height="26" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IAdvantage } from "~/config/settings";

const props = defineProps<{
  item: IAdvantage;
}>();
</script>

<style lang="scss">
.advantages-item {
  width: 100%;
  height: 100%;

  .img-box:has(+ .advantages-item__title:hover) .advantages-item__hidden {
    opacity: 1;
  }

  &__title {
    margin-top: 10px;
    cursor: pointer;

    p {
      display: flex;
      gap: 10px;
      text-align: center;
      font-size: 22px;
      font-weight: 400;
      line-height: 26.4px;
      align-items: center;
      justify-content: center;

      @media (max-width: 992px) {
        font-size: 18px;
        font-weight: 400;
        line-height: 21.6px;
      }

      svg {
        flex-shrink: 0;
      }
    }

    &:hover {
      svg path {
        fill: rgba(50, 50, 50, 1);
      }
    }
  }

  &__hidden {
    background: rgba(50, 50, 50, 1);
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all 0.2s ease;
    z-index: 5;
    opacity: 0;
    top: 0;
    padding: 20px;
    p {
      font-size: 18px;
      font-weight: 400;
      line-height: 22px;
      color: rgba(255, 255, 255, 1);

      @media (max-width: 1530px) {
        font-size: 14px;
      }

      @media (max-width: 1136px) {
        font-size: 16px;
      }

      @media (max-width: 768px) {
        font-size: 18px;
      }

      @media (max-width: 576px) {
        font-size: 16px;
      }
    }
  }

  .skeleton-image {
    img {
      aspect-ratio: 1 / 1;
      width: 100%;
    }
  }

  .img-box {
    position: relative;
    overflow: hidden;

    border-radius: 20px;
    overflow: hidden;

    @media (max-width: 768px) {
      border-radius: 30px;
    }
  }
}
</style>
