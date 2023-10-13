import type { UserSession, User } from "@/interfaces/user";

export const saveUserSession = (userId: string | undefined) => {
  if (userId) sessionStorage.setItem("USER", JSON.stringify({ userId }));
};

export const loadUserSession = () => {
  const keyValue = sessionStorage.getItem("USER");
  return keyValue
    ? (JSON.parse(keyValue) as UserSession)
    : { userId: null };
};

export const saveUserData = (data: User | undefined | null) => {
  if (data) sessionStorage.setItem("DATA", JSON.stringify(data));
};

export const loadUserData = () => {
  const keyValue = sessionStorage.getItem("DATA");
  if (keyValue) return JSON.parse(keyValue) as User;
};
