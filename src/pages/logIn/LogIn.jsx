import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
export default function LogIn() {
    const { register, handleSubmit } = useForm();
    const { loginWithEmail, verifyUser } = useAuth();
    const [loading, setLoading] = useState('');
    const navigate = useNavigate();
    
	const handleLogin = async (inputData) => {
        try {
            setLoading(true);

            const { success, data, token,error } = await loginWithEmail(inputData.email, inputData.password);
            if (!success) {
                toast.error(error, {position: toast.POSITION.BOTTOM_RIGHT});
                setLoading(false);
                return;
            }
            verifyUser({ data, token });
            localStorage.setItem("token", JSON.stringify(data.token));
            toast.success("successfully logged in", {position: toast.POSITION.BOTTOM_RIGHT});
            navigate('/');

        } catch (e) {
            toast.error(e.message);
        } finally {
            setLoading(false);
        }
    };
	return (
		<section className="grid place-content-center min-h-[80vh] dark:text-gray-50 dark:bg-gray-950">
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<div className="flex justify-center gap-4">
						<Icon className="w-8 h-8 dark:text-white" icon="fa-solid:sun" />
						<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
							khushiya.in
						</span>
					</div>
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
						Sign in to your account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>
						<div>
							<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
								Email address
							</label>
							<div className="mt-2">
								<input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    {...register("email")}
                                    required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
									Password
								</label>
								<div className="text-sm">
									<Link to="/forget-password" className="font-semibold text-indigo-600 hover:text-indigo-500">
										Forgot password?
									</Link>
								</div>
							</div>
							<div className="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
                                    {...register("password")}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
                            <button
                                    disabled={loading}
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    {loading ? (
                                        <span className="inline-block w-4 h-4 border-white border-b-zinc-400 border-r-zinc-400 border-2 border-solid rounded-full animate-spin"></span>
                                    ) : (
                                        'Login'
                                )}
                            </button>
						</div>
                        <div>
                            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                {"Don't"} have an account? <Link to={"/sign-up"} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                            </p>
                        </div>
					</form>

				</div>
			</div>
		</section>
	);
}
