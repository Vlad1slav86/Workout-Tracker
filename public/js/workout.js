document.getElementById('workout-form').addEventListener('submit', async function (event) {
  event.preventDefault();

  const time = document.getElementById('time').value;
  const equipment = document.getElementById('equipment').value;
  const muscle = document.getElementById('muscle').value;
  const fitnessLevel = document.getElementById('fitness-level').value;
  const fitnessGoals = document.getElementById('fitness-goals').value;

  try {
    const response = await axios.get('/api/workout', {
      params: {
        time,
        equipment,
        muscle,
        fitnessLevel,
        fitnessGoals
      }
    });
    const workoutData = response.data;
    displayWorkoutData(workoutData);
    showSaveButton(workoutData);
  } catch (error) {
    console.error(error);
  }
});

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

function showSaveButton(workoutData) {
  const saveButton = document.createElement('button');
  saveButton.textContent = 'Save to Workouts';
  saveButton.classList.add('save-button'); // Add a class to the button

  saveButton.addEventListener('click', function () {
    saveToWorkouts(workoutData);
  });

  const workoutResults = document.getElementById('workout-results');

  // Check if "Save to Workouts" button already exists
  const existingSaveButton = workoutResults.querySelector('.save-button');
  if (existingSaveButton) {
    workoutResults.removeChild(existingSaveButton);
  }

  workoutResults.appendChild(saveButton);
}


function saveToWorkouts(workoutData) {
  const workoutItem = document.createElement('div');
  workoutItem.classList.add('workout-item');

  // Create heading for the workout
  const workoutHeading = document.createElement('h3');
  workoutHeading.textContent = `Workout: ${workoutData.key}`;
  workoutItem.appendChild(workoutHeading);

  // Create list for warm-up exercises
  const warmUpList = document.createElement('ul');
  const warmUpExercises = workoutData['Warm Up'];
  const warmUpHeading = document.createElement('h4');
  warmUpHeading.textContent = 'Warm Up:';
  warmUpList.appendChild(warmUpHeading);
  warmUpExercises.forEach(function (exercise) {
    const listItem = document.createElement('li');
    listItem.textContent = `${exercise.Exercise} - ${exercise.Time}`;
    warmUpList.appendChild(listItem);
  });
  workoutItem.appendChild(warmUpList);

  // Create list for exercises
  const exerciseList = document.createElement('ul');
  const exercises = workoutData['Exercises'];
  const exerciseHeading = document.createElement('h4');
  exerciseHeading.textContent = 'Exercises:';
  exerciseList.appendChild(exerciseHeading);
  exercises.forEach(function (exercise) {
    const listItem = document.createElement('li');
    listItem.textContent = `${exercise.Exercise} - Sets: ${exercise.Sets}, Reps: ${exercise.Reps}`;
    exerciseList.appendChild(listItem);
  });
  workoutItem.appendChild(exerciseList);

  // Create list for cool-down exercises
  const coolDownList = document.createElement('ul');
  const coolDownExercises = workoutData['Cool Down'];
  const coolDownHeading = document.createElement('h4');
  coolDownHeading.textContent = 'Cool Down:';
  coolDownList.appendChild(coolDownHeading);
  coolDownExercises.forEach(function (exercise) {
    const listItem = document.createElement('li');
    listItem.textContent = `${exercise.Exercise} - ${exercise.Time}`;
    coolDownList.appendChild(listItem);
  });
  workoutItem.appendChild(coolDownList);

  const savedWorkoutsContainer = document.getElementById('saved-workouts-container');
  savedWorkoutsContainer.style.display = 'block';

  const savedWorkoutsList = document.getElementById('saved-workouts-list');
  savedWorkoutsList.appendChild(workoutItem);
}
