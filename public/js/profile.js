const { response } = require("express");

const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const post = document.querySelector('#user-post').value.trim();

    if(title && post){
        const response = await fetch (`/api/profile`, {
            method: 'POST',
            body: JSON.stringify({name, post}),
            headers: {
                'content-type': 'application/json'
            },
        });
        
        if(response.ok){
            document.location.replace('/profile');
        } else {
            alert('Failed to create post');
        }
    }
}