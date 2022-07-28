import React, { useState } from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App() {

  const [filter, setFilter] = useState("")

  return (
    <div>
      <Header />
      <SearchBar filter={setFilter}/>
      <RandomButton />
      <PlaneteersContainer filter={filter}/>
    </div>
  );
}

export default App;
