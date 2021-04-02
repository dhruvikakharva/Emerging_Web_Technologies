const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');


// Define our Model
const userSchema = new Schema({
    first_name: {
        type:String,
    },
    last_name: {
        type:String,
    },
    email: {
        type:String,
        unique: true, 
        lowercase: true
    },
    password:{
        type:String,
    },
    phone:{
        type:Number,
    },
    role: {
        type: String,
        enum: ['NURSE', 'PATIENT','ADMIN'],
        default: 'PATIENT'
      },
    createdOn: {
        type: Date,
        default: Date.now
    },
})

// On Save Hook encrpy Password

//before saving a model, run this function
userSchema.pre('save',function(next){
    //get access to the user model
    const user = this;

    //generate a salt then rull callback
    bcrypt.genSalt(10, function(err,salt){
        if(err){
            return(err);
        }

        //hash(encypt) our password using the salt
        bcrypt.hash(user.password,salt,null,function(err, hash){
            if (err){
                return next(err);
            }

            //overwrite plain text password with encrypted password 
            user.password = hash;
            next();
        });
    });
});

//comparepassword
userSchema.methods.comparePassword = function (candidatePassword, callback) {
    bcrypt.compare (String (candidatePassword), String (this.password), function (
      err,isMatch
    ) {
      if (err) {
        return callback (err);
      }
  
      callback (null, isMatch);
    });
 };
// Create the model class
const Modelclass = mongoose.model("users", userSchema);

//Export the model
module.exports = Modelclass;