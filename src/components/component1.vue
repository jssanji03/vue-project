<script>

import Counter from './counter.js';
import { ref, computed } from "vue";
export default {
    setup() {
        const {
            count,
            double,
            add
        } = Counter();

        return { //這裡回傳給 <template> 使用的 資料
            count,
            add,
            double
        };
    }
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