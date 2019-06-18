import { authConstants } from '../constants';
import { authService } from '../services';
import { history, setAuthToken } from '../helpers';
import jwt_decode from 'jwt-decode';


export const authActions = {
    login,
    logout,
    getCurrent
};

function login(email, password) {
  return dispatch => {
        dispatch(request({ email }));

        authService.login(email, password)
            .then(user => { 
                dispatch(success(user));
                history.push('/');
            }).catch(err => {
                const { message } = err.response.data;
                dispatch(failure(message))
            })
    };  

    function request(user) { return { type: authConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: authConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: authConstants.LOGIN_FAILURE, error } }
}

function logout() {
    // remove default axios header
    setAuthToken();

    localStorage.removeItem('user');
    return { type: authConstants.LOGOUT };
}

function getCurrent() {
    return dispatch => {
        dispatch(request())
        const token = localStorage.getItem('user');
        if(token) {
            const user = jwt_decode(token);
            // .valueOf to get same date format as jwt exp.
            const currentDate = Date.now().valueOf() / 1000;
            // check for expired
            if(user.exp < currentDate) {
                localStorage.removeItem('user');
                return dispatch(failure())
            }
            
            // set axios default header for future requests
            setAuthToken(token);
    
            return dispatch(success(user))
        }
        // if not token found, return action with no payload
        return dispatch(failure());
    }
    
    function request() { return { type: authConstants.USER_REQUEST } }
    function success(user) { return { type: authConstants.USER_SUCCESS, user } }
    function failure() { return { type: authConstants.USER_FAILURE } }
}

