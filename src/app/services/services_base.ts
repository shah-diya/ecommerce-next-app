const BASE_URL = "https://fakestoreapi.com";

export async function fetchAPI(endpoint: string, options?: RequestInit) {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error("API response not ok");
      return [];
    }

    return res.json();
  } catch (error) {
    console.error("Fetch failed:", error);
    return [];
  }
}