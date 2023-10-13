const baseUrl = import.meta.env.VITE_API_URL
const url = `${baseUrl}/report`

export const fetchReport = async () => {
  try {
    const response = await fetch(url)
    return response.json()
  } catch (error: unknown) {
    console.error(error);
    return { message: (error as Error).message || 'Not able to process request' }
  }
}

