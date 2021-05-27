import React from "react";
import styles from "./home.module.css";

const Home = (props) => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.text}>
          <p>
            인간의 기억력은 그리 길지 않습니다.
            <br />
            기록은 우리의 삶을 돌아보게 만들며 앞으로 나아갈 기초를 쌓게
            만들어주기도 하죠.
            <br />
            <br />
            다이어트도 마찬가지입니다.
            <br />
            기록을 하면 원인을 파악하고 더 나은 변화를 만들어낼 수 있답니다.
            <br />
            <br />
            Diet Diary와 함께 식단기록와 운동기록, 신체기록을 남겨보세요.
          </p>
        </div>
        <button>지금 시작하기</button>
      </main>
    </>
  );
};

export default Home;
