<script setup lang="ts">
import axios from 'axios';
import { reactive } from 'vue';
import HeaderComponent from "./components/HeaderComponent.vue";
import MainSectionComponent from './components/MainSectionComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

interface DataType {
  items: [{
    volumeInfo: { title: string, description: string, authors: string[], averageRating: number, language: string, imageLinks: { smallThumbnail: string, thumbnail: string } },
  }] | []
}

const dataBooks: DataType = reactive({ items: [] });

// axios.get('https://www.googleapis.com/books/v1/volumes?q=inauthor:keyes&maxResults=40&key=AIzaSyBlRP--OjGd0pZ6e_99Uq0NnkKx6mijEy4') só author

// axios.get('https://www.googleapis.com/books/v1/volumes?q=breakingbad:keyes&maxResults=40&key=AIzaSyBlRP--OjGd0pZ6e_99Uq0NnkKx6mijEy4') só nome livro

// axios.get('https://www.googleapis.com/books/v1/volumes?q=breakingbad+inauthor:keyes&maxResults=40&key=AIzaSyBlRP--OjGd0pZ6e_99Uq0NnkKx6mijEy4')

// axios.get('https://www.googleapis.com/books/v1/volumes?q=breakingbad&maxResults=40&key=AIzaSyBlRP--OjGd0pZ6e_99Uq0NnkKx6mijEy4')
//   .then(res => {
//     const dataRes = res.data
//     console.log(dataRes)
//     dataRes.categories.map((books) => {
//       dataBooks.items.push(books);
//     })
//     console.log(dataBooks)
//   })

</script>

<!-- <template>
  <div v-for="(foods) in dataFood.foods" key="foods">
    <img v-bind:src="foods.strCategoryThumb" v-bind:alt="foods.strCategory">
  </div>
</template> -->

<template>
  <div class="bg-lightBrownCustom flex flex-col min-h-screen min-w-full">
    <HeaderComponent />
    <MainSectionComponent />
    <FooterComponent />
  </div>
</template>