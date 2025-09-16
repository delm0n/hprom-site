<template>
  <section class="workmain">
    <div class="workmain-wrapper">
      <div class="workmain-wrapper__content">
        <div>
          <p class="content-title">{{ work.name }}</p>
          <p class="content-text">{{ work.priceText }} <span> на руки</span></p>
        </div>

        <div class="content-description">
          <p
            v-for="(item, index) in work.description"
            :key="index"
            v-html="item"
          ></p>
        </div>

        <button class="button-primary" @click="openModal('form-modal')">
          <span> Откликнуться</span>
        </button>
      </div>
      <div class="workmain-wrapper__img skeleton-image">
        <NuxtPicture
          format="avif,webp"
          sizes="670px"
          :src="'/images/work/' + work.path + '-img.png'"
          :alt="'Резюме'"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { IVakansiiContent } from "~/config/sotrudnichestvo";

const storeModal = useModalStore();
const openModal = (id: string) => {
  storeModal.setModal(id, true);
};

const props = defineProps<{
  work: IVakansiiContent;
}>();
</script>

<style lang="scss">
.workmain {
  .workmain-wrapper {
    background: rgba(246, 246, 246, 1);
    overflow: hidden;
    border-radius: 20px;

    display: flex;
    align-items: stretch;

    @media (max-width: 768px) {
      flex-direction: column-reverse;
    }

    &__content {
      padding: 20px;
      width: 50%;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      @media (max-width: 768px) {
        width: 100%;
      }

      .content-title {
        font-size: 32px;
        font-weight: 700;
        line-height: 39.62px;
        margin-bottom: 10px;

        @media (max-width: 992px) {
          font-size: 27px;
          line-height: 33.43px;
        }
      }

      .content-text {
        font-size: 27px;
        font-weight: 500;
        line-height: 32.75px;
        margin-bottom: 20px;
        color: rgba(50, 50, 50, 1);

        span {
          color: rgba(100, 100, 100, 1);
        }

        @media (max-width: 992px) {
          font-size: 24px;
          line-height: 29.11px;
        }
      }

      .content-description {
        margin-bottom: 20px;
        p {
          font-size: 18px;
          font-weight: 500;
          line-height: 21.83px;
          color: rgba(50, 50, 50, 1);
          &:not(:last-child) {
            margin-bottom: 10px;
          }

          span {
            color: rgba(100, 100, 100, 1);
          }
        }
      }
    }

    &__img {
      position: relative;
      width: 50%;
      aspect-ratio: 491 / 420;

      @media (max-width: 1200px) {
        aspect-ratio: 423 / 420;
      }

      @media (max-width: 992px) {
        aspect-ratio: 356 / 353;
      }

      @media (max-width: 768px) {
        width: 100%;
        aspect-ratio: 540 / 270;
      }

      img {
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
        object-position: center;
      }
    }
  }
}
</style>
