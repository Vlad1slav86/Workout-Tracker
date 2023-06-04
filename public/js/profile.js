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

const delButtonHandler = async (event) => {
  if(event.target.hasAttribute('data-id')){
    const id = event.target.hasAttribute('data-id');
        
    const response = await fetch(`api/posts/${id}`, {
      method: 'DELETE'
    });
    if(response.ok){
      document.location.reload('/profile');
    } else {
      alert('Failed to delete post');
    }
  }
};

document.querySelector('.delete').addEventListener('click', delButtonHandler);
document.querySelector('.post').addEventListener('click', newFormHandler);