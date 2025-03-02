import { useNavigate } from "react-router-dom";
import NavItem from "./ui/NavItem"
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "../ui/theme-provider";

const Header = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
      navigate("/");
    };
    const { theme, setTheme } = useTheme();

    const cycleTheme = () => {
      if (theme === "light") setTheme("dark");
      else if (theme === "dark") setTheme("system");
      else setTheme("light");
    };
    return (
        <div className='stick w-full flex justify-around lg:justify-center gap-x-4 items-center top-0 h-[65px]  border-b'>
            <span className=" font-bold inline-block text-xl cursor-pointer" onClick={handleNavigate}>⚡ Potter API Explorer</span>
            <NavItem/>
            <button
        onClick={cycleTheme}
        className="hidden lg:block p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
      >
        {theme === "light" ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>
        </div>
    )
}

export default Header
