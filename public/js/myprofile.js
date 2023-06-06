const newFormHandler = async (event) => {
  event.preventDefault();
  console.log('click');
  const about = document.querySelector('.usr').value;
  const photos = document.querySelector('.userimages').files;
  const user_id = document.querySelector('.img').value;
  if (about){
    console.log(photos);
    const response = await (`/api/users/${user_id}`, {
      method: 'PUT',
      body: JSON.stringify({about}),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    if(response.ok && !photos.length){
      // document.location.replace('/profile');
    } else if(photos.length) {
      for (let i = 0; i < photos.length; i++) {
        let formData = new FormData();
        formData.append('photo', photos[i]);
        formData.append('id', user_id);
        fetch('/api/picture', {
          method: 'POST',
          body: formData,
        }).then(() => {
          console.log('photo uploaded');
          // document.location.reload();
        });
      }
    }
    else {
      alert('Failed');
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

inputBtn.addEventListener('click', newFormHandler);
// form.addEventListener('submit', function (event){
//   event.preventDefault();
// });

// inputBtn.addEventListener('click', function(){
//   let items = document.getElementsByClassName('usr');
//   for (let i = 0; i < items.length; i++) {
//     localStorage.setItem(items[i].name, items[i].value);
//     console.log(items[i].name);
//     console.log(items[i].value);
//     DisplayCheck();
//   }
// });

// function DisplayCheck(){
//   if (localStorage.getItem('number')) {
//     let names = localStorage.getItem('number');
//     h3.textContent = `${names}`;
//     input.style.display = 'none';
//     inputBtn.style.display = 'none';
//   }
// }
// document.body.onload = DisplayCheck;
