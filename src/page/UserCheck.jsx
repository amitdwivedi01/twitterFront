import React from 'react';
import styles from './UserCheck.module.css';
import meal from "../assests/png-31.png";
import reward from "../assests/png-32.png";
import fuel from "../assests/png-33.png";
import health from "../assests/png-34.png";
import telecom from "../assests/png-35.png";
import leave from "../assests/png-36.png";
import gadget from "../assests/png-37.png";
import drive from "../assests/png-38.png";
import uniform from "../assests/png-39.png";
import learn from "../assests/png-40.png";

const UserCheck = () => {
  return (
    <div className={styles.UserCheck}>
        <div className={styles.UserCheck__title}>
            <h2>WHAT ALL BENEFITS YOUR COMPANY IS PROVIDING?</h2>
        </div>
        <form className={styles.usercheck__frm}>
            <div className={styles.usercheck__form} >
            <div className={styles.checkbox_div}>
                <input type="checkbox" name="" id="" />
                <img src={meal} alt="" width="50" />
            </div>
            <div className={styles.checkbox_div}>
                <input type="checkbox" name="" id="" />
                <img src={reward} alt="" width="130" />
            </div>
            <div className={styles.checkbox_div}>
                <input type="checkbox" name="" id="" />
                <img src={fuel} alt="" width="45" />
            </div>
            <div className={styles.checkbox_div}>
                <input type="checkbox" name="" id="" />
                <img src={health} alt="" width="90" />
            </div>
            <div className={styles.checkbox_div}>
                <input type="checkbox" name="" id="" />
                <img src={telecom} alt="" width="90" />
            </div>
            </div>
            <div className={styles.usercheck__form} >
            <div className={styles.checkbox_div}>
                <input type="checkbox" name="" id="" />
                <img src={leave} alt="" width="120" />
            </div>
            <div className={styles.checkbox_div}>
                <input type="checkbox" name="" id="" />
                <img src={gadget} alt="" width="100" />
            </div>
            <div className={styles.checkbox_div}>
                <input type="checkbox" name="" id="" />
                <img src={drive} alt="" width="80" />
            </div>
            <div className={styles.checkbox_div}>
                <input type="checkbox" name="" id="" />
                <img src={uniform} alt="" width="80" />
            </div>
            <div className={styles.checkbox_div}>
                <input type="checkbox" name="" id="" />
                <img src={learn} alt="" width="100" />
            </div>
            </div>
            <div>
                <button className={styles.btn} >
                    Submit
                </button>
            </div>
        </form>
    </div>
  )
}

export default UserCheck