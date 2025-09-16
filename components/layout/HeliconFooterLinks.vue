<template>
  <div class="footer__column-links">
    <div v-for="(link, index) in links" :key="index" class="link-col">
      <p
        :class="['link--bold', link.open ? 'open' : '']"
        v-html="link.bold"
        @click="link.open = !link.open"
      ></p>

      <div :class="['link-col__dropdown ', link.open ? 'open' : '']">
        <NuxtLink
          v-for="(item, i) in link.regular"
          :to="item.ref"
          :key="i"
          class="link--regular"
          >{{ item.text }}</NuxtLink
        >
      </div>
    </div>

    <div class="link-col">
      <NuxtLink to="/contacts" class="link--bold link--ref">Контакты</NuxtLink>
      <NuxtLink to="/pravovaja-informacija" class="link--bold link--ref"
        >Правовая информация</NuxtLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
const links = ref([
  {
    bold: "Организация",
    regular: [
      {
        ref: "/organizacija/dejatelnost",
        text: "Деятельность",
      },
    ],
    open: false,
  },

  {
    bold: "Сотрудничество",
    regular: [
      {
        ref: "/sotrudnichestvo/vakansii",
        text: "Вакансии",
      },
    ],
    open: false,
  },

  {
    bold: "Медиа",
    regular: [
      {
        ref: "/media/novosti",
        text: "Новости",
      },

      {
        ref: "/media/meroprijatija",
        text: "Мероприятия",
      },
    ],
    open: false,
  },
]);
</script>

<style lang="scss">
.footer__column-links {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }

  .link-col {
    color: rgba(50, 50, 50, 1);

    .link--ref {
      transition: all 0.3s;
      cursor: pointer;
      display: block;
      color: rgba(50, 50, 50, 1);

      &:hover {
        opacity: 0.5;
      }
    }

    .link--bold {
      display: block;
      color: rgba(50, 50, 50, 1);

      font-size: 18px;
      font-weight: 700;
      line-height: 22.28px;

      @media (max-width: 992px) and (min-width: 769px) {
        font-size: 14px;
        line-height: 17.33px;
      }

      &:not(:last-child) {
        margin-bottom: 10px;
        @media (max-width: 992px) {
          margin-bottom: 5px;
        }
      }

      &:not(.link--ref) {
        @media (max-width: 768px) {
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(182, 182, 182, 0.6);
          display: flex;
          align-items: center;
          justify-content: space-between;

          &::after {
            display: block;
            transition: all 0.3s;
            content: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAyMCAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzIxMF83NTYwKSI+CjxwYXRoIGQ9Ik05LjEyMzE5IDEwLjg3NjhDOS42MDc0NCAxMS4zNjExIDEwLjM5MjYgMTEuMzYxMSAxMC44NzY4IDEwLjg3NjhMMTguNzY4MSAyLjk4NTUxQzE5LjI1MjQgMi41MDEyNiAxOS4yNTI0IDEuNzE2MTMgMTguNzY4MSAxLjIzMTg4QzE4LjI4MzkgMC43NDc2MjkgMTcuNDk4OCAwLjc0NzYyOSAxNy4wMTQ1IDEuMjMxODhMMTAgOC4yNDYzOEwyLjk4NTUgMS4yMzE4N0MyLjUwMTI1IDAuNzQ3NjIyIDEuNzE2MTMgMC43NDc2MjEgMS4yMzE4OCAxLjIzMTg3QzAuNzQ3NjI5IDEuNzE2MTIgMC43NDc2MjggMi41MDEyNSAxLjIzMTg4IDIuOTg1NUw5LjEyMzE5IDEwLjg3NjhaTTguNzYgOUw4Ljc2IDEwTDExLjI0IDEwTDExLjI0IDlMOC43NiA5WiIgZmlsbD0iIzMyMzIzMiIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzIxMF83NTYwIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjEyIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=");
          }

          &.open {
            color: rgba(50, 50, 50, 0.8);

            &::after {
              transform: rotate(180deg);
            }
          }
        }
      }

      & + .link-col__dropdown {
        @media (max-width: 768px) {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s ease-in-out;

          &.open {
            max-height: 170px;
          }
        }
      }
    }

    .link--regular {
      @extend .link--ref;

      font-size: 16px;
      font-weight: 400;
      line-height: 25px;

      @media (max-width: 992px) and (min-width: 769px) {
        font-size: 12px;
        line-height: 19px;
      }

      &:not(:last-child) {
        margin-bottom: 10px;
        @media (max-width: 992px) {
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>
