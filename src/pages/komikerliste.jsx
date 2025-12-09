import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Komikercard from "../components/komikercard";
import ForsideKarrusel from "../components/forside-karrusel";

export default function Komikerliste() {
  const [firstKomiker, setFirstKomiker] = useState(null);

  useEffect(() => {
    async function LoadKomikere() {
      const ref = collection(db, "komikere");
      const snap = await getDocs(ref);

      const list = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // No date/time/price for komikere — use the first document as-is.
      setFirstKomiker(list.length > 0 ? list[0] : null);
    }

    LoadKomikere();
  }, []);

  return (
    <div>
      <ForsideKarrusel
        images={[
          "/img/kim.png",
          "/img/johnny.png",
          "/img/mia.png",
          "/img/pas.png",
          "/img/henrik.png",
        ].map((p) => encodeURI(p))}
      />
      {firstKomiker ? (
        <Komikercard key={firstKomiker.id} event={firstKomiker} />
      ) : (
        <p>Ingen komikere fundet</p>
      )}
    </div>
  );
}
