<template>
  <section class="dejatelnost-text">
    <div class="content-img skeleton-image">
      <!-- <NuxtPicture
        format="avif,webp"
        sizes="1000px"
        width="100%"
        :src="'/images/organizacija/dejatelnost/dejatelnost.png'"
        :alt="'деятельность'"
      /> -->
      <img
        :src="'/images/organizacija/dejatelnost/dejatelnost.png'"
        :alt="'деятельность'"
        sizes="1000px"
        width="100%"
      />
    </div>

    <h2 id="manufacture">Производство</h2>
    <p class="dejatelnost-subtitle">
      ГЕЛИКОН PROM — это производство полного цикла, развивающееся с 2012 года
    </p>

    <h3>Лазерная резка</h3>
    <p>
      Высокоточная резка металлов различных толщин и форматов. Мы создали все
      условия для того, чтобы создавать сложные детали с максимальной точностью
      и минимальными затратами.
    </p>

    <h3>Аргонная сварка</h3>
    <p>
      Мы специализируемся сварке, которая идеально подходит для соединения
      нержавеющей стали и других цветных металлов. Наши специалисты гарантируют
      прочные и эстетически привлекательные швы, соответствующие самым высоким
      стандартам качества.
    </p>

    <h3>Аквабласт</h3>
    <p>
      Бережная очистка и обработка поверхностей с использованием воды и
      абразивного материала. Это идеальный способ, сохраняющий при этом
      целостность обрабатываемых изделий.
    </p>
  </section>
</template>

<style lang="scss">
.dejatelnost-text {
  h3 {
    font-size: 27px;
    font-weight: 500;
    line-height: 32.75px;
    margin-bottom: 10px;
    color: rgba(50, 50, 50, 1);

    @media (max-width: 992px) {
      font-size: 22px;
      line-height: 26.69px;
    }
  }

  .content-img {
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 420px;
    margin-bottom: 40px;

    @media (max-width: 992px) {
      margin-bottom: 20px;
    }

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
    }
  }
}
</style>
