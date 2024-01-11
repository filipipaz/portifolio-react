export const AboutMe = () => {
  return (
    <section
      id="aboutMe"
      className="min-h-screen bg-zinc-900 flex flex-col items-center  text-white"
    >
      <h1 className="text-4xl font-semibold  text-center mt-4 pt-8">
        Vamos trabalhar <span className="text-cor3-0">juntos</span>!
      </h1>
      <div className="w-40 h-1 bg-cor2-0 m-8"></div>
      <div className="w-3/4 lg:w-1/2 box-content mx-auto pl-2 text-white">
        <p className="mt-4 text-sm leading-5 tracking-wide text-justify indent-2">
        Possuo 25 anos. Me encontrando na área de Tecnologia, me formei jovem como Técnico em TI pela Microcamp. Comecei a graduação em Gestão da Tecnologia da Informação, e me foi apresentado a programação. Desde então, comecei a estudar por conta iniciando pelo <strong className="text-cor2-0">HTML</strong>, <strong className="text-cor2-0">CSS</strong> e <strong className="text-cor2-0">JavaScript</strong>.
        <br />
        <br />
        <p>Estudo com a Alura a aproximadamente um ano, me encantei com o mundo da programação e com o que ele pode oferecer. Hoje estou estudando</p> <strong className="text-cor2-0">React</strong> e iniciando no <strong className="text-cor2-0">TypeScript</strong>.
        </p>
        <h2 className="my-2 py-2 text-xl text-cor3-0 inline-block border-b-2 border-cor2-0">Soft Skills</h2>
        <ul className="ml-2">
          <li>Paciência</li>
          <li>Trabalho em equipe</li>
          <li>Curiosidade</li>
          <li>Resiliência</li>
          <li>Boa comunicação</li>
        </ul>
      </div>
    </section>
  );
};
