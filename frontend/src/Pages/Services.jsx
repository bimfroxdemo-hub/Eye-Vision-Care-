import ServiceCard from '../components/ServiceCards';
import { services } from '../data/data';
import Products from '../components/Products';
import { products } from '../data/data';
import Seo from '../components/Seo';

export default function Services() {
    return (
        <>
            <Seo
                title="Eye Care Services in Surat, Vesu, Bhestan & Near Al Catoon | Eye Vision Care"
                description="Explore advanced eye care services at Eye Vision Care including cataract treatment, LASIK consultation, eye tests, contact lens guidance, and vision correction in Surat and nearby areas."
                keywords="eye care services in Surat, cataract treatment in Vesu, LASIK consultation in Bhestan, eye test near Al Catoon, contact lens clinic in Surat, eye specialist in Surat"
                url="https://eyevissioncare.in/services"
                image="/fevicon.png"
            />
            <ServiceCard services={services} />
            <Products products={products} />
        </>

    );
}
