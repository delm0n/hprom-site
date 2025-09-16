<template>
  <main class="container page">
    <p class="page-breadcrumbs">
      <NuxtLink to="/"> Главная&nbsp;</NuxtLink><span> — 404</span>
    </p>
    <h1 class="page-title">Страница не найдена</h1>

    <NuxtLink to="/" class="button-secondary">
      <span> Вернуться на главную страницу</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="15"
        viewBox="0 0 16 15"
        fill="none"
      >
        <path
          d="M1 6.5C0.447715 6.5 4.82823e-08 6.94772 0 7.5C-4.82823e-08 8.05228 0.447715 8.5 1 8.5L1 6.5ZM15.7071 8.20711C16.0976 7.81658 16.0976 7.18342 15.7071 6.79289L9.34315 0.428933C8.95262 0.0384085 8.31946 0.0384084 7.92893 0.428933C7.53841 0.819457 7.53841 1.45262 7.92893 1.84315L13.5858 7.5L7.92893 13.1569C7.53841 13.5474 7.53841 14.1805 7.92893 14.5711C8.31946 14.9616 8.95262 14.9616 9.34314 14.5711L15.7071 8.20711ZM1 8.5L15 8.5L15 6.5L1 6.5L1 8.5Z"
          fill="#323232"
        />
      </svg>
    </NuxtLink>
  </main>
</template>

<style lang="scss" scoped>
.page {
  min-height: 80vh;
  .button-secondary {
    max-width: 309px;
    max-width: max-content;

    span {
      margin-right: 8px;
    }
  }
}
</style>
