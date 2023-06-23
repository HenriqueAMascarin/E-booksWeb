<script setup lang="ts">

import { useFavoriteStore } from '@/stores/FavoriteStore';
import { useDataStore, type DataType } from '@/stores/DataStore';


const dataStore = useDataStore();
const favoriteStore = useFavoriteStore();
const props = defineProps<{ dataItems: typeof dataStore.data }>();

function addFavorite(item: typeof props.dataItems.items[0]) {

    let favoriteItemsArray = favoriteStore.favoriteData.items;

    if (favoriteStore.favoriteIds.includes(item.id)) {
        favoriteItemsArray = favoriteItemsArray.filter((itemsArray) => {
            return itemsArray.id != item.id;
        })
    } else {
        favoriteItemsArray = [...favoriteItemsArray, item];
    }

    const newFavorite: DataType = { items: favoriteItemsArray, totalItems: favoriteItemsArray.length };

    favoriteStore.changeFavoriteValue(newFavorite);
}

</script>   

<template>
    <div class="grid gap-20 grid-cols-1 md:grid-cols-2 justify-items-center items-center">
        
        <article v-for="dataCard in props.dataItems.items"
            class="flex flex-col w-cardsCustom max-w-full h-cardsCustom text-left bg-white p-3 rounded-xl shadow-shadowCustom overflow-auto">

            <div v-if="dataCard.volumeInfo.imageLinks" class="rounded-xl bg-cover min-h-[290px] bg-top mb-1 relative"
                :style="{ 'backgroundImage': 'url(' + dataCard.volumeInfo?.imageLinks.thumbnail + ')' }"
                :aria-label="dataCard.volumeInfo.title + 'image'" role="img">

                <button @click="dataStore.changeZoomValue({
                    img: dataCard.volumeInfo.imageLinks.thumbnail,
                    title: dataCard.volumeInfo.title ? dataCard.volumeInfo.title : 'Book with no title'
                })" 
                class="drop-shadow-borderShadowCustom absolute right-2 top-2" 
                aria-label="Button that zoom the image">

                    <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.15 38.05L0 35.9L7.35 28.55H1V25.55H12.5V37.05H9.5V30.7L2.15 38.05ZM35.85 38.05L28.5 30.7V37.05H25.5V25.55H37V28.55H30.65L38 35.9L35.85 38.05ZM1 12.55V9.55H7.35L0 2.2L2.15 0.05L9.5 7.4V1.05H12.5V12.55H1ZM25.5 12.55V1.05H28.5V7.4L35.9 0L38.05 2.15L30.65 9.55H37V12.55H25.5Z"
                            fill="#26111F" />
                    </svg>

                </button>

            </div>
            <div v-else="dataCard.volumeInfo.imageLinks"
                class="rounded-xl min-h-[290px] mb-1 bg-slate-500 flex justify-center items-center relative">
                <p class="font-bold text-xl absolute text-white">No book image</p>
            </div>


            <h2 v-if="dataCard.volumeInfo.title" class="font-bold text-xl">
                {{
                    dataCard.volumeInfo.title.length > 40
                    ? dataCard.volumeInfo.title.slice(0, dataCard.volumeInfo.title.indexOf(" ", 35))
                        .replace(/,*$/, "") + "..."
                    : dataCard.volumeInfo.title + "..."
                }}
            </h2>
            <h2 v-else="dataCard.volumeInfo.title" class="font-bold text-xl">Book with no title</h2>


            <p v-if="dataCard.volumeInfo.description" class="font-medium text-[17px]">
                {{
                    dataCard.volumeInfo.description.slice(
                        0, dataCard.volumeInfo.description.indexOf(" ", 60)
                    ).replace(/,*$/, "") + "..."
                }}
            </p>

            <p v-if="dataCard.volumeInfo.authors" class="text-gray-500 font-medium">
                {{ dataCard.volumeInfo.authors.length > 1 ?
                    dataCard.volumeInfo.authors[0] + ", " + dataCard.volumeInfo.authors[1]
                    : dataCard.volumeInfo.authors[0] }}
            </p>

            <div class="flex items-end mt-auto flex-wrap">
                <button class="rounded-md text-white px-2 pt-0.5 font-bold text-[17px]"
                    :style="{ 'backgroundColor': favoriteStore.favoriteIds.includes(dataCard.id) ? '#FFC700' : '#26111F' }"
                    @click="() => addFavorite(dataCard)">
                    {{ favoriteStore.favoriteIds.includes(dataCard.id) ? "Unfavorite" : "Favorite" }}
                </button>

                <a v-if="dataCard.volumeInfo.infoLink" :href="dataCard.volumeInfo.infoLink" target="_blank"
                    rel="noopener noreferrer" class="ml-auto" aria-label="Button Buy the book">
                    <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_39)">
                            <path
                                d="M2.16667 30C1.58889 30 1.08333 29.7857 0.65 29.3571C0.216667 28.9286 0 28.4286 0 27.8571V8.92857C0 8.35714 0.216667 7.85714 0.65 7.42857C1.08333 7 1.58889 6.78571 2.16667 6.78571H6.13889C6.13889 4.90476 6.77685 3.30357 8.05278 1.98214C9.3287 0.660714 10.9176 0 12.8194 0C14.7213 0 16.3704 0.660714 17.7667 1.98214C19.163 3.30357 19.8611 4.90476 19.8611 6.78571H23.8333C24.4111 6.78571 24.9167 7 25.35 7.42857C25.7833 7.85714 26 8.35714 26 8.92857V27.8571C26 28.4286 25.7833 28.9286 25.35 29.3571C24.9167 29.7857 24.4111 30 23.8333 30H2.16667ZM13 17.5C14.9019 17.5 16.5509 16.8095 17.9472 15.4286C19.3435 14.0476 20.0417 12.4167 20.0417 10.5357H17.875C17.875 11.8452 17.3935 12.9762 16.4306 13.9286C15.4676 14.881 14.3241 15.3571 13 15.3571C11.6759 15.3571 10.5324 14.881 9.56944 13.9286C8.60648 12.9762 8.125 11.8452 8.125 10.5357H5.95833C5.95833 12.4167 6.65648 14.0476 8.05278 15.4286C9.44907 16.8095 11.0981 17.5 13 17.5ZM8.30556 6.78571H17.6944C17.6944 5.47619 17.2431 4.375 16.3403 3.48214C15.4375 2.58929 14.3241 2.14286 13 2.14286C11.6759 2.14286 10.5625 2.58929 9.65972 3.48214C8.75694 4.375 8.30556 5.47619 8.30556 6.78571Z"
                                fill="#26111F" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_39">
                                <rect width="26" height="30" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </a>
            </div>

        </article>

    </div>
</template>