<template>
  <div ref="container"></div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import React from "react";
import ReactDOM from "react-dom/client";

const container = ref(null);

onMounted(async () => {
  //const Button = (await import("react_remote/Button")).default;
  const module = await import("react_remote/Button");
  const Button = module.default;

  const root = ReactDOM.createRoot(container.value);
  root.render(React.createElement(Button));
});
</script>
