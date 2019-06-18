import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import  { isEmpty } from '../helpers';

const PrivateRoute = ({ component: Component, auth, roles, ...rest }) => (
    <Route {...rest} render={props => {
        // check for auth
        if(!auth.isAuthenticated) {
            return <Redirect to="/login" />
        } 

        // if roles check if user has any given role
        if(roles && isEmpty(auth.user.role)) {
            return <Redirect to="/" />
        } 

        // Loop user role object to get each role key
        Object.keys(auth.user.role).forEach(value => {
           if(roles && roles.indexOf(value) === -1) {
                // role not authorised so redirect to home page
                return <Redirect to="/" />
           }
        });

        // is authenticated
        return <Component {...props} />
    }} />
)

function mapStateToProps(state) {
    return {
        auth: state.authentication
    }
}

const connectedPrivateRoute = withRouter(connect(mapStateToProps)(PrivateRoute));
export { connectedPrivateRoute as PrivateRoute };
