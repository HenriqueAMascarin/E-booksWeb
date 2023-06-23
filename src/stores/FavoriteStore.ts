import { defineStore } from "pinia";
import { type DataType } from "./DataStore"

export const stringFavoriteInternal = "favoriteLocalData";

interface FavoriteStatesData {
    favoriteData: DataType,
    favoriteIds: string[],
}

export const useFavoriteStore = defineStore('dataFavorite', {

    state(): FavoriteStatesData {
        return {
            favoriteData: { items: [], totalItems: 0 },
            favoriteIds: [],
        }
    },

    actions: {
        changeFavoriteValue(newFavorite: typeof this.favoriteData) {
            this.favoriteData = newFavorite;
        },
        changeFavoriteIds(newFavoriteId: typeof this.favoriteIds) {
            this.favoriteIds = newFavoriteId;
        },
    }
})