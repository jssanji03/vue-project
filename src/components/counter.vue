<script>
import { ref, computed } from 'vue';
export default {
    setup() {
        const count = ref(0);
        const add = () => {
            count.value += 1;
        };
        const double = () => {
            count.value *= 2;
        };
        return { count, double, add };
    },
};
</script>

<template>
    <h1 class="text-xl">Counter</h1>
    <div class="block">{{ count }}</div>
    <div class="text-center flex justify-center">
        <button class="block btn" @click="add">+1</button>
        <button class="block btn" @click="double">double</button>
    </div>
</template>