/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/authProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const { userLogIn, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigateIt=useNavigate();
    const location=useLocation();
    console.log(location);
    const from=location.state?.from?.pathname || '/category/0';
    console.log(from);

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
                navigateIt(from, { replace: true });

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
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <label className="label">
                                    <p className="label-text-alt">{error}</p>
                                </label>
                                <label className="label">
                                    <p className="label-text-alt">Do not have an account ?
                                        <Link to='/register' className='text-blue-500 font-bold'>Register</Link>
                                    </p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary"> Login</button>
                            </div>

                        </form>
                        <div>
                            <p className='text-center p-4'>Sign in with.. 
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
        </div>
    );
};

export default Login;