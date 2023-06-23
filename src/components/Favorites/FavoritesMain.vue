<script setup lang="ts">

import { RouterLink } from 'vue-router';
import GeneratorCardsComponentVue from '../Main/CardsComponents/GeneratorCardsComponent.vue';
import { useFavoriteStore } from '@/stores/FavoriteStore';
import MarginContainer from '../Main/MarginContainer.vue';

const favoriteStore = useFavoriteStore();

</script>

<template>
    <div class="flex-grow min-h-[600px] w-full">
        <MarginContainer>
            <div class="flex flex-col items-center py-20">

                <RouterLink to="/"
                    class="bg-purpleCustom text-white px-16 py-2 text-xl rounded-lg font-bold max-w-full mb-24">
                    Go to main screen
                </RouterLink>

                <GeneratorCardsComponentVue :data-items="favoriteStore.favoriteData" />

            </div>
        </MarginContainer>
    </div>
</template>