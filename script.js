//https://jsonplaceholder.typicode.com/posts

//1. Read posts

async function readPosts(){
    let posts = document.querySelector('.posts');
    posts.innerHTML = 'Loading...';

    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();


    if(json.length > 0){
        posts.innerHTML = '';
        for(let i in json){
           let postHTML = `<div><h1>${json[i].title}</h1></div> <div><p>${json[i].body}</p></div><hr>`; 
           posts.innerHTML += postHTML;
        }
    }else{
        posts.innerHTML = 'Nothing to show';
    }
}

//2. Add new posts

async function addNewPost(title, body){
    await fetch(
        '',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                body,
                userId: 2
            })
        }
    );

    document.querySelector('#title-field').value = '';
    document.querySelector('#body-field').value = '';

    readPosts();

}

document.querySelector('#insert-button').addEventListener('click', () => {
    let title = document.querySelector('#title-field').value;
    let body = document.querySelector('#body-field').value;

    if(title && body){
        addNewPost(title, body);
    }else{
        alert('Fill up all fields!');
    }
});


readPosts();