/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/authProvider';
import { Link } from 'react-router-dom';

const Login = () => {
    const {userLogIn}=useContext(AuthContext);
    const [error, setError]=useState('');

    const handleLogIn=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const pass=form.password.value;
        const confPass=form.confirmPassword.value;
        console.log(name,email,pass,confPass);
        userLogIn(email,pass)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            setError('');
            form.reset();

        })
        .catch(error=>{
            console.error(error.message);
            setError(error.message);
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;