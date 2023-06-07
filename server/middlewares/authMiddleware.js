const User = require("../schema/userModel");
const jwt = require("jsonwebtoken");

module.exports.checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, "secret", async (err, decodedToken) => {
      if (err) {
        res.json({ err });
        next();
        console.log("error:", err);
      } else {
        const user = await User.findById(decodedToken.id);

        if (user) {
          res.json({ status: true, data: user });
        } else {
          res.json({ status: false });
          next();
        }
      }
    });
  } else {
    res.json({ status: false });
    next();
  }
};

module.exports.checkAdmin = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, "secret", async (err, decodedToken) => {
      if (err) {
        res.json({ err });
        next();
        console.log("error:", err);
      } else {
        const user = await User.findById(decodedToken.id);

        if (user.position === "admin") {
          const allUserData = await User.find({});
          res.json({ status: true, allUserData: allUserData });
        } else {
          res.json({ status: false });
          next();
        }
      }
    });
  } else {
    res.json({ status: false });
    next();
  }
};
