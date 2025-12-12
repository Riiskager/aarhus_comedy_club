import '../css/kontakt.css'
import { useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export default function TjekSaldo(){
    const [gavekortId, setGavekortId] = useState("");
  const [saldo, setSaldo] = useState(null);
  const [fejl, setFejl] = useState("");

  async function handleTjekSaldo(e) {
    e.preventDefault(); // forhindrer page reload
    setFejl("");
    setSaldo(null);

    if (!gavekortId) {
      setFejl("Indtast venligst et gavekort ID");
      return;
    }

    try {
      // hent dokument direkte med ID
      const gavekortRef = doc(db, "gavekort", gavekortId);
      const gavekortSnap = await getDoc(gavekortRef);

      if (gavekortSnap.exists()) {
        const data = gavekortSnap.data();
        setSaldo(data.pris); // her viser vi saldo
      } else {
        setFejl("Gavekort findes ikke");
      }
    } catch (error) {
      console.error("Fejl ved hentning af gavekort:", error);
      setFejl("Noget gik galt. Prøv igen.");
    }
  }
    return(
       <div className="formular">
            <form onSubmit={handleTjekSaldo}>
                <h1 id="saldo" >Tjek Saldo</h1>
                <input 
                className="formaal" placeholder="indtast kode" type="text"
                 value={gavekortId}
                onChange={(e) => setGavekortId(e.target.value)}>
                </input>
                <button className='knap'>Tjek Saldo</button>
            </form>
             {saldo !== null && (
        <p>Saldo på gavekort: {saldo} kr</p>
      )}

      {fejl && (
        <p style={{ color: "red" }}>{fejl}</p>
      )}
       </div>
    )
}