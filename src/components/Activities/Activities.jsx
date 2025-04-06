import { useEffect, useState } from "react";
import { getAllActivities } from "../../services/Activities.service";
import styles from "./Activities.module.scss";
import Filters from "../Filters/Filters";

const Activities = () => {

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getAllActivities()

      .then((activities) => (
        setActivities(activities)
      ))

      .catch(err => console.error("Erreur est survenue lors du chargement des activités", err));
  }, []);

  return (
    <>
      <h3>Activités au programme</h3>

      <Filters />

      <section className={styles.activities_container}>
        {activities?.length > 0 ? (
          activities.map((activity) => (
            <div key={activity.id} className={styles.single_activity}>
              <div>
                <img src={activity.image.guid} alt={activity.image.post_title} />
              </div>
              <h3>
                {activity.title.rendered}
              </h3>
              <div>
                <p>
                  {activity.description}
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