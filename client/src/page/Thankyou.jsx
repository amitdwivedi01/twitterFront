import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from "./Thankyou.module.css";
import Header from '../component/Header';
// import Footer from '../component/Footer';
import img from "../assests/footerl.png";
import img1 from "../assests/footerr.png";

const Thankyou = () => {
  const navigate = useNavigate();

    const changepage = () => {
      navigate("/");
    };
  return (
    <div className={styles.thankyou__app}>
      <Header />
      {/* <Footer /> */}
      <div className={styles.logodiv} onClick={changepage}></div>
      <h1>THANK YOU, LET'S PLAY!</h1>
      <img src={img} alt="" className={styles.image} />
      <img src={img1} alt="" className={styles.image2} />
    </div>
  );
}

export default Thankyou