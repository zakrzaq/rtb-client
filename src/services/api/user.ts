import type { User } from '@/interfaces/user'

export const fetchUser = async (userId?: string | undefined | null): Promise<User | undefined> => {
  const url = `https://random-data-api.com/api/v2/users${
    userId ? `?id=${userId}` : ""
  }`;
  try {0
    const response = await fetch(url);
    return await response.json();
  } catch (err: unknown) {
    console.error(err);
    throw new Error((err as Error).message || "Not able to process request")
  }
};
