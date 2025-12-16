import { useEffect, useState } from "react";
import '../css/burgermenu.css'
import Burger from "./Burger";
import { Link } from "react-router";
import useCloseMenuOnNavigate from "./useCloseMenuOnNavigate";

export default function BurgerMenu() {
    //Konstanter til at skifte navn/tilstand på kategorier
    const [open, setOpen] =useState(false);
      const [openSubmenu, setOpenSubmenu] = useState(null);  

      useCloseMenuOnNavigate(setOpen);
      
    useEffect(() =>{
        if(open){
            document.body.style.overflow="hidden"; //Hvis burgermenu er åben, så skal man ikke kunne scrolle på "body"
            //Det er stadig meningen man skal kunne scrolle i menuen... men det kan man ikke
        } else {
            document.body.style.overflow="";
            setOpenSubmenu(null); //Ikke en fejl, kun på grund af "strict mode"
        }

    },[open])


  return (
    <>
   <Burger open={open} setOpen={setOpen} /> {/* Burgerikonet */}

   <div className={`menu ${open ? "open" : ""}`}> {/*Tjekker om "open" er sandt, hvis det er, ændrer navn*/}
    <ul>
        <li className="menuitem"> <Link to="/program"> Program</Link></li>
        <li onClick={() => setOpenSubmenu(openSubmenu === "komikere" ? null : "komikere")} 
            className={`submenu ${openSubmenu === "komikere" ? "open" : ""}`}> {/*Tjekker om submenu er = komiker, hvis ja, skift navn på denne submenu*/}
            Komikere
        <ul className={`submenuitem ${openSubmenu === "komikere" ? "open" : ""}`}> {/*Tjekker om submenu er = komiker, hvis ja, skift navn på disse submenu items*/}
            <li className="komikerliste"><Link to="/komikerliste">Komikerliste</Link></li>
            <li className="impro-holdet"><Link to="/impro-holdet">Impro-holdet</Link></li>
        </ul>
        </li>

        <li onClick={() => setOpenSubmenu(openSubmenu === "booking" ? null : "booking" )}
            className={`submenu mellemrum ${openSubmenu === "booking" ? "open" : ""}`}>
            Booking
        <ul className={`submenuitemb ${openSubmenu === "booking" ? "open" : ""}`}>
            <li className="komikerliste"><Link to="/komikerliste">Komikere</Link></li>
            <li className="bookings"><Link to="/booking">Julefrokost</Link></li>
            <li className="bookings"><Link to="/booking">Firma-comedy</Link></li>
            <li className="booking"><Link to="/booking">Lej lokale</Link></li>
        </ul>
         </li>
        <li onClick={() => setOpenSubmenu(openSubmenu === "omos" ? null : "omos")}
            className={`submenu ${openSubmenu === "omos" ? "open" : ""}`}>
            Om os
        <ul className={`submenuitem ${openSubmenu === "omos" ? "open" : ""}`}>
            <li className="historie"><Link to="/historie">Vores Historie</Link></li>
            <li className="kontakt"><Link to="/kontakt">Kontakt</Link></li>
            <li className="Faq"><Link to="/faq">F.A.Q</Link></li>
        </ul>
      
        </li>
        <li className="menuitem"><Link to="/gavekort">Gavekort</Link></li>
     
    </ul>   
    <Link to="/" aria-label="Forside">
        <img
          src="./img/Logo.svg"
          alt="Aarhus Comedy Club logo"
          className="logoheader"
        />
      </Link>
   </div>
   </>
  );
}
