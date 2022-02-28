// node_modules
import { useMemo } from "react";

interface MenuProps {
  links: { icon: string; text: string; url: string }[];
}

const Menu = ({ links }: MenuProps) => {
  const menuItems = useMemo(() => {
    return links.map((link, index) => (
      <a
        key={"link-" + index}
        className="flex justify-center py-2 mx-3 my-1 text-white border md:my-auto md:py-0 md:border-none"
        href={link.url}
      >
        <div className="flex justify-center w-5 h-5">
          <img src={link.icon} alt={link.icon} width={20} height={20} />
        </div>
        <span className="my-auto ml-2">{link.text}</span>
      </a>
    ));
  }, [links]);

  return <>{menuItems}</>;
};

export default Menu;
