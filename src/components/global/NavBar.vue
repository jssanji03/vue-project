<template>
    <nav class=" bg-slate-400 text-xl p-4 flex justify-center">
        <router-link to="/books" class="flex-grow h-10 leading-10 text-white ">BookList</router-link>
        <button class="btn"> + </button>
    <!-- <router-link to="/books/:bookId">About</router-link> -->
    </nav>
</template>


<style lang="scss" scoped>
nav {
    padding: 30px;
    a {
        font-weight: bold;
    }
}
</style>
