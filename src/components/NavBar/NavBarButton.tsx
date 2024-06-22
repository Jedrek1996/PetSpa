import React from "react";
import { Link } from "react-router-dom";

interface NavBarButtonProps {
  children: string;
  to: string;
  isActive?: boolean;
  onClick?: () => void;
}

const NavBarButton: React.FC<NavBarButtonProps> = ({
  children,
  to,
  isActive,
  onClick,
}) => {
  return (
    <Link
      to={to}
      className={`px-4 py-2 text-yellow-50 hover:bg-pink-300 rounded-xl ${
        isActive ? "underline" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavBarButton;
