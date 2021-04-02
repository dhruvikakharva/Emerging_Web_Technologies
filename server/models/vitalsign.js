const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const vitalSignSchema = new Schema({
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    name: {
        type:Number,
    },
    body_temperature: {
        type: Number,
    },
    heart_rate: {
        type: Number,
    },
    blood_pressure: {
        type: Number,
        default: null,
    },
    respiratory_rate: {
        type: Number,
        default: null,
    }
});

const Modelclass = mongoose.model("vitalsign", vitalSignSchema);

//Export the model
module.exports = Modelclass;