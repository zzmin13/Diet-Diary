import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import styles from "./diet_edit.module.css";

const DietEdit = (props) => {
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
  const foodNameRef = useRef();
  const gramRef = useRef();
  const kcalRef = useRef();
  const timeRef = useRef();

  const {
    database,
    history,
    location: { state },
    uid,
    user,
    editDiet,
  } = props;

  useEffect(() => {
    if (state === undefined) {
      history.push("/main");
    }
  }, []);

  const handleOnEdit = (event) => {
    event.preventDefault();
    const prevTime = state.time;
    const currTime = timeRef.current.value;
    const beforeDiet = user.userDiary[current].diet[prevTime][state.dietId];
    const afterDiet = {
      id: state.dietId,
      kcal: Number(kcalRef.current.value),
      name: foodNameRef.current.value,
      totalSize: Number(gramRef.current.value),
    };
    const prevTimeTotalCalories =
      user.userDiary[current].diet[prevTime].totalCalories;
    const currTimeTotalCalories =
      user.userDiary[current].diet[currTime].totalCalories === ""
        ? 0
        : user.userDiary[current].diet[currTime].totalCalories;
    const todayTotalCalories = user.userDiary[current].diet.totalCalories;
    editDiet(
      current,
      prevTime,
      currTime,
      beforeDiet,
      afterDiet,
      prevTimeTotalCalories,
      currTimeTotalCalories,
      todayTotalCalories
    );
    history.push("/diet");
  };
  return (
    <>
      {state && user && (
        <div className={styles.container}>
          <div className={styles.main}>
            <div className={styles.title}>
              <span>식사 수정하기</span>
              <i className={`fas fa-pen ${styles.icon}`}></i>
            </div>
            <form className={styles.form}>
              <div className={styles.items}>
                <div className={styles.item}>
                  <label className={styles.item_name} htmlFor="name">
                    음식명
                  </label>
                  <div className={styles.item_second}>
                    <input
                      ref={foodNameRef}
                      defaultValue={
                        user.userDiary[current].diet[state.time][state.dietId]
                          .name
                      }
                      className={styles.item_input}
                      type="text"
                      id="name"
                      required={true}
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <label className={styles.item_name} htmlFor="amount">
                    음식량
                  </label>
                  <div className={styles.item_second}>
                    <input
                      ref={gramRef}
                      defaultValue={
                        user.userDiary[current].diet[state.time][state.dietId]
                          .totalSize
                      }
                      className={styles.item_input}
                      type="text"
                      id="size"
                      required={true}
                    />
                    <label className={styles.item_behind} htmlFor="size">
                      g
                    </label>
                  </div>
                </div>
                <div className={styles.item}>
                  <label className={styles.item_name} htmlFor="kcal">
                    칼로리
                  </label>
                  <div className={styles.item_second}>
                    <input
                      ref={kcalRef}
                      defaultValue={
                        user.userDiary[current].diet[state.time][state.dietId]
                          .kcal
                      }
                      className={styles.item_input}
                      type="text"
                      id="kcal"
                      required={true}
                    />
                    <label className={styles.item_behind} htmlFor="kcal">
                      kcal
                    </label>
                  </div>
                </div>
                <div className={styles.item}>
                  <label className={styles.item_name} htmlFor="time">
                    식사 시간
                  </label>
                  <div className={styles.item_second}>
                    <select
                      id="time"
                      className={styles.time_select}
                      defaultValue={state.time}
                      ref={timeRef}
                    >
                      <option value="breakfast">아침</option>
                      <option value="lunch">점심</option>
                      <option value="dinner">저녁</option>
                      <option value="dessert">간식</option>
                    </select>
                  </div>
                </div>
              </div>
              <button onClick={handleOnEdit} className={styles.addButton}>
                수정하기
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default DietEdit;
