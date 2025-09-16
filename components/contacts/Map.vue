<template>
  <section class="contact-map skeleton-image">
    <div id="my-map"></div>
  </section>
</template>

<style lang="scss">
.contact-map {
  max-width: 100%;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 20px;

  @media (max-width: 768px) {
    aspect-ratio: 540 / 300;
    height: auto;
  }

  #my-map {
    width: 100%;
    height: 100%;
  }
}
</style>

<script lang="ts" setup>
async function getMap() {
  try {
    let script = document.createElement("script");
    script.setAttribute("async", "");
    script.type = "text/javascript";
    script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
    document.querySelector("body")!.appendChild(script);

    script.onload = function () {
      //@ts-ignore
      ymaps.ready(function () {
        //@ts-ignore
        let myMap = new ymaps.Map("my-map", {
          center: [58.629283, 49.648934],
          zoom: 17,
          controls: ["zoomControl"],
        });

        myMap.behaviors.disable("scrollZoom");

        //@ts-ignore
        let mark = new ymaps.Placemark(
          [58.629283, 49.648914],
          {
            hasHint: true,
            hintContent: "Офис",
          },
          {
            // Необходимо указать данный тип макета.
            iconLayout: "default#image",

            // Своё изображение иконки метки.
            iconImageHref: "map-icon.svg",

            // Размеры метки.
            iconImageSize: [48, 65],

            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-8, -48],
          }
        );

        myMap.geoObjects.add(mark);
      });
    };
  } catch {}
}

onMounted(() => {
  getMap();
});
</script>
