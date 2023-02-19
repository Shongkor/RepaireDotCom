// import React from 'react';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import firebaseConfig from './firebase.config'
// import { useContext } from 'react';
// import { UserContext } from '../../App';
// import { useState } from 'react';
// import { useHistory, useLocation } from 'react-router';
// import './LogIn.css';
// import googleLogo from './google.png';
// import SideNavbar from '../SideNavbar/SideNavbar';
// import { Link } from 'react-router-dom';



// const LogIn = () => {
//     const [loggedInUser, setLoggedInUser] = useContext(UserContext);

//     const history = useHistory();
//     const location = useLocation();
//     let { from } = location.state || { from: { pathname: "/" } };


//     const [user, setUser] = useState({
//         email: "",
//         name: ""
//     })
//     if (!firebase.apps.length) {
//         firebase.initializeApp(firebaseConfig);
//     }
//     const handleGoogleSIgnIn = () => {
//         var provider = new firebase.auth.GoogleAuthProvider();
//         firebase.auth()
//             .signInWithPopup(provider)
//             .then((result) => {

//                 user.email = result.user.email;
//                 user.name = result.user.displayName;
//                 setLoggedInUser(user);
//                 history.replace(from);
//                 // console.log(result)

//                 // ...
//             }).catch((error) => {
//                 // Handle Errors here.
//                 var errorCode = error.code;
//                 var errorMessage = error.message;
//                 // The email of the user's account used.
//                 var email = error.email;
//                 // The firebase.auth.AuthCredential type that was used.
//                 var credential = error.credential;
//                 // ...
//             });
//     }
//     return (
//          <div className='row'>
//             <div className='col-md-2'>
//                 <SideNavbar></SideNavbar>
//             </div>
//             <div className='col-md-10'>
//                 <div className='body'>
//                 <div className="text-center login mt-5 box">
//                     <div className="center px-4 ">
//                         <h3 className="mt-3">Sign In with</h3>
//                         <div onClick={handleGoogleSIgnIn} className="social-login row mt-3 mx-5 align-items-center">
//                             <div className="col-3 px-1">
//                                 <img className='d-block mr-auto google-logo' src={googleLogo} alt="" />
//                             </div>
//                             <div className="col-8 px-1">
//                                 <span className='text'>Continue With Google</span>
//                             </div>
//                         </div>
//                         <div className='mt-5'>
//                             <strong>New User ? </strong> then <strong><Link to='sign-up'> Sign Up</Link></strong>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             </div>
//         </div>

//     );
// };

// export default LogIn;

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
                console.log(errorMessage)

            });

    }
    return (
        <div className="">
           <HomeNavbar />
            <div className="loginComponent">
                        <div className="text-center loginStyle">
                            <h1 className="text-muted"> <i class="bi bi-box-arrow-in-right text-muted"></i> Log In </h1>
                    <form onSubmit={handleLogIn}>
                        <input className="inputField" type="email" name="email" onBlur={handleBlur} placeholder="Enter your email" required />
                        <br />
                        <input className="inputField" type="password" name="password" onBlur={handleBlur} placeholder="Enter your password" required />
                        <br />
                        <input className="inputField logInBtn" type="submit" value="Log In" />
                    </form>
                    <p>{user.error}</p>
                    {user.succes && <p className="sucsess">User created successfully</p>}
                    <p p className = "text-muted" > Don 't have an account? <Link to='/sign-up'>Create an account</Link></p>
                    <br/>
                    <p className = "text-primary">Or</p>
                    <br/>
                    <button className="btn btn-primary" onClick={handleGoogleSignIn}><FaGoogle className="google"></FaGoogle> Google Sign in</button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;