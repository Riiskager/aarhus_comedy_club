import Eventcard from "../components/eventcard"
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import '../css/program.css'

export default function Program(){
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
    return(

        <div className="programside">
            <h1 className="overskrift">Program</h1>

          
            {events.map((event) => (
                    <Eventcard key={event.id} event={event} />
                  ))}
        </div>
    )
}