<script setup>
import { ref, reactive, onMounted } from "vue";
import request from "@/shared/request";
let urls = ref([])
let loading = ref(true)
onMounted(async () => {

  const res = await request({
    method: "GET",
    url: "https://dog.ceo/api/breed/`${$route.params.name}`/images/random/10",
  });
  urls.value = res.message;
  loading.value = !loading
  console.log(res.message)
});
// export default {
//   name: "breedlists",
//   setup() {
//     let dogList = ref({});

//     onMounted(async () => {
//       const res = await request({
//         method: "GET",
//         url: "https://dog.ceo/api/breeds/list/all",
//       });
//       dogList.value = res.message;
//       //   request({
//       //     method: "GET",
//       //     url: "https://dog.ceo/api/breeds/list/all",
//       //   }).then((res) => {
//       //     dogList.value = res.message;
//       //     console.log(dogList.value, "success");
//       //   });
//     });
//     return {
//       dogList,
//     };
//   },
// };
</script>

<template>
  <div>
    狗狗列表
    <ul v-loading="loading">
      <li v-for="url in urls" :key="url"><el-image :src="url" lazy /></li>
    </ul>

  </div>
</template>

<style scoped>
ul {
  list-style: none;
}
</style>
