<template>
  <main class="page">
    <div class="container">
      <BreadCrumbs :array="breadCrumbs" />

      <h1 class="page-title">{{ news.title }}</h1>

      <div class="news-wrapper">
        <side-bar
          :title="floder.title"
          :page="'/media'"
          :array="storeMedia.medias"
        />

        <div class="news-wrapper__content">
          <div class="content-img skeleton-image">
            <NuxtPicture
              format="avif,webp"
              sizes="1000px"
              width="100%"
              :src="'/images/media/' + news.img + '.png'"
              :alt="news.title"
            />

            <div class="date">
              <p v-text="news.date"></p>
            </div>
          </div>

          <div class="content-text" v-html="news.text"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import SideBar from "~/components/UI/SideBar.vue";
import BreadCrumbs from "~/components/UI/BreadCrumbs.vue";
import type { IBreadCrumbs } from "~/config/settings";

const storeMedia = useMediaStore();
const route = useRoute();

const news = computed(() => {
  return storeMedia.getMediaContentByPath(route.params.path, route.params.url);
});

const floder = computed(() => {
  return storeMedia.getMediaByUrl(route.params.url);
});

const breadCrumbs: IBreadCrumbs[] = [
  {
    title: "Главная",
    ref: "/",
  },
  {
    title: "Медиа",
    ref: "/media/novosti",
  },
  {
    title: floder.value.title,
    ref: "/media/" + route.params.url,
  },

  {
    title: news.value.title,
  },
];
</script>

<style lang="scss">
.news-wrapper {
  display: flex;
  align-items: self-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .content-img {
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 420px;

    @media (max-width: 1200px) {
      height: auto;
      aspect-ratio: 847 / 420;
    }

    img {
      position: absolute;
      object-fit: cover;
      object-position: center;
      width: 100%;
      height: 100%;
      z-index: 4;
    }

    .date {
      background: rgba(255, 202, 0, 1);
      border-radius: 50px;
      position: absolute;
      left: 30px;
      top: 30px;
      z-index: 5;
      padding: 5px 20px;

      @media (max-width: 768px) {
        left: 20px;
        top: 20px;
      }

      p {
        font-size: 18px;
        font-weight: 700;
        line-height: 22.28px;
        text-align: center;
        color: rgba(50, 50, 50, 1);

        @media (max-width: 768px) {
          font-size: 16px;
          line-height: 20px;
        }
      }
    }
  }

  .content-text {
    margin-top: 50px;

    &,
    p,
    li {
      font-size: 22px;
      font-weight: 400;
      line-height: 26.4px;
      color: rgba(50, 50, 50, 1);

      @media (max-width: 992px) {
        font-size: 18px;
        line-height: 21.6px;
      }
    }

    b {
      margin-bottom: 20px;
      font-size: 27px;
      font-weight: 500;
      line-height: 32.75px;
      display: block;
      color: rgba(50, 50, 50, 1);

      @media (max-width: 992px) {
        margin-bottom: 10px;
      }
    }

    ul {
      li {
        padding-left: 8px;
        &:before {
          content: "· ";
          font-size: 30px;
          vertical-align: middle;
          line-height: 20px;
        }
      }
    }

    p,
    ul {
      margin-bottom: 30px;

      @media (max-width: 992px) {
        margin-bottom: 20px;
      }
    }

    @media (max-width: 992px) {
      margin-top: 30px;
    }
  }
}
</style>
