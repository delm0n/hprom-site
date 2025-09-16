<template>
  <div>
    <NuxtLayout>
      <transition name="page">
        <NuxtPage keepalive class="page-content" />
      </transition>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const storeMedia = useMediaStore();
const storeSotrudnichestvo = useSotrudnichestvoStore();

await callOnce(storeMedia.fetch);
await callOnce(storeSotrudnichestvo.fetch);
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}

.page-enter, .page-leave-to /* .page-leave-active в <2.1.8 */ {
  opacity: 0;
}

.page-content {
  min-height: 80vh;
}
</style>
