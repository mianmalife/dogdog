<template>
    <div class="common-layout">
        <el-container>
            <AppHeader />
            <el-container>
                <AppAside />
                <el-container>
                    <AppMain />
                </el-container>
            </el-container>
        </el-container>
</div>
</template>
  
<script setup>
import { ref } from 'vue'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
import AppAside from './AppAside.vue'
import AppMain from './AppMain.vue'
import AppHeader from './AppHeader.vue'

</script>
  
<style scoped></style>