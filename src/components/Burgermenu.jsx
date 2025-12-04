import { useState } from "react";
import '../css/burgermenu.css'


export default function BurgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button 
        className="burger"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </button>

      {/* desktop nav */}
      <nav className="desktop-nav">
        {/*Navlinks */}
      </nav>

      {open && (
        <div className="mobile-menu">
          {/* menu items */}
          <ul>
            <li>Program</li>
            <li>Program</li>
            <li>Program</li>
            <li>Program</li>
          </ul>
        </div>
      )}
    </>
  );
}
