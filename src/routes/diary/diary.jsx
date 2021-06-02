import React, { useEffect, useState } from "react";

const Diary = (props) => {
  console.log(props);
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
      <h1>오늘의 일기</h1>
      <textArea placeholder="일기를 작성해보세요!"></textArea>
      <button>작성하기</button>
    </>
  );
};

export default Diary;
