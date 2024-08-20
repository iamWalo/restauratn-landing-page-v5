window.addEventListener('load', () => {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
});

// vedios animations
const videos = document.querySelectorAll('.myVideo');
videos.forEach(video => {

    video.currentTime = 1.58;
    video.addEventListener('mouseover', () => {
        video.currentTime = 0;
        video.play();
    });

    video.addEventListener('mouseout', () => {
        video.currentTime = 1.58;
        video.pause();
    });
});
// nav bar  animation
const buttons = document.querySelectorAll('.sidebar nav ul li a');
console.log(buttons);
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttons.classList.remove('clicked');
        button.classList.add('clicked');
    })
})
// recipes sripte

const featuredRecipes = document.querySelector('.featured-recipes');
const trendyRecipes = document.querySelector('.trendy-recipes');
const trendyRecipesLink = document.querySelector('.trendy-recipes-link')
const featuredRecipesLink = document.querySelector('.featured-recipes-link')
const recipesContainerHeaderTitle = document.querySelector('.recipes-container-header-title')

featureTitle = `
                    <h2 class="trendy-recipes-link">Featured <span class="red">Recipes</span></h2>
                <h1>/</h1>
                <h4 class="featured-recipes-link">Trendy Recipes</h4>
    `
trendyTitle = `
                    <h2 class="trendy-recipes-link">Trendy <span class="red">Recipes</span></h2>
                <h1>/</h1>
                <h4 class="featured-recipes-link"> Featured Recipes</h4>
    `
featuredRecipesLink.addEventListener('click', () => {
    featuredRecipesLink.innerHTML = `<h2> Feature <span class="red">Recipes</span></h2>`
    trendyRecipesLink.innerHTML = `<h4>Trendy Recipes</h4>`
    trendyRecipes.classList.remove('show');
    featuredRecipes.classList.add('show');
})

trendyRecipesLink.addEventListener('click', () => {
    trendyRecipes.classList.add('show');
    trendyRecipesLink.innerHTML = `<h2>Trendy <span class="red">Recipes</span></h2>`
    featuredRecipesLink.innerHTML = `<h4>Feature Recipes</h4>`
    featuredRecipes.classList.remove('show');
    console.log('clicked')
})

