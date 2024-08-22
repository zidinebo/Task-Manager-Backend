// Utils is a short form of utilities which refers to a collection of helper functions or modules designed to perform common task on multiple functions. Meaning you can do the function in one place and distribute in multiple places.

// These tasks often includes things like data validation, formatting or other repetitive operations that are used accross different parts of the application.

const mongoose = require("mongoose"); // Import Mongoose

// Utility function to validate MongoDB objectIDs
const validateID = (id) => {
  const isValid = mongoose.Types.ObjectId.isValid(id); // Check if the ID is a valid MongoDB objectID
  return isValid; // Return the validation result
};

module.exports = validateID; // Export the function to be used in the controller
