

export default function Burger({ open, setOpen }) {

return (
    <button 
      className={`burger ${open ? "open" : ""}`} 
      onClick={() => setOpen(!open)}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}