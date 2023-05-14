import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const CheckOut = () => {
    const service = useLoaderData()
    const { _id, title, price, img } = service;
    const { user } = useContext(AuthContext);

    const handleBookService = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(booking);

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }

    return (
        <div className="container mx-auto px-4 mt-20 mb-20">
            <h2 className="text-center text-3xl mb-10">Book Service : {title}</h2>

            <form onSubmit={handleBookService}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <input type="text" defaultValue={user?.displayName} name="name" placeholder="Service Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="date" name="date" placeholder="Service Price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="email" defaultValue={user?.email} name="email" placeholder="Your Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" defaultValue={'$' + price} placeholder="Service Price" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-error btn-block" type="submit" value="Order confirm" />
                </div>
            </form>
        </div>

    );
};

export default CheckOut;