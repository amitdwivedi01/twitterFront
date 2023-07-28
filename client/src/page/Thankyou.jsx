import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from "./Thankyou.module.css";

const Thankyou = () => {
  const navigate = useNavigate();

    const changepage = () => {
      navigate("/");
    };
  return (
    <div className={styles.thankyou__app}>
      <div className={styles.logodiv} onClick={changepage}></div>
      <h1>THANK YOU, LET'S PLAY!</h1>
    </div>
  );
}

export default Thankyou