import moment from "moment";
import React, { useEffect, useState } from "react";
import Loading from "../../components/loading/loading";
import Calendar from "../../routes/calendar/calendar";
import MainDiary from "../../components/main_diary/main_diary";
import styles from "./main.module.css";
import NotDiary from "../../components/not_diary/not_diary";

const Main = ({
  authService,
  database,
  history,
  user,
  uid,
  dateObject,
  dateObject: { date, day },
  loadUserInformation,
}) => {
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const daytext = week[day];
  const [isLoading, setIsLoading] = useState(false);
  const [diaryDate, setDiaryDate] = useState(moment().format("YYYYMMDD"));
  const changeDiaryDate = (string) => {
    setDiaryDate(string);
  };
  useEffect(() => {
    authService.onAuthStateChanged((USER) => {
      if (USER) {
        try {
          database.getUserData(USER.uid).then((response) => {
            if (response === false) {
              window.location.reload();
            } else {
              if (response.information.required === undefined) {
                // 필수 정보가 없으면 /register로 이동
                history.push("/register");
              }
              loadUserInformation(response);
              setIsLoading(true);
            }
          });
        } catch (error) {
          console.log(error);
        }
      } else {
        history.push("/");
      }
    });
  }, []);
  const goeditpage = (event) => {
    history.push(`/${event.currentTarget.id}`);
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
              changeDiaryDate={changeDiaryDate}
              diaryDate={diaryDate}
            />
          </div>
          <div className={styles.diary}>
            {user.userDiary[diaryDate] ? (
              <MainDiary
                diaryDate={diaryDate}
                daytext={daytext}
                user={user}
                goeditpage={goeditpage}
              />
            ) : (
              <NotDiary
                database={database}
                uid={uid}
                diaryDate={diaryDate}
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
};

export default Main;
