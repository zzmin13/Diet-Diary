import React, { useEffect, useState } from "react";

const Diet = (props) => {
  const { authService, database, history, location } = props;
  const [userid, setUserId] = useState();
  useEffect(() => {
    if (location.state === undefined) {
      history.push("/main");
    } else {
      setUserId(location.state.uid);
    }
  });
  return (
    <>
      <h1>식단 작성하기</h1>
      <button>아침 작성하기</button>
      <button>점심 작성하기</button>
      <button>간식 작성하기</button>
    </>
  );
};

export default Diet;
