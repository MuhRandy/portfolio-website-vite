import { IconMenu2, IconX } from "@tabler/icons-react";
import { Link } from "react-scroll";
import { cn } from "@/lib/utils";
import { useState } from "react";
import data from "@/assets/data.json";
import { NavData, NavsData } from "@/lib/type";

function Navbar() {
  const { navs }: { navs: NavsData } = data;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuHandler = () => {
    setIsOpen(true);
  };

  const closeMenuHandler = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={cn(
        "flex items-center justify-end",
        "px-10 py-4 bg-white/50 backdrop-blur-sm overflow-x-clip"
      )}
    >
      <ul className="md:flex items-center gap-4 hidden">
        {navs.map((nav: NavData) => {
          return (
            <li key={nav.link}>
              <Link
                activeClass="font-bold"
                className="cursor-pointer"
                to={nav.link}
                spy={true}
                smooth={true}
                duration={500}
                offset={nav.offset}
              >
                {nav.name}
              </Link>
            </li>
          );
        })}
      </ul>

      <IconMenu2 className="md:hidden" onClick={menuHandler} />

      {/* Menu on Tablet or Smartphone */}
      <div
        onClick={closeMenuHandler}
        className={cn(
          "bg-black/50 h-screen invisible",
          "fixed top-0 right-0 left-0 bottom-0",
          "flex justify-end",
          {
            visible: isOpen,
          }
        )}
      >
        <ul
          className={cn(
            "relative left-20",
            "flex flex-col items-center",
            "bg-white w-fit p-3",
            "transition-all duration-700 ease-in-out",
            {
              "left-0": isOpen,
            }
          )}
        >
          <IconX
            className="absolute top-1 right-1 cursor-pointer"
            onClick={closeMenuHandler}
          />

          <li className="text-3xl mb-3">Menu</li>
          {navs.map((nav: NavData) => {
            return (
              <li key={nav.link} className="text-center">
                <hr className="border-black w-[200px] my-2" />
                <Link
                  onClick={closeMenuHandler}
                  activeClass="font-bold"
                  className="cursor-pointer"
                  to={nav.link}
                  spy={true}
                  smooth={true}
                  duration={1000}
                  offset={nav.offset}
                >
                  {nav.name}
                </Link>
              </li>
            );
          })}

          <li>
            <hr className="border-black w-[200px] my-2" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
