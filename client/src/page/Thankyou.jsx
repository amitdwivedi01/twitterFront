import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from "./Thankyou.module.css";
import Header from '../component/Header';
import Footer from '../component/Footer';

const Thankyou = () => {
  const navigate = useNavigate();

    const changepage = () => {
      navigate("/");
    };
  return (
    <div className={styles.thankyou__app}>
      <Header />
      <Footer />
      <div className={styles.logodiv} onClick={changepage}></div>
      <h1>THANK YOU, LET'S PLAY!</h1>
    </div>
  );
}

export default Thankyou