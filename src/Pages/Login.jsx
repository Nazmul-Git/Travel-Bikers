/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/authProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import image from '../assets/login.jpg'

const Login = () => {
    const { userLogIn, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || '/categories/0';
    console.log('user path',from);

    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.password.value;

        console.log(email, pass);
        userLogIn(email, pass)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('');
                form.reset();
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.error(error.message);
                setError(error.message);
            })

    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className='hero min-h-screen  backdrop-blur-sm    text-black'>
            <div className="hero min-h-screen bg-cover" style={{
                backgroundImage: `url(${image})`
            }}>
                <div className="hero-content flex-col backdrop-blur-sm">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold text-black font-serif">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  backdrop-blur-md">
                        <form onSubmit={handleLogIn} className="card-body text-black ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black font-bold">Email</span>
                                </label>
                                <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black font-bold">Password</span>
                                </label>
                                <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <label className="label">
                                    <p className="label-text-alt">{error}</p>
                                </label>
                                <label className="label">
                                    <p className="label-text-alt text-black font-bold">Do not have an account ?
                                        <Link to='/register' className='text-blue-500 font-bold'>Register</Link>
                                    </p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-success"> Login</button>
                            </div>

                        </form>
                        <div>
                            <p className='text-center p-4 text-black font-bold'>Sign in with..
                                <button onClick={handleGoogleSignIn} className='text-green-500 '>
                                    <div className='flex items-center'>
                                        <span>Google</span>
                                        <FcGoogle></FcGoogle>
                                    </div>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </ div>
    );
};

export default Login;