import { NavLink } from "react-router-dom"; // Import NavLink instead of Link
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { BookOpen, Castle, House, User, WandSparkles } from "lucide-react";
const NavItem = () => {
  return (
    <>
    <span className="block lg:hidden cursor-pointer">☰</span>
    <NavigationMenu className="hidden lg:block" >
    <NavigationMenuList className="flex ">

    <NavLink
  to="/"
  className={({ isActive }) =>
    `px-4 py-2 rounded-md transition-colors ${
      isActive
        ? "bg-primary text-white"
        : "text-foreground hover:bg-muted dark:hover:bg-secondary"
    }`
  }
>
  <NavigationMenuItem><House size={14} className="inline" /> Home</NavigationMenuItem>
</NavLink>


<NavLink
  to="/books"
  className={({ isActive }) =>
    `px-4 py-2 rounded-md transition-colors ${
      isActive
        ? "bg-primary text-white"
        : "text-foreground hover:bg-muted dark:hover:bg-secondary"
    }`
  }
>
  <NavigationMenuItem><BookOpen size={14} className="inline" /> Books</NavigationMenuItem>
</NavLink>


<NavLink
  to="/characters"
  className={({ isActive }) =>
    `px-4 py-2 rounded-md transition-colors ${
      isActive
        ? "bg-primary text-white"
        : "text-foreground hover:bg-muted dark:hover:bg-secondary"
    }`
  }
>
  <NavigationMenuItem><User size={14} className="inline" /> Characters</NavigationMenuItem>
</NavLink>


<NavLink
  to="/spells"
  className={({ isActive }) =>
    `px-4 py-2 rounded-md transition-colors ${
      isActive
        ? "bg-primary text-white"
        : "text-foreground hover:bg-muted dark:hover:bg-secondary"
    }`
  }
>
  <NavigationMenuItem><WandSparkles size={14} className="inline" /> Spells</NavigationMenuItem>
</NavLink>


<NavLink
  to="/houses"
  className={({ isActive }) =>
    `px-4 py-2 rounded-md transition-colors ${
      isActive
        ? "bg-primary text-white"
        : "text-foreground hover:bg-muted dark:hover:bg-secondary"
    }`
  }
>
  <NavigationMenuItem><Castle size={14} className="inline"/> Houses</NavigationMenuItem>
</NavLink>

    </NavigationMenuList>
  </NavigationMenu>
  </>
  )
}

export default NavItem
