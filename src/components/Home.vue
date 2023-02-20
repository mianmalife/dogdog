<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

import { ElMessage } from "element-plus";
import axios from "axios";
const imgUrl = new URL("../assets/images/home.jpg", import.meta.url).href;

const open1 = () => {
  ElMessage({
    showClose: true,
    message: "This is a message.",
  });
};

let text = ref("");
function addServer() {
  axios.get("https://api.uixsj.cn/hitokoto/get?type=social").then(
    (response) => {
      this.text = response.data;
      console.log(text);
    },
    (error) => {
      alert(`加载出错了`);
      console.log(`error:${error.message}`);
    }
  );
}
</script>

<template>
  <div>
    <p>{{ text }}</p>
    <h1>欢迎来到这个网站</h1>
    <el-button :plain="true" @click="open1">message</el-button>
    <el-button @click="addServer">message</el-button>

    <div class="demo-image">
      <el-image :src="imgUrl" fit="cover" />
    </div>
    <RouterLink to="/AppLayout">index</RouterLink>
  </div>

  <RouterView />
</template>

<style scoped>
.el-image {
  width: 300px;
  height: 300px;
}
</style>
