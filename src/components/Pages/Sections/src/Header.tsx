// node_modules
import { useEffect, useState } from "react";

// components/ui
import Logo from "@src-path/components/UI/Logo";
import Menu from "@src-path/components/UI/Menu";

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const links = [
    {
      icon: "/saulo-resume-page/about.svg",
      text: "Sobre Mim",
      url: "#about",
    },
    {
      icon: "/saulo-resume-page/skills.svg",
      text: "Habilidades",
      url: "#skills",
    },
    {
      icon: "/saulo-resume-page/logos/linkedin.svg",
      text: "Linkedin",
      url: "https://www.linkedin.com/in/saulo-va/",
    },
    {
      icon: "/saulo-resume-page/logos/github.svg",
      text: "Github",
      url: "https://github.com/saulova",
    },
  ];

  const handleMobileMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  useEffect(() => {
    const checkMobile = () => {
      if (document.documentElement.clientWidth < 768) {
        return setIsMobile(true);
      }

      return setIsMobile(false);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <header className="flex flex-wrap content-between p-4 border-b border-dotted">
      <div className="flex flex-grow w-1/4">
        <Logo />
      </div>

      <div className="flex justify-end w-3/4 my-auto md:w-0 md:h-0">
        <button className="flex my-auto" onClick={handleMobileMenu}>
          <img
            src={
              isMenuVisible
                ? "/saulo-resume-page/close.svg"
                : "/saulo-resume-page/menu.svg"
            }
            alt="Menu"
            width={40}
            height={40}
          />
        </button>
      </div>

      {(!isMobile || isMenuVisible) && (
        <div className="flex flex-col w-full py-2 my-auto text-white md:w-3/4 md:justify-end md:flex-row font-firaCode">
          <Menu links={links} />
        </div>
      )}
    </header>
  );
};

export default Header;
