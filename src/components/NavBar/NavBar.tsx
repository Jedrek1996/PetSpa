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
      className="bg-blue-600 h-16 flex items-center w-full fixed top-0 z-50"
      style={{ background: "var(--color-green)" }}
    >
      <div className="container mx-auto flex justify-between">
        <div className="flex space-x-4 text-center mt-2">
          <a href="/">
            <img src={petIcon} className="h-9 text-white" alt="Pet Icon" />
          </a>
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

        <div className="flex items-center space-x-4">
          <button>
            <BsCart2 className="text-yellow-50 text-2xl mr-2" />
          </button>
          <ClickableButton text="Book Appointment" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
