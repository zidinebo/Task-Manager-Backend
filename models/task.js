// In back-end development, a model is like a blueprint for the data in your application. It defines the structure of your data and how it interracts with the data base.

const mongoose = require("mongoose"); // Import Mongoose

const schema = mongoose.Schema; // Shortcut to access Mongoose Schema class

// Define the schema for the task project based on the UI
const taskSchema = new schema({
  title: String, // Title of the task
  description: String, // Description of the task
  tag: String, // Tag associated with the task "urgent or important"
});

module.exports = mongoose.model("task", taskSchema); //Export the model to be used for Request operations in the controller.
