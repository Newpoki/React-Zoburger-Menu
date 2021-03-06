import React, { useState } from "react";
import { Zoburger } from "./Zoburger";

const App = () => {
  const [isActive, toggleZoburger] = useState(false);
  const handleZoburgerClick = () => toggleZoburger(!isActive);

  return (
    <Zoburger
      animation="vortex-r"
      color="teal"
      isActive={isActive}
      label="Menu"
      onClick={handleZoburgerClick}
    />
  );
};

export default App;
