<template>
  <div v-click-outside="onClickOutside" class="search-box-header">
    <div @click="open = true" class="search-button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
      >
        <g clip-path="url(#clip0_216_5350)">
          <path
            d="M8.62057 17.2462C10.6927 17.2462 12.6499 16.5117 14.2074 15.1755L21.7787 22.7662C21.9189 22.9071 22.1036 22.9775 22.2876 22.9775C22.4709 22.9775 22.6549 22.9078 22.795 22.7677C23.0761 22.4874 23.0768 22.0324 22.7965 21.7514L15.2187 14.1549C18.0556 10.7667 17.8903 5.69304 14.712 2.50754C13.0847 0.875977 10.9213 -0.0224609 8.61985 -0.0224609C6.31841 -0.0224609 4.15498 0.875977 2.52773 2.50754C-0.829555 5.87345 -0.829555 11.351 2.52773 14.7169C4.15569 16.3478 6.31913 17.2462 8.62057 17.2462ZM3.5462 3.52241C4.90176 2.16326 6.70366 1.41504 8.62057 1.41504C10.5375 1.41504 12.3394 2.16326 13.6949 3.52241C16.4945 6.32913 16.4945 10.8954 13.6949 13.7021C12.3394 15.0612 10.5375 15.8094 8.62057 15.8094C6.70366 15.8094 4.90176 15.0612 3.5462 13.7021C0.747383 10.8954 0.747383 6.32913 3.5462 3.52241Z"
            fill="#323232"
          />
        </g>
        <defs>
          <clipPath id="clip0_216_5350">
            <rect width="23" height="23" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <p>Поиск по сайту</p>
    </div>

    <div class="search-window" v-show="open">
      <div class="search-window__input">
        <input
          type="text"
          :placeholder="
            viewport.isGreaterThan('mobileMedium')
              ? 'Введите название вакансии или ключевые слова'
              : 'Поиск'
          "
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
        >
          <g clip-path="url(#clip0_216_5028)">
            <path
              d="M8.62057 17.2452C10.6927 17.2452 12.6499 16.5107 14.2074 15.1745L21.7787 22.7652C21.9189 22.9061 22.1036 22.9766 22.2876 22.9766C22.4709 22.9766 22.6549 22.9068 22.795 22.7667C23.0761 22.4864 23.0768 22.0314 22.7965 21.7504L15.2187 14.1539C18.0556 10.7657 17.8903 5.69206 14.712 2.50656C13.0847 0.875 10.9213 -0.0234375 8.61985 -0.0234375C6.31841 -0.0234375 4.15498 0.875 2.52773 2.50656C-0.829555 5.87247 -0.829555 11.3501 2.52773 14.716C4.15569 16.3468 6.31913 17.2452 8.62057 17.2452ZM3.5462 3.52144C4.90176 2.16228 6.70366 1.41406 8.62057 1.41406C10.5375 1.41406 12.3394 2.16228 13.6949 3.52144C16.4945 6.32816 16.4945 10.8944 13.6949 13.7011C12.3394 15.0602 10.5375 15.8085 8.62057 15.8085C6.70366 15.8085 4.90176 15.0602 3.5462 13.7011C0.747383 10.8944 0.747383 6.32816 3.5462 3.52144Z"
              fill="#323232"
            />
          </g>
          <defs>
            <clipPath id="clip0_216_5028">
              <rect width="23" height="23" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const viewport = useViewport();

const open = ref(false);
const onClickOutside = () => {
  open.value = false;
};
</script>

<style lang="scss">
.search-box-header {
  .search-button {
    padding: 10px 0 13px 20px;
    display: flex;
    align-items: center;
    border-left: 3px solid rgba(235, 235, 235, 1);
    cursor: pointer;

    p {
      font-size: 18px;
      font-weight: 500;
      line-height: 23px;
      margin-left: 10px;
      white-space: nowrap;
      color: rgba(50, 50, 50, 1);
      @media (max-width: 992px) {
        font-size: 14px;
        line-height: 23px;
      }

      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  .search-window {
    position: absolute;
    right: 0;
    top: 120px;
    max-width: 715px;
    width: 100%;

    @media (max-width: 768px) {
      top: 80px;
    }

    &__input {
      box-shadow: 0px 5px 10px 0px rgba(139, 139, 139, 0.22);
      border-radius: 20px;
      background: rgba(255, 255, 255, 1);
      padding: 17px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      svg {
        flex-shrink: 0;
      }

      input {
        margin-right: 20px;
        color: #323232 !important;

        &,
        &::placeholder {
          font-family: "Gilroy";
          font-size: 16px;
          font-weight: 500;
          line-height: 19.41px;
          color: rgba(100, 100, 100, 1);
        }
      }
    }
  }
}
</style>
