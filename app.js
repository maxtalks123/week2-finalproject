console.log("hello, world");
//overall cookies counter
const btn = document.getElementById("thebutton");
const reset = document.getElementById("reset");
const upgrades = document.createElement("div");
const buy = document.createElement("button");
let cpsCounter = document.getElementById("cookiespersecond");
let cookies = 0;
let cookieNum = document.getElementById("cookiecounter");

btn.addEventListener("click", userCount);
reset.addEventListener("click", resetCount);
getCookies();

function counter() {
  setInterval(function () {
    let cps = 1;
    cookies = cookies + 1;
    localStorage.setItem("cookies", cookies);
    console.log("🍪", cookies);
    cookiespersecond.textContent = `CPS: cookies per second:${cps}`;
    cookiecounter.textContent = `Cookies:${cookies}`;
  }, 1000);
}

counter();
function userCount() {
  cookies = cookies + 1;
}

function resetCount() {
  cookies = 0;
}
function getCookies() {
  cookies = JSON.parse(localStorage.getItem("cookies"));
}

function buyItem() {
  if (cookies > shopItems.Cost) {
    const newDiv = document.createElement("div");
    const noBuyMsg = document.createTextNode("Not enough cookies, sorry!");
    newDiv.appendChild(noBuyMsg);
    const currentDiv = document.querySelector("cookie-upgrades");
    document.body.insertBefore(newDiv, currentDiv);
  }
}

//conversation with Sam:
// make render function - creates shop UI, go through shop items array, create a name tag, quantity tag, cost, cps, append child etc. Can create an event listener inside this too, click and then purchase upgrade function (argument of item to purchase) - this will then see if enough cookies, if so then buy and put in local storage, update cookies per second and overall cookie counter.
//create array of purchased items
// add a

//shop:
function createShop() {
  const shopItems = [
    {
      Quantity: 0,
      Item: "Grandma",
      Cost: 10,
      CPS: +1,
      buy,
    },
    {
      Quantity: 0,
      Item: "Oven",
      Cost: 100,
      CPS: +10,
      buy,
    },
    {
      Quantity: 0,
      Item: "Factory",
      Cost: 1000,
      CPS: +100,
      buy,
    },
    {
      Quantity: 0,
      Item: "Mine",
      Cost: 10000,
      CPS: +1000,
      buy,
    },
    {
      Quantity: 0,
      Item: "Bank",
      Cost: 100000,
      CPS: +10000,
      buy,
    },
  ];
  shopItems.forEach(function (element) {
    upgrades.appendChild(element);
  });
  buy.addEventListener("click", buyItem);
}
createShop();
const purchasedItems = [];
// function purchaseItem() {
//   let Quantity = 1;
// }
// push to array
