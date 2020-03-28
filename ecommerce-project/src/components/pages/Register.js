import React, { Component } from 'react';

class Register extends Component {
    state = {
        names: "",
        email: "",
        password: ""
    }

    onChange = e => this.setState({
        [e.target.name] : e.target.value
    });

    render() {

        const { names, email, password } = this.state;

        return (
            <div className="col-md-4 m-auto">
                <div className="card card-body mt-5">
                <h2 className="text-center">Register</h2>
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

export default Register;
