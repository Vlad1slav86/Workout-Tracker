const { response } = require('express');

const myPro = await ('/api/myprofile', {
  method: 'GET',
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