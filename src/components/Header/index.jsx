import { useState } from "react";
import { useEffect } from "react";

export const Header = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScroll(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <header
      className={`fixed top-0 left-0 w-full ${scroll > 0 ? "py-4" : "py-10"} ease-in-out transition-all delay-75 `}
    >
      <nav className="w-3/4 m-auto flex items-center justify-between text-white">
        <span className="text-2xl text-cor3-0"><a href="#">{"< "}Filipi{" />"}</a></span>
        <ul className="flex gap-4">
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>Sobre mim</li>
          <li>Contatos</li>
        </ul>
      </nav>
    </header>
  );
};
