import "../css/faq.css";
import { Link } from "react-router";
export default function FAQ() {
  return (
    <>
      <div className="faqside">
        <h1>F.A.Q</h1>
        <p>Se om din undren allerede er svaret på i vores F.A.Q herunder</p>
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
          <Link href="https://www.google.com/maps/place/Aarhus+Comedy+Club/@56.1529051,10.2124259,17.4z/data=!4m6!3m5!1s0x464c3fcca1cba101:0x8dab87e90f9cfaa3!8m2!3d56.1523784!4d10.2131161!16s%2Fg%2F11krrxxmyx!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D">
            Europaplads 16 , 8000 Aarhus C{" "}
          </Link>
        </p>

        <section className="faqting">
          <h2>Tilbyder i refusion eller ombytning af billetter?</h2>
          <h2>Show start og ankomst</h2>
          <h2>Er I handicapvenlige?</h2>
          <h2>Kan man få grupperabat?</h2>
          <h2>Tilbyder i rabatkoder til personaleforeninger?</h2>
        </section>
      </div>
    </>
  );
}
