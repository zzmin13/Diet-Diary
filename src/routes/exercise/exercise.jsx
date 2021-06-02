import React, { useEffect, useState } from "react";

const Exercise = (props) => {
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
      <h1>Exercise</h1>
      <button>운동 입력하기ㅌ`</button>
    </>
  );
};

export default Exercise;
