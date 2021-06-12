import React, { useRef } from "react";
import { useHistory } from "react-router";
import styles from "./diet_directly.module.css";
const DietDirectly = ({ database, loadUserInformation, uid, user }) => {
  // 식사 직접 추가하는 컴포넌트
  const foodNameRef = useRef();
  const foodSizeRef = useRef();
  const foodKcalRef = useRef();
  const timeRef = useRef();

  const history = useHistory();
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

  const handleOnAddDiet = () => {
    let time;
    if (timeRef.current.value === "아침") {
      time = "breakfast";
    } else if (timeRef.current.value === "점심") {
      time = "lunch";
    } else if (timeRef.current.value === "저녁") {
      time = "dinner";
    } else if (timeRef.current.value === "간식") {
      time = "dessert";
    }
    const newDiet = {
      ...user.userDiary[current].diet[time],
      totalCalories: user.userDiary[current].diet[time].totalCalories
        ? Number(user.userDiary[current].diet[time].totalCalories) +
          Number(foodKcalRef.current.value)
        : Number(foodKcalRef.current.value),
      [Date.now()]: {
        name: foodNameRef.current.value,
        totalSize: Number(foodSizeRef.current.value),
        kcal: Number(foodKcalRef.current.value),
        id: Date.now(),
      },
    };
    const totalKcal =
      Number(user.userDiary[current].diet.totalCalories) +
      Number(foodKcalRef.current.value);
    database.addTodayDiet(uid, current, time, newDiet);
    database.updateTodayTotalCalories(uid, current, totalKcal);
    alert("식사가 추가되었습니다.");
    history.push("/main");
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>직접 추가하기</h1>
      <form className={styles.form}>
        <div className={styles.item}>
          <label className={styles.item_name} htmlFor="name">
            음식명
          </label>
          <div className={styles.item_second}>
            <input
              ref={foodNameRef}
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
              ref={foodSizeRef}
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
              ref={foodKcalRef}
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
            <select ref={timeRef} id="time" className={styles.time_select}>
              <option>아침</option>
              <option>점심</option>
              <option>저녁</option>
              <option>간식</option>
            </select>
          </div>
        </div>
        <button onClick={handleOnAddDiet} className={styles.addButton}>
          추가하기
        </button>
      </form>
    </div>
  );
};
export default DietDirectly;
