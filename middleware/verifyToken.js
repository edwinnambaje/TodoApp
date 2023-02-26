const Token = require("../helpers/jwt");
class Verify {
  static async verifyToken(req, res, next) {
    try {
      const authHeader = req.headers["authorization"] || req.headers.token;
      if (!authHeader) {
        return res.status(401).json({ message: "You are not authenticated 1" });
      }
      const token = authHeader.split(" ")[1];
      if (!token) {
        return res.status(401).json({ message: "You are not authenticated 2" });
      }
      const verified = Token.verify(token);
      req.user = verified;
      next();
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  }
}
module.exports = Verify;
