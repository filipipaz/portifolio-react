export const NavLink = ({ children , caminho}) => {
  return <li className="hover:text-cor2-0 hover:animate-pulse transition-all ease-in-out origin-center font-medium"><a href={caminho}>{children}</a></li>;
};
