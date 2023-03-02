<script setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
const breedImages = ref([]);
const route = useRoute();
const fit = "scale-down";

watchEffect(async () => {
  try {
    if (route.params.breed && route.params.breed !== "undefined") {
      const response = await fetch(
        `https://dog.ceo/api/breed/${route.params.breed}/images`
      );
      const data = await response.json();
      breedImages.value = data.message.slice(0, 50);
    }
  } catch (error) {
    breedImages.value = [];
  }
});
</script>
<template>
  <div class="breed__list">
    <div v-for="url in breedImages" :key="url">
      <el-image
        style="width: 100%; height: 100%"
        :src="url"
        :key="url"
        :fit="fit"
        :zoom-rate="1.2"
        :preview-src-list="[url]"
        loading="lazy"
      />
    </div>
  </div>
</template>
<style scoped>
.breed__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 300px;
  grid-gap: 20px;
  overflow-y: auto;
}
.breed__list > div {
  border: 6px solid #fbf9f9;
  border-radius: 4px;
}
</style>
