const express = require("express");
const app = express();
require("dotenv").config();
const { sequelize } = require("./database/models");
const PORT = process.env.PORT;
const user = require("./routes/user");
const book = require("./routes/book");
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});
sequelize
  .sync({ alter: true })
  .then(() => console.log("sync"))
  .catch((error) => console.log("error"));
const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to db");
  } catch (error) {
    console.log(error);
  }
};
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
connectDb();
app.use("/api/auth", user);
app.use("/api/book", book);
