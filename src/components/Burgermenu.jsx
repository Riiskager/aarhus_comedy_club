import { useEffect, useState } from "react";
import '../css/burgermenu.css'
import Burger from "./Burger";

export default function BurgerMenu() {
    const [open, setOpen] =useState(false);
    useEffect(() =>{
        if(open){
            document.body.style.overflow="hidden";
        } else {
            document.body.style.overflow="";
        }

    },[open])

    const [openSubmenu, setOpenSubmenu] = useState(null);   

  return (
    <>
   <Burger open={open} setOpen={setOpen} />

   <div className={`menu ${open ? "open" : ""}`}>
    <ul>
        <li className="menuitem"> <a href="/"> Program</a></li>
        <li onClick={() => setOpenSubmenu(openSubmenu === "komikere" ? null : "komikere")}
            className={`submenu ${openSubmenu === "komikere" ? "open" : ""}`}>
            Komikere
        <ul className={`submenuitem ${openSubmenu === "komikere" ? "open" : ""}`}>
            <li className="komikerliste"><a href="/komikerliste">Komikerliste</a></li>
            <li className="impro-holdet"><a href="/impro-holdet">Impro-holdet</a></li>
        </ul>
        </li>

        <li onClick={() => setOpenSubmenu(openSubmenu === "booking" ? null : "booking")}
            className={`submenu ${openSubmenu === "booking" ? "open" : ""}`}>
            Booking
        <ul className={`submenuitem ${openSubmenu === "booking" ? "open" : ""}`}>
            <li className="komikerliste"><a href="/komikerliste">Komikere</a></li>
            <li className="booking"><a href="/booking">Julefrokost</a></li>
            <li className="booking"><a href="/booking">Lej lokalet</a></li>
            <li className="booking"><a href="/booking">Book os</a></li>
        </ul>
         </li>
        <li onClick={() => setOpenSubmenu(openSubmenu === "omos" ? null : "omos")}
            className={`submenu ${openSubmenu === "omos" ? "open" : ""}`}>
            Om os
        <ul className={`submenuitem ${openSubmenu === "omos" ? "open" : ""}`}>
            <li className="komikerliste">Komikerliste</li>
            <li className="impro-holdet">Impro-holdet</li>
        </ul>
      
        </li>
        <li className="menuitem">Gavekort</li>
     
    </ul>   
    <a href="/" aria-label="Forside">
        <img
          src="/img/Logo.svg"
          alt="Aarhus Comedy Club logo"
          className="logoheader"
        />
      </a>
   </div>
   </>
  );
}
