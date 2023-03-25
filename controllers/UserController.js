const User = require("../models/User");

const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await User.findById(id);
    res.json({
      acknowledged: true,
      userData: data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getAllUser = async (req, res) => {
  try {
    const data = await User.find();
    res.json({
      acknowledged: true,
      userData: data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const addUser = async (req, res) => {
  const user = await User.find({ email: req.body.email });
  if (user.length == 0) {
    let user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    });
    user
      .save()
      .then((user) => {
        if (user) {
          res.send({
            message: "User Insert Successfully!",
            acknowledged: true,
          });
        } else {
          res.send({ message: "User Cann't Inserted!", acknowledged: false });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    res.send({ message: "User Already Inserted!", acknowledged: false });
  }
};
const editUser = async (req, res) => {
  const id = req.params.id;
  const updatedData = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  };
  const options = { new: true };
  const result = await User.findByIdAndUpdate(id, updatedData, options);
  if (result) {
    res.send({
      status: true,
      acknowledged: true,
      userData: result,
    });
  } else {
    res.send({
      status: true,
      acknowledged: false,
      userData: {},
    });
  }
};
const deleteUser = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const result = await User.findByIdAndDelete(id);
  if (result) {
    res.send({ status: true, acknowledged: true, userData: result });
  } else {
    res.send({ status: true, acknowledged: false, userData: {} });
  }
};

module.exports = {
  getAllUser,
  getUser,
  addUser,
  editUser,
  deleteUser,
};
