import React, { useState } from "react";
import styles from "./UserCheck.module.css";
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
import { useNavigate } from "react-router-dom";
import axios from "axios";
const host = "http://localhost:4000";

const UserCheck = () => {
  const [selectedItems, setSelectedItems] = useState({
    meal: false,
    reward: false,
    fuel: false,
    health: false,
    telecom: false,
    leave: false,
    gadget: false,
    drive: false,
    uniform: false,
    learn: false,
  });
  const navigate = useNavigate();

  const handleclick = async (e) => {
    e.preventDefault();
    console.log(selectedItems);

    try{
      await axios.post(`${host}/api/userchoice`, selectedItems);
    } catch (error) {
      console.log(error);
    }
  }

  const inputChangeHandler = (input, value) => {
    // navigate("/thankyou");
    setSelectedItems((prevState) => {
      return { ...prevState, [input]: value };
    });
    // console.log(selectedItems);
  };
  return (
    <div className={styles.UserCheck}>
      <div className={styles.UserCheck__title}>
        <h2>WHAT ALL BENEFITS YOUR COMPANY IS PROVIDING?</h2>
      </div>
      <form className={styles.usercheck__frm}>
        <div className={styles.usercheck__form}>
          <div className={styles.checkbox_div}>
            <input
              type="checkbox"
              id="meal"
              value={selectedItems["meal"]}
              onChange={(e) => inputChangeHandler("meal", e.target.checked)}
            />
            <img src={meal} alt="" width="50" />
          </div>
          <div className={styles.checkbox_div}>
            <input
              type="checkbox"
              id="reward"
              value={selectedItems["reward"]}
              onChange={(e) => inputChangeHandler("reward", e.target.checked)}
            />
            <img src={reward} alt="" width="130" />
          </div>
          <div className={styles.checkbox_div}>
            <input
              type="checkbox"
              id="fuel"
              value={selectedItems["fuel"]}
              onChange={(e) => inputChangeHandler("fuel", e.target.checked)}
            />
            <img src={fuel} alt="" width="45" />
          </div>
          <div className={styles.checkbox_div}>
            <input
              type="checkbox"
              id="health"
              value={selectedItems["health"]}
              onChange={(e) => inputChangeHandler("health", e.target.checked)}
            />
            <img src={health} alt="" width="90" />
          </div>
          <div className={styles.checkbox_div}>
            <input
              type="checkbox"
              id="telecom"
              value={selectedItems["telecom"]}
              onChange={(e) => inputChangeHandler("telecom", e.target.checked)}
            />
            <img src={telecom} alt="" width="90" />
          </div>
        </div>
        <div className={styles.usercheck__form}>
          <div className={styles.checkbox_div}>
            <input
              type="checkbox"
              id="leave"
              value={selectedItems["leave"]}
              onChange={(e) => inputChangeHandler("leave", e.target.checked)}
            />
            <img src={leave} alt="" width="120" />
          </div>
          <div className={styles.checkbox_div}>
            <input
              type="checkbox"
              id="gadget"
              value={selectedItems["gadget"]}
              onChange={(e) => inputChangeHandler("gadget", e.target.checked)}
            />
            <img src={gadget} alt="" width="100" />
          </div>
          <div className={styles.checkbox_div}>
            <input
              type="checkbox"
              id="drive"
              value={selectedItems["drive"]}
              onChange={(e) => inputChangeHandler("drive", e.target.checked)}
            />
            <img src={drive} alt="" width="80" />
          </div>
          <div className={styles.checkbox_div}>
            <input
              type="checkbox"
              id="uniform"
              value={selectedItems["uniform"]}
              onChange={(e) => inputChangeHandler("uniform", e.target.checked)}
            />
            <img src={uniform} alt="" width="80" />
          </div>
          <div className={styles.checkbox_div}>
            <input
              type="checkbox"
              id="learn"
              value={selectedItems["learn"]}
              onChange={(e) => inputChangeHandler("learn", e.target.checked)}
            />
            <img src={learn} alt="" width="100" />
          </div>
        </div>
        <div>
          <button className={styles.btn} onClick={handleclick}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserCheck;
