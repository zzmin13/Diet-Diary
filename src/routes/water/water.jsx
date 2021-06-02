import React, { useEffect, useState } from "react";

const Water = (props) => {
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
      <h1>Water</h1>
      <button>아침 물</button>
      <button>점심 물</button>
      <button>저녁 물</button>
    </>
  );
};

export default Water;
