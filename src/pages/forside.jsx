import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Eventcard from "../components/eventcard";
import ForsideKarrusel from "../components/forside-karrusel";


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

      // Sort events so the nearest upcoming date is shown first.
      const toMillis = (d) => {
        try {
          if (!d) return NaN;
          const date = typeof d.toDate === "function" ? d.toDate() : new Date(d);
          const t = date instanceof Date ? date.getTime() : NaN;
          return isNaN(t) ? NaN : t;
        } catch {
          return NaN;
        }
      };

      const now = Date.now();
      const sorted = list.slice().sort((a, b) => {
        const ta = toMillis(a.dato);
        const tb = toMillis(b.dato);

        const aFuture = !isNaN(ta) && ta >= now;
        const bFuture = !isNaN(tb) && tb >= now;

        // If both are future events, sooner first
        if (aFuture && bFuture) return ta - tb;
        // If one is future, it comes before past events
        if (aFuture && !bFuture) return -1;
        if (!aFuture && bFuture) return 1;
        // Both past or invalid: show most recent past first (closest to now)
        if (!isNaN(ta) && !isNaN(tb)) return tb - ta;
        if (isNaN(ta) && !isNaN(tb)) return 1;
        if (!isNaN(ta) && isNaN(tb)) return -1;
        return 0;
      });

      console.log("loaded events (sorted)", sorted);
      setEvents(sorted);
    }

    LoadEvents();
  }, []);

  return (
    <div>
      {}
      <ForsideKarrusel
        images={[
          "/img/kim.png",
          "/img/johnny.png",
          "/img/mia.png",
          "/img/pas.png",
          "/img/henrik.png",
        ].map((p) => encodeURI(p))}
      />
      {events.slice(0, 6).map((event) => (
        <Eventcard key={event.id} event={event} />
      ))}

    </div>
  );
}
