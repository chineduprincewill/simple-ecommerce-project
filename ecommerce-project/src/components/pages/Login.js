import React, { Component } from 'react';

class Login extends Component {

    state = {
        email: "",
        password: ""
    }

    onChange = e => this.setState({
        [e.target.name] : e.target.value
    });

    render() {

        const { email, password } = this.state;

        return (
            <div className="col-md-4 m-auto">
                <div className="card card-body mt-5">
                    <h2 className="text-center">Login</h2>
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

export default Login;
