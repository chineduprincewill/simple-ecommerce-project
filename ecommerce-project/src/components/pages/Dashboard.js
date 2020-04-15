import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Dashboard extends Component {

  static propTypes = {
      auth: PropTypes.object.isRequired
  }

  render() {

    const { user } = this.props.auth;

    return (
      <div className="container">
        <h2 className="text text-primary text-center mt-5">Welcome {user.names}</h2>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
