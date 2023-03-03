<script setup>
import { ref, watchEffect } from "vue"
import { useRouter, useRoute } from 'vue-router'
import { Picture as IconPicture } from '@element-plus/icons-vue'
import request from "@/shared/request";
const router = useRouter()
const route = useRoute()
let urls = ref([])

watchEffect(async () => {
  try {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })

    const res = await request({
      method: "GET",
      url: `https://dog.ceo/api/breed/${route.params.dog}/images/random/10`,
    });

    urls.value = res.message;
  } catch (error) {
    setTimeout(() => {
      urls.value = []
    }, 2000);
  }
})
</script>

<template>
  <div class="block" v-show="urls.length > 0">
    <el-image loading="lazy" v-for="url in urls" :src="url" :zoom-rate="1.2" :preview-src-list="[url]" :initial-index="4"
      fit="cover">
      <template #placeholder>
        <div class="image-slot">Loading<span class="dot">...</span></div>
      </template>
      <template #error>
        <div class="image-slot">
          <el-icon><icon-picture /></el-icon>
        </div>
      </template>
    </el-image>
  </div>
  <el-empty description="数据加载中，请稍等" v-show="urls.length == 0"></el-empty>
</template>

<style scoped>
.block {
  width: 100%;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  box-sizing: border-box;
  vertical-align: top;

}

.el-image {
  border: 10px solid #ebebe1;
  border-radius: 1vw;
  margin: 10px auto;
  width: 300px;
  height: 300px;
  display: block;
}

.image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--el-fill-color-light);
  color: var(--el-text-color-secondary);
  font-size: 14px;
}

.dot {
  animation: dot 2s infinite steps(3, start);
  overflow: hidden;
}
</style> 
