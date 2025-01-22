import React, { useState } from "react";
import "../css/style.css"; 

function ToggleTheme() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div style={{height:"100px"}} className={isDarkMode ? "dark-mode" : "light-mode"}>
      <button onClick={toggleTheme}>
        {isDarkMode ? "lightmode" : "darkmode"}
      </button>
    </div>
  );
}

export default ToggleTheme;