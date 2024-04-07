import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Main from "./pages/main/Main";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log(darkMode);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="h-screen w-screen bg-white dark:bg-gray-700">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Main />
      </div>
    </div>
  );
}

export default App;
