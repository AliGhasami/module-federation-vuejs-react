<script setup lang="tsx">
import { defineAsyncComponent, ref } from 'vue'

const RemoteButton = defineAsyncComponent(()=>import('./dist/remoteEntry.js'))

const buttonText = ref("سلام از Vue!")
</script>

<template>
  <div style="padding: 40px; font-family: system-ui;">
    <h1>Host Vue 3 + Vite</h1>
    <p>اینجا یک دکمه واقعی از پروژه React لود می‌شود:</p>
555555
    <RemoteButton :text="buttonText" />

    <div style="margin-top: 2rem;">
      <input v-model="buttonText" placeholder="متن دکمه را عوض کن" />
    </div>
  </div>
</template>
