import React, { useState } from "react";

// Pages
import Signup from "../../containers/Signup/Signup";
import Login from "../../containers/Login/Login";

const ShowLoginOrSignup = props => {
  const [showLoginOrSignup, setLoginOrSignup] = useState(false);

  return (
    <>
      <div>{showLoginOrSignup ? <Login /> : <Signup />}</div>
    </>
  );
};

export default ShowLoginOrSignup;
