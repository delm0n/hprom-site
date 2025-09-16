<template>
  <section
    class="hero"
    :style="viewport.isGreaterThan('tablet') ? backgroundStyles : ''"
  >
    <div
      :style="!viewport.isGreaterThan('tablet') ? backgroundStyles : ''"
      class="mobile-bg"
    ></div>
    <div class="container">
      <div class="hero-content">
        <h1>ГЕЛИКОН PROM</h1>
        <h2>Надёжность в каждом изделии!</h2>
        <a
          href="https://youtu.be/cm3jI0CfAz4?si=bqE5XhxSvzX9CHrq"
          target="_blank"
          class="button-primary"
        >
          <span> Смотреть видеопрезентацию </span>

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
        </a>
      </div>

      <hero-link v-for="(item, index) in links" :key="index" :link="item" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ILink } from "~/config/settings";
import HeroLink from "./HeroLink.vue";

const img = useImage();
const viewport = useViewport();

const backgroundStyles = computed(() => {
  const imgUrl = img(
    "/images/hero/hero" +
      (viewport.isGreaterOrEquals("desktop")
        ? ""
        : viewport.isLessOrEquals("tablet")
        ? "@05x"
        : "@1x") +
      ".png",
    {
      format: "avif,webp",
    }
  );

  return { backgroundImage: `url('${imgUrl}')` };
});

const links: ILink[] = [
  {
    title: "Чем мы занимаемся?",
    text: "О компании",
    svg: `
     <svg
          xmlns="http://www.w3.org/2000/svg"
          width="59"
          height="59"
          viewBox="0 0 59 59"
          fill="none"
        >
          <g clip-path="url(#clip0_216_5046)">
            <path
              d="M29.5 0C45.7924 0 59 13.2076 59 29.5C59 45.7924 45.7924 59 29.5 59C13.2076 59 0 45.7924 0 29.5C0 13.2076 13.2076 0 29.5 0ZM29.5 49.1667C32.2154 49.1667 34.4167 46.9654 34.4167 44.25V29.5C34.4167 26.7846 32.2154 24.5833 29.5 24.5833C26.7846 24.5833 24.5833 26.7846 24.5833 29.5L24.5833 44.25C24.5833 46.9654 26.7846 49.1667 29.5 49.1667ZM29.5 19.6667C32.2154 19.6667 34.4167 17.4654 34.4167 14.75C34.4167 12.0346 32.2154 9.83334 29.5 9.83334C26.7846 9.83334 24.5833 12.0346 24.5833 14.75C24.5833 17.4654 26.7846 19.6667 29.5 19.6667Z"
              fill="#004978"
            />
          </g>
          <defs>
            <clipPath id="clip0_216_5046">
              <rect width="59" height="59" fill="white" />
            </clipPath>
          </defs>
        </svg>
    `,
    customClass: "link__first",
    ref: "/organizacija/dejatelnost",
  },

  {
    title: "Как с нами связаться?",
    text: "Контактная информация",
    svg: `
    <svg
          xmlns="http://www.w3.org/2000/svg"
          width="59"
          height="59"
          viewBox="0 0 59 59"
          fill="none"
        >
          <path
            d="M29.5001 0C13.2089 0 0.00012207 13.2088 0.00012207 29.5C0.00012207 45.791 13.2089 59 29.5001 59C45.7914 59 58.9999 45.7909 58.9999 29.5C59 13.2088 45.7914 0 29.5001 0ZM45.0781 43.0438L42.7161 45.4063C42.2944 45.8273 41.0596 46.0901 41.0199 46.0901C33.5476 46.1553 26.3528 43.2202 21.0666 37.9334C15.7658 32.6296 12.8273 25.4093 12.9062 17.9117C12.9062 17.9083 13.1767 16.7089 13.598 16.2916L15.9599 13.9293C16.8242 13.061 18.4845 12.6686 19.6475 13.0577L20.1444 13.2235C21.304 13.6122 22.5216 14.8945 22.842 16.0758L24.0301 20.4365C24.3505 21.6212 23.9184 23.3066 23.0543 24.1709L21.4772 25.7483C23.0256 31.4806 27.5233 35.9791 33.2566 37.5313L34.8331 35.9536C35.7014 35.0853 37.3862 34.6535 38.5684 34.9734L42.9285 36.1658C44.11 36.4904 45.392 37.7003 45.7807 38.8596L45.9464 39.3637C46.3316 40.5234 45.9423 42.1833 45.0781 43.0438Z"
            fill="#004978"
          />
        </svg>
    `,
    customClass: "link__last",
    ref: "/contacts",
  },
];
</script>

<style lang="scss">
.hero {
  background: rgba(0, 73, 120, 1);
  background-position: 100% 0;
  background-repeat: no-repeat;
  background-size: 50%;

  aspect-ratio: 64/25;
  width: 100%;
  margin-bottom: 200px;
  padding-top: 96px;

  @media (max-width: 1200px) {
    margin-bottom: 160px;
  }

  @media (max-width: 992px) {
    aspect-ratio: auto;
    background-position: 0 0;
    background-size: 100%;
    margin-bottom: 100px;
  }

  @media (max-width: 768px) {
    margin-bottom: 60px;
    padding-top: 60px;
  }

  .mobile-bg {
    @media (max-width: 992px) {
      aspect-ratio: 992/331;
      width: 100%;

      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }

    @media (max-width: 768px) {
      aspect-ratio: 1/1;
    }
  }

  .container {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;

    @media (max-width: 992px) {
      flex-direction: column;
    }
  }

  .hero-content {
    width: 50%;
    padding-right: 20px;

    @media (max-width: 992px) {
      width: 100%;
      padding: 30px 0 40px;
    }

    @media (max-width: 768px) {
      padding: 30px 0 0;
    }

    h1 {
      margin-bottom: 5px;
      font-size: 64px;
      font-weight: 700;
      color: #fff;
      line-height: 79.23px;

      @media (max-width: 1136px) {
        font-size: 45px;
        line-height: 55px;
      }

      @media (max-width: 992px) {
        font-size: 27px;
        line-height: 33.43px;
        text-align: center;
      }
    }

    h2 {
      font-size: 22px;
      font-weight: 700;
      line-height: 27.24px;
      color: #fff;
      margin-bottom: 30px;

      @media (max-width: 1136px) {
        font-size: 20px;
        line-height: 24px;
      }

      @media (max-width: 992px) {
        font-size: 18px;
        line-height: 22.28px;
        text-align: center;
      }
    }

    .button-primary {
      max-width: 300px;
      @media (max-width: 992px) {
        margin: 0 auto 30px;
      }
    }
  }
}
</style>
