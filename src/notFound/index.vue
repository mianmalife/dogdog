<template>
  <div class="notfound">
    404 not found&nbsp;<el-link type="primary" @click="backTo"
      >back to Index</el-link
    >
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
function backTo() {
  router.back();
}
</script>
<style scoped>
.notfound {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  margin-top: 20px;
}
</style>
