<template>
  <NavBar></NavBar>
  <div class="container max-w-4xl mx-auto">

    <div class="grid gap-8 grid-cols-2">
      <div v-for="item in Data" :key="item.id">
        <router-link :to="{ name: 'BookDetail', params: { id: item.id }}"
          class="bg-white w-full rounded-xl shadow-md my-8 flex flex-col hover:shadow-xl border hover:border-red-300">
          <div class="px-6 py-4">
            <div class="font-bold text-xl h-10">
              <p class="line-clamp-1">{{ item.title }}</p>
            </div>
            <div class="h-40 mt-3">
              <p class="text-gray-500 text-base line-clamp-6">
                {{ item.description }}
              </p>
            </div>
          </div>
          <div class="px-6 py-4">
            <span class="inline-block bg-red-50 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">{{
              item.author
            }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
<script setup>
import NavBar from '@/components/global/NavBar.vue';
import { getBookList, getBookDetail } from "@/components/api/book.js";
import { ref, onMounted, computed } from "vue";
const Data = ref([]);
onMounted(() => {
  getBookList()
    .then(res => {
      Data.value = res.data;
      console.log(res.data);
    })
    .catch(error => {
      console.log("handle error =>", error);
    });
});
const getId = (e) => {
  console.log(e);
};

// return {
//   Data, getId
// };
// export default {
//   setup() {
//   },
// };
</script>
