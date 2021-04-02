const motivationalTipscontroll = require("../controllers/motivationalTips");
const motivationalTipsmiddle = require("../middleware/motivmiddle");

// if you want to authenticate routes
// const requireAuth = passport.authenticate('jwt', { session: false });
// const requireSignin = passport.authenticate('local', { session: false });

module.exports = function (app) {
  app.get("/motivationalTips", motivationalTipscontroll.getallmotivationaltips);
  app.post(
    "/motivationalTips/add",
    motivationalTipscontroll.createmotivationaltips
  );
  app.get("/motivationalTips/:id", motivationalTipsmiddle.getmotivationaltips, motivationalTipscontroll.getbyid);
  app.put(
    "/motivationalTips/:id",
    motivationalTipsmiddle.getmotivationaltips,
    motivationalTipscontroll.editbyid
  );
  app.delete(
    "/motivationalTips/:id",
    motivationalTipsmiddle.getmotivationaltips,
    motivationalTipscontroll.deletebyid
  );
};