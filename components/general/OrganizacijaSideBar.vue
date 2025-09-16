<template>
  <div class="side-bar-org">
    <ClientOnly
      ><div
        @click="bool = !bool"
        :class="['side-bar-org__hero', bool ? 'side-bar__hero--open' : '']"
      >
        <p>{{ title }}</p>

        <svg
          :style="
            bool ? 'transform: rotate(180deg)' : 'transform: rotate(0deg)'
          "
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="9"
          viewBox="0 0 16 9"
          fill="none"
        >
          <path
            d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 7L7 8L9 8L9 7L7 7Z"
            fill="white"
          />
        </svg>
      </div>

      <transition
        name="drop"
        @before-enter="beforeEnter"
        @enter="enter"
        @before-leave="beforeLeave"
        @leave="leave"
      >
        <div
          v-show="bool || viewport.isGreaterThan('mobileWide')"
          class="side-bar-org__box"
        >
          <div class="box-container">
            <div
              v-for="(item, index) in array"
              :key="index"
              :class="[
                'box-container__collapse',
                item.title == title ? 'collapse-active' : '',
              ]"
            >
              <div
                class="box-container__collapse-hero"
                @click="heroCollapseClick(index)"
              >
                <p>{{ item.title }}</p>

                <svg
                  :style="
                    item.bool
                      ? 'transform: rotate(180deg)'
                      : 'transform: rotate(0deg)'
                  "
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                >
                  <path
                    d="M6.75 5.5C6.75 5.08579 6.41421 4.75 6 4.75C5.58579 4.75 5.25 5.08579 5.25 5.5L6.75 5.5ZM5.46967 7.03033C5.76256 7.32322 6.23744 7.32322 6.53033 7.03033L11.3033 2.25736C11.5962 1.96447 11.5962 1.48959 11.3033 1.1967C11.0104 0.903807 10.5355 0.903807 10.2426 1.1967L6 5.43934L1.75736 1.1967C1.46447 0.903805 0.989594 0.903805 0.6967 1.1967C0.403807 1.48959 0.403807 1.96446 0.6967 2.25736L5.46967 7.03033ZM5.25 5.5L5.25 6.5L6.75 6.5L6.75 5.5L5.25 5.5Z"
                    fill="#323232"
                  />
                </svg>
              </div>

              <transition
                name="drop"
                @before-enter="beforeEnter"
                @enter="enter"
                @before-leave="beforeLeave"
                @leave="leave"
              >
                <div v-show="item.bool" class="box-container__collapse-content">
                  <div class="collapse-content__container">
                    <NuxtLink
                      v-for="(url, i) in item.urls"
                      :key="i"
                      :to="url.refs"
                    >
                      {{ url.text }}
                    </NuxtLink>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </transition>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const viewport = useViewport();

const props = defineProps<{
  title: string;
}>();

const array = ref([
  {
    title: "Деятельность",
    urls: [
      { text: "Производство", refs: "/organizacija/dejatelnost#manufacture" },
      { text: "Продукция", refs: "/organizacija/dejatelnost#apparat" },
      { text: "Команда", refs: "/organizacija/dejatelnost#team" },
    ],
    bool: false,
  },

  // {
  //   title: "Достижения",
  //   urls: [
  //     { text: "Продукция", refs: "/organizacija/dejatelnost#apparat" },
  //     { text: "Команда", refs: "/organizacija/dejatelnost#team" },
  //   ],
  //   bool: false,
  // },

  // {
  //   title: "Карьера в компании",
  //   urls: [
  //     { text: "Производство", refs: "/organizacija/dejatelnost#manufacture" },
  //   ],
  //   bool: false,
  // },
]);
const bool = ref(false);

onMounted(() => {
  array.value.forEach((element) => {
    element.title == props.title ? (element.bool = true) : "";
  });
});

const heroCollapseClick = (i: number) => {
  const element = document.querySelector(".side-bar-org__box");

  if (element instanceof HTMLElement) {
    element.style.height = "";
  }
  array.value.forEach((element, index) => {
    index == i ? (element.bool = !element.bool) : (element.bool = false);
  });
};
</script>

<style lang="scss">
.side-bar-org {
  max-width: 308px;
  width: 100%;
  flex-shrink: 0;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 20px;
  }

  &__hero {
    background: rgba(0, 73, 120, 1);
    box-shadow: 0px 5px 10px 0px rgba(173, 173, 173, 0.15);
    border-radius: 20px;
    color: rgba(255, 255, 255, 1);
    padding: 5px 20px;
    transition: 0.3s;

    justify-content: space-between;
    align-items: center;
    display: none;

    @media (max-width: 768px) {
      display: flex;
    }

    svg {
      transition: 0.3s ease-in-out;
      transform-origin: center;
      flex-shrink: 0;
    }

    &--open {
      border-radius: 20px 20px 0 0;
    }
  }

  &__box {
    transition: 0.3s ease-in-out;

    .box-container {
      padding: 20px;
      background: rgba(246, 246, 246, 1);
      border-radius: 20px;

      @media (max-width: 768px) {
        border-radius: 0 0 20px 20px;
        padding: 10px 20px;
      }
    }
  }

  .side-bar-item {
    display: block;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    line-height: 21.83px;
    transition: all 0.3s;
    color: rgba(100, 100, 100, 1);

    @media (max-width: 992px) {
      font-size: 14px;
      line-height: 16.98px;
    }

    &:hover,
    &--active {
      color: rgba(50, 50, 50, 1);
    }

    &:not(:last-child) {
      margin-bottom: 20px;

      @media (max-width: 992px) {
        margin-bottom: 10px;
      }
    }
  }

  .box-container__collapse {
    &:not(:last-child) {
      margin-bottom: 20px;

      @media (max-width: 768px) {
        margin-bottom: 10px;
      }
    }

    &.collapse-active {
      p,
      a {
        color: rgba(100, 100, 100, 1) !important;
      }

      svg path {
        fill: rgba(100, 100, 100, 1) !important;
      }
    }

    &-hero {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      gap: 5px;

      p {
        font-size: 18px;
        font-weight: 500;
        line-height: 21.83px;
        color: rgba(50, 50, 50, 1);
      }

      svg {
        transition: 0.3s ease-in-out;
        transform-origin: center;
        flex-shrink: 0;
      }
    }

    &-content {
      transition: 0.3s ease-in-out;

      .collapse-content__container {
        padding-left: 10px;
        padding-top: 10px;

        a {
          font-size: 16px;
          font-weight: 500;
          line-height: 19.41px;
          color: rgba(50, 50, 50, 1);
          transition: color 0.2s;

          &:hover {
            color: rgba(50, 50, 50, 1) !important;
          }

          display: block;
          &:not(:last-child) {
            margin-bottom: 5px;
          }
        }
      }
    }
  }
}
</style>
