import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleOath = () => {
  const responseGoogle = (response) => {
    console.log(response);
    // Handle the Google login response here
  };

  const onFailure = (error) => {
    console.log(error);
    // Handle the failure here
  };

  return (
    <div>
      <GoogleLogin
        clientId="68511147403-ipemso6cdv0qaqo3iu2943rs8kchcrr1.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        uxMode="redirect"
      />
    </div>
  );
};

export default GoogleOath;
