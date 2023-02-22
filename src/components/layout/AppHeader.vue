<script setup>
import { ref } from "vue";

const activeIndex = ref("1");
const dogList = [
  { id: 1, name: 'hound' },
  { id: 2, name: 'labrador' },
  { id: 3, name: 'husky' },
  { id: 4, name: 'golden' },
  { id: 5, name: 'borzoi' },
  { id: 6, name: 'corgi' },
  { id: 7, name: 'samoyed' },
  { id: 8, name: 'shiba' },
  { id: 9, name: 'eskimo' },
  { id: 10, name: 'akita' }
]
const logoUrl = new URL("@/assets/logo.svg", import.meta.url).href;
</script>

<template>
  <el-header>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect"
      router>
      <el-menu-item index="111" route="/applayout/welcome"><el-avatar :size="60" shape="spuare"
          :src="logoUrl" /></el-menu-item>
      <el-menu-item index="1" route="/applayout/breeds-list/${dog.name}" v-for="dog in dogList">{{ dog.name
      }}</el-menu-item>
    </el-menu>
  </el-header>
</template>

<style scoped>
.el-header {
  position: relative;
  margin: 0 auto;
  color: var(--el-text-color-primary);
  width: 100vw;
}

.flex-grow {
  flex-grow: 1;
}
</style>
