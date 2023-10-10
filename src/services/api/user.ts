export const fetchUser = async (userId?: string | undefined ) => {
  const url = `https://random-data-api.com/api/v2/users${userId ? `?id=${userId}` : ''}`
  try {
    console.log(url)
    const response = await fetch(url);
    return await response.json();
  } catch (e: unknown) {
    console.error(e);
  } 
}

