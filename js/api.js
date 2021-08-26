// console.log('API (Application Programming Interface)');

/*-------------------------------------------------------------------------------*\
  //////////////////////////////// loadjson \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\*-------------------------------------------------------------------------------*/
function loadjson() {
  fetch("https://jsonplaceholder.typicode.com/todos/1") //stringified items
    .then((response) => response.json())
    .then((json) => console.log(json.title));
}

/*-------------------------------------------------------------------------------*\
  //////////////////////////////// loadusers \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\*-------------------------------------------------------------------------------*/
/* 
function loadusers()
{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(data));
} 
*/

// loadpost() //Autocall

////////////// function in .then() //////////////
/* 
function loadusers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => displayUsers(data));
}

function displayUsers(data) {
  console.log(data);
}
 */

////////////// create elements function in .then() //////////////

 
function loadusers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => displayUsers(users));
}

function displayUsers(users) 
{
    // console.log(user);
    const ul = document.getElementById('users');
    for(const user of users)
    {
        
        const li = document.createElement('li');
        // li.innerText = user.name;
        li.innerText = `Name:   ${user.name} 
        Email:  ${user.email}
        |    `;
        ul.appendChild(li);
    }
}



/*-------------------------------------------------------------------------------*\
  //////////////////////////////// loadpost \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\*-------------------------------------------------------------------------------*/
function loadpost() 
{
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => console.log(data));
}


