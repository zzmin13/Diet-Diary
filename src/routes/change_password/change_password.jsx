import React from "react";
import { useState } from "react";
import { useRef } from "react";
import Loading from "../../components/loading/loading";
import styles from "./change_password.module.css";

const ChangePassword = ({ authService, history, profile, isUser }) => {
  const passwordRef = useRef();
  const password2Ref = useRef();
  const currentPasswordRef = useRef();
  const [checkPassword1, setCheckPassword1] = useState(true);
  const [checkPassword2, setCheckPassword2] = useState(true);

  const goBackPage = () => {
    history.push("/mypage");
  };
  const checkPassword = (password) => {
    return /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!%*#?&]).{8,15}.$/.test(
      password
    );
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const password = passwordRef.current.value;
    const password2 = passwordRef.current.value;
    const currentPassword = currentPasswordRef.current.value;
    authService //
      .reauthenticate(profile.email, currentPassword) //
      .then(() => {
        if (password !== password2) {
          alert("비밀번호가 일치하지 않습니다.");
        } else if (!checkPassword(password)) {
          alert(
            "비밀번호는 8~15자리의 영문, 숫자, 특수문자를 모두 포함하여야 합니다."
          );
        } else {
          authService.updatePassword(
            password,
            successUpdatePassword,
            failUpdatePassword
          );
        }
      })
      .catch(() => {
        alert("현재 비밀번호가 일치하지 않습니다.");
        currentPasswordRef.current.value = "";
        currentPasswordRef.current.focus();
      });
  };
  const handleChangePassword1 = (event) => {
    if (checkPassword(event.currentTarget.value)) {
      setCheckPassword1(true);
    } else {
      setCheckPassword1(false);
    }
  };
  const handleChangePassword2 = (event) => {
    if (passwordRef.current.value === password2Ref.current.value) {
      setCheckPassword2(true);
    } else {
      setCheckPassword2(false);
    }
  };
  const successUpdatePassword = () => {
    alert("비밀번호가 성공적으로 변경되었습니다.");
    history.push("/mypage");
  };
  const failUpdatePassword = () => {
    alert("비밀번호 변경에 실패했습니다.");
  };
  return (
    <>
      {profile ? (
        <div className={styles.container}>
          <form className={styles.form1} onSubmit={handleOnSubmit}>
            <div className={styles.title_box}>
              <button onClick={goBackPage} className={styles.button_back}>
                <i
                  className={`fas fa-arrow-circle-left ${styles.icon_back}`}
                ></i>
              </button>
              <h1 className={styles.title}>비밀번호 변경</h1>
            </div>
            <h1 className={styles.form1_title}>비밀번호 재설정</h1>
            {/* <div className={styles.info}>
              <p className={styles.info_text}>
                비밀번호를 재설정하기 위해 가입 이메일로 링크를 전송합니다.
              </p>
              <p className={styles.info_email}>
                <i className={`fas fa-envelope ${styles.icon_mail}`}></i>
                {profile.email}
              </p>
              <button className={styles.button_submit}>
                재설정 메일 보내기
              </button>
            </div> */}
            <div className={styles.password_box}>
              <div className={styles.password_input_box0}>
                <label
                  className={styles.password_input_label}
                  htmlFor="currentPassword"
                >
                  현재 비밀번호
                </label>
                <input
                  className={styles.password_input}
                  type="password"
                  id="currentPassword"
                  ref={currentPasswordRef}
                />
              </div>
              <div className={styles.password_input_box1}>
                <label
                  className={styles.password_input_label}
                  htmlFor="newPassword"
                >
                  새 비밀번호
                </label>
                <input
                  className={styles.password_input}
                  type="password"
                  id="newPassword"
                  ref={passwordRef}
                  onChange={handleChangePassword1}
                />
                {!checkPassword1 ? (
                  <p className={styles.message_alert}>
                    비밀번호는 8~15자리의 영문, 숫자, 특수문자를 모두 포함하여야
                    합니다.
                  </p>
                ) : (
                  <p className={styles.message_alert}>&nbsp;</p>
                )}
              </div>
              <div className={styles.password_input_box2}>
                <label
                  className={styles.password_input_label}
                  htmlFor="verifyPassword"
                >
                  비밀번호 확인
                </label>
                <input
                  className={styles.password_input}
                  type="password"
                  id="verifyPassword"
                  ref={password2Ref}
                  onChange={handleChangePassword2}
                />
                {!checkPassword2 ? (
                  <p className={styles.message_alert}>
                    비밀번호가 일치하지 않습니다.
                  </p>
                ) : (
                  <p className={styles.message_alert}>&nbsp;</p>
                )}
              </div>
              <button className={styles.button_submit}>
                비밀번호 변경하기
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className={styles.loading_container}>
          <Loading />
        </div>
      )}
    </>
  );
};

export default ChangePassword;
