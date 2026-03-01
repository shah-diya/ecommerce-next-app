const BASE_URL = "https://dummyjson.com";

export async function fetchAPI(endpoint: string, options?: RequestInit) {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("API response not ok:", res.status);
      return [];
    }

    const data = await res.json();
    return data.products ?? data;

  } catch (error) {
    console.error("Fetch failed:", error);
    return [];
  }
}