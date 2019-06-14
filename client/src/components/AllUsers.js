import React, { Component } from 'react'
import { connect } from 'react-redux';

import { userActions } from '../actions';

class AllUsers extends Component {
  componentWillMount() {
    const { dispatch } = this.props;

    dispatch(userActions.getAll());
  }
  render() {
    const { items } = this.props;
    return (
      <div>
        <h1>All Users</h1>
        <div>
          {items && 
            <div>
              {items.map(item => {
                return (
                  <div>
                    <h1>Item</h1>
                  </div>
                )
              })}
            </div>
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { items } = state.users;
  return {
    items
  }
}

const connectedAllUsers = connect(mapStateToProps)(AllUsers);
export { connectedAllUsers as AllUsers }