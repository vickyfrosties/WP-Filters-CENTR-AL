
const { VITE_URL_WP } = import.meta.env;

export async function getAllTypes() {
  const response = await fetch(VITE_URL_WP + "wp-json/wp/v2/genres");

  const result = await response.json();

  return result;
}

export async function getAllPublic() {
  const response = await fetch(VITE_URL_WP + "wp-json/wp/v2/publics_cibles");

  const result = await response.json();

  return result;
}

export function filteredActivities(activities, targetSelection, typeSelection) {

  return activities.filter(activity => {

    const genres = Array.isArray(activity.genre) ? activity.genre.map(g => g.name) : [];

    const publics = Array.isArray(activity.public) ? activity.public.map(p => p.name) : [];

    const isCategoryMatch = typeSelection === "Toutes les catégories" || genres.includes(typeSelection) || typeSelection === "";

    const isPublicMatch = targetSelection === "Tous les publics" || publics.includes(targetSelection) || targetSelection === "";

    return isPublicMatch && isCategoryMatch;
  });
};
