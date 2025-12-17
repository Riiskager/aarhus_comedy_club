import "../css/eventcard.css";
import { Link } from "react-router";
export default function Eventcard({ event }) {

  // `event.dato` er altid en Firestore Timestamp, så konverter direkte til Date.
  const dateObj = event.dato.toDate();

  let weekday = "";
  let day = "";
  let time = "";
  let month = "";
  // Formater dato og tid til dansk visning.
  weekday = dateObj.toLocaleDateString("da-DK", { weekday: "short" });
  month = dateObj.toLocaleDateString("da-DK", { month: "short" });
  day = dateObj.getDate();
  time = dateObj.toLocaleTimeString("da-DK", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Sørg for stort begyndelsesbogstav — lidt pænere at se på.
  if (weekday) weekday = weekday.charAt(0).toUpperCase() + weekday.slice(1);
  if (month) month = month.charAt(0).toUpperCase() + month.slice(1);

  // Visning af pris: Hvis det er 0, skriv 'Gratis' — ellers skriv beløbet.
  let displayPris;
  if (event.pris === 0) {
    displayPris = "Gratis";
  } else if (event.pris > 0) {
    displayPris = `${event.pris} kr.`; // Standardvisning af pris.
  }

  return (
    <section className="show">
      <img src={event.img} alt={event.titel} className="event-img" />
      <div className="event-dato">
        <span className="dato-weekday">{weekday}</span>
        <span className="dato-day">{day}</span>
        <span className="dato-month">{month}</span>
      </div>
      <div className="event-tid">
        <span className="dato-tid">{time}</span>
      </div>
      <h1 className="event-titel">{event.titel}</h1>
      <p className="event-kort-beskrivelse">{event.kort_beskrivelse}</p>
      <p className="event-pris">{displayPris}</p>
      <Link to={`/event/${event.id}`} key={event.id} className="event-koeb">
        <b>Køb billet</b>
      </Link>
    </section>
  );
}
