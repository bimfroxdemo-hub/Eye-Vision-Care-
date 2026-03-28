import Locations from "../components/Locations";
import { locations } from "../data/data";
import ContactForm from "../components/contactForm";

export default function Contact() {
    return (
        <>
            <ContactForm />
            <Locations locations={locations} />
        </>
    )
}