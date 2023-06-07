const {
  transactionAdded,
  userPoint,
} = require("../controller/adminController");
const { register, login } = require("../controller/authController");
const { checkUser, checkAdmin } = require("../middlewares/authMiddleware");

function authRoutes(app) {
  // Authentification Routes
  app.post("/register", register);
  app.post("/login", login);
  app.post("/", checkUser);
  app.post("/checkAdmin", checkAdmin);

  // admin Routes
  app.post("/transactionsAdded", transactionAdded);
  app.post("/getUserPoint", userPoint);
}

module.exports = authRoutes;
