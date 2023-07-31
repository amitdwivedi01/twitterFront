import React, {useState} from 'react';
import axios from 'axios';
import styles from './Feedback.module.css';
import { useNavigate } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
// import styles from './Feedback.module.css'
const Feedback = () => {
      const [feedback, setFeedback] = useState("");
  const navigate = useNavigate();

      const handleInputChange = (event) => {
        setFeedback(event.target.value);
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        setFeedback("")
        navigate("/thankyou");
        axios
          .post("https://gold-cricket-garb.cyclic.app/submitFeedback", {
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
        }       
  return (
    <div className="submitDiv">
      <Header />
      <Footer />
      <div className={styles.logodiv} onClick={changepage}></div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={feedback}
          onChange={handleInputChange}
          rows="1"
          cols="50"
          placeholder="Please enter your twitter handle..."
        ></textarea>
        <br />
        <button type="submit">SUBMIT</button>
      <button onClick={skipHandle}>Skip</button>
      </form>
    </div>
  );
}

export default Feedback