<template>
  <main class="dejatelnost-page page">
    <div class="container">
      <BreadCrumbs :array="breadCrumbs" />

      <h1 class="page-title">Деятельность</h1>
      <div class="dejatelnost-wrapper">
        <OrganizacijaSideBar :title="'Деятельность'" />
        <div class="dejatelnost-wrapper__content">
          <manufacture />
          <apparat />

          <section class="dejatelnost-text team">
            <h2 id="team">Команда</h2>
            <p>
              «Геликон» смог зарекомендовать себя как наёжный поставщик и
              ответственный производитель во многом благодаря слаженной работе
              коллектива. 
            </p>
            <p>
              Каждый год конструкторский отдел совершенствует устройство наших
              аппаратов, повышая стандарты качества. 
            </p>
            <p>
              Над продвижением товаров работает отдел маркетинга. Всем известные
              «Булат», DINO, Organic, «Германия», «Славянка», «Финляндия» и
              BRAVO — лучшее доказательство наших успешных рекламных кампаний.
            </p>
            <p>
              Call-центр обрабатывает отзывы и предоставляет информацию по всем
              вопросам, возникающим у клиента касаемо ассортимента продукции,
              каталога, гарантии, доставки и действующих скидок.
            </p>
            <p>
              Сотрудники отдела почтовых отправлений упаковывают и
              транспортируют оборудование со склада, чтобы служба доставки
              смогла забрать заказы и вовремя передать их клиентам.
            </p>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Manufacture from "~/components/dejatelnost/Manufacture.vue";
import Apparat from "~/components/dejatelnost/Apparat.vue";
import BreadCrumbs from "~/components/UI/BreadCrumbs.vue";
import type { IBreadCrumbs } from "~/config/settings";
import OrganizacijaSideBar from "~/components/general/OrganizacijaSideBar.vue";

const breadCrumbs: IBreadCrumbs[] = [
  {
    title: "Главная",
    ref: "/",
  },

  {
    title: "Организация",
    ref: "/",
  },

  {
    title: "Деятельность",
  },
];
</script>

<style lang="scss">
.dejatelnost-page {
  overflow: hidden;
  .dejatelnost-wrapper {
    display: grid;
    grid-template-columns: 1fr 74%;
    gap: 20px;

    @media (max-width: 768px) {
      gap: 0px;
      grid-template-columns: 100%;
    }

    &__content {
      h2 {
        padding-top: 10px;
        font-size: 32px;
        font-weight: 700;
        line-height: 39.62px;
        color: rgba(50, 50, 50, 1);
        margin-bottom: 10px;

        @media (max-width: 992px) {
          font-size: 24px;
          line-height: 29.71px;
        }
      }

      p {
        font-size: 22px;
        font-weight: 400;
        line-height: 26.4px;
        margin-bottom: 20px;

        @media (max-width: 992px) {
          font-size: 18px;
          line-height: 21.6px;
        }
      }

      .dejatelnost-subtitle {
        font-weight: 600;
        margin-bottom: 20px;
        color: rgba(100, 100, 100, 1);
      }
    }
  }
}
</style>
