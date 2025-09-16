<template>
  <section class="detali">
    <h2 class="subtutle">Подробнее о вакансии</h2>

    <div class="detali-wrapper">
      <p class="detali-title">Чем предстоит заниматься?</p>
      <div class="detali-text" v-html="work.case"></div>
    </div>

    <div v-if="work.skills.length > 0" class="detali-wrapper">
      <p class="detali-title">Ключевые навыки</p>
      <div class="detali-skills">
        <p
          v-for="(item, index) in work.skills"
          :key="index"
          v-text="item"
          class="detali-skills__item detali-text"
        ></p>
      </div>
    </div>

    <div v-if="!!work.demand" class="detali-wrapper">
      <p class="detali-title">Что мы ожидаем?</p>
      <div class="detali-text" v-html="work.demand"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { IVakansiiContent } from "~/config/sotrudnichestvo";

const props = defineProps<{
  work: IVakansiiContent;
}>();
</script>

<style lang="scss">
.detali {
  overflow: hidden;
  padding: 50px 0 0;

  @media (max-width: 992px) {
    padding: 30px 0;
  }

  .detali-wrapper {
    background: rgba(246, 246, 246, 1);
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 20px;

    .detali-title {
      font-size: 27px;
      font-weight: 500;
      line-height: 32.75px;
      color: rgba(50, 50, 50, 1);
      margin-bottom: 10px;

      @media (max-width: 992px) {
        font-size: 22px;
        line-height: 26.4px;
      }
    }

    .detali-text {
      &,
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
    }

    li {
      position: relative;
      padding-left: 25px;
      &:before {
        position: absolute;
        left: 5px;
        top: 5px;
        content: "· ";
        font-size: 40px;
        vertical-align: middle;
        line-height: 20px;
      }
    }

    .detali-skills {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;

      &__item {
        color: rgba(255, 255, 255, 1);
        display: block;
        padding: 10px 20px;
        align-items: center;
        border-radius: 20px;
        background: rgba(0, 73, 120, 1);
      }
    }
  }
}
</style>
