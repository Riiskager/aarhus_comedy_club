import Burgermenu from "./burgermenu"
import '../css/header.css'

export default function Header(){
   
   
   
    return(
        <div className="header">
        <a href="/" aria-label="Forside"> 
        <img src="/img/home.svg" alt="home"></img>
        </a>
        <p>Aarhus Comedy Club</p>
        <Burgermenu />
        </div>
    )
}