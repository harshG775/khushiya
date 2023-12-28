// Reducer_db.jsx
export const Actions = {
	TOGGLE_MENU: "toggle_menu",
    LOGIN: "login",
};
export default function Reducer_db(state, { actionType, payload }) {
	switch (actionType) {
		case Actions.TOGGLE_MENU:
			return {
				...state,
				isOpen: payload,
			};
		case Actions.LOGIN:
			return {
				...state,
				user: payload,
			};

		// default:
		//   throw new Error();

		default:
			return state;
	}
}
