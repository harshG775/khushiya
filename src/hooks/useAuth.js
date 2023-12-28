import { BASE_URL } from "../env";
export const useAuth = () => {
    const token = JSON.parse(localStorage.getItem('token'));
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    const clearLocalStorage = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');

    };

    const verifyUser = ({ token, data }) => {
        clearLocalStorage();
        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('currentUser', JSON.stringify(data));

    };

    async function loginWithEmail(email, password) {
        const loginData = {
            email: email,
            password: password,
        };

        const res = await fetch(`${BASE_URL}/user/login`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify(loginData),
        });

        const resData = await res.json();

        if (!resData.success) {
            return { error: resData.message };
        }

        return resData;
    }

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');
        
    };

    return {
        loginWithEmail,
        logout,
        verifyUser,
        currentUser,
        token,
    };
};
