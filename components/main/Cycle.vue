<template>
  <section class="cycle">
    <h2 class="title">ПОЛНЫЙ ЦИКЛ ПРОИЗВОДСТВА</h2>

    <div class="cycle-wrapper">
      <a
        href="/organizacija/dejatelnost#manufacture"
        class="cycle-item"
        v-for="(item, index) in cycle"
        :key="index"
        :style="backgroundStyles(index + 1)"
      >
        <div class="cycle-item__content">
          <h3 v-text="item.title"></h3>
          <div class="text-box">
            <p class="cycle-item__text" v-text="item.text"></p>
          </div>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const img = useImage();
const viewport = useViewport();

const cycle = [
  {
    title: "Лазерная резка",

    text: "Высокоточная резка металлов различных толщин и форматов. Мы создали все условия для того, чтобы создавать сложные детали с максимальной точностью и минимальными затратами.",
  },
  {
    title: "Аргонная сварка",

    text: "Мы специализируемся сварке, которая идеально подходит для соединения нержавеющей стали и других цветных металлов. Наши специалисты гарантируют швы, соответствующие стандартам качества.",
  },
  {
    title: "Аквабласт",

    text: "Бережная очистка и обработка поверхностей с использованием воды и абразивного материала. Это идеальный способ,  сохраняющий при этом целостность обрабатываемых изделий.",
  },
];

const backgroundStyles = (index: number) => {
  const imgUrl = img(
    "/images/cycle/cycle-" +
      index +
      (viewport.isGreaterOrEquals("tablet") ? "" : "@05x") +
      ".png",
    {
      format: "avif,webp",
    }
  );

  return { backgroundImage: `url('${imgUrl}')` };
};
</script>

<style lang="scss">
.cycle {
  overflow: hidden;
  .cycle-wrapper {
    display: grid;
    grid-template-columns: minmax(400px, 47fr) minmax(440px, 22fr) minmax(
        400px,
        47fr
      );
    width: 100%;
    height: 706px;

    @media (max-width: 1280px) {
      grid-template-columns: repeat(3, 1fr);
      height: 390px;
    }

    @media (max-width: 992px) {
      grid-template-columns: 79fr 90fr 79fr;
      height: 360px;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      height: auto;
    }
  }

  .cycle-item {
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;

    cursor: pointer;
    display: flex;
    justify-content: end;
    flex-direction: column;
    padding: 50px 20px;

    @media (max-width: 1280px) {
      padding: 50px 30px;
    }

    @media (max-width: 992px) {
      padding: 50px 16px;
    }

    @media (max-width: 768px) {
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 288px;
    }

    &__content {
      max-width: 400px;
      transition: opacity 0.3s;
    }

    &:first-child {
      @media (min-width: 1281px) {
        align-items: end;
      }
    }

    &:hover {
      .cycle-item__content {
        opacity: 0.7;
      }
    }

    h3 {
      color: #ffffff;
      font-size: 22px;
      font-weight: 700;
      line-height: 27.24px;
      text-align: left;
      margin-bottom: 7px;

      @media (max-width: 992px) {
        font-size: 18px;
        line-height: 22.28px;
      }
    }

    &__text {
      font-size: 18px;
      font-weight: 400;
      line-height: 21.6px;
      text-align: left;

      color: #efefef;

      @media (max-width: 1280px) {
        display: none;
      }
    }
  }
}
</style>
