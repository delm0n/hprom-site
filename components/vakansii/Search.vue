<template>
  <div class="search-box">
    <input
      :value="search"
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
      <path
        d="M8.62057 17.2462C10.6927 17.2462 12.6499 16.5117 14.2074 15.1755L21.7787 22.7662C21.9189 22.9071 22.1036 22.9775 22.2876 22.9775C22.4709 22.9775 22.6549 22.9078 22.795 22.7677C23.0761 22.4874 23.0768 22.0324 22.7965 21.7514L15.2187 14.1549C18.0556 10.7667 17.8903 5.69304 14.712 2.50754C13.0847 0.875977 10.9213 -0.0224609 8.61985 -0.0224609C6.31841 -0.0224609 4.15498 0.875977 2.52773 2.50754C-0.829555 5.87345 -0.829555 11.351 2.52773 14.7169C4.15569 16.3478 6.31913 17.2462 8.62057 17.2462ZM3.5462 3.52241C4.90176 2.16326 6.70366 1.41504 8.62057 1.41504C10.5375 1.41504 12.3394 2.16326 13.6949 3.52241C16.4945 6.32913 16.4945 10.8954 13.6949 13.7021C12.3394 15.0612 10.5375 15.8094 8.62057 15.8094C6.70366 15.8094 4.90176 15.0612 3.5462 13.7021C0.747383 10.8954 0.747383 6.32913 3.5462 3.52241Z"
        fill="#323232"
      />
    </svg>
  </div>
</template>

<script lang="ts" setup>
const viewport = useViewport();

const props = defineProps<{
  search: string;
}>();
</script>

<style lang="scss">
.search-box {
  padding: 20px 30px 17px;
  position: relative;
  background: rgb(246, 246, 246);
  border-radius: 20px;
  transition: all 0.3s;
  width: 100%;

  &:hover,
  &:active,
  &:has(> input:focus),
  &:has(> input:focus-visible) &:has(> textarea:focus),
  &:has(> textarea:focus-visible) {
    background: rgba(230, 230, 230, 1);
  }

  input {
    &,
    &::placeholder {
      font-family: "Gilroy";
      font-size: 16px;
      font-weight: 500;
      line-height: 19.41px;
      color: rgba(100, 100, 100, 1);
    }
  }

  svg {
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
}
</style>
