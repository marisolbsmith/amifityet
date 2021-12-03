const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const workoutSchema = new Schema({
  /*day: new Date(new Date().setDate(new Date().getDate() - 1)),
    exercises: [
      {
        type: 'resistance',
        name: 'Military Press',
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4,
      },*/

  day: Date,
  exercises: Array,
});

module.exports = mongoose.model("Workout", workoutSchema);
