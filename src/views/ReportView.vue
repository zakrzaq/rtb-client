<script setup lang="ts">
import { ref, onMounted } from "vue";
import { fetchReport } from "../services/server/report";
import { useUiStore } from '@/store/uiStore'
import BaseLoader from '@/components/BaseLoader.vue';
import BaseErrorBanner from '@/components/BaseErrorBanner.vue'

const uiStore = useUiStore()
const totalVisits = ref<number | null>();
const seenPercentageVisits = ref<number | null>();

onMounted(async () => {
  uiStore.error = undefined
  uiStore.isLoading = true 
  try {
    const { total, seenPercentage } = await fetchReport();
    totalVisits.value = total;
    seenPercentageVisits.value = seenPercentage;
  } catch (err: unknown) {
    uiStore.error = (err as Error).message || 'Something went wrong :(';
  } finally {
    uiStore.isLoading = false;
  }
});
</script>

<template>
  <h1>Report</h1>
  <BaseErrorBanner v-if="uiStore.isError">
    {{ uiStore.error }}
  </BaseErrorBanner>
  <BaseLoader v-else-if="uiStore.isLoading" />
  <div v-else-if="totalVisits && seenPercentageVisits">
    <h3>User visits</h3>
    <p>{{ totalVisits }}</p>
    <h3>Percentage of users seeing avatar</h3>
    <p>{{ seenPercentageVisits }}</p>
  </div>
  <div v-else>
    <p>No data ...</p>
  </div>
</template>

<style scoped></style>
