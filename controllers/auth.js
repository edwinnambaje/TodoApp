const brcypt = require("bcrypt");
const { User } = require("../database/models");
require("dotenv").config();
const Token = require("../helpers/jwt");

class UserController {
  static async createUser(req, res) {
    try {
      const salt = await brcypt.genSalt(10);
      const hashedPassword = await brcypt.hash(req.body.password, salt);
      const user = await User.build({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      });
      await user.save();
      return res.status(200).json({
        message: "User created successfully",
        user,
      });
    } catch (error) {
      console.log(error);
      res.status(404).json({ error: error.message });
    }
  }
  static async login(req, res) {
    try {
      const user = await User.findOne({ where: { email: req.body.email } });
      if (!user) return res.status(400).json({ message: "Invalid User" });
      const password = await brcypt.compare(req.body.password, user.password);
      if (!password)
        return res.status(400).json({ message: "Invalid Password" });
      const token = Token.sign({ id: user.id, username: user.username });
      return res
        .status(200)
        .json({ message: "Login successfully", user, token });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}
module.exports = UserController;
