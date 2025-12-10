import ForsideKarrusel from "../components/forside-karrusel";
import '../css/improomos.css'

export default function Improholdet(){
     return (
        <div>
            <ForsideKarrusel
            images={[
          "/img/kim.png",
          "/img/johnny.png",
          "/img/mia.png",
          "/img/pas.png",
          "/img/henrik.png",
        ].map((p) => encodeURI(p))}
        />
         <div className="banner">
        <h1 className="impro">Impro-holdet</h1>
        <p>Læs om, og evt. tilmeld dig Aarhus Comedy Clubs’ 
            impro-hold </p>
      </div>
        <div className="altformegetinfo">
            <h1>Hvad er impro-holdet?</h1>
            <p>
                Vi opretter et nyt improhold - og du kan være med fra starten!
                Vi starter et helt nyt improhold hos Aarhus Comedy Club–og du kan være med fra allerførste dag!
                Har du lyst til at prøve kræfter med impro-komedie, slippe kreativiteten løs og være med til at forme et helt nyt fællesskab? Så er dette holdet for dig.
                <br/>
                <br/>
                Alle niveauer er velkomne–uanset om du aldrig har prøvet impro før, eller allerede har stået på scenen. Vi skaber et trygt og sjovt rum, hvor vi leger med idéer, bygger scener op og udvikler os sammen i et tempo, der passer alle.
                <br/>
                <br/>
                Holdet mødes én gang om ugen i Aarhus.
                Når deltagerne er på plads, aftaler vi i fællesskab det tidspunkt og sted, der fungerer bedst. Der vil også være mulighed for at optræde foran publikum, hvis man har lyst.
                 <br/>
                  <br/>
                   Hvis du gerne vil være med fra starten af, så tilmeld dig <a href="https://www.youtube.com/watch?v=gbYEZPNflFs">her</a>
            </p>
            <img src="/img/pas.png"/>
        </div> 
        </div>
          )
}