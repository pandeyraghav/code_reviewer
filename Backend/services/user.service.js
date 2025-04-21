const userModel = require("../models/user.model");

module.exports.createUser = async ({ name, email, password }) => {
  if (!name || !email || !password) {
    return "all feilds required";
  }
    const user = await userModel
      .create({
        name,
        email,
        password,
      })
      .catch((err) => console.log(err));
    return user;
};
