import { useParams } from "react-router";

export default function EventPage() {
    const { id } = useParams();

    return (
        <div>
            <h1>Event ID: {id}</h1>
        </div>
    );
}
