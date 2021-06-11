import React, { useRef } from "react";
import styles from "./diary.module.css";
const Diary = ({ database, history, uid, user }) => {
  const currentYear = `${new Date().getFullYear()}`;
  const currentMonth =
    new Date().getMonth() + 1 < 10
      ? `0${new Date().getMonth() + 1}`
      : `${new Date().getMonth() + 1}`;
  const currentDate =
    new Date().getDate() < 10
      ? `0${new Date().getDate()}`
      : `${new Date().getDate()}`;
  const current = currentYear + currentMonth + currentDate;
  const textareaRef = useRef();
  const writeDiary = () => {
    //textareaRef.current.value
    database.createOrUpdateTodayDiary(uid, current, textareaRef.current.value);
    alert("일기가 작성되었습니다🎵");
    history.push("/main");
  };
  return (
    <>
      {user.userDiary ? (
        <div className={styles.container}>
          <div className={styles.main}>
            <h1 className={styles.title}>오늘의 일기 쓰기 📝</h1>
            <textarea
              ref={textareaRef}
              defaultValue={user.userDiary[current].diary}
              className={styles.textarea}
            ></textarea>
            <button onClick={writeDiary} className={styles.button}>
              작성 완료
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Diary;
