// diet.js

// Get the form and buttons elements
const mealForm = document.querySelector('#meal-form');
const createMealPlanButton = document.querySelector('#create-meal-plan');

// Get the meal plan and total calories elements
const mealPlanContainer = document.querySelector('#meal-plan');
const totalCaloriesContainer = document.querySelector('#total-calories');

// Initialize an empty array to store the meals
let mealPlan = [];

// Event listener for adding a meal
mealForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the meal name and calories
  const mealNameInput = document.querySelector('#meal-name');
  const mealCaloriesInput = document.querySelector('#meal-calories');
  const mealName = mealNameInput.value.trim();
  const mealCalories = parseInt(mealCaloriesInput.value.trim(), 10);

  if (mealName && mealCalories) {
    // Create a new meal object
    const meal = { name: mealName, calories: mealCalories };

    // Add the meal to the meal plan array
    mealPlan.push(meal);

    // Display the meal in the meal plan container
    const mealItem = document.createElement('div');
    mealItem.innerHTML = `<span>${meal.name} - ${meal.calories} calories</span>`;
    mealPlanContainer.appendChild(mealItem);

    // Clear the meal name and calories inputs
    mealNameInput.value = '';
    mealCaloriesInput.value = '';
  }
});

// Event listener for creating the meal plan
createMealPlanButton.addEventListener('click', () => {
  // Calculate the total calories
  const totalCalories = mealPlan.reduce((sum, meal) => sum + meal.calories, 0);

  // Display the total calories
  totalCaloriesContainer.textContent = `Total Calories: ${totalCalories}`;

  // Clear the meal plan array
  mealPlan = [];
  mealPlanContainer.innerHTML = '';
});

