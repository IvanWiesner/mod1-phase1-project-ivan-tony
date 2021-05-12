const asianURL = 'http://localhost:3000/Asian/'
const commentsURL = 'http://localhost:3000/comments/'
const asianDiv = document.getElementById('asian')
const commentsOl = document.querySelector('ol')

fetch(asianURL)
    .then(response => response.json())
    .then(recipes => {

        recipes.forEach(recipe => {

            const cardElement = document.createElement('div')
            cardElement.className = 'card'

            const recipeText = document.createElement('p')
            recipeText.className = 'recipe-text'
            recipeText.innerText = recipe.recipe

            const title = document.createElement('h2')
            title.className = 'recipe-title'
            title.innerText = recipe.title


            const likesPic = document.createElement('img')
            likesPic.className = ('thumbsup')
            likesPic.src = './thumbs-up.png'

            const picture = document.createElement('img')
            picture.className = 'recipe-image'
            picture.src = recipe.picture

            const likesButton = document.createElement('button')
            likesButton.className = 'recipe-likes-button'
            likesButton.append(likesPic)
            likesButton.addEventListener('click', () => {
                const oldLikes = parseInt(likes.innerText)
                const addLikes = oldLikes + 1
                likes.innerText = `${addLikes} Likes`;
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
                fetch(asianURL + recipe.id, options)
            });

            const likesButtonElement = document.createElement('div')
            likesButtonElement.className = 'likes-button-element'

            const likesElement = document.createElement('div')
            likesElement.className = 'likes-element'

            const likes = document.createElement('p')
            likes.className = 'recipe-likes'
            likes.innerText = recipe.likes + ' Likes'

            const unLikesPic = document.createElement('img')
            unLikesPic.src = './thumbs-down.png'
            unLikesPic.className = ('thumbsdown')


            const unLikes = document.createElement('p')
            unLikes.className = 'recipe-dislikes'
            unLikes.innerText = recipe.unlikes + ' Dislikes'

            const unlikesButton = document.createElement('button')
            unlikesButton.className = 'recipe-unlikes-button'
            unlikesButton.append(unLikesPic)
            unlikesButton.addEventListener('click', () => {
                const oldUnLikes = parseInt(unLikes.innerText)
                const addUnLikes = oldUnLikes + 1
                unLikes.innerText = `${addUnLikes} Dislikes`;
                const option = {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        unlikes: addUnLikes
                    })
                }
                fetch(asianURL + recipe.id, option)
            });
            likesElement.append(likes, unLikes)
            likesButtonElement.append(likesButton, unlikesButton)
            cardElement.append(title, picture, recipeText, likesElement, likesButtonElement)
            asianDiv.append(cardElement)
        })
    })
    
const newComments = (comment) => {
    const commentsLi = document.createElement('li')
    commentsLi.innerText = comment.content
    commentsOl.append(commentsLi)
}
const form = document.querySelector('.comment-form')
const textInput = document.querySelector('.comment-input')
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const displayText = textInput.value
    const comment = {
        content: displayText
    }
    const newLi = document.createElement('li')
    newLi.innerText = displayText
    commentsOl.append(newLi)
    form.reset()
    console.log(comment)
    fetch(commentsURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(comment)
    }, )
})