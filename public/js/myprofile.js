const newFormHandler = async (event) => {
  event.preventDefault()

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
}
// savedForm = document.querySelector("#saved-form")
// file = document.querySelector(".file")
  