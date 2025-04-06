import { useEffect, useState } from "react";
import { getAllActivities } from "../../services/Activities.service";
import styles from "./Activities.module.scss";
import { filteredActivities } from "../../services/Filters.service";

const Activities = ({ targetSelection, typeSelection }) => {

  const [activities, setActivities] = useState([]);
  const [filteredActivitiesList, setFilteredActivitiesList] = useState([]);

  useEffect(() => {
    getAllActivities()
      .then((activities) => {
        const filteredActivity = filteredActivities(activities, targetSelection, typeSelection);
        setFilteredActivitiesList(filteredActivities(activities, targetSelection, typeSelection));

        console.log("Public sélectionné :", targetSelection);
        console.log("Catégorie sélectionnée :", typeSelection);

        setActivities(filteredActivity);
      })
      .catch(err => console.error("Erreur est survenue lors du chargement des activités", err));
  }, [targetSelection, typeSelection]);

  useEffect(() => {
    setFilteredActivitiesList(filteredActivities(activities, targetSelection, typeSelection));
  }, [targetSelection, typeSelection, activities]);

  return (
    <>
      <h3>Activités au programme</h3>

      <section className={styles.activities_container}>
        {activities?.length > 0 ? (
          activities
            .slice()
            .sort((a, b) => a.title.rendered.localeCompare(b.title.rendered))
            .map((activity) => (
              <div key={activity.id} className={styles.single_activity}>
                <div>
                  <img src={activity.image.guid} alt={activity.image.post_title} />
                </div>
                <h3>
                  {activity.title.rendered}
                </h3>
                <div className={styles.informations}>
                  <p>
                    {activity.description}
                  </p>
                  <p>
                    {activity.contact}
                  </p>
                </div>
              </div>
            ))
        ) : (
          <p>Aucune activité correspondante.</p>
        )}
      </section>
    </>
  );
};

export default Activities;