<script setup lang="ts">

import { RouterLink } from 'vue-router';
import GeneratorCardsComponentVue from '../Main/CardsComponents/GeneratorCardsComponent.vue';
import { useFavoriteStore } from '@/stores/FavoriteStore';
import MarginContainerVue from '../Main/MarginContainer.vue';

const favoriteStore = useFavoriteStore();

</script>

<template>
    <MarginContainerVue>
        <div class="min-h-[500px] w-full flex flex-col items-center py-20">

            <RouterLink to="/" class="bg-purpleCustom text-white px-16 py-2 text-xl rounded-lg font-bold max-w-full mb-24">
                Go to main screen
            </RouterLink>

            <GeneratorCardsComponentVue :data-items="favoriteStore.favoriteData" />

        </div>
    </MarginContainerVue>
</template>