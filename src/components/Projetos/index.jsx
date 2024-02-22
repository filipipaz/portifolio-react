import { BiPaperPlane } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { Icone } from "../Icone";

export const Projetos = () => {
  const itens = [
    {
      nome: "TempoApp",
      id: "1",
      img: "/images/portfolio1.jpg",
      alt: "Imagem do TempoApp.",
      repositorio: "https://github.com/filipipaz/TempoApp",
      deploy: "https://tempo-app-rho.vercel.app",
      descricao: "Projeto realizado em HTML,CSS e JavaScript. O foco é praticar o consumo de API. Foi utilizado a WeatherAPI da OpenWeather.",
    },
    {
      nome: "Aluroni",
      id: "2",
      img: "/images/portfolio2.jpg",
      alt: "Imagem da pagina Aluroni",
      repositorio: "https://github.com/filipipaz/aluroni",
      deploy: "https://aluroni-khaki-sigma.vercel.app/",
      descricao: "Projeto realizado com React e TypeScript durante o curso da Alura, simulando a pagina de um restaurante.",
    },{
      nome: "Página de produto",
      id: "3",
      img: "/images/portfolio3.jpg",
      alt: "Imagem da Página de Produto",
      repositorio: "https://github.com/filipipaz/pagina-produto",
      deploy: "https://produto-sepia.vercel.app",
      descricao: "Desafio de responsividade proposto pelo FrontEnd Mentor. Foi realizado com HTML e CSS",
    }
    
    
    
    
  ];

  return (
    <section
      id="projetos"
      className="min-h-screen bg-zinc-800 flex flex-col justify-center items-center box-border pb-4"
    >
      <h1 className="text-4xl font-semibold text-white mt-6 pt-8 text-center">
        Venha conhecer meus <span className="text-cor3-0">projetos</span>!
      </h1>
      <div className="w-40 h-1 bg-cor2-0 m-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
          {itens.map((itens) => (
            <div key={itens.id} className="bg-zinc-900 box-border w-80 md:w-72 xl:w-72 h-hCard rounded-lg p-1 text-white relative flex flex-col items-center">
                <img 
                src={itens.img} 
                alt={itens.alt} className="w-full rounded-lg" />
                <h3 className="text-center text-2xl mt-2">{itens.nome}</h3>
                <div className=" mt-2 w-12 h-1 bg-cor2-0 items-center"></div>
                <p className="px-2 py-2 text-justify text-sm leading-5 tracking-wide indent-2">{itens.descricao}</p>
                <div className="flex text-4xl text-cor3-0 absolute bottom-2 text-center gap-4">
                    <Icone>
                        <abbr title="Deploy">
                          <a href={itens.deploy} target="_blank">
                              <BiPaperPlane />
                          </a>
                        </abbr>
                    </Icone>
                    <Icone>
                        <abbr title="Repositório">
                          <a href={itens.repositorio} target="_blank">
                              <BiLogoGithub />
                          </a>
                        </abbr>
                    </Icone>
                </div>
            </div>
          ))}
      </div>
    </section>
  );
};
