const BASE_URL = "https://fakestoreapi.com";

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

    return res.json();
  } catch (error) {
    console.error("Fetch failed:", error);
    return [];
  }
}