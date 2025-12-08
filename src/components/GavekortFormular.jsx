import '../css/kontakt.css'

export default function GavekortFormular(){
    return(
       <div className="formular">
            <form>
                <h1>Gavekort</h1>
                <input className="formaal" placeholder="indtast beløb" type="number">
                </input>
                <button className='knap'>Køb gavekort</button>
            </form>
       </div>
    )
}