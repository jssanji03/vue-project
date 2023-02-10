<template>
    <div class="grid gap-8 grid-cols-2">
        <div v-for="item in Data" :key="item.id" class="bg-white w-full rounded-xl shadow-md my-8 flex flex-col hover:shadow-xl">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{{ item.title }}</div>
                <div class="h-40 mt-5">
                  <p class="text-gray-500 text-base line-clamp-6">
                     {{ item.description }}
                  </p>
                </div>
            </div>
            <div class="px-6 py-4">
                <span
                    class="inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">{{ item.author }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { getBookList } from "../api/book.js";
import { ref, onMounted } from "vue";
export default {
  setup() {
    const Data = ref([]);

    onMounted(() => {
      getBookList()
        .then(res => {
          Data.value = res.data;
        })
        .catch(error => {
          console.log("handle error =>", error);
        });
    });

    return {
      Data
    };
  },
}
</script>
