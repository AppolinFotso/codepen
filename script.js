// /* =================
//   TESTS, LOOK AT THESE
//   Reading tests will always help you discover your requirements.
//   You can make this window bigger.
//    ===================
// */

// const {
//   core: { test, expect, run },
//   prettify,
// } = window.jestLite;

// /* =================
//   FIND ELEMENTS
//   These are all the elements we will look for.
//    ===================
// */
// const getHeader = document.querySelectorAll("header"),
//   getH1 = document.querySelectorAll("h1"),
//   getSiteHeader = document.querySelectorAll(".c-site-header"),
//   getAria = document.querySelectorAll('nav[aria-label="Main Site Links."]'),
//   getMain = document.querySelectorAll("main"),
//   getFooter = document.querySelectorAll("footer"),
//   getSiteFooter = document.querySelectorAll(".c-site-footer"),
//   getIFrame = document.querySelectorAll("iframe"),
//   getImage = document.querySelectorAll("img"),
//   getWords = document.body.innerText;

// last added

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value;
  } else {
    return number_value;
  }
}

document.getElementById("button").addEventListener("click", (event) => {
  let element_list = document.getElementById("list");
  let new_li = document.createElement("li");
  new_li.innerText = getNumberOrString(document.getElementById("text").value);

  element_list.appendChild(new_li);
});

// last added

var amount, item, earnings, expenses, value;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value;
  } else {
    return number_value;
  }
}

amount = [0];
earnings = [0];
expenses = [0];
value = 0;
amount.shift();

document.getElementById("button").addEventListener("click", (event) => {
  amount.push(getNumberOrString(document.getElementById("text").value));
});

document.getElementById("total").addEventListener("click", (event) => {
  amount.forEach((item) => {
    if (item >= value) {
      earnings.push(item);
      let element_list_1 = document.getElementById("list_1");
      let new_li = document.createElement("li");
      new_li.innerText = item;

      element_list_1.appendChild(new_li);
    } else {
      expenses.push(item);
      let element_list_2 = document.getElementById("list_2");
      let new_li2 = document.createElement("li");
      new_li2.innerText = item;

      element_list_2.appendChild(new_li2);
    }
  });
  let element_earnings = document.getElementById("earnings");
  element_earnings.innerText = earnings.reduce((a, b) => a + b, 0);
  let element_expenses = document.getElementById("expenses");
  element_expenses.innerText = expenses.reduce((a, b) => a + b, 0);
  let element_balance = document.getElementById("balance");
  element_balance.innerText = amount.reduce((a, b) => a + b, 0);
});

// last added

var images;

images = [
  "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg?auto=compress&cs=tinysrgb&w=1600",
];
let element_caro = document.getElementById("caro");
element_caro.setAttribute("src", images.slice(-1)[0]);

document.getElementById("next").addEventListener("click", (event) => {
  let element_caro2 = document.getElementById("caro");
  images.push(images[0]);
  element_caro2.setAttribute("src", images.shift());
});

document.getElementById("previous").addEventListener("click", (event) => {
  images.unshift(images.pop());
  let element_caro3 = document.getElementById("caro");
  element_caro3.setAttribute("src", images.slice(-1)[0]);
});

/* =================
   ASSERTIONS 
   These are the things we check are true about your page.
   Read and update your HTML to discover the requirements.
   The tests will run every time you update your code.
   ===================
*/
