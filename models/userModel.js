const mongoose = require("mongoose");

// schema for body type
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add a user name"],
    },
    email: {
      type: String,
      required: [true, "Please add a user email"],
      unique: [true, "Email adress already taken"],
    },
    password: {
      type: String,
      required: [true, "Please add a user password"],
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("User", userSchema);
