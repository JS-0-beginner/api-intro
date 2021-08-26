function displayimages()
{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(images => showImages(images))
}

function showImages(images)
{
    const img = document.getElementById('images');
    for(const image of images)
    {
        const div = document.createElement('div');
        div.classList.add('img');
        div.innerHTML = 
        `
        <h3>${image.title}</h3>
        <img src="imgs/wedding-couple.png" alt="">
        `
        img.appendChild(div);
    }
}

// <img src="https://via.placeholder.com/150/92c952"></img> Site Image