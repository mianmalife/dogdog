<script setup>
import { ref, onMounted } from "vue";
const count = ref(0);
onMounted(() => {
  count.value++;
});
</script>
<template>
  <div>
    {{ count }}
  </div>
</template>
