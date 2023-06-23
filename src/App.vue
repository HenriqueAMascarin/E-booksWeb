<script setup lang="ts">

import HeaderComponent from "./components/Main/HeaderComponent.vue";
import FooterComponent from "./components/Main/FooterComponent.vue";
import ZoomCardsComponent from "./components/Main/CardsComponents/ZoomCardsComponent.vue";
import { RouterView } from "vue-router";
import StatesFavoriteReload from "./components/Favorites/StatesFavoriteReload.vue";

</script>

<template>
  <StatesFavoriteReload />
  <div class="bg-lightBrownCustom flex flex-col min-h-screen min-w-full relative">
    <ZoomCardsComponent />
    <HeaderComponent />
    <RouterView></RouterView>
    <FooterComponent />
  </div>
</template>