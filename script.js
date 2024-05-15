const headingEle = document.getElementById("card2-heading");
const dropDownEle = document.querySelector(".dropdown-arrow");
const headingAndArrow = document.querySelector(".heading-and-arrow");

// const contentEle = document.getElementsById("dropdownContent");
const contentA = document.querySelector("#dropdownContent")
console.log(contentA);

dropDownEle.addEventListener("click", toggleDropdown);
function toggleDropdown() {
    // var headingEle = document.getElementById("card2-heading");
    if (contentA.style.display === "none") {
        contentA.style.display = "block";
        contentA.style.color = "white";
        contentA.style.background = 'linear-gradient(to bottom,rgba(28, 34, 221, 0.594),rgba(40, 14, 240, 0.165))'
        //   gradientBox.style.background = "linear-gradient(to right, #ff0000, #00ff00)";
        contentA.style.marginTop = '0'
        contentA.style.border = 'none'
        contentA.style.marginLeft = '1.2rem'
        headingAndArrow.style.marginBottom = 'none'
        headingAndArrow.style.background = 'linear-gradient(to top,rgba(28, 34, 221, 0.594),rgba(40, 14, 240, 0.165))'
        // dropDownEle.style.borderWidth = "14px 0px 14px 14px"
        // dropDownEle.classList.toggle("upwards");
        contentA.style.width = "700px"
       dropDownEle.innerHTML = '<i class="fa-solid fa-caret-down fa-flip-vertical" style="color: #74C0FC;"></i>'


    } else {
        contentA.style.display = "none";
        headingAndArrow.style.background = 'linear-gradient(to bottom,rgba(28, 34, 221, 0.594),rgba(40, 14, 240, 0.165))'
        dropDownEle.innerHTML = '<i class="fa-solid fa-caret-down" style="color: #74C0FC;"></i>'
    }
  }

const greeting = document.getElementById("greetings");

function setGreeting() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    greeting.textContent = "Good morning, ";
  } else if (hour < 18) {
    greeting.textContent = "Good afternoon, ";
  } else {
    greeting.textContent = "Good evening, ";
  }
}
setGreeting();
const name = document.getElementById("name");

function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = " [Enter name]";
  } 
  else {
    name.textContent = localStorage.getItem("name");
  }
}

// setnname
function setName(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } 
  else {
    localStorage.setItem("name", e.target.innerText);
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
getName();

const text = [
    "Believe in yourself.",
    "You are capable of amazing things.",
    "Embrace your uniqueness.",
    "Every day is a new opportunity.",
    "You are enough.",
    "Stay positive and keep going.",
    "Your potential is limitless.",
    "Success is within your reach.",
    "You have the power to create change.",
    "Dream big and work hard.",
    "You are stronger than you think.",
    "Challenges make you stronger.",
    "Your hard work will pay off.",
    "Keep pushing forward.",
    "You are deserving of all good things.",
    "You are a work in progress, and that's okay.",
    "Your journey is unique and valuable.",
    "You are not alone in your struggles.",
    "Celebrate your small victories.",
    "You are the architect of your own destiny."
  ];

  function displayRandomText() {
    const randomIndex = Math.floor(Math.random() * text.length);
    const displayElement = document.getElementById("displayMotivation");
    displayElement.innerText = text[randomIndex];
}

displayRandomText();

setInterval(displayRandomText, 3000);

//right

// Create an img element
const animatedImage = document.createElement('img');
animatedImage.src = 'yoga1.gif'; 
animatedImage.alt = 'Animated Image';
animatedImage.classList.add('animated-image');
const imageContainer = document.getElementById('imageContainer');
imageContainer.appendChild(animatedImage);



