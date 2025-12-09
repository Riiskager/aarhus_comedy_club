import { useParams } from "react-router";
import '../css/eventside.css'
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";


export default function EventPage() {
    const { id } = useParams();
    const [event, setEvent] = useState(null)
   
    useEffect(() => {
      async function loadEvent() {
        const docRef = doc(db, "events", id);
        const docSnap = await getDoc(docRef)

        if(docSnap.exists()){
          setEvent({ id: docSnap.id, ...docSnap.data()});
        } else {
          console.log("Ingen data")
        }
      }
      loadEvent();
    },[id]) 

    if (!event) return <p>Loading...</p>;
    return (
        <div className="eventside">
            <h1>Event ID: {id}</h1>
            <h1>hejsa{event.titel}</h1>
            <p>{event.kort_beskrivelse}</p>
        </div>
    );
}
