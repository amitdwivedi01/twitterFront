import React, { useState } from "react";
import styles from "./Userdata.module.css";
import logo from "../assests/png-03.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const host = "http://localhost:4000";

const initialUserInput = {
  companyName: "",
  designation: "",
  email: "",
  phone: "",
};

const Userdata = () => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const navigate = useNavigate();

  const handleclick = async (e) => {
    e.preventDefault();
    navigate("/usercheck");
    console.log(userInput)

    try{
      await axios.post(`${host}/api/user`, userInput);
    } catch (error) {
      console.log(error);
    }
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prevState) => {
      return { ...prevState, [input]: value };
    });
  };

  return (
    <div className={styles.userform}>
      <form action="" onSubmit={handleclick} className={styles.userform__form}>
        <div>
          <label htmlFor="" />
        </div>
        <div>
          <label htmlFor="">Company Name</label>
          <input
            type="text"
            id="companyName"
            value={userInput["companyName"]}
            onChange={(e) => inputChangeHandler("companyName", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Designation</label>
          <input
            type="text"
            id="designation"
            value={userInput["designation"]}
            onChange={(e) => inputChangeHandler("designation", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Email ID</label>
          <input
            type="email"
            id="email"
            value={userInput["email"]}
            onChange={(e) => inputChangeHandler("email", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Phone No</label>
          <input
            type="number"
            id="phone"
            value={userInput["phone"]}
            onChange={(e) => inputChangeHandler("phone", e.target.value)}
          />
        </div>
        <div className={styles.userform__form_btn}>
          <button className={styles.btn} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Userdata;
