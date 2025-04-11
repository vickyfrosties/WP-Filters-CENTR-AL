import { useState } from "react";
import Activities from "./components/Activities/Activities";
import Filters from "./components/Filters/Filters";

function App() {

  const [typeSelection, setTypeSelection] = useState("Toutes les catégories");
  const [targetSelection, setTargetSelection] = useState("Tous les publics");

  const [submittedType, setSubmittedType] = useState("Toutes les catégories");
  const [submittedTarget, setSubmittedTarget] = useState("Tous les publics");

  return (
    <>

      <Filters
        targetSelection={targetSelection}
        typeSelection={typeSelection}
        setTargetSelection={setTargetSelection}
        setTypeSelection={setTypeSelection}
        onSubmitFilters={(target, type) => {
          setSubmittedTarget(target);
          setSubmittedType(type);
        }}
      />

      <Activities
        targetSelection={submittedTarget}
        typeSelection={submittedType}
      />
    </>
  );
};

export default App;
