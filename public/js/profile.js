const { response } = require('express');

const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const post_body = document.querySelector('#user-post').value.trim();

  if(title && post_body){
    const response = await fetch ('/api/profile', {
      method: 'POST',
      body: JSON.stringify({title, post_body}),
      headers: {
        'content-type': 'application/json'
      },
    });
        
    if(response.ok){
      document.location.reload('/api/post');
    } else {
      alert('Failed to create post');
    }
  }
};


document.querySelector('.post').addEventListener('click', newFormHandler);