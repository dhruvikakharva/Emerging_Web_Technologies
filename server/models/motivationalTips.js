const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const motivationalTipsSchema = new Schema({
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    name: {
        type:Number,
    },
    tips: {
        type: Number,
    },
});

const Modelclass = mongoose.model("motivationalTips", motivationalTipsSchema);

//Export the model
module.exports = Modelclass;