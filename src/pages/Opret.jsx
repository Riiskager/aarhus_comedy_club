//Opret komikere og events - formular
import { db } from "../firebase";
import { useState } from "react";
import { addDoc, collection, updateDoc, doc, arrayUnion } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";
import '../css/opret.css'


export default function Opret(){
    //Konstanter til eventform
    const [titel, setTitle] = useState("");
    const [kort_beskrivelse, setKort] =useState("");
    const [lang_beskrivelse, setLang] = useState("");
    const [img, setImg] = useState("");
    const [pris, setPris] = useState("");
    const [stemningsbillede, setStemImg] = useState("")
    const [dato, setDato] = useState("")        
    const [door, setDoor] = useState("") 
    const [komikere, setKomikere] = useState([""])       



    async function HandleSubmit(e){
        e.preventDefault()

        const newEventRef = await addDoc(collection(db, "events"), {
            titel,
            kort_beskrivelse,
            lang_beskrivelse,
            img,
            pris: Number(pris),
            stemningsbillede,
            dato: Timestamp.fromDate(new Date(dato)),
            door: Timestamp.fromDate(new Date(door)),
            komikere
        }) 


        const eventRef = doc(db, "events");
    await updateDoc(eventRef, {
  events: arrayUnion(newEventRef.id),
});
    }

   
    return(
        <>
        <form className="opretEvent" onSubmit={HandleSubmit}>
            <input className="title"
            value={titel}
            placeholder="skriv titel"
            onChange={(e) => setTitle(e.target.value)}></input>

            <textarea className="kort_beskrivelse"
            value={kort_beskrivelse}
            placeholder="skriv kort beskrivelse"
            onChange={(e) => {setKort(e.target.value)
              e.target.style.height = "auto"
              e.target.style.height = e.target.scrollHeight + "px";
            }}
            >

            </textarea>
            
            <textarea className="lang_beskrivelse"
            value={lang_beskrivelse}
            placeholder="skriv lang beskrivelse"
            onChange={(e) => { setLang(e.target.value)
               e.target.style.height = "auto"
              e.target.style.height = e.target.scrollHeight + "px";
            
            }}>

            </textarea>
           
            <input className="img"
            value={img}
            placeholder="indsæt billedelink"
            onChange={(e) => setImg(e.target.value)}></input>

            <input className="stemImg"
            value={stemningsbillede}
            placeholder="indsæt stemningsbilledelink"
            onChange={(e) => setStemImg(e.target.value)}></input>

           <input className="pris"
            type="number"
            value={pris}
            placeholder="indtast pris"
            onChange={(e) => setPris(e.target.value)}></input>

            <input
              className="start"
              type="datetime-local" 
              value={dato} 
              onChange={(e) => setDato(e.target.value)} 
            />
            <input
              className="door"
              type="datetime-local" 
              value={door} 
              onChange={(e) => setDoor(e.target.value)} 
            />

            <input 
            className="komikervalg"
            type="array" //ikke sandt, skal vælges fra et array
            value={komikere}
            placeholder="vælg komiker"
            onChange={(e) => setKomikere(e.target.value)}
            />           
           <button type="submit">Kør</button>
        </form>
        </>
    )
}