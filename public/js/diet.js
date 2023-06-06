// Get references to the required elements in the DOM
const createMealPlanBtn = document.getElementById('create-meal-plan');
const mealForm = document.getElementById('meal-form');
const saveMealPlanBtn = document.getElementById('save-meal-plan');
const mealPlanContainer = document.getElementById('meal-plan');
const totalCaloriesContainer = document.getElementById('total-calories');
const mealPlanNameInput = document.getElementById('meal-plan-name');
const savedMealPlansContainer = document.getElementById('saved-meal-plans');

// Initialize the meal plan array and saved meal plans array
let mealPlan = [];
let savedMealPlans = [];

// Function to handle the form submission
function handleFormSubmit(event) {
    event.preventDefault();

    // Get the values from the form inputs
    const mealName = document.getElementById('meal-name').value;
    const mealCalories = parseInt(document.getElementById('meal-calories').value);

    // Create a new meal object
    const meal = {
        name: mealName,
        calories: mealCalories
    };

    // Add the meal to the meal plan array
    mealPlan.push(meal);

    // Clear the form inputs
    document.getElementById('meal-name').value = '';
    document.getElementById('meal-calories').value = '';

    // Render the updated meal plan
    renderMealPlan();
}

// Function to render the meal plan
function renderMealPlan() {
    // Clear the existing content
    mealPlanContainer.innerHTML = '';

    // Render each meal in the meal plan
    mealPlan.forEach((meal) => {
        const mealItem = document.createElement('li');
        mealItem.textContent = `${meal.name} - ${meal.calories} calories`;
        mealPlanContainer.appendChild(mealItem);
    });

    // Update the total calories
    const totalCalories = mealPlan.reduce((total, meal) => total + meal.calories, 0);
    totalCaloriesContainer.textContent = `Total Calories: ${totalCalories}`;
}

// Function to save the meal plan to local storage
function saveMealPlan() {
    const mealPlanName = mealPlanNameInput.value;
    if (mealPlanName.trim() === '') {
        alert('Please enter a meal plan name.');
        return;
    }

    const savedMealPlan = {
        name: mealPlanName,
        meals: mealPlan
    };

    savedMealPlans.push(savedMealPlan);
    localStorage.setItem('savedMealPlans', JSON.stringify(savedMealPlans));

    alert('Meal plan saved successfully!');
    resetMealPlan();
    renderSavedMealPlans();
}

// Function to reset the meal plan
function resetMealPlan() {
    mealPlan = [];
    renderMealPlan();
    mealPlanNameInput.value = '';
}

// Function to render the saved meal plans
function renderSavedMealPlans() {
    savedMealPlansContainer.innerHTML = '';

    savedMealPlans.forEach((mealPlan, index) => {
        const mealPlanItem = document.createElement('li');
        mealPlanItem.innerHTML = `
            <span>${mealPlan.name}</span>
            <button onclick="viewMealPlan(${index})">View</button>
            <button onclick="deleteMealPlan(${index})">Delete</button>
        `;
        savedMealPlansContainer.appendChild(mealPlanItem);
    });
}

// Function to view a saved meal plan
function viewMealPlan(index) {
    const mealPlan = savedMealPlans[index].meals;
    mealPlanNameInput.value = savedMealPlans[index].name;

    // Update the meal plan and render it
    resetMealPlan();
    mealPlan.push(...mealPlan);
    renderMealPlan();
}

// Function to delete a saved meal plan
function deleteMealPlan(index) {
    savedMealPlans.splice(index, 1);
    localStorage.setItem('savedMealPlans', JSON.stringify(savedMealPlans));
    renderSavedMealPlans();
}

// Add a click event listener to the create meal plan button
createMealPlanBtn.addEventListener('click', function() {
    // Show the meal input form
    mealForm.style.display = 'block';
    saveMealPlanBtn.style.display = 'inline-block';
    createMealPlanBtn.style.display = 'none';
});

// Add a submit event listener to the meal form
mealForm.addEventListener('submit', handleFormSubmit);

// Add a click event listener to the save meal plan button
saveMealPlanBtn.addEventListener('click', saveMealPlan);

// Load the saved meal plans from local storage on page load
function loadSavedMealPlans() {
    const savedMealPlansData = localStorage.getItem('savedMealPlans');
    if (savedMealPlansData) {
        savedMealPlans = JSON.parse(savedMealPlansData);
        renderSavedMealPlans();
    }
}

loadSavedMealPlans();
