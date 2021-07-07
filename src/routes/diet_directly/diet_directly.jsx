import React, { useRef } from "react";
import styles from "./diet_directly.module.css";
const DietDirectly = ({
  history,
  database,
  uid,
  user,
  dateObject: { date },
  addDiet,
}) => {
  const foodNameRef = useRef();
  const foodSizeRef = useRef();
  const foodKcalRef = useRef();
  const timeRef = useRef();

  const handleAddDiet = () => {
    if (
      foodNameRef.current.value === "" ||
      foodSizeRef.current.value === "" ||
      foodKcalRef.current.value === ""
    ) {
      alert("항목을 채워주세요.");
    } else if (
      foodSizeRef.current.value <= 0 &&
      foodKcalRef.current.value < 0
    ) {
      alert("음식량과 칼로리를 다시 입력해주세요.");
      foodSizeRef.current.value = "";
      foodKcalRef.current.value = "";
    } else if (foodSizeRef.current.value <= 0) {
      alert("음식량을 다시 입력해주세요.");
      foodSizeRef.current.value = "";
    } else if (foodKcalRef.current.value < 0) {
      alert("칼로리를 다시 입력해주세요.");
      foodKcalRef.current.value = "";
    } else {
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
        ...user.userDiary[date].diet[time],
        totalCalories: user.userDiary[date].diet[time].totalCalories
          ? Number(user.userDiary[date].diet[time].totalCalories) +
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
        Number(user.userDiary[date].diet.totalCalories) +
        Number(foodKcalRef.current.value);

      database.addTodayDiet(uid, date, time, newDiet, totalKcal);
      addDiet(date, time, newDiet, totalKcal);
      alert("식사가 추가되었습니다.");
      history.push("/diet");
    }
  };
  const goBackPage = () => {
    history.push("/diet");
  };
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <button onClick={goBackPage} className={styles.button_back}>
          <i className={`fas fa-long-arrow-alt-left ${styles.icon_back}`}></i>
        </button>
        <h1 className={styles.title}>직접 추가하기</h1>
        <form className={styles.form}>
          <div className={styles.item}>
            <label className={styles.item_name} htmlFor="name">
              음식명
            </label>
            <input
              ref={foodNameRef}
              className={styles.item_input}
              type="text"
              id="name"
              required={true}
            />
          </div>
          <div className={styles.item}>
            <label className={styles.item_name} htmlFor="amount">
              음식량 (g)
            </label>
            <input
              ref={foodSizeRef}
              className={styles.item_input}
              type="number"
              id="size"
              required={true}
            />
          </div>
          <div className={styles.item}>
            <label className={styles.item_name} htmlFor="kcal">
              칼로리 (kcal)
            </label>
            <input
              ref={foodKcalRef}
              className={styles.item_input}
              type="number"
              id="kcal"
              required={true}
            />
          </div>
          <div className={styles.item}>
            <label className={styles.item_name} htmlFor="time">
              식사 시간
            </label>
            <select ref={timeRef} id="time" className={styles.time_select}>
              <option>아침</option>
              <option>점심</option>
              <option>저녁</option>
              <option>간식</option>
            </select>
          </div>
          <button onClick={handleAddDiet} className={styles.addButton}>
            추가하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default DietDirectly;
