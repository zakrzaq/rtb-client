<script setup lang="ts"></script>

<template>
  <p class="error">
    <span class="loader__message"><slot /></span>
  </p>
</template>

<style scoped>
.error {
  width: 100%;
  min-height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #cf7474;
  border-radius: 10px;
  border: 1px solid #730303;
}

.loader__message {
  color: #730303;
}
</style>
