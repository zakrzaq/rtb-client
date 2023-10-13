<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchReport } from '../services/server/report'

const totalVisits = ref<number | null>()
const seenPercentageVisits = ref<number | null>()

onMounted(async () => {
  const { total, seenPercentage } = await fetchReport()
  totalVisits.value = total
  seenPercentageVisits.value = seenPercentage
})
</script>

<template>
  <h1>Report</h1>
  <div v-if="totalVisits && seenPercentageVisits">
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
