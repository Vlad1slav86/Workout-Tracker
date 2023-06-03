
// async function handleWorkoutFormSubmit(event) {
//     event.preventDefault();
  
//     const name = document.querySelector('#workout-name').value;
//     const description = document.querySelector('#workout-description').value;
  
//     const workout = {
//       name,
//       description
//     };
  
//     try {
//       const response = await fetch('/workout', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(workout)
//       });
  
//       if (response.ok) {
       
//       } else {
//         console.error('Failed to create workout');
//       }
//     } catch (error) {
//       console.error('An error occurred:', error);
//     }
//   }
  
//   // Function to handle the form submission when updating an existing workout
//   async function handleWorkoutUpdateFormSubmit(event) {
//     event.preventDefault();
  
//     const workoutId = // Get the workout ID you want to update
//     const name = document.querySelector('#workout-name').value;
//     const description = document.querySelector('#workout-description').value;
  
// // Handle workout creation form submission
// const createWorkoutForm = document.querySelector('.create-workout-form');
// createWorkoutForm.addEventListener('submit', async (event) => {
//   event.preventDefault();

//   const workoutName = document.querySelector('#workout-name').value.trim();

//   // Send a request to create the workout and save it to the user's profile
//   // Include workoutName in the request payload

//   // Assuming the response returns the workout ID
//   const workoutId = '123'; // Replace with the actual workout ID received from the server

//   // Generate the first exercise form
//   generateExerciseForm();

//   // Enable the save workout button
//   const saveWorkoutButton = document.querySelector('#save-workout-button');
//   saveWorkoutButton.disabled = false;
// });

// // Handle exercise form submissions
// const exerciseFormContainer = document.querySelector('#exercise-form-container');
// exerciseFormContainer.addEventListener('submit', '.add-exercise-form', async (event) => {
//   event.preventDefault();

//   // Collect values from the exercise form
//   const exerciseName = event.target.querySelector('.exercise-name').value.trim();
//   const reps = event.target.querySelector('.reps').value;
//   const calories = event.target.querySelector('.calories').value;
//   const duration = event.target.querySelector('.duration').value;

//   // Send a request to add the exercise to the workout
//   // Include the exercise details and workoutId in the request payload

//   // Clear the exercise form fields
//   event.target.reset();

//   // Generate a new exercise form
//   generateExerciseForm();
// });

// // Generate a new exercise form
// function generateExerciseForm() {
//   const exerciseForm = document.createElement('form');
//   exerciseForm.classList.add('add-exercise-form');

//   exerciseForm.innerHTML = `
//     <h2>Add Exercise</h2>
  
//     <label for="exercise-name">Exercise:</label>
//     <input type="text" class="exercise-name" />
  
//     <label for="reps">Reps:</label>
//     <input type="number" class="reps" />
  
//     <label for="calories">Calories:</label>
//     <input type="number" class="calories" />
  
//     <label for="duration">Duration (minutes):</label>
//     <input type="number" class="duration" />
  
//     <button type="submit">Add Exercise</button>
//   `;

//   exerciseFormContainer.appendChild(exerciseForm);
// }

// // Handle save workout button click
// const saveWorkoutButton = document.querySelector('#save-workout-button');
// saveWorkoutButton.addEventListener('click', async () => {
//   // Send a request to save the complete workout to the user's profile
//   // Include workoutId and any other necessary data in the request payload

//   // Redirect the user to their profile page or show a success message
// });





//     const updatedWorkout = {
//       name,
//       description
//     };
  
//     try {
//       const response = await fetch(`/workout/${workoutId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(updatedWorkout)
//       });
  
//       if (response.ok) {
       
//       } else {
//         console.error('Failed to update workout');
//       }
//     } catch (error) {
//       console.error('An error occurred:', error);
//     }
//   }
  
 
//   async function handleWorkoutDeletion(workoutId) {
//     try {
//       const response = await fetch(`/workout/${workoutId}`, {
//         method: 'DELETE'
//       });
  
//       if (response.ok) {
       
