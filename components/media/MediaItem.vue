<template>
  <div class="media-item">
    <div class="media-item__img skeleton-image">
      <NuxtPicture
        format="avif,webp"
        sizes="500px"
        :src="'/images/media/' + item.img + '.png'"
        :alt="item.title"
      />
    </div>
    <div class="media-item__content">
      <h2 class="content-title">
        {{ item.title }}
      </h2>

      <p class="content-date" v-html="item.date"></p>
      <p
        class="content-text"
        v-html="storeMedia.getShortDescription(item.text, 77)"
      ></p>

      <NuxtLink :to="link" class="button-secondary"
        ><span>Читать</span>
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
</template>

<script setup lang="ts">
import type { IMediaContent } from "~/config/media";

const storeMedia = useMediaStore();
const props = defineProps<{
  item: IMediaContent;
  link: string;
}>();
</script>

<style lang="scss">
.media-page .media-wrapper .media-item {
  background: rgba(246, 246, 246, 1);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &__img {
    width: 100%;
    aspect-ratio: 153 / 97;
    position: relative;
    overflow: hidden;

    @media (max-width: 1200px) {
      aspect-ratio: 131 / 97;
    }

    @media (max-width: 992px) {
      aspect-ratio: 217 / 194;
    }

    @media (max-width: 768px) {
      aspect-ratio: 265 / 194;
    }

    img {
      position: absolute;
      object-fit: cover;
      object-position: center;
      width: 100%;
      height: 100%;
    }
  }

  &__content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    .content-title {
      font-size: 22px;
      font-weight: 700;
      line-height: 27.24px;
      color: rgba(50, 50, 50, 1);
      margin-bottom: 5px;

      @media (max-width: 992px) {
        font-size: 18px;
        line-height: 22.28px;
      }
    }

    .content-date {
      color: rgba(100, 100, 100, 1);
      font-size: 14px;
      font-weight: 700;
      line-height: 17.33px;
      margin-bottom: 5px;

      @media (max-width: 992px) {
        font-size: 10px;
        line-height: 12.38px;
      }
    }

    .content-text {
      flex-grow: 1;

      &,
      b,
      p {
        display: inline;
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

    .button-secondary {
      max-width: 117px;
      max-width: max-content;
      margin-top: 10px;
    }
  }
}
</style>
