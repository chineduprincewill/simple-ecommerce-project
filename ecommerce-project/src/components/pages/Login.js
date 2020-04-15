import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { login } from '../../actions/auth';

class Login extends Component {

    state = {
        email: "",
        password: ""
    }

    static propTypes = {
        login: PropTypes.func.isRequired,
        errors: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    }

    onChange = e => this.setState({
        [e.target.name] : e.target.value
    });


    onSubmit = e => {
        e.preventDefault();

        const { email, password } = this.state;

        const userdata = {
            email, 
            password
        }

        this.props.login(userdata);
    }

    render() {

        if(this.props.isAuthenticated){
            return <Redirect to="/dashboard" />
        }

        const { email, password } = this.state;

        const { errors } = this.props;

        return (
            <div className="col-md-4 m-auto">
                <div className="card card-body mt-5">
                    <h2 className="text-center">Login</h2>
                    <p className="text text-danger text-center">
                        { 
                        errors.statusText === "Unauthorized" ? "Email or password not correct!" : "" 
                        }
                        {
                            errors.statusText === "Bad Request" ? "All fields must be filled!" : ""
                        }
                    </p>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Email</label>
                            <input 
                                type="email"
                                name="email" 
                                className="form-control" 
                                onChange={this.onChange} 
                                value={email} 
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input 
                                type="password"
                                name="password" 
                                className="form-control" 
                                onChange={this.onChange} 
                                value={password} 
                            />
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-success btn-block">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    errors: state.auth.errors
});

export default connect(mapStateToProps, { login })(Login);
