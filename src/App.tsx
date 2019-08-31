import React, { useState } from "react";
import { Hamburger } from "./Hamburger";

const App = () => {
  const [isActive, toggleHamburger] = useState(false);
  const handleHamburgerClick = () => toggleHamburger(!isActive);

  return <Hamburger animation="3dx" isActive={isActive} onClick={handleHamburgerClick} />;
};

export default App;
