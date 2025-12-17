import "../css/komikercard.css";

export default function Komikercard({ komiker }) {
  const imgSrc = komiker?.image;

  // Da vi har lavet en formular som ejeren af klubben selv skal udfylde,
  // henter vi bare denne info direkte fra databasen og displayer den i komiker kortet.

  return (
    <section className="komiker">
      <img src={imgSrc} alt={komiker?.image || ""} className="komiker-img" />
      <h1 className="komiker-titel">{komiker?.navn}</h1>
      <p className="komiker-beskrivelse">{komiker?.beskrivelse}</p>
      <div className="komiker-blaa">
        <div className="komiker-social">
        <a href={komiker?.instagram}>  <img src="./img/instagram.svg" alt="Instagram" /> </a>
         <a href={komiker?.facebook}>  <img src="./img/facebook.svg" alt="Facebook" /></a>
        </div>
        <a href={komiker?.booking} className="komiker-book">
          <b>Book</b>
        </a>
      </div>
    </section>
  );
}
