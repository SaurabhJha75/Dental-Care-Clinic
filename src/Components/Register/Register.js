import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './Register.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
    const handleReg = e => {
        e.preventDefault()
        if (password.length < 6) {
            setError('password must be 6 character');
            return;
        }
        if (!/^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/.test(password)) {
            setError('PassWord need 6 character long and a letter a digit and a special character');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                console.log(user)
            })

    }
    const [email, setEmail] = useState('')
    const [password, setPassWord] = useState('')
    const [error, setError] = useState('')
    const auth = getAuth();
    // const handlePasswordChange = e => {
    //     setPassWord(e.target.value)
    // }
    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value)
    // }
    return (
        <div className="register">
            <h2 style={{fontSize:'2rem',fontWeight:'bold'}}><span className="text-warning"> Please</span> Register!!</h2>
            <hr className='w-50 mx-auto mb-2 mt-0' />
            <form onSubmit={handleReg}>
            
            <input type="text" id="fname" name="firstname" placeholder="Your first name.."/>
           
           
            <input type="text" id="lname"  name="lastname" placeholder="Your last name.."/>
           
           
            
            <input type="email" id="email"  name="email" placeholder=" Enter Your Email.."/>
           
            <input type="password" id="password"  name="password" placeholder="Enter Your Password..."></input>
           
           
           
           
           
            <input type="submit" value="Register"/>
           
                     </form>

            <Link to="/login">Already Registered?</Link>
        </div>
    );
};

export default Register;