import React from "react";
import { useEffect } from "react";
import NotDiary from "../../components/not_diary/not_diary";
import styles from "./water.module.css";
const Water = ({
  authService,
  database,
  uid,
  history,
  isUser,
  user,
  dateObject: { date },
  loadUserInformation,
}) => {
  const goWaterAddPage = () => {
    history.push("/water/add");
  };
  const goWaterEditPage = () => {
    history.push("/water/edit");
  };
  const goBackPage = () => {
    history.push("/main");
  };
  useEffect(() => {
    if (!isUser) {
      history.push("/main");
    }
  });
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
              <div className={styles.title}>
                <i className={`fas fa-tint ${styles.icon}`}></i>
                <span>
                  {date.substring(4, 6)}월 {date.substring(6, 8)}일의 물
                </span>
              </div>
              {user.userDiary[date] ? (
                <>
                  <div className={styles.text_column}>
                    <div className={styles.text_column_title}>
                      <div>
                        <span className={styles.bold}>물 합계</span>
                      </div>
                      <div className={styles.text_text2}>
                        <span>
                          {user.userDiary[date].water.totalWater
                            ? user.userDiary[date].water.totalWater
                            : 0}
                        </span>
                        <span> ml</span>
                      </div>
                    </div>
                    <div className={styles.text_column_child}>
                      <div className={styles.text_water}>
                        <div className={styles.text_water_meta}>
                          <div className={styles.text_water_time}>
                            <h1 className={styles.text_water_title}>아침</h1>
                            <div className={styles.text_text2}>
                              <span>
                                {user.userDiary[date].water.breakfast
                                  ? user.userDiary[date].water.breakfast
                                  : 0}
                              </span>
                              <span>ml</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.text_water}>
                        <div className={styles.text_water_meta}>
                          <div className={styles.text_water_time}>
                            <h1 className={styles.text_water_title}>점심</h1>
                            <div className={styles.text_text2}>
                              <span>
                                {user.userDiary[date].water.lunch
                                  ? user.userDiary[date].water.lunch
                                  : 0}
                              </span>
                              <span>ml</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.text_water}>
                        <div className={styles.text_water_meta}>
                          <div className={styles.text_water_time}>
                            <h1 className={styles.text_water_title}>저녁</h1>
                            <div className={styles.text_text2}>
                              <span>
                                {user.userDiary[date].water.dinner
                                  ? user.userDiary[date].water.dinner
                                  : 0}
                              </span>
                              <span>ml</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={goWaterEditPage}
                    className={`${styles.button} ${styles.button_edit}`}
                  >
                    물 수정하기
                  </button>
                  <button
                    onClick={goWaterAddPage}
                    className={`${styles.button} ${styles.button_add}`}
                  >
                    물 추가하기
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

export default Water;
