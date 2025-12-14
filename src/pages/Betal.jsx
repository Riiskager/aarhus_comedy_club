import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router";
import '../css/betal.css';

export default function Betal(){
    const navigate = useNavigate();

    //Konstanter hentet fra localstorage
    const pris = localStorage.getItem("gavekortPris");
    const mail = localStorage.getItem("gavekortMail");
    const besked = localStorage.getItem("gavekortBesked"); 
    const billetpris = localStorage.getItem("billetpris")
    const event = localStorage.getItem("event")

    console.log("her er information", pris, mail, besked);

    

    let checkoutProdukt;
    //gavekortMail er bare en specifik mail, så script kan se forskel på produkter, fordi events ikke har mail tilkoblet
    if (localStorage.getItem("gavekortMail")) {
    checkoutProdukt = { //sætter produkter til en liste af de her ting
        type: "gavekort",
        pris,
        mail,
        besked
    };
    } else{
        checkoutProdukt ={ //Ellers er det et event og har de her ting
            type: "event",
            billetpris,
            event
        }
    }

    async function betal(e){ //"Betalingsfunktion" tilføjer bare det valgte gavekort, og fjerner data
        e.preventDefault();

        await addDoc(collection(db, "gavekort"), {
    pris,
    mail,
    besked
    });

    localStorage.removeItem("gavekortPris");
    localStorage.removeItem("gavekortMail");
    localStorage.removeItem("gavekortBesked");
    localStorage.removeItem("billetpris");
    localStorage.removeItem("event");

    navigate("/bekræft")
    }

    return(
      
            <div className="betalingside">
        <h1 className="titel">Betalingside</h1>
        {checkoutProdukt.type === "gavekort" && (
        <div className="betalbesked">
            <h2>Produkt: gavekort</h2>
            
            <p>Modtagers mail: {checkoutProdukt.mail}</p>
            <p>Besked: {checkoutProdukt.besked}</p>
            <p>Beløb: {checkoutProdukt.pris} kr</p>
        </div> )}
        {checkoutProdukt.type === "event" && (
        <div className="betalbesked">
            <h2>Produkt: Event</h2>
            <p>Event: {checkoutProdukt.event}</p>
            <p>Beløb: {checkoutProdukt.billetpris},- kr</p>

        </div>
        )}
           
            <button className="knap"
            onClick={betal}
            >Køb</button>
            </div>
       
    )
}