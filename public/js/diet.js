const calories = document.querySelector("#calories");
const submit = document.querySelector("#submit");
const result = document.querySelector(".result");
const Recipe = document.querySelector(".Recipe");

console.log(calories);
console.log(submit);
console.log(result);
console.log(Recipe);

submit.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector('.result').innerHTML = "";
    const input1 = calories.value;

    console.log(input1);

    const apiUrl = `https://api.spoonacular.com/recipes/findByNutrients?maxCalories=${input1}&number=4&apiKey=67783db3f2bc4be1abae0216d20dbadd`;


    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            for (var i = 0; i < data.length; i += 1) {
                var currentObj = data[i];
                console.log(currentObj);
                var div = document.createElement('div');
                var h3 = document.createElement('h3');
                var img = document.createElement('img');
                var ul = document.createElement('ul');
                var li = document.createElement('li');
                var lii = document.createElement('li');
                var liii = document.createElement('li');
                var liiii = document.createElement('li');
                var button2 = document.createElement('button')

                div.classList.add('card');
                h3.textContent = currentObj.title;
                img.setAttribute('src', currentObj.image);
                li.textContent = 'Calories: ' + currentObj.calories;
                lii.textContent = 'Carbs: ' + currentObj.carbs;
                liii.textContent = 'Fat: ' + currentObj.fat;
                liiii.textContent = 'Protein: ' + currentObj.protein;
                button2.textContent = 'Get Recipe';
                button2.value = currentObj.id;

                ul.appendChild(li);
                ul.appendChild(lii);
                ul.appendChild(liii);
                ul.appendChild(liiii);

                div.appendChild(h3);
                div.appendChild(img);
                div.appendChild(ul);
                div.appendChild(button2);

                result.appendChild(div);

            }
        
        })

});

result.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
      var recipeId = event.target.value;
      console.log(recipeId);
  
      const apiUrl2 = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=67783db3f2bc4be1abae0216d20dbadd`;
  
      fetch(apiUrl2)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          var div2 = document.createElement('div');
          var h31 = document.createElement ('h3');
          var img1 = document.createElement ('img');
          var p1 = document.createElement ('p');
          var ul1 = document.createElement('ul');
          var li1 = document.createElement('li');
          var lii1 = document.createElement('li');
          var liii1 = document.createElement('li');
          var liiii1 = document.createElement('li');
          var liiiii1 = document.createElement('li');
          var p2 = document.createElement ('p');

          div2.classList.add('card');
          h31.textContent= data.title;
          img1.setAttribute('src', data.image);
          p1.textContent = data.instructions;
          li1.textContent = `glutenFree: ${data.glutenFree}`;
          lii1.textContent = `vegan: ${data.vegan}`;
          liii1.textContent = `vegetarian: ${data.vegetarian}`;
          liiii1.textContent = `veryHealthy: ${data.veryHealthy}`;
          liiiii1.textContent = `weightWatcherSmartPoints: ${data.weightWatcherSmartPoints}`;
          p2.textContent=data.summary;

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