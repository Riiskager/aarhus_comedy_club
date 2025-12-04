import "../css/footer.css";

export default function Footer() {
  return (
    <footer>
          <div>Aarhus Comedy Club</div>
          <div>CVR: 44142279</div>
          <div className="social-links">
            <a href="https://www.facebook.com">
              <img src="/img/facebook.svg" alt="Facebook" />
            <a href="https://www.instagram.com">
              <img src="/img/instagram.svg" alt="Instagram" />
            </a>
            </a>
          </div>
          <div>
            <p>Adresse:</p>
            <a href="#">Europaplads 16 8000 Aarhus C</a>
            <p>Åbnigstider</p>
            <p>Vi har kun åbent på dage med events og vi åbner en time før showstart</p>
          </div>
          <div className="nav-column">
            <a href="#">Kontakt</a>
            <a href="#">Nyhedsbrev</a>
            <a href="#">F.A.Q</a>
            <a href="#">Gavekort</a>
            <a href="#">Billetrefundering</a>
          </div>
          <img src="/img/Logo.svg" alt="" />
          <a href="#">Fødevarestyrelsens kontrolrapport</a>
    </footer>
  );
}
