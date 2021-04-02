const vitalsigncontroll = require("../controllers/vitalsign");
const vitalsignmiddle = require("../middleware/vitalmiddle");

// if you want to authenticate routes
// const requireAuth = passport.authenticate('jwt', { session: false });
// const requireSignin = passport.authenticate('local', { session: false });

module.exports = function (app) {
  app.get("/vitalsign", vitalsigncontroll.getallvitalsign);
  app.post(
    "/vitalsign/add",
    vitalsigncontroll.createvitalsigns
  );
  app.get("/vitalsign/:id", vitalsignmiddle.getVital, vitalsigncontroll.getbyid);
  app.put(
    "/vitalsign/:id",
    vitalsignmiddle.getVital,
    vitalsigncontroll.editbyid
  );
  app.delete(
    "/vitalsign/:id",
    vitalsignmiddle.getVital,
    vitalsigncontroll.deletebyid
  );
};