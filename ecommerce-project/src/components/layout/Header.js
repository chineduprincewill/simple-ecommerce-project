import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logout } from '../../actions/auth';

class Header extends Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        user: PropTypes.object
    }

    render() {

        const { isAuthenticated, user } = this.props;

        const authLinks = (
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <span className="navbar-text mr-3">
                <strong>{user ? `Welcome ${user.names}` : ""}</strong>
              </span>
              <li className="nav-item">
                <Link to="/"
                  className="nav-link btn btn-primary btn-sm text-light mr-3"
                >
                  Store
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart"
                  className="nav-link btn btn-link text-warning btn-sm mr-3"
                >
                  <i className="fa fa-shopping-cart fa-2x"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard"
                  className="nav-link btn btn-link btn-sm mr-3"
                >
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <button
                  onClick={this.props.logout}
                  className="nav-link btn btn-link btn-sm"
                >
                  Logout
                </button>
              </li>
            </ul>
          );
      
          const guestLinks = (
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                    Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                    Sign up
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                    Sign in
                    </Link>
                </li>
            </ul>
          );

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">E-COMMERCE APP</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {isAuthenticated ? authLinks : guestLinks}
                    </div>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
});

export default connect(mapStateToProps, { logout })(Header);
