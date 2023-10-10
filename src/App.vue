<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const routePath = computed(() => useRoute().path)
const buttonName = computed(() => routePath.value === '/report' ? 'Home' : 'View Access Report');
const buttonTo = computed(() => routePath.value === '/report' ? 'Home' : 'Report');
</script>

<template>
  <header class="navbar">
    <RouterLink :to="{ name: buttonTo }" class="cta">
      {{ buttonName }}
    </RouterLink>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.navbar {
  margin-bottom: 25px;
}
</style>
