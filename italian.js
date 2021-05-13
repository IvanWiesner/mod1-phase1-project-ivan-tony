const italianURL = 'http://localhost:3000/Italian/'
const italianDiv = document.getElementById('italian')
const commentsOl = document.querySelector('ol')


fetch(italianURL)
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

            const formDiv = document.createElement('div')
            formDiv.id = 'comment-section'

            const form = document.createElement('form')
            form.className = 'comment-form'

            const formInput = document.createElement('input')
            formInput.className = 'comment-input'
            formInput.type = 'text'
            formInput.name = 'comment'
            formInput.placeholder = 'Tell Us What You Think'
            
            const formButton = document.createElement('button')
            formButton.className = 'comment-button'
            formButton.type = 'submit'
            formButton.innerText = 'Post'

            const formList = document.createElement('ol')

            formDiv.append(form, formInput, formButton, formList)


            formButton.addEventListener('click', (event) => {
                event.preventDefault();
                const displayText = formInput.value
                const comment = {
                    comment: displayText
                }
    
                fetch(italianURL + recipe.id, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(comment)
                })
                
                const newLi = document.createElement('li')
                newLi.innerText = displayText
                formList.append(newLi)
                form.reset()
            })

            const commentsLi = document.createElement('li')
            commentsLi.innerText = recipe.comment
            formList.append(commentsLi)

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
                fetch(italianURL + recipe.id, options)
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
                fetch(italianURL + recipe.id, option)
            });
            likesElement.append(likes, unLikes)
            likesButtonElement.append(likesButton, unlikesButton)
            cardElement.append(title, picture, recipeText, likesElement, likesButtonElement, formDiv)
            italianDiv.append(cardElement)
        })
    })