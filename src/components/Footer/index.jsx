import { BiLogoTailwindCss, BiLogoReact } from "react-icons/bi";

export const Footer = () => {
  return (
    <footer className="bg-zinc-800 flex flex-col justify-center items-center p-2 text-cor2-0">
      <span>{"<"}Stacks {"/>"}</span>
      <div className="flex gap-4 text-3xl">
          <BiLogoReact />
          <BiLogoTailwindCss />
      </div>
    </footer>
  );
};
