import { useState } from "react";
import '../css/burgermenu.css'


export default function BurgerMenu() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const toggleMenu = () => {
    if (open) {
        document.body.style.overflow = "hidden"
      // start closing animation
      setClosing(true);
      // remove menu after animation duration (500ms)
      setTimeout(() => {
        setOpen(false);
        setClosing(false);
      }, 500);
    } else {
      setOpen(true); // open menu
    }
  };
  
  const [subOpen, setsubOpen] = useState(false);

  return (
    <>
      <button 
        className="burger"
        onClick={toggleMenu}
      >
        {open ? "✕" : "☰"}
      </button>
      
      {/* desktop nav */}
      <nav className="desktop-nav">
        {/*Navlinks */}
      </nav>


       {(open || closing) && (
        <div
          className={`mobile-menu ${open && !closing ? "open" : ""} ${
            closing ? "closing" : ""
          }`}
        >
          <ul>
            <li>Program</li>
            <li onClick={() => setsubOpen(true)}>Komikere</li>
            <li>Booking</li>
            <li>Om os</li>
            <li>Gavekort</li>
          </ul>

           <div className={`submenu ${subOpen ? "open" : ""}`}>
            <ul>
            <li>Sub item 1</li>
            <li>Sub item 2</li>
            <li>Sub item 3</li>
          </ul>
        </div>
        </div>
      )}
    </>
  );
}
