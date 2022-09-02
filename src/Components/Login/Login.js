import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import './Login.css'
const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div  className="login-form">
            <h2 style={{fontSize:'2rem',fontWeight:'bold'}}>Please LogIn</h2>
            <hr className='w-50 mx-auto mb-2 mt-0' />
            {/* <Button variant="primary m-5 p-2">Sign In With Email</Button> <br /> */}
            <form > 
    

  
    <input type="email"  id="email" name="email" placeholder=" Enter Your Email.."/>
  
  
    <input type="password" id="password" name="password" placeholder="Enter Your Password..."/>
  
    <input type="submit" value="Login"/></form>
            <Button onClick={signInUsingGoogle} variant="success mb-5 p-2">Google Sign In</Button> <br />

            <Link to="/register">New User?</Link>
        </div>
    );
};

export default Login;