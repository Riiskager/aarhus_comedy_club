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

  return (
    <>
   <Burger open={open} setOpen={setOpen} />

   <div className={`menu ${open ? "open" : ""}`}>
    <ul>
        <li className="menuitem"> <a href="/"> Program</a></li>
        <li className="menuitem">Komikere</li>
        <li className="menuitem">Booking</li>
        <li className="menuitem">Om os</li>
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
