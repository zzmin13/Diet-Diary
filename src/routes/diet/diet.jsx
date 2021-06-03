import React, { useEffect, useRef, useState } from "react";
import DietItem from "../../components/diet_item/diet_item";
import SearchResult from "../../components/search_result/search_result";

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
        name: element.DESC_KOR,
        oneServingSize: element.SERVING_WT,
        kcal: element.NUTR_CONT1,
        carbohydrates: element.NUTR_CONT2,
        proteins: element.NUTR_CONT3,
        fats: element.NUTR_CONT4,
      };
    });
    setSearchResult(result);
    // 받아온 데이터는 response.data.body.items에 있음
    // SERVING_WT : 1회 제공량 (g)
    // NUTR_CONT1 : 열량(kcal)
    // NUTR_CONT2 : 탄수화물(g)
    // NUTR_CONT3 : 단백질(g)
    // NUTR_CONT4 : 지방(g)

    let time;
    if (timeRef.current.value === "아침") {
      time = "breakfast";
    } else if (timeRef.current.value === "점심") {
      time = "lunch";
    } else if (timeRef.current.value === "저녁") {
      time = "dinner";
    }
    // const number = Object.keys(diet.breakfast).length;
    // const newDiet = {
    //   [number]: {
    //     name: term,
    //     amount: "200g",
    //     calories: "150kcal",
    //     id: Date.now(),
    //   },
    // };
    // setDiet({
    //   ...diet,
    //   [time]: newDiet,
    // });
  };
  console.log({ ...diet });
  return (
    <>
      {diet && (
        <>
          <h1>{`총 칼로리 : ${diet.totalCalories}`}</h1>
          <h3>{`아침:`}</h3>
          {Object.keys(diet.breakfast).map((key) => {
            return (
              <DietItem
                key={diet.breakfast[key].id}
                food={diet.breakfast[key]}
              />
            );
          })}
          <h3>{`점심:`}</h3>
          {Object.keys(diet.lunch).map((key) => {
            return <DietItem key={diet.lunch[key].id} food={diet.lunch[key]} />;
          })}
          <h3>{`저녁:`}</h3>
          {Object.keys(diet.dinner).map((key) => {
            return (
              <DietItem key={diet.dinner[key].id} food={diet.dinner[key]} />
            );
          })}
          <h3>식사 추가하기</h3>
          <form onSubmit={handleFoodSearch}>
            <input ref={searchRef} type="search" />
            <button onClick={handleFoodSearch} type="submit">
              검색
            </button>
          </form>
          <div>
            <h1>결과</h1>
            {Object.keys(searchResult).map((key) => {
              return <SearchResult key={key} result={searchResult[key]} />;
            })}
            <select ref={timeRef}>
              <option>아침</option>
              <option>점심</option>
              <option>저녁</option>
            </select>
          </div>
        </>
      )}
    </>
  );
};

export default Diet;