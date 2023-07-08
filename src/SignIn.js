import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

const SignIn = () => {
    const navigate = useNavigate();
    const handleGoogleLoginSuccess = (response) => {
      console.log('Logged in successfully!', response);
      navigate.push('/invoice');
      // Add your logic to handle the successful login here
    };
  
    const handleGoogleLoginFailure = (error) => {
      console.log('Failed to log in!', error);
      // Add your logic to handle the failed login here
    };
  
    return (
      <div>
        <h2>Sign In with Google</h2>
        <GoogleLogin
          clientId="832871920221-063oa3mnou03ldt6g6hl3ht7n6ddavau.apps.googleusercontent.com"
          buttonText="Sign In with Google"
          onSuccess={"http://localhost:3000"}
          onFailure={"/auth/google/callback"}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    );
  };
  
  export default SignIn;
  