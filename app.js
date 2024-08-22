require("dotenv").config(); // Load environment variables from a .env file into process.env

const express = require("express"); // Import express framework

const mongoose = require("mongoose"); // Import Mongoose for MongoDB interractions

const cors = require("cors");

const app = express(); // Spinning up the express frame work server

const port = 3030; // Define the port number for the server

// ==============================================================
// CORS means CROSS ORIGIN RESOURCE SHARING. Itis package . This is used when the front-end and back-end are from different origins (domains, ports, protocols) and the back-end hasn't been configured to accept request  from the front-end origin.

// Using it as a MIDDLEWARE;  we say
app.use(cors());

// ==========================================

// NOTE it is when you next using (app.use) that this const taskRouter and const notFound pops
const taskRouter = require("./routes/taskRouter"); // Import the taskRouter for task-related routes.
const notFound = require("./middlewares/notFound"); // Import the middleware to handle 404 notFound errors.

app.use(express.json()); // Middleware to pass incoming JSON requests from postman allowing access to the req.body

app.use("/api/task", taskRouter); // Mount the task router at /api/task, all task-related routes starts with /api/task

app.use(notFound); // Use the custom 404 middleware for handling unmatched routes.

const start = async () => {
  try {
    // Attempt to connect to MongoDB using Mongoose
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database is connected");

    // Start the server and listen on the specified port
    app.listen(port, () => {
      console.log(`Server is running on PORT ${port}`);
    });
  } catch (error) {
    // Log the error if the database connection fails
    console.log(error);
    console.log("Unable to connect");
  }
};

start();

//Mongoose is an ODM (Object Data Modelling) library for MongoDB and Node.js.

//MongoDB is a NoSQL database that stores data in a flexible, JSON like format

// CORS means CROSS ORIGIN REQUEST

// zidinebo
// qiPQrrumPCEKGDJx
// mongodb+srv://zidinebo:2kzRirK62JoJTr9l@cluster0.gpxnw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
