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
  changeDate,
  loadUserInformation,
}) => {
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const [isLoading, setIsLoading] = useState(false);

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
  const handleDiaryDelete = (answer) => {
    if (answer === true) {
      database.deleteDiary(uid, date);
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
};

export default Main;
