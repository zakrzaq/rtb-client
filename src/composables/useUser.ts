import { ref, onMounted } from 'vue';
import type { User } from '@/interfaces/user'

export const useUser = (userId: string | null | undefined) => {
  const user = ref<User | null>(null);
  const error = ref<unknown>(null);
  const loading = ref(false);

  const fetchUser = async () => {
    console.log('compos', userId)
    const url = `https://random-data-api.com/api/v2/users${userId ? `?id=${userId}` : ''}`
    console.log(url)
    try {
      loading.value = true;
      const response = await fetch(url);
      const responseData = await response.json();
      user.value = responseData;
      console.log(user.value);
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

