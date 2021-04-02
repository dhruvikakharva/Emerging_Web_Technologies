const MotivationalTips = require("../models/motivationaltips");


exports.getallmotivationaltips = async (req, res) => {
  try {
    const motivationalTips = await MotivationalTips.find();
    res.status(201).json(motivationaltipss);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.createmotivationaltips = async (req, res) => {

  const motivationalTips = new MotivationalTips({
    _user: req.user.id,
    name:req.body.name,
    body_tips : req.body.tips
  });

  try {
    const newmotivationalTips = await motivationalTips.save();
    res.status(201).json (newmotivationalTips);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.getbyid = async (req, res) => {
  res.status(201).json(res.motivationaltips);
};

exports.editbyid = async (req, res) => {
  if (req._user!= null) {
    res.motivationaltips.name = req.body.motivationaltips.name;
    res.motivationaltips.tips = req.body.tips;
  }
  try {
    const updatedmotivationaltips = await res.motivationaltips.save();
    res.json(updatedmotivationaltips);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deletebyid = async (req, res) => {
  try {
    await res.motivationaltips.remove();
    res.status(200).json({ message: "delete" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.imageup = (req, res, next) => {
  console.log(req.file)
  try {
    res.status(201).json({
      message: "File uploded successfully",
    });
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};

/*
exports.editmotivationaltips = async (req, res) => {
  
  const motivationalTips = await motivationalTipss.findByIdAndUpdate({ _id: req.params.id}, 
    { 
       body_temperature: req.body. body_temperature,
      heart_rate: req.body.heart_rate,
      respiratory_rate: req.body.respiratory_rate,
      blood_pressure: req.body.blood_pressure,
      other_details:req.body.other_details,
      tech_respiratory_rate_logo : req.body.tech_respiratory_rate_logo,
      roles: req.body.roles,
      team:req.body.team,
      duration:req.body.duration,
      start_date:req.body.start_date,
      end_date:req.body.end_date,
      image:req.body.image,
      git_link:req.body.git_link,
      website_link: req.body.website_link,
   }, 
  );
  if (!motivationaltips) return res.status(404).send('The product with the given ID was not found.');
  try {
    const updatedmotivationaltips = motivationalTips.save();
    res.status(201).json(updatedmotivationaltips);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}
exports.editmotivationaltips = async (req, res,next) => {
  try{
    motivationalTips = await motivationalTipss.findOne({
      _id: req.params.id,
    });
    if (motivationaltips == null) {
      return res.status(400).json({ message: "Cannot find motivationalTips" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.motivationaltips = motivationalTips
  
  next()
  if(req.body. body_temperature != null && req.body.heart_rate != null){
    res.motivationaltips. body_temperature = req.body. body_temperature,
    res.motivationaltips.heart_rate = req.body.heart_rate
  }
  try {
    const updatedmotivationaltips = res.motivationaltips.save();
    res.json(updatedmotivationaltips);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
*/