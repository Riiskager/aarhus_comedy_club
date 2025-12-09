import { useEffect, useState } from "react";
import "../css/komikercard.css";
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
    <section className="komiker">
      <img src={imgSrc} alt="" className="komiker-img" />
      <h1 className="komiker-titel">{komiker?.navn}</h1>
      <p className="komiker-beskrivelse">{komiker?.Beskrivelse}</p>
      <div className="komiker-blaa">
        <div className="komiker-social">
          <img src="/img/instagram.svg" alt="Instagram" />
          <img src="/img/facebook.svg" alt="Instagram" />
        </div>
        <a href="#" className="komiker-book">
          <b>Book</b>
        </a>
      </div>
    </section>
  );
}

