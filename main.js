/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
const node1 = document.getElementById("node1");
node1.textContent = "I used the getElementById('node1') method to access this";
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
const [node2] = document.getElementsByClassName("node2");
node2.textContent =
  "I used the getElementByClassName('node2') method to access this";
node2.style.border = "1px solid white";

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
const h3s = document.getElementsByTagName("h3");
console.log(h3s);
for (let ele of h3s) {
  ele.textContent =
    "I used the getElementByTagName('h3') method to access all of these";
  ele.style.boxShadow = "0px 0px 20px white";
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this element.createElement() and put this text inside "This node was created using the createElement() method"
const para = document.createElement("p");
para.textContent = "This node was created using the createElement() method";

// TODO: Append the created node to the parent node using the element.appendChild() method
const parent = document.getElementById("parent");
parent.appendChild(para);

// TODO: Create a <a> element using this element.createElement() and put this text inside "I am an <a> tag"
const link = document.createElement("a");
link.textContent = "I am an <a> tag";

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
parent.insertBefore(link, para);

// BONUS: Add a link href to the <a>
link.href = "mailto:b@mail.com";

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
const excercise3 = document.getElementById("exercise3");
const N1 = document.getElementById("N1");
const newPara = document.createElement("p");
newPara.textContent = "New Child Node";

setTimeout(() => excercise3.replaceChild(newPara, N1), 3000);
setTimeout(() => excercise3.removeChild(newPara), 5000);

// TODO: Remove the "New Child Node"

/*----------- Exercise #4: ANIMATIONS ----------- */

// TODO: Write your JavaScript here to make the red box go from right to left



// BONUS - Make the red box go all the way around the perimeter of the green box

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
const btn = document.querySelector("#btn");

function show() {
  const div = document.createElement("div");
  const closeBtn = document.createElement("button");
  closeBtn.textContent = "Close";
  div.classList.add("modal");
  div.textContent =
    "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
  div.appendChild(closeBtn);
  closeBtn.addEventListener("click", hide);
  closeBtn.addEventListener("click", changeBtnText);
  main.appendChild(div);

  btn.disabled = true;

  function changeBtnText() {
    btn.textContent = "Read Again";
  }

  function hide() {
    main.removeChild(div);
    btn.disabled = false;
  }
}


// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
