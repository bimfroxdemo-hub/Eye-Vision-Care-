import Doctors from "../components/Doctors";
import Location from "../components/Locations";
import Gallery from "../components/Gallary";
import { images, doctorsDetails } from "../data/data";
import Story from "../components/Story";
import EyeEducation from "../components/EyeEducation";

export default function About() {
    return (
        <>
            <Story />
            <Doctors doctorsDetails={doctorsDetails} />
            <Gallery images={images} />
            <EyeEducation />
            

        </>
    )
}