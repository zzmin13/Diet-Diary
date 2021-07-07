import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import styles from "./water_edit.module.css";
const WaterEdit = (props) => {
  const {
    database,
    history,
    isUser,
    uid,
    user,
    editWater,
    dateObject: { date },
  } = props;
  const breakfastRef = useRef();
  const lunchRef = useRef();
  const dinnerRef = useRef();

  const onEditWater = (event) => {
    event.preventDefault();
    const breakfastWater = Number(breakfastRef.current.value);
    const lunchWater = Number(lunchRef.current.value);
    const dinnerWater = Number(dinnerRef.current.value);
    const todayTotalWater = breakfastWater + lunchWater + dinnerWater;
    const waterObj = {
      breakfast: breakfastWater,
      lunch: lunchWater,
      dinner: dinnerWater,
      totalWater: todayTotalWater,
    };
    database.editWater(uid, date, waterObj);
    editWater(date, waterObj);
    alert("물이 수정되었습니다.");
    history.push("/water");
  };
  const goBackPage = () => {
    history.push("/water");
  };

  useEffect(() => {
    if (!isUser) {
      history.push("/main");
    }
  }, [isUser, history]);
  return (
    <>
      {user.userDiary && (
        <div className={styles.container}>
          <div className={styles.main}>
            <button onClick={goBackPage} className={styles.button_back}>
              <i
                className={`fas fa-long-arrow-alt-left ${styles.icon_back}`}
              ></i>
              <span>BACK</span>
            </button>
            <div className={styles.content}>
              <div className={styles.title}>
                <span>물 수정하기</span>
                <i className={`fas fa-pen ${styles.icon}`}></i>
              </div>
              <form className={styles.form}>
                <div className={styles.items}>
                  <div className={styles.item}>
                    <label
                      className={styles.item_name}
                      htmlFor="breakfast_water"
                    >
                      아침
                    </label>
                    <div className={styles.item_second}>
                      <input
                        ref={breakfastRef}
                        defaultValue={
                          user.userDiary[date].water.breakfast
                            ? user.userDiary[date].water.breakfast
                            : 0
                        }
                        className={styles.item_input}
                        type="number"
                        id="breakfast_water"
                        required={true}
                      />
                      <label
                        className={styles.item_behind}
                        htmlFor="breakfast_water"
                      >
                        ml
                      </label>
                    </div>
                  </div>
                  <div className={styles.item}>
                    <label className={styles.item_name} htmlFor="lunch_water">
                      점심
                    </label>
                    <div className={styles.item_second}>
                      <input
                        ref={lunchRef}
                        defaultValue={
                          user.userDiary[date].water.lunch
                            ? user.userDiary[date].water.lunch
                            : 0
                        }
                        className={styles.item_input}
                        type="number"
                        id="lunch_water"
                        required={true}
                      />
                      <label
                        className={styles.item_behind}
                        htmlFor="lunch_water"
                      >
                        ml
                      </label>
                    </div>
                  </div>
                  <div className={styles.item}>
                    <label className={styles.item_name} htmlFor="dinner_water">
                      저녁
                    </label>
                    <div className={styles.item_second}>
                      <input
                        ref={dinnerRef}
                        defaultValue={
                          user.userDiary[date].water.dinner
                            ? user.userDiary[date].water.dinner
                            : 0
                        }
                        className={styles.item_input}
                        type="number"
                        id="dinner_water"
                        required={true}
                      />
                      <label
                        className={styles.item_behind}
                        htmlFor="dinner_water"
                      >
                        ml
                      </label>
                    </div>
                  </div>
                </div>
                <button onClick={onEditWater} className={styles.addButton}>
                  수정하기
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WaterEdit;
