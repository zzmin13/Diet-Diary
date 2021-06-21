import React from "react";
import { useState } from "react";
import Loading from "../../components/loading/loading";
import styles from "./not_diary.module.css";

const NotDiary = ({ loadUserInformation, database, uid, date, user }) => {
  const [isLoading, setIsLoading] = useState(false);
  const setDiaryTemplate = () => {
    setIsLoading(true);
    database.setTodayDiaryTemplate(uid, date);
    const data = {
      ...user,
      userDiary: {
        ...user.userDiary,
        [date]: {
          diary: "",
          diet: {
            breakfast: "",
            lunch: "",
            dinner: "",
            dessert: "",
            totalCalories: "",
          },
          exercise: {
            totalCalories: 0,
          },
          water: {
            breakfast: 0,
            lunch: 0,
            dinner: 0,
            totalWater: 0,
          },
          weight: 0.0,
        },
      },
    };
    loadUserInformation(data);
    setIsLoading(false);
  };
  return (
    <>
      {!isLoading ? (
        <div className={styles.container}>
          <h1 className={styles.text}>일기가 없습니다.</h1>
          <button onClick={setDiaryTemplate} className={styles.button}>
            일기쓰기
          </button>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default NotDiary;
