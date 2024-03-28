import React from "react";
import Brightness3OutlinedIcon from "@mui/icons-material/Brightness3Outlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NavbarButtons from "../../utils/navbar-buttons";
import { Link } from "react-router-dom";

interface Props {
  darkMode: boolean;
  toggleDarkMode(): void;
}

const Navbar = ({ darkMode, toggleDarkMode }: Props) => {
  return (
    <nav className="flex items-center justify-between h-14 bg-neutral-300 dark:bg-gray-800 shadow">
      <button
        className="ml-2 h-10 w-10 rounded-full bg-gray-600  dark:bg-neutral-300"
        onClick={toggleDarkMode}
      >
        {darkMode ? <LightModeOutlinedIcon /> : <Brightness3OutlinedIcon />}
      </button>
      <div className="flex mx-auto text-center gap-2">
        {NavbarButtons.map((item) => (
          <div key={item.id}>
            {/* <Link */}
            <div
              // to={item.path}
              className="h-10 bg-neutral-400 rounded-md border-solid text-white hover:bg-neutral-500 p-2 font-bold"
            >
              {item.name}
              {/* </Link> */}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
