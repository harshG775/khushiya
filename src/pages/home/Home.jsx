//App.jsx
// import { useContext } from "react";
// import Context_db from "../../store/Context_db";
// import { Actions } from "../../store/Reducer_db";
import Hero from "../../components/home/Hero";
import KhushiyaPrime from "../../components/home/KhushiyaPrime";
import SellorRentProperty from "../../components/home/SellorRentProperty";

import OurOtherService from "../../components/home/OurOtherService";
import HomeTuition from "../../components/home/HomeTuition";
import BookAppointment from "../../components/home/BookAppointment";
import OurTopConcern from "../../components/home/OurTopConcern";
export default function Home() {
	// const [state, dispatch] = useContext(Context_db);
	// const handleClick = () => {
	// 	dispatch({
	// 		actionType: Actions.TOGGLE_MENU,
	// 		payload: !state.isOpen,
	// 	});
	// };
	return (
		<main className="text-neutral-900 bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
			{/* <h1>App :{`${state.isOpen}`}</h1>
			<button className="bg-red-500" onClick={handleClick}>
				toggle
			</button>
            <h1>home</h1> */}
            <Hero/>
            <KhushiyaPrime/>
            <SellorRentProperty/>
            <OurTopConcern/>
            <OurOtherService/>
            <HomeTuition/>
            <BookAppointment/>
		</main>
	);
}
