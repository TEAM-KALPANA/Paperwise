import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import { LogoutButton } from ;

const LogoutButton = ({style}) => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className={style}>
      Log Out
    </button>
  );
};

export default LogoutButton;