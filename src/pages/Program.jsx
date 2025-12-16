import Eventcard from "../components/eventcard";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import "../css/program.css";

export default function Program() {
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
    <div className="programside">
      <h1 className="overskrift">Program</h1>

      {events.map((event) => (
        <Eventcard key={event.id} event={event} />
      ))}
    </div>
  );
}
