import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="hero mt-28 mb-28">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-20 w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">Login</h1>
                        <form onSubmit={handleLogin} className='space-y-5'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="Your email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Your password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-error" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='my-5 text-center'>New to Car Doctors <Link className='text-orange-600 font-bold' to='/signup'> Sign Up</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;