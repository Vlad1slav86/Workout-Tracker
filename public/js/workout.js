console.log('working');

document.getElementById('workout-form').addEventListener('submit', async function (event) {
  event.preventDefault();

  const time = document.getElementById('time').value;
  const equipment = document.getElementById('equipment').value;
  const muscle = document.getElementById('muscle').value;
  const fitnessLevel = document.getElementById('fitness-level').value;
  const fitnessGoals = document.getElementById('fitness-goals').value;
  

  const options = {
    method: 'GET',
    url: 'https://workout-planner1.p.rapidapi.com/customized',
    params: {
      time,
      equipment,
      muscle,
      fitness_level: fitnessLevel,
      fitness_goals: fitnessGoals
    },
    headers: {
      'X-RapidAPI-Key': '',
      'X-RapidAPI-Host': 'workout-planner1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    const workoutData = response.data;
    displayWorkoutData(workoutData);
  } catch (error) {
    console.error(error);
  }

  function displayWorkoutData(workoutData) {
    const workoutResults = document.getElementById('workout-results');
    workoutResults.innerHTML = '';

    // Display Warm Up exercises
    const warmUpExercises = workoutData['Warm Up'];
    const warmUpHeading = document.createElement('h2');
    warmUpHeading.textContent = 'Warm Up:';
    workoutResults.appendChild(warmUpHeading);

    const warmUpList = document.createElement('ul');
    warmUpExercises.forEach(function (exercise) {
      const listItem = document.createElement('li');
      listItem.textContent = `${exercise.Exercise} - ${exercise.Time}`;
      warmUpList.appendChild(listItem);
    });
    workoutResults.appendChild(warmUpList);

    // Display Exercises
    const exerciseHeading = document.createElement('h2');
    exerciseHeading.textContent = 'Exercises:';
    workoutResults.appendChild(exerciseHeading);

    const exerciseList = document.createElement('ul');
    const exercises = workoutData['Exercises'];
    exercises.forEach(function (exercise) {
      const listItem = document.createElement('li');
      listItem.textContent = `${exercise.Exercise} - Sets: ${exercise.Sets}, Reps: ${exercise.Reps}`;
      exerciseList.appendChild(listItem);
    });
    workoutResults.appendChild(exerciseList);

    // Display Cool Down exercises
    const coolDownExercises = workoutData['Cool Down'];
    const coolDownHeading = document.createElement('h2');
    coolDownHeading.textContent = 'Cool Down:';
    workoutResults.appendChild(coolDownHeading);

    const coolDownList = document.createElement('ul');
    coolDownExercises.forEach(function (exercise) {
      const listItem = document.createElement('li');
      listItem.textContent = `${exercise.Exercise} - ${exercise.Time}`;
      coolDownList.appendChild(listItem);
    });
    workoutResults.appendChild(coolDownList);
  }

  const saveButton = document.createElement('button');
  saveButton.textContent = 'Save to Profile';
  saveButton.addEventListener('click', saveToProfile);
  workoutResults.appendChild(saveButton);

  function saveToProfile() {
    // Make a user object with a profile property
    const user = {
      profile: {
        savedWorkouts: []
      }
    };

    // Get the generated workout data
    const workoutData = getGeneratedWorkoutData();

    // Save the workout to the user's profile
    user.profile.savedWorkouts.push(workoutData);

    alert('Workout saved to profile!');
  }


});