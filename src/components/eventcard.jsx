
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function EventsList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function loadEvents() {
      const ref = collection(db, "events");
      const snap = await getDocs(ref);
      const list = snap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setEvents(list);
    }

    loadEvents();
    console.log("Her er din event")
    console.log()
  }, []);

  return (
    <div>
      {events.map(e => (
        <div key={e.id}>
            <p>Hejsa</p>
          <h3>{e.Titel}</h3>
          <p>{e.Kort_Beskrivelse}</p>
        </div>
      ))}
    </div>
  );
}
