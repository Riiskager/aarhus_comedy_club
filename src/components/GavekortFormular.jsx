import '../css/kontakt.css'
import { useState } from 'react'
import { useNavigate } from 'react-router';

//Der sker ikke så meget fancy her, det meste sker under køb-siden

export default function GavekortFormular(){
    const [pris, setPris] = useState("");
    const [email, setEmail] = useState("");
    const [besked, setBesked] = useState("")    

    const navigate = useNavigate();

    async function sendGavekort(e){
        e.preventDefault()

                if (!pris || Number(pris) <= 99) { //Hvis der ikke er pris, eller prisen er mindre end 100
            alert("Beløbet skal være mindst 100kr");
            return;
            }
                if (!email) {
            alert("du skal skrive modtagers mail(hvis du selv skal modtage det, så bare skriv din egen mail)");
            return;
            }
            

        localStorage.setItem("gavekortPris", pris);
        localStorage.setItem("gavekortMail", email);
        localStorage.setItem("gavekortBesked", besked); //Hvordan er det så simpelt at gemme ting i local storage?
        navigate("/betaling");
    }

    return(
       <div className="formular">
            <form onSubmit={sendGavekort}> {/*Kører script on submit */}
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