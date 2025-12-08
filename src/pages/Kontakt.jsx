import '../css/kontakt.css'
import KontaktFormular from '../components/KontaktFormular'

export default function Kontakt(){
    return(
        <>
        <div className="introtekst">
           
                <h1>Kontakt os</h1>
            <div className='toptekst'>
                <p1>Sidder du med et spørgsmål som vores hjemmeside ikke har svaret på? <br/>
                Udfyld formularen herunder!
                <br/>
                <br/>
                Herunder er der også mulighed for ansøgninger til booking af klubben.</p1>
            </div>

            
                <h1>Åbningstider:</h1>
            <div className='tidtekst'>
                <p1>Vi har kun åbent under shows.<br/>
                Vi åbner dørene en time før showstart.</p1>
            </div>
                <h1>Adresse</h1>
                <p1><a href="https://www.google.com/maps/place/Aarhus+Comedy+Club/@56.1529051,10.2124259,17.4z/data=!4m6!3m5!1s0x464c3fcca1cba101:0x8dab87e90f9cfaa3!8m2!3d56.1523784!4d10.2131161!16s%2Fg%2F11krrxxmyx!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D">
                Europaplads 16 ,  8000 Aarhus C </a></p1>
        </div>
        <KontaktFormular/>
        </>
    )
}