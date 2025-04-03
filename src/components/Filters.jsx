const Filters = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Bouton cliqué !");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="category-select">
          Catégorie
        </label>
        <select autoFocus name="category" id="category">
          <option value="">--Choisissez une catégorie--</option>
          <option value="art">Arts martiaux</option>
          <option value="dance">Danse</option>
          <option value="others">Divers</option>
          <option value="gym_coaching">Gymnastique & Coaching</option>
          <option value="yoga">Yoga</option>
        </select>

        <label htmlFor="category-select">
          Public
        </label>
        <select autoFocus name="category" id="category">
          <option value="">--Choisissez un public--</option>
          <option value="teen-adult">Ados adultes</option>
          <option value="women">Dames</option>
          <option value="kids">Enfants (7 à 13 ans)</option>
          <option value="senior">Seniors</option>
        </select>

        <button type="submit">Rechercher</button>
      </form>
    </>
  );
};

export default Filters;