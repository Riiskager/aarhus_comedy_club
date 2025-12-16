import BurgerMenu from "./burgermenu";
import "../css/header.css";
import { Link } from "react-router";

export default function Header() {
  
  return (
    <div className="header">
      <Link to="/" aria-label="Forside">
        <img src="img/home.svg" alt="home" className="hjemknap"></img>
      </Link>
      <p>Aarhus Comedy Club</p>
      <BurgerMenu />
    </div>
  );
}
