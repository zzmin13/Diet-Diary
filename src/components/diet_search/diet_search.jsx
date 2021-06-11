import React, { useRef, useState } from "react";
import styles from "./diet_search.module.css";
import SearchResult from "../search_result/search_result";

const DietSearch = ({
  database,
  foodSearch,
  loadUserInformation,
  uid,
  user,
}) => {
  const [searchResult, setSearchResult] = useState({});
  const [diet, setDiet] = useState();

  const foodNameRef = useRef();
  const foodOneServingSizeRef = useRef();
  const foodKcalRef = useRef();
  const inputRef = useRef();
  const totalKcalRef = useRef();
  const totalSizeRef = useRef();
  const timeRef = useRef();

  const handleSearch = async (event) => {
    event.preventDefault();
    const term = inputRef.current.value;
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
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>식사 검색하기</h1>
      <form onSubmit={handleSearch} className={styles.form}>
        <input type="search" className={styles.input} ref={inputRef} />
        <button className={styles.search_button}>
          <i className={`fas fa-search ${styles.search_icon}`}></i>
        </button>
      </form>
      <div className={styles.result}>
        <h1 className={styles.result_title}>검색 결과</h1>
        <div className={styles.result_item}>
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
        </div>
      </div>
      <div className={styles.select}>
        <h1 className={styles.select_title}>선택된 항목</h1>
        <span>이름: </span>
        <span ref={foodNameRef}></span>
        <span> / 1회 제공량(g): </span>
        <span ref={foodOneServingSizeRef}></span>
        <span> / 열량(kcal) : </span>
        <span ref={foodKcalRef}></span>
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
  );
};

export default DietSearch;
