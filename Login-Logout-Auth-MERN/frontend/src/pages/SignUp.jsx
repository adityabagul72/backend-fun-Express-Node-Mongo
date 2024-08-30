import React from 'react';
import './signup.css';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function SignUp() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // Handle successful form submission here
        toast.success('Form submitted successfully!');
        console.log(data);
    };

    const notify = () => {
        const username = watch('username');
        const email = watch('email');
        const password = watch('password');

        if (!username || !email || !password) {
            toast.error('Please enter all fields');
        }
    };

    return (
        <>
            <div className="container">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            {...register('username', { required: true })}
                            name="username"
                        />
                        {errors.username && (
                            <span className="error">Username is required</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Entered value does not match email format',
                                },
                            })}
                            name="email"
                        />
                        {errors.email && (
                            <span className="error">{errors.email.message}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 6,
                                    message: 'Password must be at least 6 characters long',
                                },
                            })}
                            name="password"
                        />
                        {errors.password && (
                            <span className="error">{errors.password.message}</span>
                        )}
                    </div>
                    <Toaster />
                    <button type="submit" onClick={notify}>
                        Sign Up
                    </button>

                    <span className="login-link">
                        Already have an account?
                        <Link to="/login">Login</Link>
                    </span>
                </form>
            </div>
        </>
    );
}

export default SignUp;
