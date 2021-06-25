import React, { useEffect, useRef } from "react";
import NotDiary from "../../components/not_diary/not_diary";
import styles from "./diary.module.css";
const Diary = ({
  authService,
  database,
  history,
  uid,
  user,
  dateObject: { date, day },
  loadUserInformation,
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
              <span>MAIN</span>
            </button>
            <div className={styles.content}>
              <h1 className={styles.title}>
                📝 {date.substring(4, 6)}월 {date.substring(6, 8)}일의 일기
              </h1>

              {user.userDiary[date] ? (
                <>
                  <textarea
                    ref={textareaRef}
                    defaultValue={user.userDiary[date].diary}
                    className={styles.textarea}
                  ></textarea>
                  <button onClick={writeDiary} className={styles.button}>
                    작성 완료
                  </button>
                </>
              ) : (
                <>
                  <NotDiary
                    loadUserInformation={loadUserInformation}
                    database={database}
                    uid={uid}
                    date={date}
                    user={user}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Diary;
