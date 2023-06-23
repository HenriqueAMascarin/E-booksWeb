<script setup lang="ts">

import { type StatesData, useDataStore } from '@/stores/DataStore';

import GeneratorCardsComponent from './GeneratorCardsComponent.vue';
import MarginContainer from '../MarginContainer.vue';

import axios from 'axios';

const dataStore = useDataStore();

function listAddBooks(dataInfoProp: StatesData) {
    const searchUrl = dataInfoProp.urlHttpsData.replace(/ebooks/, "ebooks" + "&startIndex=" + dataInfoProp.data.items.length);

    axios.get(searchUrl)
        .then(res => {
            const dataRes: typeof dataInfoProp.data = res.data;

            const newItemsArray = dataRes.items ? [...dataInfoProp.data.items, ...dataRes.items] : dataInfoProp.data.items;

            dataStore.changeDataValue({
                items: newItemsArray,
                totalItems: dataRes.items ? dataRes.totalItems : newItemsArray.length,
            });
        })
}

</script>

<template>
    <MarginContainer>

        <GeneratorCardsComponent :data-items="dataStore.data"/>

        <button class="bg-purpleCustom rounded-2xl text-white font-bold px-7 text-xl mt-10"
            v-if="dataStore.data.items.length < dataStore.data.totalItems" @click="() => listAddBooks(dataStore)">
            View more books
        </button>
        
    </MarginContainer>
</template>