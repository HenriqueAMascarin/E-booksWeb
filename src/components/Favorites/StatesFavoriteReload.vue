<script setup lang="ts">

import { useFavoriteStore, stringFavoriteInternal } from "../../stores/FavoriteStore";
import { watchEffect } from "vue";

const favoriteStore = useFavoriteStore();
const favoriteInternalStorage = localStorage.getItem(stringFavoriteInternal);

if (favoriteInternalStorage) {
    const jsonFavorite: typeof favoriteStore.favoriteData = JSON.parse(favoriteInternalStorage);
    favoriteStore.changeFavoriteValue(jsonFavorite);

} else {
    localStorage.setItem(stringFavoriteInternal, JSON.stringify(favoriteStore.favoriteData));
    
}

watchEffect(() => {

    const newIdArray: typeof favoriteStore.favoriteIds = []

    favoriteStore.favoriteData.items.map(({ id }) => {
        newIdArray.push(id);
    });

    favoriteStore.changeFavoriteIds(newIdArray);
    localStorage.setItem(stringFavoriteInternal, JSON.stringify(favoriteStore.favoriteData));

});

</script>