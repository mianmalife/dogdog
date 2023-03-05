<script setup>
import { ref, onMounted, watchEffect } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "@/shared/request";
const breeds = ref([]);
const activeIndex = ref("0");
const router = useRouter();
const route = useRoute();
const handleSelect = (key, keyPath) => {
  activeIndex.value = key;
};
onMounted(() => {
  axios
    .get("https://dog.ceo/api/breeds/list/all")
    .then((response) => {
      breeds.value = response.message
        ? Object.keys(response.message).slice(0, 20) || []
        : [];
      router.push({
        path: `/breedList/${Object.keys(response.message)[0]}`,
        replace: true,
      });
      activeIndex.value = breeds.value[0];
    })
    .catch(() => {
      breeds.value = [];
      activeIndex.value = "";
    });
});
watchEffect(() => {
  if (Object.keys(route.params).length === 0) {
    router.push({
      path: `/breedList/${breeds.value[0]}`,
      replace: true,
    });
    activeIndex.value = breeds.value[0];
  }
});

function backIndex() {
  if (breeds.value) {
    router.push({
      path: `/breedList/${breeds.value[0]}`,
      replace: true,
    });
    activeIndex.value = breeds.value[0];
  }
}
</script>
<template>
  <div>
    <el-container>
      <el-header class="header__box">
        <div class="logo" @click="backIndex">DOGDOG</div>
        <el-menu
          :default-active="activeIndex"
          class="menu__box"
          mode="horizontal"
          router
          menu-trigger="click"
          @select="handleSelect"
        >
          <el-menu-item v-for="breed in breeds" :index="String(breed)">{{
            breed
          }}</el-menu-item>
        </el-menu></el-header
      >
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<style lang="scss" scoped>
.header__box {
  display: flex;
  align-items: center;
  padding: 0 20px;
  flex-shrink: 1;
  .logo {
    width: 80px;
    font-weight: bold;
    cursor: pointer;
  }
  .menu__box {
    padding: 0;
    width: calc(100% - 80px);
    overflow: hidden;
    font-weight: 500;
  }
}
</style>
