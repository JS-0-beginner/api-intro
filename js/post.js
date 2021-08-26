function loadposts()
{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => displayPosts(posts))
}

loadposts()

function displayPosts(posts)
{
    const postcontainer = document.getElementById('post');
    for(const post of posts)
    {
        //add element
        const div = document.createElement('div');
        
        //add htmls and json object property dynamically
        div.innerHTML = `
        <h3>${post.title}</h3>
    <p>${post.body}</p>
    |__
        `
        //add style
        div.classList.add('postcolor');
        
        //appendchild
        postcontainer.appendChild(div);
        
    }
}