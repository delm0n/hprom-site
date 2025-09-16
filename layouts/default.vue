<script setup lang="ts">
import HeliconHeader from "~/components/layout/HeliconHeader.vue";
import HeliconFooter from "~/components/layout/HeliconFooter.vue";
import SideMenu from "~/components/layout/SideMenu.vue";
const viewport = useViewport();
</script>

<template>
  <div>
    <helicon-header />
    <side-menu v-if="!viewport.isGreaterThan('mobileWide')" />
    <slot />
    <helicon-footer />
  </div>
</template>
