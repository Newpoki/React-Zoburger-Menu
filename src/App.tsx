import React, { useState } from "react";
import { Zoburger } from "./Zoburger";

const App = () => {
  const [isActive, toggleZoburger] = useState(false);
  const handleZoburgerClick = () => toggleZoburger(!isActive);

  return (
    <Zoburger
      animation="3dxy"
      isActive={isActive}
      onClick={handleZoburgerClick}
    />
  );
};

export default App;
