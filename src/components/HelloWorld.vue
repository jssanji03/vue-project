<!-- <script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})
const count = ref(0);

</script> -->
<script>
import { ref, reactive } from 'vue';
export default {
  setup() {
    const msg = 'Hello!';
    const count = ref(0);
    const handler = () => {
      alert(msg);
    };
    const add = () => {
      count.value += 1;
    };
    return { msg, handler, count,add };
  },
};
</script>

<template>
  <h1>{{ msg }}</h1>
  <button class="text-sm bg-slate-400 px-3 " @click="handler">click</button>

  <div class="card">
    <button type="button">count is {{ count }}</button>
    <button class="text-sm bg-slate-400 px-3 " @click="add">click</button>
    <p class="text-6xl text-red-700">{{ msg }}</p>
    <h1 class="text-4xl text-green-500">Vite + TailwindCSS</h1>
  </div>
</template>

<style scoped>
</style>
