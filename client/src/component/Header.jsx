import React from 'react';
import styles from "./Header.module.css";
import logo from "../assests/logo.png";
import logoright from "../assests/logoright.png"

const Header = () => {
  return (
    <div className={styles.app_Header}>
      <img src={logo} className={styles.logo} alt="" />
      <img src={logoright} className={styles.logo} alt="" />
    </div>
  );
}

export default Header