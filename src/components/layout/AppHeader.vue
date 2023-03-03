<script setup>
import { ref, onMounted } from "vue";
import request from "../../shared/request";

const activeIndex = ref("0");
const dogList = ref([])
const logoUrl = new URL("@/assets/logo.svg", import.meta.url).href;
const handleSelect = (key, keyPath) => {
  activeIndex.value = key
}

onMounted(() => {
  dogList.value = JSON.parse(localStorage.getItem('menu'))
  activeIndex.value = dogList.value[0]
})

</script>

<template>
  <el-header>
    <el-affix position="top">
      <el-menu :default-active="activeIndex" mode="horizontal" :ellipsis="true" @select="handleSelect" router>
        <el-menu-item index="/"><el-avatar :size="60" shape="square" :src="logoUrl" /></el-menu-item>
        <el-menu-item :index="dog" v-for="dog in dogList">
          {{ dog }}
        </el-menu-item>
      </el-menu>
    </el-affix>
  </el-header>
</template>

<style scoped>
.el-header {
  position: relative;
  color: var(--el-text-color-primary);
}

.el-avatar {
  --el-avatar-bg-color: #ffffff;
}

.flex-grow {
  flex-grow: 1;
}
</style>

<style>
.el-menu--popup {
  height: 500px;
  overflow-y: auto;
}
</style>
