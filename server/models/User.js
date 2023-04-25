const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{type: String, required: true ,unique: true},
    username:{type: String, required: true},
    password:{type: String, required: true},
    usertype:{type: String,required: true},
});

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 10);
    }
    next();
  });
  
  userSchema.methods.comparePassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
  };
  

  
module.exports = mongoose.model("User", userSchema);