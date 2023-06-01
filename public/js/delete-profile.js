
const delBtn = async (event) => {
  if(event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    
    const response = await fetch (`/api/users/${id}`,{
      method: 'DELETE'
    });
    if (response.ok) {
      document.location.replace('/myprofile');
    } else {
      alert('Failed to delete user');
    }
  }
};

document.addEventListener('click', delBtn);