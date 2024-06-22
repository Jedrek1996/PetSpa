import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import NavBarButton from "./NavBarButton";
import Links from "../../utils/Links";
import petIcon from "../../assets/icons/petIcon.png";
import { BsCart2 } from "react-icons/bs";
import ClickableButton from "../Buttons/ClickableButton";

interface LinkItem {
  header: string;
  to: string;
}

const NavBar: React.FC = () => {
  const location = useLocation();
  const [active, setActiveState] = useState(location.pathname);

  return (
    <nav
      className=" flex items-center w-full fixed top-0 z-50"
      style={{ background: "var(--color-green)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/">
              <img
                src={petIcon}
                className="h-9 mr-2 text-white"
                alt="Pet Icon"
              />
            </a>
            <div className="hidden sm:block">
              {Links.map((link: LinkItem, index: number) => (
                <NavBarButton
                  key={index}
                  to={link.to}
                  isActive={link.to === active}
                  onClick={() => setActiveState(link.to)}
                >
                  {link.header}
                </NavBarButton>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button>
              <BsCart2 className="text-yellow-50 text-2xl mr-2" />
            </button>
            <ClickableButton text="Book Appointment" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
