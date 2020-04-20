import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { register } from '../../actions/auth';

class Register extends Component {
    state = {
        names: "",
        email: "",
        password: ""
    }

    static propTypes = {
        register: PropTypes.func.isRequired,
        errors: PropTypes.object.isRequired,
        msg: PropTypes.string.isRequired,
        isAuthenticated: PropTypes.bool
    }

    onChange = e => this.setState({
        [e.target.name] : e.target.value
    });

    onSubmit = e => {
        e.preventDefault();

        const { names, email, password } = this.state;

        const newUser = {
            names,
            email,
            password
        }

        console.log(newUser);

        this.props.register(newUser);

    }


    getErrors = () => {
        let errVal = "";

        const { errors } = this.props;

        if(errors){
            if(errors.statusText === "Conflict"){
                errVal = "Email already exists!";
            }

            if(errors.statusText === "Bad Request"){
                errVal = "All fields must be filled and ensure your password has a minimum of 8 characters!";
            }
        }

        return errVal;
    }


    render() {

        const { names, email, password } = this.state;

        const { errors } = this.props;

        return (
            <div className="col-md-4 m-auto">
                <div className="card card-body mt-5">
                <h2 className="text-center">Register</h2>
                <p className="text text-danger text-center">
                   {this.getErrors}
                </p>
                <p className="text text-success text-center">{this.props.msg}</p>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <label>Names</label>
                    <input
                        type="text"
                        className="form-control"
                        name="names"
                        onChange={this.onChange}
                        value={names}
                    />
                    </div>

                    <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={this.onChange}
                        value={email}
                    />
                    </div>

                    <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={this.onChange}
                        value={password}
                    />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-success btn-block">
                            Register
                        </button>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    errors: state.auth.errors,
    msg: state.auth.msg
});

export default connect(mapStateToProps, { register })(Register);
