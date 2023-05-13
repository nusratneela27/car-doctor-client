import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen max-w-6xl mx-auto">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-full rounded-lg shadow-2xl" />
                    <img src={parts} className="absolute -right-5 lg:-right-14 top-3/4 w-3/4 rounded-lg shadow-2xl border-8 border-white" />
                </div>
                <div className='lg:w-1/2 pt-44 lg:pl-20 pb-10 space-y-7'>
                    <h3 className='text-3xl text-orange-600 font-bold py-3'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className="py-3">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn btn-error">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;