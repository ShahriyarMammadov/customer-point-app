const userModel = require("../schema/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

// Create Token
const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, "secret");
};
// -----------------------------------------------------

// Email and Password error
const handleErrors = (err) => {
  let errors = { email: "", password: "" };

  if (err.message === "User not found")
    errors.email = "Email is not registered";

  if (err.message === "Incorrect password")
    errors.password = "Password is incorrect";

  if (err.code === 11000) {
    errors.email = "Email is already registered";
    return errors;
  }

  if (err.message.includes("Users validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};
// -----------------------------------------------------

// Register
module.exports.register = async (req, res) => {
  const { email, password, fullName } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const newUser = new userModel({
      email: email,
      password: hashedPassword,
      fullName: fullName,
    });

    const result = await newUser.save();
    const { password, ...data } = result.toJSON();

    const token = createToken(newUser._id);

    res.cookie("jwt", token, {
      withCredentials: true,
      maxAge: maxAge * 1000,
    });

    res.status(201).json({ user: newUser, created: true });
  } catch (err) {
    console.log(err);
    const errors = handleErrors(err);
    res.json({ errors, created: false });
  }
};
// -----------------------------------------------------

// Login
module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email: email });

    if (!user) {
      throw Error("User not found");
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw Error("Incorrect password");
    }
    const token = createToken(user._id);

    res.cookie("jwt", token, {
      withCredentials: true,
      maxAge: maxAge * 1000,
    });
    res.status(200).json({ data: user, created: true });
  } catch (err) {
    console.log(err);
    const errors = handleErrors(err);
    res.json({ errors, created: false });
  }
};
