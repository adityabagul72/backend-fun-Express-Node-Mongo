import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Login from './Login';
import axios from 'axios';
import toast from 'react-hot-toast';

function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const userInfo={
            fullname:data.fullname,
            email:data.email,
            password:data.password,
        }
        await axios.post("http://localhost:3000/user/signup",userInfo)
        .then((res)=>{
            if(res.data){
                toast.success('SignUp Successfully..!');
            }
            localStorage.setItem("Users",JSON.stringify(res.data.user))
        })
        .catch((error)=>{
            if(error.response || error.response.status == 400){
                toast.error("Something error occured Try Later")
            }
        })
    };

    return (
        <div id="" className="h-screen flex justify-center items-center">
            <div className="modal-box border-2 shadow-2xl px-18">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Close button */}
                    <Link to='/'>
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </Link>
                    
                    <h3 className="font-bold text-lg">Signup</h3>

                    {/* Name field */}
                    <div className='mt-4 space-y-2'>
                        <span>Name:</span> <br />
                        <input
                            type="text"
                            {...register("fullname", { required: true })}
                            placeholder='Enter your full name'
                            className='w-80 outline-none rounded-md p-2 border-2'
                        />
                        {errors.fullname && <span className="text-red-500">Name is required</span>}
                    </div>

                    {/* Email field */}
                    <div className='mt-4 space-y-2'>
                        <span>Email:</span> <br />
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            placeholder='Enter your email'
                            className='w-80 outline-none rounded-md p-2 border-2'
                        />
                        {errors.email && <span className="text-red-500">Email is required</span>}
                    </div>

                    {/* Password field */}
                    <div className='mt-4 space-y-2'>
                        <span>Password:</span> <br />
                        <input
                            type="password"
                            {...register("password", { required: true })}
                            placeholder='Enter your Password'
                            className='w-80 outline-none rounded-md p-2 border-2'
                        />
                        {errors.password && <span className="text-red-500">Fill Password !!</span>}
                    </div>

                    <div className='flex justify-between'>
                        <button type="submit" className='p-2 bg-pink-500 hover:bg-pink-700 duration-300 font-semibold mt-4 rounded-md ml-2 text-white'>Signup</button>
                        <p className='mt-7'> Already have an account? <button onClick={() => document.getElementById("my_modal_3").showModal()}><span className='underline text-blue-500 cursor-pointer'>Login Here</span></button></p>
                    </div>
                </form>
                {/* Login component */}
                <Login />
            </div>
        </div>
    );
}

export default Signup;
