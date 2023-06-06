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
const rememberMe = document.querySelector('.rememberme');



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
  }
}
document.body.onload = DisplayCheck;
