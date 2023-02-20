<template>
    <el-aside width="200px">
        <el-menu>
            <el-sub-menu>
                <template #title>
                    <IEpSetting /><span>oneone</span>
                </template>
                <el-menu-item>
                    <IEpSetting /><span>oneone</span>
                </el-menu-item>
                <el-menu-item>
                    <IEpSetting /><span>oneone</span>
                </el-menu-item>
                <el-menu-item>
                    <IEpSetting /><span>oneone</span>
                </el-menu-item>
            </el-sub-menu>
            <el-menu-item>
                <IEpSetting /><span>oneone</span>
            </el-menu-item>
            <el-menu-item>
                <IEpSetting /><span>oneone</span>
            </el-menu-item>
            <el-menu-item>
                <IEpSetting /><span>oneone</span>
            </el-menu-item>
        </el-menu>
</el-aside>
</template>

<script>
export default {};
</script>

<style scoped>
.el-aside {
    color: var(--el-text-color-primary);
    background: var(--el-color-primary-light-8);
    height: 100vh;
    width: auto;
}

.el-menu {
    border-right: none;
    width: 200px;
}
</style>