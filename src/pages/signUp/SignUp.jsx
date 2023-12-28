import { useForm } from "react-hook-form";
import { Link,useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState } from 'react';
import { toast } from 'react-toastify';
import { EMAIL_RGX, PHONE_RGX, PIN_RGX } from "../../regexPatterns";
export default function SignUp() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit, watch, } = useForm({
        defaultValues: {
            gender: 'male',
        }
    });
    const password = watch('password');
    const handleSignup = async (formData) => {
        try {
            setLoading(true);

            const signupRes = await fetch(
                'https://api.itaxeasy.com/user/sign-up',
                {
                    method: 'POST',
                    headers: new Headers({
                        'Content-Type': 'application/json',
                    }),
                    body: JSON.stringify(formData),
                }
            );

            const { message } = await signupRes.json();

            if (!signupRes.ok) {
                toast(message, { type: 'error' });

                setLoading(false);

                return;
            }
            // dispatch({
            //     type: SET_VERIFICATION_DETAILS,
            //     payload: {
            //         otpId: data.otp_key,
            //         email: formData.email,
            //     },
            // });

            toast('Sign up was successful. Please Verify your account.', {
                type: 'success',
            });

            navigate('/verification');
        } catch (e) {
            console.error(e);
            setLoading(false);
            toast('Signup failed. Please try again.', { type: 'error' });
        }
    };
	return (
        <section className="grid place-content-center bg-slate-100 py-12 min-h-screen">
            <div className="w-full my-12 p-4 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-2xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="flex justify-center gap-4">
                        <Icon className="w-8 h-8 dark:text-white" icon="fa-solid:sun" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            khushiya.in
                        </span>
                    </div>
                </div>
                <div className="p-6 space-y-4 ">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create and account
                    </h1>
                    <form onSubmit={handleSubmit(handleSignup)}>
                        <div className="p-4 grid md:grid-cols-2 gap-4">
                            <div className="flex flex-col w-full">
                                <label
                                    htmlFor="firstName"
                                    className="text-sm font-medium"
                                >
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    placeholder="First Name"
                                    {...register('firstName', {
                                        required: 'First name is required',
                                    })}
                                    className="py-2 px-3 mt-1 outline-none border focus:border-primary rounded"
                                />
                                {errors.firstName ? (
                                    <div className="text-red-500">
                                        {errors.firstName.message}
                                    </div>
                                ) : null}
                            </div>
                            <div className="flex flex-col w-full">
                                <label
                                    htmlFor="lastName"
                                    className="text-sm font-medium"
                                >
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    placeholder="Last Name"
                                    {...register('lastName', {
                                        required: 'Last name is required',
                                    })}
                                    className="py-2 px-3 mt-1 outline-none border focus:border-primary rounded"
                                />
                                {errors.lastName ? (
                                    <div className="text-red-500">
                                        {errors.lastName.message}
                                    </div>
                                ) : null}
                            </div>
                            <div className="grid">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-medium"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    {...register('email', {
                                        pattern: {
                                            value: EMAIL_RGX,
                                            message: "Invalid email"
                                        }
                                    }, { required: 'Email is required', })}
                                    className="py-2 px-3 mt-1 outline-none border focus:border-primary rounded"
                                />
                                {errors.email ? (
                                    <div className="text-red-500">
                                        {errors.email.message}
                                    </div>
                                ) : null}
                            </div>
                            <div className="flex flex-col w-full">
                                <label
                                    htmlFor="mobile"
                                    className="text-sm font-medium"
                                >
                                    Mobile
                                </label>
                                <input
                                    type="number"
                                    id="mobile"
                                    placeholder="Mobile"
                                    {...register('phone', {
                                        pattern: {
                                            value: PHONE_RGX,
                                            message: "Enter a valid 10 digit phone number"
                                        }
                                    },
                                        { required: 'Mobile no is required' },
                                    )}
                                    className="py-2 px-3 mt-1 outline-none border focus:border-primary rounded"
                                />
                                {errors.phone ? (
                                    <div className="text-red-500">
                                        {errors.phone.message}
                                    </div>
                                ) : null}
                            </div>
                            <div className="flex flex-col w-full">
                                <label
                                    htmlFor="pincode"
                                    className="text-sm font-medium"
                                >
                                    Pincode
                                </label>
                                <input
                                    type="number"
                                    id="pincode"
                                    placeholder="Pincode"
                                    {...register('pin', {

                                        pattern: {
                                            value: PIN_RGX,
                                            message: "Enter a valid PIN Code"
                                        }

                                    }, {
                                        required: 'Pincode is required',
                                    })}
                                    className="py-2 px-3 mt-1 outline-none border focus:border-primary rounded"
                                />
                                {errors.pin ? (
                                    <div className="text-red-500">
                                        {errors.pin.message}
                                    </div>
                                ) : null}
                            </div>
                            <div className="flex flex-col w-full">
                            <label
                                    htmlFor="gender"
                                    className="text-sm font-medium"
                                >
                                    Gender
                                </label>
                                <select
                                    type="number"
                                    id="gender"
                                    placeholder="Gender"
                                    {...register('gender', {
                                        required: 'Pincode is required',
                                    })}
                                    className="py-2 px-3 mt-1 outline-none border focus:border-primary rounded"
                                >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                {errors.gender ? (
                                    <div className="text-red-500">
                                        {errors.gender.message}
                                    </div>
                                ) : null}
                            </div>
                            <div className="flex flex-col w-full">
                                <label
                                    htmlFor="password"
                                    className="text-sm font-medium"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    {...register('password', {
                                        required: 'Password is required',
                                    })}
                                    className="py-2 px-3 mt-1 outline-none border focus:border-primary rounded"
                                />
                                {errors.password ? (
                                    <div className="text-red-500">
                                        {errors.password.message}
                                    </div>
                                ) : null}
                            </div>
                            <div className="flex flex-col w-full">
                                <label
                                    htmlFor="confirmPassword"
                                    className="text-sm font-medium"
                                >
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    placeholder="Confirm Password"
                                    {...register('confirm_password', {
                                        validate: (value) =>
                                            value !== password
                                                ? 'Password did not match'
                                                : null,
                                        required: 'Please confirm password',
                                    })}
                                    className="py-2 px-3 mt-1 outline-none border focus:border-primary rounded"
                                />
                                {errors.confirm_password ? (
                                    <div className="text-red-500">
                                        {errors.confirm_password.message}
                                    </div>
                                ) : null}
                            </div>
                        </div>
                        <div className="my-4">
                            <button
                                    disabled={loading}
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    {loading ? (
                                        <span className="inline-block w-4 h-4 border-white border-b-zinc-400 border-r-zinc-400 border-2 border-solid rounded-full animate-spin"></span>
                                    ) : (
                                        'Create an account'
                                )}
                            </button>
                        </div>
                        <p className="my-4 text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account? 
                            <Link to={"/login"} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                        </p>
                    </form>
                </div>
            </div>
        </section>
	);
}
