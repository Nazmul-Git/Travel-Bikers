/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import bgImage from '../assets/bikers1.jpg';
import { useNavigate } from 'react-router-dom';


const Booking = () => {
    const [file, setFile] = useState();
    const navigate=useNavigate();

    // const bookingId=useLoaderData();
    const handleChange=(e)=>{
        setFile(URL.createObjectURL(e.target.files[0]));
    }


    const handleSubmit=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const age=form.age.value;
        const contact=form.contact.value;
        const email=form.email.value;
        const file=form.file.value;
        // console.log(name,age,contact,email,file);

        const registerUser={name,age,contact,email,file};
        console.log(registerUser);

        fetch('http://localhost:3000/bookings', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(registerUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            form.reset();
            navigate('/bookings');
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200  bg-cover" style={{
            
            backgroundImage: `url(${bgImage})`
        }}>
            
            <div className="hero-content flex-col  lg:flex-row-reverse ml-64 text-white">
                
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold font-serif">Lets ready for our exciting ride !!!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-extrabold">Name</span>
                            </label>
                            <input type="text"name='name' required placeholder="your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-extrabold">Age</span>
                            </label>
                            <input type="number" name='age' required placeholder="age" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-extrabold">Contact</span>
                            </label>
                            <input type="number" name='contact' required placeholder="contact number" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-extrabold">Email</span>
                            </label>
                            <input type="email" name='email' required placeholder="your email" className="input input-bordered" />
                        </div>
                        <div className="App">
                            <h2>Add Image:</h2>
                            <input type="file" name='file' onChange={handleChange} />
                            <img src={file} />

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
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;