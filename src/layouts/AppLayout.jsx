import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
export default function AppLayout() {
	const location = useLocation();
	useEffect(() => {
		window.scroll({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}, [location]);
	return (
		<div>
			<Suspense fallback={"<LoadingScreen />"}>
                <Navbar/>
                <Outlet />
                <Footer/>
			</Suspense>
		</div>
	);
}
