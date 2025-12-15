import "../css/komikercard.css";

export default function Komikercard({ komiker }) {
  const imgSrc = komiker?.image;


  return (
    <section className="komiker">
      <img src={imgSrc} alt={komiker?.image || ""} className="komiker-img" />
      <h1 className="komiker-titel">{komiker?.navn}</h1>
      <p className="komiker-beskrivelse">{komiker?.beskrivelse}</p>
      <div className="komiker-blaa">
        <div className="komiker-social">
          <img src="/img/instagram.svg" alt="Instagram" />
          <img src="/img/facebook.svg" alt="Facebook" />
        </div>
        <a href={komiker?.booking} className="komiker-book">
          <b>Book</b>
        </a>
      </div>
    </section>
  );
}
