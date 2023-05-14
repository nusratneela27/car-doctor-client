import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className="text-center space-y-7">
                <h3 className="font-bold text-3xl text-orange-600">Service</h3>
                <h2 className="font-bold text-5xl">Our Services Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or Randomized <br />  words which do not look even slightly believable. </p>
            </div>
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;