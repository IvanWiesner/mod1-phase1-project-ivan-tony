const mexicanURL = 'http://localhost:3000/Mexican/'
const mexicanDiv = document.getElementById('mexican')

fetch(mexicanURL)
    .then(response => response.json())
    .then(mexicanReciepes => {
        mexicanReciepes.forEach(recipe => {

        const title = document.createElement('h2')
        title.innerText = recipe.title
        
        const picture = document.createElement('img')
        picture.src = recipe.picture

        const likesButton = document.createElement('button')

        const likes = document.createElement('p')
        likes.innerText = recipe.likes

        const unlikesButton = document.createElement('button')

        const unLikes = document.createElement('p')
        unLikes.innerText = recipe.unlikes

        mexicanDiv.append(title, picture, likes, unLikes, likesButton, unlikesButton)
    })})