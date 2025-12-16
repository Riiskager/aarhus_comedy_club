

export default function Burger({ open, setOpen }) {

return (
    <button 
      className={`burger ${open ? "open" : ""}`} 
      onClick={() => setOpen(!open)} //Kan skifte mellem open, ikke open
      //Onclick, kør et script, og skift navn(styling)
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}