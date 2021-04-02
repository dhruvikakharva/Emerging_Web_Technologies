const Motivationaltips= require("../models/motivationalTips");

exports.getmotivationaltips = async (req, res, next) => {
    let motivationaltips;
    try {
      motivationaltips = await Motivationaltips.findById(req.params.id);
      if (motivationaltips == null) {
        return res.status(400).json({ message: "Cannot find motivationaltips" });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
    res.motivationaltips = motivationaltips;
    next();
  }