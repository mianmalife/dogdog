<script setup>
import { RouterView } from 'vue-router'
import request from './axios/request'

request({
  method: 'GET',
  url: '/dog-api/breeds-list'
}).then((res) => {
  console.log(res)
})

</script>

<template>
  <div>
    <RouterView />
  </div>
</template>

<style scoped></style>
