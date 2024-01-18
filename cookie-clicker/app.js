console.log("hello, world");
//overall cookies counter
const btn = document.getElementById("thebutton");
let cpsCounter = document.getElementById("cookiespersecond");
let cookies = 0;
let cookieNum = document.getElementById("cookiecounter");

btn.addEventListener("click", userCount);

function userCount() {
  cookies + 1;
}

function counter() {
  setInterval(function () {
    let cps = 1;
    cookies = cookies + 1;
    console.log("🍪", cookies);
    cookiespersecond.textContent = `CPS: cookies per second:${cps}`;
    cookiecounter.textContent = `Cookies:${cookies}`;
  }, 1000);
}

//cookies per second counter
//cookie button - event listener that increases when clicked
//grid of shop upgrades laid out with: how many purchased, item name, item cost, increase in cookies per second and buy button. Each upgrade should be an object. Event listener that increases when clicked.
//reset button
//saving cookies to local storage
