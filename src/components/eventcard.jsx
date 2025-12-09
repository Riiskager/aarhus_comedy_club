import "../css/eventcard.css";

export default function Eventcard({ event }) {
  const dateObj =
    event?.dato && typeof event.dato.toDate === "function"
      ? event.dato.toDate()
      : new Date(event?.dato);

  let weekday = "";
  let day = "";
  let time = "";
  let month = "";
  try {
    weekday = dateObj.toLocaleDateString("da-DK", { weekday: "short" });
    month = dateObj.toLocaleDateString("da-DK", { month: "short" });
    day = dateObj.getDate();
    time = dateObj.toLocaleTimeString("da-DK", {
      hour: "2-digit",
      minute: "2-digit",
    });

    if (weekday) weekday = weekday.charAt(0).toUpperCase() + weekday.slice(1);
    if (month) month = month.charAt(0).toUpperCase() + month.slice(1);
  } catch {
    weekday = "";
    day = "";
    month = "";
    time = "";
  }

let displayPris;

if (event.pris === 0) {
  displayPris = "Gratis";
} else if (event.pris > 0) {
  displayPris = `${event.pris} kr.`;
} else {
  displayPris = event.pris;
}


  return (
    <section className="show">
      <img src="/img/jcb.png" alt={event.titel} className="event-img" />
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
      <a href="#" className="event-koeb">
        <b>{event.koeb}</b>
      </a>
    </section>
  );
}
