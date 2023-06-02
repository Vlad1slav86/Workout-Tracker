const newFormHandler = async (event) => {
  event.preventDefault();

  if (name && email){
    const response = await ('/api/myprofile', {
      method: 'POST',
      body: JSON.stringify({name, email}),
      headers: {
        'content-type': 'application/json'
      },
    });
    if(response.ok){
      document.location.replace('/profile');
    } else {
      alert('Failed to create Profile');
    }
  }
};
savedForm = document.querySelector('#saved-form');
file = document.querySelector('.file');

const input = document.querySelector('.usr');
const inputBtn = document.querySelector('.usrbtn');
const form = document.querySelector('.profileform');
const h3 = document.querySelector('.usrdata');
const usr = document.querySelector('.usrdata2');
const diet = document.querySelector('.usrdata3');
const stats = document.querySelector('.usrdata4');
const rememberMe = document.querySelector('.rememberme');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const input3 = document.querySelector('#input3');


form.addEventListener('submit', function (event){
  event.preventDefault();
});

inputBtn.addEventListener('click', function(){
  let items = document.getElementsByClassName('usr');
  for (let i = 0; i < items.length; i++) {
    localStorage.setItem(items[i].name, items[i].value);
    console.log(items[i].name);
    console.log(items[i].value);
    DisplayCheck();
  }
});

function DisplayCheck(){
  if (localStorage.getItem('number')) {
    let names = localStorage.getItem('number');
    h3.textContent = `${names}`;
    input.style.display = 'none';
    inputBtn.style.display = 'none';

  } if (localStorage.getItem('Workout')){
    let namer = localStorage.getItem('Workout');
    usr.textContent = `${namer}`;
    input1.style.display = 'none';

  } if (localStorage.getItem('Diet')){
    let namen = localStorage.getItem('Diet');
    diet.textContent = `${namen}`;
    input2.style.display = 'none';

  } if (localStorage.getItem('Status')){
    let naming = localStorage.getItem('Status');
    stats.textContent = `${naming}`;
    input3.style.display = 'none';

  } 

}
document.body.onload = DisplayCheck;
