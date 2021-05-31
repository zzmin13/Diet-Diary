import React, { memo, useEffect, useState } from "react";

const Main = memo((props) => {
  const { authService, history } = props;
  const [loginUser, setLoginUser] = useState();
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setLoginUser({
          name: user.displayName,
          userid: user.uid,
          email: user.email,
        });
      } else {
        history.push("/");
      }
    });
  }, [authService, history]);
  return (
    <>
      {loginUser ? (
        <>
          <h1>{`반갑습니다. ${loginUser.name}님!`}</h1>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
});

export default Main;
