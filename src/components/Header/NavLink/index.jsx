import { motion } from "framer-motion";

export const NavLink = ({ children, caminho }) => {
  return (
    <li className="hover:text-cor2-0 hover:animate-pulse transition-all ease-in-out origin-center font-medium text-sm">
      <motion.div
        whileHover={{ scale:1.05 }}
        whileTap={{scale:0.9}}
      >
        <a href={caminho}>{children}</a>
      </motion.div>
    </li>
  );
};
