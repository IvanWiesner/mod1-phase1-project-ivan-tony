const mexicanURL = 'http://localhost:3000/Mexican/'
const mexicanDiv = document.getElementById('mexican')

fetch(mexicanURL)    
.then(response => response.json())
.then(recipes => {
    recipes.forEach(recipe => {

    const recipeText = document.createElement('p')
    recipeText.innerText = recipe.recipe

    const title = document.createElement('h2')
    title.innerText = recipe.title


    const likesPic = document.createElement('img')
    likesPic.className = ('thumbsup')
    likesPic.src = './thumbs-up.png'

    const picture = document.createElement('img')
    picture.src = recipe.picture

    const likesButton = document.createElement('button')
    likesButton.append(likesPic)
    likesButton.addEventListener('click', () => {
        const oldLikes = parseInt(likes.innerText)
        const addLikes = oldLikes + 1 
        likes.innerText = `${addLikes} likes`;
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                likes: addLikes
            })
        }
    fetch(mexicanURL + recipe.id, options)   
    });


    const likes = document.createElement('p')
    likes.innerText = recipe.likes

    const unLikesPic = document.createElement('img')
    unLikesPic.src = './thumbs-down.png'
    unLikesPic.className = ('thumbsdown')


    const unLikes = document.createElement('p')
    unLikes.innerText = recipe.unlikes

    const unlikesButton = document.createElement('button')
    unlikesButton.append(unLikesPic)
    unlikesButton.addEventListener('click', () => {
        const oldUnLikes = parseInt(unLikes.innerText)
        const addUnLikes = oldUnLikes + 1
        unLikes.innerText = `${addUnLikes} unlikes`;
        const option = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                unlikes : addUnLikes
            })
        }
    fetch(mexicanURL + recipe.id, option)
    });
    mexicanDiv.append(title, picture, recipeText, likes, unLikes, likesButton, unlikesButton)
})})
