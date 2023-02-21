import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';
import firebase from 'firebase/app'
import 'firebase/auth';
import firebaseConfig from './firebase.config'
import { UserContext } from '../../App';
import './LogIn.css'
import { FaGoogle } from 'react-icons/fa';
import HomeNavbar from '../../Components/HomeNavbar/HomeNavbar';

const LogIn = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const [user, setuser] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        succes: ''
    })
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)



    const handleBlur = (e) => {
        let isFormValid = true;
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value)
        }
        if (isFormValid) {
            const newUser = { ...user };
            newUser[e.target.name] = e.target.value;
            setuser(newUser);
        }
    }

    const handleLogIn = (e) => {
        if (user.email) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserinfo = { ...user }
                    newUserinfo.email = res.user.email;
                    setuser(newUserinfo);
                    newUserinfo.name = res.user.displayName;
                    setuser(newUserinfo);
                    newUserinfo.error = '';
                    newUserinfo.succes = true;
                    setuser(newUserinfo);
                    setLoggedInUser(newUserinfo);
                    history.replace(from);
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode, errorMessage)
                    const newUserinfo = { ...user }
                    newUserinfo.error = errorMessage;
                    setuser(newUserinfo);
                });

        }
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then(res => {
                console.log(res)
                const newUserinfo = { ...user }
                newUserinfo.error = '';
                newUserinfo.succes = true;
                newUserinfo.email = res.user.email;
                setuser(newUserinfo);
                newUserinfo.name = res.user.displayName;
                setuser(newUserinfo);
                setLoggedInUser(newUserinfo);
                history.replace(from);
            }).catch((error) => {

                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorMessage,errorCode,email,credential)

            });

    }
    return (
        <div className="">
            <HomeNavbar />
            <div>
                <div>
                    <div className="loginComponent">
                        <div className="text-center loginStyle">
                            <h2 className="text-muted"> <i class="bi bi-box-arrow-in-right text-muted"></i> Log In </h2>
                            <form onSubmit={handleLogIn}>
                                <input className="inputField" type="email" name="email" onBlur={handleBlur} placeholder="Enter your email" required />
                                <br />
                                <input className="inputField" type="password" name="password" onBlur={handleBlur} placeholder="Enter your password" required />
                                <br />
                                <input className="inputField logInBtn" type="submit" value="Log In" />
                            </form>
                            <p>{user.error}</p>
                            {user.succes && <p className="sucsess">User created successfully</p>}
                            <p p className="text-muted" > Don 't have an account? <Link to='/sign-up'>Create an account</Link></p>
                            <br />
                            <p className="text-primary">Or</p>
                            <br />
                            <button className="btn btn-outline-success" onClick={handleGoogleSignIn}><FaGoogle className="google"></FaGoogle> Google Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;