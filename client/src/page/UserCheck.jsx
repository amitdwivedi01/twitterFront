import React, { useState } from "react";
import styles from "./UserCheck.module.css";
import meal from "../assests/meal2.png";
import reward from "../assests/reward2.png";
import fuel from "../assests/fuel2.png";
import health from "../assests/health2.png";
import telecom from "../assests/telecom2.png";
import leave from "../assests/leave2.png";
import gadget from "../assests/gadgets2.png";
import drive from "../assests/driver2.png";
import uniform from "../assests/office2.png";
import learn from "../assests/learning2.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../component/Header";
import img from "../assests/kids.png";
import img1 from "../assests/kids2.png";
const host = "https://gold-cricket-garb.cyclic.app";
// const host = "http://localhost:4000";

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
    companyName: props.data.companyName,
    designation: props.data.designation,
    phone: props.data.phone,
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

    try {
      await axios.post(`${host}/api/userchoice`, selectedItems);
    } catch (error) {
      console.log(error);
    }
  };

  const inputChangeHandler = (input, value) => {
    setSelectedItems((prevState) => {
      return { ...prevState, [input]: value };
    });
    // console.log(selectedItems);
  };
  return (
    <div className={styles.UserCheck}>
      <Header />
      {/* <Footer /> */}
      <div className={styles.logodiv} onClick={changepage}></div>
      <div className={styles.UserCheck__title} style={{ marginBottom: "20px" }}>
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
            <div className={styles.imgcon}>
              <img src={meal} alt="" className={styles.timg} />
              <caption className={styles.imgcaption}>Meal</caption>
            </div>
          </div>
          <div className={styles.checkbox_div}>
            <input
              type="checkbox"
              id="reward"
              value={selectedItems["reward"]}
              onChange={(e) => inputChangeHandler("reward", e.target.checked)}
            />
            <div className={styles.imgcon}>
              <img src={reward} alt="" className={styles.timg} />
              <caption className={styles.imgcaption}>Reward/Gift</caption>
            </div>
          </div>
          <div className={styles.checkbox_div}>
            <input
              type="checkbox"
              id="fuel"
              value={selectedItems["fuel"]}
              onChange={(e) => inputChangeHandler("fuel", e.target.checked)}
            />
            <div className={styles.imgcon}>
              <img src={fuel} alt="" className={styles.timg} />
              <caption className={styles.imgcaption}>Fuel</caption>
            </div>
          </div>
          <div className={styles.checkbox_div}>
            <input
              type="checkbox"
              id="health"
              value={selectedItems["health"]}
              onChange={(e) => inputChangeHandler("health", e.target.checked)}
            />
            <div className={styles.imgcon}>
              <img src={health} alt="" className={styles.timg} />
              <caption className={styles.imgcaption}>
                Health <br /> & Wellness
              </caption>
            </div>
          </div>
          <div className={styles.checkbox_div}>
            <input
              type="checkbox"
              id="telecom"
              value={selectedItems["telecom"]}
              onChange={(e) => inputChangeHandler("telecom", e.target.checked)}
            />
            <div className={styles.imgcon}>
              <img src={telecom} alt="" className={styles.timg} />
              <caption className={styles.imgcaption}>
                Telecommunication <br /> & Data
              </caption>
            </div>
          </div>
        </div>
        <div
          className={styles.usercheck__form}
          style={{ marginBottom: "40px" }}
        >
          <div className={styles.checkbox_div}>
            <input
              type="checkbox"
              id="leave"
              value={selectedItems["leave"]}
              onChange={(e) => inputChangeHandler("leave", e.target.checked)}
            />
            <div className={styles.imgcon}>
              <img src={leave} alt="" className={styles.timg} />
              <caption className={styles.imgcaption}>
                Leave Travel <br />
                Allowance
              </caption>
            </div>
          </div>
          <div className={styles.checkbox_div}>
            <input
              type="checkbox"
              id="gadget"
              value={selectedItems["gadget"]}
              onChange={(e) => inputChangeHandler("gadget", e.target.checked)}
            />
            <div className={styles.imgcon}>
              <img src={gadget} alt="" className={styles.timg} />
              <caption className={styles.imgcaption}>
                Gadgets & <br /> Equipment
              </caption>
            </div>
          </div>
          <div className={styles.checkbox_div}>
            <input
              type="checkbox"
              id="drive"
              value={selectedItems["drive"]}
              onChange={(e) => inputChangeHandler("drive", e.target.checked)}
            />
            <div className={styles.imgcon}>
              <img src={drive} alt="" className={styles.timg} />
              <caption className={styles.imgcaption}>
                Driver <br /> Salary
              </caption>
            </div>
          </div>
          <div className={styles.checkbox_div}>
            <input
              type="checkbox"
              id="uniform"
              value={selectedItems["uniform"]}
              onChange={(e) => inputChangeHandler("uniform", e.target.checked)}
            />
            <div className={styles.imgcon}>
              <img src={uniform} alt="" className={styles.timg} />
              <caption className={styles.imgcaption}>
                Office <br /> Wear
              </caption>
            </div>
          </div>
          <div className={styles.checkbox_div}>
            <input
              type="checkbox"
              id="learn"
              value={selectedItems["learn"]}
              onChange={(e) => inputChangeHandler("learn", e.target.checked)}
            />
            <div className={styles.imgcon}>
              <img src={learn} alt="" className={styles.timg} />
              <caption className={styles.imgcaption}>
                Learning & <br /> Development
              </caption>
            </div>
          </div>
        </div>
        <div className={styles.checkbox_div}>
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
      <img src={img} alt="" className={styles.image} />
      <img src={img1} alt="" className={styles.image2} />
    </div>
  );
};

export default UserCheck;
