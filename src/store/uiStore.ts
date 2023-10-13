import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUiStore = defineStore("ui", () => {
  const isLoading = ref<boolean>(false);
  const error = ref<string | undefined>();
  
  const isError = computed(() => !!error.value);

  return {
    isLoading,
    error,
    isError,
  };
});

