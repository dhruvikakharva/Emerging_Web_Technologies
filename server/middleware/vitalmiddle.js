const VitalSign= require("../models/vitalsign");

exports.getVital = async (req, res, next) => {
    let vitalsign;
    try {
      vitalsign = await VitalSign.findById(req.params.id);
      if (vitalsign == null) {
        return res.status(400).json({ message: "Cannot find vitalsign" });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
    res.vitalsign = vitalsign;
    next();
  }