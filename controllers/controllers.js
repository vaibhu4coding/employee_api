const Employee = require("../models/employee");

async function handleEmployeeCreation(req, res) {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.send(employee);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function handleListEmployees(req, res) {
  try {
    const {page = 1, limit = 10} = req.query;
    const employees = await Employee.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    const count = await Employee.countDocuments();
    res.send({
      employees,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).send(error);
  }
}

async function handleUpdateEmployee(req, res) {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!employee) {
      return res.status(404).send();
    }
    res.send(employee);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function handleDeleteEmployee(req, res) {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).send();
    }
    res.send(employee);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function handleGetEmployee(req, res) {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).send();
    }
    res.send(employee);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  handleEmployeeCreation,
  handleListEmployees,
  handleUpdateEmployee,
  handleDeleteEmployee,
  handleGetEmployee,
};
