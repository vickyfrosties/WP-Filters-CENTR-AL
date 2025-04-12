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
                  {activity.intitule}
                </h3>

                <div className={styles.informations}>
                  <div className={styles.hour_public}>
                    <p>{activity.public_du_programme} </p>

                    <div className={styles.hours_container}>
                      <p>{activity.horaire}</p>
                      <p>{activity.horaire_2}</p>
                      <p>{activity.horaire_3}</p>
                      <p>{activity.horaire_4}</p>
                      <p>{activity.horaire_5}</p>
                    </div>
                  </div>

                  <p>
                    {activity.description}
                  </p>

                  <p className={styles.contact}>
                    {activity.nom_du_representant_contact}
                  </p>
                  <p>
                    {activity.numero_de_telephone}
                  </p>
                  <p>
                    {activity.email}
                  </p>

                  <div className={styles.links}>
                    {activity.site_web && activity.site_web.trim() !== "" && (
                      <p>
                        Visitez le site web
                        <a target="_blank" href={activity.site_web}> ici</a>
                      </p>
                    )}

                    {activity.facebook && activity.facebook.trim() !== "" && (
                      <a target="_blank" href={activity.facebook}>Page Facebook</a>
                    )}

                    {activity.instagram && activity.instagram.trim() !== "" && (
                      <a target="_blank" href={activity.instagram}>Page Instagram</a>
                    )}
                    {activity.telegram && activity.telegram.trim() !== "" && (
                      <a target="_blank" href={activity.telegram}>Lien Télégram</a>
                    )}

                    {activity.formulaire_dinscription && activity.formulaire_dinscription.trim() !== "" && (
                      <p>Pour s'inscrire :
                        <a target="_blank" href={activity.formulaire_dinscription}> cliquez ici</a>
                      </p>
                    )}
                  </div>

                </div>
                <div className={styles.link_container}>
                  <a href={activity.link} className={styles.btn_more}>
                    En savoir plus
                  </a>
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