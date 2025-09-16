<template>
  <section class="otdel-main">
    <div class="otdel-main__wrapper">
      <h2 class="subtutle">Вакансии</h2>

      <div v-if="!viewport.isLessThan('tablet')" class="otdel-filter">
        <p class="filter-title">Фильтры</p>

        <vakansii-filter
          @set-active="(i: number, j: number) => setActive(i, j)"
          :filters="vakansii.filters"
        />

        <button
          class="button-primary"
          @click="storeSotrudnichestvo.setFilterFalse()"
        >
          <span>Сбросить фильтры</span>
        </button>
      </div>

      <div class="otdel-search-box">
        <vakansii-search :search="search" />
        <div
          v-if="viewport.isLessThan('tablet')"
          class="button-filter"
          @click="openModal('filter-modal')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M22.935 0.926206C22.7496 0.501615 22.4287 0.289291 21.9707 0.289062H1.06214C0.60482 0.289062 0.283444 0.501615 0.0982972 0.926206C-0.0867354 1.37254 -0.0105825 1.75393 0.327099 2.06964L8.38048 10.1228V18.0616C8.38048 18.3451 8.48398 18.5898 8.69081 18.7971L12.8724 22.9785C13.0685 23.1853 13.3135 23.2891 13.6076 23.2891C13.7382 23.2891 13.8742 23.2617 14.0159 23.2072C14.4407 23.022 14.6532 22.7008 14.6532 22.2435V10.1229L22.7063 2.0697C23.0441 1.75399 23.1201 1.37271 22.935 0.926206Z"
              fill="#323232"
            />
          </svg>
        </div>
      </div>

      <div v-if="filterWorks.length > 0" class="otdel-content">
        <transition-group>
          <NuxtLink
            v-for="(item, index) in filterWorks"
            :key="index"
            :to="'/sotrudnichestvo/vakansii/' + vakansii.url + '/' + item.path"
            v-show="index >= count * (page - 1) && index < page * count"
            class="otdel-content__item"
          >
            <work-item :item="item" />
          </NuxtLink>
        </transition-group>
      </div>

      <div v-else class="otdel-content">
        <p class="vakansii-empty">Вакансии в данный момент отсутствуют</p>
      </div>

      <number-navigation
        v-if="countOfPage > 1"
        :class="[
          'otdel-navigation',
          countOfPage > 1 ? '' : 'otdel-navigation__hiden',
        ]"
        :page="page"
        :countOfPage="countOfPage"
        @set-page="(i: number) => page = i"
      />
    </div>

    <modal :id="'filter-modal'" :title="'Фильтры'" :width="253">
      <vakansii-filter
        @set-active="(i: number, j: number) => setActive(i, j)"
        :filters="vakansii.filters"
      />

      <button
        class="button-primary"
        @click="storeSotrudnichestvo.setFilterFalse()"
      >
        <span>Сбросить </span>
      </button>
    </modal>
  </section>
</template>

<script lang="ts" setup>
import type { IVakansii } from "~/config/sotrudnichestvo";
import WorkItem from "../general/WorkItem.vue";
import NumberNavigation from "~/components/UI/NumberNavigation.vue";
import VakansiiSearch from "./Search.vue";
import VakansiiFilter from "./Filter.vue";
import Modal from "../UI/Modal.vue";

const viewport = useViewport();
const storeSotrudnichestvo = useSotrudnichestvoStore();
const props = defineProps<{
  vakansii: IVakansii;
}>();

// filters
const setActive = (i: number, j: number) => {
  storeSotrudnichestvo.setVakansiiFilter(i, j, props.vakansii.url);
};
// filters

// grid
const page = ref(1);
const count = ref(9);
const search = ref("");

onMounted(() => {
  const mobileQuery = window.matchMedia("(max-width: 768px)");
  const tabletQuery = window.matchMedia("(max-width: 992px)");

  const updateCount = () => {
    if (mobileQuery.matches) {
      count.value = 4;
    } else if (tabletQuery.matches) {
      count.value = 6;
    } else {
      count.value = 9;
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
  return Math.ceil(filterWorks.value.length / count.value);
});
// grid

// modal
const storeModal = useModalStore();
const openModal = (id: string) => {
  storeModal.setModal(id, true);
};
// modal

const filterWorks = computed(() => {
  page.value = 1;

  let works = [
    ...storeSotrudnichestvo.getVakansiiByUrl(props.vakansii.url).contents,
  ];

  storeSotrudnichestvo
    .getVakansiiByUrl(props.vakansii.url)
    .filters.forEach((parent) => {
      parent.content.forEach((child) => {
        if (child.active) {
          works = works.filter((el) => el.filter.includes(child.value));
        }
      });
    });

  return works;
});
</script>

<style lang="scss">
.otdel-main {
  padding: 50px 0 0;

  .otdel-main__wrapper {
    display: grid;
    gap: 30px;
    grid-template-columns: 308px 1fr;
    grid-template-rows: auto auto 1fr;

    @media (max-width: 1400px) {
      grid-template-columns: 263px 1fr;
    }

    @media (max-width: 1200px) {
      grid-template-columns: 218px 1fr;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    .otdel-filter {
      grid-column: 1/2;
      grid-row: 2/4;
      align-self: flex-start;
      background: rgba(246, 246, 246, 1);
      border-radius: 20px;
      padding: 20px;

      @media (max-width: 768px) {
        display: none;
      }

      .filter-title {
        font-size: 18px;
        font-weight: 700;
        line-height: 22.28px;
        color: rgba(50, 50, 50, 1);
        margin-bottom: 20px;
      }
    }

    .button-filter {
      display: none;
      @media (max-width: 768px) {
        background: rgba(230, 230, 230, 1);
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 56px;
        height: 56px;
        margin-left: 10px;
        flex-shrink: 0;
      }
    }

    .otdel-search-box {
      grid-column: 2/3;
      grid-row: 2/3;

      @media (max-width: 768px) {
        grid-column: 1/2;
        display: flex;
        align-items: center;
      }
    }

    h2 {
      grid-column: 2/3;
      grid-row: 1/2;
      margin-bottom: 0;

      @media (max-width: 768px) {
        grid-column: 1/2;
      }
    }

    .otdel-navigation {
      grid-column: 2/3;
      grid-row: 4/5;

      &__hiden {
        opacity: 0;
        visibility: hidden;
      }

      @media (max-width: 768px) {
        grid-column: 1/2;
      }
    }

    .otdel-content {
      grid-column: 2/3;
      grid-row: 3/4;
      align-self: flex-start;
      @include grid-content(3, 3, ".otdel-content__item"); // _variables.scss
      gap: 30px;
      transition: all 0.1s;

      @media (max-width: 992px) {
        @include grid-content(2, 3, ".otdel-content__item");
        gap: 20px;
      }

      @media (max-width: 768px) {
        @include grid-content(1, 4, ".otdel-content__item");
        grid-column: 1/2;
      }

      .vakansii-empty {
        font-size: 22px;
        font-weight: 700;
        line-height: 27.24px;
        color: rgba(50, 50, 50, 1);
        grid-column: 1 / -1;
        grid-row: 1 / -1;

        @media (max-width: 992px) {
          line-height: 20px;
          font-size: 18px;
        }
      }
    }
  }

  .button-primary {
    margin-top: 20px;
  }
}

#filter-modal {
  .header-title {
    text-align: left;
  }
}
</style>
