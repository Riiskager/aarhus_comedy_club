import '../css/kontakt.css'


export default function TjekSaldo(){
    return(
       <div className="formular">
            <form>
                <h1>Tjek Saldo</h1>
                <input className="formaal" placeholder="indtast kode" type="number">
                </input>
                <button className='knap'>Tjek Saldo</button>
            </form>
       </div>
    )
}