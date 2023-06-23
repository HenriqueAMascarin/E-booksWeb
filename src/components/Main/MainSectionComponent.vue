<script setup lang="ts">

import MarginContainer from './MarginContainer.vue';
import { reactive } from 'vue';
import axios from 'axios';
import { useDataStore } from '@/stores/DataStore';
import CardsComponent from './CardsComponents/CardsComponent.vue';

const dataStates = useDataStore();
let valuesInput = reactive({ bookNameField: "", authorNameField: "" });

function dontFoundBook() {
    const errorMessageComponent = document.getElementById("errorMessage");
    if (errorMessageComponent) {
        errorMessageComponent.textContent = "Missing book!";
        errorMessageComponent.classList.remove('hidden');
    }
}

function searchBooks(valuesText: typeof valuesInput) {
    const errorMessageComponent = document.getElementById("errorMessage");
    const maxResults = 10;
    const bookName = valuesText.bookNameField.replace(/\s/g, '%20');
    const author = valuesText.authorNameField.replace(/\s/g, '%20');//changes white space for %20 because the api have author name correctly with white space, and the white in api address is %20
    let urlHttps = '';

    valuesInput.bookNameField = '';
    valuesInput.authorNameField = '';

    if (bookName == '' && author == '' && errorMessageComponent) {
        errorMessageComponent.textContent = "Missing book name and author name!";
        errorMessageComponent.classList.remove('hidden');
        return;
    }
    errorMessageComponent?.classList.add('hidden');

    (function findUrl() {
        // "+intitle:" is for title names correctly and "+inauthor:" is for author. if he not pass +intitle: (like q=flowers) they gonna search in all texts of book info of that value.
        if (bookName != '' && author != '') {
            urlHttps = "https://www.googleapis.com/books/v1/volumes?q=+intitle:" + bookName + "+inauthor:" + author + "&maxResults=" + maxResults + "&filter=ebooks&key=AIzaSyBlRP--OjGd0pZ6e_99Uq0NnkKx6mijEy4";
        } else if (bookName != '') {
            urlHttps = "https://www.googleapis.com/books/v1/volumes?q=+intitle:" + bookName + "&maxResults=" + maxResults + "&filter=ebooks&key=AIzaSyBlRP--OjGd0pZ6e_99Uq0NnkKx6mijEy4";
        } else if (author != '') {
            urlHttps = "https://www.googleapis.com/books/v1/volumes?q=+inauthor:" + author + "&maxResults=" + maxResults + "&filter=ebooks&key=AIzaSyBlRP--OjGd0pZ6e_99Uq0NnkKx6mijEy4";
        }
        dataStates.changeUrlValue(urlHttps);
    })();

    axios.get(urlHttps)
        .then(res => {
            const dataRes: typeof dataStates.data = res.data;

            if (dataRes.totalItems == 0) {
                dataStates.changeDataValue({ items: [], totalItems: 0 });
                dontFoundBook();
            }else{
                dataStates.changeDataValue(dataRes);
            }
        })
}

</script>

<template>
    <section class="text-center pb-32  flex-grow">
        <div class="bg-[url('../assets/images/books.webp')] bg-cover h-60 bg-center border-b-4 border-brownCustom"
        aria-label="Books image"
        role="img"></div>

        <MarginContainer>

            <div class="mt-4 mb-8">
                <h1 class="text-purpleCustom text-6xl font-bold uppercase drop-shadow-borderCustom break-words">E-books</h1>
                <p class="max-w-paraghPrincipal text-xl m-auto font-medium text-purpleCustom">Book search application for
                    the
                    best choices.</p>
            </div>

            <div>
                <form class="bg-brownCustom flex flex-col py-3 px-4 rounded-lg mb-20">
                    <p class="text-white font-bold self-start text-lg">One field is required</p>

                    <div class="flex flex-col gap-3 md:flex-row relative pb-4">
                        <input type="text" name="BookNameField" placeholder="Book name"
                            class="h-9 rounded-xl placeholder-stone-500 font-bold pl-2 md:flex-grow"
                            v-model="valuesInput.bookNameField">
                        <input type="text" name="AuthorField" placeholder="Author"
                            class="h-9 rounded-xl placeholder-stone-500 font-bold pl-2"
                            v-model="valuesInput.authorNameField">

                        <p class="font-bold text-red-800 self-start absolute -bottom-2 drop-shadow-borderCustom hidden"
                            id="errorMessage">Missing book name and author name!</p>
                    </div>

                    <button @click.self.prevent="() => searchBooks(valuesInput)"
                        class="bg-purpleCustom rounded-xl pt-0.5 text-xl text-white font-bold mt-4 uppercase">Search</button>
                </form>

                <CardsComponent />

            </div>

        </MarginContainer>

    </section>
</template>