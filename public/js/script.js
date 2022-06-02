import { nextStep } from "./modules/updateSession.js"



const url = 'https://bubble-machine-api-dummy.herokuapp.com/rest/session/'
const menuButton = document.getElementById('menuButton')
const menu = document.querySelector('header nav')
const nextBtn = document.querySelector('#nextStep')








const arrowImg = document.getElementById('#menuButton')
const openMenu = () => {
    menu.classList.toggle('open')
    arrowImg.src = "img/arrowleft.png"
}

menuButton.addEventListener('click', openMenu)

 



// Buttons

nextBtn.addEventListener('click', nextStep)
// resetBtn.addEventListener('click', resetSession)
// sessionBtn.addEventListener('click', makeSession)
// autoBtn.addEventListener('click', autoPlay)




// When clicking on zoomIn button change viewBox to zoom
document.querySelector("#zoomIn").addEventListener('click', (e) => {
  console.log("test");
    document.querySelector("#mysvg").setAttribute("viewBox", "-0.5 -0.5  1 1"); 
  }, false);
  
  // When clicking on zoomOut button change viewBox to zoom
  document.querySelector("#zoomOut").addEventListener('click', (e) => {
    document.querySelector("#mysvg").setAttribute("viewBox", "-1 -1  2 2");
  }, false);


