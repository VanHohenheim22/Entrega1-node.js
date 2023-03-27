const Repair = require('../models/repair.model');

exports.allRepair = async (req, res) => {
  const repairs = await Repair.findAll({
    where: {
      status: 'pending',
    },
  });

  return res.status(200).json({
    message: 'The query has been done successs',
    results: repairs.length,
    repairs,
  });
};

exports.createRepair = async (req, res) => {
  try {
    const { date, userId } = req.body;

    const repair = await Repair.create({
      date: new Date(date).toISOString(),
      date,
      userId,
    });

    return res.status(201).json({
      status: 'success',
      message: 'The repair has been created!',
      repair,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      error,
    });
  }
};

exports.repairUpDate = async (req, res) => {
    const {id} = req.params;

  const repair = await Repair.findOne({
    where: {
      id,
      status: 'pending',
    },
  });

  if (!repair) {
    return res.status(404).json({
      status: 'Error',
      message: `Repair with id: ${id} not found`,
    });
  }
  await repair.update({
    status: 'completed',
  });

  return res.json({
    message: `The repair with id ${id} has been updated`,
  });
};

exports.deleteRepair = async (req, res) => {
    const {id} = req.params;

  const repair = await Repair.findOne({
    where: {
      id,
      status: 'pending',
    },
  });

  if (!repair) {
    return res.status(404).json({
      status: 'Error',
      message: `Repair with id: ${id} not found`,
    });
  }

  await repair.update({
        status: 'canceled',
  });

  return res.json({
    message: `The repair with id ${id} has been deleted`,
  });
};


exports.repairById = (req, res) => {
  return res.json({
    message: 'Repairs by id',
  });
};
