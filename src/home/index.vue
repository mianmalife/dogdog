<script setup>
import { ref, onMounted } from "vue";
const breeds = ref([]);
const activeIndex = ref("0");
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath);
  activeIndex.value = key;
};
onMounted(() => {
  fetch("https://dog.ceo/api/breeds/list/all").then((response) => {
    response.json().then((res) => {
      console.log(res);
      breeds.value = res.message
        ? Object.keys(res.message).slice(0, 20) || []
        : [];
    });
  });
});
</script>
<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="true"
        :popper-offset="12"
        @select="handleSelect"
      >
        <el-menu-item index="logo">LOGO</el-menu-item>
        <el-menu-item v-for="(breed, index) in breeds" :index="String(index)">{{
          breed
        }}</el-menu-item>
      </el-menu></el-header
    >
    <el-main> content</el-main>
  </el-container>
</template>
