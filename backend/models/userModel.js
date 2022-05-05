const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: { type: "String",  required: true ,  },
    password: { type: "String", required: true },
    pic: {
      type: "String",
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
 
    
  },
  { timestaps: true }
);



const User = mongoose.model("User", userSchema);

module.exports = User;