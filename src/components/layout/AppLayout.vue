<template>
  <div class="layout">
    <el-container class="common-layout">
      <AppHeader />
      <!-- <el-container> -->
      <!-- <AppAside /> -->
      <AppMain />
      <!-- </el-container> -->
    </el-container>
  </div>
</template>
  
<script setup>
import { ref } from 'vue'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
import AppHeader from './AppHeader.vue'
// import AppAside from './AppAside.vue'
import AppMain from './AppMain.vue'


</script>

<style scoped>
.layout {
  padding: 40px 0;
  width: 100vw;
}

.common-layout {
  flex-direction: column;
}
</style>