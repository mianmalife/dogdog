<template>
  <div class="layout">
    <el-container class="common-layout">
      <AppHeader />
      <AppMain />
    </el-container>
  </div>
</template>
  
<script setup>
import AppHeader from './AppHeader.vue'
import AppMain from './AppMain.vue'
</script>

<style scoped>
.common-layout {
  flex-direction: column;
}
</style>