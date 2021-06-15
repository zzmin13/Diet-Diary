import React from "react";
import { useRef } from "react";
import styles from "./water_edit.module.css";
const WaterEdit = (props) => {
  const { database, history, uid, user, editWater } = props;
  const breakfastRef = useRef();
  const lunchRef = useRef();
  const dinnerRef = useRef();
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
    database.editWater(uid, current, waterObj);
    editWater(current, waterObj);
    alert("물이 수정되었습니다.");
    history.push("/water");
  };
  return (
    <>
      {user.userDiary && (
        <div className={styles.container}>
          <div className={styles.main}>
            <div className={styles.title}>
              <span>물 수정하기</span>
              <i className={`fas fa-pen ${styles.icon}`}></i>
            </div>
            <form className={styles.form}>
              <div className={styles.items}>
                <div className={styles.item}>
                  <label className={styles.item_name} htmlFor="breakfast_water">
                    아침
                  </label>
                  <div className={styles.item_second}>
                    <input
                      ref={breakfastRef}
                      defaultValue={
                        user.userDiary[current].water.breakfast
                          ? user.userDiary[current].water.breakfast
                          : 0
                      }
                      className={styles.item_input}
                      type="text"
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
                        user.userDiary[current].water.lunch
                          ? user.userDiary[current].water.lunch
                          : 0
                      }
                      className={styles.item_input}
                      type="text"
                      id="lunch_water"
                      required={true}
                    />
                    <label className={styles.item_behind} htmlFor="lunch_water">
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
                        user.userDiary[current].water.dinner
                          ? user.userDiary[current].water.dinner
                          : 0
                      }
                      className={styles.item_input}
                      type="text"
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
      )}
    </>
  );
};

export default WaterEdit;
