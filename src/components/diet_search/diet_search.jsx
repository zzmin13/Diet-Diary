import React, { useRef, useState } from "react";
import styles from "./diet_search.module.css";
import SearchResult from "../search_result/search_result";
import { useHistory } from "react-router";
import Loading from "../loading/loading";

const DietSearch = ({
  addDiet,
  database,
  foodSearch,
  uid,
  user,
  dateObject: { date, day },
}) => {
  const history = useHistory();

  const [searchResult, setSearchResult] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef();
  const foodNameRef = useRef();
  const foodOneServingSizeRef = useRef();
  const foodKcalRef = useRef();
  const totalKcalRef = useRef();
  const totalServingRef = useRef();
  const totalSizeRef = useRef();
  const timeRef = useRef();

  const handleSearch = (event) => {
    setIsLoading(true);
    event.preventDefault();
    const term = inputRef.current.value;
    foodSearch.getFoodInformation(term).then((response) => {
      const result = {};
      if (response.data.body.items) {
        response.data.body.items.forEach((element, index) => {
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
      } else {
        setSearchResult(false);
      }
      setIsLoading(false);
    });
  };

  const onSelectFood = (value) => {
    const selectedFood = searchResult[value];
    //selectedFood.name : 이름
    // selectedFood.oneServingSize 1인분 g
    // selectedFood.kcal : 1인분의 kcal
    totalServingRef.current.value = 1;
    totalSizeRef.current.innerText = Math.floor(
      Number(selectedFood.oneServingSize)
    );
    totalKcalRef.current.innerText = Math.floor(Number(selectedFood.kcal));
    foodNameRef.current.innerText = selectedFood.name;
    foodKcalRef.current.innerText = Math.floor(Number(selectedFood.kcal));
    foodOneServingSizeRef.current.innerText = Math.floor(
      Number(selectedFood.oneServingSize)
    );
  };

  const onServingChange = (event) => {
    const number = event.currentTarget.value;
    if (number !== undefined) {
      //totalSizeRef.current.innerText (총 g)
      totalSizeRef.current.innerText = Math.floor(
        Number(foodOneServingSizeRef.current.innerText) * number
      );
      //totalKcalRef.current.innerText(총 kcal)
      totalKcalRef.current.innerText = Math.floor(
        Number(foodKcalRef.current.innerText) * number
      );
    } else {
      totalSizeRef.current.innerText = 0;
      totalKcalRef.current.innerText = 0;
    }
  };
  const handleAddDiet = () => {
    if (
      foodNameRef.current.innerText === "" ||
      totalSizeRef.current.innerText === "" ||
      totalKcalRef.current.innerText === ""
    ) {
      alert("음식이 선택되지 않았습니다.");
    } else if (Number(totalSizeRef.current.innerText) === 0) {
      alert("음식 양을 다시 선택해주세요.");
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
            Number(totalKcalRef.current.innerText)
          : Number(totalKcalRef.current.innerText),
        [Date.now()]: {
          name: foodNameRef.current.innerText,
          totalSize: Number(totalSizeRef.current.innerText),
          kcal: Number(totalKcalRef.current.innerText),
          id: Date.now(),
        },
      };
      const totalKcal =
        Number(user.userDiary[date].diet.totalCalories) +
        Number(totalKcalRef.current.innerText);
      database.addTodayDiet(uid, date, time, newDiet, totalKcal);
      addDiet(date, time, newDiet, totalKcal);
      alert("식사가 추가되었습니다.");
      history.push("/diet");
    }
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
          {isLoading === false ? (
            searchResult === false ? (
              <div className={styles.noResult}>
                <h1>검색 결과가 없습니다.😥</h1>
              </div>
            ) : (
              Object.keys(searchResult).map((key) => {
                return (
                  <SearchResult
                    key={key}
                    result={searchResult[key]}
                    id={key}
                    onSelectFood={onSelectFood}
                  />
                );
              })
            )
          ) : (
            <div className={styles.loading}>
              <Loading />
            </div>
          )}
        </div>
      </div>
      <div className={styles.select}>
        <h1 className={styles.select_title}>선택된 항목</h1>
        <div className={styles.select_box1}>
          <span ref={foodNameRef} className={styles.food_name}></span>
          <div className={styles.select_mini}>
            <div>
              <span>(1인분 : </span>
              <span ref={foodOneServingSizeRef}></span>
              <span>g,&nbsp;</span>
            </div>
            <div>
              <span ref={foodKcalRef}></span>
              <span>kcal)</span>
            </div>
          </div>
        </div>
        <div className={styles.select_box2}>
          <select ref={timeRef} className={styles.time_select}>
            <option>아침</option>
            <option>점심</option>
            <option>저녁</option>
            <option>간식</option>
          </select>
          <div className={styles.size}>
            <input
              ref={totalServingRef}
              className={styles.input_number}
              min="0"
              step="0.2"
              defaultValue="1.0"
              type="number"
              placeholder="몇 개? (숫자로만 입력)"
              onChange={onServingChange}
            />
            <span className={styles.size_text}>인분</span>
          </div>
          <div className={styles.gram}>
            <span ref={totalSizeRef} className={styles.gram_ref}></span>
            <span>(g) </span>
          </div>
          <div className={styles.total}>
            <span ref={totalKcalRef} className={styles.total_ref}></span>
            <span>(kcal)</span>
          </div>
        </div>

        <button className={styles.addButton} onClick={handleAddDiet}>
          추가하기
        </button>
      </div>
    </div>
  );
};

export default DietSearch;
