import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Komikercard from "../css/components/Komikercard";
import KomikerKarrusel from "../css/components/Komikerkarrusel";

export default function Komikerliste() {
  const [komikere, setKomikere] = useState([]);

  useEffect(() => {
    async function LoadKomikere() {
      const ref = collection(db, "komikere");
      const snap = await getDocs(ref);

      setKomikere(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })).sort((a, b) => a.navn.localeCompare(b.navn)));
    }

    LoadKomikere();
  }, []);

  return (
    <div>
      <KomikerKarrusel
        images={["/img/kim.png", "/img/johnny.png", "/img/mia.png", "/img/pas.png", "/img/henrik.png"].map(p =>
          encodeURI(p)
        )}
      />
      {komikere.length > 0 ? (
        <div className="komikere-grid">
          {komikere.map(k => (
            <Komikercard key={k.id} komiker={k} />
          ))}
        </div>
      ) : (
        <p>Ingen komikere fundet</p>
      )}
    </div>
  );
}
