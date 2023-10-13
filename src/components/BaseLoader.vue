<script setup lang="ts"></script>

<template>
  <div class="loader">
    <span class="loader__spinner" />
  </div>
</template>

<style scoped>
.loader {
  width: 100%;
  min-height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader__spinner {
  width: 48px;
  height: 48px;
  border: 5px solid #FFF;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
</style>
