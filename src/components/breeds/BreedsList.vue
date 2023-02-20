<script setup>
import { reactive, onMounted } from "vue";
import request from "@/shared/request";

let dogList = reactive({});
onMounted(async () => {
  const res = await request({
    method: "GET",
    url: "https://dog.ceo/api/breeds/list/all",
  });
  dogList.value = res.message;
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
    <ul>
      <li v-for="(value, key) in dogList.value">{{ key }}</li>
    </ul>
  </div>
</template>

<style scoped></style>
