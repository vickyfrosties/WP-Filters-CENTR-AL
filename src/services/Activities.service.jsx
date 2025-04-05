
const VITE_URL_WP = import.meta.env;

export async function getAllActivities() {
  const response = await fetch(VITE_URL_WP + "wp-json/wp/v2/activites");

  const result = await response.json();

  return result;
}