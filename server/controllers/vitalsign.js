const VitalSign = require("../models/vitalsign");


exports.getallvitalsign = async (req, res) => {
  try {
    const vitalsigns = await VitalSign.find();
    res.status(201).json(vitalsigns);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.createvitalsigns = async (req, res) => {

  const vitalsigns = new VitalSign({
    _user: req.user.id,
    name:req.body.name,
    body_temperature : req.body.body_temperature,
    heart_rate : req.body.heart_rate,
    blood_pressure : req.body.blood_pressure,
    respiratory_rate : req.body.respiratory_rate
  });

  try {
    const newvitalsign = await vitalsigns.save();
    res.status(201).json(newvitalsign);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.getbyid = async (req, res) => {
  res.status(201).json(res.vitalsign);
};

exports.editbyid = async (req, res) => {
  if (req._user!= null) {
    res.vitalsign.name = req.body.vitalsign.name;
    res.vitalsign.body_temperature = req.body.body_temperature;
    res.vitalsign.heart_rate = req.body.heart_rate;
    res.vitalsign.blood_pressure = req.body.blood_pressure;
    res.vitalsign.respiratory_rate = req.body.respiratory_rate;
  }
  try {
    const updatedvitalsign = await res.vitalsign.save();
    res.json(updatedvitalsign);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deletebyid = async (req, res) => {
  try {
    await res.vitalsign.remove();
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
exports.editvitalsign = async (req, res) => {
  
  const vitalsign = await vitalsigns.findByIdAndUpdate({ _id: req.params.id}, 
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
  if (!vitalsign) return res.status(404).send('The product with the given ID was not found.');
  try {
    const updatedvitalsign = vitalsign.save();
    res.status(201).json(updatedvitalsign);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}
exports.editvitalsign = async (req, res,next) => {
  try{
    vitalsign = await vitalsigns.findOne({
      _id: req.params.id,
    });
    if (vitalsign == null) {
      return res.status(400).json({ message: "Cannot find vitalsign" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.vitalsign = vitalsign
  
  next()
  if(req.body. body_temperature != null && req.body.heart_rate != null){
    res.vitalsign. body_temperature = req.body. body_temperature,
    res.vitalsign.heart_rate = req.body.heart_rate
  }
  try {
    const updatedvitalsign = res.vitalsign.save();
    res.json(updatedvitalsign);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
*/