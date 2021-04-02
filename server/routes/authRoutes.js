const passport = require("passport");
const passportService = require("../services/passport");
const Authentication = require("../controllers/authentication");
const AuthMiddle = require("../middleware/authmiddle");

module.exports = function (app) {
  // auth routes
  app.get("/", AuthMiddle.RequireAuth, function (req, res) {
    res.send({ hi: "there" });
  });
  app.post("/signin", AuthMiddle.RequireSignin , Authentication.signin);
  app.post("/signup", Authentication.signup);
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });
};
