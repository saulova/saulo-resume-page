// node_modules
import Head from "next/head";

// components/ui
import Background from "@src-path/components/UI/Background";

// components/pages
import Sections from "@src-path/components/Pages/Sections";

const Home = () => {
  return (
    <>
      <Head>
        <title>Saulo - Home</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>"
        />
      </Head>

      <div className="relative flex flex-col text-white bg-slate-900">
        <Background />
        <Sections.Header />
        <Sections.Hero />
        <Sections.About />
        <Sections.Skills />
        <Sections.Footer />
      </div>
    </>
  );
};

export default Home;
