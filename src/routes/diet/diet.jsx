import React, { useEffect } from "react";
import styles from "./diet.module.css";
const Diet = ({ authService, foodSearch, user, database, history }) => {
  const goDietAddPage = () => {
    history.push("/diet/add");
  };
  useEffect(() => {
    authService.onAuthStateChanged((USER) => {
      if (!USER) {
        history.push("/");
      }
    });
  });
  return (
    <>
      {user.userDiary ? (
        <div className={styles.container}>
          <div className={styles.main}>
            <div className={styles.title}>
              <i className={`fas fa-utensils ${styles.icon}`}></i>
              <span>오늘의 식사</span>
            </div>
            <div className={styles.diet}>
              <div className={styles.diet_item}>
                <div className={styles.diet_item_title}>
                  <h1>아침</h1>
                </div>
                <ul>
                  <li className={styles.food_li}>
                    토마토(데친것) 1회분 (17kcal)
                  </li>
                  <li className={styles.food_li}>
                    닭가슴살 스테이크(오리지널) 1인분(팩) (199kcal)
                  </li>
                </ul>
              </div>
              <div className={styles.diet_item}>
                <h1>점심</h1>
                <ul>
                  <li className={styles.food_li}>
                    토마토(데친것) 1회분 (17kcal)
                  </li>
                  <li className={styles.food_li}>
                    닭가슴살 스테이크(오리지널) 1인분(팩) (199kcal)
                  </li>
                </ul>
              </div>
              <div className={styles.diet_item}>
                <h1>저녁</h1>
                <ul>
                  <li className={styles.food_li}>
                    토마토(데친것) 1회분 (17kcal)
                  </li>
                  <li className={styles.food_li}>
                    닭가슴살 스테이크(오리지널) 1인분(팩) (199kcal)
                  </li>
                </ul>
              </div>
            </div>
            <button onClick={goDietAddPage} className={styles.button}>
              식사 추가하기
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Diet;
