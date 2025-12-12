import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Eventcard from "../components/eventcard";
import ForsideKarrusel from "../components/forside-karrusel";
import "../css/banner.css";
import "../css/forside.css";

export default function Forside() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function LoadEvents() {
      const ref = collection(db, "events");
      const snap = await getDocs(ref);

      const list = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

const sorted = list.sort((a, b) => {
  const aTime = a.dato?.toDate
    ? a.dato.toDate().getTime()
    : new Date(a.dato).getTime();
  const bTime = b.dato?.toDate
    ? b.dato.toDate().getTime()
    : new Date(b.dato).getTime();

  return aTime - bTime;
});

      console.log("loaded events (sorted)", sorted);
      setEvents(sorted);
    }

    LoadEvents();
  }, []);

  return (
    <div className="forside">
      {}
      <ForsideKarrusel
        images={[
          "/img/sokkedyr-slider.svg",
          "/img/program.png",
          "/img/komikere.png",
          "/img/gavekort.png",
          "/img/om-os.png",
          "/img/booking.png",
          "/img/kontakt.png",
        ].map((p) => encodeURI(p))}
      />
      <h1 className="forside-overskrift">Kommende events</h1>
      {events.slice(0, 6).map((event, idx) =>
        idx === 0 ? (
          <div id="first-event" key={event.id}>
            <Eventcard event={event} />
          </div>
        ) : (
          <Eventcard key={event.id} event={event} />
        )
      )}

      <a href="/program" className="forside-se-events">
        <b>Se alle events</b>
      </a>

      <div className="img-overlay">
        <img src="/img/acc.webp" alt="" className="forside-img" />
        <div className="overlay">
          <div className="overlay-box">
            <h1>Aarhus Comedy Club</h1>
            <p>
              Comedyklubben af komikere, for komikere, og til alle, der elsker
              at grine !
            </p>
            <a href="/booking" className="overlay-btn">
              <b>Læs om os</b>
            </a>
          </div>
        </div>
      </div>

      <div className="img-overlay">
        <img src="/img/acc.webp" alt="" className="forside-img" />
        <div className="overlay">
          <div className="overlay-box">
            <h1>Bliv medlem</h1>
            <p>
              Udforsk de forskellige muligheder ud har for at booke aarhus
              comedyclub herinde
            </p>
            <a href="/booking" className="overlay-btn">
              <b>Book os</b>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
