const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (request, result, next) => {
  const token =
    request.body.token || request.query.token || request.headers["x-access-token"];

  if (!token) {
    return result.status(403).send("A token is required for being authenticated");
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    request.user = decoded;
  } catch (err) {
    return result.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;