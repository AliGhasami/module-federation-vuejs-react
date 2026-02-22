<!-- host-vue/src/components/VueCounter.vue -->
<template>
  <div class="vue-counter">
    <h3>کامپوننت Vue</h3>
    <p>مقدار شمارنده: {{ counter.count }}</p>
    <button @click="counter.increment()">افزایش (Vue)</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '../stores/counter'

const counter = useCounterStore()
</script>

<style scoped>
.vue-counter {
  border: 2px solid #42b883;
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
}
</style>
