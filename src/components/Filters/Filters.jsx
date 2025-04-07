import { useEffect, useState } from "react";
import { getAllPublic, getAllTypes } from "../../services/Filters.service";
import styles from "./Filters.module.scss";

const Filters = ({ targetSelection, typeSelection, setTypeSelection, setTargetSelection, onSubmitFilters }) => {

  const [types, setTypes] = useState([]);
  const [publics, setPublics] = useState([]);

  useEffect(() => {
    getAllTypes()
      .then((types) => (
        setTypes(types)
      ))

      .catch(err => console.error("Une erreur est survenue lors du chargement du filtre type", err));

  }, []);

  useEffect(() => {
    getAllPublic()
      .then((publics) => (
        setPublics(publics)
      ))

      .catch(err => console.error("Une erreur est survenur lors du chargement du filtre public", err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitFilters(targetSelection, typeSelection);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "types_filter") {
      setTypeSelection(value);
    } else if (name === "publics_filter") {
      setTargetSelection(value);
    }
  };

  return (
    <>
      <form className={styles.filter_form} onSubmit={handleSubmit}>
        <div className={styles.category_container}>
          <label htmlFor="category-select">
            Catégorie :
          </label>
          <select className={styles.category_select} name="types_filter" id="types_filters" onChange={handleChange} value={typeSelection}>
            <option value="Toutes les catégories">Toutes les catégories</option>
            {types?.length > 0 ? (
              types.map((type) => (
                <option key={type.id} value={type.name} >
                  {type.name}
                </option>
              ))
            ) : (
              <option disabled value="">Aucun filtre trouvé.</option>
            )}
          </select>
        </div>

        <div className={styles.target_container}>
          <label htmlFor="category-select">
            Public :
          </label>
          <select className={styles.target_select} name="publics_filter" id="publics_filters" onChange={handleChange} value={targetSelection}>
            <option value="Tous les publics">Tous les publics</option>
            {publics.length > 0 ? (
              publics.map((target) => (
                <option key={target.id} value={target.name}>
                  {target.name}
                </option>
              ))
            ) : (
              <option value="">Aucun filtre trouvé.</option>
            )}
          </select>
        </div>

        <button className={styles.submit_btn} type="submit">Rechercher</button>
      </form>
    </>
  );
};

export default Filters;