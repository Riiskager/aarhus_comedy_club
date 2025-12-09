import { useEffect, useState } from "react";
import "../css/komikerliste.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function Komikercard() {
  const [komiker, setKomiker] = useState(null);

  useEffect(() => {
    async function loadKomikere() {
      const ref = collection(db, "komikere");
      const snap = await getDocs(ref);
      const list = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setKomiker(list.length > 0 ? list[0] : null);
    }

    loadKomikere();
  }, []);

  const imgSrc = komiker?.img ? encodeURI(komiker.img) : "/img/jcb.png";

  return (
    <section className="show">
      <img src={imgSrc} alt="" className="event-img" />
      <h1 className="event-titel">{komiker?.navn}</h1>
      <p className="event-kort-beskrivelse">{komiker?.Beskrivelse}</p>
      <a href="#" className="event-koeb">
        <b>køb billet</b>
      </a>
    </section>
  );
}
