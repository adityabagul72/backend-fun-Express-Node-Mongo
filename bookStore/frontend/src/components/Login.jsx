import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast'

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const userInfo={
            email:data.email,
            password:data.password,
        }
        await axios.post("http://localhost:3000/user/login",userInfo)
        .then((res)=>{
            if(res.data){
                toast.success("Login Successfully")
            }
            localStorage.setItem("Users",JSON.stringify(res.data.User))
        })
        .catch((error)=>{
            if(error.response || error.response.status == 400){
                toast.error(response.error.message)
            }
            else{
                toast.error("Something error occured Try Later")
            }
        })
    };

    return (
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                {/* Form starts here */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                    <h3 className="font-bold text-lg">Login</h3>

                    {/* Email field */}
                    <div className='mt-4 space-y-2'>
                        <label>Email:</label> <br />
                        <input
                            type="email"
                            {...register("email", { required: 'Email is required' })}
                            placeholder='Enter your email'
                            className='w-80 outline-none rounded-md p-2 border-2'
                        />
                        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                    </div>

                    {/* Password field */}
                    <div className='mt-4 space-y-2'>
                        <label>Password:</label> <br />
                        <input
                            type="password"
                            {...register("password", { required: 'Fill Password !!' })}
                            placeholder='Enter your Password'
                            className='w-80 outline-none rounded-md p-2 border-2'
                        />
                        {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                    </div>

                    <div className='flex justify-between'>
                        <button type="submit" className='p-2 bg-pink-500 hover:bg-pink-700 duration-300 font-semibold mt-4 rounded-md ml-2 text-white'>Login</button>
                        <p className='mt-7'>Not Registered? <Link to='/signup'><span className='underline text-blue-500 cursor-pointer'>SignUp</span></Link></p>
                    </div>
                </form>
                {/* Form ends here */}
            </div>
        </dialog>
    );
}

export default Login;
