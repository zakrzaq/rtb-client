const baseUrl = import.meta.env.VITE_API_URL;
const url = `${baseUrl}/user-access`;

export const fetchPostUserAccess = async (userId: string | undefined) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId }),
    });
    return response.json();
  } catch (error: unknown) {
    console.error(error);
    throw new Error((error as Error).message || "Not able to process request")
  }
};

export const fetchPatchUserAccess = async (
  userId: string | undefined,
  elementSeen: boolean,
) => {
  try {
    const response = await fetch(`${url}/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ elementSeen }),
    });
    return response.json();
  } catch (error: unknown) {
    console.error(error);
    throw new Error((error as Error).message || "Not able to process request")
  }
};
