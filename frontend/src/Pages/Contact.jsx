import Locations from "../components/Locations";
import { locations } from "../data/data";
import ContactForm from "../components/contactForm";
import Seo from "../components/Seo";

export default function Contact() {
    return (
        <>
            <Seo
                title="Book Eye Appointment in Surat, Vesu, Bhestan & Near Al Catoon | Eye Vision Care"
                description="Book your eye appointment with Eye Vision Care in Surat, Vesu, Bhestan, Aarni, and near Al Catoon for eye checkup, consultations, and treatment."
                keywords="book eye appointment Surat, eye clinic near Al Catoon, eye specialist in Vesu, contact eye doctor Bhestan, eye consultation Surat"
                url="https://eyevissioncare.in/contact"
                image="/fevicon.png"
            />
            <ContactForm />
            <Locations locations={locations} />
        </>
    )
}