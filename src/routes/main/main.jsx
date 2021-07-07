import React, { useEffect, useState } from "react";
import Loading from "../../components/loading/loading";
import Calendar from "../../routes/calendar/calendar";
import MainDiary from "../../components/main_diary/main_diary";
import styles from "./main.module.css";
import NotDiary from "../../components/not_diary/not_diary";
import { memo } from "react";

const Main = memo(
  ({
    authService,
    database,
    history,
    user,
    uid,
    dateObject,
    dateObject: { date, day },
    changeDate,
    loadUserInformation,
    deleteDiary,
  }) => {
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
      setIsLoading(true);
      authService.onAuthStateChanged((USER) => {
        if (USER) {
          try {
            database.getUserData(USER.uid).then((response) => {
              if (response === false) {
                window.location.reload();
              } else {
                if (response.information === "") {
                  // 필수 정보가 없으면 /register로 이동
                  history.push("/register");
                }
                loadUserInformation(response);
              }
            });
          } catch (error) {
            console.log(error);
          }
        } else {
          history.push("/");
        }
      });
      return () => setIsLoading(false);
    }, [authService, database, history, loadUserInformation]);
    const goeditpage = (event) => {
      history.push(`/${event.currentTarget.id}`);
    };
    const handleDiaryDelete = (answer) => {
      if (answer === true) {
        database.deleteDiary(uid, date);
        if (Object.keys(user.userDiary).length === 1) {
          database.createDiaryTemplate(uid);
        }
        deleteDiary(date);
        alert("일기가 삭제되었습니다!");
      } else {
        alert("취소되었습니다.");
      }
    };
    return (
      <div className={styles.container}>
        {isLoading && user ? (
          <div className={styles.main}>
            <div className={styles.calendar}>
              <Calendar
                authService={authService}
                database={database}
                dateObject={dateObject}
                user={user}
                date={date}
                changeDate={changeDate}
              />
            </div>
            <div className={styles.diary}>
              {user.userDiary[date] ? (
                <MainDiary
                  date={date}
                  daytext={week[day]}
                  user={user}
                  goeditpage={goeditpage}
                  handleDiaryDelete={handleDiaryDelete}
                />
              ) : (
                <NotDiary
                  database={database}
                  uid={uid}
                  date={date}
                  user={user}
                  loadUserInformation={loadUserInformation}
                />
              )}
            </div>
          </div>
        ) : (
          <div className={styles.loading}>
            <Loading />
          </div>
        )}
      </div>
    );
  }
);

export default Main;
