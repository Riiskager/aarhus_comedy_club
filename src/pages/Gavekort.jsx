import GavekortFormular from "../components/GavekortFormular";
import TjekSaldo from "../components/TjekSaldo";

export default function Gavekort(){
    return (
      <div className="introtekst">
        <h1>Gavekort</h1>
        <p className="toptekst">
          Har du givet et godt grin til en bekendt? Så udfyld bare formularen
          herunder, og gør en andens dag bare lidt mere grineren! Har du
          allerede et gavekort?
          <br />
          <br />
          Så tjek saldo <a href="#saldo">her!</a>
          <br />
          <br />
          <i>Minimumsbeløb 100 kr.</i>
          <p>Restbeløb kan bruges i vores bar;)</p>
        </p>
        <div className="kontaktside">
        <GavekortFormular />
        <TjekSaldo />
        </div>
      </div>
    );
}
