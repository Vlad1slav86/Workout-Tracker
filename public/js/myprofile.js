const newFormHandler = async (event) => {
  event.preventDefault();
  console.log('click');
  const about = document.querySelector('.usr').value;
  const photos = document.querySelector('.userimages').files;
  const user_id = document.querySelector('.img').value;
  console.log(user_id);
  console.log(photos);
  console.log(about);
  const response = await fetch(`/api/users/${user_id}`, {
    method: 'PUT',
    body: JSON.stringify({about}),
    headers: {
      'Content-Type': 'application/json'
    },
  });
  console.log(response);
  if(response.ok && !photos.length){
    document.location.replace('/myprofile');
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
        document.location.reload();
      });
    }
  }
  else {
    alert(response.statusText);
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

