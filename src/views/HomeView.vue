<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { storeToRefs } from "pinia";
import { loremTen } from "@/data/lorem";
import { useUserStore } from "@/store/userStore";
import { useUiStore } from "@/store/uiStore";
import { useElementSeen } from "@/composables/useElementSeen.ts";
import { fetchPatchUserAccess } from "@/services/server/userAccess";
import BaseLoader from '@/components/BaseLoader.vue';
import BaseErrorBanner from '@/components/BaseErrorBanner.vue'

const targetImage = ref(null);
const userStore = useUserStore();
const uiStore = useUiStore();
const { user } = storeToRefs(userStore);
const { elementSeen } = useElementSeen(targetImage);

watch(elementSeen, async (newVal) => {
  await fetchPatchUserAccess(user.value?.id.toString(), newVal);
  userStore.elementSeen = newVal;
});

onMounted(() => userStore.getUser());
</script>

<template>
  <BaseErrorBanner v-if="uiStore.isError">
    {{ uiStore.error }}
  </BaseErrorBanner>
  <BaseLoader v-else-if="uiStore.isLoading" />
  <div v-else>
    <p
      v-for="(lor, ind) in loremTen"
      :key="ind"
    >
      {{ ind + 1 }}). {{ lor }}
    </p>
    <img
      v-if="user"
      ref="targetImage"
      :src="user.avatar"
      :alt="`avatar of ${user.first_name} ${user.last_name}`"
    >
    <p
      v-for="(lor, ind) in loremTen"
      :key="ind"
    >
      {{ ind + 11 }}). {{ lor }}
    </p>
  </div>
</template>
