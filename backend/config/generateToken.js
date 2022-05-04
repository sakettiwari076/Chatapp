const jwt = require("jsonwebtoken");


//JWT token whenever the user registers create JWT used for authentication in backend
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;