import { useEffect, useState } from "react";
import { getAllActivities } from "../../services/Activities.service";
import styles from "./Activities.module.scss";
import { filteredActivities } from "../../services/Filters.service";

const Activities = ({ targetSelection, typeSelection }) => {

  const [activities, setActivities] = useState([]);
  const [allActivities, setAllActivities] = useState([]);

  useEffect(() => {
    getAllActivities()

      .then((activities) => {
        setAllActivities(activities);
        setActivities(activities);
      })

      .catch(err => console.error("Erreur est survenue lors du chargement des activités", err));
  }, []);

  useEffect(() => {

    const filtered = filteredActivities(allActivities, targetSelection, typeSelection);
    setActivities(filtered);
  }, [targetSelection, typeSelection, allActivities]);

  return (
    <>
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
                  <a href={activity.inscription}></a>
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