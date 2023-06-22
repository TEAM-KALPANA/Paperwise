import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = ({style}) => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()} className={style}>Log In</button>;
};

export default LoginButton;
