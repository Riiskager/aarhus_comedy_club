import '../css/kontakt.css'

export default function KontaktFormular(){

    //Der sker ikke rigtigt noget fancy heri, da der ikke er et endpoint.
// alt informationen i den her formular skal selvfølgelig samles i en mail, hvilket er ret simpelt
// I andre dokumenter, er det vist at vi godt kan samle values og pushe dem andre steder()
    return(
        <div className='formular'>
        <form>
            <h1>Kontaktformular</h1>
            <label>
                <select className='formaal' navn="formaal">
                    <option value="1">Vælg et formål</option>
                    <option value="2">Julefrokost</option>
                    <option value="3">Lej lokalet</option>
                    <option value="4">Book os</option>
                    <option value="5">Almindelig spørgsmål</option>
                    <option value="6">Impro-holdet</option>
                </select>
            </label>
            <input name="navn" className="navnmail" placeholder='Indtast navn...'/>
            <input name="email" className="navnmail" placeholder='Indtast e-mail...'/>
            <input name="besked" className="besked" placeholder='Skriv besked...'/>
            <button className="knap" type='submit'>Send besked</button>
        </form>
        </div>
    )
}