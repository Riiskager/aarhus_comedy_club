import '../css/kontakt.css'
import { useState } from 'react'
import { useNavigate } from 'react-router';



export default function GavekortFormular(){
    const [pris, setPris] = useState("");
    const [email, setEmail] = useState("");
    const [besked, setBesked] = useState("")    

    const navigate = useNavigate();

    async function sendGavekort(e){
        e.preventDefault()

                if (!pris || Number(pris) <= 99) {
            alert("Beløbet skal være mindst 100kr");
            return;
            }
                if (!email) {
            alert("du skal skrive modtagers mail(hvis du selv skal modtage det, så bare skriv din egen mail)");
            return;
            }
            

        localStorage.setItem("gavekortPris", pris);
        localStorage.setItem("gavekortMail", email);
        localStorage.setItem("gavekortBesked", besked);
        navigate("/betaling");
    }

    return(
       <div className="formular">
            <form onSubmit={sendGavekort}>
                <h1>Gavekort</h1>
                
                <input className="formaal" 
                placeholder="indtast beløb" 
                type="number"
                value={pris}
                onChange={(e) => {setPris(e.target.value)}}>
                </input>
              
                
                <input className="formaal" 
                placeholder="Modtagers mail..." 
                type="input"
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}>
                </input>

                <input className="formaal1" 
                placeholder="Besked til modtager..." 
                type="input"
                value={besked}
                onChange={(e) => {setBesked(e.target.value)}}>
                </input>

                   <button className='knap'>Køb gavekort</button>
            </form>
       </div>
    )
}