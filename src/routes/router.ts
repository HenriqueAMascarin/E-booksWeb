import  { createRouter, createWebHashHistory } from "vue-router"
import MainSectionComponentVue from "@/components/Main/MainSectionComponent.vue";
import FavoritesMain from "../components/Favorites/FavoritesMain.vue";

const routes = [
    {path: "/", component: MainSectionComponentVue},
    {path: "/favorites", component: FavoritesMain},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(){
        return {top: 0}
    }
})

export default router;