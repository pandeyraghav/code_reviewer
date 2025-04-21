const userService = require("../services/user.service");
const userModel = require("../models/user.model");

module.exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const hash = await userModel.hashPassword(password);
  const newUser = await userService.createUser({
    name,
    email,
    password: hash,
  });
  res.send(newUser).status(200);
};

module.exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.send("please enter both both field's ");
  }
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    res.send("incorrect credentials").status(400);
  }
  const isMatched = await user.comparePassword(password);
  console.log("logged IN");
  isMatched
    ? res.send(user).status(200)
    : res.send("worng email or pass!!");
};
