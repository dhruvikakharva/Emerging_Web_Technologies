const passport = require("passport");
const passportService = require("../services/passport");

exports.RequireAuth = passport.authenticate("jwt", { session: false });
exports.RequireSignin = passport.authenticate("local", { session: false });