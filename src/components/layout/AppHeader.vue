<script setup>
const activeIndex = ref('1')
const logoUrl = new URL('@/assets/logo.svg', import.meta.url).href
</script>

<template>
    <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
            @select="handleSelect" router>
            <el-menu-item index="/applayout/welcome"><el-avatar :size="60" shape="spuare" :src="logoUrl" /></el-menu-item>
            <div class="flex-grow" />
            <el-menu-item index="1">Processing Center</el-menu-item>
            <el-sub-menu index="2">
                <template #title>Workspace</template>
                <el-menu-item index="2-1" route="/applayout/breeds-list">狗狗品种</el-menu-item>
            </el-sub-menu>
        </el-menu>
    </el-header>
</template>
    
<style scoped>
.el-header {
    position: relative;

    color: var(--el-text-color-primary);
    width: 100vw;
}

.flex-grow {
    flex-grow: 1;
}
</style>
