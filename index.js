import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoURI =
  "mongodb+srv://cakeAdmin:jagdish@whatsappnum.ibg6wr3.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  companyname: String,
  designation: String,
  email: String,
  phone: Number,
});

const User = mongoose.model("User", userSchema);

app.post("/api/user", async (req, res) => {
  try {
    const userData = req.body;
    await User.create({
      companyname: userData.companyName,
      designation: userData.designation,
      email: userData.email,
      phone: userData.phone,
    });
  } catch (err) {
    console.log(err);
  }
});

const userCheckSchema = new mongoose.Schema({
  meal: Boolean,
  reward: Boolean,
  fuel: Boolean,
  health: Boolean,
  telecom: Boolean,
  leave: Boolean,
  gadget: Boolean,
  drive: Boolean,
  uniform: Boolean,
  learn: Boolean,
});

const Usercheck = mongoose.model("Checkbox", userCheckSchema);

app.post("/api/userchoice", async (req, res) => {
  try {
    const userDataChoice = req.body;
    console.log(userDataChoice);
    await Usercheck.create({
      meal: userDataChoice.meal,
      fuel: userDataChoice.fuel,
      reward: userDataChoice.reward,
      health: userDataChoice.health,
      telecom: userDataChoice.telecom,
      leave: userDataChoice.leave,
      gadget: userDataChoice.gadget,
      drive: userDataChoice.drive,
      uniform: userDataChoice.uniform,
      learn: userDataChoice.learn,
    });
  } catch (err) {
    console.log(err);
  }
});

app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