//       } else {
//         console.error('Failed to delete workout');
//       }
//     } catch (error) {
//       console.error('An error occurred:', error);
//     }
//   }
  
  
//   async function getWorkouts() {
//     try {
//       const response = await fetch('/workout');
//       const workouts = await response.json();
  
      
//     } catch (error) {
//       console.error('An error occurred:', error);
//     }
//   }
  
  
//   const workoutForm = document.querySelector('.workout-form');
//   workoutForm.addEventListener('submit', handleWorkoutFormSubmit);
  
//   const workoutUpdateForm = document.querySelector('.workout-update-form');
//   workoutUpdateForm.addEventListener('submit', handleWorkoutUpdateFormSubmit);
  
//   const deleteButtons = document.querySelectorAll('.delete-workout');
//   deleteButtons.forEach((button) => {
//     button.addEventListener('click', () => {
//       const workoutId = button.dataset.workoutId;
//       handleWorkoutDeletion(workoutId);
//     });
//   });
  
  
//   getWorkouts();
  








//   // Get the form and exercise form container elements
// const createWorkoutForm = document.querySelector('.create-workout-form');
// const exerciseFormContainer = document.getElementById('exercise-form-container');
// const saveWorkoutButton = document.getElementById('save-workout-button');

// // Add event listener to the create workout form submission
// createWorkoutForm.addEventListener('submit', async (event) => {
//   event.preventDefault();

//   // Get the workout name value
//   const workoutNameInput = document.querySelector('#workout-name');
//   const workoutName = workoutNameInput.value.trim();

//   // Check if the workout name is provided
//   if (workoutName) {
//     // Clear the workout name input field
//     workoutNameInput.value = '';

//     // Enable the save workout button
//     saveWorkoutButton.disabled = false;

//     // Generate exercise form
//     generateExerciseForm();
//   }
// });

// // Function to generate exercise form
// function generateExerciseForm() {
//     const exerciseForm = document.createElement('div');
//     exerciseForm.classList.add('exercise-form');
  
//     exerciseForm.innerHTML = `
//       <hr>
//       <h2>Exercise</h2>
//       <label for="exercise-name">Exercise Name:</label>
//       <input type="text" class="exercise-name" required>
  
//       <label for="reps">Reps:</label>
//       <input type="number" class="reps" required>
  
//       <label for="calories">Calories:</label>
//       <input type="number" class="calories" required>
  
//       <label for="duration">Duration:</label>
//       <input type="text" class="duration" required>
  
//       <button type="button" class="remove-exercise">Remove Exercise</button>
//     `;
  
//     const exerciseContainer = document.querySelector('#exercise-container');
//     exerciseContainer.appendChild(exerciseForm);
  
//     const removeExerciseButton = exerciseForm.querySelector('.remove-exercise');
//     removeExerciseButton.addEventListener('click', () => {
//       exerciseContainer.removeChild(exerciseForm);
//     });
//   }
  
//   // Add event listener to the "Add Exercise" button
//   const addExerciseButton = document.querySelector('#add-exercise');
//   addExerciseButton.addEventListener('click', generateExerciseForm);
  
//   // Add event listener to the workout form submission
//   const workoutForm = document.querySelector('#workout-form');
//   workoutForm.addEventListener('submit', async (event) => {
//     event.preventDefault();
  
//     const workoutName = document.querySelector('#workout-name').value.trim();
//     const exerciseForms = document.querySelectorAll('.exercise-form');
//     const exercises = [];
  
//     exerciseForms.forEach((exerciseForm) => {
//       const exerciseName = exerciseForm.querySelector('.exercise-name').value.trim();
//       const reps = exerciseForm.querySelector('.reps').value.trim();
//       const calories = exerciseForm.querySelector('.calories').value.trim();
//       const duration = exerciseForm.querySelector('.duration').value.trim();
  
//       const exercise = {
//         exerciseName,
//         reps,
//         calories,
//         duration,
//       };
  
//       exercises.push(exercise);
//     });
  
//     console.log('Workout Name:', workoutName);
//     console.log('Exercises:', exercises);
  
//     // Clear the form inputs
//     workoutForm.reset();
//     const exerciseContainer = document.querySelector('#exercise-container');
//     exerciseContainer.innerHTML = '';
  
//     // Display the new workout and exercises
//     const workoutContainer = document.createElement('div');
//     workoutContainer.classList.add('workout-container');
  
//     const workoutTitle = document.createElement('h2');
//     workoutTitle.textContent = workoutName;
//     workoutContainer.appendChild(workoutTitle);
  
