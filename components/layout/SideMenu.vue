<template>
  <div :class="['side-menu', storeHeader.burger ? 'open' : '']">
    <div class="container">
      <div class="side-menu__header">
        <p>Меню</p>

        <svg
          @click="storeHeader.setBurger(false)"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M1.5 1.5L26.5 26.5M26.5 1.5L1.5 26.5"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </div>

      <div class="side-menu__content">
        <div class="content-links">
          <NuxtLink
            v-for="(link, index) in storeHeader.links"
            :key="index"
            @click="storeHeader.setBurger(false)"
            :to="link.to"
            class="link-item"
            >{{ link.text }}</NuxtLink
          >
        </div>

        <div class="content-phones">
          <p v-for="(phone, index) in storeHeader.phones" :key="index">
            {{ phone.title }} <a :href="'tel:' + phone.tel">{{ phone.text }}</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const storeHeader = useHeaderStore();
</script>

<style lang="scss">
.side-menu {
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    background: rgba(255, 255, 255, 1);
    transform: translateX(-100%);
    transition: transform 0.5s;

    &.open {
      transform: translateX(0);
    }

    &__header {
      padding: 20px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        font-size: 22px;
        font-weight: 600;
        line-height: 29px;
      }
    }

    &__content {
      font-size: 14px;
      font-weight: 400;
      line-height: 23px;

      a,
      p {
        color: rgba(50, 50, 50, 1);

        &:not(:last-child) {
          margin-bottom: 20px;
        }
      }

      .content-links {
        padding: 20px 0;
        border-top: 1px solid rgba(58, 58, 58, 1);
        border-bottom: 1px solid rgba(58, 58, 58, 1);

        a {
          display: block;
          text-transform: uppercase;
        }
      }

      .content-phones {
        padding: 20px 0;

        a {
          font-weight: 700;
          margin-left: 5px;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
