import React, { useState } from "react";
import axios from "axios";
import styles from "./Feedback.module.css";
import { useNavigate } from "react-router-dom";
import Header from "../component/Header";
// import Footer from "../component/Footer";
import img from "../assests/png-055.png";
import img1 from "../assests/png-066.png";
// import styles from './Feedback.module.css'
// const host = "https://gold-cricket-garb.cyclic.app";
// const host = "http://localhost:4000";
const host = "https://good-blue-drill-gown.cyclic.cloud";


const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setFeedback(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setFeedback("");
    navigate("/thankyou");
    axios
      .post(`${host}/submitFeedback`, {
        feedback,
      })
      .then((response) => {
        if (response.ok) {
          return response.json(); // Parse the JSON response if it's a success response
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        alert(data.message); // Show success message
        setFeedback(""); // Clear the feedback textarea
      })
      .catch((error) => {
        console.error("Error:", error);
        // alert("Failed to submit feedback."); // Show error message
      });
  };

  const changepage = () => {
    navigate("/");
  };

  const skipHandle = () => {
    navigate("/thankyou");
  };
  return (
    <div className="submitDiv">
      <Header />
      {/* <Footer /> */}
      <div className={styles.logodiv} onClick={changepage}></div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={feedback}
          onChange={handleInputChange}
          rows="1"
          cols="50"
          placeholder="YOUR TWITTER HANDLE"
          required
        ></textarea>
        <br />
        <div className={`${styles.btncontainer}`}>
          <button type="submit">SUBMIT</button>
          <button onClick={skipHandle}>
            SKIP
          </button>
        </div>
      </form>
      <img src={img} alt="" className={styles.image} />
      <img src={img1} alt="" className={styles.image2} />
    </div>
  );
};

export default Feedback;
