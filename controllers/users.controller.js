const User = require('../models/users.model');

exports.findAll = async (req, res) => {
  const users = await User.findAll({
    where: {
      status: 'available'
    },
  });

  return res.status(200).json({
    message: 'The query has been done successs',
    results: users.length,
    users,
  });
};

exports.createUser = async (req, res) => {
  const { 
    name, 
    email, 
    password, 
    role 
  } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    role,
  });

  return res.status(201).json({
    status: 'succes',
    message: 'The user has been created!',
    user,
  });
};

exports.upDateUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findOne({
    where: {
      id,
      status: 'available',
    },
  });

  const {
    name, 
    email
  } = req.body;

  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: 'The user not found',
    });
  }

  await user.update({
    name,
    email,
  });

  if (!email || !name) {
    return res.status(400).json({ 
      status: "Error",
      message: "The body of the request must contain the following parameters: name and email"
    })}

  return res.status(200).json({
    status: 'success',
    message: 'The user has been updated',
  });
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findOne({
    where: {
      id,
      status: 'available',
    },
  });

  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: 'the user not found',
    });
  }

  await user.update({
    status: 'disabled',
  });

  return res.status(200).json({
    message: 'The user has been deleted',
  });
};

exports.userById = async (req, res) => {
  const { id } = req.params;

  const user = await User.findOne({
    where: {
      id,
      status: 'available',
    },
  });

  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: 'the user not found',
    });
  }

  return res.status(200).json({
    message: 'The query has been done success',
    user,
  });
};

