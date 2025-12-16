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

      const toMillis = (d) => {
        try {
          if (!d) return NaN;
          if (typeof d?.toDate === "function") return d.toDate().getTime();
          if (typeof d === "number") return d < 1e11 ? d * 1000 : d;
          if (typeof d === "string") {
            const dm = d.match(/^\s*(\d{1,2})\/(\d{1,2})\/(\d{4})\s*$/);
            if (dm) {
              const day = Number(dm[1]);
              const month = Number(dm[2]) - 1;
              const year = Number(dm[3]);
              return new Date(year, month, day).getTime();
            }
            const p = Date.parse(d);
            return isNaN(p) ? NaN : p;
          }
          // (no seconds-object handling required for this project)
          return NaN;
        } catch {
          return NaN;
        }
      };

      const now = Date.now();
      const enriched = list.map((e) => ({ ...e, _ts: toMillis(e.dato) }));
      const upcoming = enriched
        .filter((e) => !isNaN(e._ts) && e._ts >= now)
        .sort((a, b) => a._ts - b._ts);

      console.log(
        "loaded upcoming events (enriched)",
        upcoming.map((e) => ({
          id: e.id,
          _ts: e._ts,
          iso: new Date(e._ts).toISOString(),
        }))
      );
      setEvents(upcoming);
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
