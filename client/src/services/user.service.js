import { authHeader } from '../helpers/auth-header';
import axios from 'axios';

export const userService = {
    login,
    logout,
    getAll
};

function login(userData) {
  axios.post('/api/auth/login', userData).then(res => {
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    localStorage.setItem(res.data)

    return user;
  })
}



/*function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    axios.post()

    return fetch(`/api//authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
} */

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
  axios.get('/api/')
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}