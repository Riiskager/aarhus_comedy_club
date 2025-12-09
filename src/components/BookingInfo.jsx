import '../css/bookinginfo.css'
import { useState } from 'react';

export default function BookingInfo(){
    const [openCat, setOpenCat] =useState(false);


    return(
        <>
        <div className="introtekst">
           
                <h1>Book os</h1>
            <div className='toptekst'>
                <p1>Kunne du have lyst til at booke Aarhus Comedy Club til et event?
                <br/>
                Så kan du lave en uforpligtigende aftale gennem vores formular, læs om de forskellige booking-muligheder herunder.
            </p1>
            </div>
        </div>
        <div className="julefrokost">
        <div id="julefrokost" onClick={() => setOpenCat(openCat === "julefrokost" ? null : "julefrokost")}
        className={`cat ${openCat === "julefrokost" ? "open" : ""}`} >
            <h1>Julefrokost</h1>
            <p className='cattext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ipsa tempora
                 voluptatem nostrum qui laboriosam soluta impedit porro. Autem saepe quod, 
                 nam beatae blanditiis fugit unde dolorum cumque reprehenderit aliquid?
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsum cumque obcaecati? Nisi saepe inventore harum! Omnis, illo. Laboriosam aperiam quam corrupti id excepturi suscipit temporibus, quod fuga asperiores ipsa.e</p>
        
        </div>
            <button className="book"><a href='/kontakt'>Book her</a></button>
        </div>
        <div className="julefrokost">
        <div id="firma-comedy" onClick={() => setOpenCat(openCat === "firma-comedy" ? null : "firma-comedy")}
        className={`cat ${openCat === "firma-comedy" ? "open" : ""}`} >
            <h1>Firma-comedy</h1>
            <p className='cattext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ipsa tempora
                 voluptatem nostrum qui laboriosam soluta impedit porro. Autem saepe quod, 
                 nam beatae blanditiis fugit unde dolorum cumque reprehenderit aliquid?
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsum cumque obcaecati? Nisi saepe inventore harum! Omnis, illo. Laboriosam aperiam quam corrupti id excepturi suscipit temporibus, quod fuga asperiores ipsa.e</p>
        
        </div>
            <button className="book"><a href='/kontakt'>Book her</a></button>
        </div>

        <div className="julefrokost">
        <div id="lejlokale" onClick={() => setOpenCat(openCat === "lejlokale" ? null : "lejlokale")}
        className={`cat ${openCat === "lejlokale" ? "open" : ""}`} >
            <h1>Lej Lokale</h1>
            <p className='cattext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ipsa tempora
                 voluptatem nostrum qui laboriosam soluta impedit porro. Autem saepe quod, 
                 nam beatae blanditiis fugit unde dolorum cumque reprehenderit aliquid?
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsum cumque obcaecati? Nisi saepe inventore harum! Omnis, illo. Laboriosam aperiam quam corrupti id excepturi suscipit temporibus, quod fuga asperiores ipsa.e</p>
        
        </div>
            <button className="book"><a href='/kontakt'>Book her</a></button>
        </div>
        </>
    )
}