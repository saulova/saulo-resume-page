const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col p-5 border-b border-dotted md:p-10 underline-offset-2"
    >
      <h3 className="mx-auto text-xl font-bold underline mb-7 font-firaCode">
        Sobre Mim
      </h3>
      <div className="text-justify indent-10 font-firaCode">
        Sou engenheiro eletricista, possuo MBA em Gestão de Negócios e Inovação
        e sou autodidata em programação, aos 12 anos entrei em contato com PHP,
        Lua, C++, MS SQL Server e MySQL para fazer servidores de MMORPG, desde
        então, continuei estudando e aprendendo mais sobre outras tecnologias.
      </div>
    </section>
  );
};

export default About;
