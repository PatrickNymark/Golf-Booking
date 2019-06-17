import { authHeader } from '../helpers';
//import { handleResponse } from '../helpers';
import jwt_decode from 'jwt-decode';

export const authService = {
    login,
    logout
};

/**
 * Login user
 * @param {string} email 
 * @param {string} password 
 */
function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return fetch(`/api/auth/login`, requestOptions)
        .then(handleResponse)
        .then(response => {
            const token = 'bearer ' + response.token;
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(token));

            // decode token to return the user
            const decoded = jwt_decode(token)
            return decoded;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}



function handleResponse(response) {
    return response.text().then(text => {
        const data = JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                Location.reload(true);
            }

            const error = data.message || data.error || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}