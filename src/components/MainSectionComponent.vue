<script setup lang="ts">
import MarginContainer from './MarginContainer.vue';
</script>

<template>
    <section class="text-center">
        <div class="bg-[url('../assets/images/books.webp')] bg-cover h-60 bg-center border-b-4 border-brownCustom" aria-label="Books image"></div>

        <div class="mt-4 mb-8">
            <h1 class="text-purpleCustom text-6xl font-bold uppercase drop-shadow-logoCustom">E-books</h1>
            <p class="max-w-paraghPrincipal text-xl m-auto font-medium text-purpleCustom">Book search application for the best choices.</p>
        </div>

        <MarginContainer>
            <div>
                <form class="bg-brownCustom flex flex-col py-3 px-4 rounded-lg">
                    <p class="text-white font-bold self-start text-lg">One field is required</p>

                    <div class="flex flex-col gap-3 md:flex-row">
                        <input type="text" name="BookNameField" placeholder="Book name"
                            class="h-9 rounded-xl placeholder-stone-500 font-bold pl-2 md:flex-grow">
                        <input type="text" name="AuthorField" placeholder="Author"
                            class="h-9 rounded-xl placeholder-stone-500 font-bold pl-2">
                    </div>

                    <button v-on:click.prevent=""
                        class="bg-purpleCustom rounded-xl pb-0.5 text-xl text-white font-bold mt-4 uppercase">Search</button>
                </form>

                <div class="mt-10 mb-32">
                    <div>

                    </div>
                    <button class="bg-purpleCustom rounded-2xl text-white font-bold px-7 pb-1 text-xl">View more books</button>
                </div>
            </div>
        </MarginContainer>

    </section>
</template>