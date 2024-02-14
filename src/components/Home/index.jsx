import {
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoSass,
} from "react-icons/bi";
import { Icone } from "../Icone";

export const Home = () => {
  return (
    <section className="bg-zinc-900 h-screen flex flex-col justify-center">
      <div className="border-l-4 border-cor2-0 w-3/4 lg:w-1/2 box-content mx-auto pl-2 text-white ">
        <h2 className="text-xl md:text-4xl font-semibold mb-2">
          Prazer! Meu nome é <span className="text-cor3-0">Filipi Paz</span>
        </h2>
        <h1 className="text-4xl md:text-5xl font-black text-cor3-0">
          Desenvolvedor Front-End<span className="text-white">.</span>
        </h1>
      <div className="flex mx-auto text-white gap-4 mt-4 text-4xl md:text-5xl">
        <Icone>
          <abbr title="HTML5">
          <BiLogoHtml5 />
          </abbr>
        </Icone>
        <Icone>
          <abbr title="CSS3">
            <BiLogoCss3 />
          </abbr>
        </Icone>
        <Icone>
          <abbr title="JavaScript">
            <BiLogoJavascript />
          </abbr>
        </Icone>
        <Icone>
          <abbr title="React">
            <BiLogoReact />
          </abbr>
        </Icone>
        <Icone>
          <abbr title="TailwindCss">
            <BiLogoTailwindCss />
          </abbr>
        </Icone>
        <Icone>
          <abbr title="SASS">
            <BiLogoSass />
          </abbr>
        </Icone>
      </div>
      </div>
    </section>
  );
};
