// Select the toggle button and portfolio card
const themeToggleButton = document.querySelector('.theme-toggle-btn');
const portfolioCard = document.querySelector('.portfolio-card');
const body = document.querySelector('body');

// Add an event listener to toggle theme on button click
themeToggleButton.addEventListener('click', function() {
    // Toggle the 'dark-mode' class on the body and portfolio card
    body.classList.toggle('dark-mode');
    portfolioCard.classList.toggle('dark-mode');
});


const a = document.querySelector('.profile-img');
const c = 'img/goku.jpg';
const b = 'img/goku2.jpg';

a.addEventListener('click', function(){
    if(a.src === b){
          a.src = c;
    }
    else{
        a.src = b;
    }
});