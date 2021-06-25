import React from "react";
import styles from "./mypage.module.css";
const Mypage = ({
  uid,
  user: {
    information: {
      basic: { avatar, email, userName },
    },
  },
}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>마이페이지</h1>
      <form className={styles.form1}>
        <h1 className={styles.form1_title}>나의 계정</h1>
        <div className={styles.profile_box}>
          <img className={styles.profile_img} src={avatar} alt="avatar" />
          <div className={styles.profile_meta}>
            <p className={styles.profile_text}>나의 프로필</p>
            <label className={styles.profile_button} htmlFor="mypage_profile">
              사진 변경
            </label>
            <input
              type="file"
              id="mypage_profile"
              style={{ display: "none" }}
            />
          </div>
        </div>
        <label className={styles.input_label} htmlFor="mypage_username">
          닉네임
        </label>
        <input
          id="mypage_username"
          className={styles.input}
          type="text"
          defaultValue={userName ? userName : ""}
        />
        <label className={styles.input_label} htmlFor="mypage_email">
          이메일
        </label>
        <input
          id="mypage_email"
          className={styles.input}
          type="email"
          defaultValue={email}
          disabled
        />
        <button className={styles.button_save}>변경사항 저장</button>
      </form>
    </div>
  );
};
export default Mypage;
