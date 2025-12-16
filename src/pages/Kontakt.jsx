import "../css/kontakt.css";
import KontaktFormular from "../css/components/KontaktFormular";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Kontakt() {
  //Til redirect for admin, oprettelse af events and such
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate(""); //Det her var det eneste jeg havde brug for hjælp til, be proud O.o

  function adminLogin() {
    setCounter(counter + 1);
    console.log(counter);

    if (counter > 5) {
      //Hvis counteren er højere end 5, naviger
      navigate("/admin");
    }
  }

  return (
    <>
      <div className="introtekst">
        {/* Det kan tilføjes på mange forskellige måder
           Men her er admin login */}
        <h1 onClick={adminLogin}>Kontakt os</h1>
        <div className="toptekst">
          <p>
            Sidder du med et spørgsmål som vores hjemmeside ikke har svaret på? <br />
            Udfyld formularen herunder!
            <br />
            <br />
            Herunder er der også mulighed for ansøgninger til booking af klubben.
          </p>
        </div>

        <h1>Åbningstider:</h1>
        <div className="tidtekst">
          <p>
            Vi har kun åbent under shows.
            <br />
            Vi åbner dørene en time før showstart.
          </p>
        </div>
        <h1>Adresse</h1>
        <p>
          <a href="https://www.google.com/maps/place/Aarhus+Comedy+Club/@56.1529051,10.2124259,17.4z/data=!4m6!3m5!1s0x464c3fcca1cba101:0x8dab87e90f9cfaa3!8m2!3d56.1523784!4d10.2131161!16s%2Fg%2F11krrxxmyx!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D">
            Europaplads 16 , 8000 Aarhus C{" "}
          </a>
        </p>
      </div>
      <KontaktFormular />
    </>
  );
}
