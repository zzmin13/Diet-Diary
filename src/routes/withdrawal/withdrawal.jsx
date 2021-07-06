import React from "react";
import styles from "./withdrawal.module.css";
const Withdrawal = (props) => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.title_box}>
          <button className={styles.button_back}>
            <i className={`fas fa-arrow-circle-left ${styles.icon_back}`}></i>
          </button>
          <h1 className={styles.title}>회원 탈퇴</h1>
        </div>
        <div className={styles.section_1}>
          <p className={styles.section_title}>
            회원탈퇴 전에 반드시 유의사항을 확인하고 진행해주세요.
          </p>
          <ul className={styles.notes}>
            <li className={styles.note}>
              <i
                className={`fas fa-exclamation-circle ${styles.icon_alert}`}
              ></i>
              <span>회원탈퇴는 신청 후 즉시 처리됩니다.</span>
            </li>
            <li className={styles.note}>
              <i
                className={`fas fa-exclamation-circle ${styles.icon_alert}`}
              ></i>
              <span>
                가입시 기재하셨던 정보 및 다다를 이용했던 데이터 모두 일괄
                삭제되며 복구되지 않음을 알려드립니다.
              </span>
            </li>
          </ul>
          <div className={styles.agree}>
            <input
              type="checkbox"
              required={true}
              className={styles.agree_check}
            />
            <span className={styles.agree_text}>
              해당 내용을 모두 확인하였으며, 회원탈퇴에 동의합니다.
            </span>
          </div>
        </div>
        <div className={styles.section_2}>
          <p className={styles.section_title}>
            안전한 탈퇴를 위해 비밀번호를 확인해주세요.
          </p>
          <div className={styles.password_box}>
            <label htmlFor="password" className={styles.password_label}>
              비밀번호 입력
            </label>
            <input
              type="password"
              id="password"
              className={styles.password_input}
            />
          </div>
          <div className={styles.password_box}>
            <label htmlFor="password2" className={styles.password_label}>
              비밀번호 확인
            </label>
            <input
              type="password"
              id="password2"
              className={styles.password_input}
            />
          </div>
        </div>
        <button className={styles.button_withdrawal}>회원 탈퇴</button>
      </form>
    </div>
  );
};

export default Withdrawal;
