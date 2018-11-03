import React, { Component } from 'react';



class Signup extends Component {
    render() {
        return (<header>
            <div className="Menu"><h2 className="codeNameAlpha">Developer Portfolio</h2></div>
            <div className="container">
            <div className="callToAction"><h3>Sign Up Today to Join the Largest Group of Coders Ever!</h3></div>
                <form   action="/signup" method="post">

        <div className="form-group">
            <label className="signUp">Email</label>
            <input type="text" className="form-control" name="email"></input>
        </div>

        <div className="form-group">
            <label className="signUp">Password</label>
            <input type="password" className="form-control" name="password"></input>
        </div>

        <button type="submit" className="btn btn-warning btn-lg">Signup</button>
    </form>

            </div>
            </header>
        )
    }
}

export default Signup;