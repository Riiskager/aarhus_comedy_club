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
        const docRef = doc(db, "events", id); //Henter eventet, og dens id
        const docSnap = await getDoc(docRef) //Får det sin et snapshot, når den finder det

        if(docSnap.exists()){ //Hvis snapshottet eksisterer
          setEvent({ id: docSnap.id, ...docSnap.data()}); //setEvent basically = data, igen, baseret på id'et, der lige er hentet
        } else {
          console.log("Ingen data")
        }
      }
      loadEvent(); //kør eventet
    },[id]) 

    if (!event) return <p>Loading...</p>;

    

    return (
        <div className="eventside">
          <div className="billede">
            <img src={event.img} alt={event.id}/>
          </div>

            <h1 className="titel">{event.titel}</h1>
        
        <div className="sidimidten">
          <button className="knappen"><a href='/køb'>Køb her</a></button>
        </div>

           <div className="info">
            <p>Her <br/>dør åbner</p>
            <p>Her <br/>fest starter</p>
            <p>Her <br/>{event.pris}</p>
            </div>
          
            <p>{event.kort_beskrivelse}</p>
        </div>
    );
}
