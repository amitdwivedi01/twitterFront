import React, { useState } from 'react';
import axios from 'axios';
import './App.css'
import Userdata from './page/Userdata';
import UserCheck from './page/UserCheck';
// import logo from './assests/png-03.png';
// import sec from './assests/png-04.png';
// import new1 from './assests/png-05.png';
// import new2 from './assests/png-06.png';

const App = () => {
  const [feedback, setFeedback] = useState('');

  const handleInputChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    axios
      .post('http://localhost:4000/submitFeedback', { feedback })
      .then((response) => {
        if (response.ok) {
          return response.json(); // Parse the JSON response if it's a success response
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .then((data) => {
        alert(data.message); // Show success message
        setFeedback(''); // Clear the feedback textarea
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to submit feedback.'); // Show error message
      });
  };

  return (
    <div>
      {/* <Userdata/> */}
      <UserCheck/>
    </div>
    // <div className='submitDiv'>

    //   <div className='logo'>
    //       <img src={logo} width="40"/>
    //   </div>

    //   <form onSubmit={handleSubmit}>
    //     <textarea
    //       value={feedback}
    //       onChange={handleInputChange}
    //       rows="4"
    //       cols="50"
    //       placeholder="Please enter your feedback here..."
    //     ></textarea>
    //     <br />
    //     <button type="submit">SUBMIT</button>
    //   </form>
    // </div>
  );
};

export default App;


