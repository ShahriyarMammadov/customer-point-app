const User = require("../schema/userModel");
const mongoose = require("mongoose");

module.exports.transactionAdded = async (req, res) => {
  try {
    const email = req.body.email;
    let transaction = req.body.newTransaction;
    const date = req.body.date;

    const user = await User.findOne({ email: email });
    if (!user) {
      console.error("User not found");
      return res.status(404).json({ error: "User not found" });
    }

    let pointsEarned = 0;

    if (transaction > 100) {
      const overHundredAmount = transaction - 100;
      pointsEarned += overHundredAmount * 2;
      pointsEarned += 1 * 50;
    } else if (transaction >= 50) {
      pointsEarned += (transaction - 50) * 1;
    }
    transaction = +pointsEarned;

    user.transactions.push({ transaction, date });
    const updatedUser = await user.save();

    console.log("Transaction added successfully");
    res.status(200).json({ message: "Transaction added successfully" });
  } catch (err) {
    console.error("Error adding transaction", err);
    res.status(500).json({ error: "Error adding transaction" });
  }
};

module.exports.userPoint = async (req, res) => {
  try {
    const email = req.body.email;

    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);

    const transactions = user.transactions.filter(
      (transaction) => transaction.date >= threeMonthsAgo
    );

    res.status(200).json({ transactions });
  } catch (err) {
    console.error("Error retrieving transactions", err);
    res.status(500).json({ error: "Error retrieving transactions" });
  }
};
