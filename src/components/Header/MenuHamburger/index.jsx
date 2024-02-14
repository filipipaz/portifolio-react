import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { NavLink } from "../NavLink";


export const MenuHamburguer = () => {
  const [isActive, setIsActive] = useState(true);
  function showMenu() {
    setIsActive(false);
  }

  function closeMenu() {
    setIsActive(true);
  }

  return (
    <div className="sm:hidden ">
        <BiMenu
          className={`hover:text-cor3-0 cursor-pointer text-2xl ${
            isActive ? "flex" : "hidden"
          }`}
          onClick={showMenu}
        />
        <BiX
          className={`hover:text-cor3-0 cursor-pointer text-2xl sm:hidden ${
            isActive ? "hidden" : "flex"
          }`}
          onClick={closeMenu}
        />
        <ul
          className={`fixed right-16 ${
            isActive ? "hidden" : "flex gap-4"
          } text-center  rounded-sm`}
        >
          <NavLink caminho={"#projetos"}>Projetos</NavLink>
          <NavLink caminho={"#aboutMe"}>Sobre Mim</NavLink>
        </ul>
    </div>
  );
};
