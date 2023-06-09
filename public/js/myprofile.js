function uploadImage(){
  let uploading = document.getElementById('uploadbtn');
  uploading.style.display = 'block';
  let choosefile = document.getElementById('fileChoose');
  choosefile.style.display = 'none';
  let picturenav = document.getElementById('picturenav');
  picturenav.style.display = 'block';
}

function submitAppear(event){
  event.preventDefault();
  let submit = document.getElementById('submit');
  submit.style.display = 'block';
}

function elementRemove (event){
  event.preventDefault();
  let usr = document.getElementById('hello');
  usr.style.display = 'block';
}


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

  } 
};
const newPicture = (event) => {
  event.preventDefault();
  const user_id = document.querySelector('.img').value;
  const photos = document.querySelector('.userimages').files;
  if(photos.length) {
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
    alert('failed');
  }
}
;



savedForm = document.querySelector('#saved-form');
file = document.querySelector('.file');

const input = document.querySelector('.usr');
const inputBtn = document.querySelector('.usrbtn');
const form = document.querySelector('.profileform');
const h3 = document.querySelector('.usrdata');
const rememberMe = document.querySelector('.rememberme');
const usrbutton2 = document.querySelector('.usrbtn2');
const pstbtn = document.querySelector('.pstbtn');
const uploadimgs = document.querySelector('.userimages');



inputBtn.addEventListener('click', newFormHandler,);
usrbutton2.addEventListener('click', newPicture);
pstbtn.addEventListener('click', elementRemove);
input.addEventListener('click', submitAppear);
uploadimgs.addEventListener('click', uploadImage);

