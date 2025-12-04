import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Eventcard from "../components/eventcard";
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
      {events.map((event) => (
        <Eventcard key={event.id} event={event} />
      ))}

      <Footer />
    </div>
  );
}
