import { useParams } from "react-router";
import '../css/eventside.css'
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import Komikercard from "../components/komikercard";

export default function EventPage() {
    const { id } = useParams();
    const [event, setEvent] = useState(null)
    const [komikere, setKomikere] = useState("")
    const [eventKomikere, setEventKomikere] = useState([]);


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

   

    useEffect(() => {
  async function hentKomiker() {
    try {
      const komikerSnapshot = await getDocs(collection(db, "komikere"));

      const list = komikerSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log("Komikerliste:", list); // 👈 DET DU VIL SE

      setKomikere(list);

    } catch (err) {
      console.error("Fejl ved hentning af komikere:", err);
    }
  }

  hentKomiker();
}, []);
      
      useEffect(() => {
            if(!event || event.komikere.lenght === 0) return; //Hvis der ikke er et event eller hvis listen med komikere er = 0, så ignorer resten

      const filtered = komikere.filter(k => event.komikere.includes(k.id)); //filtered = komikere(k) hvis event.komikere inkludere komiker.id
      setEventKomikere(filtered); //Strictmode, er jeg ret sikker på
}, [event, komikere]);




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
          
            {eventKomikere.length > 0 && (
  <>
              <h2>Komikere der optræder:</h2>
              <div className="komikere-grid">
                {eventKomikere.map(k => (
                  <Komikercard key={k.id} komiker={k} />
                ))}
              </div>
            </>
          )}
        </div>
    );
}
