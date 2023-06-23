import { defineStore } from "pinia";

export interface DataType {
    items: {
        id: string,
        volumeInfo: { title: string, description: string, authors: string[], averageRating: number, infoLink: string, imageLinks: { thumbnail: string } },
        searchInfo: { textSnippet: string }
    }[],
    totalItems: number,
};

export interface StatesData {
    data: DataType,
    urlHttpsData: string,
    zoomData: { img: string | null, title: string },
}

export const useDataStore = defineStore('data', {

    state(): StatesData {
        return {
            data: { items: [], totalItems: 0 },
            urlHttpsData: "",
            zoomData: { img: null, title: "Book with no title"},
        }
    },

    actions: {
        changeDataValue(newData: typeof this.data) {
            this.data = newData;
        },
        changeUrlValue(newUrl: typeof this.urlHttpsData) {
            this.urlHttpsData = newUrl;
        },
        changeZoomValue(newZoom: typeof this.zoomData) {
            this.zoomData = newZoom;
        },
    }
})