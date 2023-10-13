import { defineStore } from "pinia";
import { ref } from "vue";
import {
  loadUserSession,
  loadUserData,
  saveUserData,
} from "@/helpers/userSession";
import { fetchUser } from "@/services/api/user";
import { fetchPostUserAccess } from "@/services/server/userAccess";
import { useUiStore } from "./uiStore";
import { User } from "@/interfaces/user";

const uiStore = useUiStore();
const { userId: sessionUserId } = loadUserSession();
const userData = loadUserData();

export const useUserStore = defineStore("user", () => {
  const userId = ref<string | undefined>(sessionUserId);
  const elementSeen = ref(false);
  const user = ref<User | undefined | null>(userData);

  const getUser = async () => {
    uiStore.isLoading = true;
    uiStore.error = undefined;
    try {
      const { userId: sessionUserId } = loadUserSession();
      if (sessionUserId === "no_user_id") {
        // TODO: get rid of this!
        user.value = await fetchUser();
        await fetchPostUserAccess(user.value?.id.toString());
        saveUserData(user.value);
        // WARN : not a PRODUCTION grade solution
        // this is enable user data being persisted on reload
        // since random API doesn't support query by ID
      }
      if (sessionUserId !== userId.value) {
        await fetchPostUserAccess(user.value?.id.toString());
        user.value = await fetchUser(userId.value);
        saveUserData(user.value);
      }
      if (sessionUserId === userId.value) user.value = loadUserData();
      userId.value = user.value?.id.toString();
    } catch (err: unknown) {
        uiStore.error = (err as Error).message || 'We had an issue :(';
    } finally {
      uiStore.isLoading = false;
    }
  };

  return {
    userId,
    elementSeen,
    user,
    getUser,
  };
});
