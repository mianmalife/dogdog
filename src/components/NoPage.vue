<template>
    <el-empty description="数据请求失败啦">
        <el-button @click="jump">去往首页</el-button>
    </el-empty>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const dogList = ref([])
const router = useRouter()

dogList.value = JSON.parse(localStorage.getItem('menu'))
const jump = () => {
    router.push({ path: `/appLayout/breeds-list/${dogList.value[0]}`, replace: true })
}
</script>

<style lang="scss" scoped></style>