import { ref, onMounted } from 'vue';
import type { User } from '../interfaces/user'

export const useUser = () => {
  const user = ref<User | null>(null);
  const error = ref<unknown>(null);
  const loading = ref(false);

  const fetchUser = async () => {
    const url = 'https://random-data-api.com/api/v2/users'
    try {
      loading.value = true;
      const response = await fetch(url);
      const responseData = await response.json();
      user.value = responseData;
    } catch (e: unknown) {
      error.value = e;
      console.error(e);
    } finally {
      loading.value = false;
    }
  }

  onMounted(() => {
    fetchUser();
  })

  return {
    user,
    error,
    loading,
  };
}

