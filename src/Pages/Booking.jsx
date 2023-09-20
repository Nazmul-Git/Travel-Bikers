/* eslint-disable no-unused-vars */
import React from 'react';
import bgImage from '../assets/bikers1.jpg'

const Booking = () => {
    return (
        <div className="hero min-h-screen bg-base-200  bg-cover" style={{
            backgroundImage:`url(${bgImage})`
        }}>
            <div className="hero-content flex-col lg:flex-row-reverse m-4">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold font-serif">Let's ready for our exciting ride !!!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Age</span>
                            </label>
                            <input type="number" placeholder="age" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Contact</span>
                            </label>
                            <input type="number" placeholder="contact number" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="your email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="cursor-pointer label">
                                <span className="label-text">The Terms and Conditions</span>
                                <input type="checkbox" checked="checked" className="checkbox checkbox-warning" />
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;