<template>
    <nav class=" bg-slate-400 text-xl flex justify-between">
        <button to="/books" @:click="$router.back" class=" btn text-black p-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd"
                d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
                clip-rule="evenodd" />
                </svg>
        </button>
        <h1 class="flex-grow h-10 leading-10 text-white font-black">{{ item }}</h1>
        <button to="/books" @:click="show" class="  btn text-black p-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6" >
            <path
                d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
            <path
                d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                </svg>
        </button>
    </nav>
</template>

<script>
import { ref, onMounted, computed, watch } from "vue";
export default {
    props:['item','num'],
    setup(props,{emit}) {
        const readonly = ref(false);
        // const show = ref(false);
        function show() {
            emit("push", readonly.value=false )
        }
        return {
            show
        }
    }
}

</script>

<!-- <style lang="scss" scoped>
nav {
    padding: 30px;
    h1 {
        font-weight: bold;
    }
}
</style> -->