import React, { memo } from "react";
import styles from "./footer.module.css";
const Footer = memo((props) => {
  console.log(`footer`);
  return (
    <footer className={styles.footer}>
      <h1 className={styles.title}>Made by nyang-in</h1>
    </footer>
  );
});

export default Footer;
