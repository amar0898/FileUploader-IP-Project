import React, {Component} from 'react';
import './Login.css';
import dropbox from "./dropbox-img.png";
import {Link } from "react-router-dom";
class SignUp extends Component {
    render() {
        return (
            <div class="container">
            <img className="profile-img" src={dropbox}
                 alt=""/>
 <input type="text" className="form-control" placeholder="First Name" required autoFocus/>
                <br/>
                <input type="text" className="form-control" placeholder="Last Name" required/>
                <br/>
                <input type="text" className="form-control" placeholder="Email" required/>
                <br/>
                <input type="password" className="form-control" placeholder="Password" required/>
                <br/>
                <Link to="/">
             <button className="btn btn-primary btn-block" type="submit" >
                Sign Up
            </button>
            </Link>
            <br></br>
            <br></br>
            <Link to="/">
            <button className="btn btn-primary btn-block" type="submit" >
                Login
            </button>
            </Link>
            </div>

        );
    }
}

export default SignUp;