import React from "react";

const Exercise = ({ history }) => {
  const goExerciseAddPage = () => {
    history.push("/exercise/add");
  };
  return (
    <>
      <h1>Exercise</h1>
      <button onClick={goExerciseAddPage}>운동 입력하기</button>
    </>
  );
};

export default Exercise;
