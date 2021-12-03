const workouts = require("express").Router();

const { Workout } = require("../public/models");

workouts.put("/:id", (req, res) => {
  console.log(req.params.id);

  res.json({ msg: "TEST" });
});

workouts.post("/", (req, res) => {


    //Create a new workout
    let workout = new Workout()

    console.log(workout)

    workout.save((err) => {

        if (err) {
            res.status(500)
            res.json({"msg": "Error"})
        }

        
    })

});

module.exports = workouts;
