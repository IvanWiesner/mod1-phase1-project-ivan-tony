const italianURL = 'http://localhost:3000/Italian/'
const italianDiv = document.getElementById('italian')


fetch(italianURL)
    .then(response => response.json())
    .then(italianReciepes => {
        italianReciepes.forEach(recipe => {

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

        italianDiv.append(title, picture, likes, unLikes, likesButton, unlikesButton)
    })})

