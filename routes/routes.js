const express = require("express");
const router = express.Router();
const {
  handleEmployeeCreation,
  handleListEmployees,
  handleUpdateEmployee,
  handleDeleteEmployee,
  handleGetEmployee,
} = require("../controllers/controllers");
router.post("/employees", handleEmployeeCreation);
router.get("/employees", handleListEmployees);
router.patch("/employees/:id", handleUpdateEmployee);
router.delete("/employees/:id", handleDeleteEmployee);
router.get("/employees/:id", handleGetEmployee);

module.exports = router;
