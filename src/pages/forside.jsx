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
      {events.map((event) => (
        <Eventcard key={event.id} event={event} />
      ))}

      <Footer />
    </div>
  );
}
