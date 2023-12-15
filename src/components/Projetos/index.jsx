import { BiPaperPlane } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { Icone } from "../Icone";

export const Projetos = () => {
  const itens = [
    {
      nome: "TempoApp",
      id: "1",
      img: "../../src/assets/images/portfolio1.jpg",
      alt: "Imagem do TempoApp.",
      repositorio: "https://github.com/filipipaz/TempoApp",
      deploy: "https://tempo-app-rho.vercel.app",
      descricao: "Projeto realizado em HTML,CSS e JavaScript. O foco é praticar o consumo de API. Foi utilizado a WeatherAPI da OpenWeather.",
    },
    {
      nome: "Página de produto",
      id: "2",
      img: "../../src/assets/images/portfolio2.jpg",
      alt: "",
      repositorio: "https://github.com/filipipaz/pagina-produto",
      deploy: "https://produto-sepia.vercel.app",
      descricao: "Desafio de responsividade proposto pelo FrontEnd Mentor. Foi realizado com HTML e CSS",
    },
    {
      nome: "Página de produto",
      id: "3",
      img: "../../src/assets/images/portfolio2.jpg",
      alt: "",
      repositorio: "#",
      deploy: "#",
      descricao: "Desafio de responsividade proposto pelo FrontEnd Mentor. Foi realizado com HTML e CSS",
    },
    
    
    
  ];

  return (
    <section
      id="projetos"
      className="min-h-screen bg-zinc-800 flex flex-col justify-center items-center box-border"
    >
      <h1 className="text-4xl font-semibold text-white mt-4">
        Venha conhecer meus <span className="text-cor3-0">projetos</span>!
      </h1>
      <div className="w-40 h-1 bg-cor2-0 m-8"></div>
      <div className="grid grid-cols-3 gap-4 justify-center">
          {itens.map((itens) => (
            <div key={itens.id} className="bg-zinc-900 box-border w-72 h-96 rounded-lg p-1 text-white relative flex flex-col items-center">
                <img 
                src={itens.img} 
                alt={itens.alt} className="w-full rounded-lg" />
                <h3 className="text-center text-2xl">{itens.nome}</h3>
                <div className=" mt-2 w-12 h-1 bg-cor2-0 items-center"></div>
                <p className="px-2 py-2 text-justify text-sm leading-5 tracking-wide">{itens.descricao}</p>
                <div className="flex text-4xl text-cor3-0 absolute bottom-4 left-24 text-center gap-4">
                    <Icone>
                        <a href={itens.deploy} target="_blank">
                            <BiPaperPlane />
                        </a>
                    </Icone>
                    <Icone>
                        <a href={itens.repositorio} target="_blank">
                            <BiLogoGithub />
                        </a>
                    </Icone>
                </div>
            </div>
          ))}
      </div>
    </section>
  );
};
