<script setup lang="ts">

import { useDataStore } from '../../../stores/DataStore';
import { watchEffect } from 'vue';

const dataStore = useDataStore();

const htmlElement = document.querySelector('html');
const bodyElement = document.querySelector('body');

function closeZoom(data: typeof dataStore) {
    data.changeZoomValue({ img: null, title: 'Book with no title' })
}

watchEffect(() => {
    
    if (dataStore.zoomData.img) {
        htmlElement?.classList.add('overflow-hidden');
        bodyElement?.classList.add('overflow-hidden');
    } else {
        htmlElement?.classList.remove('overflow-hidden');
        bodyElement?.classList.remove('overflow-hidden');
    }
    
});

</script>

<template>
    <div v-if="dataStore.zoomData.img"
        class="w-full h-full z-10 fixed flex items-center justify-center px-marginContainerCustom">

        <div class="bg-opacity-60 bg-black w-full h-full absolute" @click="() => closeZoom(dataStore)"></div>

        <article
            class="bg-white w-full max-w-[360px] h-[550px] flex flex-col items-center justify-start p-3 z-[1] rounded-xl text-start overflow-auto">
            <div class="rounded-xl bg-cover bg-top w-full h-[410px] mb-1"
                :style="{ 'background-image': 'url(' + dataStore.zoomData.img + ')' }"
                :aria-label="dataStore.zoomData.title + 'image'" role="img">
            </div>

            <h2 class="font-bold text-2xl mr-auto">
                {{
                    dataStore.zoomData.title.length > 40
                    ? dataStore.zoomData.title.slice(0, dataStore.zoomData.title.indexOf(" ", 35))
                        .replace(/,*$/, "") + " image"
                    : dataStore.zoomData.title + " image"
                }}
            </h2>

            <button class="bg-purpleCustom rounded-md text-white px-4 font-bold text-xl ml-auto mt-auto"
                @click="() => closeZoom(dataStore)">
                Close
            </button>
        </article>

    </div>
</template>