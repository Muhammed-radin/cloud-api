var myElement = document.body;

myElement.addEventListener("touchstart", startTouch, false);

myElement.addEventListener("touchmove", moveTouch, false);



// Swipe Up / Down / Left / Right

var initialX = null;

var initialY = null;



function startTouch(e) {

  initialX = e.touches[0].clientX;

  initialY = e.touches[0].clientY;

};



function moveTouch(e) {

  if (initialX === null) {

    return;

  }



  if (initialY === null) {

    return;

  }



  var currentX = e.touches[0].clientX;

  var currentY = e.touches[0].clientY;



  var diffX = initialX - currentX;

  var diffY = initialY - currentY;



  if (Math.abs(diffX) > Math.abs(diffY)) {

    // sliding horizontally

    if (diffX > 0) {

      // swiped left

      console.log("swiped left");

    } else {

      // swiped right

      console.log("swiped right");

    }

  } else {

    // sliding vertically

    if (diffY > 0) {

      // swiped up
      document.querySelector('.topic').style.display = 'none'
      document.querySelector('#tags').style.display = 'flex block'
      //document.querySelector('.app-screen').style.top = '35px'
      document.querySelector('.app-screen').style.transform = 'translate(0,-490px)'
      console.log("swiped up");
    } else {
      // swiped down
      document.querySelector('.topic').style.display = 'block'
      document.querySelector('#tags').style.display = 'flex none'
      //document.querySelector('.app-screen').style.top = '535px'
      document.querySelector('.app-screen').style.transform = 'translate(0,0)'
      console.log("swiped down");
    }

  }



  initialX = null;

  initialY = null;



  e.preventDefault();

};

const api_url = 'https://muhammed-radin.github.io/eomapad/data.js'

async function getData() {
  const response = await fetch(api_url);
  console.log(response)
  const data = await response.text();
  var c = 'const app = '+data;
  eval(c)
  console.log(app.name);
}

getData()
