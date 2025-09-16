<template>
  <section class="resume">
    <div class="resume-wrapper">
      <div class="resume-wrapper__content">
        <slot></slot>
      </div>
      <div class="resume-wrapper__img skeleton-image">
        <NuxtPicture
          format="avif,webp"
          sizes="670px"
          :src="'/images/vakansii/resume.png'"
          :alt="'Резюме'"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.resume {
  padding: 50px 0 0;

  @media (max-width: 992px) {
    padding: 30px 0;
  }

  .resume-wrapper {
    background: rgba(246, 246, 246, 1);
    overflow: hidden;
    border-radius: 20px;

    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column-reverse;
    }

    &__content {
      padding: 20px;
      width: 50%;

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

        @media (max-width: 992px) {
          font-size: 24px;
          line-height: 29.11px;
        }
      }
    }

    &__img {
      position: relative;
      width: 50%;
      aspect-ratio: 671 / 420;

      @media (max-width: 1200px) {
        aspect-ratio: 570 / 420;
      }

      @media (max-width: 992px) {
        aspect-ratio: 480 / 420;
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
