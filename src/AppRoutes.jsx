import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout.jsx";
import Home from "./pages/home/Home.jsx";

// *login
import SignUp from "./pages/signUp/SignUp.jsx";
import LogIn from "./pages/logIn/LogIn.jsx";
import ForgetPassword from "./pages/forgetPassword/ForgetPassword.jsx";
export default function AppRoutes() {
	const Routes = createBrowserRouter([
		{
			path: "/",
			element: <AppLayout />,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: "sign-up",
					element: <SignUp/>,
				},
				{
					path: "login",
					element: <LogIn/>,
				},
				{
					path: "forget-password",
					element: <ForgetPassword/>,
				},
			],
		},
		{
			path: "*",
			element: "<PageNotFound />",
		}
	]);
	return <RouterProvider router={Routes} />;
}
