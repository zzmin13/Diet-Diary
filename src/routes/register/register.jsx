import React from "react";
import styles from "./register.module.css";

const Register = (props) => {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.textBox}>
          <p className={styles.bigText}>다다를 이용하기 전에</p>
          <p className={styles.bigText}>입력해야 할 정보가 있어요</p>
          <p className={styles.middleText}>
            원활한 이용을 위해 고객님의 정보를 등록해주세요📝
          </p>
        </div>
        <input
          className={styles.slide}
          type="radio"
          name="slide"
          id="slide01"
          defaultChecked
        />
        <input
          className={styles.slide}
          type="radio"
          name="slide"
          id="slide02"
        />
        <input
          className={styles.slide}
          type="radio"
          name="slide"
          id="slide03"
        />
        <input
          className={styles.slide}
          type="radio"
          name="slide"
          id="slide04"
        />
        <input
          className={styles.slide}
          type="radio"
          name="slide"
          id="slide05"
        />
        <ul className={styles.slidelist}>
          <li className={styles.li1}>
            <div className={styles.display}>
              <p className={styles.titleText}>1. 성별을 입력해주세요</p>
              <select className={styles.healthInput} name="sex">
                <option value="male">남성</option>
                <option value="female">여성</option>
              </select>
              <label
                htmlFor="slide02"
                className={`${styles.right} ${styles.label}`}
              >
                <i className={`fas fa-arrow-right ${styles.icon}`}></i>
                <div className={styles.labelText}>다음</div>
              </label>
            </div>
          </li>
          <li className={styles.li2}>
            <div className={styles.display}>
              <p className={styles.titleText}>2. 나이를 입력해주세요</p>
              <input
                className={styles.healthInput}
                type="number"
                name="age"
                placeholder="age"
                required
              />
              <div className={styles.labelBox}>
                <label
                  htmlFor="slide01"
                  className={`${styles.left} ${styles.label}`}
                >
                  <i className={`fas fa-arrow-left ${styles.icon}`}></i>
                  <div className={styles.labelText}>이전</div>
                </label>
                <label
                  htmlFor="slide03"
                  className={`${styles.right} ${styles.label}`}
                >
                  <i className={`fas fa-arrow-right ${styles.icon}`}></i>
                  <div className={styles.labelText}>다음</div>
                </label>
              </div>
            </div>
          </li>
          <li className={styles.li3}>
            <div className={styles.display}>
              <p className={styles.titleText}>3. 키를 입력해주세요</p>
              <input
                className={styles.healthInput}
                type="number"
                name="height"
                placeholder="height"
                required
              />
              <div className={styles.labelBox}>
                <label
                  htmlFor="slide02"
                  className={`${styles.left} ${styles.label}`}
                >
                  <i className={`fas fa-arrow-left ${styles.icon}`}></i>
                  <div className={styles.labelText}>이전</div>
                </label>
                <label
                  htmlFor="slide04"
                  className={`${styles.right} ${styles.label}`}
                >
                  <i className={`fas fa-arrow-right ${styles.icon}`}></i>
                  <div className={styles.labelText}>다음</div>
                </label>
              </div>
            </div>
          </li>
          <li className={styles.li4}>
            <div className={styles.display}>
              <p className={styles.titleText}>4. 몸무게를 입력해주세요</p>
              <input
                className={styles.healthInput}
                type="number"
                name="weight"
                placeholder="weight"
                required
              />
              <div className={styles.labelBox}>
                <label
                  htmlFor="slide03"
                  className={`${styles.left} ${styles.label}`}
                >
                  <i className={`fas fa-arrow-left ${styles.icon}`}></i>
                  <div className={styles.labelText}>이전</div>
                </label>
                <label
                  htmlFor="slide05"
                  className={`${styles.right} ${styles.label}`}
                >
                  <i className={`fas fa-arrow-right ${styles.icon}`}></i>
                  <div className={styles.labelText}>다음</div>
                </label>
              </div>
            </div>
          </li>
          <li className={styles.li5}>
            <div className={styles.display}>
              <p className={styles.titleText}>5. 활동량을 입력해주세요</p>
              <select className={styles.healthInput} name="activity">
                <option value="large">활발하게 활동적</option>
                <option value="medium">중간 정도 활동적</option>
                <option value="small">조금 활동적</option>
              </select>
              <div className={styles.descriptionBox}>
                <p className={styles.description}>
                  <span>활발하게 활동적</span> : 육체노동 등 평소 신체 활동량이
                  많은 경우
                </p>
                <p className={styles.description}>
                  <span>중간 정도 활동적</span> : 규칙적인 생활로 보통의
                  활동량을 가진 경우
                </p>
                <p className={styles.description}>
                  <span>조금 활동적</span> : 앉아서 주로 생활하거나 매일 가벼운
                  움직임만 하며 활동량이 적은 경우
                </p>
              </div>
              <div className={styles.lastLabelBox}>
                <label
                  htmlFor="slide04"
                  className={`${styles.left} ${styles.label}`}
                >
                  <i className={`fas fa-arrow-left ${styles.icon}`}></i>
                  <div className={styles.labelText}>이전</div>
                </label>
                <div className={styles.completeBtn}>
                  <i
                    className={`fas fa-check-circle ${styles.completeIcon}`}
                  ></i>
                  <p className={styles.completeText}>작성완료</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Register;
