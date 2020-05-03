/* KONAMI CODE */

// Code taken from the compact, written by user called Peter - https://stackoverflow.com/questions/31626852/how-to-add-konami-code-in-a-website-based-on-html

function onKonamiCode(cb) {
  let input = '';
  let key = '38384040373937396665';
  document.addEventListener('keydown', function (e) {
    input += ("" + e.keyCode);
    if (input === key) {
      return cb();
    }
    if (!key.indexOf(input)) return;
    input = ("" + e.keyCode);
  });
}

onKonamiCode(function () {
  alert(' Ah I see you have found my secret, I am very impressed. ')
})



/* PRELOAD CODE */

var images = new Array();

function preloadImages() {

  for (i = 0; i < preloadImages.arguments.length; i++) {

    images[i] = new Image();

    images[i].src = preloadImages.arguments[i];

  }

}

preloadImages("assets/ProfilePIC.png", "assets/NewTwitterOverlay.png", "assets/ProfilePIC.png", "assets/ToDoList.png", "assets/RandoQuote.png", "assets/WeatherApp.png");



/* DELAYED TEXT */

// https://codepen.io/andydean565/pen/PoqBNOB Given permission to use code. Edited to my liking


// delay in ms
let delay = 1000;

// once doc has been loaded
document.addEventListener('DOMContentLoaded', function () {
  console.log('doc ready');
  // run a function
  showDelayed();
}, false);

window.addEventListener('scroll', function (e) {
  showDelayed();
});

// show the delayed text
function showDelayed() {
  // get all elements with the delayed class
  let elements = document.getElementsByClassName('delayed');
  // delay the next bit of code 
  setTimeout(function () {
    // loop through each element 
    for (let element of elements) {
      // check if in viewport
      let bounding = element.getBoundingClientRect();
      if (bounding.bottom < window.innerHeight && bounding.top > 0) {
        // update css to show element 
        element.style.opacity = 1;
      } else {
        // hide elemnet
        element.style.opacity = 0;
      }
    }
  }, delay);
}