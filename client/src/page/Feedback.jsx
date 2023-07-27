import React, {useState} from 'react';
import axios from 'axios';
import styles from './Feedback.module.css';
const Feedback = () => {
      const [feedback, setFeedback] = useState("");

      const handleInputChange = (event) => {
        setFeedback(event.target.value);
      };
      const handleSubmit = (event) => {
        event.preventDefault();

        axios
          .post("http://localhost:4000/submitFeedback", { feedback })
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
            alert("Failed to submit feedback."); // Show error message
          });
      };
  return (
    <div className="submitDiv">

      <form onSubmit={handleSubmit}>
        <textarea
          value={feedback}
          onChange={handleInputChange}
          rows="4"
          cols="50"
          placeholder="Please enter your feedback here..."
        ></textarea>
        <br />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default Feedback