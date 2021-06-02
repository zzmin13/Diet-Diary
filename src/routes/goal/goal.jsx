import React, { useEffect, useState } from "react";

const Goal = (props) => {
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
      <h1>Goal</h1>
      <input type="text" placeholder="목표 몸무게" />
    </>
  );
};

export default Goal;
