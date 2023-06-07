const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

// morgan
app.use(morgan("dev"));

// cookie
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// express.js server config
app.use(express.json({ limit: "15mb" }));
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

// dotenv
require("dotenv").config();

// Routes
const authRoutes = require("./routes/authRoutes");
authRoutes(app);

// server run
const port = process.env.SERVER_PORT || 3000;

app.listen(port, () => {
  console.log("Server Worked");
});

// mongoDB database
mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.MONGODB_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DataBase Connected");
  })
  .catch((err) => {
    console.log(err);
  });
