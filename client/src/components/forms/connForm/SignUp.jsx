import React, { useState } from "react";

function SignUp() {
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpUserName, setSignUpUserName] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  
  const handleSignUp = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="signup">
      <form onSubmit={handleSignUp}>
        <label htmlFor="chk" aria-hidden="true">
          Sign up
        </label>
        <input
          type="text"
          name="txt"
          placeholder="User name"
          required=""
          value={signUpUserName}
          onChange={(e) => setSignUpUserName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required=""
          value={signUpEmail}
          onChange={(e) => setSignUpEmail(e.target.value)}
        />
        <input
          type="password"
          name="pswd"
          placeholder="Password"
          required=""
          value={signUpPassword}
          onChange={(e) => setSignUpPassword(e.target.value)}
        />
        <button>Sign up</button>
      </form>
    </div>
  );
}

export default SignUp;
