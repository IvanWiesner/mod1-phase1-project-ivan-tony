// const asianURL = 'http://localhost:3000/Asian/'
// const italianURL = 'http://localhost:3000/Italian/'
// const medURL = 'http://localhost:3000/Mediterranean/'
// const mexicanURL = 'http://localhost:3000/Mexican/'
// const asianDiv = document.getElementById('asian')
// const italianDiv = document.getElementById('italian')
// const medDiv = document.getElementById('med')
// const mexicanDiv = document.getElementById('mexican')

// fetch(asianURL)
//     .then(response => response.json())
//     .then(asianReciepes => {
//         asianReciepes.forEach(asianRecipe => {

//         const asianTitle = document.createElement('h2')
//         asianTitle.innerText = asianRecipe.title
        
//         const asianPicture = document.createElement('img')
//         asianPicture.src = asianRecipe.picture

//         const asianLikesButton = document.createElement('button')

//         const asianLikes = document.createElement('p')
//         asianLikes.innerText = asianRecipe.likes

//         const asianUnlikesButton = document.createElement('button')

//         const asianUnLikes = document.createElement('p')
//         asianUnLikes.innerText = asianRecipe.unLikes

//         asianDiv.append(asianTitle, asianPicture, asianLikesButton, asianUnlikesButton)
//     })})
    
// // fetch(italianURL)
// //     .then(response => response.json())
// //     .then(italianReciepes => {
// //         italianReciepes.forEach(recipe => {

// //         const title = document.createElement('h2')
// //         title.innerText = recipe.title
        
// //         const picture = document.createElement('img')
// //         picture.src = recipe.picture

// //         const likesButton = document.createElement('button')

// //         const likes = document.createElement('p')
// //         likes.innerText = recipe.likes

// //         const unlikesButton = document.createElement('button')

// //         const unLikes = document.createElement('p')
// //         unLikes.innerText = recipe.unLikes

// //         italianDiv.append(title, picture, likesButton, unlikesButton)
// //     })})

// // fetch(medURL)
// //     .then(response => response.json())
// //     .then(medReciepes => {
// //         medReciepes.forEach(recipe => {

// //         const title = document.createElement('h2')
// //         title.innerText = recipe.title
        
// //         const picture = document.createElement('img')
// //         picture.src = recipe.picture

// //         const likesButton = document.createElement('button')

// //         const likes = document.createElement('p')
// //         likes.innerText = recipe.likes

// //         const unlikesButton = document.createElement('button')

// //         const unLikes = document.createElement('p')
// //         unLikes.innerText = recipe.unLikes

// //         medDiv.append(title, picture, likesButton, unlikesButton)
// //     })})

// // fetch(mexicanURL)
// //     .then(response => response.json())
// //     .then(mexicanReciepes => {
// //         mexicanReciepes.forEach(recipe => {

// //         const title = document.createElement('h2')
// //         title.innerText = recipe.title
        
// //         const picture = document.createElement('img')
// //         picture.src = recipe.picture

// //         const likesButton = document.createElement('button')

// //         const likes = document.createElement('p')
// //         likes.innerText = recipe.likes

// //         const unlikesButton = document.createElement('button')

// //         const unLikes = document.createElement('p')
// //         unLikes.innerText = recipe.unLikes

// //         mexicanDiv.append(title, picture, likesButton, unlikesButton)
// //     })})



const buttonToggle = document.querySelector('.button')
const menuButton = document.querySelector('.menu-button');
const navMenu = document.querySelector('.nav-menu');

menuButton.addEventListener('click', toggleActive);
buttonToggle.addEventListener('click', toggleActive);

function toggleActive(event) {
    event.preventDefault();
    navMenu.classList.toggle('active')
    menuButton.classList.toggle('active');
}