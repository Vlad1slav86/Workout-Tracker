
//require('dotenv').config();

const calories = document.querySelector('#calories');
const mincalories = document.querySelector('#mincalories');
const submit = document.querySelector('#submit');
const result = document.querySelector('.result');
const Recipe = document.querySelector('.Recipe');
const viewSavedMeals = document.getElementById('viewSavedMeals');
const savedMeals = document.querySelector('.savedMeals');


//const apiKey = process.env.api_key;
//console.log(apiKey);

console.log(calories);
console.log(submit);
console.log(result);
console.log(Recipe);



submit.addEventListener('click', function (event) {

  event.preventDefault();
  result.innerHTML = '';
  Recipe.innerHTML = '';
  tempnames = [];

  const input1 = calories.value;
  const input2 = mincalories.value;

  console.log(input1);
  console.log(input2);

  const apiUrl = `https://api.spoonacular.com/recipes/findByNutrients?maxCalories=${input1}&minCalories=${input2}&number=40&apiKey=82a8dcd5c2cb43b0a057879ca2ef7085`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      tempnames = data.slice();
      console.log(tempnames);

      for (var j = 0; j < data.length; j += 10) {
        var randomIndex = Math.floor(Math.random() * tempnames.length);
        var currentObj = tempnames[randomIndex];
        tempnames.splice(randomIndex, 1);

        console.log(currentObj);
        var div = document.createElement('div');
        var h3 = document.createElement('h3');
        var img = document.createElement('img');
        var ul = document.createElement('ul');
        var li = document.createElement('li');
        var lii = document.createElement('li');
        var liii = document.createElement('li');
        var liiii = document.createElement('li');
        var button2 = document.createElement('button');
        var button3 = document.createElement('button');
        var br = document.createElement('br');


        div.classList.add('card');
        h3.textContent = currentObj.title;
        h3.classList.add('titles');
        img.setAttribute('src', currentObj.image);
        li.textContent = 'Calories: ' + currentObj.calories;
        lii.textContent = 'Carbs: ' + currentObj.carbs;
        liii.textContent = 'Fat: ' + currentObj.fat;
        liiii.textContent = 'Protein: ' + currentObj.protein;
        button2.textContent = 'Get Recipe';
        button2.value = currentObj.id;
        button3.textContent = 'Add to your Recipes';
        button3.classList.add('class', 'button3');

        ul.appendChild(li);
        ul.appendChild(lii);
        ul.appendChild(liii);
        ul.appendChild(liiii);

        div.appendChild(h3);
        div.appendChild(img);
        div.appendChild(ul);
        div.appendChild(button2);
        div.appendChild(br);
        div.appendChild(button3);

        result.appendChild(div);
      }
    })
    .catch(error => {
      console.error(error);
    });
});


// result.addEventListener("click", function (event) {
//   if (event.target.tagName === "BUTTON" && !event.target.classList.contains("button3")) 
//     {
//       var recipeId = event.target.value;
//       event.preventDefault();
//       Recipe.innerHTML = "";
//       console.log(recipeId);

//       const apiUrl2 = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=82a8dcd5c2cb43b0a057879ca2ef7085`;

//       fetch(apiUrl2)
//         .then(response => response.json())
//         .then(data => {
//           console.log(data);
//           var div2 = document.createElement('div');
//           var h31 = document.createElement('h3');
//           var img1 = document.createElement('img');
//           var p1 = document.createElement('p');
//           var ul1 = document.createElement('ul');
//           var li1 = document.createElement('li');
//           var lii1 = document.createElement('li');
//           var liii1 = document.createElement('li');
//           var liiii1 = document.createElement('li');
//           var liiiii1 = document.createElement('li');
//           var p2 = document.createElement('p');

//           div2.classList.add('card');
//           h31.textContent = data.title;
//           img1.setAttribute('src', data.image);
//           p1.textContent = data.instructions;
//           li1.textContent = `glutenFree: ${data.glutenFree}`;
//           lii1.textContent = `vegan: ${data.vegan}`;
//           liii1.textContent = `vegetarian: ${data.vegetarian}`;
//           liiii1.textContent = `veryHealthy: ${data.veryHealthy}`;
//           liiiii1.textContent = `weightWatcherSmartPoints: ${data.weightWatcherSmartPoints}`;
//           p2.textContent = data.summary;

