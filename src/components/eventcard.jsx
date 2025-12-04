
export default function Eventcard( { event } ){
    return(
        <article className="show">
            <img src={event.img} alt={event.titel}></img>
            <h1>{event.titel}</h1>
            <p>{event.kort_beskrivelse}</p>
            <p>{event.dato.toDate().toLocaleDateString()}</p>

            <p>hej</p>
        </article>
    )
}