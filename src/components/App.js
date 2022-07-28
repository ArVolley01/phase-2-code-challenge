import React, { useState } from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App() {

  const [filter, setFilter] = useState("")
  const [ageSorting, setAgeSorting] = useState(false)

  const forceUpdate = () => {
    //code that rerenders the app
  }

  const defaultSort = (planet1, planet2) => {
    if (planet1.id === planet2.id) return 0;
    return planet1.id > planet2.id ? 1 : -1
  }

  const ageSort = (planet1, planet2) => {
    if (planet1.born === planet2.born) return 0;
    return planet1.born < planet2.born ? 1 : -1
  }

  return (
    <div>
      <Header />
      <SearchBar filter={setFilter} setSorting={() => setAgeSorting(!ageSorting)}/>
      <RandomButton update={forceUpdate}/>
      <PlaneteersContainer filter={filter} sortFunction={ageSorting ? ageSort : defaultSort}/>
    </div>
  );
}

export default App;
