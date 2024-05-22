// utils/cms.js

export async function fetchPartnersFromCMS() {
  try {
    const response = await fetch("https://www.saidtex.ma/api/partners", { cache: 'no-store' });
    if (!response.ok) {
      throw new Error("Failed to fetch partners");
    }
    const partners = await response.json();
    return partners;
  } catch (error) {
    console.error("Error fetching partners:", error);
    return []; // or handle error as needed
  }
}
