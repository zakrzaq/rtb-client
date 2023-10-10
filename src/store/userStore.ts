import { defineStore } from "pinia";
import { ref } from "vue";
import {
  loadUserSession,
  saveUserSession,
  loadUserData,
  saveUserData,
} from "@/helpers/userSession";
import { fetchUser } from "@/services/api/user";
import { User } from "@/interfaces/user";

const { userId: sessionUserId } = loadUserSession();
const userData = loadUserData();

export const useUserStore = defineStore("user", () => {
  const userId = ref<string | undefined>(sessionUserId);
  const elementSeen = ref(false);
  const user = ref<User | undefined | null>(userData);

  const getUser = async () => {
    const { userId: sessionUserId } = loadUserSession();
    if (sessionUserId === "no_user_id") {
      user.value = await fetchUser();
      saveUserData(user.value);
      // WARN : not a PRODUCTION grade solution
      // this is enable user data being persisted on reload
      // since API doesn't support query by ID
    }
    if (sessionUserId !== userId.value) {
      user.value = await fetchUser(userId.value);
      saveUserData(user.value);
    }
    if (sessionUserId === userId.value) user.value = loadUserData();
    userId.value = user.value?.id.toString();
    saveUserSession(userId.value);
  };

  return {
    userId,
    elementSeen,
    user,
    getUser,
  };
});
