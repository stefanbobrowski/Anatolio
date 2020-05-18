const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const signUpSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const SignUp = mongoose.model("SignUp", signUpSchema);

module.exports = SignUp;
