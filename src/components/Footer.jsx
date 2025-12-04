import "../css/footer.css";

export default function Footer() {
  return (
    <footer>
      <div>Aarhus Comedy Club</div>
      <div>CVR: 44142279</div>
      <div className="social-links">
        <a href="https://www.instagram.com/aarhuscomedyclub/">
          <img src="/img/instagram.svg" alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/aarhuscomedyclub">
          <img src="/img/facebook.svg" alt="Facebook" />
        </a>
      </div>
      <div>
        <p>Adresse:</p>
        <a href="https://www.google.com/maps/place/Aarhus+Comedy+Club/@56.1529051,10.2124259,17.4z/data=!4m6!3m5!1s0x464c3fcca1cba101:0x8dab87e90f9cfaa3!8m2!3d56.1523784!4d10.2131161!16s%2Fg%2F11krrxxmyx!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D">
          Europaplads 16 8000 Aarhus C
        </a>
        <p>Åbnigstider</p>
        <p>
          Vi har kun åbent på dage med events og vi åbner en time før showstart
        </p>
      </div>
      <div className="footer-navigering">
        <a href="#">Kontakt</a>
        <a href="#">Nyhedsbrev</a>
        <a href="#">F.A.Q</a>
      </div>
      <div className="footer-navigering">
        <a href="#">Gavekort</a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1">
          Billetrefundering
        </a>
      </div>
      <a href="/" aria-label="Forside">
        <img src="/img/Logo.svg" alt="Aarhus Comedy Club logo" />
      </a>

      <a href="https://www.findsmiley.dk/1463725">
        Fødevarestyrelsens kontrolrapport
      </a>
    </footer>
  );
}
