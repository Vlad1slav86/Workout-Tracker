
const deleteBtn = document.querySelector('.deletebtn');

deleteBtn.addEventListener('click', async function(event){
  event.preventDefault();

  const id = event.target.id;
    
  alert('id', id);

  const response = await fetch (`/api/${id}`,{
    method: 'DELETE'
  });
  if(response.ok){
    window.location.reload();
  }
});