import NavBarButton from "./NavBarButton";
import petIcon from "../../assets/icons/petIcon.png";
import ClickableButton from "../Buttons/ClickableButton";

const NavBar = () => {
  return (
    <nav
      className="bg-blue-600 h-16 flex items-center w-full fixed top-0 z-50"
      style={{ background: "var(--color-green)" }}
    >
      <div className="container mx-auto flex justify-between">
        <div className="flex space-x-4">
          <img src={petIcon} className="h-9 text-white" alt="Pet Icon" />
          <NavBarButton>About</NavBarButton>
          <NavBarButton>Menu</NavBarButton>
          <NavBarButton>Shop</NavBarButton>
          <NavBarButton>News</NavBarButton>
          <NavBarButton>Contact</NavBarButton>
        </div>

        <div className="flex space-x-4">
          <NavBarButton>Cart</NavBarButton>
          <ClickableButton text="Book Appointment" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
