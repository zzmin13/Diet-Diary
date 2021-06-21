import React, { useEffect, useRef } from "react";
import styles from "./diary.module.css";
const Diary = ({
  authService,
  database,
  history,
  uid,
  user,
  dateObject: { date, day },
}) => {
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const dayText = week[day];
  const textareaRef = useRef();
  const writeDiary = () => {
    database.createOrUpdateTodayDiary(uid, date, textareaRef.current.value);
    alert("일기가 작성되었습니다🎵");
    history.push("/main");
  };
  const goBackPage = () => {
    history.push("/main");
  };
  useEffect(() => {
    authService.onAuthStateChanged((USER) => {
      if (!USER) {
        history.push("/");
      }
    });
  }, [authService, history]);
  return (
    <>
      {user.userDiary ? (
        <div className={styles.container}>
          <div className={styles.main}>
            <button onClick={goBackPage} className={styles.button_back}>
              <i
                className={`fas fa-long-arrow-alt-left ${styles.icon_back}`}
              ></i>
              <span>back</span>
            </button>
            <div className={styles.content}>
              <h1 className={styles.title}>일기 쓰기 📝</h1>
              <div className={styles.date}>
                <span>
                  {date.substring(4, 6)}월 {date.substring(6, 8)}일 {dayText}
                  요일
                </span>
              </div>
              <textarea
                ref={textareaRef}
                defaultValue={user.userDiary[date].diary}
                className={styles.textarea}
              ></textarea>
              <button onClick={writeDiary} className={styles.button}>
                작성 완료
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Diary;
