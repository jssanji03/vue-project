<template>
  <BackNav :item="title" num="1" @push="get"></BackNav>
  <div class="container max-w-4xl mx-auto">
    <Form @submit="onSubmit" class="grid grid-cols-1 gap-6 text-start p-8" :validation-schema="schema" v-slot="{ errors }">
      <label class="block">
        <span>名稱</span>
        <Field type="text" class="form-input" placeholder="名稱" v-model=Data.title :disabled='readonly' name="title"/>
        <span class="text-red-600">{{ errors.title }}</span>
      </label>
      <label class="block">
        <span>作者</span>
        <Field type="text" class="form-input" placeholder="作者" v-model=Data.author :disabled='readonly' name="author"/>
        <span class="text-red-600">{{ errors.author }}</span>
      </label>
      <label class="block">
        <span>作者</span>
        <Field class="form-input" v-model=Data.description rows="5" :disabled='readonly' name="description"></Field>
        <span class="text-red-600">{{ errors.description }}</span>
      </label>
      <div class="flex justify-center">
        <button class="formBtn bg-white border border-gray-400 hover:bg-gray-300 mr-8" v-show="show">取消</button>
        <button class="formBtn bg-red-100 hover:bg-red-300" @click="PatchData" v-show="show">修改</button>
      </div>
    </Form>
  </div>
</template>


<script>
import BackNav from '@/components/global/BackNav.vue';
import { getBookDetail, patchBookDetail } from "../components/api/book";
import { ref, onMounted } from "vue";
import { Form, Field } from 'vee-validate';
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router';

export default {
  components: { BackNav, Form },
  setup() {
    const Data = ref([]);
    const title = ref('')
    const readonly = ref(true);
    const show = ref(false);
    const route = useRoute();
    const router = useRouter();
    const id = route.params.id;
    onMounted(() => {
      getBookDetail(id)
        .then(res => {
          Data.value = res.data;
          title.value = res.data.title;
          console.log(title.value);
        })
        .catch(error => {
          console.log("handle error =>", error);
        });
      
    });
    function get(text) {
      readonly.value = text;
      show.value = !text;
    }
    function PatchData() {
      patchBookDetail(id, Data.value)
        .then(res => {
          console.log(router);
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
    function onSubmit () {
      alert("修改成功!");
      router.push({
        path: '/books',
      });
    };
    return {
      Data, readonly, title, get, show, PatchData, onSubmit, schema
    }
  }
};
</script>
