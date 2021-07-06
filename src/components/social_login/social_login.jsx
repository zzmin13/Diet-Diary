import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useHistory } from "react-router";
import styles from "./social_login.module.css";

const SocialLogin = (props) => {
  const {
    authService,
    database,
    handleOnClick,
    closeModal,
    text1,
    text2,
    text3,
  } = props;

  const history = useHistory();
  const goSocialLogin = async (event) => {
    const providerName = event.currentTarget.name;
    authService
      .OauthLogin(providerName)
      .then((response) => {
        closeModal();
        if (response.user) {
          const uid = response.user.uid;
          database //
            .isUserExistInDatabase(uid)
            .then((result) => {
              if (result === false) {
                database.registerUser(uid);
              } else {
                history.push("/main");
              }
            });
        }
      })
      .catch((error) => {
        if (error.code === "auth/account-exists-with-different-credential") {
          setTimeout(function () {
            alert("동일한 이메일로 가입된 계정이 있습니다.");
          }, 500);
        }
      });
  };
  return (
    <div className={styles.socialLogin}>
      <span className={styles.text1}>{text1}</span>
      <div className={styles.socialLoginButton_box}>
        <button
          onClick={goSocialLogin}
          type="button"
          className={styles.socialLoginButton}
          name="Google"
        >
          <img
            className={styles.socialLoginButton_img}
            src="https://res.cloudinary.com/dgdkgkx1k/image/upload/v1622185667/google_logo_icmb74.jpg"
            alt="Google"
          />
        </button>
        <button
          onClick={goSocialLogin}
          type="button"
          className={styles.socialLoginButton}
          name="Github"
        >
          <img
            className={styles.socialLoginButton_img}
            src="https://res.cloudinary.com/dgdkgkx1k/image/upload/v1622186282/%EA%B9%83%ED%97%88%EB%B8%8C%EB%A1%9C%EA%B3%A0_cw3jgw.png"
            alt="Github"
          />
        </button>
        <button
          onClick={goSocialLogin}
          type="button"
          className={styles.socialLoginButton}
          name="Facebook"
        >
          <img
            className={styles.socialLoginButton_img_facebook}
            src="https://res.cloudinary.com/dgdkgkx1k/image/upload/v1622185657/facebook_logo_dcstru.png"
            alt="Facebook"
          />
        </button>
      </div>
      <div className={styles.texts}>
        <span className={styles.text2}>{text2}</span>
        <span onClick={handleOnClick} className={styles.text3}>
          {text3}
        </span>
      </div>
    </div>
  );
};

export default SocialLogin;
