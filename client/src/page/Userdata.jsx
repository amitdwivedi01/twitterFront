import React, { useState } from "react";
import styles from "./Userdata.module.css";
import logo from "../assests/png-03.png";
import { useNavigate } from "react-router-dom";
import Header from "../component/Header";
import axios from "axios";
import Footer from "../component/Footer";

const host = "https://gold-cricket-garb.cyclic.app";
// const host = "http://localhost:4000";

const initialUserInput = {
  name: "",
  companyName: "",
  designation: "",
  email: "",
  phone: "",
};

const Userdata = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const navigate = useNavigate();

  const handleclick = async (e) => {
    e.preventDefault();
    navigate("/usercheck");
    console.log(userInput)

    props.userData({email: userInput["email"], name: userInput["name"], companyName: userInput["companyName"], designation: userInput["designation"], phone: userInput["phone"]});

    // try{
    //   await axios.post(`${host}/api/user`, userInput);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const changepage = () => {
    navigate("/");
  }


  const inputChangeHandler = (input, value) => {
    setUserInput((prevState) => {
      return { ...prevState, [input]: value };
    });
  };

  return (
    <div className={styles.userform}>
      <Header />
      <div className={styles.logodiv} onClick={changepage}>

      </div>
      <form action="" onSubmit={handleclick} className={styles.userform__form}>
        <div>
          <label htmlFor="" />
        </div>
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            id="name"
            value={userInput["name"]}
            onChange={(e) => inputChangeHandler("name", e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="">Company Name</label>
          <input
            type="text"
            id="companyName"
            value={userInput["companyName"]}
            onChange={(e) => inputChangeHandler("companyName", e.target.value)}
            required
            />
        </div>
        <div>
          <label htmlFor="">Designation</label>
          <input
            type="text"
            id="designation"
            value={userInput["designation"]}
            onChange={(e) => inputChangeHandler("designation", e.target.value)}
            required
            />
        </div>
        <div>
          <label htmlFor="">Email ID</label>
          <input
            type="email"
            id="email"
            value={userInput["email"]}
            onChange={(e) => inputChangeHandler("email", e.target.value)}
            required
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
<Footer/>
    </div>
  );
};

export default Userdata;
