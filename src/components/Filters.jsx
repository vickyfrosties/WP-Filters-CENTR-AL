import { useEffect, useState } from "react";
import { getAllPublic, getAllTypes } from "../services/Filters.service";

const Filters = () => {

  const [types, setTypes] = useState([]);
  const [publics, setPublics] = useState([]);
  const [typeSelection, setTypeSelection] = useState("");
  const [targetSelection, setTargetSelection] = useState("");

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
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setTypeSelection(e.target.value);
    setTargetSelection(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="category-select">
          Catégorie
        </label>
        <select name="types_filter" id="types_filters" onChange={handleChange}>
          <option value="">--Choisissez un type d'activité--</option>
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


        <label htmlFor="category-select">
          Public
        </label>

        <select name="publics_filter" id="publics_filters" onChange={handleChange}>
          <option value="">--Choisissez un public--</option>
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

        <button type="submit">Rechercher</button>
      </form>
    </>
  );
};

export default Filters;