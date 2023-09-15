import logo from "../../assets/images/logo.png";
import "./Header.scss";

function Header() {
  return (
    <header className="Header">
      <img src={logo} alt="Logo" className="logo" />
      <ul>
        <li>Accueil</li>
        <li>A propos</li>
      </ul>
    </header>
  );
}

export default Header;
