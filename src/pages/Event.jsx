import { useParams } from "react-router";
import "../css/eventside.css";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import Komikercard from "../components/Komikercard";
import { useNavigate } from "react-router";

export default function EventPage() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [komikere, setKomikere] = useState([]);
  const [eventKomikere, setEventKomikere] = useState([]);
  const navigate = useNavigate();

  const dateObj = event?.dato && typeof event.dato.toDate === "function" ? event.dato.toDate() : new Date(event?.dato);

  const formattedDate = dateObj.getDate() + "/" + (dateObj.getMonth() + 1) + "/" + dateObj.getFullYear();

  function formatDoor(event) {
    const v = event.door;

    if (typeof v.toDate === "function") {
      return v.toDate().toLocaleTimeString("da-DK", {
        hour: "2-digit",
        minute: "2-digit"
      });
    }

    return String(v);
  }

  useEffect(() => {
    async function loadEvent() {
      const docSnap = await getDoc(doc(db, "events", id));
      if (docSnap.exists()) {
        setEvent({ id: docSnap.id, ...docSnap.data() });
      }
    }
    loadEvent();
  }, [id]);

  useEffect(() => {
    async function hentKomiker() {
      const snapshot = await getDocs(collection(db, "komikere"));
      const list = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setKomikere(list);
    }
    hentKomiker();
  }, []);

  useEffect(() => {
    if (!event || !event.komikere || event.komikere.length === 0) return;

    const filtered = komikere.filter(k => event.komikere.includes(k.id));
    setEventKomikere(filtered);
  }, [event, komikere]);

  if (!event) return <p>Loading...</p>;

  async function sendBillet() {
    localStorage.setItem("billetpris", event.pris);
    localStorage.setItem("event", event.titel);
    navigate("/betaling");
  }

  return (
    <div className="eventside">
      <div className="billede">
        <img src={event.img} alt={event.id} />
      </div>

      <div className="titel">
        <h1>{event.titel}</h1>
      </div>

      <div className="sidimidten">
        <button className="knappen" onClick={sendBillet}>
          <a>Køb her</a>
        </button>
      </div>

      <div className="info">
        <p>
          Dato <br /> <span>{formattedDate}</span>
        </p>
        <p>
          Døre åbner <br /> {formatDoor(event)}
        </p>
        <p>
          Pris: <br /> {event.pris}kr,-
        </p>
      </div>

      <p className="beskrivelse">{event.lang_beskrivelse}</p>

      <img className="stemningsbillede" src={event.stemningsbillede} />

      {eventKomikere.length > 0 && (
        <>
          <h2 className="komikeroverskrift">Komikere</h2>
          <div className="komikerstyling">
            {eventKomikere.map(k => (
              <Komikercard key={k.id} komiker={k} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
