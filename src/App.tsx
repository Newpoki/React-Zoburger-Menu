import React, { useState } from "react";
import { Zoburger } from "./Zoburger";

const App = () => {
  const [isActive, toggleZoburger] = useState(false);
  const handleZoburgerClick = () => toggleZoburger(!isActive);

  return (
    <Zoburger
      animation="vortex-r"
      isActive={isActive}
      onClick={handleZoburgerClick}
      color="teal"
    />
  );
};

export default App;
