import React, { useState } from "react";

// Pages
import Signup from "../../containers/Signup/Signup";
import Login from "../../containers/Login/Login";

const ShowLoginOrSignup = props => {
  const [showLoginOrSignup, setLoginOrSignup] = useState(false);

  return (
    <>
      <button onClick={() => setLoginOrSignup(true)}>Login</button>
      <button onClick={() => setLoginOrSignup(false)}>Signup</button>
      <div>{showLoginOrSignup ? <Login /> : <Signup />}</div>
    </>
  );
};

export default ShowLoginOrSignup;
