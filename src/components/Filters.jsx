import { useEffect, useState } from "react";
import { getAllTypes } from "../services/Filters.service";

const Filters = () => {

  const [types, setTypes] = useState([]);

  useEffect(() => {
    getAllTypes()

      .then((types) => (
        setTypes(types)
      ))

      .catch(err => console.error("Une erreur est survenue lors du chargement des types", err));

  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="category-select">
          Catégorie
        </label>
        <select name="types_filter" id="types_filters">
          <option value="">--Choisissez un type d'activité--</option>
          {types?.length > 0 ? (
            types.map((type) => (
              <option key={type.id} value={type.name}>
                {type.name}
              </option>
            ))
          ) : (
            <option disabled value="">Aucun filtre trouvé.</option>
          )}
        </select>


        <label htmlFor="category-select">
          Public
        </label>

        <button type="submit">Rechercher</button>
      </form>
    </>
  );
};

export default Filters;