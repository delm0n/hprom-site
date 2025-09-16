<template>
  <div>
    <helicon-header />
    <side-menu v-if="!viewport.isGreaterThan('mobileWide')" />
    <not-found />
    <helicon-footer />
  </div>
</template>

<script lang="ts" setup>
import NotFound from "./components/layout/NotFound.vue";
import HeliconHeader from "~/components/layout/HeliconHeader.vue";
import HeliconFooter from "~/components/layout/HeliconFooter.vue";
import SideMenu from "~/components/layout/SideMenu.vue";
const viewport = useViewport();
</script>
