import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

export default function Betal(){
    const pris = localStorage.getItem("gavekortPris");
    const mail = localStorage.getItem("gavekortMail");
    const besked = localStorage.getItem("gavekortBesked");

    console.log("her er information", pris, mail, besked)

    async function betal(e){
        e.preventDefault();

        await addDoc(collection(db, "gavekort"), {
    pris,
    mail,
    besked
});
    }

    return(
        <>
            <button className="betal"
            onClick={betal}
            >Køb</button>
        </>
    )
}