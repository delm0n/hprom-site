<template>
  <main class="media-page page">
    <div class="container">
      <BreadCrumbs :array="breadCrumbs" />
      <h1 class="page-title">{{ media.title }}</h1>
      <div class="media-wrapper">
        <side-bar
          :title="media.title"
          :page="'/media'"
          :array="storeMedia.medias"
        />

        <div class="media-wrapper__content">
          <div class="content-grid">
            <transition-group>
              <media-item
                v-for="(item, index) in media.contents"
                v-show="index >= count * (page - 1) && index < page * count"
                :key="index"
                :item="item"
                :link="'/media/' + media.url + '/' + item.path"
              />
            </transition-group>
          </div>

          <number-navigation
            v-show="countOfPage > 1"
            :page="page"
            :countOfPage="countOfPage"
            @set-page="(i: number) => page = i"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import NumberNavigation from "~/components/UI/NumberNavigation.vue";
import SideBar from "~/components/UI/SideBar.vue";
import MediaItem from "~/components/media/MediaItem.vue";
import BreadCrumbs from "~/components/UI/BreadCrumbs.vue";
import type { IBreadCrumbs } from "~/config/settings";

const storeMedia = useMediaStore();
const route = useRoute();

const media = computed(() => {
  return storeMedia.getMediaByUrl(route.params.url);
});

const page = ref(1);
const count = ref(3);

onMounted(() => {
  const mobileQuery = window.matchMedia("(max-width: 475px)");
  const tabletQuery = window.matchMedia("(max-width: 768px)");

  const updateCount = () => {
    if (mobileQuery.matches) {
      count.value = 3;
    } else if (tabletQuery.matches) {
      count.value = 4;
    } else {
      count.value = 3;
    }

    page.value = 1;
  };

  // Инициализация значения при загрузке
  updateCount();

  // Добавление слушателей
  mobileQuery.addListener(updateCount);
  tabletQuery.addListener(updateCount);
});

const countOfPage = computed(() => {
  return Math.ceil(media.value.contents.length / count.value);
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
    title: media.value.title,
  },
];
</script>

<style lang="scss">
.media-page {
  .media-wrapper {
    display: flex;
    align-items: self-start;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    .content-grid {
      @include grid-content(3, 1, ".media-item");
      gap: 30px;

      @media (max-width: 992px) {
        gap: 20px;
      }

      @media (max-width: 768px) {
        @include grid-content(2, 2, ".media-item");
        gap: 10px;
      }

      @media (max-width: 475px) {
        @include grid-content(1, 3, ".media-item");
      }
    }
  }
}
</style>
