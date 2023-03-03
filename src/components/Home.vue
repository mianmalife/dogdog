<script setup>
import { ref, onMounted } from "vue";
import { RouterLink, RouterView, useRouter, useRoute } from "vue-router";
// import { ElMessage } from "element-plus";
import axios from "axios";
import request from '@/shared/request.js'

const router = useRouter()
const route = useRoute()
const dogList = ref([])
const imgUrl = new URL("../assets/images/home.jpg", import.meta.url).href;
let text = ref("");
const open1 = () => {
  axios.get("https://api.uixsj.cn/hitokoto/get?type=social").then(
    (response) => {
      text.value = response.data;
    },
    (error) => {
      alert(`加载出错了`);
      console.log(`error:${error.message}`);
    }
  );
  ElMessage({
    showClose: true,
    message: text,
    grouping: true,
  });
};

const jump = () => {
  router.push({ path: `/appLayout/breeds-list/${dogList.value[0]}`, replace: true })
}

onMounted(async () => {
  const res = await request({
    method: 'GET',
    url: 'https://dog.ceo/api/breeds/list',
  });
  dogList.value = res.message
  localStorage.setItem('menu', JSON.stringify(res.message))
  // console.log(localStorage)
})

</script>

<template>
  <div>
    <h1 class="animate__animated animate__rubberBand">欢迎来到这个网站</h1>
    <div class="wraper">
      <div class="animate__animated animate__swing">
        <el-image :src="imgUrl" fit="cover" />
      </div>
      <div class="container animate__animated animate__bounceInRight">
        <el-button :plain="true" @click="open1">开心一下吧</el-button>
        <el-button @click="jump">去往首页</el-button>
      </div>
    </div>
  </div>
  <RouterView />
</template>

<style scoped>
h1 {
  font-size: 50px;
  text-align: center;
  color: #6b9c4e;
}

.wraper {
  width: 80vw;
  margin: 0 auto;
  padding: 0 auro;
  display: flex;
  justify-content: center;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.el-image {
  width: 300px;
  height: 300px;
  margin-right: 50px;
}
</style>
