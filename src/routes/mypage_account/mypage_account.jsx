import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import styles from "./mypage_account.module.css";
const MypageAccount = ({
  history,
  database,
  imageUploader,
  isUser,
  uid,
  user,
  updateProfile,
}) => {
  const imgRef = useRef();
  const fileRef = useRef();
  const nickNameRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isUser) {
      history.push("/");
    }
  }, [isUser]);
  const onChangeAvatar = (event) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(event.target.files[0]);
    fileReader.onload = function (e) {
      imgRef.current.src = e.target.result;
    };
  };
  const onSubmitForm = (event) => {
    event.preventDefault();
    const nickName = nickNameRef.current.value;
    setIsLoading(true);
    imageUploader //
      .uploadImage(fileRef.current.files[0]) //
      .then((fileURL) => {
        database.updateAccountInformation(uid, fileURL, nickName);
        updateProfile(fileURL, nickName);
      })
      .then(() => {
        setIsLoading(false);
        alert("변경사항이 저장되었습니다.");
      });
  };
  return (
    <div className={styles.container}>
      <form className={styles.form1} onSubmit={onSubmitForm}>
        <h1 className={styles.title}>마이페이지</h1>
        <h1 className={styles.form1_title}>나의 계정</h1>
        <div className={styles.profile_box}>
          <img
            className={styles.profile_img}
            src={user ? user.information.basic.avatar : null}
            alt="avatar"
            ref={imgRef}
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
              ref={fileRef}
              onChange={onChangeAvatar}
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
          ref={nickNameRef}
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
        <button type="submit" className={styles.button_save}>
          {isLoading ? "Loading..." : "변경사항 저장"}
        </button>
      </form>
    </div>
  );
};
export default MypageAccount;
