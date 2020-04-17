import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUser } from '../../actions/profile';

class Profile extends Component {

  static propTypes = {
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired
  }

  componentDidMount(){
      this.props.getUser();
  }

  render() {

    const { user } = this.props;

    return (
      <div className="container">
          <h5 className="alert alert-primary mb-5">Profile</h5>
          <h2 className="text text-primary float-center">{user.names}</h2>
          <h5 className="text text-info">{user.email}</h5>

      </div>
    );
  }
}

const mapStateToProps = state => ({
    user: state.auth.user
})

export default connect(mapStateToProps, { getUser })(Profile);
