import React, { useState } from "react";
import styles from "./UserCheck.module.css";
import meal from "../assests/meal.png";
import reward from "../assests/reward.png";
import fuel from "../assests/fuel.png";
import health from "../assests/health.png";
import telecom from "../assests/telecom.png";
import leave from "../assests/leave.png";
import gadget from "../assests/gadgets.png";
import drive from "../assests/driver.png";
import uniform from "../assests/office.png";
import learn from "../assests/learning.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const host = "http://localhost:4000";

const UserCheck = (props) => {
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
    other: false,
    others: "",
    email: props.data.email,
    name: props.data.name,
  });
  const navigate = useNavigate();

    const changepage = () => {
      navigate("/");
    };

  // console.log(props.data)

  const handleclick = async (e) => {
    e.preventDefault();
    console.log(selectedItems);
    navigate("/feedback");

    try{
      await axios.post(`${host}/api/userchoice`, selectedItems);
    } catch (error) {
      console.log(error);
    }
  }

  const inputChangeHandler = (input, value) => {
    setSelectedItems((prevState) => {
      return { ...prevState, [input]: value };
    });
    // console.log(selectedItems);
  };
  return (
    <div className={styles.UserCheck}>
      <div className={styles.logodiv} onClick={changepage}></div>
      <div className={styles.UserCheck__title} style={{ marginBottom: "50px" }}>
        <h2>WHAT ALL BENEFITS YOUR COMPANY IS PROVIDING?</h2>
      </div>
      <form className={styles.usercheck__frm}>
        <div
          className={styles.usercheck__form}
          style={{ marginBottom: "40px" }}
        >
          <div className={styles.checkbox_div}>
            <input
              type="checkbox"
              id="meal"
              value={selectedItems["meal"]}
              onChange={(e) => inputChangeHandler("meal", e.target.checked)}
            />
            <img src={meal} alt="" width="150" />
          </div>
          <div className={styles.checkbox_div}>
            <input
              type="checkbox"
              id="reward"
              value={selectedItems["reward"]}
              onChange={(e) => inputChangeHandler("reward", e.target.checked)}
            />
            <img src={reward} alt="" width="150" />
          </div>
          <div className={styles.checkbox_div}>
            <input
              type="checkbox"
              id="fuel"
              value={selectedItems["fuel"]}
              onChange={(e) => inputChangeHandler("fuel", e.target.checked)}
            />
            <img src={fuel} alt="" width="150" />
          </div>
          <div className={styles.checkbox_div}>
            <input
              type="checkbox"
              id="health"
              value={selectedItems["health"]}
              onChange={(e) => inputChangeHandler("health", e.target.checked)}
            />
            <img src={health} alt="" width="150" />
          </div>
          <div className={styles.checkbox_div}>
            <input
              type="checkbox"
              id="telecom"
              value={selectedItems["telecom"]}
              onChange={(e) => inputChangeHandler("telecom", e.target.checked)}
            />
            <img src={telecom} alt="" width="150" />
          </div>
        </div>
        <div className={styles.usercheck__form}>
          <div className={styles.checkbox_div} style={{ marginBottom: "40px" }}>
            <input
              type="checkbox"
              id="leave"
              value={selectedItems["leave"]}
              onChange={(e) => inputChangeHandler("leave", e.target.checked)}
            />
            <img src={leave} alt="" width="150" />
          </div>
          <div className={styles.checkbox_div}>
            <input
              type="checkbox"
              id="gadget"
              value={selectedItems["gadget"]}
              onChange={(e) => inputChangeHandler("gadget", e.target.checked)}
            />
            <img src={gadget} alt="" width="150" />
          </div>
          <div className={styles.checkbox_div}>
            <input
              type="checkbox"
              id="drive"
              value={selectedItems["drive"]}
              onChange={(e) => inputChangeHandler("drive", e.target.checked)}
            />
            <img src={drive} alt="" width="150" />
          </div>
          <div className={styles.checkbox_div}>
            <input
              type="checkbox"
              id="uniform"
              value={selectedItems["uniform"]}
              onChange={(e) => inputChangeHandler("uniform", e.target.checked)}
            />
            <img src={uniform} alt="" width="150" />
          </div>
          <div className={styles.checkbox_div}>
            <input
              type="checkbox"
              id="learn"
              value={selectedItems["learn"]}
              onChange={(e) => inputChangeHandler("learn", e.target.checked)}
            />
            <img src={learn} alt="" width="150" />
          </div>
        </div>
        <div className={styles.checkbox_div} style={{ marginTop: "20px" }}>
          <input
            type="checkbox"
            id="other"
            value={selectedItems["other"]}
            onChange={(e) => inputChangeHandler("other", e.target.checked)}
          />
          <label htmlFor="">Others</label>
          <input
            type="text"
            id="others"
            className={styles.others}
            value={selectedItems["others"]}
            onChange={(e) => inputChangeHandler("others", e.target.value)}
          />
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
