//Opret komikere og events - formular
import { db } from "../firebase";
import { useState, useEffect, } from "react";
import { addDoc, collection, updateDoc, doc, arrayUnion, getDocs } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";
import '../css/opret.css';
import Select from "react-select";


export default function Opret(){
    //Konstanter til eventform
    const [titel, setTitle] = useState("");
    const [kort_beskrivelse, setKort] =useState("");
    const [lang_beskrivelse, setLang] = useState("");
    const [img, setImg] = useState("");
    const [pris, setPris] = useState("");
    const [stemningsbillede, setStemImg] = useState("")
    const [dato, setDato] = useState("")
    const [komikere, setKomikere] = useState([])
    const [valgKomiker, setValgKomiker] = useState([])
    const [navn, setNavn] = useState("");
    const [beskrivelse, setBeskrivelse] = useState("");
    const [imgage, setImgage] = useState("");
    const [instagram, setInstagram] = useState("");
    const [facebook, setFacebook] = useState("");
    const [booking, setBooking] = useState("");

      async function hentKomikere() {
  const komikerRef = collection(db, "komikere"); // collection navn
  const snapshot = await getDocs(komikerRef);

  const komikere = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  return komikere;
}
  useEffect(() => {
    async function load() {
      const data = await hentKomikere();
      setKomikere(data); // komikere = state-array
    }
    load();
  }, []);

    const datoObj = new Date(dato);            // "dato" = starttidspunktet
    const doorObj = new Date(datoObj);         // lav en kopi
    doorObj.setHours(doorObj.getHours() - 1);

    async function HandleSubmit(e){
        e.preventDefault()

        const newEventRef = await addDoc(collection(db, "events"), {
            titel,
            kort_beskrivelse,
            lang_beskrivelse,
            img,
            pris: Number(pris),
            stemningsbillede,
            dato: Timestamp.fromDate(datoObj),
            door: Timestamp.fromDate(doorObj),
            komikere: valgKomiker.map(k => k.value)
        }) 


        const eventRef = doc(db, "events");
    await updateDoc(eventRef, {
  events: arrayUnion(newEventRef.id),
});
    }
    async function HandleSubmitKomiker(k){
        k.preventDefault()

        const newEventRef = await addDoc(collection(db, "komikere"), {
            navn,
            beskrivelse,
            imgage,
            instagram,
            facebook,
            booking
        }) 


        const eventRef = doc(db, "komikere");
    await updateDoc(eventRef, {
  events: arrayUnion(newEventRef.id),
});
    }

   
    return(
        <>
        
        <form className="opretEvent" onSubmit={HandleSubmit}>
            <h1>Opret Event!</h1>
            <label>Titel</label>
            <input className="title"
            value={titel}
            placeholder="skriv titel"
            onChange={(e) => setTitle(e.target.value)}></input>

            <label>Kort Beskrivelse</label>
            <textarea className="kort_beskrivelse"
            value={kort_beskrivelse}
            placeholder="skriv kort beskrivelse"
            maxLength={125}
            onChange={(e) => {setKort(e.target.value)
              e.target.style.height = "auto"
              e.target.style.height = e.target.scrollHeight + "px";
            }}
            >
            </textarea>
            
            <label>Lang beskrivelse</label>
            <textarea className="lang_beskrivelse"
            value={lang_beskrivelse}
            placeholder="skriv lang beskrivelse"
            onChange={(e) => { setLang(e.target.value)
               e.target.style.height = "auto"
              e.target.style.height = e.target.scrollHeight + "px";
            
            }}>

            </textarea>
           

           <label>Billedelink</label>
            <input className="img"
            value={img}
            placeholder="indsæt billedelink"
            onChange={(e) => setImg(e.target.value)}></input>

            <label>Extra billeder fra event</label>
            <input className="stemImg"
            value={stemningsbillede}
            placeholder="indsæt stemningsbilledelink"
            onChange={(e) => setStemImg(e.target.value)}></input>

            <label>Pris på event</label>
           <input className="pris"
            type="number"
            value={pris}
            placeholder="indtast pris"
            onChange={(e) => setPris(e.target.value)}></input>

            <label>Starttidspunkt</label>
            <input
              className="start"
              type="datetime-local" 
              value={dato} 
              onChange={(e) => setDato(e.target.value)} 
            />

            <label>Vælg komikere</label>
            <Select
                isMulti
                name="valgtekomikere"
                options={komikere.map(k => ({
                  label: k.navn,
                  value: k.id}))}
                value={valgKomiker}
                onChange={setValgKomiker}
                className="drop"
                classNamePrefix="select"
              /> 
              <div className="opretknap">
           <button type="submit">Opret Event</button>
           </div> 
        </form>











        <form className="opretEvent" onSubmit={HandleSubmitKomiker}>
            <h1>Opret komiker!</h1>
            <label>Navn</label>
            <input className="title"
            value={navn}
            placeholder="skriv navn"
            onChange={(k) => setNavn(k.target.value)}></input>

            <label>Beskrivelse</label>
            <textarea className="kort_beskrivelse"
            value={beskrivelse}
            placeholder="skriv kort beskrivelse"
            maxLength={125}
            onChange={(k) => {setBeskrivelse(k.target.value);
              k.target.style.height = "auto"
              k.target.style.height = k.target.scrollHeight + "px";
            }}
            >
            </textarea>

           <label>Billedelink</label>
            <input className="img"
            value={imgage}
            placeholder="indsæt billedelink"
            onChange={(k) => setImgage(k.target.value)}></input>

           <label>Instagram link</label>
            <input className="img"
            value={instagram}
            placeholder="indsæt Instagram link"
            onChange={(k) => setInstagram(k.target.value)}></input>

           <label>Facebook link</label>
            <input className="img"
            value={facebook}
            placeholder="indsæt Facebook link"
            onChange={(k) => setFacebook(k.target.value)}></input>

           <label>Eventzone link</label>
            <input className="img"
            value={booking}
            placeholder="indsæt Eventzone link"
            onChange={(k) => setBooking(k.target.value)}></input>

              <div className="opretknap">
           <button type="submit">Opret Komiker</button>
           </div> 
        </form>
        </>
    )
}