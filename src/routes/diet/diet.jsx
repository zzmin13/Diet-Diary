import React, { useEffect, useRef, useState } from "react";
import DietItem from "../../components/diet_item/diet_item";
import SearchResult from "../../components/search_result/search_result";
import styles from "./diet.module.css";

const Diet = (props) => {
  console.log(props);
  const {
    authService,
    database,
    foodSearch,
    history,
    location: {
      state: {
        currentDate,
        todayDiet,
        todayDiet: { breakfast, lunch, dinner, dessert, totalCalories },
        uid,
      },
    },
  } = props;

  const [diet, setDiet] = useState();
  const [searchResult, setSearchResult] = useState({});
  const searchRef = useRef();
  const timeRef = useRef();

  const foodNameRef = useRef();
  const foodOneServingSizeRef = useRef();
  const foodKcalRef = useRef();
  const totalSizeRef = useRef();
  const totalKcalRef = useRef();

  useEffect(() => {
    if (uid === undefined) {
      history.push("/main");
    } else {
      setDiet(todayDiet);
    }
  }, [history]);

  const handleFoodSearch = async (event) => {
    event.preventDefault();
    const term = searchRef.current.value;
    const response = await foodSearch.getFoodInformation(term);
    const result = {};
    response.data.body.items.map((element, index) => {
      result[index] = {
        name: element.DESC_KOR, // 이름
        oneServingSize: element.SERVING_WT, // 1회 제공량(g)
        kcal: element.NUTR_CONT1, // 열량(kcal)
        carbohydrates: element.NUTR_CONT2, // 탄수화물(g)
        proteins: element.NUTR_CONT3, // 단백질(g)
        fats: element.NUTR_CONT4, // 지방(g)
      };
    });
    setSearchResult(result);
  };
  const onSelectFood = (value) => {
    foodNameRef.current.innerText = searchResult[value].name;
    foodOneServingSizeRef.current.innerText =
      searchResult[value].oneServingSize;
    foodKcalRef.current.innerText = searchResult[value].kcal;
    totalSizeRef.current.innerText = searchResult[value].oneServingSize;
    totalKcalRef.current.innerText = searchResult[value].kcal;
  };
  const onNumberChange = (event) => {
    const number = event.currentTarget.value;
    totalSizeRef.current.innerText =
      number * Number(foodOneServingSizeRef.current.innerText);
    totalKcalRef.current.innerText =
      number * Number(foodKcalRef.current.innerText);
  };
  const addDiet = () => {
    let time;
    if (timeRef.current.value === "아침") {
      time = "breakfast";
    } else if (timeRef.current.value === "점심") {
      time = "lunch";
    } else if (timeRef.current.value === "저녁") {
      time = "dinner";
    }
    const number = Object.keys(diet[time]).length;
    const newDiet = {
      [number]: {
        name: foodNameRef.current.innerText,
        totalSize: totalSizeRef.current.innerText,
        kcal: totalKcalRef.current.innerText,
        id: Date.now(),
      },
    };
    setDiet({
      ...diet,
      [time]: newDiet,
    });
  };
  console.log({ ...diet });
  return (
    <>
      {diet && (
        <div className={styles.container}>
          <div className={styles.metadata}>
            <div className={styles.metadata_item}>
              <h1 className={styles.metadata_item_title}>🍳 오늘의 식사 🍴</h1>
              <h1 className={styles.metadata_item_title2}>
                {`총 칼로리 : ${diet.totalCalories}`}1000 kcal
              </h1>
            </div>
            <div className={styles.time}>
              <div className={styles.time_item}>
                <h1 className={styles.time_title}>아침🌝</h1>
                <div className={styles.time_dietList}>
                  <DietItem />
                </div>
                {/* {Object.keys(diet.breakfast).map((key) => {
                return (
                  <DietItem
                    key={diet.breakfast[key].id}
                    food={diet.breakfast[key]}
                  />
                );
              })} */}
              </div>
              <div className={styles.time_item}>
                <h1 className={styles.time_title}>점심🌞</h1>
                <div className={styles.time_dietList}>
                  <DietItem />
                  <DietItem />
                  <DietItem />
                  <DietItem />
                  <DietItem />
                  <DietItem />
                  <DietItem />
                  <DietItem />
                  <DietItem />
                  <DietItem />
                  <DietItem />
                  <DietItem />
                  <DietItem />
                </div>
                {/* {Object.keys(diet.lunch).map((key) => {
                  return (
                    <DietItem key={diet.lunch[key].id} food={diet.lunch[key]} />
                  );
                })} */}
              </div>
              <div className={styles.time_item}>
                <h1 className={styles.time_title}>저녁🌛</h1>
                <div className={styles.time_dietList}>
                  <DietItem />
                  <DietItem />
                  <DietItem />
                  <DietItem />
                  <DietItem />
                  <DietItem />
                  <DietItem />
                  <DietItem />
                  <DietItem />
                  <DietItem />
                  <DietItem />
                  <DietItem />
                  <DietItem />
                </div>
                {/* {Object.keys(diet.dinner).map((key) => {
                  return (
                    <DietItem
                      key={diet.dinner[key].id}
                      food={diet.dinner[key]}
                    />
                  );
                })} */}
              </div>
            </div>
          </div>
          <div className={styles.subBox}>
            <div className={styles.search}>
              <h1 className={styles.search_title}>식사 추가하기</h1>
              <form onSubmit={handleFoodSearch} className={styles.search_form}>
                <input
                  ref={searchRef}
                  type="search"
                  className={styles.search_input}
                />
                <button
                  onClick={handleFoodSearch}
                  type="submit"
                  className={styles.search_btn}
                >
                  <i className={`fas fa-search ${styles.search_icon}`}></i>
                </button>
              </form>
            </div>
            <div className={styles.result}>
              <form className={styles.result_form}>
                {Object.keys(searchResult).map((key) => {
                  return (
                    <SearchResult
                      key={key}
                      result={searchResult[key]}
                      id={key}
                      onSelectFood={onSelectFood}
                    />
                  );
                })}
              </form>
              <div className={styles.select}>
                <h1>선택된 음식</h1>
                <span>이름: </span>
                <span ref={foodNameRef}></span>
                <span> / 1회 제공량(g): </span>
                <span ref={foodOneServingSizeRef}></span>
                <span> / 열량(kcal) : </span>
                <span ref={foodKcalRef}></span>
              </div>
              <input
                type="number"
                placeholder="몇 개? (숫자로만 입력)"
                onChange={onNumberChange}
              />
              <br></br>
              <span>양(g) : </span>
              <span ref={totalSizeRef}></span>
              <br></br>
              <span>칼로리(kcal) : </span>
              <span ref={totalKcalRef}></span>
              <select ref={timeRef}>
                <option>아침</option>
                <option>점심</option>
                <option>저녁</option>
              </select>
              <button onClick={addDiet}>추가하기</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Diet;
