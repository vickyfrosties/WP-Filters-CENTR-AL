
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

    const genres = activity.genre[0]?.name;

    const publics = activity?.public[0]?.name;

    const isCategoryMatch = typeSelection === "Toutes les catégories" || genres === typeSelection;

    const isPublicMatch = targetSelection === "Tous les publics" || publics === targetSelection;

    return isPublicMatch && isCategoryMatch;
  });
};