import { useEffect, useState } from "react";
import '../css/burgermenu.css'
import Burger from "./Burger";

export default function BurgerMenu() {
    //Konstanter til at skifte navn/tilstand på kategorier
    const [open, setOpen] =useState(false);
      const [openSubmenu, setOpenSubmenu] = useState(null);  
      
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
        <li className="menuitem"> <a href="/program"> Program</a></li>
        <li onClick={() => setOpenSubmenu(openSubmenu === "komikere" ? null : "komikere")} 
            className={`submenu ${openSubmenu === "komikere" ? "open" : ""}`}> {/*Tjekker om submenu er = komiker, hvis ja, skift navn på denne submenu*/}
            Komikere
        <ul className={`submenuitem ${openSubmenu === "komikere" ? "open" : ""}`}> {/*Tjekker om submenu er = komiker, hvis ja, skift navn på disse submenu items*/}
            <li className="komikerliste"><a href="/komikerliste">Komikerliste</a></li>
            <li className="impro-holdet"><a href="/impro-holdet">Impro-holdet</a></li>
        </ul>
        </li>

        <li onClick={() => setOpenSubmenu(openSubmenu === "booking" ? null : "booking" )}
            className={`submenu mellemrum ${openSubmenu === "booking" ? "open" : ""}`}>
            Booking
        <ul className={`submenuitemb ${openSubmenu === "booking" ? "open" : ""}`}>
            <li className="komikerliste"><a href="/komikerliste">Komikere</a></li>
            <li className="bookings"><a href="/booking">Julefrokost</a></li>
            <li className="bookings"><a href="/booking">Firma-comedy</a></li>
            <li className="booking"><a href="/booking">Lej lokale</a></li>
        </ul>
         </li>
        <li onClick={() => setOpenSubmenu(openSubmenu === "omos" ? null : "omos")}
            className={`submenu ${openSubmenu === "omos" ? "open" : ""}`}>
            Om os
        <ul className={`submenuitem ${openSubmenu === "omos" ? "open" : ""}`}>
            <li className="historie"><a href="/historie">Vores Historie</a></li>
            <li className="kontakt"><a href="/kontakt">Kontakt</a></li>
            <li className="Faq"><a href="/faq">F.A.Q</a></li>
        </ul>
      
        </li>
        <li className="menuitem"><a href="/gavekort">Gavekort</a></li>
     
    </ul>   
    <a href="/" aria-label="Forside">
        <img
          src="public/img/Logo.svg"
          alt="Aarhus Comedy Club logo"
          className="logoheader"
        />
      </a>
   </div>
   </>
  );
}
