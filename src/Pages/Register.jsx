/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/authProvider';
import { Form } from 'react-bootstrap';

const Register = () => {
    const [error, setError]=useState('');
    const {user,createUser}=useContext(AuthContext);
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const pass=form.password.value;
        const confPass=form.confirmPassword.value;
        console.log(name,email,pass,confPass);

        if(pass !== confPass){
            setError('Password did not match.')
            return;
        }

        //validation pass
        else if(!/(?=.*[A-Z])/.test(pass)){
            setError('Please..at list one uppercase latter.');
            return;
        }
        else if(!/(?=.{8,})/.test(pass)){
            setError('Password should be 8 character or long !');
            return;
        }
        else if(!/(?=.*[!@#$&*])/.test(pass)){
            setError('Please add a special character.');
            return;
        }

        if(pass===confPass){
            createUser(email,pass)
            .then(result=>{
                const signInUser=result.user;
                console.log(signInUser);
                setError('');
                form.reset();
            })
            .error(error=>{
                console.log(error.message);
                setError(error.message);
            })
        }

    }
    return (
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Username</span>
                                </label>
                                <input type="text" name='name' required placeholder="username" className="input input-bordered" />
                            </div>
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
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='confirmPassword' required placeholder="confirm password" className="input input-bordered" />
                                <label className="label">
                                    <p className="label-text-alt  text-red-700 font-bold">{error} </p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    );
};

export default Register;