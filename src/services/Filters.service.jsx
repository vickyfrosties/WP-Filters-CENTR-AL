
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
    let isPublicMatch = targetSelection === "Tous les publics" || activity.public === targetSelection;

    let isCategoryMatch = typeSelection === "Toutes les catégories" || activity.categorie === typeSelection;

    return isPublicMatch && isCategoryMatch;
  });
};