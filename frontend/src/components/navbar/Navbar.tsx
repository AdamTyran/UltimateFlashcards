import React from "react";
import Brightness3OutlinedIcon from "@mui/icons-material/Brightness3Outlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

interface Props {
  darkMode: boolean;
  toggleDarkMode(): void;
}

const Navbar = ({ darkMode, toggleDarkMode }: Props) => {
  return (
    <div className="flex items-center h-14 bg-neutral-300 dark:bg-gray-800">
      <button
        className="ml-2 h-10 w-10 rounded-full bg-blue-300"
        onClick={toggleDarkMode}
      >
        {darkMode ? <LightModeOutlinedIcon /> : <Brightness3OutlinedIcon />}
      </button>
    </div>
  );
};

export default Navbar;
