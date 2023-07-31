import React, { useState } from 'react';
import axios from 'axios';
import './App.css'
import Userdata from './page/Userdata';
import UserCheck from './page/UserCheck';
import Thankyou from './page/Thankyou';
import Feedback from './page/Feedback';
// import Backgound from './page/Backgound';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [userEmail, setUserEmail] = useState(null);

  const emailhandler = (email) => {
    setUserEmail(email)
    // console.log(email)
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact
          element={<Userdata userData={emailhandler} />}
        ></Route>
        <Route
          path="/usercheck"
          exact
          element={userEmail && <UserCheck data={userEmail} />}
        ></Route>
        {/* <Route path="/background" exact element={<Backgound />}></Route> */}
        <Route path="/thankyou" exact element={<Thankyou />}></Route>
        <Route path="/feedback" exact element={<Feedback />}></Route>
      </Routes>
    </Router>
  );
};

export default App;