//     exercises.forEach((exercise) => {
//       const exerciseInfo = document.createElement('p');
//       exerciseInfo.textContent = `Exercise: ${exercise.exerciseName}, Reps: ${exercise.reps}, Calories: ${exercise.calories}, Duration: ${exercise.duration}`;
//       workoutContainer.appendChild(exerciseInfo);
//     });
  
//     const workoutSection = document.querySelector('#workout-section');
//     workoutSection.innerHTML = '';
//     workoutSection.appendChild(workoutContainer);
//   });
  
  

// // Add event listener to the save workout button
// saveWorkoutButton.addEventListener('click', async () => {
//   // Collect data from exercise forms
//   const exerciseForms = document.querySelectorAll('.exercise-form');
//   const exercises = [];

//   exerciseForms.forEach((form) => {
//     const exerciseName = form.querySelector('#exercise-name').value.trim();
//     const reps = form.querySelector('#reps').value.trim();
//     const calories = form.querySelector('#calories').value.trim();
//     const duration = form.querySelector('#duration').value.trim();

//     exercises.push({ exerciseName, reps, calories, duration });
//   });

//   // Send the workout data to the server for saving
//   await saveWorkoutToServer(exercises);

//   // Reset the form and exercise forms
//   createWorkoutForm.reset();
//   exerciseFormContainer.innerHTML = '';

//   // Disable the save workout button
//   saveWorkoutButton.disabled = true;
// });

// // Save workout to the server
// async function saveWorkoutToServer(exercises) {
//   try {
//     const response = await fetch('/api/workouts', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ exercises }),
//     });

//     if (response.ok) {
//       const workoutData = await response.json();
//       // Handle the successful response and further actions if needed
//     } else {
//       throw new Error('Failed to save workout');
//     }
//   } catch (error) {
//     console.error(error);
//     // Handle the error and display an error message to the user if needed
//   }
// }





document.addEventListener('DOMContentLoaded', () => {
    const addExerciseButton = document.querySelector('#add-exercise');
    const exerciseContainer = document.querySelector('#exercise-container');
    const workoutForm = document.querySelector('#workout-form');
    const savedWorkoutsSection = document.querySelector('#saved-workouts-section');
  
    let exercises = [];
  
    addExerciseButton.addEventListener('click', () => {
      const exerciseForm = document.createElement('div');
      exerciseForm.classList.add('exercise-form');
  
      exerciseForm.innerHTML = `
        <label for="exercise-name">Exercise Name:</label>
        <input type="text" class="exercise-name" required>
  
        <label for="reps">Reps:</label>
        <input type="number" class="reps" required>
  
        <label for="duration">Duration:</label>
        <input type="text" class="duration" required>
  
        <button type="button" class="remove-exercise">Remove Exercise</button>
      `;
  
      const removeExerciseButton = exerciseForm.querySelector('.remove-exercise');
      removeExerciseButton.addEventListener('click', () => {
        exercises = exercises.filter((_, index) => index !== exercises.length - 1);
        exerciseContainer.removeChild(exerciseForm);
      });
  
      exerciseContainer.appendChild(exerciseForm);
    });
  
    workoutForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const workoutName = document.querySelector('#workout-name').value.trim();
      const workoutType = document.querySelector('#workout-type').value.trim();
  
      const workoutContainer = document.createElement('div');
      workoutContainer.classList.add('workout-container');
  
      const workoutTitle = document.createElement('h2');
      workoutTitle.textContent = workoutName;
      workoutContainer.appendChild(workoutTitle);
  
      const workoutTypeInfo = document.createElement('p');
      workoutTypeInfo.textContent = `Workout Type: ${workoutType}`;
      workoutContainer.appendChild(workoutTypeInfo);
  
      exercises.forEach((exercise) => {
        const exerciseInfo = document.createElement('p');
        exerciseInfo.textContent = `Exercise: ${exercise.exerciseName}, Reps: ${exercise.reps}, Duration: ${exercise.duration}`;
        workoutContainer.appendChild(exerciseInfo);
      });
  
      savedWorkoutsSection.appendChild(workoutContainer);
  
      workoutForm.reset();
      exerciseContainer.innerHTML = '';
  
      exercises = [];
    });
  });
  