<template>
  <transition>
    <div
      :id="id"
      v-show="storeModal.getModalById(id).isOpen"
      class="modal-overlay"
      @click="closeModal"
    >
      <div class="modal-viewport">
        <div class="modal-track">
          <div
            class="modal-container"
            :style="storeModal.getModalById(id).isOpen ? 'overflow: auto;' : ''"
          >
            <div
              @click.stop
              class="modal-content"
              :style="`max-width: ${width}px`"
            >
              <div class="modal-content__header">
                <p class="header-title">{{ title }}</p>
                <div class="header-close">
                  <svg
                    @click="closeModal"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.3em"
                    height="1.3em"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                    ></path>
                  </svg>
                </div>
              </div>

              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
const storeModal = useModalStore();

const props = withDefaults(
  defineProps<{
    title: string;
    width?: number;
    id: string;
  }>(),
  {
    width: 845,
  }
);

const closeModal = () => {
  storeModal.setModal(props.id, false);
};
</script>

<style lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(165, 165, 165, 0.47);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(6px);

  .modal-viewport {
    height: 100%;
    width: 100%;
  }

  .modal-track {
    display: flex;
    height: 100%;
  }

  .modal-container {
    flex: 0 0 auto;
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    @media (max-width: 375px) {
      padding: 20px 10px;
    }

    &::before,
    &::after {
      content: "";
      flex: 0 0 0;
      margin: auto;
    }
  }
}

.modal-content {
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
  position: relative;
  width: 100%;
  padding: 30px;

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 375px) {
    padding: 20px 10px;
  }

  &__header {
    display: flex;
    gap: 20px;
    align-items: center;
    margin-bottom: 20px;

    .header-title {
      flex-grow: 1;
      text-align: center;
      color: rgba(50, 50, 50, 1);

      font-size: 32px;
      font-weight: 700;
      line-height: 40px;

      @media (max-width: 768px) {
        font-size: 22px;
        line-height: 27.24px;
      }
    }
    .header-close {
      svg {
        cursor: pointer;
      }
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-active .modal-content {
  animation: bounce-in 0.35s;
}
.v-leave-active .modal-content {
  animation: bounce-in 0.35s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0.7);
  }
  100% {
    transform: scale(1);
  }
}
</style>
