import GavekortFormular from "../components/GavekortFormular"
import TjekSaldo from "../components/TjekSaldo"

export default function Gavekort(){
    return(
        <div>
            <h1>Gavekort</h1>
            <p>Vil du give et godt grin til en bekendt?
                Så udfyld bare formularen herunder, og gør en andens dag
                bare lidt mere grineren!
                <br/>
                Har du allerede et gavekort?
                <br/> så udfyld formularen <a href="#">her</a>
            </p>
        <GavekortFormular/>
        <TjekSaldo/>
        </div>
    )
}