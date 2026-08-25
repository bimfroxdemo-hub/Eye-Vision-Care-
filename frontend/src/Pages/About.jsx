import Doctors from "../components/Doctors";
import Gallery from "../components/Gallary";
import { images, doctorsDetails } from "../data/data";
import Story from "../components/Story";
import EyeEducation from "../components/EyeEducation";
import Seo from "../components/Seo";

export default function About() {
    return (
        <>
            <Seo
                title="About Eye Vision Care | Trusted Eye Specialists in Surat, Vesu & Bhestan"
                description="Learn about Eye Vision Care, our mission, eye care expertise, patient-first philosophy, and trusted eye specialists serving Surat, Vesu, Bhestan, and nearby areas."
                keywords="about eye vision care, eye specialist in Surat, trusted eye clinic in Vesu, eye care team in Bhestan, eye hospital in Surat"
                url="https://eyevissioncare.in/about"
                image="/fevicon.png"
            />
            <Story />
            <Doctors doctorsDetails={doctorsDetails} />
            <Gallery images={images} />
            <EyeEducation />
        </>
    )
}