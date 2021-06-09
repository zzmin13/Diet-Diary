import React, { useEffect } from "react";
import LoginHeader from "../loginHeader/loginHeader";
import LogoutHeader from "../logout_header/logout_header";

const Header = (props) => {
  const { authService, database, user, loginUser, logoutUser } = props;
  console.log(`header`);
  console.log(`user: ${user}`);
  return (
    <>
      {user ? (
        <LoginHeader authService={authService} />
      ) : (
        <LogoutHeader authService={authService} database={database} />
      )}
    </>
  );
};

export default Header;
