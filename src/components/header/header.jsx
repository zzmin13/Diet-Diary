import React from "react";
import LoginHeaderContainer from "../../containers/loginHeader_container";
import LogoutHeader from "../logout_header/logout_header";

const Header = (props) => {
  const { authService, database, isUser, user, uid } = props;
  return (
    <>
      {isUser ? (
        <LoginHeaderContainer authService={authService} />
      ) : (
        <LogoutHeader
          authService={authService}
          database={database}
          user={user}
        />
      )}
    </>
  );
};

export default Header;
