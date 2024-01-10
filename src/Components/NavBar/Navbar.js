import "./Navbar.css";
import logo from "../../Utils/images/logo.png";

export const Navbar = () => {
  return (
    <nav className="navbar fixed-top sticky-top navbar-expand-lg navbarColor">
      <div className="container-fluid mt-2 mb-2">
        <span className="navbar-brand">
          <img src={logo} width="75" height="44" alt="dados-logo" />
          <span className="m-3 titleStyle">
          </span>
        </span>
      </div>
    </nav>
  );
};
