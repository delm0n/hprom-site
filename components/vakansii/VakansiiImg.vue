<template>
  <div class="otdel-wrapper skeleton-image">
    <NuxtPicture
      format="avif,webp"
      sizes="1000px"
      :src="'/images/vakansii/' + vakansii.imgVakansii + '.png'"
      :alt="vakansii.title"
    />

    <button @click="openModal('otdel-modal')" class="button-primary">
      <span> Информация об отделе </span>
    </button>

    <modal :id="'otdel-modal'" :title="'Описание отдела'">
      <p class="modal-text" v-text="vakansii.description"></p>
    </modal>
  </div>
</template>

<script setup lang="ts">
import type { IVakansii } from "~/config/sotrudnichestvo";
import Modal from "../UI/Modal.vue";
const storeModal = useModalStore();

const props = defineProps<{
  vakansii: IVakansii;
}>();

const openModal = (id: string) => {
  storeModal.setModal(id, true);
};
</script>

<style lang="scss">
.otdel-wrapper {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  flex-grow: 1;
  width: 100%;

  img {
    width: 100%;
    aspect-ratio: 982 / 491;
  }

  .button-primary {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(255, 255, 255, 1);

    @media (max-width: 992px) {
      bottom: 20px;
    }
  }

  .modal-text {
    font-size: 22px;
    font-weight: 400;
    line-height: 26.4px;
    color: rgba(50, 50, 50, 1);

    @media (max-width: 768px) {
      font-size: 18px;
      line-height: 22px;
    }
  }
}
</style>
