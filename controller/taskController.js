// A controller in backend is like a manager that handles the logic for specific parts of your application. It decides what should happen when a request comes in and co-ordinates between the request, your data and response.

const Task = require("../models/task");
const validateID = require("../utils/validateID");

// ================= FUNCTION TO GET AND FIND ALL THE TASK ===========================
const getAllTask = async (req, res) => {
  const tasks = await Task.find({}); // Retrieve all tasks from the database

  res.status(200).json({ tasks }); // Send the retrieved tasks in a JSON response
};

// ================== FUNCTION TO CREATE A NEW TASK ====================

const createTask = async (req, res) => {
  const { title, description, tag } = req.body; // Destructure the required fields(title, description and tag) from the request body.

  // FOR ERROR HANDLING ================
  if (!title) {
    return res.status(400).json({ message: "Please provide a Title" });
  }
  if (!description) {
    return res.status(400).json({ message: "Please provide Description" });
  }
  if (!tag) {
    return res.status(400).json({ message: "Please choose a Tag" });
  }
  // END OF ERROR HANDLING ===============

  const task = await Task.create(req.body); // Create a new task with the requested data.

  res.status(201).json({ message: "Task created Successfully", task }); // Send a status code with a message of success
};

// ============== FUNCTION TO EDIT AN EXISTING TASK ===========================
const editTask = async (req, res) => {
  const { id } = req.params; // Get the task ID from the request parameters

  // FOR ERROR HANDLING ===============
  if (!validateID(id)) {
    return res.status(400).json({ message: `ID: ${id} ID is not valid` });
  }
  // END OF ERROR HANDLING ================

  const task = await Task.findOneAndUpdate({ _id: id }, { ...req.body }); // Updates the task with the provided data

  res.status(200).json({ message: "Task Updated Successfully" }); // Send a success message if updated successfully
};

// ============== FUNCTION TO DELETE AN EXISTING TASK =============
const deleteTask = async (req, res) => {
  const { id } = req.params; // Get the task ID from the request parameters

  // FOR ERROR HANDLING ===============
  if (!validateID(id)) {
    return res.status(400).json({ message: `ID: ${id} ID is not valid` });
  }
  // END OF ERROR HANDLING ================

  const task = await Task.findOneAndDelete({ _id: id }); // Delete the task with the unique ID

  res.status(200).json({ message: "Task Successfully Deleted" }); // Send a success message if deleted successfully
};

// =============== FUNCTION TO GET EACH TASK INDIVIDUALLY =======
const eachTask = async (req, res) => {
  const { id } = req.params; // Get the task ID from thr request parameters

  // FOR ERROR HANDLING ===============
  if (!validateID(id)) {
    return res.status(400).json({ message: `ID: ${id} ID is not valid` });
  }
  // END OF ERROR HANDLING ================

  const task = await Task.findOne({ _id: id }); // Find the task with the specified ID
  res.status(200).json({ task }); // Send the found task in JSON response
};

module.exports = { getAllTask, createTask, editTask, deleteTask, eachTask }; // Exporting the controller functions to be used in the router
