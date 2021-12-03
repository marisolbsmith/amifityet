const express = require("express");

// Import our modular routers for /tips and /feedback
const workoutRouter = require('./workouts');


const app = express();




app.use('/workouts', workoutRouter);

module.exports = app;
