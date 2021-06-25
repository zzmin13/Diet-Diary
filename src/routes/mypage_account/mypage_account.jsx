import React from "react";
import { useEffect } from "react";
import styles from "./mypage_account.module.css";
const MypageAccount = ({
  history,
  isUser,
  uid,
  user,
  // user: {
  //   information: {
  //     basic: { avatar, email, userName },
  //   },
  // },
}) => {
  useEffect(() => {
    if (!isUser) {
      history.push("/");
    }
  }, [isUser]);
  return (
    <div className={styles.container}>
      <form className={styles.form1}>
        <h1 className={styles.title}>마이페이지</h1>
        <h1 className={styles.form1_title}>나의 계정</h1>
        <div className={styles.profile_box}>
          <img
            className={styles.profile_img}
            src={user ? user.information.basic.avatar : null}
            alt="avatar"
          />
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
          defaultValue={user ? user.information.basic.userName : ""}
        />
        <label className={styles.input_label} htmlFor="mypage_email">
          이메일
        </label>
        <input
          id="mypage_email"
          className={styles.input}
          type="email"
          defaultValue={user ? user.information.basic.email : null}
          disabled
        />
        <button className={styles.button_save}>변경사항 저장</button>
      </form>
    </div>
  );
};
export default MypageAccount;
