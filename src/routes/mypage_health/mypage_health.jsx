import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import styles from "./mypage_health.module.css";
const MypageHealth = ({ history, user }) => {
  const [isLoading, setIsLoading] = useState(false);
  const heightRef = useRef();
  const weightRef = useRef();
  const ageRef = useRef();
  const sexRef = useRef();
  const activityRef = useRef();
  const recommendedCaloriesRef = useRef();

  const goBackPage = () => {
    history.push("/mypage");
  };
  const onSubmitForm = (event) => {
    event.preventDefault();
  };
  const calculateAutoCalories = () => {
    const sex = sexRef.current.value;
    const age = ageRef.current.value;
    const height = heightRef.current.value;
    const weight = weightRef.current.value;
    const activity = activityRef.current.value;
    if (age === "" || height === "" || weight === "") {
      alert("빈 항목이 있습니다.");
    } else {
      let activityPoint;
      if (activity === "large") {
        activityPoint = 40;
      } else if (activity === "medium") {
        activityPoint = 33;
      } else if (activity === "small") {
        activityPoint = 25;
      }
      const recommendedCalories = Math.round(
        (height - 100) * 0.9 * activityPoint
      );
      if (
        recommendedCalories === Number(recommendedCaloriesRef.current.value)
      ) {
        alert("이미 적용된 값입니다.");
      } else {
        recommendedCaloriesRef.current.value = recommendedCalories;
      }
    }
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onSubmitForm}>
        <div className={styles.title_box}>
          <button onClick={goBackPage} className={styles.button_back}>
            <i className={`fas fa-arrow-circle-left ${styles.icon_back}`}></i>
          </button>
          <h1 className={styles.title}>건강 정보 설정</h1>
        </div>
        <h1 className={styles.form_title}>하루 권장 칼로리</h1>
        <div className={styles.recommendedCalories_box}>
          <input
            type="number"
            className={styles.input_kcal}
            defaultValue={
              user ? user.information.required.recommendedCalories : ""
            }
            ref={recommendedCaloriesRef}
          />
          <button
            className={styles.button_calculate}
            onClick={calculateAutoCalories}
          >
            자동 계산
          </button>
        </div>
        <div>
          <p className={styles.helpMessage}>
            💡 숫자를 수정하면 직접 칼로리를 변경할 수 있습니다.
          </p>
          <p className={styles.helpMessage}>
            💡 자동 계산을 누르면 나의 신체 정보 입력을 기반해서 칼로리가
            계산됩니다.
          </p>
        </div>
        <h1 className={styles.form_title}>기본 정보 설정</h1>
        <label className={styles.input_label} htmlFor="mypage_height">
          키(cm)
        </label>
        <input
          id="mypage_height"
          className={styles.input}
          type="text"
          defaultValue={user ? user.information.required.height : ""}
          ref={heightRef}
        />
        <label className={styles.input_label} htmlFor="mypage_weight">
          몸무게(kg)
        </label>
        <input
          id="mypage_weight"
          className={styles.input}
          type="text"
          defaultValue={user ? user.information.required.weight : ""}
          ref={weightRef}
        />
        <label className={styles.input_label} htmlFor="mypage_age">
          나이(세)
        </label>
        <input
          id="mypage_age"
          className={styles.input}
          type="text"
          defaultValue={user ? user.information.required.age : ""}
          ref={ageRef}
        />
        <label className={styles.input_label} htmlFor="mypage_sex">
          성별
        </label>
        <select
          className={styles.input}
          id="mypage_sex"
          defaultValue={user && user.information.required.sex}
          ref={sexRef}
        >
          <option value="male">남자</option>
          <option value="female">여자</option>
        </select>
        <label className={styles.input_label} htmlFor="mypage_activity">
          활동지수
        </label>
        <select
          className={styles.input}
          id="mypage_activity"
          defaultValue={user && user.information.required.activity}
          ref={activityRef}
        >
          <option value="large">활발하게 활동적</option>
          <option value="medium">중간 정도 활동적</option>
          <option value="small">조금 활동적</option>
        </select>
        <button type="submit" className={styles.button_save}>
          {isLoading ? "Loading..." : "변경사항 저장"}
        </button>
      </form>
    </div>
  );
};

export default MypageHealth;
