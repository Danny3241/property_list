const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs")

const propertySchema = new Schema({
    propertyName: String,
    description: String,
    email: String,
    password: String,
    photo: String,
    createdAt: {type: Date, default: Date.now},  
})

propertySchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
  
    this.password = await bcrypt.hash(this.password, 12);
    next();
  });
  
  //~Compare Password
  propertySchema.methods.comparePassword = async function (dbPassword, userPassword) {
    return await bcrypt.compare(dbPassword, userPassword);
  };




module.exports = mongoose.model("Property", propertySchema);

