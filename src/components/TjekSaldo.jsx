import '../css/kontakt.css'
import { useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

//I dette forsøger sriptet at sammenligne værdien i et inputfelt med navnene på gavekort(id)


export default function TjekSaldo(){
  const [gavekortId, setGavekortId] = useState(""); //Indtastet værdi
  const [saldo, setSaldo] = useState(null); //Saldo, der vises efter gavekort er hentet
  const [fejl, setFejl] = useState(""); //Til fejl.. sjovt nok

  async function handleTjekSaldo(e) {
    e.preventDefault(); // forhindrer page reload
    setFejl(""); //nulstiller fejl
    setSaldo(null); //Hvis nu man har tjekket ét gavekort, fjerner saldoen

    if (!gavekortId) { //Hvis der ikke er gavekortID
      setFejl("Indtast venligst et gavekort ID");
      return;
    }

    try {
      // hent dokument direkte med ID
      const gavekortRef = doc(db, "gavekort", gavekortId);
      const gavekortSnap = await getDoc(gavekortRef);

      if (gavekortSnap.exists()) {
        const data = gavekortSnap.data();
        setSaldo(data.pris); // Sætter saldo til at være "pris" fra firestore dokumentet
      } else {
        setFejl("Gavekort findes ikke");
      }
    } catch (error) { //Hvis det fejler
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