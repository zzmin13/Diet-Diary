import React from "react";
import styles from "./social_login.module.css";
const SocialLogin = (props) => {
  const { text1, text2, text3 } = props;
  return (
    <>
      <span className={styles.text1}>{text1}</span>
      <div className={styles.socialLoginButton_box}>
        <button type="button" className={styles.socialLoginButton}>
          <img
            className={styles.socialLoginButton_img}
            src="https://res.cloudinary.com/dgdkgkx1k/image/upload/v1622185667/google_logo_icmb74.jpg"
            alt="Google"
          />
        </button>
        <button type="button" className={styles.socialLoginButton}>
          <img
            className={styles.socialLoginButton_img}
            src="https://res.cloudinary.com/dgdkgkx1k/image/upload/v1622186282/%EA%B9%83%ED%97%88%EB%B8%8C%EB%A1%9C%EA%B3%A0_cw3jgw.png"
            alt="Github"
          />
        </button>
        <button type="button" className={styles.socialLoginButton}>
          <img
            className={styles.socialLoginButton_img_facebook}
            src="https://res.cloudinary.com/dgdkgkx1k/image/upload/v1622185657/facebook_logo_dcstru.png"
            alt="Facebook"
          />
        </button>
      </div>
      <div className={styles.textBox}>
        <span className={styles.text2}>{text2}</span>
        <span className={styles.text3}>{text3}</span>
      </div>
    </>
  );
};

export default SocialLogin;
