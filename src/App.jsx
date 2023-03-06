import { useState } from "react";
import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import { MenuList } from "./components/MenuList/MenuList";
import s from "./style.module.css";

// Define a global style for the App component
const appStyle = {
  fontFamily: "'Roboto', sans-serif",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
};

// Define a style for the h1 and h2 elements
const headingStyle = {
  textAlign: "center",
};

export function App() {
  const [currentDificulty, setCurrentDifficulty] = useState("");
  const onMenuListItemClick = (difficulty) => {
    setCurrentDifficulty(difficulty);
  }

  return (
    <div style={appStyle}>
      <div>
        <h1 style={headingStyle}>Picker app</h1>
        <h2 style={headingStyle}>Select your React difficulty</h2>
        <div className={s.workspace}>
          <MenuList difficulty={currentDificulty} onItemClick={onMenuListItemClick}/>
          <DisplayDifficulty difficulty={currentDificulty}/>
        </div>
      </div>
    </div>
  );
}
