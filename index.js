const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config({ path: __dirname + "/.env" });
const { twitterClient } = require("./twitterClient");
const path = require("path");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoURI =
  process.env.DB_URI;
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

// const userSchema = new mongoose.Schema({
//   name: String,
//   companyname: String,
//   designation: String,
//   email: String,
//   phone: Number,
// });

// const User = mongoose.model("User", userSchema);

// app.post("/api/user", async (req, res) => {
//   try {
//     const userData = req.body;
//     await User.create({
//       name: userData.name,
//       companyname: userData.companyName,
//       designation: userData.designation,
//       email: userData.email,
//       phone: userData.phone,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });

const userCheckSchema = new mongoose.Schema({
  // meal: Boolean,
  // reward: Boolean,
  // fuel: Boolean,
  // health: Boolean,
  // telecom: Boolean,
  // leave: Boolean,
  // gadget: Boolean,
  // drive: Boolean,
  // uniform: Boolean,
  // learn: Boolean,
  // other: Boolean,
  // otherText: String,
  email: String,
  name: String,
  organizationName: String,
  designation: String,
  phone: String,
});

const Usercheck = mongoose.model("Checkbox", userCheckSchema);

app.post("/api/userchoice", async (req, res) => {
  try {
    const userDataChoice = req.body;
    console.log(userDataChoice);
    await Usercheck.create({
      // meal: userDataChoice.meal,
      // fuel: userDataChoice.fuel,
      // reward: userDataChoice.reward,
      // health: userDataChoice.health,
      // telecom: userDataChoice.telecom,
      // leave: userDataChoice.leave,
      // gadget: userDataChoice.gadget,
      // drive: userDataChoice.drive,
      // uniform: userDataChoice.uniform,
      // learn: userDataChoice.learn,
      // other: userDataChoice.other,
      // otherText: userDataChoice.others,
      email: userDataChoice.email,
      name: userDataChoice.name,
      organizationName: userDataChoice.organizationName,
      designation: userDataChoice.designation,
      phone: userDataChoice.phone,
    });
    res.status(200).json({ message: "success" });
  } catch (err) {
    console.log(err);
  }
});

app.post("/submitFeedback", (req, res) => {
  const feedback = req.body.feedback;
  console.log(feedback);

  // Send a tweet using the Twitter API
  const tweet = async () => {
    try {
      await twitterClient.v2.tweet(
        `We were excited that @${feedback} visited the #Pluxee booth at@PeopleMatters2 #TechHRPulseMumbai & participated in #PluxeePowerplay and experienced the live motion sensing game. Drop by to try the game first-hand and open a #WorldOfOpportunities here 🔗https://tinyurl.com/34jqsd`
      );
    } catch (e) {
      console.log(e);
    }
  };
  tweet();
});

app.listen(4000, () => {
  console.log(`Server is listening on port ${4000}`);
});