//           ul1.appendChild(li1);
//           ul1.appendChild(lii1);
//           ul1.appendChild(liii1);
//           ul1.appendChild(liiii1);
//           ul1.appendChild(liiiii1);

//           div2.appendChild(h31);
//           div2.appendChild(img1);
//           div2.appendChild(p1);
//           div2.appendChild(ul1);
//           div2.appendChild(p2);

//           Recipe.appendChild(div2);

//         })
//         .catch(error => {
//           console.error(error);
//         });
//     }
//   });

result.addEventListener('click', function (event) {
  if (event.target.tagName === "BUTTON" && !event.target.classList.contains("button3"))  
  {   
    var recipeId = event.target.value;
    event.preventDefault();
    Recipe.innerHTML = '';
    console.log(recipeId);

    const apiUrl2 = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=82a8dcd5c2cb43b0a057879ca2ef7085`;

    fetch(apiUrl2)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        var div2 = document.createElement('div');
        var h31 = document.createElement('h3');
        var img1 = document.createElement('img');
        var p1 = document.createElement('p');
        var ul1 = document.createElement('ul');
        var li1 = document.createElement('li');
        var lii1 = document.createElement('li');
        var liii1 = document.createElement('li');
        var liiii1 = document.createElement('li');
        var liiiii1 = document.createElement('li');
        var p2 = document.createElement('p');

        div2.classList.add('card');
        h31.textContent = data.title;
        img1.setAttribute('src', data.image);
        p1.textContent = data.instructions;
        li1.textContent = `glutenFree: ${data.glutenFree}`;
        lii1.textContent = `vegan: ${data.vegan}`;
        liii1.textContent = `vegetarian: ${data.vegetarian}`;
        liiii1.textContent = `veryHealthy: ${data.veryHealthy}`;
        liiiii1.textContent = `weightWatcherSmartPoints: ${data.weightWatcherSmartPoints}`;
        p2.textContent = data.summary;

        ul1.appendChild(li1);
        ul1.appendChild(lii1);
        ul1.appendChild(liii1);
        ul1.appendChild(liiii1);
        ul1.appendChild(liiiii1);

        div2.appendChild(h31);
        div2.appendChild(img1);
        div2.appendChild(p1);
        div2.appendChild(ul1);
        div2.appendChild(p2);

        Recipe.appendChild(div2);

      })
      .catch(error => {
        console.error(error);
      });
  }
});


viewSavedMeals.addEventListener('click', async function (event) {
  event.preventDefault();

  try {
    const response = await fetch('/recipies');
    if (response.ok) {
      const meals = await response.json();


      console.log (meals);

      for (i=0 ; i < meals.length; i++){
        console.log (meals[i]);
        var ul12 = document.createElement('ul');
        var li122 = document.createElement('li');

        li122.textContent=meals[i].Recipe_title;

        ul12.appendChild(li122);
        savedMeals.appendChild(ul12);


      }

      console.log(meals);
    } else {
      throw new Error('Failed to fetch saved meals');
    }
  } catch (error) {
    console.error(error);
  }
});


result.addEventListener("click", async function (event) {
  if (event.target.tagName === "BUTTON" && event.target.classList.contains("button3")) {
    console.log(event.target);
    event.preventDefault();
    const userid = prompt("Please enter your user_id:");
    const recipet = prompt("Please enter your Recipe_title:");

    try {
      const user_id = userid;
      console.log(user_id);
      const Recipe_title = recipet;

      const recipeResponse = await fetch('/postReci', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id, Recipe_title })
      });

      if (recipeResponse.ok) {
        const recipeSaved = await recipeResponse.json();
        console.log(recipeSaved);
      } else {
        console.log('Recipe save failed');
      }
    } catch (error) {
      console.error('Error occurred while saving recipe:', error);
    }
  }
});