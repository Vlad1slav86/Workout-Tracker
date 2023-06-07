const deletebtn = document.querySelector('.deletebtn');
const photos = document.querySelector('.userimages').files;

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

deletebtn.addEventListener('click', delBtn);