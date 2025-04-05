
// TODO récupérer les taxonomies via leur id genres
const { VITE_URL_WP } = import.meta.env;

export async function getAllTypes() {
  const response = await fetch(VITE_URL_WP + "wp-json/wp/v2/genres");

  const result = await response.json();

  return result;
}

// TODO récupérer les taxonomies via leur id publics_cibles

export async function getAllPublic() {
  const response = await fetch(VITE_URL_WP + "wp-json/wp/v2/publics_cibles");

  const result = await response.json();

  return result;
}