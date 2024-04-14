const jwt = require("jsonwebtoken");

exports.generateToken = (user) => {
  const payload = {
    user: {
      id: user.id,
      email: user.email,
    },
  };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "24h" });
};
