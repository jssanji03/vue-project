<template>
    <BackNav msg="新增書本"></BackNav>
    <div class="container max-w-4xl mx-auto">
        <Form @submit.prevent="onSubmit" :validation-schema="schema" v-slot="{ errors }">
            <div class="grid grid-cols-1 gap-6 text-start p-8">
                <label class="block">
                    <span>名稱</span>
                    <Field type="text" class="form-input" v-model="Data.title" name="title"/>
                    <span class="text-red-600">{{ errors.title }}</span>
                </label>
                <label class="block">
                    <span>作者</span>
                    <Field type="text" class="form-input"  v-model="Data.author" name="author"/>
                    <span class="text-red-600">{{ errors.author }}</span>
                </label>
                <label class="block">
                    <span>備註</span>
                    <Field class="form-input" v-model="Data.description" rows="5" name="description"></Field>
                    <span class="text-red-600">{{ errors.description }}</span>
                </label>
            </div>
            <button class="formBtn bg-white border border-gray-400 hover:bg-gray-300 mr-8" @click="cancel">取消</button>
            <button class="formBtn bg-red-100 hover:bg-red-300" @click="addBook">新增</button>
        </Form>
    </div>
</template>


<script setup>
    import BackNav from '@/components/global/BackNav.vue';
    import { postBookList } from "../components/api/book";
    import { ref, onMounted, computed, watch } from "vue";
    import { Form, Field } from 'vee-validate';
    import { useRouter } from 'vue-router';
    const router = useRouter();
    const Data = ref({
        title: '',
        author: '',
        description: '',
    });

    const addBook = () => {
        postBookList(Data.value)
            .then(res => {
            })
            .catch(error => {
                console.log("handle error =>", error);
            });
    }
    const schema = {
        title: 'required',
        author: 'required',
        description: 'required',
    };
    const onSubmit = () => {
        alert("Success!");
        router.push({
            path: '/books',
    })
    const cancel = () => {
        console.log("cancel");
    };
};
</script>
