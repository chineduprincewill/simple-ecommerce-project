import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Dashboard extends Component {

  static propTypes = {
      auth: PropTypes.object.isRequired
  }

  render() {

    return (
      <div className="container">
         <h5 className="alert alert-primary mb-5">Dashboard</h5>
         <div className="row mt-5">

              <div className="col-sm-4">
                  <div className="card text-white bg-success mt-3">
                      <div className="card-body">
                          <Link to="/" className="btn btn-link">
                            <p className="card-text text-light"><i className="fa fa-home fa-3x mr-5"></i> Store</p>
                          </Link>
                      </div>
                  </div>
              </div>

              <div className="col-sm-4">
                  <div className="card text-white bg-warning mt-3">
                      <div className="card-body">
                          <Link to="/cart" className="btn btn-link">
                            <p className="card-text text-light"><i className="fa fa-shopping-cart fa-3x mr-5"></i> Cart</p>
                          </Link>
                      </div>
                  </div>
              </div>

              <div className="col-sm-4">
                  <div className="card text-white bg-primary mt-3">
                      <div className="card-body">
                          <Link to="/order" className="btn btn-link">
                            <p className="card-text text-light"><i className="fa fa-list fa-3x mr-5"></i> Orders</p>
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
