const jwt = require("jsonwebtoken");


//Method to generate Token Which will passed to frontend
exports.generateToken = (user) => {
  const payload = {
    user: {
      id: user.id,
      email: user.email,
    },
  };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "24h" });
};
