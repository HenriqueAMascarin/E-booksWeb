<script setup lang="ts">

import HeaderComponent from "./components/Main/HeaderComponent.vue";
import FooterComponent from "./components/Main/FooterComponent.vue";
import ZoomCardsComponent from "./components/Main/CardsComponents/ZoomCardsComponent.vue";
import { RouterView } from "vue-router";
import { useFavoriteStore, stringFavoriteInternal } from "./stores/FavoriteStore";

const favoriteStore = useFavoriteStore();
const favoriteInternalStorage = localStorage.getItem(stringFavoriteInternal);

if (favoriteInternalStorage) {
  const jsonFavorite: typeof favoriteStore.favoriteData = JSON.parse(favoriteInternalStorage);
  favoriteStore.changeFavoriteValue(jsonFavorite);
} else {
  localStorage.setItem(stringFavoriteInternal, JSON.stringify(favoriteStore.favoriteData));
}

</script>

<template>
  <div class="bg-lightBrownCustom flex flex-col min-h-screen min-w-full relative">
    <ZoomCardsComponent />
    <HeaderComponent />
    <RouterView></RouterView>
    <FooterComponent />
  </div>
</template>