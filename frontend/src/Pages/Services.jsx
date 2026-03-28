import ServiceCard from '../components/ServiceCards';
import { services } from '../data/data';
import Products from '../components/Products';
import { products } from '../data/data';


export default function Services() {
    return (
        <>
            <ServiceCard services={services} />
            <Products products={products} />
        </>

    );
}
