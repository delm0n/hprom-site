<template>
  <ClientOnly>
    <swiper-container
      :slides-per-view="1"
      :space-between="10"
      :breakpoints="{
        476: {
          spaceBetween: 10,
          slidesPerView: 2,
        },

        769: {
          spaceBetween: 20,
          slidesPerView: 3,
        },

        993: {
          spaceBetween: 30,
          slidesPerView: 3,
        },
      }"
      :navigation="{
        nextEl: '.media-right-' + index,
        prevEl: '.media-left-' + index,
      }"
      :pagination="{
        el: '.media-pagination-' + index,
        type: 'bullets',
        clickable: true,
      }"
      :modules="[Navigation, Pagination]"
      class="media-wrapper-swiper"
    >
      <swiper-slide
        v-for="(slide, i) in storeMedia.getMediasContent10(item)"
        :key="i"
        class="media-item"
      >
        <div class="media-item__img skeleton-image">
          <NuxtPicture
            format="avif,webp"
            sizes="420px"
            :src="'/images/media/' + slide.img + '.png'"
            :alt="slide.title"
            loading="lazy"
            class="media-item__img-img"
          />
        </div>
        <div class="media-item__content">
          <p class="content-title" v-html="slide.title"></p>
          <p
            class="content-text"
            v-html="storeMedia.getShortDescription(slide.text, 67)"
          ></p>

          <NuxtLink
            :to="'/media/' + item.url + '/' + slide.path"
            class="button-secondary"
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
      </swiper-slide>

      <swiper-slide class="media-item last-slide">
        <div class="last-slide__img">
          <NuxtPicture
            format="avif,webp"
            sizes="247px"
            :src="'/images/media/last-slide.png'"
            :alt="'Новости геликон'"
            loading="lazy"
          />
        </div>
        <div class="media-item__content">
          <p class="content-title" v-html="item.buttonText"></p>

          <NuxtLink :to="'/media/' + item.url" class="button-secondary"
            ><span>Перейти в раздел</span>
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
      </swiper-slide>
    </swiper-container>
  </ClientOnly>
</template>

<script setup lang="ts">
import { Pagination, Navigation } from "swiper/modules";
import type { IMedia } from "~/config/media";
const storeMedia = useMediaStore();

const props = defineProps<{
  index: number;
  item: IMedia;
}>();
</script>

<style lang="scss">
.media-wrapper-swiper {
  align-items: stretch;
  .media-item {
    background: rgba(246, 246, 246, 1);
    border-radius: 20px;
    overflow: hidden;
    height: auto;
    display: flex;
    flex-direction: column;

    &__img {
      width: 100%;
      aspect-ratio: 210 / 97;
      position: relative;
      overflow: hidden;

      @media (max-width: 992px) {
        aspect-ratio: 180 / 97;
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
      flex-grow: 1;
      display: flex;
      flex-direction: column;

      .content-title {
        font-size: 22px;
        font-weight: 700;
        line-height: 27.24px;
        margin-bottom: 10px;

        @media (max-width: 768px) {
          font-size: 18px;
          line-height: 22.28px;
        }
      }
      .content-text {
        &,
        b,
        p {
          display: inline;
          font-size: 18px;
          font-weight: 400;
          line-height: 21.6px;
          color: rgba(100, 100, 100, 1);

          @media (max-width: 992px) {
            font-size: 16px;
            line-height: 19.8px;
          }
        }
      }

      .button-secondary {
        max-width: 117px;
        max-width: max-content;
        margin-top: 10px;
      }
    }

    &.last-slide {
      .last-slide__img {
        margin-left: auto;
        max-width: 58%;
        width: 100%;

        img {
          width: 100%;
        }
      }

      .media-item__content {
        display: flex;
        flex-direction: column;
        justify-content: end;
      }
    }
  }
}
</style>
