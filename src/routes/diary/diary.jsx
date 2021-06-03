import React, { memo, useEffect, useRef, useState } from "react";

const Diary = memo((props) => {
  console.log(props);
  const {
    authService,
    database,
    history,
    location: { state },
  } = props;
  const diaryRef = useRef();

  const submitDiary = () => {
    const content = diaryRef.current.value;
    database.createOrUpdateTodayDiary(state.uid, state.currentDate, content);
    history.push("/main");
  };
  useEffect(() => {
    if (state.uid === undefined) {
      history.push("/main");
    }
  }, [history]);
  return (
    <>
      {state.uid && (
        <>
          <h1>오늘의 일기</h1>
          <textarea
            defaultValue={state.todayDiary}
            ref={diaryRef}
            placeholder="일기를 작성해보세요!"
          ></textarea>
          <button onClick={submitDiary}>작성하기</button>
        </>
      )}
    </>
  );
});

export default Diary;
