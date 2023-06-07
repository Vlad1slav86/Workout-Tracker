// const router = require('express').Router();

// router.get('/', async (req, res) => {
//     const time = req.query.time;
//     const equipment = req.query.equipment;
//     const muscle = req.query.muscle;
//     const fitnessLevel = req.query.fitnessLevel;
//     const fitnessGoals = req.query.fitnessGoals;

//     const options = {
//         method: 'GET',
//         url: 'https://workout-planner1.p.rapidapi.com/customized',
//         params: {
//           time,
//           equipment,
//           muscle,
//           fitness_level: fitnessLevel,
//           fitness_goals: fitnessGoals,
//         },
//         headers: {
//           'X-RapidAPI-Key': process.env.API_KEY,
//           'X-RapidAPI-Host': 'workout-planner1.p.rapidapi.com'
//         }
//       };
    
//       try {
//         const response = await axios.request(options);
//         const workoutData = response.data;
//         console.log(workoutData);
//         res.json(workoutData);
//       } catch (error) {
//         console.error(error);
//       }
// });

// module.exports = router;