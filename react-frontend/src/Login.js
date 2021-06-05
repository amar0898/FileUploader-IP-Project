import React from 'react';
import './Login.css'
import dropbox from "./dropboxplus.gif";
import {Link } from "react-router-dom";
import dropboxtitle from "./Dropbox_Log.png";
import dropbox1 from "./dropbox-img.png";
function Login(){
    return (<>
        <div className="col-md-6">
     <img className="" src={dropboxtitle}
     alt="" height="70"/>
<br/><br/><br/>

<img className="" src={dropbox1}
     alt="" />
    
</div>
        <div class="container">
            <img className="profile-img" src={dropbox}
                 alt=""/>

            <input type="email" className="form-control" placeholder="Email" required autoFocus/>
            <br/>
            <input type="password" className="form-control" placeholder="Password" required/>
            
            <br/>
            <Link to="/App"> <button className="btn btn-primary btn-block" type="submit" >
                Sign in
            </button></Link>
            <br/>
            <br></br>
            <Link to="/SignUp">
            <button className="btn btn-primary btn-block" type="submit" >
                Sign Up
            </button>
            </Link>

        </div>
        </>
    );
}

export default Login;