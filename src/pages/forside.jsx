import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Eventcard from "../components/eventcard";
import ForsideKarrusel from "../components/forside-karrusel";
import Footer from "../components/footer";

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

      console.log(list);
      setEvents(list);
    }

    LoadEvents();
  }, []);

  return (
    <div>
      {/* Carousel with 5 skærmbilleder from public/img */}
      <ForsideKarrusel
        images={[
          "/img/Skærmbillede 2025-12-04 kl. 13.31.11.png",
          "/img/Skærmbillede 2025-12-04 kl. 13.31.22.png",
          "/img/Skærmbillede 2025-12-04 kl. 13.30.58.png",
          "/img/Skærmbillede 2025-12-04 kl. 13.31.31.png",
          "/img/Skærmbillede 2025-12-04 kl. 13.31.40.png",
        ].map((p) => encodeURI(p))}
      />
      {events.map((event) => (
        <Eventcard key={event.id} event={event} />
      ))}

      <Footer />
    </div>
  );
}
