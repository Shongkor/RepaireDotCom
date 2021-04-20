import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import './LogIn.css'
import googleLogo from './google.png'
import HomeNavbar from '../../Components/HomeNavbar/HomeNavbar';



const LogIn = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const [user, setUser] = useState({
        email: "",
        name: ""
    })
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSIgnIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {

                user.email = result.user.email;
                user.name = result.user.displayName;
                setLoggedInUser(user);
                history.replace(from);
                // console.log(result)

                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }
    return (
        <div>
            <HomeNavbar></HomeNavbar>
            <div className='body'>
                <div className="text-center login mt-5 box">
                    <div className="center px-4 ">
                        <h3 className="mt-3">Sign In with</h3>
                        <div onClick={handleGoogleSIgnIn} className="social-login row mt-3 mx-5 align-items-center">
                            <div className="col-3 px-1">
                                <img className='d-block mr-auto google-logo' src={googleLogo} alt="" />
                            </div>
                            <div className="col-8 px-1">
                                <span className='text'>Continue With Google</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LogIn;