const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  contacts: [
    {
      type: {
        type: String,
        enum: ["phone", "email", "address"],
        required: true,
      },

      value: {
        type: String,
        required: true,
      },
    },
  ],
});

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
