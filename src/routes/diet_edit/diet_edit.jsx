import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import styles from "./diet_edit.module.css";

const DietEdit = (props) => {
  const foodNameRef = useRef();
  const gramRef = useRef();
  const kcalRef = useRef();
  const timeRef = useRef();

  const {
    database,
    history,
    location: { state },
    uid,
    isUser,
    user,
    dateObject: { date },
    editDiet,
  } = props;

  useEffect(() => {
    if (state === undefined) {
      history.push("/main");
    }
    if (!isUser) {
      history.push("/main");
    }
  }, [history, isUser, state]);
  const handleOnEdit = (event) => {
    event.preventDefault();
    const prevTime = state.time;
    const currTime = timeRef.current.value;
    const beforeDiet = user.userDiary[date].diet[prevTime][state.dietId];
    const afterDiet = {
      id: state.dietId,
      kcal: Number(kcalRef.current.value),
      name: foodNameRef.current.value,
      totalSize: Number(gramRef.current.value),
    };
    const prevTimeTotalCalories =
      user.userDiary[date].diet[prevTime].totalCalories;
    const currTimeTotalCalories =
      user.userDiary[date].diet[currTime].totalCalories === ""
        ? 0
        : user.userDiary[date].diet[currTime].totalCalories;
    const todayTotalCalories = user.userDiary[date].diet.totalCalories;

    database.editDiet(
      uid,
      date,
      prevTime,
      currTime,
      beforeDiet,
      afterDiet,
      prevTimeTotalCalories,
      currTimeTotalCalories,
      todayTotalCalories
    );
    editDiet(
      date,
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
  const goBackPage = () => {
    history.push("/diet");
  };
  return (
    <>
      {state && user && (
        <div className={styles.container}>
          <div className={styles.main}>
            <button onClick={goBackPage} className={styles.button_back}>
              <i
                className={`fas fa-long-arrow-alt-left ${styles.icon_back}`}
              ></i>
            </button>
            <div className={styles.content}>
              <div className={styles.title}>
                <span>?????? ????????????</span>
                <i className={`fas fa-pen ${styles.icon}`}></i>
              </div>
              <form className={styles.form}>
                <div className={styles.items}>
                  <div className={styles.item}>
                    <label className={styles.item_name} htmlFor="name">
                      ?????????
                    </label>
                    <div className={styles.item_second}>
                      <input
                        ref={foodNameRef}
                        defaultValue={
                          user.userDiary[date].diet[state.time][state.dietId]
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
                      ?????????
                    </label>
                    <div className={styles.item_second}>
                      <input
                        ref={gramRef}
                        defaultValue={
                          user.userDiary[date].diet[state.time][state.dietId]
                            .totalSize
                        }
                        className={styles.item_input}
                        type="number"
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
                      ?????????
                    </label>
                    <div className={styles.item_second}>
                      <input
                        ref={kcalRef}
                        defaultValue={
                          user.userDiary[date].diet[state.time][state.dietId]
                            .kcal
                        }
                        className={styles.item_input}
                        type="number"
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
                      ?????? ??????
                    </label>
                    <div className={styles.item_second}>
                      <select
                        id="time"
                        className={styles.time_select}
                        defaultValue={state.time}
                        ref={timeRef}
                      >
                        <option value="breakfast">??????</option>
                        <option value="lunch">??????</option>
                        <option value="dinner">??????</option>
                        <option value="dessert">??????</option>
                      </select>
                    </div>
                  </div>
                </div>
                <button onClick={handleOnEdit} className={styles.addButton}>
                  ????????????
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DietEdit;
