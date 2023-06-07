const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is Required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is Required"],
    },
    fullName: {
      type: String,
      required: [true, "FullName is required"],
    },
    position: {
      type: String,
      default: "user",
    },
    profilePhoto: {
      type: String,
    },
    transactions: [
      {
        date: {
          type: Date,
          default: Date.now,
        },
        transaction: {
          type: Number,
          default: 0,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("myCompany", userSchema);
