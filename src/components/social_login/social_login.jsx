import React from "react";
import { useHistory } from "react-router";
import styles from "./social_login.module.css";

const SocialLogin = (props) => {
  const {
    user,
    loginUser,
    logoutUser,
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
    closeModal();
    const response = await authService.OauthLogin(providerName);
    const uid = response.user.uid;
    const email = response.user.email;
    const photoURL = response.user.photoURL;
    const currentYear = `${new Date().getFullYear()}`;
    const currentMonth =
      new Date().getMonth() + 1 < 10
        ? `0${new Date().getMonth() + 1}`
        : `${new Date().getMonth() + 1}`;
    const currentDate =
      new Date().getDate() < 10
        ? `0${new Date().getDate()}`
        : `${new Date().getDate()}`;
    const current = currentYear + currentMonth + currentDate;

    database.isUserExistInDatabase(response.user.uid).then((response) => {
      if (response === false) {
        database.registerUser(uid, email, photoURL, current);
      } else {
        history.push("/main");
      }
    });
  };
  console.log(`socialLogin`);
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
