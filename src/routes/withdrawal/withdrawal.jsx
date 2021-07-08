import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import styles from "./withdrawal.module.css";
const Withdrawal = ({
  history,
  authService,
  database,
  profile,
  uid,
  logoutUser,
  isUser,
}) => {
  let providerName;
  if (profile) {
    if (profile.providerData[0].providerId === "google.com") {
      providerName = "Google";
    } else if (profile.providerData[0].providerId === "github.com") {
      providerName = "Github";
    } else if (profile.providerData[0].providerId === "facebook.com") {
      providerName = "Facebook";
    } else {
      providerName = undefined;
    }
  }
  const passwordRef = useRef();
  const password2Ref = useRef();
  const checkRef = useRef();
  const certifyButtonRef = useRef();
  const [isReauthenticate, setIsReauthenticate] = useState(false);
  const [checkEqual, setCheckEqual] = useState(true);
  useEffect(() => {
    if (!isUser) {
      history.push("/");
    }
  });
  const goBackPage = () => {
    history.push("/mypage");
  };
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    if (
      profile.providerData[0].providerId !== "password" &&
      isReauthenticate === false
    ) {
      alert("계정 인증이 필요합니다.");
    } else {
      const answer = window.confirm("정말로 탈퇴하시겠습니까?");
      if (answer === true) {
        // 1. password 방식 로그인 탈퇴
        if (profile.providerData[0].providerId === "password") {
          const password = passwordRef.current.value;
          const password2 = passwordRef.current.value;
          if (password !== password2) {
            alert("비밀번호가 일치하지 않습니다.");
          } else {
            authService
              .reauthenticate(profile.email, password) //
              .then(() => {
                authService
                  .deleteUser() //
                  .then(() => {
                    database
                      .deleteUser(uid) //
                      .then(() => {
                        logoutUser();
                        history.push({
                          pathname: "/mypage/withdrawal/done",
                          state: {
                            complete: true,
                          },
                        });
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              })
              .catch(() => {
                alert("현재 비밀번호와 일치하지 않습니다.");
                passwordRef.current.value = "";
                password2Ref.current.value = "";
                passwordRef.current.focus();
              });
          }
        } else {
          // 2. OAuth 방식 로그인 탈퇴
          authService
            .deleteUser() //
            .then(() => {
              database
                .deleteUser(uid) //
                .then(() => {
                  logoutUser();
                  history.push({
                    pathname: "/mypage/withdrawal/done",
                    state: {
                      complete: true,
                    },
                  });
                })
                .catch((error) => {
                  console.log(error);
                });
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    }
  };
  const checkPasswordEqual = () => {
    if (passwordRef.current.value === password2Ref.current.value) {
      setCheckEqual(true);
    } else {
      setCheckEqual(false);
    }
  };
  const reauthenticateAccount = () => {
    authService
      .OauthLogin(providerName) //
      .then(() => {
        setIsReauthenticate(true);
      });
  };
  return (
    <>
      {profile && (
        <div className={styles.container}>
          <form className={styles.form} onSubmit={handleOnSubmit}>
            <div className={styles.title_box}>
              <button onClick={goBackPage} className={styles.button_back}>
                <i
                  className={`fas fa-arrow-circle-left ${styles.icon_back}`}
                ></i>
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
                  ref={checkRef}
                />
                <span className={styles.agree_text}>
                  해당 내용을 모두 확인하였으며, 회원탈퇴에 동의합니다.
                </span>
              </div>
            </div>
            {profile.providerData[0].providerId === "password" ? (
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
                    required={true}
                    ref={passwordRef}
                    onChange={checkPasswordEqual}
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
                    required={true}
                    ref={password2Ref}
                    onChange={checkPasswordEqual}
                  />
                  {!checkEqual ? (
                    <p className={styles.message_alert}>
                      비밀번호가 일치하지 않습니다.
                    </p>
                  ) : (
                    <p className={styles.message_alert}>&nbsp;</p>
                  )}
                </div>
              </div>
            ) : (
              <div className={styles.section_2}>
                <p className={styles.section_title}>
                  안전한 탈퇴를 위해 계정을 인증해주세요.
                </p>
                <div className={styles.account_box}>
                  <input
                    type="text"
                    className={styles.account_input}
                    defaultValue={profile.email}
                    disabled
                  />
                  {isReauthenticate ? (
                    <div
                      ref={certifyButtonRef}
                      onClick={reauthenticateAccount}
                      className={styles.button_certify_active}
                    >
                      인증됨
                    </div>
                  ) : (
                    <div
                      ref={certifyButtonRef}
                      onClick={reauthenticateAccount}
                      className={styles.button_certify_inactive}
                    >
                      인증하기
                    </div>
                  )}
                </div>
              </div>
            )}
            <button className={styles.button_withdrawal}>회원 탈퇴</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Withdrawal;
