const deleteBtn = document.querySelector('.deletebtn');

deleteBtn.addEventListener('click', async function(event){
  event.preventDefault();

  const id = event.target.id;
    
  alert('id', id);

  const response = await fetch (`/api/user/${id}`,{
    method: 'DELETE'
  });
  if(response.ok){
    window.location.reload();
  }
});