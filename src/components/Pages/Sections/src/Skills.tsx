// utils
import SpecificSkill from "./Utils/SpecificSkill";

const Skills = () => {
  const skills = [
    {
      name: "Front-end",
      data: [
        {
          alt: "React.js Logo",
          src: "/saulo-resume-page/logos/react.svg",
          description: "React.js",
        },
        {
          alt: "Next.js Logo",
          src: "/saulo-resume-page/logos/next.svg",
          description: "Next.js",
        },
        {
          alt: "TypeScript Logo",
          src: "/saulo-resume-page/logos/ts.svg",
          description: "TypeScript",
        },
        {
          alt: "PixiJS Logo",
          src: "/saulo-resume-page/logos/pixi.svg",
          description: "PixiJS",
        },
        {
          alt: "Style Representation",
          src: "/saulo-resume-page/logos/css.svg",
          description: "CSS Frameworks",
        },
        {
          alt: "More Representation",
          src: "/saulo-resume-page/logos/more.svg",
          description: "Entre outros",
        },
      ],
    },
    {
      name: "Back-end",
      data: [
        {
          alt: "Node.js Logo",
          src: "/saulo-resume-page/logos/node.svg",
          description: "Node.js",
        },
        {
          alt: "Express Logo",
          src: "/saulo-resume-page/logos/express.svg",
          description: "Express",
        },
        {
          alt: "TypeScript Logo",
          src: "/saulo-resume-page/logos/ts.svg",
          description: "TypeScript",
        },
        {
          alt: "Rust Logo",
          src: "/saulo-resume-page/logos/rust.svg",
          description: "Rust",
        },
        {
          alt: "Actix Logo",
          src: "/saulo-resume-page/logos/actix.svg",
          description: "Actix Web",
        },
        {
          alt: "Python Logo",
          src: "/saulo-resume-page/logos/python.svg",
          description: "Python",
        },
        {
          alt: "Flask Logo",
          src: "/saulo-resume-page/logos/flask.svg",
          description: "Flask",
        },
        {
          alt: "Database Representation",
          src: "/saulo-resume-page/logos/dbs.svg",
          description: "SQL DBs",
        },
        {
          alt: "More Representation",
          src: "/saulo-resume-page/logos/more.svg",
          description: "Entre outros",
        },
      ],
    },
    {
      name: "Outros",
      data: [
        {
          alt: "Docker Logo",
          src: "/saulo-resume-page/logos/docker.svg",
          description: "Docker",
        },
        {
          alt: "Debian Logo",
          src: "/saulo-resume-page/logos/debian.svg",
          description: "Debian",
        },
        {
          alt: "Electronics Representation",
          src: "/saulo-resume-page/logos/iot.svg",
          description: "Eletrônica",
        },
      ],
    },
  ];

  return (
    <div
      id="skills"
      className="flex flex-col content-center justify-center w-full py-10 text-center border-b border-dotted font-firaCode"
    >
      <h3 className="mb-1 text-xl font-bold underline underline-offset-2">
        Habilidades
      </h3>
      {skills.map((skill, index) => (
        <div key={"skill-" + index}>
          <h4 className="my-3 text-lg">{skill.name}</h4>
          <SpecificSkill cards={skill.data} />
        </div>
      ))}
    </div>
  );
};

export default Skills;
